# =================================================================
# OUTPUTS - Print these after apply
# =================================================================

output "api_url" {
  value       = aws_api_gateway_stage.prod.invoke_url
  description = "Base API URL"
}

output "bucket_name" {
  value       = aws_s3_bucket.files.id
  description = "S3 bucket for files"
}

output "queue_url" {
  value       = aws_sqs_queue.heavy_jobs.url
  description = "SQS queue URL for heavy jobs"
}

output "jobs_table" {
  value       = aws_dynamodb_table.jobs.name
  description = "DynamoDB jobs table"
}

output "ec2_public_ip" {
  value       = aws_eip.worker.public_ip
  description = "EC2 worker public IP"
}

output "ec2_ssh" {
  value       = "ssh -i ${var.key_pair_name}.pem ubuntu@${aws_eip.worker.public_ip}"
  description = "SSH command to access worker"
}

output "test_curl_upload" {
  value       = "curl -X POST ${aws_api_gateway_stage.prod.invoke_url}/v1/upload -H 'Content-Type: application/json' -d '{\"filename\":\"test.pdf\",\"content_type\":\"application/pdf\"}'"
  description = "Test command - generate upload URL"
}
