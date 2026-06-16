# =================================================================
# Deploy EC2 worker code to S3 + restart service on instance
# PowerShell version of deploy_ec2.sh
# Run after `terraform apply` succeeds, from project root:
#   .\scripts\deploy_ec2.ps1
# =================================================================
$ErrorActionPreference = "Stop"

$PROJECT_DIR = (Resolve-Path "$PSScriptRoot\..").Path
Push-Location "$PROJECT_DIR\terraform"

try {
    $BUCKET = terraform output -raw bucket_name
    $EC2_IP = terraform output -raw ec2_public_ip
    $KEY    = "$env:USERPROFILE\.ssh\pdfninja-key.pem"
} finally {
    Pop-Location
}

Write-Host "===== Uploading worker code to s3://$BUCKET/_deploy/ =====" -ForegroundColor Cyan

aws s3 cp "$PROJECT_DIR\ec2\worker.py" "s3://$BUCKET/_deploy/worker.py"
aws s3 sync "$PROJECT_DIR\ec2\converters\" "s3://$BUCKET/_deploy/converters/" `
    --exclude "__pycache__/*"

Write-Host "===== Triggering EC2 to pull latest + restart =====" -ForegroundColor Cyan

# Build the SSH commands
$sshCmds = @"
sudo aws s3 cp s3://$BUCKET/_deploy/worker.py /opt/pdfninja/worker.py
sudo aws s3 sync s3://$BUCKET/_deploy/converters/ /opt/pdfninja/converters/ --delete
sudo chown -R worker:worker /opt/pdfninja
sudo su - worker -c 'pip3 install markdown'
sudo systemctl restart pdfninja
sudo systemctl status pdfninja --no-pager
"@

# Write to temp file then SSH with stdin redirect (Windows-safe)
$tmpScript = "$env:TEMP\pdfninja_deploy_cmds.sh"
$sshCmds | Out-File -Encoding utf8 -FilePath $tmpScript -NoNewline

# Use cmd.exe to do the stdin redirect (PowerShell doesn't support < for ssh)
$sshArgs = "-o StrictHostKeyChecking=no -i `"$KEY`" ubuntu@$EC2_IP bash -s"
Get-Content $tmpScript | & ssh -o StrictHostKeyChecking=no -i $KEY "ubuntu@$EC2_IP" "bash -s"

Remove-Item $tmpScript -ErrorAction SilentlyContinue

Write-Host "===== Done. =====" -ForegroundColor Green
Write-Host "Tail logs with: ssh -i $KEY ubuntu@$EC2_IP 'sudo journalctl -u pdfninja -f'"
