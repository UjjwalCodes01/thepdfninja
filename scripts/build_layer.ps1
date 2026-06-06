# =================================================================
# Build Lambda layer with binaries + Python deps (PowerShell version)
# Run from project root: .\scripts\build_layer.ps1
# Requires: Docker Desktop running, internet access
# =================================================================
$ErrorActionPreference = "Stop"

$PROJECT_DIR = (Resolve-Path "$PSScriptRoot\..").Path
$LAYER_DIR   = "$PROJECT_DIR\lambda\layer_build"
$LAYER_ZIP   = "$PROJECT_DIR\lambda\layer.zip"
$REQ_FILE    = "$PROJECT_DIR\lambda\easy_tools\requirements.txt"

Write-Host "===== Building Lambda layer (PowerShell) =====" -ForegroundColor Cyan

# Clean up
Remove-Item -Recurse -Force $LAYER_DIR -ErrorAction SilentlyContinue
Remove-Item -Force $LAYER_ZIP -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path "$LAYER_DIR\python" | Out-Null
New-Item -ItemType Directory -Force -Path "$LAYER_DIR\bin"    | Out-Null
New-Item -ItemType Directory -Force -Path "$LAYER_DIR\lib"   | Out-Null

# ---------------------------------------------------------------
# 1. Python deps via Docker (matches Lambda linux/amd64 runtime)
# ---------------------------------------------------------------
Write-Host "[1/3] Installing Python deps via Docker..." -ForegroundColor Yellow
# Convert Windows path to Docker-compatible path
$LayerPythonDocker = ($LAYER_DIR -replace "\\", "/") -replace "^([A-Za-z]):", '/$1'
$ReqDocker         = ($REQ_FILE  -replace "\\", "/") -replace "^([A-Za-z]):", '/$1'

docker run --rm `
    --platform linux/amd64 `
    -v "${LAYER_DIR}\python:/out" `
    -v "${REQ_FILE}:/req.txt" `
    public.ecr.aws/sam/build-python3.11:latest `
    pip install -r /req.txt -t /out

Write-Host "[1/3] Python deps installed." -ForegroundColor Green

# ---------------------------------------------------------------
# 2. Download pre-built binaries
# ---------------------------------------------------------------
Write-Host "[2/3] Downloading binaries..." -ForegroundColor Yellow

$TempDir = "$env:TEMP\pdfninja_layer"
New-Item -ItemType Directory -Force -Path $TempDir | Out-Null

function Download-And-Extract {
    param($Url, $ZipPath, $ExtractTo)
    try {
        Write-Host "  Downloading $Url ..."
        Invoke-WebRequest -Uri $Url -OutFile $ZipPath -TimeoutSec 60 -ErrorAction Stop
        Expand-Archive -Path $ZipPath -DestinationPath $ExtractTo -Force -ErrorAction Stop
        Write-Host "  OK: $ZipPath" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "  WARN: Failed to download $Url — $($_.Exception.Message)" -ForegroundColor Yellow
        return $false
    }
}

# Ghostscript
$gsOk = Download-And-Extract `
    -Url "https://github.com/shelfio/ghostscript-lambda-layer/releases/latest/download/layer.zip" `
    -ZipPath "$TempDir\gs.zip" `
    -ExtractTo "$TempDir\gs"
if ($gsOk) {
    Copy-Item "$TempDir\gs\bin\*" "$LAYER_DIR\bin\" -ErrorAction SilentlyContinue
    Copy-Item "$TempDir\gs\lib\*" "$LAYER_DIR\lib\" -ErrorAction SilentlyContinue
}

# qpdf
$qpdfOk = Download-And-Extract `
    -Url "https://github.com/qpdf/qpdf/releases/download/v11.9.1/qpdf-11.9.1-bin-linux-x86_64.zip" `
    -ZipPath "$TempDir\qpdf.zip" `
    -ExtractTo "$TempDir\qpdf"
if ($qpdfOk) {
    $qpdfBin = Get-Item "$TempDir\qpdf\qpdf-*\bin\qpdf" -ErrorAction SilentlyContinue
    if ($qpdfBin) { Copy-Item $qpdfBin.FullName "$LAYER_DIR\bin\" }
}

# Poppler
$popplerOk = Download-And-Extract `
    -Url "https://github.com/jeylabs/aws-lambda-poppler-layer/releases/latest/download/poppler.zip" `
    -ZipPath "$TempDir\poppler.zip" `
    -ExtractTo "$LAYER_DIR"
if ($popplerOk) { Write-Host "  Poppler extracted to layer." -ForegroundColor Green }

Write-Host "[2/3] Binaries done (wkhtmltopdf skipped on Windows — rpm2cpio unavailable)." -ForegroundColor Yellow

# ---------------------------------------------------------------
# 3. Zip it up
# ---------------------------------------------------------------
Write-Host "[3/3] Zipping layer..." -ForegroundColor Yellow
Push-Location $LAYER_DIR
try {
    # Use 7-Zip if available, otherwise Compress-Archive
    $7z = Get-Command "7z" -ErrorAction SilentlyContinue
    if ($7z) {
        & 7z a -tzip $LAYER_ZIP "." -r -mx=5 | Out-Null
    } else {
        # Compress-Archive with Get-ChildItem to avoid root-level nesting
        $items = Get-ChildItem -Path . | Select-Object -ExpandProperty FullName
        Compress-Archive -Path $items -DestinationPath $LAYER_ZIP -Force
    }
} finally {
    Pop-Location
}

$size = (Get-Item $LAYER_ZIP).Length / 1MB
Write-Host "===== Layer built: $LAYER_ZIP ($([math]::Round($size,1)) MB) =====" -ForegroundColor Cyan
Write-Host "Note: Layer must be < 250MB unzipped." -ForegroundColor Gray
