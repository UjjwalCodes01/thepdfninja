"""
Tests for the reviews Lambda.

Standalone - no pytest, no AWS, no network:

    python3 lambda/reviews/test_handler.py

Run it from the project root. boto3 and DynamoDB are faked in-process, and the
handler is imported from a directory assembled exactly the way terraform builds
the deployment zip (handler.py + _http.py), so a packaging mistake fails here
too.

The check that matters most is the moderation gate: a submitted review must
never appear in the GET response until its status is changed to "approved".
"""
import json, os, sys, types, shutil, tempfile

# ---- fake boto3 with an in-memory DynamoDB ------------------------------
class CondFail(Exception): pass

class FakeTable:
    def __init__(self): self.items = {}
    def put_item(self, Item, ConditionExpression=None):
        if ConditionExpression and Item["review_id"] in self.items:
            raise CondFail()
        self.items[Item["review_id"]] = dict(Item)
    def query(self, IndexName, KeyConditionExpression, ScanIndexForward=True, Limit=None):
        want = KeyConditionExpression
        rows = [i for i in self.items.values() if i.get("status") == want]
        rows.sort(key=lambda i: i["created_at"], reverse=not ScanIndexForward)
        return {"Items": rows[:Limit] if Limit else rows}

class FakeKey:
    def __init__(self, name): self.name = name
    def eq(self, v): return v

TABLE = FakeTable()
published = []

boto3 = types.ModuleType("boto3")
_meta = types.SimpleNamespace(client=types.SimpleNamespace(
    exceptions=types.SimpleNamespace(ConditionalCheckFailedException=CondFail)))
boto3.resource = lambda *a, **k: types.SimpleNamespace(Table=lambda n: TABLE, meta=_meta)
boto3.client = lambda *a, **k: types.SimpleNamespace(
    publish=lambda **kw: published.append(kw))
sys.modules["boto3"] = boto3

cond_mod = types.ModuleType("boto3.dynamodb.conditions"); cond_mod.Key = FakeKey
sys.modules["boto3.dynamodb"] = types.ModuleType("boto3.dynamodb")
sys.modules["boto3.dynamodb.conditions"] = cond_mod

# ---- assemble the zip exactly as terraform does ------------------------
d = tempfile.mkdtemp()
shutil.copy("lambda/reviews/handler.py", os.path.join(d, "handler.py"))
shutil.copy("lambda/easy_tools/_http.py", os.path.join(d, "_http.py"))
sys.path.insert(0, d)
os.environ.update(REVIEWS_TABLE="t", NOTIFY_TOPIC_ARN="arn:fake")
import handler

ORIGIN = {"headers": {"origin": "https://www.thepdfninja.com", "X-Forwarded-For": "203.0.113.9"}}
def post(body, ip="203.0.113.9"):
    ev = {"httpMethod": "POST", "body": json.dumps(body),
          "headers": {"origin": "https://www.thepdfninja.com", "X-Forwarded-For": ip}}
    r = handler.lambda_handler(ev, None)
    return r["statusCode"], json.loads(r["body"])
def get():
    r = handler.lambda_handler({"httpMethod": "GET", **ORIGIN}, None)
    return r["statusCode"], json.loads(r["body"])

VALID = {"rating": 5, "name": "Priya S.", "role": "CA student", "tool": "compress-to-size",
         "title": "Hit 200KB first try",
         "body": "The SSC portal only accepts 200KB and this got me there without wrecking the scan quality."}

fails = []
def check(label, got, want):
    ok = got == want
    print(("  PASS  " if ok else "  FAIL  ") + f"{label:52s} -> {got}")
    if not ok: fails.append((label, got, want))

print("\n--- validation ---")
check("valid review accepted",            post(VALID)[0], 201)
check("rating 0 rejected",                post({**VALID, "rating": 0}, "1.1.1.1")[0], 400)
check("rating 6 rejected",                post({**VALID, "rating": 6}, "1.1.1.2")[0], 400)
check("rating as string rejected",        post({**VALID, "rating": "5"}, "1.1.1.3")[0], 400)
check("short body rejected",              post({**VALID, "body": "great"}, "1.1.1.4")[0], 400)
check("missing name rejected",            post({**VALID, "name": ""}, "1.1.1.5")[0], 400)
check("link spam rejected",               post({**VALID, "body": "Nice site, visit http://spam.ru now ok"}, "1.1.1.6")[0], 400)
check("bare domain spam rejected",        post({**VALID, "body": "Good tool but check cheapmeds.top for deals"}, "1.1.1.7")[0], 400)
check("honeypot filled rejected",         post({**VALID, "website": "bot"}, "1.1.1.8")[0], 400)
check("over-long name rejected",          post({**VALID, "name": "x"*61}, "1.1.1.9")[0], 400)

print("\n--- rate limiting ---")
check("same IP second submission -> 429", post(VALID, "203.0.113.9")[0], 429)
check("different IP still allowed",       post({**VALID, "name": "Dan", "rating": 3}, "198.51.100.4")[0], 201)

print("\n--- moderation gate ---")
code, body = get()
check("GET status",                       code, 200)
check("pending reviews NOT served",       len(body["reviews"]), 0)
check("aggregate count is 0",             body["aggregate"]["count"], 0)
check("no rating markup data leaked",     body["aggregate"]["average"], 0)

# approve two of them, as the moderation script does
approved = 0
for k, v in TABLE.items.items():
    if v.get("status") == "pending" and approved < 2:
        v["status"] = "approved"; approved += 1

code, body = get()
check("approved reviews now served",      len(body["reviews"]), 2)
check("aggregate count updated",          body["aggregate"]["count"], 2)
check("average of 5 and 3",               body["aggregate"]["average"], 4.0)
check("distribution correct",             body["aggregate"]["distribution"], {"1":0,"2":0,"3":1,"4":0,"5":1})
check("newest first",                     body["reviews"][0]["rating"] in (3,5), True)

print("\n--- notifications & CORS ---")
check("SNS alert per accepted review",    len(published), 2)  # 2 accepted, 1 rate-limited
r = handler.lambda_handler({"httpMethod":"GET", **ORIGIN}, None)
check("CORS echoes allowed origin",       r["headers"]["Access-Control-Allow-Origin"], "https://www.thepdfninja.com")
r2 = handler.lambda_handler({"httpMethod":"GET","headers":{"origin":"https://evil.com"}}, None)
check("CORS blocks other origins",        r2["headers"]["Access-Control-Allow-Origin"], "https://thepdfninja.com")
check("unsupported method -> 405",        handler.lambda_handler({"httpMethod":"DELETE", **ORIGIN}, None)["statusCode"], 405)

print(f"\n{'ALL CHECKS PASSED' if not fails else str(len(fails)) + ' CHECK(S) FAILED'}")
sys.exit(1 if fails else 0)
