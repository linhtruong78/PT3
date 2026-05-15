# PT3 Global Royal — Royal Persian Spirits

A modern, luxury, multi-language brand website for **PT3 Global Royal**, built with **Vite + React + Tailwind**. Six pages, six products, six languages (EN · FR · ES · AR · FA · VI), a cinematic 30-second promo MP4 ready for Reels/TikTok, and a one-push deploy pipeline.

[![Build & Deploy](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml/badge.svg)](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml)

---

## Quick start (local development)

You need **Node 18 or newer** installed. Then in this folder:

```bash
npm install
npm run dev          # opens http://localhost:5173
```

Other scripts:

```bash
npm run build        # production build into ./dist
npm run preview      # serves the production build locally for QA
```

---

## Publishing the code to GitHub

If you've never pushed this folder to GitHub before, do this once:

```bash
# 1. Create a new empty repo on GitHub.com (UI: "+ New repository")
#    Pick a name — let's call it: pt3-global-royal
#    DO NOT add a README, .gitignore, or license — keep the new repo empty.

# 2. In a terminal in this project folder:
git init
git add .
git commit -m "Initial commit: PT3 Global Royal website"
git branch -M main
git remote add origin https://github.com/<your-username>/pt3-global-royal.git
git push -u origin main
```

That's it — the code is on GitHub.

---

## Automatic build & deploy (GitHub Pages)

After the first push:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **"GitHub Actions"** (NOT "Deploy from a branch").
4. Push any change to `main` — the workflow at `.github/workflows/deploy.yml` will:
   - Install dependencies
   - Build the site with the correct base path for Pages
   - Add a `404.html` SPA fallback so deep links survive a refresh
   - Publish to `https://<your-username>.github.io/<repo-name>/`

You can watch the run live in the **Actions** tab. First build usually finishes in ~2 minutes.

To re-deploy without pushing code, open the **Actions** tab → **Build & Deploy** → **Run workflow**.

### Why does the workflow set `BASE_PATH`?

GitHub Pages serves project sites at a sub-path (e.g. `/pt3-global-royal/`), so the bundled CSS/JS URLs need that prefix. The workflow passes `BASE_PATH=/<repo-name>/` to `vite build`; the same `main.jsx` reads it back via `import.meta.env.BASE_URL` so React Router stays in sync.

---

## Alternative deploys (one-click)

The repo already includes config files for the two most popular alternatives. You don't have to choose now — feel free to set up GitHub Pages first, then switch later.

### Vercel — recommended for a custom domain

1. Sign in at <https://vercel.com> with GitHub.
2. **Add New… → Project**, pick this repository.
3. Build settings are auto-detected from `vercel.json`. Click **Deploy**.
4. You get a URL like `pt3-global-royal.vercel.app` and can add a custom domain in **Settings → Domains**.

### Netlify

1. Sign in at <https://app.netlify.com> with GitHub.
2. **Add new site → Import an existing project**, pick this repository.
3. Build settings come from `netlify.toml`. Click **Deploy**.
4. Add a custom domain in **Site settings → Domain management**.

Both Vercel and Netlify will rebuild and redeploy automatically on every push to `main`, just like the GitHub Pages workflow.

---

## Hooking up a custom domain (e.g. araksagi.com)

The brand uses `www.araksagi.com`. To point it at your deployed site:

### On GitHub Pages

1. In the repo, **Settings → Pages → Custom domain** → enter `www.araksagi.com` and **Save**.
2. GitHub creates a file named `CNAME` in the `gh-pages` branch automatically.
3. At your DNS provider (Cloudflare, Namecheap, GoDaddy…), add the records GitHub shows you:
   - `CNAME` `www` → `<your-username>.github.io`
   - or four `A` records pointing the apex `araksagi.com` to GitHub Pages' IPs (listed in the GH Pages docs).
4. Wait for DNS to propagate (a few minutes to an hour). Re-check the **Custom domain** field — GitHub will tick "DNS check successful" once it resolves.
5. Tick **Enforce HTTPS**.

### On Vercel or Netlify

Both hosts have a guided **Add domain** flow inside the dashboard. They issue a free Let's Encrypt SSL cert automatically.

---

## Project layout

