# Bergkraft website

Website for Bergkraft Private Limited, an independent buyer-side sourcing and procurement partner in India.

Built with Astro (static output), TypeScript, plain CSS and one small script. Hosted on Netlify, with Netlify Forms for the enquiry form.

## Requirements

- Node.js 22 or newer
- npm

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server at http://localhost:4321 |
| `npm run build` | Type-check, then build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check only |
| `npm run placeholders` | Regenerate the temporary artwork and the social sharing image |

## Project structure

```
public/            Static files: images, favicon, robots.txt, sitemap.xml
src/data/site.ts   Business facts, contact details, navigation, image list
src/data/faq.ts    FAQ questions and answers (also used for structured data)
src/components/    One component per homepage section, plus shared parts
src/layouts/       BaseLayout (head, header, footer) and LegalLayout
src/pages/         index, impressum, datenschutz, cookies, thank-you, 404
src/styles/        global.css: design tokens, base styles, utilities
src/scripts/       interactions.ts: menu, reveal, form, analytics consent
tools/             Script that generates the temporary artwork
netlify.toml       Build settings and security headers
```

## Deploying to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: Add new site, Import an existing project, choose the repository.
3. Build command `npm run build`, publish directory `dist` (both are read from `netlify.toml`).
4. Deploy, then add the custom domain `bergkraftexports.com` under Domain management.
5. Under Forms, confirm that the form `sourcing-enquiry` was detected (enable form detection if asked, then redeploy).
6. Under Forms, Form notifications, add an email notification to `contact@bergkraftexports.com`.
7. Send one real test enquiry from the live site and confirm it arrives.

## Updating content

- Contact details, navigation, LinkedIn URLs, GA4 ID: `src/data/site.ts`
- FAQ: `src/data/faq.ts`
- Section copy: the matching file in `src/components/`
- Colours, type and spacing: the tokens at the top of `src/styles/global.css`
- Illustrative benchmark figures: the `ex` object in `src/components/Benchmark.astro` (derived values are calculated)
- New pages: add them to `public/sitemap.xml`

## Images to replace

All current images are abstract temporary artwork, not photographs, and show a "Temporary image" tag. Replace each file in `public/images/` with genuine photography, update the entry in `src/data/site.ts` (path, width, height) and set `temporary: false` to remove the tag. Use only images Bergkraft owns or has licensed, and do not present stock images as Bergkraft facilities, suppliers or shipments.

| File | Used in | Suggested replacement | Ratio |
| --- | --- | --- | --- |
| `hero-rice.svg` | Hero | Macro of Basmati rice grains | 3:4 |
| `hero-coffee.svg` | Hero | Macro of green coffee beans | 1:1 |
| `rice-detail.svg` | Rice | Rice grains or a sample tray | 4:5 |
| `coffee-detail.svg` | Coffee | Green coffee or coffee cherries | 4:5 |
| `coffee-estate.svg` | Coffee | Coffee estate in Coorg or Chikmagalur | 16:7 |
| `founder-placeholder.svg` | Founder | Portrait of Dheeraj Suvarna | 4:5 |
| `og-image.png` | Link previews | Optional branded image, 1200 x 630 | |

For photographs, use compressed WebP or AVIF files no wider than 1600 px.

## To verify before launch

Legal pages (search the code for `<Verify` to see every item):

- Registered office address, CIN, directors, GSTIN, any German or EU VAT ID
- IEC `AAOCB0571C` against the original certificate
- Whether an EU representative (Art. 27 GDPR) is required
- Data processing agreements with Netlify and Google, transfer safeguards for the USA and India
- Retention periods for enquiries
- Competent supervisory authority
- Legal review of Impressum, privacy policy and cookie policy. Then set `legalPagesReviewed: true` in `src/data/site.ts` to remove the draft notice.

Content:

- LinkedIn URLs for the company and the founder (`src/data/site.ts`)
- Both phone numbers and that WhatsApp is active on them
- EUDR answer in `src/data/faq.ts`: dates are stated as of November 2026 and must be rechecked against the European Commission page at launch
- Trade descriptions of rice varieties and coffee grades in `Rice.astro` and `Coffee.astro`
- If Bergkraft or its founder has a personal or commercial tie to any supplier or farm network, add a disclosure where "independent" is claimed
- Any response-time promise: none is made on the site

## What has and has not been tested

Tested locally against the production build in headless Chrome:

- Build and type-check pass with no errors
- No horizontal overflow at 360, 390, 768, 1024 and 1440 px
- Navigation anchors resolve, mobile menu opens and closes
- Form validation, success state (with a simulated server response) and error state
- No request to Google before consent or after declining; GA4 script loads after accepting
- No browser console errors

Not tested, because they need the live Netlify site or real accounts:

- Real Netlify Forms submissions, spam filtering and email notifications
- GA4 receiving data in the property `G-VB6WR8LTBC`
- Lighthouse scores on the deployed site
- Screen-reader testing with assistive technology

## Maintenance

- Run `npm outdated` every few months and update Astro with `npx @astrojs/upgrade`.
- Rebuild and check the site after any dependency update.
- Never commit secrets. The site needs none: the GA4 measurement ID is public by design.
