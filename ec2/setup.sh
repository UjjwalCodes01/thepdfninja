#!/bin/bash
# =================================================================
# ThePDFNinja EC2 Worker Bootstrap
# Runs on first boot via user_data
# Installs LibreOffice, Python deps, and sets up systemd worker
# =================================================================
set -euo pipefail

exec > >(tee /var/log/pdfninja-setup.log) 2>&1
echo "===== Starting ThePDFNinja setup ====="

# Pass-in values from Terraform templatefile
export BUCKET_NAME="${bucket_name}"
export QUEUE_URL="${queue_url}"
export TABLE_NAME="${table_name}"
export AWS_REGION="${region}"

# 1. System packages
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y \
    libreoffice \
    python3 \
    python3-pip \
    python3-venv \
    ghostscript \
    qpdf \
    poppler-utils \
    git \
    unzip \
    awscli

# 2. Python dependencies for converters
pip3 install --break-system-packages \
    boto3 \
    pypdf \
    pdf2docx \
    Pillow \
    pdf2image \
    camelot-py[base] \
    openpyxl \
    python-docx

# 3. Create worker user + dir
useradd -m -s /bin/bash worker || true
mkdir -p /opt/pdfninja
mkdir -p /opt/pdfninja/converters

# 4. Pull worker code from S3 (uploaded via deploy script)
aws s3 cp "s3://$BUCKET_NAME/_deploy/worker.py" /opt/pdfninja/worker.py || echo "worker.py not yet uploaded"
aws s3 sync "s3://$BUCKET_NAME/_deploy/converters/" /opt/pdfninja/converters/ || echo "converters not yet uploaded"

chmod +x /opt/pdfninja/worker.py || true
chown -R worker:worker /opt/pdfninja

# 5. Write env file for systemd
cat > /etc/pdfninja.env <<EOF
BUCKET_NAME=$BUCKET_NAME
QUEUE_URL=$QUEUE_URL
TABLE_NAME=$TABLE_NAME
AWS_REGION=$AWS_REGION
AWS_DEFAULT_REGION=$AWS_REGION
EOF

# 6. Write systemd service
cat > /etc/systemd/system/pdfninja.service <<'EOF'
[Unit]
Description=ThePDFNinja SQS Worker
After=network.target

[Service]
Type=simple
User=worker
EnvironmentFile=/etc/pdfninja.env
WorkingDirectory=/opt/pdfninja
ExecStart=/usr/bin/python3 /opt/pdfninja/worker.py
Restart=always
RestartSec=10
StandardOutput=append:/var/log/pdfninja.log
StandardError=append:/var/log/pdfninja.log

[Install]
WantedBy=multi-user.target
EOF

touch /var/log/pdfninja.log
chown worker:worker /var/log/pdfninja.log

# 7. Enable + start
systemctl daemon-reload
systemctl enable pdfninja.service
systemctl start pdfninja.service || echo "Will start once worker.py is uploaded"

echo "===== ThePDFNinja setup complete ====="
echo "Check logs: journalctl -u pdfninja -f"
echo "Or: tail -f /var/log/pdfninja.log"
