# Style Ownership

This theme keeps high-risk UI areas isolated so a small visual change does not
break unrelated pages.

- `header.css`: only the public header, desktop dropdowns and mobile menu.
- `footer.css`: only footer layout, footer CTA and mobile footer behavior.
- `landing.css`: shared landing primitives. Keep this light.
- `thermo-landing.css`: only `/materiales/termo-tratada` hero and performance strip.

Rules for future edits:

- Do not style header or footer from `globals.css`.
- Do not add page-specific hero rules to `globals.css`.
- If a section has custom art direction, give it its own file and import it from `globals.css`.
- Keep class names scoped to the section, for example `termo-hero-*`.
- Change one block at a time, then run `npm run typecheck`, `npm run check:contract` and `GITHUB_PAGES=true npm run build`.
