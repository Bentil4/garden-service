# TODO — EcoSculpt Landscaping Landing Page (Frontend)

Written for: the developer (or LLM) who will implement this page in the garden-service repo.

## Context

- **Framework**: Angular 22+ (standalone default, signals, `@defer`, SSR with hydration), Tailwind CSS, Spartan.ng (`@spartan-ng/brain` + `helm`) for primitives.
- **Design source**: Figma file `9pgOjsCqdlAlITrZurdL5O`, node `401:45` "19. Landscaping service 1 - EcoSculpt" (desktop only, 1440 × 10524).
- **Repo state (verified)**: `/Users/macbook/angular/garden-service` has only `CLAUDE.md`, `.claude/`, `_bmad/`, `_bmad-output/`. There is **no `package.json` and no Angular app**, so scaffolding is the first task.
- **Project rules** (from CLAUDE.md, apply to every item): no `standalone: true`; `OnPush`; `input()`/`output()`; `host: {}` instead of `@HostBinding`/`@HostListener`; native control flow; `class`/`style` bindings only; `NgOptimizedImage` for static images; reactive forms; semantic HTML; no `(click)` on `div`/`span`; functions ≤ 20 lines (hard stop 40), ≤ 3 params, no nesting; files ≤ 500 code lines; Conventional Commits; branch prefix `feat/`; run `npx prettier --write`, `npm run lint`, `npm run lint:size`.
- **Performance budget**: initial JS < 200 KB gzipped; FCP < 1.8 s; TTI < 3.9 s; CLS < 0.1; Lighthouse > 90.
- **Accessibility**: WCAG 2.1 AA, must pass axe.

### Design tokens extracted from Figma

| Token | Value | Use |
|---|---|---|
| `--color-brand` | `#2da884` | Buttons, footer bg, accents (64 uses) |
| `--color-ink` | `#232a42` | Headings (34 uses) |
| `--color-body` | `#525252` | Body copy (46 uses) |
| Heading font | Montserrat SemiBold (Bold once) | Sizes 21 / 28 / 38 / 50 / 67 / 138 px |
| Body font | Plus Jakarta Sans Medium (Regular 4×) | 16 px / 24 px line height, 12 px for small labels |
| Layout | 98 px side padding, 1244 px content width, 388 px cards with 40 px gutters | 3-column grids |
| Radius | Buttons are pills (`rounded-[100px]`) | |

### Design findings that need a decision (do not silently ignore)

- **Contrast failure**: `#2da884` on white is **2.98:1** (needs 4.5:1 for text, 3:1 only for large text/UI). White text on `#2da884` (buttons, footer) is the same 2.98:1. Proposed: keep `#2da884` as the decorative brand color and add `--color-brand-strong: #1f7a5e` (5.25:1 on white) for text and as the button/footer background carrying white text. Confirm with the designer.
- **Desktop only**: the Figma has a single 1440 breakpoint. Tablet and mobile layouts must be derived (see FE-PLAN-3).
- **Copy bugs in the design**: Contact submit button reads "Read More"; footer blurb has mid-word line breaks ("conse / ctetur"). Use "Send message" and clean text.
- **Placeholder content**: lorem ipsum and invented testimonial names/titles; keep as data in typed constants so real content can replace it.
- **Figma asset URLs are temporary**: all images and SVGs must be downloaded into `public/` (or `src/assets`) and referenced locally.

---

## Implementation Plan

- [ ] **FE-PLAN-1.1 Project scaffold and tooling**
  - **Scope**: Create the Angular app, add Tailwind, Spartan.ng, fonts, ESLint rules from CLAUDE.md, `lint:size` script.
  - **Components**: none
  - **State**: n/a
  - **Responsive**: Tailwind breakpoints `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`; test at 320, 768, 1024, 1440, 2560.

- [ ] **FE-PLAN-1.2 Design tokens and global styles**
  - **Scope**: Tailwind theme (colors, fonts, fluid type scale with `clamp()`), focus-visible ring, `prefers-reduced-motion` reset.
  - **Components**: none
  - **State**: n/a
  - **Responsive**: Hero 138 px and section 67 px headings become fluid (`clamp`) so they fit 320 px.

