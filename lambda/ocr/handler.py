"""
OCR Handler - Uses AWS Textract to extract text from PDFs/images.
Works on both image files (JPG, PNG, TIFF) and scanned PDFs.

For PDFs > 1 page, uses async Textract job (StartDocumentTextDetection).
For single-page images, uses sync DetectDocumentText.

Returns extracted plain text + optional layout data.
"""

import json
import os
import time
import boto3

textract = boto3.client("textract")
s3 = boto3.client("s3")
BUCKET = os.environ["BUCKET_NAME"]


def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body") or "{}")
        file_key = body.get("file_key")
        if not file_key:
            return _resp(400, {"error": "file_key required"})

        # Detect if PDF (use async) or image (use sync)
        is_pdf = file_key.lower().endswith(".pdf")

        if is_pdf:
            text = _async_textract(file_key)
        else:
            text = _sync_textract(file_key)

        # Save text to S3 as .txt
        import uuid
        output_key = f"outputs/{uuid.uuid4()}/extracted.txt"
        s3.put_object(Bucket=BUCKET, Key=output_key, Body=text.encode("utf-8"),
                      ContentType="text/plain")

        download_url = s3.generate_presigned_url(
            "get_object",
            Params={"Bucket": BUCKET, "Key": output_key},
            ExpiresIn=3600,
        )

        return _resp(200, {
            "tool": "ocr",
            "text": text[:5000],  # Preview - first 5000 chars
            "full_text_url": download_url,
            "char_count": len(text),
        }, event)

    except Exception as e:
        return _resp(500, {"error": str(e)}, event)


def _sync_textract(file_key):
    """Single-page sync OCR for images."""
    resp = textract.detect_document_text(
        Document={"S3Object": {"Bucket": BUCKET, "Name": file_key}}
    )
    lines = [b["Text"] for b in resp["Blocks"] if b["BlockType"] == "LINE"]
    return "\n".join(lines)


def _async_textract(file_key):
    """Multi-page async OCR for PDFs."""
    start = textract.start_document_text_detection(
        DocumentLocation={"S3Object": {"Bucket": BUCKET, "Name": file_key}}
    )
    job_id = start["JobId"]

    # Poll until done (max 90s)
    for _ in range(45):
        time.sleep(2)
        status = textract.get_document_text_detection(JobId=job_id)
        if status["JobStatus"] in ("SUCCEEDED", "FAILED"):
            break

    if status["JobStatus"] != "SUCCEEDED":
        raise RuntimeError(f"Textract failed: {status.get('StatusMessage')}")

    lines = []
    next_token = None
    while True:
        kwargs = {"JobId": job_id}
        if next_token:
            kwargs["NextToken"] = next_token
        resp = textract.get_document_text_detection(**kwargs)
        for b in resp["Blocks"]:
            if b["BlockType"] == "LINE":
                lines.append(b["Text"])
        next_token = resp.get("NextToken")
        if not next_token:
            break

    return "\n".join(lines)


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
