# MOZSAI site

React + TypeScript port of the `MOZSAI Site v5` design. Vite, no UI or CSS libraries.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run typecheck  # tsc --noEmit
```

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
