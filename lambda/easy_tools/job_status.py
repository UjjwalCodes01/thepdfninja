"""
Job Status Checker - Returns current state of a heavy job.
If complete, returns a presigned download URL.
"""

import json
import os
import boto3

s3 = boto3.client("s3")
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])

BUCKET = os.environ["BUCKET_NAME"]


def lambda_handler(event, context):
    try:
        job_id = event["pathParameters"]["job_id"]

        resp = table.get_item(Key={"job_id": job_id})
        item = resp.get("Item")

        if not item:
            return _resp(404, {"error": "Job not found"}, event)

        result = {
            "job_id": job_id,
            "tool": item.get("tool"),
            "status": item.get("status"),
            "created_at": int(item.get("created_at", 0)),
        }

        if item.get("status") == "complete" and item.get("output_key"):
            # Generate presigned download URL (valid 1 hour)
            download_url = s3.generate_presigned_url(
                "get_object",
                Params={
                    "Bucket": BUCKET,
                    "Key": item["output_key"],
                },
                ExpiresIn=3600,
            )
            result["download_url"] = download_url
            result["expires_in"] = 3600

        if item.get("status") == "failed":
            result["error"] = item.get("error", "Unknown error")

        return _resp(200, result, event)

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
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        "body": json.dumps(body, default=str),
    }
