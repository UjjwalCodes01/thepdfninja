#!/bin/bash
# =================================================================
# Deploy the reviews feature to the live stack, without Terraform.
#
# Terraform is not usable here: the state file for the production
# account is not available locally, so any plan/apply would try to
# re-create the ~90 resources that already exist. This script only
# ADDS new resources and never modifies anything already running.
#
#   bash scripts/deploy_reviews.sh
#
# Safe to re-run - every step checks whether its resource exists.
# =================================================================
set -euo pipefail

REGION="${AWS_REGION:-us-east-1}"
API_NAME="pdfninja-api"
TABLE="pdfninja-reviews"
TOPIC_NAME="pdfninja-review-alerts"
FUNC="pdfninja-reviews"
ROLE_NAME="pdfninja-lambda-role"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

say()  { printf "\n\033[1m==> %s\033[0m\n" "$1"; }
ok()   { printf "    \033[32mok\033[0m   %s\n" "$1"; }
skip() { printf "    \033[33mskip\033[0m %s\n" "$1"; }

# ---------------------------------------------------------------- preflight
say "Preflight"
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
ok "account $ACCOUNT, region $REGION"

API_ID=$(aws apigateway get-rest-apis --region "$REGION" \
    --query "items[?name=='$API_NAME'].id | [0]" --output text)
if [ "$API_ID" = "None" ] || [ -z "$API_ID" ]; then
    echo "    ERROR: no REST API named $API_NAME in $REGION." >&2
    echo "    Are these the right credentials? Expected the account running thepdfninja.com." >&2
    exit 1
fi
ok "found API $API_ID"

ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text)
ok "lambda role $ROLE_ARN"

# ---------------------------------------------------------------- 1. table
say "1/6  DynamoDB table"
if aws dynamodb describe-table --region "$REGION" --table-name "$TABLE" >/dev/null 2>&1; then
    skip "$TABLE already exists"
else
    aws dynamodb create-table --region "$REGION" \
      --table-name "$TABLE" \
      --billing-mode PAY_PER_REQUEST \
      --attribute-definitions \
          AttributeName=review_id,AttributeType=S \
          AttributeName=status,AttributeType=S \
          AttributeName=created_at,AttributeType=N \
      --key-schema AttributeName=review_id,KeyType=HASH \
      --global-secondary-indexes '[{
          "IndexName":"status-created_at-index",
          "KeySchema":[{"AttributeName":"status","KeyType":"HASH"},
                       {"AttributeName":"created_at","KeyType":"RANGE"}],
          "Projection":{"ProjectionType":"ALL"}}]' \
      --tags Key=project,Value=pdfninja Key=env,Value=prod \
      >/dev/null
    aws dynamodb wait table-exists --region "$REGION" --table-name "$TABLE"
    ok "created $TABLE"

    # TTL only ever fires on the rate-limit markers, which are the only items
    # that carry expires_at. Reviews never do, so they are never expired.
    aws dynamodb update-time-to-live --region "$REGION" --table-name "$TABLE" \
        --time-to-live-specification 'Enabled=true,AttributeName=expires_at' >/dev/null
    ok "TTL enabled on expires_at"

    # Reviews are the one thing here that cannot be regenerated.
    aws dynamodb update-continuous-backups --region "$REGION" --table-name "$TABLE" \
        --point-in-time-recovery-specification PointInTimeRecoveryEnabled=true >/dev/null
    ok "point-in-time recovery on"
fi

# ---------------------------------------------------------------- 2. sns
say "2/6  SNS topic for approval alerts"
TOPIC_ARN=$(aws sns create-topic --region "$REGION" --name "$TOPIC_NAME" \
    --query TopicArn --output text)   # create-topic is idempotent
ok "$TOPIC_ARN"

