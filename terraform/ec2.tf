# =================================================================
# EC2 - t3.micro worker for heavy LibreOffice conversions
# Always-on, polls SQS queue 24/7
# =================================================================

# Get latest Ubuntu 22.04 LTS AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# Default VPC + subnet (simplifies setup)
data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# Security group - only SSH from your IP, no inbound otherwise
resource "aws_security_group" "ec2" {
  name        = "${local.prefix}-ec2-sg"
  description = "ThePDFNinja worker SG"
  vpc_id      = data.aws_vpc.default.id

  # SSH - lock down to your IP via variable
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.ssh_allowed_cidr]
    description = "SSH"
  }

  # All outbound (needs S3, SQS, internet for apt)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

variable "ssh_allowed_cidr" {
  type        = string
  description = "CIDR allowed to SSH (your IP/32)"
  default     = "0.0.0.0/0" # CHANGE THIS - put your IP/32
}

variable "key_pair_name" {
  type        = string
  description = "EC2 key pair name (create in console first)"
  default     = "pdfninja-key"
}

# User data - bootstraps the instance on first boot
locals {
  user_data = templatefile("${path.module}/../ec2/setup.sh", {
    bucket_name = aws_s3_bucket.files.id
    queue_url   = aws_sqs_queue.heavy_jobs.url
    table_name  = aws_dynamodb_table.jobs.name
    region      = local.region
  })
}

resource "aws_instance" "worker" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = data.aws_subnets.default.ids[0]
  vpc_security_group_ids = [aws_security_group.ec2.id]
  iam_instance_profile   = aws_iam_instance_profile.ec2.name
  key_name               = var.key_pair_name

  user_data                   = local.user_data
  user_data_replace_on_change = true

  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }

  tags = {
    Name = "${local.prefix}-worker"
  }
}

# Elastic IP - prevents IP change on reboot
resource "aws_eip" "worker" {
  instance = aws_instance.worker.id
  domain   = "vpc"
}
