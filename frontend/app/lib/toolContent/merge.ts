export const mergeContent = {
  introParagraphs: [
    "Merging PDF files is one of the most common document management tasks, yet finding a reliable, free tool that doesn't compromise on speed, quality, or privacy can be challenging. ThePDFNinja's Free Online PDF Merger is engineered to solve exactly this problem. Whether you're a student compiling research papers, a professional assembling a monthly report from various departments, or just trying to keep your personal records organized, our tool gives you the power to seamlessly stitch multiple PDF documents into a single, cohesive file.",
    "Unlike many other online PDF services that restrict the number of files you can merge, limit the file size, or force you to endure a barrage of advertisements, ThePDFNinja offers an unhindered experience. Our platform is built on modern, cloud-native architecture, ensuring that even large, graphic-heavy PDFs are processed in seconds. We believe that basic document utilities should be universally accessible, which is why we never ask you to create an account, verify an email address, or provide any personal information.",
    "Furthermore, we understand that order matters. Our intuitive drag-and-drop interface allows you to easily arrange your files exactly how you want them to appear in the final document. You have total control over the sequence of your pages before you hit the merge button. It's the perfect balance of simplicity and professional-grade capability. Whether you are dealing with two simple text documents or fifty high-resolution image PDFs, our engine handles the heavy lifting effortlessly, creating a unified file ready for sharing or archiving."
  ],
  useCases: [
    {
      title: "Business Reports & Portfolios",
      description: "In the corporate world, reports often come from multiple sources. The marketing team might provide a PDF of campaign analytics, the finance department sends a quarterly balance sheet, and the design team provides a cover page. Instead of sending clients or stakeholders a zip file containing a dozen disconnected documents, use our PDF merger to combine them into one polished, professional portfolio. It ensures your audience reads the information in the exact order you intend, preventing confusion and presenting a unified brand image."
    },
    {
      title: "Academic Research & Assignments",
      description: "Students and researchers frequently need to submit single-file assignments, but the components might be created in different applications. You might have an essay written in MS Word, charts exported from Excel, and scanned reference materials. Once you've converted these individual pieces into PDFs, our merge tool allows you to assemble them into a comprehensive thesis or project submission. This is particularly useful when university submission portals only accept a single document upload."
    },
    {
      title: "Legal & Real Estate Documentation",
      description: "Legal proceedings and real estate transactions generate massive amounts of paperwork: contracts, addendums, identification copies, and property records. Keeping track of loose digital files is a liability. By merging related documents into a single PDF, lawyers, realtors, and clients can maintain organized digital dossiers. This makes reviewing contracts, sharing case files, and archiving transactions significantly more efficient and secure."
    },
    {
      title: "Personal Record Keeping",
      description: "For personal use, merging PDFs is an excellent way to digitize and organize your life. Combine your monthly utility bills into a single annual archive, merge your tax returns with supporting W-2s and receipts, or compile travel itineraries, flight tickets, and hotel bookings into one easy-to-access travel document. It declutters your hard drive and makes retrieving important information a breeze."
    }
  ],
  howItWorks: {
    title: "How the merge is performed",
    body: [
      "Merging happens at the level of the PDF page tree. Rather than rendering your documents and reassembling them — which would flatten everything to images and destroy the text — we append each source file's pages into a single output document, carrying their objects across intact.",
      "That is why text stays selectable and searchable, hyperlinks keep working, and internal bookmarks survive. Nothing is re-encoded, so there is no generational quality loss: page five of your merged file is the same content as page five of the original.",
      "Files are combined in the order shown in the interface, which you can rearrange by dragging before you run the merge.",
    ],
    specs: [
      { label: "Method", value: "Page-tree append — pages are copied, never re-rendered" },
      { label: "Text and fonts", value: "Preserved exactly; output remains searchable" },
      { label: "Links and bookmarks", value: "Preserved" },
      { label: "Quality loss", value: "None — no re-encoding takes place" },
      { label: "Order", value: "As arranged in the interface before merging" },
    ],
    limits: [
      "Password-protected files cannot be merged. Unlock them first, then merge, then re-protect the result if you need to.",
      "Mixed page sizes stay mixed. Merging A4 and Letter documents gives you a file with both, which is correct but can look uneven when printed — use Resize Pages first if you need uniformity.",
      "Form fields with identical names across documents can collide, and one may overwrite the other. Flatten the forms first if the filled values matter.",
      "The merged file is roughly the sum of its inputs. Combining several large documents can produce something that needs compressing afterwards.",
    ],
  },
  comparisonTable: {
    headers: ["Feature", "ThePDFNinja Merger"],
    rows: [
      { feature: "Price", us: "100% Free" },
      { feature: "Daily Task Limits", us: "Unlimited" },
      { feature: "Account Required", us: "Never (No signup)" },
      { feature: "Max Files Per Merge", us: "Up to 50 files" },
      { feature: "Max File Size", us: "100MB" },
      { feature: "Watermarks Added", us: "Zero watermarks" }
    ]
  },
  comparison: {
    title: "What Our PDF Merger Gives You",
    description: "Most of what makes merging painful is not the merge itself — it is the account wall, the daily quota, and the watermark. Here is what we do about each.",
    points: [
      "No Daily Task Limits: Merge 10 PDFs today and 100 tomorrow. There is no per-day quota to run into and no premium subscription to be pushed toward.",
      "Zero Watermarks: Your merged document comes back exactly as you uploaded it, just combined. We do not stamp our logo on your pages, on any tier.",
      "No Account Required: There is no signup, no email capture, and no verification step. Open the page and use the merger straight away.",
      "Faster Cloud Processing: Built on AWS Lambda, our serverless backend spins up dedicated resources for your specific merge task. This means you aren't waiting in a queue behind thousands of other users. Merging happens almost instantaneously."
    ]
  },
  security: "When you upload documents to merge—whether they are confidential legal contracts, sensitive financial statements, or personal health records—security is paramount. ThePDFNinja employs end-to-end 256-bit AES SSL encryption during the transfer of your files. Once your PDFs reach our servers, they are processed in an isolated, secure environment. Most importantly, we operate on a strict auto-deletion policy. Both your original uploaded files and the newly merged PDF are permanently purged from our servers within 1 hour of processing. We do not retain copies, we do not inspect your data, and we do not sell your information. This ensures complete peace of mind for enterprise and personal users alike.",
  faqs: [
    { q: "Is there a limit to the number of PDF files I can merge?", a: "You can upload and merge up to 50 individual PDF files in a single operation. The overall combined file size limit is 100MB per file, and you can perform unlimited merge operations daily. If you need to merge more than 50 files, you can merge the first batch, download the result, and merge it with the next batch." },
    { q: "Can I rearrange the order of files or pages before merging?", a: "Yes, absolutely. Once you upload your files, our intuitive visual interface allows you to drag and drop the document thumbnails to arrange them in the exact order you want them merged. This ensures your final document flows logically." },
    { q: "Will my links, formatting, and bookmarks be preserved after merging?", a: "Yes. Our merger tool uses low-level PDF manipulation that stitches the page trees directly. This ensures that all interactive elements, hyperlinks, text formatting, internal links, and bookmarks remain perfectly intact without any degradation." },
    { q: "Can I merge password-protected PDF documents?", a: "To merge password-protected files, you must first decrypt them using our Unlock PDF tool. Once the restrictions are removed, you can upload and merge them with your other files seamlessly." }
  ],
  whyUse: [
    "Our merger features an interactive visual editor that allows you to drag, drop, and rearrange files and pages in a clean, logical grid before compilation.",
    "Merge as many documents as you need, as often as you need. The combined PDF carries no injected header and no branding of ours.",
    "All file transfers are secured with SSL/TLS encryption, and files are automatically deleted from our secure AWS systems within 1 hour."
  ]
};
