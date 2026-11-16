// English content (default language). de.ts must have the same shape:
// TypeScript reports an error at build time if a key is missing there.
export const en = {
  meta: {
    title: 'Bergkraft | Your Rice and Coffee Sourcing Team in India',
    description:
      'Bergkraft finds, vets and negotiates with Indian rice and coffee suppliers for you, and follows your order to the port. Paid by you, not suppliers.',
    orgDescription: 'Sourcing team in India for rice and green coffee, working for buyers worldwide and paid by the buyer.',
    areaServed: 'Worldwide',
    serviceName: 'Buyer-side sourcing and procurement services in India',
    serviceDescription:
      'Supplier identification and vetting, price benchmarking, negotiation, sample, quality and inspection coordination, and procurement and shipment coordination for Indian rice and green coffee. Fees are paid by the buyer: fixed fees for defined work plus an agreed performance fee linked to verified savings.',
    audience: 'Rice importers, food wholesalers, private-label brands, coffee importers and roasters',
  },
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    home: 'Bergkraft home',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    cta: 'Tell us what you need',
    langLabel: 'Language',
    optional: 'optional',
    select: 'Select',
  },
  nav: [
    { label: 'What we do', href: '#what-we-do' },
    { label: 'Why trust us', href: '#trust' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    h1a: 'You tell us what you need from India.',
    h1b: 'We handle the rest.',
    lead: 'Bergkraft is your sourcing team in India for rice and green coffee. We find the suppliers, vet them, negotiate the price and follow your order until it reaches your port. Order by order, you build a supplier network in India you can rely on.',
    secondary: 'See what we do',
    pay: 'You pay us, not the supplier. So we answer only to you.',
    tablist: 'Example bag marking',
    caption: 'Example marking. Your product and specification go here.',
    packedFor: 'Packed for',
    bags: [
      { id: 'rice', tab: 'Rice', lines: ['Indian Basmati Rice', '1121 Sella'], meta: ['Net wt 25 kg', 'Product of India'], forWhom: 'Your company, your port' },
      { id: 'coffee', tab: 'Coffee', lines: ['India Robusta', 'Parchment AB'], meta: ['Net wt 60 kg', 'Produce of India'], forWhom: 'Your roastery, your port' },
    ],
    checks: ['Supplier vetted', 'Price benchmarked', 'Sample approved', 'Inspected before loading'],
  },
  steps: {
    h2: 'Everything between your enquiry and your delivery.',
    lead: 'You do not need an office, a buyer or a contact in India. Send us your requirement and we run the whole process for you.',
    youGet: 'You get',
    items: [
      { verb: 'Find', text: 'We search the Indian market for mills, estates and exporters that can supply your exact specification and volume, and bring you a shortlist.', get: 'A shortlist of suitable suppliers' },
      { verb: 'Vet', text: 'We check registrations, export records, facilities and samples, and tell you exactly what was checked and how.', get: 'A written report on each supplier' },
      { verb: 'Negotiate', text: 'We agree a price benchmark with you, compare offers on the same terms and negotiate with suppliers on your behalf.', get: 'Offers compared side by side' },
      { verb: 'Deliver', text: 'We coordinate samples, inspection, documents and shipment with the supplier and forwarder until the goods reach your port.', get: 'One contact from order to arrival' },
    ],
    contract:
      'You generally sign the purchase contract directly with the supplier, so there is no hidden margin on the goods. Your agreement with Bergkraft covers our services only. Contractual and export responsibilities are agreed for each order.',
  },
  trust: {
    h2: 'You pay us. Not the supplier.',
    lead: 'Many intermediaries in this trade earn a commission from the seller. We are hired and paid by the buyer, so every comparison and every negotiation is done with one interest in mind: yours.',
    items: [
      { t: 'No supplier commissions', d: 'Our only income is the fee you agree with us. We take nothing from the seller.' },
      { t: 'You see every offer', d: 'Quotations are shown to you side by side, on the same grade, Incoterm and date.' },
      { t: 'You know what was checked', d: 'Each supplier report states whether we reviewed documents, assessed remotely or visited in person.' },
      { t: 'Inspection before loading', d: 'Where you agree to it, an independent agency inspects and tests the goods before they ship.' },
    ],
    limits:
      'Vetting lowers risk. It cannot remove it. We will always tell you what has not been verified, and we do not guarantee a supplier’s performance or compliance with every rule in your market.',
  },
  products: {
    h2: 'Rice and green coffee, sourced to your specification.',
    lead: 'We do not hold stock or sell from a price list. Every order starts from what you need, and suppliers are found and compared against it.',
    tellUs: 'Tell us',
    items: [
      {
        id: 'rice',
        name: 'Rice',
        intro: 'Basmati and non-Basmati rice from Indian mills and exporters.',
        groups: [
          { label: 'Basmati', items: ['1121 Sella', '1121 Raw', '1509 Basmati'] },
          { label: 'Non-Basmati', items: ['Sona Masoori', 'IR-64'] },
        ],
        specs: ['Grain length', 'Broken percentage', 'Moisture', 'Foreign matter', 'Processing', 'Crop year', 'Packaging', 'Quantity', 'Destination requirements'],
      },
      {
        id: 'coffee',
        name: 'Green coffee',
        intro: 'Arabica and Robusta from estates and curing works in Karnataka.',
        groups: [
          { label: 'Species', items: ['Indian Arabica', 'Indian Robusta'] },
          { label: 'Processing', items: ['Washed', 'Natural', 'Monsooned'] },
          { label: 'Origins', items: ['Coorg', 'Chikmagalur'] },
        ],
        specs: ['Screen size', 'Moisture', 'Defects', 'Processing', 'Cup profile', 'Origin', 'Packaging', 'Quantity'],
      },
    ],
  },
  price: {
    h2: 'We earn more only when you pay less.',
    lead: 'Our aim is the best price available for your specification, without trading down on quality. Our fee is built so that we share that aim.',
    how: [
      { t: 'We agree the starting point first', d: 'Before any negotiation, we document a benchmark price for your exact specification and you approve it.' },
      { t: 'We compare like with like', d: 'Offers are only compared on the same grade, origin, processing, quantity, packaging, Incoterm, destination, payment terms and date.' },
      { t: 'We negotiate for you', d: 'With the benchmark and competing offers in hand, we negotiate price and terms on your behalf.' },
    ],
    exTitle: 'Illustrative example',
    exNote: 'Illustrative example only. Not an actual quotation, achieved saving or guaranteed outcome.',
    rows: {
      benchmark: 'Agreed benchmark',
      negotiated: 'Negotiated price',
      quantity: 'Quantity',
      gross: 'Gross price difference',
      fee: 'Illustrative performance fee at {pct}%',
      retains: 'Buyer retains',
    },
    unit: 'MT',
    refs: 'Benchmarks draw on FAO rice market information and APEDA information for rice, and on International Coffee Organization indicators, ICE Arabica and Robusta futures and Indian Coffee Board information for coffee, together with comparable Indian supplier and exporter quotations. These are reference points, not direct physical shipment prices. Savings cannot be claimed when they result from inferior quality, reduced specifications, a lower grade or general market movements unrelated to the agreed negotiation methodology.',
    feesTitle: 'What you pay us',
    fees: [
      { kind: 'Fixed', perf: false, t: 'Sourcing assessment', d: 'For defined initial work: your requirement, the market and realistic supplier options.' },
      { kind: 'Fixed', perf: false, t: 'Procurement mandate', d: 'For the agreed assignment, from supplier vetting and negotiation to order follow-up.' },
      { kind: 'Performance', perf: true, t: 'Share of verified savings', d: 'An agreed share of what we save you below the benchmark. 20% is used here as an example.' },
    ],
    terms: 'Fee amounts depend on product, volume and scope and are agreed in writing before work begins. Sample, courier, testing, inspection and other third-party costs are agreed separately. We do not guarantee savings.',
  },
  about: {
    h2: 'Your supplier network in India, built around your business.',
    cities: [
      { name: 'Mangalore, India', text: 'We work where the suppliers are. Mangalore is on the coast of Karnataka, the state where most Indian coffee is grown.' },
      { name: 'Berlin, Germany', text: 'Our second base. Wherever you buy from, you deal with one team, in clear commercial terms.' },
    ],
    note: 'Buying from India takes more than a supplier’s phone number. It takes local understanding, clear communication and someone coordinating the commercial details. With every order, you gain vetted suppliers you can go back to.',
    quote: [
      'Bergkraft was founded around a simple idea: international buyers deserve an independent procurement partner in India who works for their interests.',
      'My background in product management and supply chain technology has shaped the way I approach procurement: clear requirements, structured decisions, transparent commercial terms and accountability.',
    ],
    role: 'Founder. From Mangalore, based in Germany. Background in product management, supply chain and trade finance software.',
    photoAlt: 'founder of Bergkraft',
    linkedin: 'LinkedIn profile',
  },
  faq: {
    h2: 'Questions buyers ask first.',
    items: [
      {
        q: 'How can I source Basmati rice from India?',
        a: [
          'Start with a written specification: variety (for example 1121 or 1509), processing (raw, steam or sella), grain length, broken percentage, moisture, crop year, packaging, quantity, Incoterm and destination port.',
          'Quotations are only comparable when they answer the same specification. From there, the usual steps are supplier shortlisting, credential review, reference samples, agreement on inspection and payment terms, and a purchase contract between you and the supplier. Bergkraft handles each of these steps on your behalf.',
        ],
      },
      {
        q: 'How do I verify an Indian rice supplier?',
        a: [
          'Review the business registration, GST details, Importer Exporter Code and the product registrations that apply, such as FSSAI licensing and APEDA registration. Where available, look at export history and at the milling or processing facility itself.',
          'Document review, remote assessment and a physical visit give different levels of assurance, so it should be clear which one has been carried out. Verification reduces risk. It does not remove it, and a registration does not prove compliance with every requirement in your destination market.',
        ],
      },
      {
        q: 'How can I find Indian green coffee suppliers?',
        a: [
          'Indian Arabica and Robusta are grown mainly in Karnataka, including Coorg and Chikmagalur, as well as in Kerala and Tamil Nadu. Suppliers range from estates and curing works to exporters.',
          'Define origin, species, processing (washed, natural or monsooned), screen size, moisture, defect tolerance and the cup profile you need. Bergkraft identifies suitable suppliers against that specification, compares their offers and coordinates samples so you can cup before you commit.',
        ],
      },
      {
        q: 'Why use a sourcing partner instead of contacting suppliers directly?',
        a: [
          'You can contact suppliers directly, and for some buyers that is the right choice. A buyer-side partner is useful when you do not have people in India to compare suppliers, check credentials, benchmark prices and follow an order through samples, inspection and shipment.',
          'The important question is who the intermediary works for. Bergkraft is engaged and paid by the buyer, so supplier comparison and negotiation are carried out in the buyer’s interest.',
        ],
      },
      {
        q: 'How does Bergkraft get paid?',
        a: [
          'By the buyer. The model has two parts: fixed fees for defined work (a sourcing assessment and, if you proceed, a procurement mandate) and an agreed performance fee calculated as a share of verified savings below a benchmark that you approve before negotiation starts.',
          'Third-party costs such as samples, courier, testing and inspection are agreed separately. Bergkraft does not take commission from suppliers.',
        ],
      },
      {
        q: 'Does Bergkraft hold inventory?',
        a: [
          'No. Bergkraft is a procurement services company, not a trader. We do not own stock or finance the commodity. The buyer generally contracts directly with the supplier for the goods, and Bergkraft has a separate services agreement with the buyer.',
        ],
      },
      {
        q: 'What payment terms are commonly used?',
        a: [
          'Arrangements seen in this trade include advance payment (full or partial), a letter of credit at sight, and documentary collection. Each one distributes risk and cost differently between buyer and supplier.',
          'There is no universally right answer. The suitable term depends on the supplier, the order value, your bank and how well the parties know each other, and it is agreed between you and the supplier.',
        ],
      },
      {
        q: 'What is EUDR and how does it affect Indian coffee imports into Europe?',
        a: [
          'The EU Deforestation Regulation (EUDR) covers seven commodities, including coffee. Companies placing covered products on the EU market must carry out due diligence showing the goods are deforestation-free (not from land deforested after 31 December 2020) and legally produced, and must submit a due diligence statement. Geolocation of the plots where the coffee was grown is part of the required information.',
          'As of November 2026, the European Commission states that the rules apply from 30 December 2026 for large and medium-sized operators and traders, and from 30 June 2027 for micro and small enterprises. The dates have been postponed twice and a simplification review was published in May 2026, so check the Commission’s page for the current position.',
          'The legal obligations sit with the EU operator or trader. Bergkraft can help identify suppliers able to provide plot-level data and supporting documents, and coordinate collecting them. We do not act as your operator and cannot guarantee compliance.',
        ],
        link: {
          label: 'European Commission: EU Deforestation Regulation',
          href: 'https://environment.ec.europa.eu/topics/forests/deforestation/eu-deforestation-regulation-eudr_en',
        },
      },
    ],
  },
  contact: {
    h2: 'Tell us what you need to source from India.',
    lead: 'Share your product specifications, quantity and destination. We will assess your requirement and discuss how Bergkraft can support your procurement.',
    email: 'Email',
    phones: { India: 'India (WhatsApp)', Germany: 'Germany (WhatsApp and calls)' },
    honeypot: 'Leave this field empty',
    legendYou: 'About you',
    legendReq: 'Your requirement',
    f: {
      name: 'Full name',
      role: 'Role',
      company: 'Company name',
      website: 'Company website',
      email: 'Business email',
      phone: 'Phone number',
      country: 'Country',
      product: 'Product',
      quantity: 'Quantity per order (MT)',
      specs: 'Grade or specifications',
      orders: 'Estimated orders per year',
      destination: 'Destination country and port',
      payment: 'Preferred payment terms',
      timeline: 'Timeline',
      additional: 'Additional requirements',
    },
    productOptions: ['Rice', 'Coffee', 'Rice and coffee'],
    paymentOptions: ['Advance payment', 'LC at sight', 'Documentary collection', 'Other or to be discussed'],
    timelineOptions: ['Within 1 month', '1 to 3 months', '3 to 6 months', 'Later or exploring'],
    consent: ['I have read the ', 'privacy policy', ' and agree that Bergkraft may use the details above to assess and reply to this enquiry.'],
    submit: 'Send enquiry',
    sending: 'Sending',
    successTitle: 'Thank you. Your enquiry has been received.',
    successText: 'We will review your requirement and reply to the business email you provided.',
    msg: {
      required: 'This field is required.',
      checkbox: 'Please confirm you have read the privacy policy.',
      email: 'Please enter a valid email address.',
      one: 'Please check the highlighted field.',
      many: 'Please check the {n} highlighted fields.',
      failed: 'Your enquiry could not be sent. Please try again, or email contact@bergkraftexports.com.',
    },
  },
  footer: {
    tagline: 'Your sourcing team in India for rice and green coffee. Paid by the buyer, not the supplier.',
    places: 'Mangalore, India and Berlin, Germany',
    impressum: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    cookieSettings: 'Cookie settings',
  },
  consent: {
    aria: 'Analytics consent',
    title: 'Analytics cookies',
    text: 'We would like to use Google Analytics to understand how this website is used. It sets cookies and sends usage data to Google. This is optional and the site works the same either way.',
    policy: 'Cookie policy',
    decline: 'Decline',
    accept: 'Accept',
  },
  thanks: {
    title: 'Enquiry received | Bergkraft',
    h1: 'Thank you.',
    lead: 'We have received your enquiry and will reply to the business email you provided.',
    back: 'Back to the homepage',
  },
  notFound: { title: 'Page not found | Bergkraft', h1: 'This page does not exist.', back: 'Back to the homepage' },
  legal: {
    draftStrong: 'Draft.',
    draft: 'This page contains items marked “To verify before publication” and has not yet been reviewed by a lawyer. It must be completed before the website goes live.',
    updated: 'Last updated: November 2026',
    verify: 'To verify before publication',
  },
};

export type Dict = typeof en;
