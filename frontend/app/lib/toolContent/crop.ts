export const cropContent = {
  introParagraphs: [
    "PDFs are often generated with excessive white space, large printer margins, or unwanted header information that detracts from the core content. Whether you are preparing a document for professional printing, optimizing it for reading on a mobile device, or simply trying to make a presentation look cleaner, ThePDFNinja's Free Online PDF Cropper is the perfect tool for the job. Our web-based utility allows you to trim away the excess and focus the reader's attention exactly where it belongs.",
    "Cropping a PDF shouldn't require an advanced degree in graphic design or an expensive Adobe Acrobat subscription. ThePDFNinja provides a highly intuitive, visual interface. You simply upload your document, draw a selection box around the content you wish to keep, and our cloud engines instantly trim the document to your exact specifications. It is as simple as cropping a photo on your smartphone.",
    "Unlike basic tools that only mask the cropped area (meaning the hidden data is still technically there and inflating the file size), our tool structurally modifies the PDF dimensions. This ensures a cleaner, lighter file that is truly optimized for its intended use case. Best of all, this professional-grade utility is available completely free, with no account registration or daily limits."
  ],
  useCases: [
    {
      title: "Optimizing for Mobile and E-Readers",
      description: "Reading academic papers, e-books, or technical manuals on a smartphone or Kindle can be a terrible experience if the PDF has massive white margins. The text becomes too small to read without constantly zooming and panning. By cropping out the excess white space, you effectively enlarge the core text, making the document vastly more readable on smaller screens and mobile devices."
    },
    {
      title: "Preparing Documents for Professional Print",
      description: "When sending a digital flyer, brochure, or poster to a professional print shop, you often need to adhere to specific dimensions or remove printer crop marks and bleed areas from a previous draft. Our visual cropping tool allows you to precisely trim your PDF to the exact dimensions required by your printer, ensuring a flawless physical output."
    },
    {
      title: "Extracting Charts and Graphics",
      description: "If a comprehensive research report contains a brilliant chart or infographic that you want to include in your own presentation, you don't need to screenshot it (which degrades quality). Instead, you can upload the PDF, crop the page down so only the high-resolution vector graphic remains, and then use that clean, perfectly sized element in your own slide deck."
    },
    {
      title: "Removing Unwanted Headers or Footers",
      description: "Sometimes you receive documents that contain irrelevant or distracting information in the margins, such as fax transmission headers, timestamps, or draft watermarks located at the very bottom of the page. Cropping allows you to quickly slice off these unwanted elements, leaving you with a clean, professional-looking document."
    }
  ],
  comparison: {
    title: "Why ThePDFNinja's Cropper is Superior",
    description: "Cropping a PDF might seem simple, but many tools get it wrong. Here is why our tool provides a better experience than the competition.",
    points: [
      "Visual Selection Box: We don't force you to blindly enter margin dimensions in inches or millimeters. Our intuitive drag-and-drop bounding box lets you see exactly what will be kept and what will be cut.",
      "True Dimensional Cropping: Some cheap tools only add a 'mask' over the cropped area, which can cause issues when printing or viewing on different devices. ThePDFNinja actually rewrites the page geometry for a true, permanent crop.",
      "No File Size Arbitrage: Competing freemium services will let you use their crop tool, but demand payment if your file is over 5MB. ThePDFNinja supports cropping for files up to 100MB completely free.",
      "Zero Account Requirements: You can clean up your sensitive documents without ever handing over your email address or personal details. It is instantaneous and anonymous."
    ]
  },
  security: "When you upload a document to crop it—whether it is a financial statement you are preparing for a presentation or a personal legal document—your privacy is our top priority. ThePDFNinja secures your connection with 256-bit AES encryption. The cropping process is fully automated on our isolated cloud servers, meaning no human eyes ever see your data. To ensure absolute confidentiality, our system is programmed to permanently and irretrievably delete your original file and the newly cropped PDF within one hour of processing.",
  faqs: [
    { q: "Does this tool crop all pages of the PDF or just a single page?", a: "You can choose. You can apply the crop selection box globally to every page in the PDF (ideal for removing uniform margins) or crop a single page to isolate a specific chart or table." },
    { q: "Can I undo the crop after downloading the document?", a: "No. Our tool performs a permanent geometry rewrite (/MediaBox and /CropBox adjustment) inside the PDF. We recommend keeping a backup of the original uncropped document in case you need to revert." },
    { q: "Will cropping the PDF decrease the file size?", a: "Yes, in many cases it will. Because we modify the page structure definitions and restrict the page coordinates to a smaller window, the document consumes fewer rendering resources, which often reduces the final file size." },
    { q: "Is there a page count limit for the PDF Cropper?", a: "No. As long as the total upload file size is under 100MB, you can crop documents with any number of pages, entirely for free." }
  ],
  whyUse: [
    "A visual bounding-box selector that allows you to drag margins and preview the exact crop boundaries in real-time, eliminating guesswork.",
    "True geometric cropping that alters the underlying PDF page viewport properties, preventing cropped content from reappearing on different readers.",
    "Enjoy watermark-free, unlimited crops with no registration forms, secured by 256-bit TLS encryption and a strict 1-hour deletion policy."
  ]
};
