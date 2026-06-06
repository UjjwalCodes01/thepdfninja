# =================================================================
# API GATEWAY - REST API with all routes
# =================================================================

resource "aws_api_gateway_rest_api" "main" {
  name        = "${local.prefix}-api"
  description = "ThePDFNinja file conversion API"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

# ---------- HELPER: Lambda integration template ----------

locals {
  lambda_integrations = {
    upload      = aws_lambda_function.upload_url.invoke_arn
    easy_tools  = aws_lambda_function.easy_tools.invoke_arn
    job_creator = aws_lambda_function.job_creator.invoke_arn
    job_status  = aws_lambda_function.job_status.invoke_arn
    ocr         = aws_lambda_function.ocr.invoke_arn
  }
}

# ---------- /v1 ----------

resource "aws_api_gateway_resource" "v1" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_rest_api.main.root_resource_id
  path_part   = "v1"
}

# ---------- /v1/upload ----------

resource "aws_api_gateway_resource" "upload" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.v1.id
  path_part   = "upload"
}

resource "aws_api_gateway_method" "upload_post" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.upload.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "upload" {
  rest_api_id             = aws_api_gateway_rest_api.main.id
  resource_id             = aws_api_gateway_resource.upload.id
  http_method             = aws_api_gateway_method.upload_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = local.lambda_integrations.upload
}

# CORS OPTIONS preflight for /v1/upload
resource "aws_api_gateway_method" "upload_options" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.upload.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}
resource "aws_api_gateway_integration" "upload_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.upload.id
  http_method = aws_api_gateway_method.upload_options.http_method
  type        = "MOCK"
  request_templates = { "application/json" = "{\"statusCode\": 200}" }
}
resource "aws_api_gateway_method_response" "upload_options_200" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.upload.id
  http_method = aws_api_gateway_method.upload_options.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}
resource "aws_api_gateway_integration_response" "upload_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.upload.id
  http_method = aws_api_gateway_method.upload_options.http_method
  status_code = aws_api_gateway_method_response.upload_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'https://thepdfninja.com'"
  }
  depends_on = [aws_api_gateway_integration.upload_options]
}

# ---------- /v1/tools/{tool-name} (easy tools, sync) ----------

resource "aws_api_gateway_resource" "tools" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.v1.id
  path_part   = "tools"
}

resource "aws_api_gateway_resource" "tool_name" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.tools.id
  path_part   = "{tool}"
}

resource "aws_api_gateway_method" "tools_post" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.tool_name.id
  http_method   = "POST"
  authorization = "NONE"

  request_parameters = {
    "method.request.path.tool" = true
  }
}

resource "aws_api_gateway_integration" "tools" {
  rest_api_id             = aws_api_gateway_rest_api.main.id
  resource_id             = aws_api_gateway_resource.tool_name.id
  http_method             = aws_api_gateway_method.tools_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = local.lambda_integrations.easy_tools
}

# CORS OPTIONS preflight for /v1/tools/{tool}
resource "aws_api_gateway_method" "tools_options" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.tool_name.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}
resource "aws_api_gateway_integration" "tools_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.tool_name.id
  http_method = aws_api_gateway_method.tools_options.http_method
  type        = "MOCK"
  request_templates = { "application/json" = "{\"statusCode\": 200}" }
}
resource "aws_api_gateway_method_response" "tools_options_200" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.tool_name.id
  http_method = aws_api_gateway_method.tools_options.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}
resource "aws_api_gateway_integration_response" "tools_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.tool_name.id
  http_method = aws_api_gateway_method.tools_options.http_method
  status_code = aws_api_gateway_method_response.tools_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'https://thepdfninja.com'"
  }
  depends_on = [aws_api_gateway_integration.tools_options]
}

# ---------- /v1/jobs (POST creates heavy job) ----------

resource "aws_api_gateway_resource" "jobs" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.v1.id
  path_part   = "jobs"
}

resource "aws_api_gateway_resource" "jobs_tool" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.jobs.id
  path_part   = "{tool}"
}

resource "aws_api_gateway_method" "jobs_post" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.jobs_tool.id
  http_method   = "POST"
  authorization = "NONE"

  request_parameters = {
    "method.request.path.tool" = true
  }
}

resource "aws_api_gateway_integration" "jobs_create" {
  rest_api_id             = aws_api_gateway_rest_api.main.id
  resource_id             = aws_api_gateway_resource.jobs_tool.id
  http_method             = aws_api_gateway_method.jobs_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = local.lambda_integrations.job_creator
}

# CORS OPTIONS preflight for /v1/jobs/{tool}
resource "aws_api_gateway_method" "jobs_options" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.jobs_tool.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}
resource "aws_api_gateway_integration" "jobs_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_tool.id
  http_method = aws_api_gateway_method.jobs_options.http_method
  type        = "MOCK"
  request_templates = { "application/json" = "{\"statusCode\": 200}" }
}
resource "aws_api_gateway_method_response" "jobs_options_200" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_tool.id
  http_method = aws_api_gateway_method.jobs_options.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}
resource "aws_api_gateway_integration_response" "jobs_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_tool.id
  http_method = aws_api_gateway_method.jobs_options.http_method
  status_code = aws_api_gateway_method_response.jobs_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'https://thepdfninja.com'"
  }
  depends_on = [aws_api_gateway_integration.jobs_options]
}

# ---------- /v1/jobs/status/{job-id} (GET status) ----------

resource "aws_api_gateway_resource" "jobs_status" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.jobs.id
  path_part   = "status"
}

resource "aws_api_gateway_resource" "jobs_status_id" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.jobs_status.id
  path_part   = "{job_id}"
}

