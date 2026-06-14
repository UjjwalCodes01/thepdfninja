#!/bin/bash
# =================================================================
# Build Lambda layer with binaries + Python deps
# Run this from project root: bash scripts/build_layer.sh
# =================================================================
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LAYER_DIR="$PROJECT_DIR/lambda/layer_build"
LAYER_ZIP="$PROJECT_DIR/lambda/layer.zip"

echo "===== Building Lambda layer ====="
rm -rf "$LAYER_DIR" "$LAYER_ZIP"
mkdir -p "$LAYER_DIR/python"
mkdir -p "$LAYER_DIR/bin"
mkdir -p "$LAYER_DIR/lib"

# 1. Python deps + system libs using Docker (matches Lambda runtime)
echo "[1/3] Installing Python deps + native libs via Docker..."
docker run --rm \
    -v "$LAYER_DIR/python":/out \
    -v "$PROJECT_DIR/lambda/easy_tools/requirements.txt":/req.txt \
    --platform linux/amd64 \
    public.ecr.aws/sam/build-python3.11:latest \
    bash -c "
      apt-get update -qq && \
      apt-get install -y -q libcairo2 libpango-1.0-0 libpangocairo-1.0-0 \
                            libgdk-pixbuf2.0-0 libheif-dev && \
      pip install -r /req.txt -t /out
    "

# 2. Download pre-built binaries (qpdf, ghostscript, poppler, wkhtmltopdf)
echo "[2/3] Downloading binaries..."

# Ghostscript - from awslabs lambda-ghostscript layer
curl -sL "https://github.com/shelfio/ghostscript-lambda-layer/releases/latest/download/layer.zip" \
    -o /tmp/gs.zip
unzip -oq /tmp/gs.zip -d /tmp/gs/
cp -r /tmp/gs/bin/* "$LAYER_DIR/bin/" 2>/dev/null || true
cp -r /tmp/gs/lib/* "$LAYER_DIR/lib/" 2>/dev/null || true

# qpdf - from precompiled binaries
curl -sL "https://github.com/qpdf/qpdf/releases/download/v11.9.1/qpdf-11.9.1-bin-linux-x86_64.zip" \
    -o /tmp/qpdf.zip
unzip -oq /tmp/qpdf.zip -d /tmp/qpdf/
cp /tmp/qpdf/qpdf-*/bin/qpdf "$LAYER_DIR/bin/" || echo "qpdf copy failed - install via apt in Docker instead"

# Poppler (for pdf2image) - from shelfio layer
curl -sL "https://github.com/jeylabs/aws-lambda-poppler-layer/releases/latest/download/poppler.zip" \
    -o /tmp/poppler.zip
unzip -oq /tmp/poppler.zip -d "$LAYER_DIR/" || true

# wkhtmltopdf - from official
curl -sL "https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-3/wkhtmltox-0.12.6.1-3.amazonlinux2.x86_64.rpm" \
    -o /tmp/wk.rpm
cd /tmp && rpm2cpio wk.rpm | cpio -idm 2>/dev/null || echo "skip wkhtmltopdf - install via apt"
cp /tmp/usr/local/bin/wkhtmltopdf "$LAYER_DIR/bin/" 2>/dev/null || true

# 3. Zip it up
echo "[3/3] Zipping layer..."
cd "$LAYER_DIR"
zip -rq "$LAYER_ZIP" .
cd - > /dev/null

SIZE=$(du -h "$LAYER_ZIP" | cut -f1)
echo "===== Layer built: $LAYER_ZIP ($SIZE) ====="
echo "Note: Layer must be < 250MB unzipped. Check with: unzip -l $LAYER_ZIP | tail -1"
