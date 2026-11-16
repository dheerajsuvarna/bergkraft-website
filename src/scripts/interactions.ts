// All client-side behaviour for the site. Deliberately small and dependency-free.
// Sections: header, mobile navigation, bag marking tabs, enquiry form,
// analytics consent, event tracking, language choice.

declare global {
  interface Window {
    dataLayer: unknown[];
    [key: `ga-disable-${string}`]: boolean;
  }
}

const $ = <T extends HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

/* Header: hairline appears once the page has scrolled ---------------------- */
const header = $('[data-header]');
const onScroll = () => header?.toggleAttribute('data-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobile navigation --------------------------------------------------------- */
const toggle = $<HTMLButtonElement>('[data-nav-toggle]');
const nav = $('[data-nav]');
function setNav(open: boolean) {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', String(open));
  nav.toggleAttribute('data-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
toggle?.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setNav(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { setNav(false); toggle.focus(); }
});
// Close the panel if the window grows to the desktop layout.
window.matchMedia('(min-width: 74.01rem)').addEventListener('change', (e) => { if (e.matches) setNav(false); });

/* Highlight the navigation link of the section in view --------------------- */
const navLinks = $$<HTMLAnchorElement>('[data-nav] li a').filter((a) => a.hash);
if ('IntersectionObserver' in window && navLinks.length) {
  const spy = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((a) => a.toggleAttribute('aria-current', false));
      navLinks.find((a) => a.hash === `#${entry.target.id}`)?.setAttribute('aria-current', 'true');
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => { const s = document.getElementById(a.hash.slice(1)); if (s) spy.observe(s); });
}

/* Bag marking tabs (hero) --------------------------------------------------- */
const bags = $('[data-bags]');
if (bags) {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', bags);
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    // Arrow keys move between tabs, as expected for a tab list.
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      if (next) select(next, true);
    });
  });
}

/* Enquiry form (Netlify Forms) --------------------------------------------- */
const form = $<HTMLFormElement>('[data-enquiry-form]');
if (form) {
  const errorBox = $('[data-form-error]', form);
  const success = $('[data-form-success]');
  const submit = $<HTMLButtonElement>('[data-submit]', form);
  type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
  const fields = () => Array.from(form.elements).filter((el): el is Field => 'validity' in el && (el as Field).name !== 'bot-field');

  // Messages come from data attributes on the form, so they follow the page language.
  const msg = form.dataset;
  const message = (el: Field) => {
    if (el.validity.valueMissing) return (el.type === 'checkbox' ? msg.msgCheckbox : msg.msgRequired) ?? el.validationMessage;
    if (el.validity.typeMismatch) return msg.msgEmail ?? el.validationMessage;
    return el.validationMessage;
  };
  function validateField(el: Field): boolean {
    const id = `${el.id || el.name}-error`;
    document.getElementById(id)?.remove();
    const ok = el.checkValidity();
    el.setAttribute('aria-invalid', String(!ok));
    if (ok) { el.removeAttribute('aria-describedby'); return true; }
    const note = document.createElement('span');
    note.id = id; note.className = 'field-error'; note.textContent = message(el);
    (el.closest('.field') ?? el.closest('label') ?? el.parentElement)?.append(note);
    el.setAttribute('aria-describedby', id);
    return false;
  }
  const showError = (text: string) => { if (errorBox) { errorBox.textContent = text; errorBox.hidden = false; } };

  // Re-check a field once the visitor has corrected it.
  form.addEventListener('change', (e) => {
    const el = e.target as Field;
    if (el.getAttribute('aria-invalid') === 'true') validateField(el);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorBox) errorBox.hidden = true;
    const invalid = fields().filter((el) => !validateField(el));
    if (invalid.length) {
      showError((invalid.length === 1 ? msg.msgOne : msg.msgMany?.replace('{n}', String(invalid.length))) ?? '');
      invalid[0]?.focus();
      return;
    }
    if (submit) { submit.disabled = true; submit.textContent = msg.labelSending ?? ''; }
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      form.hidden = true;
      if (success) { success.hidden = false; success.focus(); }
      track('generate_lead', { product: String(new FormData(form).get('product') ?? '') });
    } catch {
      showError(msg.msgFailed ?? '');
      if (submit) { submit.disabled = false; submit.textContent = msg.labelSubmit ?? ''; }
    }
  });
}

