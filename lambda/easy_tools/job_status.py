"""
Job Status Checker - Returns current state of a heavy job.
If complete, returns a presigned download URL.
"""

import json
import os
import boto3

from _http import respond

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
            # Generate presigned download URL (valid 1 hour).
            # Content-Disposition is signed in so the browser saves a sensible
            # filename rather than the raw S3 key.
            output_key = item["output_key"]
            ext = os.path.splitext(output_key)[1]
            tool = item.get("tool", "output")
            download_url = s3.generate_presigned_url(
                "get_object",
                Params={
                    "Bucket": BUCKET,
                    "Key": output_key,
                    "ResponseContentDisposition": (
                        f'attachment; filename="thepdfninja_{tool}{ext}"'
                    ),
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


def _resp(status, body, event=None):
    return respond(status, body, event, methods="GET, OPTIONS")
