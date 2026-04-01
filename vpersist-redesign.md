# vPersist Website Redesign Plan

## Goal
Transition vPersist.com from legacy PHP to a high-performance Next.js 15 & Tailwind CSS application ("Revenue Talent Platform") based on provided Stitch designs.

## Technical Stack
- **Project Type**: WEB
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + Stitch DESIGN.md tokens
- **Hosting**: Hostinger Node.js Web Hosting
- **Interactivity**: Framer Motion, React Hook Form

## Tasks
- [x] Task 1: Initialize Next.js project in `e:\vpersist web\` (Done)
- [x] Task 2: Configure `src/app/globals.css` with Design Tokens (Done)
- [x] Task 3: Build shared layout components (`Header`, `Footer`, `Button` with Revenue Glow) (Done)
- [ ] Task 3: Build shared layout components (`Header`, `Footer`, `Button` with Revenue Glow) → Verify: Visible and responsive on all pages.
- [ ] Task 4: Translate Stitch `vpersist_home_page\code.html` to `app/page.tsx` → Verify: Home page renders correctly without generic Bento traps.
- [ ] Task 5: Build `app/about/page.tsx` from `vpersist_about_page` → Verify: Route `/about` works.
- [ ] Task 6: Build `app/contact/page.tsx` from `vpersist_contact_page` with form UI → Verify: Form validation triggers correctly on empty submit.
- [ ] Task 7: Build API Route `app/api/contact/route.ts` for Lead Capture → Verify: Mock POST request returns 200 OK.
- [ ] Task 8: Build specific domain pages (`staffing`, `demand-gen`, `services`, `employers`) → Verify: Navigation routes work correctly.
- [ ] Task 9: Implement final Polish (Framer Motion reveals, Mobile responsiveness) → Verify: No clipping on 320px screens, animations smooth.

## Done When (Phase X Verification)
- [ ] Lint: `npm run lint` passes
- [ ] Build: `npm run build` succeeds (Hostinger compatible)
- [ ] Design Audit: No purple colors used, UI uses strict geometry and layered depth.
- [ ] Security/Performance: `checklist.py` passes.
