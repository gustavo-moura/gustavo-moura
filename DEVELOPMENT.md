# Development

Personal site, built with [Astro](https://astro.build). Dev notes here, active follow-ups in [TODO.md](TODO.md).

## Develop

```bash
npm install
npm run dev       # http://localhost:1234
npm run build     # static output in dist/
```

## Structure

- `src/content/` — `blog`, `publications`, `games`, `authors`, and `about.mdx`
- `src/pages/` — routes (home, blog, research, games, resources, about, tags)
- `src/styles/global.css` — colors, fonts, aurora background
- `src/consts.ts` — site title, nav, social links

## Deploy

Pushes to `main` trigger `.github/workflows/astro-deploy.yaml`, which builds
and publishes via `actions/deploy-pages@v4`.

**One-time setup**: Repo **Settings → Pages → Source** must be set to
**GitHub Actions** (not "Deploy from a branch").