- [ ] **FE-PLAN-2.1 Page shell and section composition**
  - **Scope**: One route `''` (single landing page, lazy-loaded). Sections are standalone components; below-the-fold sections use `@defer (on viewport)`.
  - **Components**: `LandingPage`, `SiteHeader`, 10 section components, `SiteFooter`.
  - **State**: local signals only; no global store needed (static content + one form).
  - **Responsive**: sections stack to 1 column on mobile, 2 on tablet, 3 on desktop.

- [ ] **FE-PLAN-3.1 Responsive strategy (derived, not in Figma)**
  - **Scope**: Mobile-first. Nav collapses to a menu button below `lg`. Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Side padding `px-4 md:px-8 lg:px-[98px]` capped by `max-w-[1244px]`.
  - **Components**: all
  - **State**: mobile menu open/closed signal in `SiteHeader`.
  - **Responsive**: absolute positioning from Figma is translated to flex/grid; no fixed pixel widths on containers.

- [ ] **FE-PLAN-3.2 Responsive matrix (user confirmed: no mobile/tablet screens exist; derive for all devices, 320px–2560px)**
  - **Scope**: Mobile-first. Base styles target 320px; add `md` (768), `lg` (1024), `xl` (1280) overrides. Above 1440 the content stays centred in `max-w-[1244px]` with side padding `px-4 md:px-8 lg:px-12 xl:px-[98px]`; backgrounds (hero, footer) stay full-bleed up to 2560.
  - **Rules for every section**: no fixed widths (use `w-full`, `max-w-*`, grid/flex); fluid type via `clamp()`; vertical section padding `py-16 md:py-20 lg:py-[80px]`; touch targets ≥ 44×44px; no hover-only interactions; test portrait and landscape; respect safe-area insets (`env(safe-area-inset-*)`) on the fixed header and footer; no horizontal scroll at 320px.
  - **Per-section behaviour**:

| Section | < 768 (mobile) | 768–1023 (tablet) | ≥ 1024 (desktop, matches Figma) |
|---|---|---|---|
| Header | Logo + menu button; full-screen/dropdown panel with nav + Login/Sign up stacked | Same as mobile | Inline nav centred, Login/Sign up right |
| Hero | Headline `clamp(2.5rem, 12vw, 3.5rem)`, CTAs stacked full-width, stats in 2×2 grid, separators hidden | Headline ~5rem, CTAs side by side, stats 4 in a row | Headline up to 138px, stats card as in Figma |
| About | Text, Mission, Vision stacked, image last (`aspect-[4/3]`) | 2 columns: cards + image | Cards left, image right |
| Why Choose | Image on top (`aspect-[4/3]`), content below | Image left, content right at 50/50 | 538px image + 610px content |
| Services | 1 column | 2 columns | 3 columns (6 cards) |
| Pricing | 1 column, stacked cards, featured card first or marked clearly | 2 columns, third card spans both | 3 columns, equal height |
| Gallery | 2-column grid, first image spans 2 columns | 3-column grid | 5-image mosaic per Figma |
| Testimonials | 1 column | 2 columns | 2×2 |
| FAQ | Full width; trigger text wraps, icon fixed 40px | Same | 1244px wide, 64px icon |
| Blog | 1 column | 2 columns (third card spans or wraps) | 3 columns |
| Contact | Image hidden or short banner, form full width | Image above (`aspect-[16/9]`), form below | Image left, form right |
| Footer | 1 column stacked, social row wraps | 2×2 grid | 4 columns |

  - **Images**: `NgOptimizedImage` with `sizes` per layout (e.g. `(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw`), fixed `aspect-*` boxes to keep CLS < 0.1, `object-cover`.
  - **Header menu**: `<button aria-expanded aria-controls>`, panel closes on Escape, link click, and when the viewport grows past `lg`; focus returns to the toggle; body scroll locked while open.
  - **Container queries** for `IconCard`, `PricingCard`, `ArticleCard` so cards adapt to their column width rather than the viewport.
  - **Verification**: Playwright screenshots at 320, 375, 768, 1024, 1440, 2560; real-device check on iOS Safari and Android Chrome; zoom to 200% and 400% reflow (WCAG 1.4.10) without horizontal scroll.

