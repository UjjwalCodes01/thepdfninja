# =================================================================
# S3 BUCKET - Stores uploads + processed outputs
# Auto-deletes everything after 1 hour for privacy + cost
# =================================================================

resource "aws_s3_bucket" "files" {
  bucket        = "${local.prefix}-files-${local.account_id}"
  force_destroy = true
}

resource "aws_s3_bucket_versioning" "files" {
  bucket = aws_s3_bucket.files.id
  versioning_configuration {
    status = "Disabled"
  }
}

# Block all public access - we use presigned URLs only
resource "aws_s3_bucket_public_access_block" "files" {
  bucket                  = aws_s3_bucket.files.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Backstop expiry for user content only.
#
# The real privacy guarantee ("deleted within 1 hour") is enforced by the
# cleanup Lambda in cleanup.tf, which runs every 5 minutes. S3 lifecycle
# cannot express sub-day expiry, so these rules are only a safety net for
# anything the cleanup Lambda missed.
#
# IMPORTANT: these rules are scoped to user-content prefixes. The bucket also
# holds deployment artifacts - _layer/layer.zip (the Lambda layer source) and
# _deploy/ (the EC2 worker code that ec2/setup.sh pulls on boot). A rule with
# an empty prefix would delete those after a day and break the next
# `terraform apply` and any EC2 replacement.
resource "aws_s3_bucket_lifecycle_configuration" "files" {
  bucket = aws_s3_bucket.files.id

  rule {
    id     = "expire-inputs"
    status = "Enabled"

    filter {
      prefix = "inputs/"
    }

    expiration {
      days = 1
    }
  }

  rule {
    id     = "expire-heavy-inputs"
    status = "Enabled"

    filter {
      prefix = "heavy-inputs/"
    }

    expiration {
      days = 1
    }
  }

  rule {
    id     = "expire-outputs"
    status = "Enabled"

    filter {
      prefix = "outputs/"
    }

    expiration {
      days = 1
    }
  }

  rule {
    id     = "abort-incomplete-uploads"
    status = "Enabled"

    filter {
      prefix = ""
    }

    abort_incomplete_multipart_upload {
      days_after_initiation = 1
    }
  }
}

# CORS - allow uploads from any frontend
resource "aws_s3_bucket_cors_configuration" "files" {
  bucket = aws_s3_bucket.files.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST", "HEAD"]
    allowed_origins = ["https://thepdfninja.com", "https://www.thepdfninja.com", "http://localhost:3000", "http://localhost:5173", "http://localhost:8080", "http://127.0.0.1:3000"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}

# No bucket notification.
#
# There used to be one here firing s3:ObjectCreated on heavy-inputs/ into the
# same SQS queue that job_creator writes real jobs to. The worker expects a
# {job_id, tool, file_key} body, so every heavy upload produced a message it
# could not parse. Jobs are enqueued explicitly by the job_creator Lambda when
# the client calls POST /v1/jobs/{tool} — the upload itself must not enqueue
# anything, because at upload time we do not yet know which tool to run.