# ---------------------------------------------------------------- 3. iam
say "3/6  IAM"
# A SEPARATE inline policy. The existing pdfninja-lambda-policy is left
# untouched - overwriting it would strip the permissions the live tools need.
aws iam put-role-policy --role-name "$ROLE_NAME" \
    --policy-name pdfninja-lambda-reviews-policy \
    --policy-document "{
      \"Version\": \"2012-10-17\",
      \"Statement\": [
        {\"Effect\":\"Allow\",
         \"Action\":[\"dynamodb:PutItem\",\"dynamodb:GetItem\",\"dynamodb:Query\"],
         \"Resource\":[\"arn:aws:dynamodb:$REGION:$ACCOUNT:table/$TABLE\",
                       \"arn:aws:dynamodb:$REGION:$ACCOUNT:table/$TABLE/index/*\"]},
        {\"Effect\":\"Allow\",\"Action\":[\"sns:Publish\"],\"Resource\":\"$TOPIC_ARN\"}
      ]}"
ok "pdfninja-lambda-reviews-policy attached (existing policies untouched)"

# ---------------------------------------------------------------- 4. lambda
say "4/6  Lambda"
BUILD="$PROJECT_DIR/lambda/build"
mkdir -p "$BUILD"
rm -f "$BUILD/reviews.zip"
( cd "$PROJECT_DIR/lambda/reviews" && zip -q "$BUILD/reviews.zip" handler.py )
( cd "$PROJECT_DIR/lambda/easy_tools" && zip -q "$BUILD/reviews.zip" _http.py )
ok "packaged $(unzip -l "$BUILD/reviews.zip" | tail -1 | awk '{print $2}') files"

ENVVARS="Variables={REVIEWS_TABLE=$TABLE,NOTIFY_TOPIC_ARN=$TOPIC_ARN,ALLOW_LOCALHOST_ORIGINS=false}"

if aws lambda get-function --region "$REGION" --function-name "$FUNC" >/dev/null 2>&1; then
    aws lambda update-function-code --region "$REGION" --function-name "$FUNC" \
        --zip-file "fileb://$BUILD/reviews.zip" >/dev/null
    aws lambda wait function-updated --region "$REGION" --function-name "$FUNC"
    aws lambda update-function-configuration --region "$REGION" --function-name "$FUNC" \
        --environment "$ENVVARS" >/dev/null
    aws lambda wait function-updated --region "$REGION" --function-name "$FUNC"
    ok "updated $FUNC"
else
    aws lambda create-function --region "$REGION" \
        --function-name "$FUNC" \
        --runtime python3.11 \
        --role "$ROLE_ARN" \
        --handler handler.lambda_handler \
        --timeout 15 --memory-size 256 \
        --zip-file "fileb://$BUILD/reviews.zip" \
        --environment "$ENVVARS" \
        --tags project=pdfninja,env=prod >/dev/null
    aws lambda wait function-active --region "$REGION" --function-name "$FUNC"
    ok "created $FUNC"
fi
FUNC_ARN=$(aws lambda get-function --region "$REGION" --function-name "$FUNC" \
    --query 'Configuration.FunctionArn' --output text)

# ---------------------------------------------------------------- 5. api gw
say "5/6  API Gateway routes"
V1_ID=$(aws apigateway get-resources --region "$REGION" --rest-api-id "$API_ID" \
    --query "items[?path=='/v1'].id | [0]" --output text)
[ "$V1_ID" = "None" ] && { echo "    ERROR: /v1 resource not found" >&2; exit 1; }

RES_ID=$(aws apigateway get-resources --region "$REGION" --rest-api-id "$API_ID" \
    --query "items[?path=='/v1/reviews'].id | [0]" --output text)
if [ "$RES_ID" = "None" ] || [ -z "$RES_ID" ]; then
    RES_ID=$(aws apigateway create-resource --region "$REGION" --rest-api-id "$API_ID" \
        --parent-id "$V1_ID" --path-part reviews --query id --output text)
    ok "created /v1/reviews ($RES_ID)"
else
    skip "/v1/reviews exists ($RES_ID)"
fi

INVOKE_URI="arn:aws:apigateway:$REGION:lambda:path/2015-03-31/functions/$FUNC_ARN/invocations"

