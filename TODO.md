# TODO

Running list of follow-ups for the Astro migration. Delete items once done.

## Assets

- [ ] **Add missing publication image** — `public/images/publications/master_thesis_2.png` is referenced by `src/content/publications/master-thesis.md` but the file has not been added yet. Build will fail (content-collection image validation) until it exists.
- [ ] **Restore / regenerate favicons** — `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, and the two `web-app-manifest-*.png` files were deleted. Right now only `favicon-96x96.png` and `logo.png` are wired up in `Favicons.astro` + `site.webmanifest`. Consider generating a full set again (e.g. via realfavicongenerator.net) and re-adding the refs.

## Deployment

- [ ] **Verify GitHub Pages source is set to "GitHub Actions"** — Repo → Settings → Pages → Build and deployment → Source: *GitHub Actions*. The workflow `.github/workflows/astro-deploy.yaml` won't publish otherwise.
- [ ] **First green CI run** — after merging `astro-migration` → `main`, confirm the Actions tab shows a successful build + deploy and that `https://gustavo-moura.github.io/` serves the new site.
- [ ] **Decide on the `gustavo-moura/gustavo-moura` repo** — base path was dropped because this is a GitHub user site (`username/username` repo deploys at `username.github.io/`). If that changes, re-add `base` in `astro.config.ts` and fix the hardcoded avatar path in `src/content/authors/gustavo.md`.

## Content

- [ ] **Populate research detail bodies** — `/research/[id]` renders the markdown body of each publication via `<Content />`, but every file under `src/content/publications/*.md` is currently frontmatter-only. Add longer write-ups where it makes sense.
- [ ] **Populate game detail bodies** — same as above for `src/content/games/*.md`. The `/games/[id]` pages currently show only frontmatter.
- [ ] **Proof the `about` page** — `src/content/about.mdx` still reads like a quick draft; review copy + voice once more.

## UI polish

- [ ] **Mobile navbar** — the pill nav uses `max-w-2xl`; on narrow viewports the nav items will wrap. Decide whether to hide less-used entries, collapse into a menu, or shrink the label set.
- [ ] **Prose image sizing on large screens** — body images are capped at `max-w-[60%]` of the column. On very wide columns or specific posts this may look small; revisit if any post needs a full-bleed image.
- [ ] **Empty-state for `/tags/[id]`** — confirm the per-tag page looks fine when a tag has only one post, and when the tag is unknown.

## Code hygiene

- [ ] **Unused imports** — `src/components/ProjectCard.astro` still imports `Separator` even though the component no longer uses it (ts(6133) warning in `astro check`). Drop it.
- [ ] **Review `src/content/about.mdx` commented-out sections** — `src/pages/about.astro` has a large commented-out Q&A block; either reinstate it or delete.
