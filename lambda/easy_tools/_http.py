"""
Shared HTTP/CORS helpers for the API Lambdas.

This used to be copy-pasted into upload_url.py, job_creator.py, job_status.py,
easy_tools/handler.py and ocr/handler.py, which meant any CORS change had to be
made in five places. Each Lambda's deployment zip now includes this module (see
terraform/lambda.tf).
"""

import json
import os

ALLOWED_ORIGINS = {
    "https://thepdfninja.com",
    "https://www.thepdfninja.com",
}

DEFAULT_ORIGIN = "https://thepdfninja.com"

# Localhost is only echoed back when this is explicitly switched on, so a
# developer running the site locally against a dev stack still works while the
# production API does not hand out CORS access to anything on a visitor's own
# machine.
ALLOW_LOCALHOST = os.environ.get("ALLOW_LOCALHOST_ORIGINS", "").lower() == "true"

_LOCALHOST_PREFIXES = ("http://localhost:", "http://127.0.0.1:")


def cors_origin(event):
    """Return the request Origin if it is allowed, else the production domain."""
    headers = (event or {}).get("headers") or {}
    origin = headers.get("origin") or headers.get("Origin") or ""

    if origin in ALLOWED_ORIGINS:
        return origin
    if ALLOW_LOCALHOST and origin.startswith(_LOCALHOST_PREFIXES):
        return origin
    return DEFAULT_ORIGIN


def respond(status, body, event=None, methods="POST, OPTIONS"):
    """Build an API Gateway proxy response with CORS headers."""
    return {
        "statusCode": status,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": cors_origin(event),
            "Access-Control-Allow-Methods": methods,
            "Access-Control-Allow-Headers": "Content-Type",
            "Vary": "Origin",
        },
        "body": json.dumps(body, default=str),
    }
