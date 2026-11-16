// Central business facts. Edit here and every page updates.
// Anything marked VERIFY must be confirmed by Bergkraft before launch.

export const site = {
  legalName: 'Bergkraft Private Limited',
  brand: 'Bergkraft',
  url: 'https://bergkraftexports.com',
  title: 'Bergkraft | Your Rice and Coffee Sourcing Team in India',
  description:
    'Bergkraft finds, vets and negotiates with Indian rice and coffee suppliers for you, and follows your order to the port. Paid by you, not suppliers.',
  email: 'contact@bergkraftexports.com',
  founder: 'Dheeraj Suvarna',
  iec: 'AAOCB0571C', // VERIFY against the original IEC certificate
  ga4Id: 'G-VB6WR8LTBC',
  // Set to true only after the legal pages have been completed and reviewed.
  // While false, each legal page shows a visible "draft" notice.
  legalPagesReviewed: false,
  legalLastUpdated: 'November 2026',
  phones: [
    { office: 'India', note: 'WhatsApp', display: '+91 9481 516 911', href: 'https://wa.me/919481516911' },
    { office: 'Germany', note: 'WhatsApp and calls', display: '+49 1525 339 6230', href: 'https://wa.me/4915253396230' },
  ],
  // Leave empty until the real values exist. Empty values are simply not shown.
  linkedinCompany: '',
  linkedinFounder: '',
  founderPhoto: '', // e.g. '/images/founder.jpg' (portrait, 4:5)
  cta: 'Tell us what you need',
  nav: [
    { label: 'What we do', href: '#what-we-do' },
    { label: 'Why trust us', href: '#trust' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ],
} as const;
