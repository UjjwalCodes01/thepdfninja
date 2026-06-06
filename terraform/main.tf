terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      project    = "pdfninja"
      env        = var.env
      managed_by = "terraform"
    }
  }
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "env" {
  type    = string
  default = "prod"
}

variable "project_prefix" {
  type    = string
  default = "pdfninja"
}

# Get current AWS account info
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

locals {
  prefix     = var.project_prefix
  account_id = data.aws_caller_identity.current.account_id
  region     = data.aws_region.current.name
}
