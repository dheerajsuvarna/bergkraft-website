// All client-side behaviour for the site. Deliberately small and dependency-free.
// Sections: header, mobile navigation, scroll reveal, number count-up,
// enquiry form, analytics consent.

declare global {
  interface Window {
    dataLayer: unknown[];
    [key: `ga-disable-${string}`]: boolean;
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
window.matchMedia('(min-width: 68.01rem)').addEventListener('change', (e) => { if (e.matches) setNav(false); });

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

/* Scroll reveal and count-up ------------------------------------------------ */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const prefix = el.dataset.prefix ?? '';
  const format = (n: number) => prefix + Math.round(n).toLocaleString('en-US');
  if (reduceMotion || !Number.isFinite(target)) { el.textContent = format(target); return; }
  const start = performance.now(), duration = 1200, from = target * 0.6;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = format(from + (target - from) * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const revealEls = $$('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      el.classList.add('is-visible');
      $$('[data-count]', el).forEach(countUp);
      io.unobserve(el);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
}

/* Enquiry form (Netlify Forms) --------------------------------------------- */
const form = $<HTMLFormElement>('[data-enquiry-form]');
if (form) {
  const errorBox = $('[data-form-error]', form);
  const success = $('[data-form-success]');
  const submit = $<HTMLButtonElement>('[data-submit]', form);
  type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
  const fields = () => Array.from(form.elements).filter((el): el is Field => 'validity' in el && (el as Field).name !== 'bot-field');

  const message = (el: Field) => {
    if (el.validity.valueMissing) return el.type === 'checkbox' ? 'Please confirm you have read the privacy policy.' : 'This field is required.';
    if (el.validity.typeMismatch) return 'Please enter a valid email address.';
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
      showError(`Please check ${invalid.length === 1 ? 'the highlighted field' : `the ${invalid.length} highlighted fields`}.`);
      invalid[0]?.focus();
      return;
    }
    if (submit) { submit.disabled = true; submit.textContent = 'Sending'; }
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      form.hidden = true;
      if (success) { success.hidden = false; success.focus(); }
    } catch {
      showError('Sorry, your enquiry could not be sent. Please try again, or email contact@bergkraftexports.com.');
      if (submit) { submit.disabled = false; submit.textContent = 'Send enquiry'; }
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

export {};
