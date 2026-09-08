#!/usr/bin/env bash
# Deploy lambda/easy_tools to the PRODUCTION account and smoke-test the tools
# that were found broken on 2026-09-06 (grayscale, linearize, svg-to-png,
# flatten). Refuses to run against any account other than prod, so a stray
# `aws configure` cannot push this into the wrong stack.
#
#   PROFILE=pdfninja-prod scripts/deploy_easy_tools.sh
#
set -euo pipefail

PROD_ACCOUNT="582054875648"
PROFILE="${PROFILE:-pdfninja-prod}"
FN="pdfninja-easy-tools"
API="https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

acct="$(aws sts get-caller-identity --profile "$PROFILE" --query Account --output text 2>/dev/null || true)"
if [[ "$acct" != "$PROD_ACCOUNT" ]]; then
  echo "refusing: profile '$PROFILE' resolves to account '${acct:-<none>}', not prod $PROD_ACCOUNT" >&2
  echo "add the prod keys as a named profile:  aws configure --profile $PROFILE" >&2
  exit 1
fi

python3 -c "import ast,sys; ast.parse(open('$ROOT/lambda/easy_tools/tools.py').read())"

work="$(mktemp -d)"; trap 'rm -rf "$work"' EXIT
cp "$ROOT"/lambda/easy_tools/*.py "$work/"
( cd "$work" && rm -rf __pycache__ && zip -qr pkg.zip . )

echo "deploying $FN to $PROD_ACCOUNT via profile $PROFILE ..."
aws lambda update-function-code --profile "$PROFILE" --function-name "$FN" \
  --zip-file "fileb://$work/pkg.zip" --query CodeSize --output text
aws lambda wait function-updated --profile "$PROFILE" --function-name "$FN"
echo "deployed."

# ── smoke: stdlib only, so it runs anywhere ────────────────────────────────
python3 - "$API" <<'PY'
import json, sys, urllib.request, urllib.error, uuid, tempfile
API = sys.argv[1]
H = {"Content-Type": "application/json", "Origin": "https://www.thepdfninja.com"}

def upload(data, name, ct):
    req = urllib.request.Request(f"{API}/v1/upload",
        data=json.dumps({"filename": name, "content_type": ct}).encode(), headers=H)
    d = json.load(urllib.request.urlopen(req, timeout=20))
    b = uuid.uuid4().hex; body = b""
    for k, v in d["fields"].items():
        body += f'--{b}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
    body += f'--{b}\r\nContent-Disposition: form-data; name="file"; filename="{name}"\r\nContent-Type: {ct}\r\n\r\n'.encode()
    body += data + f'\r\n--{b}--\r\n'.encode()
    urllib.request.urlopen(urllib.request.Request(d["upload_url"], data=body,
        headers={"Content-Type": f"multipart/form-data; boundary={b}"}), timeout=60)
    return d["file_key"]

def run(tool, key, opt=None):
    req = urllib.request.Request(f"{API}/v1/tools/{tool}",
        data=json.dumps({"file_keys": [key], "options": opt or {}}).encode(), headers=H)
    try:
        r = json.load(urllib.request.urlopen(req, timeout=120))
        out = urllib.request.urlopen(r.get("download_url") or r.get("url"), timeout=60).read()
        return out
    except urllib.error.HTTPError as e:
        print(f"  FAIL  {tool:<14} {e.code} {e.read().decode()[:90]}"); return None

# a minimal but valid one-page PDF with a red rectangle, built by hand
content = b"1 0 0 rg 72 600 200 100 re f BT /F1 12 Tf 72 760 Td (smoke) Tj ET"
objs = [b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
        b"<< /Length %d >>\nstream\n" % len(content) + content + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"]
pdf = b"%PDF-1.4\n"; offs = []
for i, o in enumerate(objs, 1):
    offs.append(len(pdf)); pdf += b"%d 0 obj\n" % i + o + b"\nendobj\n"
xref = len(pdf)
pdf += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objs) + 1)
for o in offs: pdf += b"%010d 00000 n \n" % o
pdf += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (len(objs) + 1, xref)
svg = b'<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80"><circle cx="60" cy="40" r="30" fill="orange"/></svg>'

kp = upload(pdf, "s.pdf", "application/pdf")
ks = upload(svg, "s.svg", "image/svg+xml")
ok = 0
out = run("linearize-pdf", kp)
if out: print(f"  OK    linearize-pdf  {len(out)}b  /Linearized: {b'/Linearized' in out[:1024]}"); ok += 1
out = run("grayscale-pdf", kp)
if out: print(f"  OK    grayscale-pdf  {len(out)}b"); ok += 1
out = run("flatten-pdf", kp)
if out: print(f"  OK    flatten-pdf    {len(out)}b"); ok += 1
out = run("svg-to-png", ks)
if out: print(f"  OK    svg-to-png     {len(out)}b  PNG header: {out[:8] == b'\\x89PNG\\r\\n\\x1a\\n'}"); ok += 1
print(f"\n{ok}/4 passed")
sys.exit(0 if ok == 4 else 1)
PY
