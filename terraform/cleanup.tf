# =================================================================
# RETENTION SWEEPER
# Enforces the "files deleted within 1 hour" promise made on the site.
# S3 lifecycle has a 1-day minimum, so this Lambda does the real work.
# =================================================================

data "archive_file" "cleanup" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda/cleanup"
  output_path = "${path.module}/../lambda/build/cleanup.zip"
}

resource "aws_lambda_function" "cleanup" {
  function_name = "${local.prefix}-cleanup"
  role          = aws_iam_role.lambda.arn
  handler       = "handler.lambda_handler"
  runtime       = "python3.11"
  timeout       = 300
  memory_size   = 256

  filename         = data.archive_file.cleanup.output_path
  source_code_hash = data.archive_file.cleanup.output_base64sha256

  environment {
    variables = {
      BUCKET_NAME       = aws_s3_bucket.files.id
      RETENTION_MINUTES = tostring(var.retention_minutes)
    }
  }
}

variable "retention_minutes" {
  type        = number
  description = "Age at which user files are deleted. Must match the retention stated in the site's privacy policy."
  default     = 55
}

# Sweep every 5 minutes against a 55-minute retention, so the oldest a file
# can possibly be when deleted is 60 minutes. That keeps the "deleted within
# 1 hour" claim in the privacy policy literally true.
resource "aws_cloudwatch_event_rule" "cleanup" {
  name                = "${local.prefix}-cleanup-schedule"
  description         = "Trigger the retention sweeper"
  schedule_expression = "rate(5 minutes)"
}

resource "aws_cloudwatch_event_target" "cleanup" {
  rule      = aws_cloudwatch_event_rule.cleanup.name
  target_id = "cleanup-lambda"
  arn       = aws_lambda_function.cleanup.arn
}

resource "aws_lambda_permission" "cleanup_events" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cleanup.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.cleanup.arn
}
