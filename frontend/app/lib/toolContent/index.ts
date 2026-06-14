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
      default:
        return null;
    }
  } catch (error) {
    console.error(`Failed to load content for tool: ${slug}`, error);
    return null;
  }
}
