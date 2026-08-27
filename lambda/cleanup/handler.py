"""
Retention Sweeper
Deletes user files older than RETENTION_MINUTES from the S3 bucket.

This is what actually backs the "your files are deleted within 1 hour"
promise on the site. S3 lifecycle rules cannot express sub-day expiry, so
they only act as a backstop (see terraform/s3.tf); this function is the
primary mechanism and runs on an EventBridge schedule every 5 minutes.

Only user-content prefixes are swept. Deployment artifacts (_layer/,
_deploy/) are deliberately left alone.
"""

import datetime
import logging
import os

import boto3

s3 = boto3.client("s3")

BUCKET = os.environ["BUCKET_NAME"]
RETENTION_MINUTES = int(os.environ.get("RETENTION_MINUTES", "55"))

# Prefixes holding user-uploaded or user-generated content.
SWEPT_PREFIXES = ("inputs/", "heavy-inputs/", "outputs/")

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("cleanup")


def lambda_handler(event, context):
    cutoff = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(
        minutes=RETENTION_MINUTES
    )

    deleted = 0
    scanned = 0
    paginator = s3.get_paginator("list_objects_v2")

    for prefix in SWEPT_PREFIXES:
        batch = []
        for page in paginator.paginate(Bucket=BUCKET, Prefix=prefix):
            for obj in page.get("Contents", []):
                scanned += 1
                if obj["LastModified"] >= cutoff:
                    continue
                batch.append({"Key": obj["Key"]})
                # delete_objects takes at most 1000 keys per call.
                if len(batch) == 1000:
                    deleted += _delete(batch)
                    batch = []
        if batch:
            deleted += _delete(batch)

    log.info("Swept %d objects, deleted %d older than %d minutes",
             scanned, deleted, RETENTION_MINUTES)
    return {"scanned": scanned, "deleted": deleted}


def _delete(batch):
    resp = s3.delete_objects(Bucket=BUCKET, Delete={"Objects": batch, "Quiet": True})
    for err in resp.get("Errors", []):
        log.error("Failed to delete %s: %s", err.get("Key"), err.get("Message"))
    return len(batch) - len(resp.get("Errors", []))
