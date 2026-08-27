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

  # pdf_tools is managed here. Anything in var.extra_lambda_layers was created
  # outside this configuration and is only looked up, so that an apply keeps it
  # attached instead of silently detaching it. pdfninja-image-extras carries
  # pillow-heif and cairosvg; dropping it breaks heic-to-jpg, heic-to-png and
  # svg-to-png in production.
  layers = concat(
    [aws_lambda_layer_version.pdf_tools.arn],
    [for l in data.aws_lambda_layer_version.extra : l.arn],
  )

  environment {
    variables = {
      BUCKET_NAME             = aws_s3_bucket.files.id
      REGION                  = local.region
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }

  ephemeral_storage {
    size = 10240 # 10GB /tmp - max
  }
}

# ---------- LAMBDA: Upload URL generator ----------

data "archive_file" "upload_url" {
  type        = "zip"
  output_path = "${path.module}/../lambda/build/upload_url.zip"

  # Bundles the shared CORS/response helper alongside the handler.
  source {
    content  = file("${path.module}/../lambda/easy_tools/upload_url.py")
    filename = "upload_url.py"
  }
  source {
    content  = file("${path.module}/../lambda/easy_tools/_http.py")
    filename = "_http.py"
  }
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
      BUCKET_NAME             = aws_s3_bucket.files.id
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }
}

# ---------- LAMBDA: Job creator (queues heavy jobs) ----------

data "archive_file" "job_creator" {
  type        = "zip"
  output_path = "${path.module}/../lambda/build/job_creator.zip"

  # Bundles the shared CORS/response helper alongside the handler.
  source {
    content  = file("${path.module}/../lambda/easy_tools/job_creator.py")
    filename = "job_creator.py"
  }
  source {
    content  = file("${path.module}/../lambda/easy_tools/_http.py")
    filename = "_http.py"
  }
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
      BUCKET_NAME             = aws_s3_bucket.files.id
      QUEUE_URL               = aws_sqs_queue.heavy_jobs.url
      TABLE_NAME              = aws_dynamodb_table.jobs.name
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }
}

# ---------- LAMBDA: Job status checker ----------

data "archive_file" "job_status" {
  type        = "zip"
  output_path = "${path.module}/../lambda/build/job_status.zip"

  # Bundles the shared CORS/response helper alongside the handler.
  source {
    content  = file("${path.module}/../lambda/easy_tools/job_status.py")
    filename = "job_status.py"
  }
  source {
    content  = file("${path.module}/../lambda/easy_tools/_http.py")
    filename = "_http.py"
  }
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
      BUCKET_NAME             = aws_s3_bucket.files.id
      TABLE_NAME              = aws_dynamodb_table.jobs.name
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }
}

# ---------- LAMBDA: OCR (uses Textract) ----------

data "archive_file" "ocr" {
  type        = "zip"
  output_path = "${path.module}/../lambda/build/ocr.zip"

  source {
    content  = file("${path.module}/../lambda/ocr/handler.py")
    filename = "handler.py"
  }
  source {
    content  = file("${path.module}/../lambda/easy_tools/_http.py")
    filename = "_http.py"
  }
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
      BUCKET_NAME             = aws_s3_bucket.files.id
      ALLOW_LOCALHOST_ORIGINS = tostring(var.allow_localhost_origins)
    }
  }
}

variable "allow_localhost_origins" {
  type        = bool
  description = "Echo http://localhost:* back in Access-Control-Allow-Origin. Leave false in production; set true only for a local/dev stack."
  default     = false
}

# ---------- LAYERS CREATED OUTSIDE THIS CONFIG ----------
# Looked up, never managed. Set to [] for a fresh environment where these do
# not exist yet.

variable "extra_lambda_layers" {
  type        = list(string)
  description = "Names of existing Lambda layers that must stay attached to the easy-tools function but are not managed by this configuration."
  default     = ["pdfninja-image-extras"]
}

data "aws_lambda_layer_version" "extra" {
  for_each   = toset(var.extra_lambda_layers)
  layer_name = each.value
}
