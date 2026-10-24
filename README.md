# MOZSAI site

React + TypeScript port of the `MOZSAI Site v5` design. Vite, no UI or CSS libraries.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run typecheck  # tsc --noEmit
```

## Temporary landing page

Until the full site is ready, the live domain serves a single-page landing page from `landing/`
(plain HTML, CSS and JS, same palette and type as the design). It builds into the same `dist/`
folder as the full site, so the host only needs its build command switched when the full site is ready.

```bash
npm run dev:landing      # work on the landing page locally
npm run build:landing    # outputs dist/ with the landing page
```

| Live site | Build command | Output directory |
| --- | --- | --- |
| Landing page (now) | `npm run build:landing` | `dist` |
| Full site (later) | `npm run build` | `dist` |

Deploy on Cloudflare Pages (Workers & Pages → Create → Pages → Connect to Git): pick this repo,
framework preset "None", then the build command and output directory above. Add the domain under
Custom domains. To go live with the full site, change the build command to `npm run build` and
redeploy; the domain stays the same. Pull requests get their own preview URLs either way.

The landing page's enquiry form opens the visitor's email app with the message filled in. The
full site should replace this with a real form handler.

## Push to GitHub

```bash
git init && git add . && git commit -m "Initial commit"
gh repo create mozsai-site --private --source=. --push
# or: create an empty repo on github.com, then
# git remote add origin git@github.com:<you>/mozsai-site.git && git push -u origin main
```

## Structure

```
src/
  App.tsx            state, scroll/reveal/animation logic, builds the view model
  data.ts            all content: projects, services, founders, FAQ, recommendations…
  types.ts           content + state types
  layout/            DesktopHeader, MobileHeader, MobileMenu, Footer, MobileBookBar
  sections/          page sections, shown/hidden by App based on the current page
  components/Sx.tsx  element with hover/focus/active style overrides
  index.css          resets, focus rings, keyframes
```

Navigation is in-memory (a `page` field in App state), matching the prototype —
there's no router or URLs per page yet.

## Options

`<App />` props (set in `src/main.tsx`): `palette` (rust | forest | navy | graphite),
`featuredCount`, `showRecommendations`, `recCount`, `showFaq`, `defaultService`,
`showWorkFilters`.

## Notes

- Styling is inline on each element, as in the design.
- Media positions (reel, case-study captures, portraits) are dark placeholders with captions.
- The contact form validates but doesn't send anywhere yet — wire `submit` in `App.tsx`.
- TypeScript runs with `strict: false`; the ported logic in `App.tsx` is loosely typed.
