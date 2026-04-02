# SPICE BITES — スパイスバイツ

> 本格インド料理レストラン「スパイスバイツ」の公式ウェブサイト  
> Official website for **SPICE BITES** — Authentic Indian restaurant in Hirabari, Nagoya.

**Live site:** https://spice-bites-hirabari.com/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS 3 |
| Fonts | Noto Sans JP / Noto Serif JP / Playfair Display (Google Fonts) |
| Images | Next.js `<Image>` with remote CDN patterns |
| Deployment | Vercel |

---

## Project Structure

```
spice bits/
├── app/
│   ├── layout.tsx          # Root layout — fonts, SEO meta, JSON-LD schema
│   ├── globals.css         # Tailwind base + component utilities
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx       # Full menu (Course / Lunch / Dinner / Curry / Drinks)
│   ├── policy/page.tsx     # こだわり (Philosophy) page
│   ├── gallery/page.tsx    # Gallery with lightbox
│   └── access/page.tsx     # Store info + Google Maps
├── components/
│   ├── Header.tsx          # Sticky responsive header with mobile drawer
│   ├── Footer.tsx
│   └── sections/           # Homepage section components
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── About.tsx
│       ├── SignatureFeatures.tsx
│       ├── MenuPreview.tsx
│       ├── ChefStory.tsx
│       ├── GallerySection.tsx
│       ├── CourseCta.tsx
│       └── StoreInfo.tsx
├── lib/
│   └── data.ts             # All menu items, store info, image URLs
├── .vscode/settings.json   # Suppress Tailwind CSS false-positive warnings
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Local Development

### Prerequisites
- Node.js 18.17 or later
- npm 9+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/spice-bites.git
cd spice-bites

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # ESLint check
```

---

## Deploying to Vercel

### Method 1 — Vercel CLI (Recommended for first deploy)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy from the project directory
cd "c:\WEB Templete\spice bits"
vercel

# Follow the prompts:
#   Set up and deploy? → Yes
#   Which scope? → Select your account/team
#   Link to existing project? → No (first time)
#   Project name? → spice-bites  (or any name)
#   Directory? → ./  (press Enter)
#   Override settings? → No

# 4. For production deployment (uses main branch)
vercel --prod
```

Your site will be live at: `https://spice-bites.vercel.app` (or your custom domain)

---

### Method 2 — GitHub + Vercel Dashboard (Auto-deploy on push)

**Step 1 — Push code to GitHub**

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: SPICE BITES website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/spice-bites.git
git branch -M main
git push -u origin main
```

**Step 2 — Import to Vercel**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `spice-bites` GitHub repo
4. Vercel auto-detects Next.js — no config changes needed
5. Click **"Deploy"**

**Step 3 — Every push auto-deploys**

```bash
git add .
git commit -m "Update menu prices"
git push
# Vercel automatically rebuilds and deploys in ~30 seconds
```

---

### Vercel Project Settings

No environment variables are required — all data is in `lib/data.ts`.

If you add a `.env.local` file later (e.g. for a CMS or database), add those variables in:  
**Vercel Dashboard → Your Project → Settings → Environment Variables**

| Variable | Description | Required |
|---|---|---|
| *(none currently)* | All data is static | — |

#### Build & Output Settings (auto-detected)

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 18.x or 20.x |

---

### Custom Domain (Optional)

1. In Vercel Dashboard → **Settings → Domains**
2. Add your domain: `spice-bites-hirabari.com`
3. Update your DNS provider:
   - Add **A record**: `76.76.21.21`
   - Add **CNAME**: `www` → `cname.vercel-dns.com`
4. Vercel automatically provisions an SSL certificate (HTTPS)

---

## Image Configuration

Remote images from the original CDN are whitelisted in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "spice-bites-hirabari.com",
      pathname: "/storage/images/**",
    },
  ],
},
```

To use local images instead, place them in `/public/images/` and update paths in `lib/data.ts`.

---

## SEO Features Built-in

- Unique `<title>` and `<meta description>` per page
- **LocalBusiness JSON-LD schema** (shows hours, price range, address in Google results)
- Semantic HTML with proper heading hierarchy
- Descriptive `alt` text on all images
- `lang="ja"` on `<html>` element
- Static generation (all 6 pages pre-rendered at build time)

---

## License

© 2026 SPICE BITES. All rights reserved.