- [ ] **FE-PLAN-4.1 Content model**
  - **Scope**: Typed constants (`readonly` arrays) per section: services, plans, testimonials, faqs, articles, gallery, strengths, footer links. Components receive data through `input()`.
  - **State**: constants, no fetching. If an API arrives later, swap for `resource()` + loading/empty/error states.

- [ ] **FE-PLAN-5.1 Quality gates**
  - **Scope**: Unit tests, axe, Lighthouse, bundle budget, cross-browser, reduced motion.

---

## Implementation Items

### Tooling and foundation

- [x] **FE-ITEM-1.1 Scaffold app** (TASK-1.1)
  - Run `ng new` in the repo root (no router prompt skipped: routing yes, SSR yes, CSS), then add Tailwind and Spartan CLI.
  - Exit criteria: `npm start` serves, `npm run build` passes.
- [x] **FE-ITEM-1.2 Lint and size guard** (TASK-1.2)
  - Add ESLint rules `max-lines-per-function` (40), `max-params` (3), `max-depth`, `no-unused-vars`; add `scripts/check-file-length.mjs` and `lint:size` (500 code lines). CLAUDE.md references these but they do not exist yet.
- [x] **FE-ITEM-1.3 Fonts** (TASK-1.3)
  - Self-host Montserrat (600, 700) and Plus Jakarta Sans (400, 500) as WOFF2, `font-display: swap`, preload the two used above the fold. Avoids CLS and third-party requests.
- [x] **FE-ITEM-1.4 Tokens** (TASK-1.4) — see code block `styles.css` below.
- [x] **FE-ITEM-1.5 Asset pipeline** (TASK-1.5)
  - Download the 20 raster images and the SVG icons from the Figma response into `public/images/` and `public/icons/`. Convert photos to WebP/AVIF at 1x/2x, keep SVG root width/height unchanged.
  - Images in the design: hero background (`image 1`), about (`image 2`), why-choose (`image 3`), gallery (`image 21, 22, 25, 26, 27`), testimonial avatars (`image 19` ×4 crops), blog (`image 23` ×3), contact (`image 29`).
  - Mark the hero image `priority`; everything else lazy.

### Shared components (build first, reuse everywhere)

- [x] **FE-ITEM-2.1 `SectionHeading`**
  - **Props**: `title = input.required<string>()`, `subtitle = input<string>()`, `headingId = input.required<string>()`, `align = input<'start' | 'center'>('center')`.
  - **Accessibility**: renders `<header>` with `<h2 [id]>`; parent `<section [attr.aria-labelledby]>`.
  - **Performance**: static, OnPush.
  - Replaces 9 repeated "text" frames (title + lorem) in the design.
- [x] **FE-ITEM-2.2 Button** (Spartan `helm-button` variant, or `ButtonDirective` wrapper)
  - **Props**: `variant = input<'solid' | 'outline' | 'inverse'>('solid')`, `size = input<'md' | 'lg'>('md')`.
  - Pill radius, 24 px / 40 px padding, visible `focus-visible` ring, min target 44 px (design buttons are 56–88 px tall).
  - Used for: Get Started, Learn More, Login, Sign up, Purchase, Read More, Send message.
- [x] **FE-ITEM-2.3 `IconCard`** (Mission, Vision, 6 services)
  - **Props**: `icon = input.required<string>()`, `title`, `description`.
  - `<article>` with `<h3>`; icon is decorative (`aria-hidden="true"`).
  - Eight cards share one component (388 × 288 in design).
- [ ] **FE-ITEM-2.4 `StarRating`**
  - **Props**: `value = input.required<number>()`, `max = input(5)`. Uses `computed()` for the star list.
  - **Accessibility**: `role="img"` with `aria-label="Rated 5 out of 5"`; stars `aria-hidden`.
