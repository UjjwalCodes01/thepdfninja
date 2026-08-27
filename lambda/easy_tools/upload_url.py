"""
Upload URL Generator
Generates a presigned S3 POST so clients upload directly to S3, bypassing the
API Gateway 10 MB payload limit.

POST rather than PUT because only the POST form policy can carry a
content-length-range condition, which is what actually enforces the 100 MB
cap. With a presigned PUT the limit would be advisory only.
"""

import json
import os
import uuid
import boto3

from _http import respond

s3 = boto3.client("s3")
BUCKET = os.environ["BUCKET_NAME"]

ALLOWED_CONTENT_TYPES = {
    # existing
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
    # new image formats
    "image/webp",
    "image/heic",
    "image/heif",
    "image/svg+xml",
    # new document formats
    "text/plain",
    "text/csv",
    "text/markdown",
    "application/rtf",
    "application/epub+zip",
    "application/vnd.oasis.opendocument.text",
}

MAX_SIZE_MB = 100
MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024


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

        # A presigned POST is used rather than a presigned PUT because only POST
        # can carry a content-length-range condition. With a PUT URL the size
        # limit is advisory only and a caller can push an object of any size
        # into the bucket.
        presigned = s3.generate_presigned_post(
            Bucket=BUCKET,
            Key=file_key,
            Fields={"Content-Type": content_type},
            Conditions=[
                {"Content-Type": content_type},
                ["content-length-range", 1, MAX_SIZE_BYTES],
            ],
            ExpiresIn=900,
        )

        return _resp(200, {
            "upload_url": presigned["url"],
            "fields": presigned["fields"],
            "file_key": file_key,
            "max_size_mb": MAX_SIZE_MB,
            "max_size_bytes": MAX_SIZE_BYTES,
            "expires_in": 900,
        }, event)

    except Exception as e:
        return _resp(500, {"error": str(e)}, event)


def _resp(status, body, event=None):
    return respond(status, body, event, methods="POST, OPTIONS")
