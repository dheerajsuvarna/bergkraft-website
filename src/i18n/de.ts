// German content. Must match the shape of en.ts (checked by TypeScript).
import type { Dict } from './en';

export const de: Dict = {
  meta: {
    title: 'Bergkraft | Ihr Einkaufsteam in Indien für Reis und Kaffee',
    description:
      'Bergkraft findet, prüft und verhandelt für Sie mit indischen Reis- und Kaffeelieferanten und begleitet Ihre Bestellung bis zum Hafen.',
    orgDescription: 'Einkaufsteam in Indien für Reis und Rohkaffee. Bergkraft arbeitet für internationale Käufer und wird vom Käufer bezahlt.',
    areaServed: 'Deutschland, Österreich, Schweiz',
    serviceName: 'Beschaffungsdienstleistungen in Indien im Auftrag des Käufers',
    serviceDescription:
      'Lieferantensuche und -prüfung, Preisvergleich, Verhandlung, Koordination von Mustern, Qualitätskontrollen und Inspektionen sowie Begleitung von Bestellung und Verschiffung für indischen Reis und Rohkaffee. Die Vergütung zahlt der Käufer: feste Honorare für definierte Leistungen und ein vereinbartes Erfolgshonorar auf nachgewiesene Einsparungen.',
    audience: 'Reisimporteure, Lebensmittelgroßhändler, Eigenmarken, Kaffeeimporteure und Röstereien',
  },
  ui: {
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    home: 'Bergkraft Startseite',
    primaryNav: 'Hauptnavigation',
    footerNav: 'Fußzeile',
    cta: 'Bedarf mitteilen',
    langLabel: 'Sprache',
    optional: 'optional',
    select: 'Bitte wählen',
  },
  nav: [
    { label: 'Leistungen', href: '#what-we-do' },
    { label: 'Vertrauen', href: '#trust' },
    { label: 'Produkte', href: '#products' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Über uns', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    h1a: 'Sie sagen uns, was Sie aus Indien brauchen.',
    h1b: 'Wir kümmern uns um den Rest.',
    lead: 'Bergkraft ist Ihr Einkaufsteam in Indien für Reis und Rohkaffee. Wir finden die Lieferanten, prüfen sie, verhandeln den Preis und begleiten Ihre Bestellung, bis sie in Ihrem Hafen ankommt. Mit jeder Bestellung wächst Ihr verlässliches Lieferantennetz in Indien.',
    secondary: 'Unsere Leistungen',
    pay: 'Sie bezahlen uns, nicht der Lieferant. Deshalb sind wir nur Ihnen verpflichtet.',
    tablist: 'Beispiel einer Sackbeschriftung',
    caption: 'Beispielbeschriftung. Hier stehen Ihr Produkt und Ihre Spezifikation.',
    packedFor: 'Packed for',
    bags: [
      { id: 'rice', tab: 'Reis', lines: ['Indian Basmati Rice', '1121 Sella'], meta: ['Net wt 25 kg', 'Product of India'], forWhom: 'Ihr Unternehmen, Hamburg' },
      { id: 'coffee', tab: 'Kaffee', lines: ['India Robusta', 'Parchment AB'], meta: ['Net wt 60 kg', 'Produce of India'], forWhom: 'Ihre Rösterei, Bremen' },
    ],
    checks: ['Lieferant geprüft', 'Preis verglichen', 'Muster freigegeben', 'Vor Verladung kontrolliert'],
  },
  steps: {
    h2: 'Alles zwischen Ihrer Anfrage und Ihrer Lieferung.',
    lead: 'Sie brauchen kein Büro, keinen Einkäufer und keinen Kontakt in Indien. Schicken Sie uns Ihren Bedarf, wir übernehmen den gesamten Ablauf.',
    youGet: 'Sie erhalten',
    items: [
      { verb: 'Finden', text: 'Wir suchen auf dem indischen Markt Mühlen, Plantagen und Exporteure, die genau Ihre Spezifikation und Menge liefern können, und legen Ihnen eine Vorauswahl vor.', get: 'Eine Vorauswahl geeigneter Lieferanten' },
      { verb: 'Prüfen', text: 'Wir prüfen Registrierungen, Exportnachweise, Betriebe und Muster und sagen Ihnen genau, was geprüft wurde und wie.', get: 'Einen schriftlichen Bericht je Lieferant' },
      { verb: 'Verhandeln', text: 'Wir legen mit Ihnen einen Vergleichspreis fest, vergleichen Angebote zu gleichen Bedingungen und verhandeln in Ihrem Auftrag mit den Lieferanten.', get: 'Angebote im direkten Vergleich' },
      { verb: 'Liefern', text: 'Wir koordinieren Muster, Inspektion, Dokumente und Verschiffung mit Lieferant und Spediteur, bis die Ware Ihren Hafen erreicht.', get: 'Einen Ansprechpartner von der Bestellung bis zur Ankunft' },
    ],
    contract:
      'Den Kaufvertrag schließen Sie in der Regel direkt mit dem Lieferanten. Es gibt also keine versteckte Marge auf die Ware. Ihr Vertrag mit Bergkraft umfasst nur unsere Dienstleistungen. Vertragliche und exportbezogene Verantwortlichkeiten werden für jede Bestellung vereinbart.',
  },
  trust: {
    h2: 'Sie bezahlen uns. Nicht der Lieferant.',
    lead: 'Viele Vermittler in diesem Handel erhalten ihre Provision vom Verkäufer. Wir werden vom Käufer beauftragt und bezahlt. Jeder Vergleich und jede Verhandlung dient deshalb nur einem Interesse: Ihrem.',
    items: [
      { t: 'Keine Lieferantenprovisionen', d: 'Unsere einzige Einnahme ist das Honorar, das Sie mit uns vereinbaren. Vom Verkäufer nehmen wir nichts.' },
      { t: 'Sie sehen jedes Angebot', d: 'Sie erhalten die Angebote nebeneinander, bezogen auf dieselbe Qualität, denselben Incoterm und dasselbe Datum.' },
      { t: 'Sie wissen, was geprüft wurde', d: 'Jeder Lieferantenbericht nennt, ob wir Dokumente geprüft, aus der Ferne bewertet oder vor Ort besucht haben.' },
      { t: 'Inspektion vor der Verladung', d: 'Wenn Sie es wünschen, kontrolliert und testet eine unabhängige Prüfgesellschaft die Ware vor dem Versand.' },
    ],
    limits:
      'Eine Prüfung senkt das Risiko. Ausschließen kann sie es nicht. Wir sagen Ihnen immer, was nicht geprüft wurde, und wir garantieren weder die Leistung eines Lieferanten noch die Einhaltung aller Vorschriften Ihres Marktes.',
  },
  products: {
    h2: 'Reis und Rohkaffee, beschafft nach Ihrer Spezifikation.',
    lead: 'Wir halten keine Lagerware und verkaufen nicht nach Preisliste. Jede Bestellung beginnt mit Ihrem Bedarf. Danach suchen und vergleichen wir die Lieferanten.',
    tellUs: 'Das brauchen wir von Ihnen',
    items: [
      {
        id: 'rice',
        name: 'Reis',
        intro: 'Basmati- und Nicht-Basmati-Reis von indischen Mühlen und Exporteuren.',
        groups: [
          { label: 'Basmati', items: ['1121 Sella', '1121 Raw', '1509 Basmati'] },
          { label: 'Nicht-Basmati', items: ['Sona Masoori', 'IR-64'] },
        ],
        specs: ['Kornlänge', 'Bruchanteil', 'Feuchtigkeit', 'Fremdbesatz', 'Verarbeitung', 'Erntejahr', 'Verpackung', 'Menge', 'Anforderungen des Ziellandes'],
      },
      {
        id: 'coffee',
        name: 'Rohkaffee',
        intro: 'Arabica und Robusta von Plantagen und Aufbereitungsbetrieben in Karnataka.',
        groups: [
          { label: 'Arten', items: ['Indischer Arabica', 'Indischer Robusta'] },
          { label: 'Aufbereitung', items: ['Gewaschen', 'Natural', 'Monsooned'] },
          { label: 'Herkunft', items: ['Coorg', 'Chikmagalur'] },
        ],
        specs: ['Siebgröße', 'Feuchtigkeit', 'Defekte', 'Aufbereitung', 'Tassenprofil', 'Herkunft', 'Verpackung', 'Menge'],
      },
    ],
  },
  price: {
    h2: 'Wir verdienen nur dann mehr, wenn Sie weniger bezahlen.',
    lead: 'Unser Ziel ist der beste verfügbare Preis für Ihre Spezifikation, ohne Abstriche bei der Qualität. Unser Honorar ist so aufgebaut, dass wir dieses Ziel teilen.',
    how: [
      { t: 'Wir legen zuerst den Ausgangspunkt fest', d: 'Vor jeder Verhandlung dokumentieren wir einen Vergleichspreis für genau Ihre Spezifikation, den Sie freigeben.' },
      { t: 'Wir vergleichen Gleiches mit Gleichem', d: 'Angebote werden nur bei gleicher Qualität, Herkunft, Verarbeitung, Menge, Verpackung, gleichem Incoterm, Zielort, Zahlungsziel und Datum verglichen.' },
      { t: 'Wir verhandeln für Sie', d: 'Mit Vergleichspreis und Wettbewerbsangeboten verhandeln wir Preis und Konditionen in Ihrem Auftrag.' },
    ],
    exTitle: 'Rechenbeispiel',
    exNote: 'Nur ein Rechenbeispiel. Kein tatsächliches Angebot, keine erzielte Einsparung und kein garantiertes Ergebnis.',
    rows: {
      benchmark: 'Vereinbarter Vergleichspreis',
      negotiated: 'Verhandelter Preis',
      quantity: 'Menge',
      gross: 'Preisdifferenz gesamt',
      fee: 'Beispielhaftes Erfolgshonorar bei {pct} %',
      retains: 'Beim Käufer verbleiben',
    },
    unit: 't',
    refs: 'Vergleichspreise stützen sich bei Reis auf Marktinformationen der FAO und Angaben der APEDA, bei Kaffee auf Indikatoren der Internationalen Kaffeeorganisation, die ICE-Terminkontrakte für Arabica und Robusta und Angaben des Indian Coffee Board, jeweils ergänzt um vergleichbare Angebote indischer Lieferanten und Exporteure. Das sind Referenzwerte, keine Preise für konkrete Lieferungen. Einsparungen gelten nicht als erzielt, wenn sie auf geringerer Qualität, reduzierten Spezifikationen, einer niedrigeren Qualitätsstufe oder allgemeinen Marktbewegungen beruhen, die nichts mit der vereinbarten Verhandlungsmethode zu tun haben.',
    feesTitle: 'Was Sie uns bezahlen',
    fees: [
      { kind: 'Fest', perf: false, t: 'Beschaffungsanalyse', d: 'Für definierte erste Leistungen: Ihr Bedarf, der Markt und realistische Lieferantenoptionen.' },
      { kind: 'Fest', perf: false, t: 'Beschaffungsmandat', d: 'Für den vereinbarten Auftrag, von Lieferantenprüfung und Verhandlung bis zur Begleitung der Bestellung.' },
      { kind: 'Erfolg', perf: true, t: 'Anteil an nachgewiesenen Einsparungen', d: 'Ein vereinbarter Anteil an dem, was wir unter dem Vergleichspreis für Sie einsparen. 20 % dienen hier als Beispiel.' },
    ],
    terms: 'Die Höhe der Honorare hängt von Produkt, Menge und Umfang ab und wird vor Arbeitsbeginn schriftlich vereinbart. Kosten für Muster, Kurier, Tests, Inspektionen und andere Leistungen Dritter werden gesondert vereinbart. Einsparungen garantieren wir nicht.',
  },
  about: {
    h2: 'Nah bei Ihnen in Europa. Nah an der Quelle in Indien.',
    cities: [
      { name: 'Berlin, Deutschland', text: 'Sie sprechen mit uns in Europa, zu Ihren Arbeitszeiten und in klaren kaufmännischen Begriffen.' },
      { name: 'Mangalore, Indien', text: 'Die Lieferanten sprechen mit uns in Indien, zu ihren Arbeitszeiten. Mangalore liegt an der Küste von Karnataka, dem Bundesstaat, in dem der größte Teil des indischen Kaffees wächst.' },
    ],
    note: 'Für den Einkauf auf einem anderen Kontinent reicht die Telefonnummer eines Lieferanten nicht aus. Es braucht Kenntnis vor Ort, klare Kommunikation und jemanden, der die kaufmännischen Details koordiniert. Mit jeder Bestellung gewinnen Sie geprüfte Lieferanten, auf die Sie wieder zurückgreifen können.',
    quote: [
      'Bergkraft ist aus einer einfachen Idee entstanden: Internationale Käufer verdienen in Indien einen unabhängigen Beschaffungspartner, der ihre Interessen vertritt.',
      'Mein Hintergrund im Produktmanagement und in Supply-Chain-Technologie prägt meine Art der Beschaffung: klare Anforderungen, strukturierte Entscheidungen, transparente Konditionen und Verantwortlichkeit.',
    ],
    role: 'Gründer. Aus Mangalore, lebt in Deutschland. Hintergrund in Produktmanagement, Supply Chain und Software für Handelsfinanzierung.',
    photoAlt: 'Gründer von Bergkraft',
    linkedin: 'LinkedIn-Profil',
  },
  faq: {
    h2: 'Was Käufer zuerst fragen.',
    items: [
      {
        q: 'Wie kann ich Basmati-Reis aus Indien beziehen?',
        a: [
          'Beginnen Sie mit einer schriftlichen Spezifikation: Sorte (zum Beispiel 1121 oder 1509), Verarbeitung (Raw, Steam oder Sella), Kornlänge, Bruchanteil, Feuchtigkeit, Erntejahr, Verpackung, Menge, Incoterm und Zielhafen.',
          'Angebote sind nur vergleichbar, wenn sie sich auf dieselbe Spezifikation beziehen. Danach folgen in der Regel die Vorauswahl der Lieferanten, die Prüfung ihrer Nachweise, Referenzmuster, die Einigung über Inspektion und Zahlungsbedingungen und ein Kaufvertrag zwischen Ihnen und dem Lieferanten. Bergkraft übernimmt jeden dieser Schritte in Ihrem Auftrag.',
        ],
      },
      {
        q: 'Wie prüfe ich einen indischen Reislieferanten?',
        a: [
          'Prüfen Sie die Unternehmensregistrierung, die GST-Daten, den Importer Exporter Code und die einschlägigen Produktregistrierungen, etwa die FSSAI-Lizenz und die APEDA-Registrierung. Soweit verfügbar, lohnt ein Blick auf die Exporthistorie und auf die Mühle oder den Verarbeitungsbetrieb selbst.',
          'Dokumentenprüfung, Bewertung aus der Ferne und Besuch vor Ort bieten unterschiedlich viel Sicherheit. Es sollte deshalb klar sein, welche Prüfung stattgefunden hat. Eine Prüfung senkt das Risiko, beseitigt es aber nicht, und eine Registrierung belegt nicht, dass alle Anforderungen Ihres Zielmarktes erfüllt sind.',
        ],
      },
      {
        q: 'Wie finde ich indische Rohkaffee-Lieferanten?',
        a: [
          'Indischer Arabica und Robusta wachsen vor allem in Karnataka, unter anderem in Coorg und Chikmagalur, sowie in Kerala und Tamil Nadu. Lieferanten sind Plantagen, Aufbereitungsbetriebe und Exporteure.',
          'Legen Sie Herkunft, Art, Aufbereitung (gewaschen, natural oder monsooned), Siebgröße, Feuchtigkeit, Defekttoleranz und das gewünschte Tassenprofil fest. Bergkraft sucht passende Lieferanten für diese Spezifikation, vergleicht ihre Angebote und koordiniert Muster, damit Sie verkosten können, bevor Sie sich festlegen.',
        ],
      },
      {
        q: 'Warum einen Beschaffungspartner nutzen, statt Lieferanten direkt anzusprechen?',
        a: [
          'Sie können Lieferanten direkt ansprechen, und für manche Käufer ist das der richtige Weg. Ein Partner auf Käuferseite ist sinnvoll, wenn Sie in Indien niemanden haben, der Lieferanten vergleicht, Nachweise prüft, Preise einordnet und eine Bestellung über Muster, Inspektion und Verschiffung begleitet.',
          'Entscheidend ist, für wen der Vermittler arbeitet. Bergkraft wird vom Käufer beauftragt und bezahlt. Lieferantenvergleich und Verhandlung erfolgen deshalb im Interesse des Käufers.',
        ],
      },
      {
        q: 'Wie wird Bergkraft bezahlt?',
        a: [
          'Vom Käufer. Das Modell hat zwei Teile: feste Honorare für definierte Leistungen (eine Beschaffungsanalyse und, wenn Sie fortfahren, ein Beschaffungsmandat) und ein vereinbartes Erfolgshonorar als Anteil an nachgewiesenen Einsparungen unter einem Vergleichspreis, den Sie vor Verhandlungsbeginn freigeben.',
          'Kosten Dritter, etwa für Muster, Kurier, Tests und Inspektionen, werden gesondert vereinbart. Bergkraft nimmt keine Provision von Lieferanten.',
        ],
      },
      {
        q: 'Hält Bergkraft Lagerbestand?',
        a: [
          'Nein. Bergkraft ist ein Dienstleister für Beschaffung, kein Händler. Wir besitzen keine Ware und finanzieren sie nicht. Der Käufer schließt den Kaufvertrag in der Regel direkt mit dem Lieferanten, und Bergkraft hat mit dem Käufer einen separaten Dienstleistungsvertrag.',
        ],
      },
      {
        q: 'Welche Zahlungsbedingungen sind üblich?',
        a: [
          'In diesem Handel kommen unter anderem Vorauszahlung (ganz oder teilweise), ein Sichtakkreditiv (LC at sight) und das Dokumenteninkasso vor. Jede Variante verteilt Risiko und Kosten anders zwischen Käufer und Lieferant.',
          'Eine allgemein richtige Antwort gibt es nicht. Die passende Bedingung hängt vom Lieferanten, vom Auftragswert, von Ihrer Bank und davon ab, wie gut sich die Parteien kennen. Sie wird zwischen Ihnen und dem Lieferanten vereinbart.',
        ],
      },
      {
        q: 'Was ist die EUDR und wie betrifft sie Kaffeeimporte aus Indien nach Europa?',
        a: [
          'Die EU-Entwaldungsverordnung (EUDR) erfasst sieben Rohstoffe, darunter Kaffee. Unternehmen, die erfasste Produkte in der EU in Verkehr bringen, müssen mit einer Sorgfaltsprüfung belegen, dass die Ware entwaldungsfrei ist (nicht von Flächen, die nach dem 31. Dezember 2020 entwaldet wurden) und legal erzeugt wurde, und eine Sorgfaltserklärung abgeben. Zu den geforderten Angaben gehört die Geolokalisierung der Anbauflächen.',
          'Stand November 2026 gilt die Verordnung nach Angaben der Europäischen Kommission ab dem 30. Dezember 2026 für große und mittlere Marktteilnehmer und Händler und ab dem 30. Juni 2027 für Kleinst- und Kleinunternehmen. Die Termine wurden zweimal verschoben, und im Mai 2026 wurde eine Überprüfung zur Vereinfachung veröffentlicht. Den aktuellen Stand finden Sie auf der Seite der Kommission.',
          'Die rechtlichen Pflichten liegen beim Marktteilnehmer oder Händler in der EU. Bergkraft kann dabei helfen, Lieferanten zu finden, die flächengenaue Daten und Nachweise liefern können, und deren Zusammenstellung koordinieren. Wir handeln nicht als Ihr Marktteilnehmer und können die Einhaltung nicht garantieren.',
        ],
        link: {
          label: 'Europäische Kommission: EU-Entwaldungsverordnung (englisch)',
          href: 'https://environment.ec.europa.eu/topics/forests/deforestation/eu-deforestation-regulation-eudr_en',
        },
      },
    ],
  },
  contact: {
    h2: 'Sagen Sie uns, was Sie aus Indien beziehen möchten.',
    lead: 'Nennen Sie uns Produktspezifikation, Menge und Zielort. Wir prüfen Ihren Bedarf und besprechen mit Ihnen, wie Bergkraft Ihre Beschaffung unterstützen kann.',
    email: 'E-Mail',
    phones: { India: 'Indien (WhatsApp)', Germany: 'Deutschland (WhatsApp und Anrufe)' },
    honeypot: 'Dieses Feld bitte leer lassen',
    legendYou: 'Über Sie',
    legendReq: 'Ihr Bedarf',
    f: {
      name: 'Vor- und Nachname',
      role: 'Funktion',
      company: 'Unternehmen',
      website: 'Website des Unternehmens',
      email: 'Geschäftliche E-Mail-Adresse',
      phone: 'Telefonnummer',
      country: 'Land',
      product: 'Produkt',
      quantity: 'Menge je Bestellung (t)',
      specs: 'Qualität oder Spezifikation',
      orders: 'Geschätzte Bestellungen pro Jahr',
      destination: 'Zielland und Zielhafen',
      payment: 'Bevorzugte Zahlungsbedingungen',
      timeline: 'Zeitrahmen',
      additional: 'Weitere Anforderungen',
    },
    productOptions: ['Reis', 'Kaffee', 'Reis und Kaffee'],
    paymentOptions: ['Vorauszahlung', 'Sichtakkreditiv (LC at sight)', 'Dokumenteninkasso', 'Andere oder noch offen'],
    timelineOptions: ['Innerhalb eines Monats', '1 bis 3 Monate', '3 bis 6 Monate', 'Später oder zur Orientierung'],
    consent: ['Ich habe die ', 'Datenschutzerklärung', ' gelesen und bin einverstanden, dass Bergkraft die obigen Angaben nutzt, um diese Anfrage zu prüfen und zu beantworten.'],
    submit: 'Anfrage senden',
    sending: 'Wird gesendet',
    successTitle: 'Vielen Dank. Ihre Anfrage ist eingegangen.',
    successText: 'Wir prüfen Ihren Bedarf und antworten an die angegebene geschäftliche E-Mail-Adresse.',
    msg: {
      required: 'Bitte füllen Sie dieses Feld aus.',
      checkbox: 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      one: 'Bitte prüfen Sie das markierte Feld.',
      many: 'Bitte prüfen Sie die {n} markierten Felder.',
      failed: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an contact@bergkraftexports.com.',
    },
  },
  footer: {
    tagline: 'Ihr Einkaufsteam in Indien für Reis und Rohkaffee. Bezahlt vom Käufer, nicht vom Lieferanten.',
    places: 'Berlin, Deutschland und Mangalore, Indien',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    cookieSettings: 'Cookie-Einstellungen',
  },
  consent: {
    aria: 'Einwilligung für Analyse',
    title: 'Analyse-Cookies',
    text: 'Wir möchten Google Analytics einsetzen, um zu verstehen, wie diese Website genutzt wird. Dabei werden Cookies gesetzt und Nutzungsdaten an Google übermittelt. Das ist freiwillig, die Website funktioniert in beiden Fällen gleich.',
    policy: 'Cookie-Richtlinie',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
  },
  thanks: {
    title: 'Anfrage eingegangen | Bergkraft',
    h1: 'Vielen Dank.',
    lead: 'Wir haben Ihre Anfrage erhalten und antworten an die angegebene geschäftliche E-Mail-Adresse.',
    back: 'Zur Startseite',
  },
  notFound: { title: 'Seite nicht gefunden | Bergkraft', h1: 'Diese Seite gibt es nicht.', back: 'Zur Startseite' },
  legal: {
    draftStrong: 'Entwurf.',
    draft: 'Diese Seite enthält Punkte mit dem Hinweis „Vor Veröffentlichung zu prüfen“ und wurde noch nicht anwaltlich geprüft. Sie muss vor dem Livegang vervollständigt werden.',
    updated: 'Stand: November 2026',
    verify: 'Vor Veröffentlichung zu prüfen',
  },
};
