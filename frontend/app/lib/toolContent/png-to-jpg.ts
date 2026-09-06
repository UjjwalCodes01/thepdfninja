export const pngToJpgContent = {
  introParagraphs: [
    "PNG files are excellent for graphics due to their support for transparent backgrounds and lossless quality, but they often have massive file sizes. If you need to upload photos, screenshots, or graphics to web portals, PNGs can be too heavy. ThePDFNinja's Free Online PNG to JPG converter solves this by instantly converting your PNG images into web-friendly, lightweight JPG files.",
    "Our converter allows you to adjust the compression quality (1-100) to find the perfect balance between file size and image clarity. During conversion, transparent background pixels are automatically replaced with a clean white background, keeping your graphics legible and looking professional.",
    "The choice between PNG and JPEG comes down to what is in the image. PNG stores every pixel exactly and supports transparency, which makes it right for screenshots, logos and line art where a soft edge is a defect. JPEG discards detail selectively, which makes it right for photographs and wrong for sharp-edged graphics, where the discarding shows up as visible halos."
],
  useCases: [
    {
        "title": "Optimizing Screenshots for Sharing",
        "description": "Screenshots taken on Macs, iPhones, and PCs are saved as heavy PNGs by default. Convert them to JPG to reduce size and make sharing via email, WhatsApp, or Slack much faster."
    },
    {
        "title": "Meeting Web Portal Upload Limits",
        "description": "Many resume upload sites, banking portals, and government application forms restrict uploads to JPG only and enforce strict file size limits. Easily convert and shrink your files to comply."
    },
    {
        "title": "Reducing Website Bandwidth Usage",
        "description": "If your website is loading slowly due to heavy PNG illustrations, convert them to JPGs to speed up page load times and improve SEO rankings."
    },
    {
        "title": "Preparing Portfolios for Emailing",
        "description": "Graphic designers and artists can convert large portfolio images from PNG to JPG, keeping files lightweight and easy to email directly to clients."
    }
],
  howItWorks: {
    title: "What changes in the conversion",
    body: [
      "PNG stores pixels losslessly and supports an alpha channel; JPEG does neither. Two things therefore happen in this conversion, and both are worth understanding before you rely on the result.",
      "Transparency is composited onto a white background, because JPEG has no way to represent it. If your PNG had a transparent background, it comes back with a white one. Second, the pixel data is re-encoded with lossy compression at the quality you choose — which is what produces the large size reduction, and which is not reversible.",
      "Quality 90 is a sensible default: the difference is very hard to see, and files typically land far smaller than the PNG.",
    ],
    specs: [
      { label: "Method", value: "Alpha composited onto white, re-encoded as JPEG" },
      { label: "Quality", value: "Configurable, 90 by default" },
      { label: "Optimisation", value: "Huffman tables optimised on save for a smaller file at the same quality" },
      { label: "Colour", value: "Converted to RGB; palette and greyscale inputs handled" },
    ],
    limits: [
      "Transparency is lost permanently. If you need it, keep the PNG or convert to WebP instead.",
      "The conversion is lossy and one-way. Converting back to PNG will not restore the original detail — it just wraps the already-degraded pixels losslessly.",
      "PNG is better for screenshots, logos, line art and anything with sharp edges or flat colour. Converting those to JPEG can produce visible halos around edges.",
      "A PNG that is already small may come out larger as a JPEG. JPEG's advantage is on photographic content.",
    ],
  },
  comparison: {
    title: "A Better PNG to JPG Converter",
    description: "You do not need an editor open to do a format change. ThePDFNinja offers a streamlined, professional conversion utility:",
    points: [
      "Quality is adjustable from 1 to 100. Screenshots and line art need a higher setting than photographs — sharp edges are exactly what JPEG handles worst.",
      "Smart Transparency Handling: Automatically replaces transparent areas with white pixels, preventing black background glitches.",
      "100% Free and Unlimited: Convert as many images as you need without encountering daily caps, waiting rooms, or payment prompts.",
      "Zero Installation: The entire conversion takes place in your web browser. All files are deleted automatically within 1 hour."
]
  },
  security: "PNG files often carry hidden metadata and transparency data that you may not want to pass along. When you convert a PNG to JPG here, the upload travels over an encrypted TLS connection and the image is flattened and re-encoded on an isolated server that no other job can touch. Both the original PNG and the finished JPG are erased within one hour, and at no point is the picture opened, indexed, or shared.",
  faqs: [
    { q: "Why convert PNG to JPG?", a: "PNG files are lossless and can be very large in size. Converting them to JPG applies compression, which reduces file sizes by up to 80%, making them ideal for web pages, sharing on social media, or emailing." },
    { q: "Will transparent areas in my PNG turn black when converted to JPG?", a: "Since JPG does not support transparency, transparent regions in your PNG will be rendered with a solid white background, which is the web standard." },
    { q: "Can I convert PNGs in bulk?", a: "Yes, you can upload multiple PNG images and convert them all to JPG in a single batch, downloading them as a single ZIP file." },
    { q: "Will the photo lose quality?", a: "We use high-quality JPEG compression profiles to ensure that any loss in detail is virtually invisible, keeping your photos looking clean and sharp." },
    { q: "Do you log my images?", a: "No, we maintain a strict privacy policy. All uploaded images are processed in isolated containers and permanently deleted after 1 hour." },
  ],
  whyUse: [
    "Convert heavy, lossless PNG graphics into web-friendly, compressed JPEGs to save storage space.",
    "Automatically convert transparent backgrounds to white backgrounds for universal compatibility.",
    "Free browser tool with secure SSL-encrypted processing and automatic 1-hour file deletion.",
  ]
};