# =================================================================
# SQS - Queue for heavy jobs (Word/PPT/Excel conversions)
# EC2 worker polls this queue 24/7
# =================================================================

resource "aws_sqs_queue" "heavy_jobs_dlq" {
  name                      = "${local.prefix}-heavy-jobs-dlq"
  message_retention_seconds = 1209600 # 14 days
}

resource "aws_sqs_queue" "heavy_jobs" {
  name                       = "${local.prefix}-heavy-jobs"
  visibility_timeout_seconds = 600 # 10 min - long enough for any conversion
  message_retention_seconds  = 3600 # 1 hour
  receive_wait_time_seconds  = 20   # Long polling (cheaper)

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.heavy_jobs_dlq.arn
    maxReceiveCount     = 3
  })
}

# Allow S3 to send messages to this queue
resource "aws_sqs_queue_policy" "heavy_jobs" {
  queue_url = aws_sqs_queue.heavy_jobs.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = { Service = "s3.amazonaws.com" }
        Action    = "sqs:SendMessage"
        Resource  = aws_sqs_queue.heavy_jobs.arn
        Condition = {
          ArnEquals = {
            "aws:SourceArn" = aws_s3_bucket.files.arn
          }
        }
      }
    ]
  })
}
