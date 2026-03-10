# Hashstack Landing Page

The marketing/landing page for [hashstack.finance](https://hashstack.finance), built with Next.js 15 and deployed to GitHub Pages.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15.x | Framework (static export) |
| React | 19.x | UI |
| TypeScript | 5.x | Language |
| Tailwind CSS | 4.x | Styling |
| Yarn | - | Package manager (CI) |
| Bun | - | Package manager (local dev) |

---

## Local Development

```bash
# Install dependencies
bun install

# Start dev server (with Turbopack)
bun dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-reloads on file changes.

> **Note:** CI uses `yarn`. Locally, `bun` is preferred for speed. Both work.

---

## Build

The project is configured as a **static export** (`output: 'export'` in `next.config.js`). Running build generates a fully static site in `./out/`.

```bash
bun run build
# Output: ./out/
```

---

## Deployment

### Hosting: GitHub Pages

The site is hosted on **GitHub Pages** at [hashstack.finance](https://hashstack.finance) via a custom domain.

### Deployment Branch

| Branch | Purpose |
|---|---|
| `prod-github-pages` | **Production** — pushes here trigger a live deployment |
| `production` | Legacy branch (was used for old AWS S3/CloudFront deployment — do not use) |

### CI/CD Workflow

File: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

Triggered automatically on every push to `prod-github-pages`. Can also be triggered manually via GitHub Actions → **Run workflow**.

**Pipeline steps:**
1. **Build job** — Checks out code, installs dependencies with `yarn`, runs `yarn build`, uploads `./out` as a Pages artifact
2. **Deploy job** — Takes the artifact and deploys it to GitHub Pages

```
push to prod-github-pages
        ↓
  [build job]
  yarn install → yarn build → upload ./out
        ↓
  [deploy job]
  deploy artifact → hashstack.finance live
```

### How to Deploy

```bash
# Make your changes on any branch, then:
git checkout prod-github-pages
git merge <your-branch>
git push origin prod-github-pages
# GitHub Actions picks it up automatically (~1-2 min)
```

Monitor deployment at: `https://github.com/0xHashstack/hstk-landing/actions`

### GitHub Pages Settings

- **Source:** GitHub Actions (not the legacy branch/folder method)
- **Custom domain:** `hashstack.finance`
- **HTTPS:** Enforced
- **Repository:** Settings → Pages

> The `public/CNAME` file contains `hashstack.finance` — this is required for the custom domain to persist across deployments.

---

## DNS Configuration

DNS is managed on **Namecheap** (migrated from AWS Route 53 in March 2025).

| Record | Type | Value |
|---|---|---|
| `hashstack.finance` | A | `185.199.108/109/110/111.153` (GitHub Pages) |
| `www` | CNAME | `0xhashstack.github.io` |
| `app` | A | `185.199.108/109/110/111.153` (GitHub Pages) |
| `token` | CNAME | `d1cb12cmfm8zq3.cloudfront.net` |
| `docs` | CNAME | `8032f16d47-hosting.gitbook.io` |
| `status` | CNAME | `statuspage.betteruptime.com` |

**Nameservers:** `dns1.registrar-servers.com` / `dns2.registrar-servers.com` (Namecheap BasicDNS)

**Mail:** Configured via Namecheap Mail Settings → Gmail (Google Workspace MX records auto-managed).

---

## Repository Structure

```
hstk-landing/
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable UI components
├── public/
│   └── CNAME               # Custom domain for GitHub Pages (do not delete)
├── .github/
│   └── workflows/
│       ├── deploy.yml      # Production deployment (GitHub Pages)
│       └── staging-deploy.yml  # Legacy staging (AWS S3 — unused)
├── next.config.js          # Static export config
└── package.json
```

---

## Environment / Secrets

No environment variables or secrets are required for the current GitHub Pages deployment. The site is fully static.

> The legacy AWS deployment used `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` GitHub secrets — these are no longer needed and can be removed from repository settings.

---

## Infrastructure Notes (for handover)

- **AWS:** All AWS hosting resources (CloudFront, S3, API Gateway, ECR) have been decommissioned as of March 2025.
- **Previous hosting:** The site was previously hosted on AWS S3 + CloudFront (`www.hashstack.finance`). The `production` branch still has the old AWS deploy workflow but it is no longer triggered.
- **Token page:** `token.hashstack.finance` still uses a separate CloudFront distribution pointing to an S3 bucket (`token.hashstack.finance` S3). This is independent of the landing page deployment.
- **App:** `app.hashstack.finance` is served by GitHub Pages (same GitHub Pages setup, different subdomain A records in Namecheap DNS).
