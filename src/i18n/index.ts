// Language helpers. English is the default and lives at "/"; German lives at "/de/".
import { en, type Dict } from './en';
import { de } from './de';

export type Lang = 'en' | 'de';
export const languages: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

const dicts: Record<Lang, Dict> = { en, de };
export const t = (lang: Lang): Dict => dicts[lang];

/** Prefix a site path with the language folder, e.g. path('de', '/cookies/') -> '/de/cookies/'. */
export const path = (lang: Lang, p: string): string => (lang === 'de' ? `/de${p}` : p);

/** The same page in another language, for the switcher and hreflang tags. */
export function alternate(pathname: string, to: Lang): string {
  const bare = pathname.replace(/^\/de(?=\/|$)/, '') || '/';
  return path(to, bare);
}

/** Format a US dollar amount for the language. */
export const usd = (lang: Lang, n: number): string =>
  lang === 'de' ? `${n.toLocaleString('de-DE')} USD` : `$${n.toLocaleString('en-US')}`;
