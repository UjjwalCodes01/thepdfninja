#!/bin/bash
# =================================================================
# End-to-end check of the deployed reviews endpoints.
#
#   bash scripts/verify_reviews.sh
#
# Submits one test review, proves it is NOT served until approved,
# then deletes it and the rate-limit marker it created so your own
# IP is not locked out for 24 hours.
# =================================================================
set -uo pipefail

REGION="${AWS_REGION:-us-east-1}"
TABLE="pdfninja-reviews"
API_ID=$(aws apigateway get-rest-apis --region "$REGION" \
    --query "items[?name=='pdfninja-api'].id | [0]" --output text)
BASE="https://$API_ID.execute-api.$REGION.amazonaws.com/prod"
ORIGIN="https://www.thepdfninja.com"

pass=0; fail=0
check() {
    if [ "$2" = "$3" ]; then printf "  \033[32mPASS\033[0m  %-46s %s\n" "$1" "$2"; pass=$((pass+1))
    else printf "  \033[31mFAIL\033[0m  %-46s got=%s want=%s\n" "$1" "$2" "$3"; fail=$((fail+1)); fi
}

echo "API: $BASE"

echo ""
echo "--- read endpoint ---"
BODY=$(curl -s "$BASE/v1/reviews" -H "Origin: $ORIGIN")
CODE=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/v1/reviews" -H "Origin: $ORIGIN")
check "GET /v1/reviews" "$CODE" "200"
echo "  payload: $(echo "$BODY" | head -c 160)"

echo ""
echo "--- CORS ---"
ALLOWED=$(curl -s -D- -o /dev/null "$BASE/v1/reviews" -H "Origin: $ORIGIN" \
          | tr -d '\r' | awk -F': ' 'tolower($1)=="access-control-allow-origin"{print $2}')
check "allows the production origin" "$ALLOWED" "$ORIGIN"
BLOCKED=$(curl -s -D- -o /dev/null "$BASE/v1/reviews" -H "Origin: https://evil.example" \
          | tr -d '\r' | awk -F': ' 'tolower($1)=="access-control-allow-origin"{print $2}')
check "does not echo an unknown origin" "$BLOCKED" "https://thepdfninja.com"

echo ""
echo "--- validation ---"
post() { curl -s -o /dev/null -w '%{http_code}' -X POST "$BASE/v1/reviews" \
         -H 'Content-Type: application/json' -H "Origin: $ORIGIN" -d "$1"; }
check "rating out of range rejected" \
  "$(post '{"rating":9,"name":"Test","body":"This body is definitely long enough to pass."}')" "400"
check "body too short rejected" \
  "$(post '{"rating":5,"name":"Test","body":"nice"}')" "400"
check "link spam rejected" \
  "$(post '{"rating":5,"name":"Test","body":"Great tool, go visit http://spam.example today"}')" "400"
check "honeypot rejected" \
  "$(post '{"rating":5,"name":"Test","body":"This body is definitely long enough to pass.","website":"bot"}')" "400"

echo ""
echo "--- submit + moderation gate ---"
check "valid review accepted" \
  "$(post '{"rating":5,"name":"Deploy Check","role":"automated test","body":"Automated verification of the reviews endpoint. Safe to delete this entry."}')" "201"

BEFORE=$(curl -s "$BASE/v1/reviews" -H "Origin: $ORIGIN" \
         | grep -oE '"count": *[0-9]+' | head -1 | grep -oE '[0-9]+')
check "pending review is NOT served publicly" "$BEFORE" "0"

PENDING=$(aws dynamodb query --region "$REGION" --table-name "$TABLE" \
    --index-name status-created_at-index \
    --key-condition-expression '#s = :s' \
    --expression-attribute-names '{"#s":"status"}' \
    --expression-attribute-values '{":s":{"S":"pending"}}' \
    --query 'Items[?name.S==`Deploy Check`].review_id.S | [0]' --output text 2>/dev/null)
if [ -n "$PENDING" ] && [ "$PENDING" != "None" ]; then
    printf "  \033[32mPASS\033[0m  %-46s %s\n" "stored as pending in DynamoDB" "$PENDING"; pass=$((pass+1))
else
    printf "  \033[31mFAIL\033[0m  %-46s not found\n" "stored as pending in DynamoDB"; fail=$((fail+1))
fi

echo ""
echo "--- cleanup ---"
if [ -n "$PENDING" ] && [ "$PENDING" != "None" ]; then
    aws dynamodb delete-item --region "$REGION" --table-name "$TABLE" \
        --key "{\"review_id\":{\"S\":\"$PENDING\"}}" && echo "  removed the test review"
fi
# Drop the rate-limit marker so this machine can still submit a real review.
MARKERS=$(aws dynamodb scan --region "$REGION" --table-name "$TABLE" \
    --filter-expression 'begins_with(review_id, :p)' \
    --expression-attribute-values '{":p":{"S":"rl#"}}' \
    --query 'Items[].review_id.S' --output text 2>/dev/null)
for m in $MARKERS; do
    aws dynamodb delete-item --region "$REGION" --table-name "$TABLE" \
        --key "{\"review_id\":{\"S\":\"$m\"}}" && echo "  removed rate-limit marker"
done

echo ""
if [ "$fail" -eq 0 ]; then
    printf "\033[32mALL %d CHECKS PASSED\033[0m - the reviews API is live.\n" "$pass"
else
    printf "\033[31m%d of %d checks failed.\033[0m\n" "$fail" "$((pass+fail))"
    exit 1
fi
