# =================================================================
# LAMBDA FUNCTIONS
# Single deployment for all easy tools (one router Lambda)
# Plus dedicated Lambdas for upload-url, job-status, OCR
# =================================================================

# ---------- LAYER: PDF binaries (qpdf, ghostscript, poppler, wkhtmltopdf) ----------
# Build this layer separately using build_layer.sh
# Layer ZIP goes to ../lambda/layer.zip

resource "aws_lambda_layer_version" "pdf_tools" {
  s3_bucket           = aws_s3_bucket.files.id
  s3_key              = "_layer/layer.zip"
  layer_name          = "${local.prefix}-pdf-tools"
  compatible_runtimes = ["python3.11"]
  description         = "pypdf, Pillow, reportlab, pdf2image, PyMuPDF (fitz.Story for HTML)"

  lifecycle {
    create_before_destroy = true
  }
}

# ---------- LAMBDA: Easy Tools Router ----------
# One Lambda handles all 14 easy tools (less cold-start pain)

data "archive_file" "easy_tools" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda/easy_tools"
  output_path = "${path.module}/../lambda/build/easy_tools.zip"
}

resource "aws_lambda_function" "easy_tools" {
  function_name = "${local.prefix}-easy-tools"
  role          = aws_iam_role.lambda.arn
  handler       = "handler.lambda_handler"
  runtime       = "python3.11"
  timeout       = 60
  memory_size   = 2048 # More memory = more CPU

  filename         = data.archive_file.easy_tools.output_path
  source_code_hash = data.archive_file.easy_tools.output_base64sha256

  layers = [aws_lambda_layer_version.pdf_tools.arn]

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.files.id
      REGION      = local.region
    }
  }

  ephemeral_storage {
    size = 10240 # 10GB /tmp - max
  }
}

# ---------- LAMBDA: Upload URL generator ----------

data "archive_file" "upload_url" {
  type        = "zip"
  source_file = "${path.module}/../lambda/easy_tools/upload_url.py"
  output_path = "${path.module}/../lambda/build/upload_url.zip"
}

resource "aws_lambda_function" "upload_url" {
  function_name = "${local.prefix}-upload-url"
  role          = aws_iam_role.lambda.arn
  handler       = "upload_url.lambda_handler"
  runtime       = "python3.11"
  timeout       = 10
  memory_size   = 128

  filename         = data.archive_file.upload_url.output_path
  source_code_hash = data.archive_file.upload_url.output_base64sha256

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.files.id
    }
  }
}

# ---------- LAMBDA: Job creator (queues heavy jobs) ----------

data "archive_file" "job_creator" {
  type        = "zip"
  source_file = "${path.module}/../lambda/easy_tools/job_creator.py"
  output_path = "${path.module}/../lambda/build/job_creator.zip"
}

resource "aws_lambda_function" "job_creator" {
  function_name = "${local.prefix}-job-creator"
  role          = aws_iam_role.lambda.arn
  handler       = "job_creator.lambda_handler"
  runtime       = "python3.11"
  timeout       = 10
  memory_size   = 256

  filename         = data.archive_file.job_creator.output_path
  source_code_hash = data.archive_file.job_creator.output_base64sha256

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.files.id
      QUEUE_URL   = aws_sqs_queue.heavy_jobs.url
      TABLE_NAME  = aws_dynamodb_table.jobs.name
    }
  }
}

# ---------- LAMBDA: Job status checker ----------

data "archive_file" "job_status" {
  type        = "zip"
  source_file = "${path.module}/../lambda/easy_tools/job_status.py"
  output_path = "${path.module}/../lambda/build/job_status.zip"
}

resource "aws_lambda_function" "job_status" {
  function_name = "${local.prefix}-job-status"
  role          = aws_iam_role.lambda.arn
  handler       = "job_status.lambda_handler"
  runtime       = "python3.11"
  timeout       = 10
  memory_size   = 128

  filename         = data.archive_file.job_status.output_path
  source_code_hash = data.archive_file.job_status.output_base64sha256

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.files.id
      TABLE_NAME  = aws_dynamodb_table.jobs.name
    }
  }
}

# ---------- LAMBDA: OCR (uses Textract) ----------

data "archive_file" "ocr" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda/ocr"
  output_path = "${path.module}/../lambda/build/ocr.zip"
}

resource "aws_lambda_function" "ocr" {
  function_name = "${local.prefix}-ocr"
  role          = aws_iam_role.lambda.arn
  handler       = "handler.lambda_handler"
  runtime       = "python3.11"
  timeout       = 120
  memory_size   = 1024

  filename         = data.archive_file.ocr.output_path
  source_code_hash = data.archive_file.ocr.output_base64sha256

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.files.id
    }
  }
}
