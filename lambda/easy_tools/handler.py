"""
Easy Tools Router Lambda
Handles PDF and image operations synchronously.
Routes /v1/tools/{tool} → appropriate function.

All tools follow the same flow:
1. Receive file_key + options
2. Download from S3 to /tmp
3. Run operation
4. Upload result back to S3
5. Return presigned download URL

Exception: pdf_info returns a JSON dict directly (no file).
"""

import json
import os
import uuid
import tempfile
import subprocess
import boto3

from tools import (
    # existing 14 PDF tools
    merge_pdf,
    split_pdf,
    compress_pdf,
    rotate_pdf,
    watermark_pdf,
    protect_pdf,
    unlock_pdf,
    organize_pdf,
    page_numbers_pdf,
    repair_pdf,
    crop_pdf,
    jpg_to_pdf,
    pdf_to_jpg,
    html_to_pdf,

    # image conversion tools
    png_to_jpg, jpg_to_png,
    webp_to_jpg, webp_to_png,
    jpg_to_webp, png_to_webp,
    heic_to_jpg, heic_to_png,
    bmp_to_jpg, bmp_to_png,
    tiff_to_jpg, svg_to_png,
    image_compress, image_resize, image_crop,
    image_to_grayscale, pdf_to_png,

    # new PDF tools
    delete_pages, extract_pages, pdf_to_tiff,
    flatten_pdf, remove_metadata, reverse_pages,
    grayscale_pdf, linearize_pdf, n_up_pdf,
    add_text_to_pdf, add_header_footer,
    pdf_redact, resize_pages, add_signature_box,

    # india-specific tools
    compress_to_size, pdf_info, image_to_size, resize_to_passport,
)

s3 = boto3.client("s3")
BUCKET = os.environ["BUCKET_NAME"]

TOOL_MAP = {
    # existing 14
    "merge":            merge_pdf,
    "split":            split_pdf,
    "compress":         compress_pdf,
    "rotate":           rotate_pdf,
    "watermark":        watermark_pdf,
    "protect":          protect_pdf,
    "unlock":           unlock_pdf,
    "organize":         organize_pdf,
    "page-numbers":     page_numbers_pdf,
    "repair":           repair_pdf,
    "crop":             crop_pdf,
    "jpg-to-pdf":       jpg_to_pdf,
    "pdf-to-jpg":       pdf_to_jpg,
    "html-to-pdf":      html_to_pdf,

    # image conversion
    "png-to-jpg":           png_to_jpg,
    "jpg-to-png":           jpg_to_png,
    "webp-to-jpg":          webp_to_jpg,
    "webp-to-png":          webp_to_png,
    "jpg-to-webp":          jpg_to_webp,
    "png-to-webp":          png_to_webp,
    "heic-to-jpg":          heic_to_jpg,
    "heic-to-png":          heic_to_png,
    "bmp-to-jpg":           bmp_to_jpg,
    "bmp-to-png":           bmp_to_png,
    "tiff-to-jpg":          tiff_to_jpg,
    "svg-to-png":           svg_to_png,
    "image-compress":       image_compress,
    "image-resize":         image_resize,
    "image-crop":           image_crop,
    "image-to-grayscale":   image_to_grayscale,
    "pdf-to-png":           pdf_to_png,

    # new PDF tools
    "delete-pages":         delete_pages,
    "extract-pages":        extract_pages,
    "pdf-to-tiff":          pdf_to_tiff,
    "flatten-pdf":          flatten_pdf,
    "remove-metadata":      remove_metadata,
    "reverse-pages":        reverse_pages,
    "grayscale-pdf":        grayscale_pdf,
    "linearize-pdf":        linearize_pdf,
    "n-up-pdf":             n_up_pdf,
    "add-text":             add_text_to_pdf,
    "add-header-footer":    add_header_footer,
    "pdf-redact":           pdf_redact,
    "resize-pages":         resize_pages,
    "add-signature-box":    add_signature_box,

    # india-specific
    "compress-to-size":     compress_to_size,
    "pdf-info":             pdf_info,
    "image-to-size":        image_to_size,
    "resize-to-passport":   resize_to_passport,
}


def lambda_handler(event, context):
    try:
        tool = event["pathParameters"]["tool"]
        if tool not in TOOL_MAP:
            return _resp(400, {"error": f"Unknown tool: {tool}", "available": list(TOOL_MAP.keys())}, event)

        body = json.loads(event.get("body") or "{}")
        options = body.get("options", {})

        # Most tools take a single file_key, merge takes file_keys (list)
        file_keys = body.get("file_keys") or ([body["file_key"]] if body.get("file_key") else [])
        if not file_keys and tool != "html-to-pdf":
            return _resp(400, {"error": "file_key or file_keys required"}, event)

        # Download inputs
        with tempfile.TemporaryDirectory() as tmpdir:
            input_paths = []
            for fk in file_keys:
                local_path = os.path.join(tmpdir, os.path.basename(fk))
                s3.download_file(BUCKET, fk, local_path)
                input_paths.append(local_path)

            # Run the tool
            output_path = os.path.join(tmpdir, f"output_{uuid.uuid4()}")
            handler_fn = TOOL_MAP[tool]
            result = handler_fn(input_paths, output_path, options)

            # pdf_info returns a dict (metadata), not a file path
            if isinstance(result, dict):
                return _resp(200, {"tool": tool, "info": result}, event)

            result_path = result

            # Upload result
            output_key = f"outputs/{uuid.uuid4()}/{os.path.basename(result_path)}"
            s3.upload_file(result_path, BUCKET, output_key)

            # Presigned download URL (1 hr)
            download_url = s3.generate_presigned_url(
                "get_object",
                Params={"Bucket": BUCKET, "Key": output_key},
                ExpiresIn=3600,
            )

            return _resp(200, {
                "tool": tool,
                "download_url": download_url,
                "output_key": output_key,
                "expires_in": 3600,
            }, event)

    except Exception as e:
        import traceback
        return _resp(500, {"error": str(e), "trace": traceback.format_exc()}, event)


ALLOWED_ORIGINS = {
    "https://thepdfninja.com",
    "https://www.thepdfninja.com",
}


def _cors_origin(event):
    """Return the request Origin if allowed, else the production domain."""
    origin = (event.get("headers") or {}).get("origin") or \
             (event.get("headers") or {}).get("Origin") or ""
    if origin in ALLOWED_ORIGINS:
        return origin
    # Allow any localhost port for dev
    if origin.startswith("http://localhost:") or origin.startswith("http://127.0.0.1:"):
        return origin
    return "https://thepdfninja.com"


def _resp(status, body, event=None):
    return {
        "statusCode": status,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": _cors_origin(event or {}),
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        "body": json.dumps(body),
    }
