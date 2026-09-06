"""
OCR Handler - Uses AWS Textract to extract text from PDFs/images.
Works on both image files (JPG, PNG, TIFF) and scanned PDFs.

For PDFs > 1 page, uses async Textract job (StartDocumentTextDetection).
For single-page images, uses sync DetectDocumentText.

Returns extracted plain text + optional layout data.
"""

import json
import logging
import os
import time
import boto3

from _http import respond

log = logging.getLogger()
log.setLevel(logging.INFO)

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

    except ValueError as e:
        # Caller-fixable problems carry their message through.
        return _resp(400, {"error": str(e)}, event)

    except Exception:
        # Anything else is an internal fault. The traceback goes to CloudWatch;
        # the caller gets a generic message so we do not leak Textract job ids,
        # bucket names or AWS status strings.
        log.exception("OCR failed")
        return _resp(500, {"error": "Text extraction failed. Please try again."}, event)


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

    if status["JobStatus"] == "FAILED":
        # Do not surface Textract's own status string — it can name the bucket
        # and job id. The detail is in CloudWatch.
        log.error("Textract job %s failed: %s", job_id, status.get("StatusMessage"))
        raise ValueError("This document could not be read. It may be corrupt or password-protected.")
    if status["JobStatus"] != "SUCCEEDED":
        raise ValueError(
            "This document is taking longer than 90 seconds to process. "
            "Try splitting it into smaller parts and running them separately."
        )

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


def _resp(status, body, event=None):
    return respond(status, body, event, methods="POST, OPTIONS")
