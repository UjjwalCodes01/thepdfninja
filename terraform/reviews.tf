# =================================================================
# CUSTOMER REVIEWS
# A public submit endpoint + a public read endpoint. Everything a
# visitor writes is held at status="pending" and is invisible to the
# site until someone approves it.
# =================================================================

resource "aws_dynamodb_table" "reviews" {
  name         = "${local.prefix}-reviews"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "review_id"

  attribute {
    name = "review_id"
    type = "S"
  }

  attribute {
    name = "status"
    type = "S"
  }

  attribute {
    name = "created_at"
    type = "N"
  }

  # Lets the read endpoint pull approved reviews newest-first without a scan.
  # It is sparse: the rate-limit markers the Lambda writes carry no "status"
  # attribute, so they never appear here.
  global_secondary_index {
    name            = "status-created_at-index"
    hash_key        = "status"
    range_key       = "created_at"
    projection_type = "ALL"
  }

  # Only the rate-limit markers set expires_at. Reviews never do, so TTL
  # cleans up the markers and leaves the reviews alone.
  ttl {
    attribute_name = "expires_at"
    enabled        = true
  }

  point_in_time_recovery {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

# ---------- Notification when a review needs approval ----------

resource "aws_sns_topic" "review_alerts" {
  name = "${local.prefix}-review-alerts"
}

variable "review_notify_email" {
  type        = string
  description = "Address that gets a heads-up when a review is awaiting approval. Leave empty to skip. AWS sends a confirmation link you must click once."
  default     = ""
}

resource "aws_sns_topic_subscription" "review_alerts_email" {
  count     = var.review_notify_email == "" ? 0 : 1
  topic_arn = aws_sns_topic.review_alerts.arn
  protocol  = "email"
  endpoint  = var.review_notify_email
}

# ---------- Lambda ----------

data "archive_file" "reviews" {
  type        = "zip"
  output_path = "${path.module}/../lambda/build/reviews.zip"

  source {
    content  = file("${path.module}/../lambda/reviews/handler.py")
    filename = "handler.py"
  }
  source {
    content  = file("${path.module}/../lambda/easy_tools/_http.py")
    filename = "_http.py"
  }
}

resource "aws_lambda_function" "reviews" {
  function_name = "${local.prefix}-reviews"
  role          = aws_iam_role.lambda.arn
  handler       = "handler.lambda_handler"
  runtime       = "python3.11"
  timeout       = 15
  memory_size   = 256

  filename         = data.archive_file.reviews.output_path
  source_code_hash = data.archive_file.reviews.output_base64sha256

  environment {
    variables = {
      REVIEWS_TABLE           = aws_dynamodb_table.reviews.name
      NOTIFY_TOPIC_ARN        = aws_sns_topic.review_alerts.arn
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }
}

# ---------- IAM ----------

resource "aws_iam_role_policy" "lambda_reviews" {
  name = "${local.prefix}-lambda-reviews-policy"
  role = aws_iam_role.lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:Query",
        ]
        Resource = [
          aws_dynamodb_table.reviews.arn,
          "${aws_dynamodb_table.reviews.arn}/index/*",
        ]
      },
      {
        Effect   = "Allow"
        Action   = ["sns:Publish"]
        Resource = aws_sns_topic.review_alerts.arn
      },
    ]
  })
}

output "reviews_table" {
  value       = aws_dynamodb_table.reviews.name
  description = "DynamoDB table holding customer reviews"
}
