# Tuba Foundation — Official Website

A distinctive, elegant, editorial-quality web property for **Tuba Foundation & Universal Education Centre (Gokak, Karnataka)**.

Built with pure, modern vanilla web standards (HTML5, CSS custom properties / design tokens, and lightweight modular JavaScript). Zero external runtime dependencies or JavaScript framework overhead.

---

## 🏛️ Design Identity & Visual Direction

- **Typography System:**
  - **Headings (H1–H6):** `Cormorant Garamond` — An exquisite, classical serif inspired by traditional bookmaking, illuminated manuscripts, and timeless scholarly authority.
  - **Body Copy:** `Plus Jakarta Sans` — Clean, high-legibility geometric/humanist sans-serif providing calm, readable reading flow.
  - **Foundation Motto:** `Noto Nastaliq Urdu` — Traditional calligraphic Nastaliq rendering the foundation's core ethos: *“خدمت کر سکون پا”* (*Khidmat kar, sukoon pa* — "Serve others, find tranquility").
- **Brand Palette:** Retained and calibrated into standard CSS custom properties:
  - Deep Olive (`#2F4420`, `#4B6A2A`)
  - Warm Earth Brown (`#5B4410`, `#735725`)
  - Refined Gold & Sand (`#D0A93A`, `#F6EBC7`, `#FAF4E3`)
  - Warm Vellum Surfaces (`#FAF6EA`, `#FFFFFF`)
  - Deep Espresso Ink (`#2B2414`, `#231B0D`)
- **Visual Restraint (Unslopped):**
  - Eliminated generic AI tropes: no blurry floating color blobs, no neon gradients, no excessive pill shapes, no generic clipart.
  - Prioritized whitespace, editorial typography hierarchy, structured curricula grids, and an authentic photojournalism gallery.

---

## 📁 Architecture & File Structure

```
tuba-foundation-next/
├── index.html          # Semantic HTML5 document (accessible landmarks, SEO & OG meta)
├── css/
│   ├── tokens.css      # Design tokens (colors, fluid typography scale, 4px spacing scale, shadows)
│   ├── base.css        # CSS reset, typography rules, buttons, tags, editorial dividers
│   └── components.css  # Modular section styles (header, hero, about, courses, gallery, footer)
├── js/
│   └── main.js         # Zero-dependency vanilla JS (accessible mobile drawer, keyboard handling, scroll events)
├── assets/             # Original logo emblem and high-resolution event photographs
└── README.md
```

---

## 🚀 Viewing & Running Locally

Because this is a pure vanilla static website, it can be served using any standard local HTTP server:

```bash
# Using Python 3
python -m http.server 8080

# Or using Node
npx serve .
```

Open `http://localhost:8080` in any modern web browser.
