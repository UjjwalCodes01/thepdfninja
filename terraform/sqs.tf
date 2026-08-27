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
  visibility_timeout_seconds = 600  # 10 min - long enough for any conversion
  message_retention_seconds  = 3600 # 1 hour
  receive_wait_time_seconds  = 20   # Long polling (cheaper)

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.heavy_jobs_dlq.arn
    maxReceiveCount     = 3
  })
}

# No resource policy is attached to this queue. S3 previously needed
# sqs:SendMessage here for a bucket notification that has since been removed
# (see terraform/s3.tf). The only writer now is the job_creator Lambda, which
# is authorised through its own IAM role in iam.tf.
