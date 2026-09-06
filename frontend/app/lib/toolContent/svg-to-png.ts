export const svgToPngContent = {
  introParagraphs: [
    "SVG (Scalable Vector Graphics) is a vector format used for logos and illustrations on websites because it scales infinitely without pixelation. However, SVGs cannot be opened in standard image viewers, shared on social media, or imported into presentation software. ThePDFNinja's Free Online SVG to PNG converter rasterizes your vector graphics, converting them into standard, high-resolution PNG images.",
    "Our converter allows you to customize the target width and scale factor, giving you control over image clarity. Transparent background pixels are preserved perfectly, ensuring your logos and icons maintain their original transparent background, ready for use.",
    "No Inkscape install and no export dialogue to work through.Drop the SVG in, pick the size you want it rendered at, and a PNG comes back. You can convert images up to 100MB completely free, with no limitations or watermarks."
],
  useCases: [
    {
        "title": "Inserting SVG Logos into Presentations",
        "description": "Convert your website's SVG logos or illustrations into PNG format to insert them into Google Slides or PowerPoint presentations easily."
    },
    {
        "title": "Sharing Vector Graphics on Social Media",
        "description": "Social media platforms do not accept vector files. Convert your SVG designs to PNG to share them on Instagram, Facebook, or LinkedIn."
    },
    {
        "title": "Creating Web Image Fallbacks",
        "description": "Ensure your website design displays correctly on older browsers that do not support vector formats by converting your SVGs to PNG fallbacks."
    },
    {
        "title": "Using Vector Graphics in Non-Vector Tools",
        "description": "Import SVG designs into tools like Microsoft Word or older graphics editors by converting them to PNG format first, avoiding compatibility issues."
    }
],
  comparison: {
    title: "Why Choose ThePDFNinja SVG to PNG Converter?",
    description: "SVG is a set of drawing instructions rather than a grid of pixels, which is why it stays sharp at any size. Converting to PNG means picking a size and rendering at it — a decision that cannot be undone afterwards. Here is what that means in practice.",
    points: [
      "You are choosing a resolution permanently. SVG is drawing instructions and stays sharp at any size; a PNG is a fixed grid of pixels. Render larger than you think you need — you cannot get the sharpness back later.",
      "Transparent backgrounds are preserved, so a logo exported this way drops onto any colour without a white box behind it.",
      "Fonts are the usual failure. If your SVG references a typeface by name rather than embedding the outlines, the renderer substitutes something else and your text shifts. Convert text to paths before exporting.",
      "Convert to PNG when something will not accept SVG — an upload form, an older email client, a document editor. For the web, the SVG itself is almost always the better file.",
]
  },
  security: "SVG files are code-based and can reference external resources; our rasteriser renders your SVG to a flat PNG inside a hardened sandbox with no outbound access, over an encrypted connection. Nothing about the vector — its markup, fonts, or embedded data — is stored beyond the automatic one-hour deletion, inspected, or shared with anyone.",
  faqs: [
    { q: "What is an SVG file?", a: "SVG is a vector graphic format used for logos, icons, and illustrations. While it scales infinitely, it is not supported by all social media, email clients, or standard image viewers." },
    { q: "Will my converted PNG lose quality?", a: "Since SVG is a vector format, our converter renders it at high resolution, giving you a sharp, clean PNG without pixelation." },
    { q: "Does this tool preserve the transparent background of the SVG?", a: "Yes, the transparent alpha channels of the SVG are preserved, rendering a PNG with a transparent background." },
    { q: "Can I specify a custom size or resolution?", a: "The PNG is rendered using the default viewBox dimensions defined in the SVG file, preserving its proportional width and height." },
    { q: "Are my files secure?", a: "Absolutely. All files are encrypted during upload and automatically deleted from our servers after 1 hour." },
  ],
  whyUse: [
    "Render vector SVG files into high-resolution, transparent PNGs for presentations or web layouts.",
    "Get crisp, clean graphics without pixelation or rendering errors.",
    "Free online converter with no signups, no watermarks, and secure 1-hour file deletion.",
  ]
};