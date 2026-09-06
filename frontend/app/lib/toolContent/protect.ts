export const protectContent = {
  introParagraphs: [
    "In an era of rampant data breaches and digital espionage, sending unsecured, sensitive documents over email or cloud storage is a significant risk. Whether you are a legal professional handling confidential case files, a startup founder sharing proprietary financial projections, or an individual transmitting tax returns to an accountant, you need absolute assurance that only the intended recipient can view your data. ThePDFNinja's Free Online PDF Password Protector provides a robust, impenetrable layer of security for your most critical documents.",
    "Our tool encrypts the PDF itself with a password you choose. This is not an 'owner password' — the kind of soft restriction flag that any PDF reader can ignore and any free utility can strip. We apply a user password with AES-256, so the page content streams are genuinely encrypted on disk. Without the password there is nothing to read, copy or print: a reader cannot render the file at all.",
    "You do not need a paid licence for this. AES-256 is the standard the PDF specification defines for strong encryption, and it is what every file processed here gets. Our web-based platform is designed for immediate accessibility: there is no software to install, no complicated key-management systems to learn, and no account registration required. You simply upload your file, set your password, and download the secured document."
  ],
  useCases: [
    {
      title: "Transmitting Financial Data",
      description: "When sending W-2s, tax returns, bank statements, or corporate financial projections, a simple email interception could lead to identity theft or corporate espionage. Encrypting the PDF with a strong password before emailing it ensures that even if the email account is compromised, the attached financial data remains completely inaccessible to the hacker."
    },
    {
      title: "Protecting Legal and Medical Records",
      description: "Professionals bound by HIPAA, attorney-client privilege, or strict NDAs cannot risk accidental disclosure of client records. Password protecting legal briefs, medical histories, or settlement agreements adds a crucial layer of compliance. You can securely send the encrypted document via email, and securely transmit the password via a separate channel (like a phone call or secure messaging app)."
    },
    {
      title: "Securing Intellectual Property",
      description: "Inventors, authors, and designers often need to share unpublished manuscripts, patent drafts, or proprietary schematics with potential partners or publishers. Encrypting these PDFs prevents unauthorized parties from viewing the material if it falls into the wrong hands, safeguarding your intellectual property before it is officially protected."
    },
    {
      title: "Archiving Personal Documents",
      description: "Many people store digital copies of their passports, birth certificates, and passwords on local hard drives or cloud storage services like Google Drive or Dropbox. If these accounts are hacked, your life is exposed. Encrypting these sensitive personal archives before storing them in the cloud guarantees your privacy, even in the event of a massive data breach."
    }
  ],
  comparison: {
    title: "Why ThePDFNinja Offers Superior PDF Protection",
    description: "Locking a PDF shouldn't require surrendering your privacy or your wallet. Here is how our encryption tool works.",
    points: [
      "A user password, not an owner password: an owner password only sets a 'please don't edit this' flag that readers are free to ignore. We set a user password, which means the document streams are encrypted and the file cannot be opened without it.",
      "No Upgrades: AES-256 is not a premium feature here. Any user can protect any document, at any supported size, without an upgrade prompt.",
      "No Backdoors: We do not store, log, or transmit the password you create. If you forget the password you set, the file cannot be recovered. This zero-knowledge approach guarantees absolute security.",
      "Zero Account Requirements: You don't need to hand over your email address to secure a document. Our tool is instantaneous, anonymous, and requires no sign-up."
    ]
  },
  security: "When you use ThePDFNinja to password-protect a document, you are utilizing an architecture built entirely around privacy. Your original, unencrypted file is uploaded via a secure TLS connection. The AES encryption process happens within an isolated, sandboxed server environment. Once the encryption is complete, our automated systems instantly trigger a deletion protocol. Your original file and the newly encrypted PDF are permanently and irretrievably purged from our servers within one hour. We retain no copies of your document and, crucially, we never log or save the password you created.",
  faqs: [
    { q: "What standard of encryption does this tool use to protect my PDF?", a: "AES-256, written as PDF encryption revision 6 (/V 5 /R 6, AESV3). You can verify this yourself: open the output in any PDF inspector and check the encryption dictionary. The strength of the result still depends on your password — AES-256 does not save a file whose password is '1234'." },
    { q: "If I forget the password I set, can ThePDFNinja recover or reset it?", a: "No. We utilize a strict zero-knowledge security architecture. The password you type is processed purely in-memory to encrypt the file and is never logged, saved, or sent to our databases. If you lose the password, the document is lost forever." },
    { q: "Will my password-protected PDF open in any standard PDF reader?", a: "Yes. Our encrypted PDFs follow the official PDF specification. They will open on any device (Mac, Windows, iOS, Android) and in any standard PDF reader (Adobe Acrobat, Chrome, Safari, Apple Preview) once the correct password is entered." },
    { q: "Can I set passwords for multiple PDF files at once?", a: "Yes, you can upload a batch of PDF documents, apply your desired password, and our system will encrypt each document in parallel, providing them all back to you inside a single ZIP file." }
  ],
  whyUse: [
    "Every file is encrypted with AES-256 (PDF revision 6), which prevents the document being opened, copied, edited or printed without your password.",
    "A zero-knowledge execution environment ensures that your password is never written to disk, keeping your secrets 100% private.",
    "Get AES-256 encryption with no licence to buy, no registration screen, and no file size constraint, with complete file purging within 1 hour."
  ]
};
