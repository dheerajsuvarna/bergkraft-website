import { defineConfig } from 'astro/config';

// Static site. No adapter is needed: Netlify serves the generated /dist folder.
export default defineConfig({
  site: 'https://bergkraftexports.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
