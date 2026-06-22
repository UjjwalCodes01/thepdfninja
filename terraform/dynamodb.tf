# =================================================================
# DYNAMODB - Tracks heavy job status (queued/processing/done/failed)
# =================================================================

resource "aws_dynamodb_table" "jobs" {
  name         = "${local.prefix}-jobs"
  billing_mode = "PAY_PER_REQUEST" # Stays in free tier for low traffic
  hash_key     = "job_id"

  attribute {
    name = "job_id"
    type = "S"
  }

  # TTL - auto-delete job records after 1 hour
  ttl {
    attribute_name = "expires_at"
    enabled        = true
  }

  point_in_time_recovery {
    enabled = false
  }
}
