# RepoRadar Website

Marketing landing for [RepoRadar](https://www.linkedin.com/company/reporadar/).

Built with Next.js 16 (App Router) + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Newsletter integration

The `/api/subscribe` endpoint validates emails and forwards them somewhere.
Choose one:

| Backend | Env vars | Notes |
|---|---|---|
| None (dev) | – | Logs the email and returns success. |
| Generic webhook | `NEWSLETTER_WEBHOOK_URL` | POSTs `{ email, source }` JSON. Works with Zapier / Make / n8n. |
| Resend | `RESEND_API_KEY`, `RESEND_AUDIENCE_ID` | Adds the email to a Resend audience. |

See `.env.example`. Add the chosen vars to Vercel → Project → Settings → Environment Variables.

## Deploy to Vercel

1. Push this repo to GitHub.
2. On Vercel: **New Project → Import this repo**.
3. Framework preset auto-detects as **Next.js**. Leave build command and
   output directory at the defaults.
4. (Optional) Add newsletter env vars under **Environment Variables**.
5. Deploy.

Every push to the branch you configure will redeploy.

## Structure

```
.
├── app/
│   ├── api/subscribe/route.ts   # Newsletter intake (edge runtime)
│   ├── globals.css              # Tailwind + custom keyframes
│   ├── layout.tsx               # Root layout, metadata, font loading
│   └── page.tsx                 # All page sections live here
├── components/
│   ├── Logo.tsx                 # Logo + wordmark
│   └── NewsletterForm.tsx       # Client-side email signup form
└── public/
    └── logo.png                 # Brand logo (also used as favicon / OG image)
```

## Brand

Colors derived from the RepoRadar logo:

- Navy `#0F2143` (primary text + CTAs)
- Coral `#FF9B7A` (accent)
- Cream `#FBF8F3` (surface)
