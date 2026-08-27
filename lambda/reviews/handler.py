"""
Reviews API

POST /v1/reviews  - submit a review. Always stored with status="pending".
GET  /v1/reviews  - list approved reviews plus the aggregate rating.

Nothing a visitor writes is ever served by the GET endpoint until a human
moves it to status="approved" (see scripts/moderate_reviews.sh). That is what
keeps an unauthenticated, public form from becoming a way to publish spam or
abuse on the site.
"""

import hashlib
import json
import os
import re
import time
import uuid
from decimal import Decimal

import boto3
from boto3.dynamodb.conditions import Key

from _http import respond

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["REVIEWS_TABLE"])
sns = boto3.client("sns")

NOTIFY_TOPIC_ARN = os.environ.get("NOTIFY_TOPIC_ARN", "")

# Field limits. Kept deliberately tight - a review is a paragraph, not an essay.
MAX_NAME = 60
MAX_ROLE = 60
MAX_TITLE = 100
MAX_BODY = 1500
MIN_BODY = 20
MIN_NAME = 2

# How many approved reviews to read when building the page and the average.
# Well above anything this site will realistically hold; raise it with a
# paginated query if it is ever reached.
MAX_APPROVED = 500

# One submission per IP per day.
RATE_LIMIT_WINDOW = 86400

# Obvious link spam. Everything is moderated anyway, but rejecting these up
# front keeps the pending queue readable.
_URL_RE = re.compile(r"(https?://|www\.|\b[a-z0-9-]+\.(?:com|net|org|ru|cn|xyz|top|info)\b)", re.I)


def lambda_handler(event, context):
    method = (event.get("httpMethod") or "").upper()
    try:
        if method == "GET":
            return _list_reviews(event)
        if method == "POST":
            return _create_review(event)
        return respond(405, {"error": "Method not allowed"}, event, _METHODS)
    except ValueError as e:
        return respond(400, {"error": str(e)}, event, _METHODS)
    except Exception:
        import logging
        logging.getLogger().exception("Reviews request failed")
        return respond(500, {"error": "Something went wrong. Please try again."}, event, _METHODS)


_METHODS = "GET, POST, OPTIONS"


# ---------------------------------------------------------------- GET

def _list_reviews(event):
    resp = table.query(
        IndexName="status-created_at-index",
        KeyConditionExpression=Key("status").eq("approved"),
        ScanIndexForward=False,   # newest first
        Limit=MAX_APPROVED,
    )
    items = resp.get("Items", [])

    reviews = [{
        "id": it["review_id"],
        "rating": int(it["rating"]),
        "name": it.get("name", ""),
        "role": it.get("role", ""),
        "tool": it.get("tool", ""),
        "title": it.get("title", ""),
        "body": it.get("body", ""),
        "created_at": int(it["created_at"]),
    } for it in items]

    count = len(reviews)
    distribution = {str(s): 0 for s in range(1, 6)}
    for r in reviews:
        distribution[str(r["rating"])] += 1

    average = round(sum(r["rating"] for r in reviews) / count, 2) if count else 0

    return respond(200, {
        "reviews": reviews,
        "aggregate": {
            "count": count,
            "average": average,
            "distribution": distribution,
        },
    }, event, _METHODS)


# ---------------------------------------------------------------- POST

def _create_review(event):
    body = json.loads(event.get("body") or "{}")

    # Honeypot: a real browser leaves this empty, most bots fill every field.
    if (body.get("website") or "").strip():
        raise ValueError("Submission rejected.")

    rating = body.get("rating")
    if not isinstance(rating, int) or not 1 <= rating <= 5:
        raise ValueError("Please choose a rating between 1 and 5 stars.")

    name = _clean(body.get("name"), MAX_NAME, "Name")
    if len(name) < MIN_NAME:
        raise ValueError("Please enter your name.")

    text = _clean(body.get("body"), MAX_BODY, "Review")
    if len(text) < MIN_BODY:
        raise ValueError(f"Please write at least {MIN_BODY} characters so the review is useful to others.")
    if _URL_RE.search(text):
        raise ValueError("Reviews cannot contain links.")

    role = _clean(body.get("role"), MAX_ROLE, "Role", required=False)
    title = _clean(body.get("title"), MAX_TITLE, "Title", required=False)
    tool = _clean(body.get("tool"), 60, "Tool", required=False)

    now = int(time.time())
    ip = _client_ip(event)

    # Rate limit using a sparse item in this same table. It carries no "status"
    # attribute, so it never shows up in the GSI the GET endpoint queries, and
    # its expires_at is picked up by the table's TTL.
    if ip:
        marker = "rl#" + hashlib.sha256(ip.encode()).hexdigest()[:32]
        try:
            table.put_item(
                Item={"review_id": marker, "expires_at": now + RATE_LIMIT_WINDOW},
                ConditionExpression="attribute_not_exists(review_id)",
            )
        except dynamodb.meta.client.exceptions.ConditionalCheckFailedException:
            return respond(429, {
                "error": "You have already submitted a review recently. Thank you!"
            }, event, _METHODS)

    review_id = str(uuid.uuid4())
    table.put_item(Item={
        "review_id": review_id,
        "status": "pending",
        "created_at": now,
        "rating": Decimal(rating),
        "name": name,
        "role": role,
        "title": title,
        "tool": tool,
        "body": text,
    })

    _notify(review_id, rating, name, text)

    return respond(201, {
        "ok": True,
        "message": "Thanks! Your review has been received and will appear once we have read it.",
    }, event, _METHODS)


# ---------------------------------------------------------------- helpers

def _clean(value, limit, label, required=True):
    if value is None:
        value = ""
    if not isinstance(value, str):
        raise ValueError(f"{label} must be text.")
    value = value.strip()
    if required and not value:
        raise ValueError(f"{label} is required.")
    if len(value) > limit:
        raise ValueError(f"{label} must be {limit} characters or fewer.")
    # Strip control characters so nothing odd reaches the page.
    return "".join(ch for ch in value if ch == "\n" or ord(ch) >= 32)


def _client_ip(event):
    headers = (event.get("headers") or {})
    fwd = headers.get("X-Forwarded-For") or headers.get("x-forwarded-for") or ""
    if fwd:
        return fwd.split(",")[0].strip()
    return ((event.get("requestContext") or {}).get("identity") or {}).get("sourceIp", "")


def _notify(review_id, rating, name, text):
    """Best-effort heads-up that something is waiting for approval."""
    if not NOTIFY_TOPIC_ARN:
        return
    try:
        preview = text[:400] + ("..." if len(text) > 400 else "")
        sns.publish(
            TopicArn=NOTIFY_TOPIC_ARN,
            Subject=f"New {rating}-star review awaiting approval",
            Message=(
                f"{name} left a {rating}-star review.\n\n"
                f"{preview}\n\n"
                f"Review ID: {review_id}\n\n"
                f"Approve it with:\n"
                f"  bash scripts/moderate_reviews.sh approve {review_id}\n\n"
                f"Or list everything pending:\n"
                f"  bash scripts/moderate_reviews.sh list\n"
            ),
        )
    except Exception:
        import logging
        logging.getLogger().warning("Could not send review notification", exc_info=True)
