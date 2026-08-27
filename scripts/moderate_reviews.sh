#!/bin/bash
# =================================================================
# Review moderation
#
# Nothing a visitor submits appears on the site until it is approved
# here. Run from the project root.
#
#   bash scripts/moderate_reviews.sh list              # pending queue
#   bash scripts/moderate_reviews.sh list approved     # what is live
#   bash scripts/moderate_reviews.sh show <id>
#   bash scripts/moderate_reviews.sh approve <id>
#   bash scripts/moderate_reviews.sh reject <id>
#   bash scripts/moderate_reviews.sh delete <id>
# =================================================================
set -euo pipefail

TABLE="${REVIEWS_TABLE:-pdfninja-reviews}"
CMD="${1:-list}"
ARG="${2:-}"

need_id() {
    if [ -z "$ARG" ]; then
        echo "Error: this command needs a review id." >&2
        echo "Run 'bash scripts/moderate_reviews.sh list' to see them." >&2
        exit 1
    fi
}

set_status() {
    aws dynamodb update-item \
        --table-name "$TABLE" \
        --key "{\"review_id\":{\"S\":\"$ARG\"}}" \
        --update-expression "SET #s = :s" \
        --expression-attribute-names '{"#s":"status"}' \
        --expression-attribute-values "{\":s\":{\"S\":\"$1\"}}" \
        --condition-expression "attribute_exists(review_id)" \
        --output text > /dev/null
}

case "$CMD" in
  list)
      STATUS="${ARG:-pending}"
      echo "=== reviews with status '$STATUS' ==="
      aws dynamodb query \
          --table-name "$TABLE" \
          --index-name "status-created_at-index" \
          --key-condition-expression "#s = :s" \
          --expression-attribute-names '{"#s":"status"}' \
          --expression-attribute-values "{\":s\":{\"S\":\"$STATUS\"}}" \
          --no-scan-index-forward \
          --output json \
      | python3 -c '
import json, sys, datetime

items = json.load(sys.stdin).get("Items", [])
if not items:
    print("  (nothing here)")
    sys.exit()

for it in items:
    def g(key, default=""):
        return it.get(key, {}).get("S", default)

    stars = int(it.get("rating", {}).get("N", "0"))
    meter = ("*" * stars) + ("." * (5 - stars))
    when = datetime.datetime.fromtimestamp(
        int(it["created_at"]["N"])).strftime("%Y-%m-%d %H:%M")
    role = " (" + g("role") + ")" if g("role") else ""

    print("")
    print("  " + meter + "  " + g("name") + role + "   " + when)
    if g("tool"):
        print("    tool:  " + g("tool"))
    if g("title"):
        print("    title: " + g("title"))
    print("    text:  " + g("body").replace("\n", "\n           "))
    print("    id:    " + g("review_id"))

print("")
print("  " + str(len(items)) + " review(s).")
'
      ;;

  show)
      need_id
      aws dynamodb get-item \
          --table-name "$TABLE" \
          --key "{\"review_id\":{\"S\":\"$ARG\"}}" \
          --output json
      ;;

  approve)
      need_id
      set_status approved
      echo "Approved $ARG - it is now live."
      echo "The site caches the review list for 5 minutes, so allow a moment for it to show."
      ;;

  reject)
      need_id
      set_status rejected
      echo "Rejected $ARG - it stays in the table but will never be served."
      ;;

  delete)
      need_id
      read -r -p "Permanently delete review $ARG? [y/N] " confirm
      case "$confirm" in
        [yY]) aws dynamodb delete-item --table-name "$TABLE" \
                  --key "{\"review_id\":{\"S\":\"$ARG\"}}" > /dev/null
              echo "Deleted $ARG." ;;
        *)    echo "Cancelled." ;;
      esac
      ;;

  *)
      sed -n '3,13p' "$0" | sed 's/^# \{0,1\}//'
      exit 1
      ;;
esac
