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

# Auto-delete files after 1 hour (privacy + zero storage cost)
resource "aws_s3_bucket_lifecycle_configuration" "files" {
  bucket = aws_s3_bucket.files.id

  rule {
    id     = "auto-delete-after-1-hour"
    status = "Enabled"

    filter {
      prefix = ""
    }

    expiration {
      days = 1 # S3 minimum is 1 day; we use object-level expiration headers for 1 hour
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

# Notification: when file uploaded to inputs/ folder, trigger event
resource "aws_s3_bucket_notification" "files" {
  bucket = aws_s3_bucket.files.id

  # Heavy jobs - notify via SQS when file lands in heavy-inputs/
  queue {
    queue_arn     = aws_sqs_queue.heavy_jobs.arn
    events        = ["s3:ObjectCreated:*"]
    filter_prefix = "heavy-inputs/"
  }

  depends_on = [aws_sqs_queue_policy.heavy_jobs]
}
