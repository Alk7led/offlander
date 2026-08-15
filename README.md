# Gift Card Glow

Build a single-page, mobile-first landing page for a SHEIN gift card reward offer.

Pure HTML/CSS/JS. No frameworks, no libraries except Google Fonts.

Output ONE self-contained .html file.

═══════════════════════════════════

DESIGN SYSTEM

═══════════════════════════════════

CSS variables on :root —

  --bg: #fafaf7        (warm off-white, NOT pure white — eye comfort)

  --surface: #ffffff

  --ink: #111111

  --muted: #6b6a63

  --faint: #96958e

  --line: #eceae3

  --live: #22a06b

Typography:

  Display / numerals: 'Archivo Black', sans-serif

  Body / UI: 'Inter', weights 300/400/500

  Wordmark: 'Inter' 500, letter-spacing 0.22em, uppercase

Layout:

  max-width 440px, centered, mx-auto

  Horizontal gutters: 22px

  Sections separated by 1px solid var(--line)

Corners:

  NO sharp square corners anywhere.

  Every button is a FULL PILL (border-radius: 999px).

  Cards / containers: 14px.

Icons:

  Inline SVG only. NO emoji anywhere.

═══════════════════════════════════

SECTIONS (top to bottom, single scroll)

═══════════════════════════════════

1. HEADER — 52px, centered

   "SHEIN" wordmark, uppercase, letter-spacing 0.22em, color var(--ink)

   1px bottom border var(--line)

2. LIVE TICKER — 40px, full width, 1px bottom border

   Left: 7px green dot (var(--live)) with a soft CSS pulse animation

   (scale 1 → 1.35, opacity 1 → 0.4, 2s ease-in-out infinite)

   Right: rotating text, 11px, var(--muted)

   JS array, rotates every 4s with a 300ms fade transition:

     "Sarah M. just claimed from Arizona"

     "James T. just claimed from Manchester"

     "Priya R. just claimed from Toronto"

     "Lucas B. just claimed from Sydney"

     "Amelia K. just claimed from Chicago"

     "Daniel O. just claimed from Dublin"

3. HERO — centered, MINIMAL. No subhead, no micro-disclaimer.

   Padding: 42px top, 38px bottom (the extra air is deliberate —

   the hero is only three elements and must not look stripped)

   "$750" — Archivo Black, 76px, letter-spacing -0.04em, line-height 1

   "GIFT CARD" — 15px, uppercase, letter-spacing 0.18em, var(--ink), 8px below

   PRIMARY CTA — full-width pill, 54px tall, 30px below the "GIFT CARD" line

     bg var(--ink), text var(--bg), 14px

     label "Continue" + inline SVG arrow-right, 8px gap

     Active state: transform scale(0.98). No hover gradient.

   Nothing else in this section. No paragraph copy, no text under the button.

4. HOW IT WORKS

   Section label: "HOW IT WORKS", 10px, letter-spacing 0.2em, var(--faint)

   Three numbered rows, flex, 12px gap:

     01  Enter your email        / Takes under a minute

     02  Complete an activity    / Choose from the list

     03  Claim your reward       / Delivered by email

   Number: 11px var(--faint), fixed 18px width

   Title: 13px var(--ink). Sub: 12px var(--muted).

5. TRUST STRIP — centered, 1px top border

   Inline SVG padlock (14px) + "SSL secured · Available worldwide", 11px var(--muted)

6. STATS — 1px top border, two columns, centered

   "12,400+" / "Claimed"      "4.8" / "Rating"

   Number: 17px var(--ink). Label: 10px var(--faint).

7. FOOTER — 1px top border

   9px, var(--faint), line-height 1.6:

   "This page is operated by an independent marketing partner and is not

    affiliated with, endorsed by, or sponsored by SHEIN. 18+. No purchase

    necessary. Reward requires completion of a qualifying activity."

8. STICKY BOTTOM CTA

   Appears after the user scrolls past the hero CTA (IntersectionObserver).

   Fixed bottom, full width, 12px padding, bg rgba(250,250,247,0.88),

   backdrop-filter: blur(12px), 1px top border var(--line).

   Contains the same pill CTA. Slides up with a 250ms ease transform.

═══════════════════════════════════

MOTION

═══════════════════════════════════

Staggered fade-up entrance on each section:

  opacity 0 → 1, translateY(16px) → 0, 500ms ease-out

  IntersectionObserver, 80ms stagger between children.

Respect prefers-reduced-motion: disable all animation.

═══════════════════════════════════

COMPLIANCE — NON-NEGOTIABLE

═══════════════════════════════════

- Never use the word "free"

- No countdown timers, no scarcity or urgency language

- No income claims or guarantees — $750 is a reward VALUE, not a promise

- No SHEIN logo image — styled text wordmark only

- No testimonials or star-review quotes

- The footer disclaimer is the ONLY place the completion condition appears

  now that the hero copy is removed. Do not delete or shorten that final

  sentence.

═══════════════════════════════════

LINKS

═══════════════════════════════════

Both CTAs point to href="#offer-url" as a placeholder.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c43c455c-170b-4b11-b786-34eef0b24908).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
