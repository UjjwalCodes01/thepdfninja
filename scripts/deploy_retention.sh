#!/bin/bash
# =================================================================
# Deploy the retention sweeper and scope the S3 lifecycle.
#
# Two things this fixes:
#
# 1. The site's privacy policy, terms and every tool page state that
#    files are deleted within 1 hour. Without this Lambda the only
#    mechanism is an S3 lifecycle rule, whose minimum granularity is
#    1 DAY - so the claim was false and files lived 24-48h.
#
# 2. The existing lifecycle rule has an EMPTY prefix, so it also
#    deletes _layer/layer.zip and _deploy/ - the Lambda layer source
#    and the EC2 worker code. That is why _layer/layer.zip is already
#    missing from the bucket. Rules are re-scoped to user content.
#
#   bash scripts/deploy_retention.sh
#
# Safe to re-run.
# =================================================================
set -euo pipefail

REGION="${AWS_REGION:-us-east-1}"
FUNC="pdfninja-cleanup"
ROLE_NAME="pdfninja-lambda-role"
RULE="pdfninja-cleanup-schedule"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

say()  { printf "\n\033[1m==> %s\033[0m\n" "$1"; }
ok()   { printf "    \033[32mok\033[0m   %s\n" "$1"; }
skip() { printf "    \033[33mskip\033[0m %s\n" "$1"; }

say "Preflight"
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
BUCKET="pdfninja-files-${ACCOUNT}"
aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null || { echo "    ERROR: $BUCKET not found" >&2; exit 1; }
ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text)
ok "account $ACCOUNT, bucket $BUCKET"

say "1/4  IAM - ListBucket for the sweeper"
# A SEPARATE inline policy; the existing pdfninja-lambda-policy is untouched.
aws iam put-role-policy --role-name "$ROLE_NAME" \
  --policy-name pdfninja-lambda-cleanup-policy \
  --policy-document "{
    \"Version\":\"2012-10-17\",
    \"Statement\":[{
      \"Effect\":\"Allow\",
      \"Action\":[\"s3:ListBucket\"],
      \"Resource\":\"arn:aws:s3:::${BUCKET}\"
    }]}"
ok "pdfninja-lambda-cleanup-policy attached (existing policies untouched)"

say "2/4  Lambda"
BUILD="$PROJECT_DIR/lambda/build"; mkdir -p "$BUILD"; rm -f "$BUILD/cleanup.zip"
( cd "$PROJECT_DIR/lambda/cleanup" && zip -q "$BUILD/cleanup.zip" handler.py )
ENVV="Variables={BUCKET_NAME=$BUCKET,RETENTION_MINUTES=55}"

if aws lambda get-function --region "$REGION" --function-name "$FUNC" >/dev/null 2>&1; then
    aws lambda update-function-code --region "$REGION" --function-name "$FUNC" \
        --zip-file "fileb://$BUILD/cleanup.zip" >/dev/null
    aws lambda wait function-updated --region "$REGION" --function-name "$FUNC"
    aws lambda update-function-configuration --region "$REGION" --function-name "$FUNC" \
        --environment "$ENVV" --timeout 300 --memory-size 256 >/dev/null
    aws lambda wait function-updated --region "$REGION" --function-name "$FUNC"
    ok "updated $FUNC"
else
    aws lambda create-function --region "$REGION" --function-name "$FUNC" \
        --runtime python3.11 --role "$ROLE_ARN" --handler handler.lambda_handler \
        --timeout 300 --memory-size 256 --zip-file "fileb://$BUILD/cleanup.zip" \
        --environment "$ENVV" --tags project=pdfninja,env=prod >/dev/null
    aws lambda wait function-active --region "$REGION" --function-name "$FUNC"
    ok "created $FUNC"
fi
FUNC_ARN=$(aws lambda get-function --region "$REGION" --function-name "$FUNC" \
           --query 'Configuration.FunctionArn' --output text)

say "3/4  Schedule - every 5 minutes"
# 55-minute retention swept every 5 minutes means nothing is older than 60
# minutes when deleted, which is what the privacy policy promises.
aws events put-rule --region "$REGION" --name "$RULE" \
    --schedule-expression "rate(5 minutes)" \
    --description "Delete user files older than the stated retention" >/dev/null
RULE_ARN=$(aws events describe-rule --region "$REGION" --name "$RULE" --query Arn --output text)
aws lambda add-permission --region "$REGION" --function-name "$FUNC" \
    --statement-id AllowExecutionFromEventBridge --action lambda:InvokeFunction \
    --principal events.amazonaws.com --source-arn "$RULE_ARN" >/dev/null 2>&1 \
    && ok "invoke permission granted" || skip "invoke permission already present"
aws events put-targets --region "$REGION" --rule "$RULE" \
    --targets "Id=cleanup-lambda,Arn=$FUNC_ARN" >/dev/null
ok "rate(5 minutes) -> $FUNC"

say "4/4  Scoping the S3 lifecycle to user content"
# The old rule had an empty prefix, so it expired _layer/ and _deploy/ too.
aws s3api put-bucket-lifecycle-configuration --bucket "$BUCKET" \
  --lifecycle-configuration '{
    "Rules":[
      {"ID":"expire-inputs","Status":"Enabled",
       "Filter":{"Prefix":"inputs/"},"Expiration":{"Days":1}},
      {"ID":"expire-heavy-inputs","Status":"Enabled",
       "Filter":{"Prefix":"heavy-inputs/"},"Expiration":{"Days":1}},
      {"ID":"expire-outputs","Status":"Enabled",
       "Filter":{"Prefix":"outputs/"},"Expiration":{"Days":1}},
      {"ID":"abort-incomplete-uploads","Status":"Enabled",
       "Filter":{"Prefix":""},"AbortIncompleteMultipartUpload":{"DaysAfterInitiation":1}}
    ]}'
ok "lifecycle scoped - _layer/ and _deploy/ no longer expire"

say "Verifying"
aws lambda invoke --region "$REGION" --function-name "$FUNC" \
    --payload '{}' /tmp/cleanup-test.json >/dev/null
printf "    first run: %s\n" "$(cat /tmp/cleanup-test.json)"
echo ""
echo "    The 1-hour deletion claim on the site is now accurate."