- [ ] **FE-ITEM-2.5 `ResponsiveImage` wrapper (optional)**
  - Thin wrapper over `NgOptimizedImage` with `src`, `alt` (required), `width`, `height`, `priority`, `sizes`. Decorative images get `alt=""`.

### Sections (each its own component, file ≤ 500 lines)

- [x] **FE-ITEM-3.1 `SiteHeader`** (Figma `401:57`)
  - Logo "EcoSculpt" (link to `/`), nav `Home`, `About Us`, `Pages` (with chevron: render as a disclosure button with `aria-expanded`/`aria-controls`, or drop if no sub-pages exist — **ask**), `Login`, `Sign up`.
  - Absolutely overlays the hero on desktop; on `< lg` becomes a menu button toggling a panel (signal `menuOpen`).
  - **A11y**: `<header>` + `<nav aria-label="Primary">`; Escape closes the menu and returns focus to the toggle; skip link "Skip to content" as first focusable element; text over photo needs an overlay to hold 4.5:1.
  - **State**: `menuOpen = signal(false)`.
- [x] **FE-ITEM-3.2 `HeroSection`** (`401:46`)
  - The only `<h1>` ("Gardens of Distinction"), fluid size up to 138 px, subtitle, CTAs, and the stats strip (15+ years, 10K+ products, 5K+ clients, 87+ team).
  - Stats as `<dl>` (term = label, description = value) with separators via CSS border, not extra elements.
  - Hero image: `NgOptimizedImage` with `fill` + `priority`; dark gradient overlay for contrast.
  - Optional count-up animation: transform/opacity only, disabled under `prefers-reduced-motion`.
- [x] **FE-ITEM-3.3 `AboutSection`** (`401:88`)
  - `SectionHeading` + two `IconCard`s (Mission, Vision) + image. Stacks on mobile with image first or last (decide with design; default: after text).
- [x] **FE-ITEM-3.4 `WhyChooseSection`** (`401:108`)
  - Image + heading + 4 strengths as `<ul>` with check icon, 48 px icon, 72 px text indent in design.
- [x] **FE-ITEM-3.5 `ServicesSection`** (`401:141`)
  - `SectionHeading` + `<ul>` of 6 `IconCard`s via `@for (s of services; track s.id)`.
  - Icons in design: Lawn Mower, Trowel, Plantation, Spray Sprinkler, Consultant, Flower Growing.
- [x] **FE-ITEM-3.6 `PricingSection`** (`401:189`) + **`PricingCard`**
  - **Props** for card: `plan = input.required<PricingPlan>()`.
  - Three cards. Heights differ in Figma (712 / 768 / 824) only because feature counts differ (3, 4, 5 items); use equal-height cards with `mt-auto` button instead.
  - Badge text: "Package", "Package", "Promo"; the featured plan (Premium, "Promo") gets a visible, non-color-only emphasis.
  - Price is an `<p>` with visually-hidden "per month" context; features are `<ul>`, check icon `aria-hidden`.
  - "Purchase" is a button/link: decide target (no checkout in scope → link to `#contact` with plan preselected, **ask**).
- [x] **FE-ITEM-3.7 `GallerySection`** (`401:325`)
  - 5-image mosaic using CSS Grid with named areas (two tall, one wide, two small). Mobile: 2-column masonry-like grid.
  - Images are `<img>` inside `<figure>` with meaningful `alt` (describe the garden); lazy; explicit `width`/`height` to prevent CLS.
  - Optional lightbox: **out of scope** unless requested (would need focus trap).
- [x] **FE-ITEM-3.8 `TestimonialsSection`** (`401:339`)
  - 4 `<figure>` + `<blockquote>` + `<figcaption>` (name, role, `StarRating`), 80 px avatar. 2×2 grid desktop, 1 column mobile. Static (no carousel) to avoid focus/auto-play issues.