/* Analytics consent --------------------------------------------------------- */
// Nothing is sent to Google until the visitor chooses "Accept". The choice is
// kept in localStorage (wrapped in try/catch because storage can be blocked).
const CONSENT_KEY = 'bk-analytics-consent';
const banner = $('[data-consent]');
const gaId = banner?.dataset.gaId ?? '';
let analyticsLoaded = false;
let gtagFn: ((...args: unknown[]) => void) | null = null;

/** Send an event to Google Analytics. Does nothing unless the visitor has accepted analytics. */
function track(name: string, params: Record<string, string> = {}) {
  if (gtagFn) gtagFn('event', name, { language: document.documentElement.lang, ...params });
}

const readConsent = (): string | null => { try { return localStorage.getItem(CONSENT_KEY); } catch { return null; } };
const writeConsent = (v: string) => { try { localStorage.setItem(CONSENT_KEY, v); } catch { /* storage unavailable */ } };

function loadAnalytics() {
  if (analyticsLoaded || !gaId) return;
  analyticsLoaded = true;
  window[`ga-disable-${gaId}`] = false;
  window.dataLayer = window.dataLayer || [];
  // gtag must push the `arguments` object itself, so this cannot be an arrow function.
  function gtag(..._args: unknown[]) { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', gaId);
  gtagFn = gtag;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.append(s);
}
function stopAnalytics() {
  if (!gaId) return;
  window[`ga-disable-${gaId}`] = true;
  // Remove Google Analytics cookies that may have been set earlier.
  for (const c of document.cookie.split(';')) {
    const name = c.split('=')[0]?.trim();
    if (name && name.startsWith('_ga')) {
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`;
    }
  }
}

if (banner) {
  const saved = readConsent();
  if (saved === 'granted') loadAnalytics();
  else if (saved !== 'denied') banner.hidden = false;

  $$<HTMLButtonElement>('[data-consent-choice]', banner).forEach((btn) =>
    btn.addEventListener('click', () => {
      const choice = btn.dataset.consentChoice === 'granted' ? 'granted' : 'denied';
      writeConsent(choice);
      banner.hidden = true;
      if (choice === 'granted') loadAnalytics(); else stopAnalytics();
    }),
  );
  $$('[data-consent-open]').forEach((btn) =>
    btn.addEventListener('click', () => { banner.hidden = false; $<HTMLButtonElement>('button', banner)?.focus(); }),
  );
}

/* Event tracking ------------------------------------------------------------ */
// Clicks on elements marked with data-track (main buttons, email, WhatsApp,
// LinkedIn) and FAQ openings are reported as events. See README, "Analytics".
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const id = el.dataset.track ?? '';
  if (id.startsWith('contact_')) track('contact_click', { method: id.replace('contact_', '') });
  else if (id.startsWith('cta_')) track('cta_click', { location: id.replace('cta_', '') });
  else track('outbound_click', { target: id });
});
$$<HTMLDetailsElement>('details[data-faq]').forEach((el) =>
  el.addEventListener('toggle', () => { if (el.open) track('faq_open', { question: el.dataset.faq ?? '' }); }),
);

/* Language choice ------------------------------------------------------------ */
// Visitors from Germany, Austria and Switzerland are sent to the German
// homepage by a rule in netlify.toml. If such a visitor picks English, the
// cookie below tells that rule to leave them on the English page. It is only
// set when someone uses the language switcher.
const EN_COOKIE = 'bk_lang_en';
$$<HTMLAnchorElement>('[data-lang]').forEach((a) =>
  a.addEventListener('click', () => {
    document.cookie = a.dataset.lang === 'en'
      ? `${EN_COOKIE}=1; Max-Age=31536000; Path=/; SameSite=Lax; Secure`
      : `${EN_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
    track('language_switch', { to: a.dataset.lang ?? '' });
  }),
);

export {};
