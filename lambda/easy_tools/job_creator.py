"""
Job Creator - Queues heavy conversion jobs (Word/PPT/Excel via LibreOffice)
Writes job record to DynamoDB, sends message to SQS for EC2 worker to pick up.
"""

import json
import os
import uuid
import time
import boto3

sqs = boto3.client("sqs")
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])

QUEUE_URL = os.environ["QUEUE_URL"]
BUCKET = os.environ["BUCKET_NAME"]

HEAVY_TOOLS = {
    "word-to-pdf",
    "ppt-to-pdf",
    "excel-to-pdf",
    "pdf-to-word",
    "pdf-to-ppt",
    "pdf-to-excel",
    "scan-to-pdf",
    "pdf-to-pdfa",
}


def lambda_handler(event, context):
    try:
        tool = event["pathParameters"]["tool"]
        if tool not in HEAVY_TOOLS:
            return _resp(400, {"error": f"Unknown heavy tool: {tool}"}, event)

        body = json.loads(event.get("body") or "{}")
        # Accept both 'file_key' (singular) and 'file_keys' (array) — frontend sends file_keys
        file_keys_list = body.get("file_keys")
        file_key = body.get("file_key") or (file_keys_list[0] if file_keys_list else None)
        options = body.get("options", {})

        if not file_key:
            return _resp(400, {"error": "file_key required"}, event)

        # Generate job ID
        job_id = str(uuid.uuid4())
        now = int(time.time())
        expires_at = now + 86400  # 24h TTL

        # Write to DynamoDB
        table.put_item(Item={
            "job_id": job_id,
            "tool": tool,
            "file_key": file_key,
            "status": "queued",
            "options": options,
            "created_at": now,
            "expires_at": expires_at,
        })

        # Send to SQS
        sqs.send_message(
            QueueUrl=QUEUE_URL,
            MessageBody=json.dumps({
                "job_id": job_id,
                "tool": tool,
                "file_key": file_key,
                "options": options,
            }),
        )

        return _resp(202, {
            "job_id": job_id,
            "status": "queued",
            "status_url": f"/v1/jobs/status/{job_id}",
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