resource "aws_api_gateway_method" "jobs_status_get" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.jobs_status_id.id
  http_method   = "GET"
  authorization = "NONE"

  request_parameters = {
    "method.request.path.job_id" = true
  }
}

resource "aws_api_gateway_integration" "jobs_status" {
  rest_api_id             = aws_api_gateway_rest_api.main.id
  resource_id             = aws_api_gateway_resource.jobs_status_id.id
  http_method             = aws_api_gateway_method.jobs_status_get.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = local.lambda_integrations.job_status
}

# CORS OPTIONS preflight for /v1/jobs/status/{job_id}
resource "aws_api_gateway_method" "jobs_status_options" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.jobs_status_id.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}
resource "aws_api_gateway_integration" "jobs_status_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_status_id.id
  http_method = aws_api_gateway_method.jobs_status_options.http_method
  type        = "MOCK"
  request_templates = { "application/json" = "{\"statusCode\": 200}" }
}
resource "aws_api_gateway_method_response" "jobs_status_options_200" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_status_id.id
  http_method = aws_api_gateway_method.jobs_status_options.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}
resource "aws_api_gateway_integration_response" "jobs_status_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.jobs_status_id.id
  http_method = aws_api_gateway_method.jobs_status_options.http_method
  status_code = aws_api_gateway_method_response.jobs_status_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'https://thepdfninja.com'"
  }
  depends_on = [aws_api_gateway_integration.jobs_status_options]
}

# ---------- /v1/ocr ----------

resource "aws_api_gateway_resource" "ocr" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_resource.v1.id
  path_part   = "ocr"
}

resource "aws_api_gateway_method" "ocr_post" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.ocr.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "ocr" {
  rest_api_id             = aws_api_gateway_rest_api.main.id
  resource_id             = aws_api_gateway_resource.ocr.id
  http_method             = aws_api_gateway_method.ocr_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = local.lambda_integrations.ocr
}

# CORS OPTIONS preflight for /v1/ocr
resource "aws_api_gateway_method" "ocr_options" {
  rest_api_id   = aws_api_gateway_rest_api.main.id
  resource_id   = aws_api_gateway_resource.ocr.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}
resource "aws_api_gateway_integration" "ocr_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.ocr.id
  http_method = aws_api_gateway_method.ocr_options.http_method
  type        = "MOCK"
  request_templates = { "application/json" = "{\"statusCode\": 200}" }
}
resource "aws_api_gateway_method_response" "ocr_options_200" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.ocr.id
  http_method = aws_api_gateway_method.ocr_options.http_method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}
resource "aws_api_gateway_integration_response" "ocr_options" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  resource_id = aws_api_gateway_resource.ocr.id
  http_method = aws_api_gateway_method.ocr_options.http_method
  status_code = aws_api_gateway_method_response.ocr_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'https://thepdfninja.com'"
  }
  depends_on = [aws_api_gateway_integration.ocr_options]
}

# ---------- LAMBDA PERMISSIONS (allow API Gateway to invoke) ----------

resource "aws_lambda_permission" "upload" {
  statement_id  = "AllowAPIGatewayInvokeUpload"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.upload_url.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.main.execution_arn}/*/*"
}

resource "aws_lambda_permission" "easy_tools" {
  statement_id  = "AllowAPIGatewayInvokeEasy"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.easy_tools.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.main.execution_arn}/*/*"
}

resource "aws_lambda_permission" "job_creator" {
  statement_id  = "AllowAPIGatewayInvokeJobCreator"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.job_creator.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.main.execution_arn}/*/*"
}

resource "aws_lambda_permission" "job_status" {
  statement_id  = "AllowAPIGatewayInvokeJobStatus"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.job_status.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.main.execution_arn}/*/*"
}

resource "aws_lambda_permission" "ocr" {
  statement_id  = "AllowAPIGatewayInvokeOCR"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ocr.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.main.execution_arn}/*/*"
}

# ---------- DEPLOYMENT + STAGE ----------

resource "aws_api_gateway_deployment" "main" {
  rest_api_id = aws_api_gateway_rest_api.main.id

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.v1.id,
      aws_api_gateway_resource.upload.id,
      aws_api_gateway_resource.tools.id,
      aws_api_gateway_resource.tool_name.id,
      aws_api_gateway_resource.jobs.id,
      aws_api_gateway_resource.jobs_tool.id,
      aws_api_gateway_resource.jobs_status_id.id,
      aws_api_gateway_resource.ocr.id,
      aws_api_gateway_integration.upload.id,
      aws_api_gateway_integration.tools.id,
      aws_api_gateway_integration.jobs_create.id,
      aws_api_gateway_integration.jobs_status.id,
      aws_api_gateway_integration.ocr.id,
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_api_gateway_integration.upload,
    aws_api_gateway_integration.tools,
    aws_api_gateway_integration.jobs_create,
    aws_api_gateway_integration.jobs_status,
    aws_api_gateway_integration.ocr,
  ]
}

resource "aws_api_gateway_stage" "prod" {
  deployment_id = aws_api_gateway_deployment.main.id
  rest_api_id   = aws_api_gateway_rest_api.main.id
  stage_name    = "prod"
}

# Throttling - prevent abuse
resource "aws_api_gateway_method_settings" "all" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  stage_name  = aws_api_gateway_stage.prod.stage_name
  method_path = "*/*"

  settings {
    throttling_rate_limit  = 50  # req/sec
    throttling_burst_limit = 100
    metrics_enabled        = true
    logging_level          = "ERROR"
  }
}

# Enable API Gateway account-level CloudWatch role
resource "aws_api_gateway_account" "main" {
  cloudwatch_role_arn = aws_iam_role.apigw_logs.arn
}
