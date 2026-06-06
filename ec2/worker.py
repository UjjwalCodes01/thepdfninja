"""
ThePDFNinja EC2 Worker
Polls SQS queue for heavy conversion jobs, processes them via LibreOffice/etc,
uploads results to S3, updates job status in DynamoDB.

Runs forever as a systemd service.
"""

import json
import logging
import os
import sys
import tempfile
import time
import traceback
import uuid

import boto3

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "converters"))

from converters import (
    word_to_pdf,
    ppt_to_pdf,
    excel_to_pdf,
    pdf_to_word,
    pdf_to_ppt,
    pdf_to_excel,
    scan_to_pdf,
    pdf_to_pdfa,
)

# ---------- CONFIG ----------
BUCKET = os.environ["BUCKET_NAME"]
QUEUE_URL = os.environ["QUEUE_URL"]
TABLE_NAME = os.environ["TABLE_NAME"]
REGION = os.environ.get("AWS_REGION", "us-east-1")

# ---------- AWS CLIENTS ----------
sqs = boto3.client("sqs", region_name=REGION)
s3 = boto3.client("s3", region_name=REGION)
dynamodb = boto3.resource("dynamodb", region_name=REGION)
table = dynamodb.Table(TABLE_NAME)

# ---------- TOOL ROUTING ----------
TOOL_HANDLERS = {
    "word-to-pdf": word_to_pdf.convert,
    "ppt-to-pdf": ppt_to_pdf.convert,
    "excel-to-pdf": excel_to_pdf.convert,
    "pdf-to-word": pdf_to_word.convert,
    "pdf-to-ppt": pdf_to_ppt.convert,
    "pdf-to-excel": pdf_to_excel.convert,
    "scan-to-pdf": scan_to_pdf.convert,
    "pdf-to-pdfa": pdf_to_pdfa.convert,
}

# ---------- LOGGING ----------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
log = logging.getLogger("worker")


def update_job(job_id, status, **extra):
    """Update DynamoDB job record."""
    expr = "SET #s = :s"
    vals = {":s": status}
    names = {"#s": "status"}
    for k, v in extra.items():
        expr += f", #{k} = :{k}"
        vals[f":{k}"] = v
        names[f"#{k}"] = k
    table.update_item(
        Key={"job_id": job_id},
        UpdateExpression=expr,
        ExpressionAttributeValues=vals,
        ExpressionAttributeNames=names,
    )


def process_message(msg):
    """Process a single SQS message."""
    body = json.loads(msg["Body"])
    job_id = body["job_id"]
    tool = body["tool"]
    file_key = body["file_key"]
    options = body.get("options", {})

    log.info(f"[{job_id}] Starting {tool} for {file_key}")
    update_job(job_id, "processing")

    handler = TOOL_HANDLERS.get(tool)
    if not handler:
        update_job(job_id, "failed", error=f"Unknown tool: {tool}")
        return

    try:
        with tempfile.TemporaryDirectory() as tmpdir:
            # Download input
            local_input = os.path.join(tmpdir, os.path.basename(file_key))
            s3.download_file(BUCKET, file_key, local_input)

            # Run converter
            output_path = os.path.join(tmpdir, f"output_{uuid.uuid4()}")
            result_path = handler(local_input, output_path, options)

            # Upload result
            output_key = f"outputs/{job_id}/{os.path.basename(result_path)}"
            s3.upload_file(result_path, BUCKET, output_key)

            update_job(job_id, "complete", output_key=output_key)
            log.info(f"[{job_id}] Done → {output_key}")

    except Exception as e:
        err_msg = f"{type(e).__name__}: {str(e)}"
        log.error(f"[{job_id}] FAILED: {err_msg}\n{traceback.format_exc()}")
        update_job(job_id, "failed", error=err_msg)


def main():
    log.info(f"Worker starting. Queue: {QUEUE_URL}")

    while True:
        try:
            resp = sqs.receive_message(
                QueueUrl=QUEUE_URL,
                MaxNumberOfMessages=1,
                WaitTimeSeconds=20,  # long-poll
                VisibilityTimeout=600,
            )
            messages = resp.get("Messages", [])
            if not messages:
                continue

            for msg in messages:
                try:
                    process_message(msg)
                except Exception as e:
                    log.error(f"Message processing failed: {e}")

                # Delete from queue regardless (DLQ handles real failures)
                sqs.delete_message(
                    QueueUrl=QUEUE_URL,
                    ReceiptHandle=msg["ReceiptHandle"],
                )

        except Exception as e:
            log.error(f"Polling error: {e}")
            time.sleep(5)


if __name__ == "__main__":
    main()