```
wine/
├── .github/workflows/deploy.yml    # GH Pages auto-deploy
├── public/
│   ├── brand/                      # crest, marble, collection hero, ambassador
│   ├── products/                   # six product posters
│   ├── promo/
│   │   ├── reel.mp4                # 30s brand reel (vertical 9:16)
│   │   └── arak-sagi.mp4           # 30s Arak Sagi ad reel
│   └── favicon.svg
├── src/
│   ├── App.jsx                     # routes
│   ├── main.jsx                    # ReactDOM root + Router basename
│   ├── index.css                   # Tailwind + brand utilities + reel CSS
│   ├── components/
│   │   ├── Navbar.jsx              # crest left, six nav links right
│   │   ├── Footer.jsx              # newsletter, social, offices, legal
│   │   ├── ChatWidget.jsx          # WhatsApp + Telegram + email pill
│   │   ├── LanguageSwitcher.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductSlider.jsx       # snap-scroll carousel
│   │   ├── ProductVisual.jsx       # photo or themed placeholder
│   │   ├── InstagramGrid.jsx
│   │   ├── LocationsBlock.jsx      # cities + constellation map
│   │   ├── Reveal.jsx              # scroll-trigger fade-up
│   │   └── SectionHeading.jsx
│   ├── pages/
│   │   ├── Home.jsx                # hero, pillars, slider, banner, locations, IG
│   │   ├── About.jsx               # heritage story + ambassador banner
│   │   ├── Products.jsx            # listing + filter
│   │   ├── ProductDetail.jsx       # themed per-product page
│   │   ├── Production.jsx          # five facilities
│   │   ├── Gallery.jsx             # masonry + lightbox
│   │   ├── Contact.jsx             # form + offices grid
│   │   ├── Promo.jsx               # reel player + download
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── products.js             # six products, multi-lang
│   │   └── offices.js              # addresses, phones, brand contacts
│   └── i18n/
│       ├── LanguageContext.jsx     # provider + RTL switching
│       └── translations.js         # EN/FR/ES/AR/FA/VI
├── netlify.toml                    # Netlify SPA config
├── vercel.json                     # Vercel SPA config
├── tailwind.config.js              # brand colours, fonts, animations
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

### Bonus deliverables in the workspace root

- `PT3_promo_reel_9x16.mp4` — 30s brand-mood reel, ready to upload
- `PT3_ArakSagi_reel_9x16.mp4` — 30s Arak Sagi product reel
- `PT3_ArakSagi_storyboard.md` — production brief for the human-driven version

---

## Brand system reference

| Token | Value | Used for |
|---|---|---|
| `matte-black` | `#0a0a0a` | Page background |
| `gold` (metallic) | `#c8a04a` | Primary accent |
| `gold.light` (champagne) | `#e8d4a0` | Highlights, hover |
| `gold.rose` | `#c89b8c` | Rosé product theme |
| `burgundy` | `#5a1a2b` | Red wine theme |
| `emerald` | `#0f5132` | Beer theme |
| Display font | Cinzel | Headings, navigation |
| Serif font | Cormorant Garamond | Body, italic copy |
| Sans font | Inter | UI |
| Persian/Arabic | Vazirmatn | RTL languages |

---

## Adding a new product

1. Drop the poster image into `public/products/<slug>.jpeg`.
2. Append a new object to the `PRODUCTS` array in `src/data/products.js`. Copy any existing entry as a template; fill in `name`, `tagline`, `description`, `identity`, `mood`, `theme`, `format`, `abv` for each language.
3. That's all — the listing page, slider, footer collection, and detail route pick it up automatically.

---

## Languages

| Code | Language | Direction |
|---|---|---|
| `en` | English | LTR |
| `fr` | Français | LTR |
| `es` | Español | LTR |
| `vi` | Tiếng Việt | LTR |
| `ar` | العربية | RTL |
| `fa` | فارسی | RTL |

Add another language by:
1. Appending a new block to `src/i18n/translations.js` (copy the English block and translate the strings).
2. Adding the entry to `SUPPORTED_LANGUAGES` in `src/i18n/LanguageContext.jsx`.
3. If RTL, add the code to `RTL_LANGS` in the same file.

---

## Common questions

**The build works locally but assets 404 on GitHub Pages.**
The `BASE_PATH` env var in the workflow must match your repo name. The workflow already sets it dynamically from `github.event.repository.name` — no manual edit needed.

**I refreshed `/about` on GitHub Pages and got a 404.**
GitHub Pages doesn't know about React routes. The workflow already copies `dist/index.html` to `dist/404.html` as the SPA fallback, so refreshes work after the first deploy. Make sure the most recent build succeeded.

**How do I deploy to a different branch / a custom domain root?**
Set `BASE_PATH=/` in the workflow (or remove the env var) and either point a custom domain at GitHub Pages, or use Vercel / Netlify which serve at the apex out of the box.

---

## License

Proprietary — © PT3 Global Royal. All product names, logos and marks are property of their respective owner.