- [x] **FE-ITEM-3.9 `FaqSection`** (`401:403`)
  - Use Spartan **Accordion** (`brn-accordion`), single-expand, first item open by default (matches Figma).
  - 5 Q&As; plus/minus icon rotates with a transform transition (`prefers-reduced-motion` aware).
  - **A11y**: trigger is a `<button>` inside a heading (`h3`), `aria-expanded`, `aria-controls`; Arrow Up/Down, Home/End supported by Spartan.
  - **State**: `openItem = signal<string | null>('residential-commercial')`.
- [x] **FE-ITEM-3.10 `BlogSection`** (`401:434`) + **`ArticleCard`**
  - **Props**: `article = input.required<Article>()` (`id, category, title, excerpt, comments, views, publishedAgo, imageSrc, imageAlt, href`).
  - `<article>` with `<h3>`; "Read More" is a link to the article, with accessible name `Read more: {title}` via `aria-label` or visually-hidden text. Stats use icons with visible text.
  - Replace "5 min ago" with a `<time datetime>` and a relative-time pipe computed from `publishedAt`.
  - Image `loading="lazy"`; card min height equalised with grid `items-stretch` (Figma heights differ 696 vs 712).
- [x] **FE-ITEM-3.11 `ContactSection`** (`401:522`) + **`ContactForm`**
  - Reactive form: `fullName` (required, min 2), `email` (required, email), `message` (required, min 10). Use Spartan `helm-input`, `helm-label`, `helm-textarea`. The Figma "Message" box is a single-line height; use a multi-line textarea.
  - **State**: `submitStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle')`; show inline field errors after touch/submit, `aria-invalid`, `aria-describedby` for error text, `role="status"` live region for the result.
  - Submit has no backend defined → emit an `output()` `submitted` and stub the service (**ask** what endpoint: CLAUDE.md mentions Appwrite Functions).
  - `autocomplete="name"` / `"email"`; labels visible (design already has them).
- [x] **FE-ITEM-3.12 `SiteFooter`** (`401:545`)
  - `<footer>`: brand + blurb, "Quick Links" `<nav aria-label="Footer">` (About Us, Service, Pricing, Blog → in-page anchors), contact `<address>` (email `mailto:`, location, phone `tel:`), social links (Twitter, Instagram, Facebook, YouTube) each an `<a>` with `aria-label` and `rel="noopener"`, `target="_blank"`.
  - Social URLs are not in the design → placeholders/**ask**.
  - Contrast: white on `#2da884` fails; use `--color-brand-strong`.
- [x] **FE-ITEM-3.13 `LandingPage` composition + `@defer`**
  - Hero + header eager; About onward wrapped in `@defer (on viewport)` with a fixed-height `@placeholder` (use the section's min-height so CLS stays < 0.1).
  - Anchor ids: `about`, `services`, `pricing`, `gallery`, `testimonials`, `faq`, `blog`, `contact`. Add `scroll-margin-top` for the fixed header and `scroll-behavior: smooth` guarded by `prefers-reduced-motion: no-preference`.
  - Wrap in `<main id="main">`.

### Cross-cutting

- [ ] **FE-ITEM-4.1 Error / loading / empty states**: Angular has no component error boundaries; use a global `ErrorHandler`, and for deferred blocks provide `@error` and `@loading` fallbacks. Form has explicit error state. Lists render an empty-state message if data is empty.
- [ ] **FE-ITEM-4.2 SEO and SSR**: `Title`/`Meta` (description, OG tags), semantic landmarks, `lang="en"`, canonical, JSON-LD `LocalBusiness` (optional). Enable SSR + hydration with `withEventReplay()`.
- [ ] **FE-ITEM-4.3 Motion**: Only `transform`/`opacity`; global CSS `@media (prefers-reduced-motion: reduce)` disables transitions and smooth scroll.
- [ ] **FE-ITEM-4.4 Dark mode / high contrast**: Not in the design. Out of scope unless requested; tokens are CSS variables so it can be added later. Support `forced-colors` for focus rings.
- [ ] **FE-ITEM-4.5 Tests**: Vitest/Jasmine unit tests per shared component and the contact form validity; axe check per section (e.g. `jest-axe` or Playwright + `@axe-core/playwright`); Playwright keyboard-nav test (tab order, menu, accordion).

---

## Proposed Code Changes

> No code has been written in the repo yet; everything below is proposed. File paths are relative to the repo root.

### `styles.css` (tokens, Tailwind v4 style)

```css
@import 'tailwindcss';

@theme {
  --color-brand: #2da884;
  --color-brand-strong: #1f7a5e; /* 5.25:1 on white; use for text and white-on-green surfaces */
  --color-ink: #232a42;
  --color-body: #525252;
  --font-heading: 'Montserrat', system-ui, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --text-display: clamp(3rem, 2rem + 6vw, 8.625rem); /* hero, up to 138px */
  --text-h2: clamp(2rem, 1.5rem + 2.2vw, 4.1875rem); /* up to 67px */
}