for M in GET POST; do
    aws apigateway put-method --region "$REGION" --rest-api-id "$API_ID" \
        --resource-id "$RES_ID" --http-method "$M" --authorization-type NONE >/dev/null 2>&1 || true
    aws apigateway put-integration --region "$REGION" --rest-api-id "$API_ID" \
        --resource-id "$RES_ID" --http-method "$M" \
        --type AWS_PROXY --integration-http-method POST --uri "$INVOKE_URI" >/dev/null
    ok "$M -> $FUNC"
done

# CORS preflight (MOCK), matching the pattern the other routes use.
aws apigateway put-method --region "$REGION" --rest-api-id "$API_ID" \
    --resource-id "$RES_ID" --http-method OPTIONS --authorization-type NONE >/dev/null 2>&1 || true
aws apigateway put-integration --region "$REGION" --rest-api-id "$API_ID" \
    --resource-id "$RES_ID" --http-method OPTIONS --type MOCK \
    --request-templates '{"application/json":"{\"statusCode\": 200}"}' >/dev/null
aws apigateway put-method-response --region "$REGION" --rest-api-id "$API_ID" \
    --resource-id "$RES_ID" --http-method OPTIONS --status-code 200 \
    --response-parameters '{"method.response.header.Access-Control-Allow-Headers":true,"method.response.header.Access-Control-Allow-Methods":true,"method.response.header.Access-Control-Allow-Origin":true}' >/dev/null 2>&1 || true
aws apigateway put-integration-response --region "$REGION" --rest-api-id "$API_ID" \
    --resource-id "$RES_ID" --http-method OPTIONS --status-code 200 \
    --response-parameters '{"method.response.header.Access-Control-Allow-Headers":"'"'"'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"'"'","method.response.header.Access-Control-Allow-Methods":"'"'"'GET,POST,OPTIONS'"'"'","method.response.header.Access-Control-Allow-Origin":"'"'"'*'"'"'"}' >/dev/null
ok "OPTIONS preflight"

aws lambda add-permission --region "$REGION" --function-name "$FUNC" \
    --statement-id AllowAPIGatewayInvokeReviews \
    --action lambda:InvokeFunction --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:$REGION:$ACCOUNT:$API_ID/*/*" >/dev/null 2>&1 \
    && ok "invoke permission granted" || skip "invoke permission already present"

# ---------------------------------------------------------------- 6. deploy
say "6/6  Deploying to the prod stage"
# Additive only: this snapshot contains every existing route unchanged plus
# the new /v1/reviews one.
#
# create-deployment occasionally snapshots the API before a just-created
# resource has propagated, leaving the stage serving 403 "Missing
# Authentication Token" for the new path. Deploy, then confirm the route
# actually answers, and redeploy if it does not.
URL="https://$API_ID.execute-api.$REGION.amazonaws.com/prod/v1/reviews"
for attempt in 1 2 3 4 5; do
    DEP=$(aws apigateway create-deployment --region "$REGION" --rest-api-id "$API_ID" \
        --stage-name prod --description "add /v1/reviews" --query id --output text)
    CODE=$(curl -s -o /dev/null -w '%{http_code}' "$URL" --max-time 20 || echo 000)
    if [ "$CODE" = "200" ]; then
        ok "deployment $DEP live (attempt $attempt)"
        break
    fi
    skip "deployment $DEP not serving yet (HTTP $CODE), retrying"
    if [ "$attempt" = "5" ]; then
        echo "    ERROR: /v1/reviews still returns $CODE after 5 deployments." >&2
        echo "    The resource and integration exist; try one more:" >&2
        echo "      aws apigateway create-deployment --region $REGION --rest-api-id $API_ID --stage-name prod" >&2
        exit 1
    fi
done

say "Done"
echo "    GET  https://$API_ID.execute-api.$REGION.amazonaws.com/prod/v1/reviews"
echo "    POST https://$API_ID.execute-api.$REGION.amazonaws.com/prod/v1/reviews"
echo ""
echo "    Verify:  bash scripts/verify_reviews.sh"
echo "    Moderate: bash scripts/moderate_reviews.sh list"
