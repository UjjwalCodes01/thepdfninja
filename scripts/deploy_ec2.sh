#!/bin/bash
# =================================================================
# Deploy EC2 worker code to S3 + restart service on instance
# Run after `terraform apply` succeeds
# =================================================================
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR/terraform"

BUCKET=$(terraform output -raw bucket_name)
EC2_IP=$(terraform output -raw ec2_public_ip)

echo "===== Uploading worker code to s3://$BUCKET/_deploy/ ====="

aws s3 cp "$PROJECT_DIR/ec2/worker.py" "s3://$BUCKET/_deploy/worker.py"
aws s3 sync "$PROJECT_DIR/ec2/converters/" "s3://$BUCKET/_deploy/converters/" \
    --exclude "__pycache__/*"

echo "===== Triggering EC2 to pull latest + restart ====="

# SSH and refresh
ssh -o StrictHostKeyChecking=no ubuntu@"$EC2_IP" <<EOF
    sudo aws s3 cp s3://$BUCKET/_deploy/worker.py /opt/pdfninja/worker.py
    sudo aws s3 sync s3://$BUCKET/_deploy/converters/ /opt/pdfninja/converters/ --delete
    sudo chown -R worker:worker /opt/pdfninja
    sudo systemctl restart pdfninja
    sudo systemctl status pdfninja --no-pager
EOF

echo "===== Done. Tail logs with: ssh ubuntu@$EC2_IP 'sudo journalctl -u pdfninja -f' ====="