@layer base {
  html {
    font-family: var(--font-body);
    color: var(--color-body);
  }
  :focus-visible {
    outline: 3px solid var(--color-ink);
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
}
```

### `src/app/app.routes.ts` (one lazy route)

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'EcoSculpt — Landscaping & Gardening Services',
    loadComponent: () => import('./landing/landing-page').then((m) => m.LandingPage),
  },
  { path: '**', redirectTo: '' },
];
```

### `src/app/landing/landing-page.ts`

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeader } from './header/site-header';
import { HeroSection } from './hero/hero-section';
import { SiteFooter } from './footer/site-footer';

@Component({
  selector: 'app-landing-page',
  imports: [SiteHeader, HeroSection, SiteFooter /* + deferred sections */],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-site-header />
    <main id="main">
      <app-hero-section />
      @defer (on viewport) {
        <app-about-section />
      } @placeholder {
        <div class="min-h-[67rem]"></div>
      }
      <!-- repeat for services, pricing, gallery, testimonials, faq, blog, contact -->
    </main>
    <app-site-footer />
  `,
})
export class LandingPage {}
```

### `src/app/shared/section-heading.ts`

```ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', '[class.text-center]': "align() === 'center'" },
  template: `
    <header class="mx-auto max-w-3xl space-y-4">
      <h2 [id]="headingId()" class="font-heading text-h2 font-semibold text-ink">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-base leading-6">{{ subtitle() }}</p>
      }
    </header>
  `,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly subtitle = input<string>();
  readonly align = input<'start' | 'center'>('center');
}
```

### `src/app/pricing/pricing.model.ts` (types for FE-ITEM-3.6)

```ts
export interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly badge: string;
  readonly pricePerMonth: number;
  readonly features: readonly string[];
  readonly featured: boolean;
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  { id: 'basic', name: 'Basic Plan', badge: 'Package', pricePerMonth: 40, featured: false,
    features: ['Initial Consultation', 'Labor Costs', 'Materials and Plants', 'Equipment and Machinery'] },
  // Standard $80 (+ Permits and Inspection Fees), Premium $120 (+ Maintenance Packages, badge "Promo")
];
```

### `src/app/contact/contact-form.ts` (form logic only)

```ts
import { ChangeDetectionStrategy, Component, output, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ContactMessage {
  readonly fullName: string;
  readonly email: string;
  readonly message: string;
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly submitted = output<ContactMessage>();
  readonly status = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  readonly form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.emit(this.form.getRawValue());
  }
}
```

---

## Commands

```bash
# FE-ITEM-1.1 scaffold (run in /Users/macbook/angular/garden-service)
npx @angular/cli@latest new garden-service --directory . --routing --style=css --ssr --skip-git
npm install tailwindcss @tailwindcss/postcss postcss
npx ng add @spartan-ng/cli            # then: npx ng g @spartan-ng/cli:ui button input label textarea accordion

# Develop / verify
npm start
npx prettier --write .
npm run lint && npm run lint:size
npm run build
npm test

# Quality gates
npx lighthouse http://localhost:4200 --only-categories=performance,accessibility,best-practices,seo
npx playwright test                   # includes @axe-core/playwright checks at 320/768/1024/1440/2560

# Git (Conventional Commits, branch prefix required)
git checkout -b feat/landing-page
git commit -m "feat(landing): add hero and header sections"
```

## Progress notes

- Done: scaffold (Angular 22.2, Tailwind 4, SSR), tokens, self-hosted fonts via `@fontsource`, ESLint with CLAUDE.md rules, `lint:size`, `Button` directive, `SiteHeader`, `HeroSection`. Initial bundle 79 KB gzipped; axe clean at 320 / 375 / 768 / 1440 / 2560; hero text contrast over the photo verified ≥ 5:1 after darkening the overlay to `rgb(40 40 40 / 0.58)` (Figma's 0.42 gave ~3.3:1 on bright grass).
- Deviations from Figma: darker overlay (contrast), `#1f7a5e` on buttons/"+" (contrast), hero image re-encoded PNG → WebP (3.7 MB → 329 KB).
- Not done yet: Spartan.ng (add with the FAQ accordion and contact form), `<link rel="preload">` for fonts, remaining sections.

## Structure and Spartan (updated)

- App structure under `src/app/`: `core/`, `utils/`, `pipe/`, `directive/`, `pages/`, `component/`, `shared/`. Models live in their own files (`shared/models/*.model.ts`); static content in `shared/data/*.data.ts`. Components never declare interfaces/types.
- Spartan Helm components are generated into `src/app/shared/ui/` (configured in `components.json`; aliases `@spartan-ng/helm/<name>` in `tsconfig.json`): button, accordion, input, textarea, label, field, card, badge, separator, avatar, aspect-ratio, utils. Lint and `lint:size` skip this generated folder.
- Theme: Spartan semantic tokens in `src/styles.css` map to the brand (`--primary` = `#1f7a5e`, `--secondary` = white with green text). Helm button restyled to the pill design. Gotcha: `tailwind-merge` drops custom font-size tokens such as `text-btn` when a `text-<color>` class is present; use arbitrary values (`text-[1.3125rem]/6`) inside Helm files.

- Done (round 2): About, Why Choose, Services; shared `SectionHeading`, `IconCard` (Spartan card), `HighlightedText` + `splitHighlight` util. Highlighted headline words use `#1f7a5e`; the featured "Lawn Care" card is filled `#1f7a5e` (white on `#2da884` was 2.98:1). Images: WebP, `sizes` must use only responsive values (`vw`) or `NgOptimizedImage` throws NG02952. Sections are plain imports for now (no `@defer`) so the SSR output keeps their content; revisit with incremental hydration.

- Done (round 3): Pricing (`PricingCard`, Spartan card/badge/separator/button, lucide check icons, `currency` pipe), Gallery (CSS grid with per-image area classes in `shared/data/gallery-layout.data.ts`), Testimonials (`TestimonialCard`). Plan colour variants live in `shared/data/plan-themes.data.ts`. Gotchas: never pass pixel values in `sizes` to `NgOptimizedImage` (NG02952 aborts rendering of the rest of the page; watch the dev-server log); "Purchase" buttons are `type="button"` with no target yet.
- Done (round 4): FAQ (Spartan accordion, first item open), Blog (`ArticleCard`), Contact (`ContactForm`: reactive form + Spartan field/input/textarea/label + stubbed `core/contact.service.ts`), Footer. All 12 design sections are built.
- Still open: FE-ITEM-3.13 (anchor offsets / `@defer`), 4.2 SEO meta + JSON-LD, Lighthouse + bundle budget run, real-device and cross-browser checks, 200%/400% zoom reflow check, real copy/links/social URLs, FAQ answers 2-5 (placeholder text), blog "published" labels are static strings.
- Helm files restyled for the design (on-green input/textarea/label/error, card-style accordion, large badge/button); the contact fields are styled for the green panel only, so a light-surface form would need a variant.

## Performance and QA results (production SSR build, Lighthouse 13, local)

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 99 | 100 | 100 | 100 |
| Mobile (simulated slow 4G, 4x CPU), 3 runs | 90-91 | 100 | 100 | 100 |

- Mobile: FCP 1.9 s, LCP 3.3 s (simulated), TBT 40-60 ms, CLS 0-0.02, 517 KB transferred. Desktop: FCP 0.4 s, LCP 0.9 s, TBT 0, CLS 0.
- Fixes made: gzip via `compression` in `src/server.ts` (HTML 131 KB to 17 KB), `public/robots.txt`, responsive image variants through `core/responsive-image.loader.ts` (`ngSrcset` takes widths, not URLs; smaller hero/about files for phones), self-hosted fonts in `public/fonts` with preloads (replaced `@fontsource`), and incremental hydration: every section below the hero is `@defer (hydrate on viewport)` in `pages/landing/landing-page.html` (`withIncrementalHydration()` + `withEventReplay()` in `app.config.ts`). The server still renders all content (SEO, anchors, deep links work); only 4 JS files load at start and the rest load on scroll.
- Tried and reverted: `content-visibility: auto` on sections. It did not stop the early image fetches and made Lighthouse's contrast check report false failures.
- Still possible: trim unused Spartan/rxjs code (~40 KB reported), an image CDN, fetch priority tuning for the about/why photos.
- Deploy note: Angular SSR rejects unknown hosts; set `NG_ALLOWED_HOSTS` (or `allowedHosts` in `angular.json`) for the real domain. Running `serve:ssr` locally needs `NG_ALLOWED_HOSTS=localhost`.

- Copy pass: all lorem ipsum replaced with EcoSculpt-specific text (hero, section intros, mission/vision, services, FAQ answers, blog excerpts, footer, testimonials). Testimonial quotes and the names/roles from the design are fictional placeholders and must be replaced with real customer quotes before launch. Stats (15+ years, 10K+, 5K+, 87+) and prices come from the design, not from real business data.

## Suggested build order

1. FE-ITEM-1.1 → 1.5 (foundation) — blocking.
2. FE-ITEM-2.x shared components.
3. Hero + Header (3.1, 3.2) → screenshot-compare against Figma `401:46`.
4. Remaining sections in page order, one PR/commit each.
5. FE-ITEM-3.13 composition and `@defer`, then 4.x cross-cutting.

## Open questions for the user

Decided by the user:

- [x] Use `#1f7a5e` (`--color-brand-strong`) for text and white-on-green surfaces; keep `#2da884` decorative only.
- [x] "Pages" nav item: target not defined yet → keep it as a `NAV_LINKS` entry rendered as a normal link (`href="#"`) with the chevron, so its destination is a one-line change later. Drop the disclosure/`aria-expanded` idea in FE-ITEM-3.1 until sub-pages exist.
- [x] "Purchase", "Login", "Sign up": targets not defined yet → render as buttons with no navigation (`type="button"`), wired later. Keep them in the content model so the targets are one-line changes.
- [x] Contact form submit: **stub** only (a `ContactService` that resolves after a short delay and sets `status` to `success`; no network call).
- [x] No real social URLs, copy or testimonials, and no mobile/tablet designs: keep placeholders (lorem, `#` social links) and derive the responsive layouts (FE-PLAN-3.1).

## Quality Assurance Checklist

- [ ] All components compile without TypeScript errors (`strict` on)
- [ ] Responsive at 320 / 768 / 1024 / 1440 / 2560 with no horizontal scroll
- [ ] Every interactive element reachable by keyboard with visible focus
- [ ] Contrast verified with tooling (AA: 4.5:1 text, 3:1 large text/UI)
- [ ] axe reports zero violations on every section
- [ ] Lighthouse > 90 in all four categories; CLS < 0.1
- [ ] Initial bundle < 200 KB gzipped (`ng build` budgets set in `angular.json`)
- [ ] `prefers-reduced-motion` respected
- [ ] Chrome, Firefox, Safari, Edge checked
- [ ] No Figma asset URLs remain in code; every image has correct `alt`, `width`, `height`
- [ ] `npm run lint`, `npm run lint:size`, `npx prettier --check .` all pass
