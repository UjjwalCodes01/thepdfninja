"""
Easy Tools Router Lambda
Handles 14 PDF operations synchronously.
Routes /v1/tools/{tool} → appropriate function.

All tools follow the same flow:
1. Receive file_key + options
2. Download from S3 to /tmp
3. Run operation
4. Upload result back to S3
5. Return presigned download URL
"""

import json
import os
import uuid
import tempfile
import subprocess
import boto3

from tools import (
    merge_pdf,
    split_pdf,
    compress_pdf,
    rotate_pdf,
    watermark_pdf,
    protect_pdf,
    unlock_pdf,
    organize_pdf,
    page_numbers_pdf,
    repair_pdf,
    crop_pdf,
    jpg_to_pdf,
    pdf_to_jpg,
    html_to_pdf,
)

s3 = boto3.client("s3")
BUCKET = os.environ["BUCKET_NAME"]

TOOL_MAP = {
    "merge": merge_pdf,
    "split": split_pdf,
    "compress": compress_pdf,
    "rotate": rotate_pdf,
    "watermark": watermark_pdf,
    "protect": protect_pdf,
    "unlock": unlock_pdf,
    "organize": organize_pdf,
    "page-numbers": page_numbers_pdf,
    "repair": repair_pdf,
    "crop": crop_pdf,
    "jpg-to-pdf": jpg_to_pdf,
    "pdf-to-jpg": pdf_to_jpg,
    "html-to-pdf": html_to_pdf,
}


def lambda_handler(event, context):
    try:
        tool = event["pathParameters"]["tool"]
        if tool not in TOOL_MAP:
            return _resp(400, {"error": f"Unknown tool: {tool}", "available": list(TOOL_MAP.keys())}, event)

        body = json.loads(event.get("body") or "{}")
        options = body.get("options", {})

        # Most tools take a single file_key, merge takes file_keys (list)
        file_keys = body.get("file_keys") or ([body["file_key"]] if body.get("file_key") else [])
        if not file_keys and tool != "html-to-pdf":
            return _resp(400, {"error": "file_key or file_keys required"}, event)

        # Download inputs
        with tempfile.TemporaryDirectory() as tmpdir:
            input_paths = []
            for fk in file_keys:
                local_path = os.path.join(tmpdir, os.path.basename(fk))
                s3.download_file(BUCKET, fk, local_path)
                input_paths.append(local_path)

            # Run the tool
            output_path = os.path.join(tmpdir, f"output_{uuid.uuid4()}")
            handler_fn = TOOL_MAP[tool]
            result_path = handler_fn(input_paths, output_path, options)

            # Upload result
            output_key = f"outputs/{uuid.uuid4()}/{os.path.basename(result_path)}"
            s3.upload_file(result_path, BUCKET, output_key)

            # Presigned download URL (1 hr)
            download_url = s3.generate_presigned_url(
                "get_object",
                Params={"Bucket": BUCKET, "Key": output_key},
                ExpiresIn=3600,
            )

            return _resp(200, {
                "tool": tool,
                "download_url": download_url,
                "output_key": output_key,
                "expires_in": 3600,
            }, event)

    except Exception as e:
        import traceback
        return _resp(500, {"error": str(e), "trace": traceback.format_exc()}, event)


ALLOWED_ORIGINS = {
    "https://thepdfninja.com",
    "https://www.thepdfninja.com",
}


def _cors_origin(event):
    """Return the request Origin if allowed, else the production domain."""
    origin = (event.get("headers") or {}).get("origin") or \
             (event.get("headers") or {}).get("Origin") or ""
    if origin in ALLOWED_ORIGINS:
        return origin
    # Allow any localhost port for dev
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
