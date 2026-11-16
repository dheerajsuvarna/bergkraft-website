// FAQ content. Rendered on the page and reused for FAQPage structured data,
// so the two can never drift apart. Answers are plain-text paragraphs.

export interface FaqItem {
  q: string;
  a: string[];
  link?: { label: string; href: string };
}

export const faq: FaqItem[] = [
  {
    q: 'How can I source Basmati rice from India?',
    a: [
      'Start with a written specification: variety (for example 1121 or 1509), processing (raw, steam or sella), grain length, broken percentage, moisture, crop year, packaging, quantity, Incoterm and destination port.',
      'Quotations are only comparable when they answer the same specification. From there, the usual steps are supplier shortlisting, credential review, reference samples, agreement on inspection and payment terms, and a purchase contract between you and the supplier. Bergkraft supports each of these steps on your behalf.',
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
];
