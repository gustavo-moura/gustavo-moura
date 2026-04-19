# Gustavo de Moura

Personal site, built with [Astro](https://astro.build) on top of the
[astro-erudite](https://github.com/jktrn/enscribe.dev) theme.

## Develop

```bash
npm install
npm run dev       # http://localhost:1234
npm run build     # static output in dist/
```

## Structure

- `src/content/` — `blog`, `publications`, `games`, `authors`, and `about.mdx`
- `src/pages/` — routes (home, blog, publications, games, resources, about, tags)
- `src/styles/global.css` — colors, fonts
- `src/consts.ts` — site title, nav, social links

## Deploy

Pushes to `main` trigger `.github/workflows/astro-deploy.yaml`, which builds
and publishes via `actions/deploy-pages@v4`.

**One-time setup**: Repo **Settings → Pages → Source** must be set to
**GitHub Actions** (not "Deploy from a branch").
