export interface ToolSEOContent {
  introParagraphs: string[];
  useCases: {
    title: string;
    description: string;
  }[];
  comparison: {
    title: string;
    description: string;
    points: string[];
  };
  security: string;
  faqs?: {
    q: string;
    a: string;
  }[];
  whyUse?: string[];
  comparisonTable?: {
    headers: string[];
    rows: {
      feature: string;
      us: string;
      them: string;
    }[];
  };
}

export async function getToolContent(slug: string): Promise<ToolSEOContent | null> {
  try {
    switch (slug) {
      case 'merge':
        return (await import('./merge')).mergeContent;
      case 'split':
        return (await import('./split')).splitContent;
      case 'compress':
        return (await import('./compress')).compressContent;
      case 'pdf-to-word':
        return (await import('./pdf-to-word')).pdfToWordContent;
      case 'rotate':
        return (await import('./rotate')).rotateContent;
      case 'organize':
        return (await import('./organize')).organizeContent;
      case 'watermark':
        return (await import('./watermark')).watermarkContent;
      case 'crop':
        return (await import('./crop')).cropContent;
      case 'page-numbers':
        return (await import('./page-numbers')).pageNumbersContent;
      case 'protect':
        return (await import('./protect')).protectContent;
      case 'unlock':
        return (await import('./unlock')).unlockContent;
      case 'ocr':
        return (await import('./ocr')).ocrContent;
      case 'scan-to-pdf':
        return (await import('./scan-to-pdf')).scanToPdfContent;
      case 'repair':
        return (await import('./repair')).repairContent;
      case 'pdf-to-pdfa':
        return (await import('./pdf-to-pdfa')).pdfToPdfaContent;
      case 'word-to-pdf':
        return (await import('./word-to-pdf')).wordToPdfContent;
      case 'pdf-to-excel':
        return (await import('./pdf-to-excel')).pdfToExcelContent;
      case 'excel-to-pdf':
        return (await import('./excel-to-pdf')).excelToPdfContent;
      case 'pdf-to-ppt':
        return (await import('./pdf-to-ppt')).pdfToPptContent;
      case 'ppt-to-pdf':
        return (await import('./ppt-to-pdf')).pptToPdfContent;
      case 'pdf-to-jpg':
        return (await import('./pdf-to-jpg')).pdfToJpgContent;
      case 'jpg-to-pdf':
        return (await import('./jpg-to-pdf')).jpgToPdfContent;
      case 'html-to-pdf':
        return (await import('./html-to-pdf')).htmlToPdfContent;
      case 'delete-pages':
        return (await import('./delete-pages')).deletePagesContent;
      case 'extract-pages':
        return (await import('./extract-pages')).extractPagesContent;
      case 'pdf-to-png':
        return (await import('./pdf-to-png')).pdfToPngContent;
      case 'pdf-to-tiff':
        return (await import('./pdf-to-tiff')).pdfToTiffContent;
      case 'flatten-pdf':
        return (await import('./flatten-pdf')).flattenPdfContent;
      case 'remove-metadata':
        return (await import('./remove-metadata')).removeMetadataContent;
      case 'reverse-pages':
        return (await import('./reverse-pages')).reversePagesContent;
      case 'grayscale-pdf':
        return (await import('./grayscale-pdf')).grayscalePdfContent;
      case 'linearize-pdf':
        return (await import('./linearize-pdf')).linearizePdfContent;
      case 'n-up-pdf':
        return (await import('./n-up-pdf')).nUpPdfContent;
      case 'add-text':
        return (await import('./add-text')).addTextContent;
      case 'add-header-footer':
        return (await import('./add-header-footer')).addHeaderFooterContent;
      case 'pdf-redact':
        return (await import('./pdf-redact')).pdfRedactContent;
      case 'resize-pages':
        return (await import('./resize-pages')).resizePagesContent;
      case 'add-signature-box':
        return (await import('./add-signature-box')).addSignatureBoxContent;
      case 'pdf-info':
        return (await import('./pdf-info')).pdfInfoContent;
      case 'png-to-jpg':
        return (await import('./png-to-jpg')).pngToJpgContent;
      case 'jpg-to-png':
        return (await import('./jpg-to-png')).jpgToPngContent;
      case 'webp-to-jpg':
        return (await import('./webp-to-jpg')).webpToJpgContent;
      case 'webp-to-png':
        return (await import('./webp-to-png')).webpToPngContent;
      case 'jpg-to-webp':
        return (await import('./jpg-to-webp')).jpgToWebpContent;
      case 'png-to-webp':
        return (await import('./png-to-webp')).pngToWebpContent;
      case 'heic-to-jpg':
        return (await import('./heic-to-jpg')).heicToJpgContent;
      case 'heic-to-png':
        return (await import('./heic-to-png')).heicToPngContent;
      case 'bmp-to-jpg':
        return (await import('./bmp-to-jpg')).bmpToJpgContent;
      case 'bmp-to-png':
        return (await import('./bmp-to-png')).bmpToPngContent;
      case 'tiff-to-jpg':
        return (await import('./tiff-to-jpg')).tiffToJpgContent;
      case 'svg-to-png':
        return (await import('./svg-to-png')).svgToPngContent;
      case 'image-compress':
        return (await import('./image-compress')).imageCompressContent;
      case 'image-resize':
        return (await import('./image-resize')).imageResizeContent;
      case 'image-crop':
        return (await import('./image-crop')).imageCropContent;
      case 'image-to-grayscale':
        return (await import('./image-to-grayscale')).imageToGrayscaleContent;
      case 'compress-to-size':
        return (await import('./compress-to-size')).compressToSizeContent;
      case 'image-to-size':
        return (await import('./image-to-size')).imageToSizeContent;
      case 'resize-to-passport':
        return (await import('./resize-to-passport')).resizeToPassportContent;
      case 'txt-to-pdf':
        return (await import('./txt-to-pdf')).txtToPdfContent;
      case 'rtf-to-pdf':
        return (await import('./rtf-to-pdf')).rtfToPdfContent;
      case 'odt-to-pdf':
        return (await import('./odt-to-pdf')).odtToPdfContent;
      case 'csv-to-pdf':
        return (await import('./csv-to-pdf')).csvToPdfContent;
      case 'epub-to-pdf':
        return (await import('./epub-to-pdf')).epubToPdfContent;
      case 'md-to-pdf':
        return (await import('./md-to-pdf')).mdToPdfContent;
      case 'pdf-to-txt':
        return (await import('./pdf-to-txt')).pdfToTxtContent;
      default:
        return null;
    }
  } catch (error) {
    console.error(`Failed to load content for tool: ${slug}`, error);
    return null;
  }
}
