"""
Upload URL Generator
Generates a presigned S3 PUT URL so clients upload directly to S3
(bypasses API Gateway 10MB payload limit).
"""

import json
import os
import uuid
import boto3

s3 = boto3.client("s3")
BUCKET = os.environ["BUCKET_NAME"]

ALLOWED_CONTENT_TYPES = {
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/bmp",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/html",
}

MAX_SIZE_MB = 100


def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body") or "{}")
        filename = body.get("filename", "file")
        content_type = body.get("content_type", "application/octet-stream")
        prefix = body.get("prefix", "inputs")  # "inputs" for sync, "heavy-inputs" for async

        if content_type not in ALLOWED_CONTENT_TYPES:
            return _resp(400, {"error": f"Content type {content_type} not allowed"}, event)

        if prefix not in ("inputs", "heavy-inputs"):
            prefix = "inputs"

        # Generate unique key
        file_id = str(uuid.uuid4())
        safe_filename = filename.replace("/", "_").replace("\\", "_")[:100]
        file_key = f"{prefix}/{file_id}/{safe_filename}"

        # Presigned PUT URL (valid 15 min)
        upload_url = s3.generate_presigned_url(
            "put_object",
            Params={
                "Bucket": BUCKET,
                "Key": file_key,
                "ContentType": content_type,
            },
            ExpiresIn=900,
            HttpMethod="PUT",
        )

        return _resp(200, {
            "upload_url": upload_url,
            "file_key": file_key,
            "max_size_mb": MAX_SIZE_MB,
            "expires_in": 900,
        }, event)

    except Exception as e:
        return _resp(500, {"error": str(e)}, event)


ALLOWED_ORIGINS = {
    "https://thepdfninja.com",
    "https://www.thepdfninja.com",
}


def _cors_origin(event):
    origin = (event.get("headers") or {}).get("origin") or \
             (event.get("headers") or {}).get("Origin") or ""
    if origin in ALLOWED_ORIGINS:
        return origin
    if origin.startswith("http://localhost:") or origin.startswith("http://127.0.0.1:"):
        return origin
    return "https://thepdfninja.com"


def _resp(status, body, event=None):
    return {
        "statusCode": status,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": _cors_origin(event or {}),
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        "body": json.dumps(body),
    }
