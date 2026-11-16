// Central business facts. Edit here and every page updates.
// Anything marked VERIFY must be confirmed by Bergkraft before launch.

export const site = {
  legalName: 'Bergkraft Private Limited',
  brand: 'Bergkraft',
  url: 'https://bergkraftexports.com',
  title: 'Bergkraft | Independent Rice and Coffee Sourcing Partner in India',
  description:
    'Independent buyer-side sourcing partner in India for Basmati rice and green coffee. Supplier evaluation, price benchmarking, negotiation.',
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
  // Leave empty until the real URLs exist. Empty values render as plain text, never as dead links.
  linkedinCompany: '',
  linkedinFounder: '',
  nav: [
    { label: 'How it works', href: '#process' },
    { label: 'Our approach', href: '#approach' },
    { label: 'Benchmark', href: '#benchmark' },
    { label: 'Rice', href: '#rice' },
    { label: 'Coffee', href: '#coffee' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
} as const;

// Temporary artwork. Set `temporary: false` once a file is replaced with real photography.
export const images = {
  heroRice: { src: '/images/hero-rice.svg', w: 900, h: 1200, temporary: true },
  heroCoffee: { src: '/images/hero-coffee.svg', w: 800, h: 800, temporary: true },
  riceDetail: { src: '/images/rice-detail.svg', w: 1200, h: 900, temporary: true },
  coffeeDetail: { src: '/images/coffee-detail.svg', w: 1200, h: 900, temporary: true },
  coffeeEstate: { src: '/images/coffee-estate.svg', w: 1200, h: 800, temporary: true },
  founder: { src: '/images/founder-placeholder.svg', w: 800, h: 1000, temporary: true },
} as const;
