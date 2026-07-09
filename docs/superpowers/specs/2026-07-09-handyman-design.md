# Handyman Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `handyman-template` and re-skinned. This run reskins `handyman-template` (clean fork of handyman), following `RESKIN_PLAYBOOK.md` and sibling-cloning patterns from `window-door-template`.

Per standing decisions for non-gallery trades: per-city SEO subpages are deleted, and the `src/app/projects/` route is deleted. Orphan gallery components left unwired.

## Business Identity (locked, reuse verbatim)

- **Business name:** RightFix Handyman
- **Tagline:** Reliable Home Repairs · No Job Too Small
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2015
- **Owner:** Sam Ortiz
- **Credential/license line:** "Background-Checked Pros · Bonded & Insured"
- **Guarantee:** 1-Year Workmanship Warranty
- **Social proof:** 4.9★, 1,800+ reviews, 9,000+ jobs
- **Brand accent color:** gold/yellow `#ca8a04` (token `$orange`; light `#eab308`; dark `#a16207`)
- **Phone:** (254) 800-9900 / `tel:+12548009900`
- **Email:** hello@rightfixhandyman.com
- **Domain:** rightfixhandyman.com
- **Address:** 1625 N 25th St, Waco, TX 76707
- No per-city SEO subpages

## Services (6)

| Old handyman slug | New slug | Title |
|---|---|---|
| ac-repair | general-repairs | General Home Repairs |
| heating | drywall-patching | Drywall Patching |
| installation | door-window-fixes | Door & Window Fixes |
| duct-cleaning | mounting-assembly | TV Mounting & Assembly |
| indoor-air-quality | caulking-weatherproofing | Caulking & Weatherproofing |
| maintenance | honey-do-lists | Honey-Do Lists |

## Industries Served (3)

| Old slug | New slug | Title |
|---|---|---|
| automotive | property-management | Property Management |
| manufacturing | senior-living | Senior Living Facilities |
| oil-gas | small-business | Small Businesses |

## Blogs (3)

1. `handyman-vs-contractor-when-to-call`
2. `seasonal-home-maintenance-checklist-texas`
3. `drywall-repair-before-paint-tips`

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No `/projects` route. No per-city SEO.

## Non-goals

- No per-city SEO subpages
- No new component primitives
- No project gallery
- No marketplace catalog flip (separate pass)

## Process

1. Batch A — chrome: brand tokens, Header/Footer, root layout, robots/sitemap/llms, privacy/admin
2. Batch B — shared PageComponents defaults
3. Batch C — homepage, services ×6, industries ×3, blogs ×3, about/contact/service-areas, reviews
4. Batch D — delete projects + city SEO, grep clean, typecheck, design spec, commits

## Success Criteria

- Zero handyman / RightFix / old phone / Mapbox pk / RightFix Handyman agency leaks in customer-facing source
- Accent `#ca8a04` in `$orange` and hardcoded loaders
- `npm run typecheck` passes
- Logical git commits by batch
