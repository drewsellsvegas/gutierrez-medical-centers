# Gutierrez Medical Centers

Website for Gutierrez Medical Centers — Manuel Gutierrez Jr, MD, family medicine,
Henderson NV. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

**Live:** https://drewsellsvegas.github.io/gutierrez-medical-centers/

## Files

| File | What it is |
|---|---|
| `index.html` | The entire page — all content, SEO meta tags, and JSON-LD structured data |
| `styles.css` | All styling (brand colors are CSS variables at the top) |
| `script.js` | Sticky nav, mobile menu, contact form |
| `assets/` | Photos, logo/favicon, social share image |
| `robots.txt`, `sitemap.xml` | Search engine files |

## Editing

Everything is plain text — open a file, change it, commit. No build, no install.
Brand colors live in the `:root` block at the top of `styles.css`.

## Contact form

By default the form opens the visitor's email app with their message pre-filled
and sends it to GutierrezMD@gutierrezmed.co. That works everywhere with zero setup.

To have submissions emailed automatically instead, create a free form endpoint
(e.g. Formspree) and paste it into the first line of `script.js`:

```js
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ID";
```

## Connecting a custom domain (e.g. gutierrezmed.com)

1. In the repo: **Settings → Pages → Custom domain**, enter the domain, save.
   That creates a `CNAME` file in this repo.
2. At the domain registrar, add DNS records pointing at GitHub Pages:
   - `A` records for the apex domain → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `drewsellsvegas.github.io`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate issues
   (usually within an hour).
4. Find and replace `https://drewsellsvegas.github.io/gutierrez-medical-centers/`
   with the new domain across `index.html`, `robots.txt`, and `sitemap.xml` —
   these are the canonical URL, Open Graph tags, and structured data, and search
   engines need them to match the real address.

## After launch

- Submit the sitemap in Google Search Console.
- Make sure the Google Business Profile lists the exact same name, address, and
  phone as the footer here — mismatches split local SEO signals.
