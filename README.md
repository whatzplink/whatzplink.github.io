# WhatzpLink — 100% Client-Side WhatsApp Click-to-Chat Link & QR Code Generator

[![Live Demo](https://img.shields.io/badge/Live_Demo-whatzplink.github.io-2A7C13?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatzplink.github.io/)
[![Astro](https://img.shields.io/badge/Astro-5.x_Static_Islands-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![License: MIT](https://img.shields.io/badge/License-MIT-76C457?style=for-the-badge)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_Developer-Buy_Me_a_Coffee-FBE6C2?style=for-the-badge&logo=buymeacoffee&logoColor=1A2E15)](https://kisharadilshan.gumroad.com/coffee)

**WhatzpLink** ([https://whatzplink.github.io/](https://whatzplink.github.io/)) is an ultra-fast, privacy-first **WhatsApp Link Generator (`https://wa.me/`) and High-Resolution QR Code Maker** engineered to run **100% client-side in your browser**. Zero backend servers, zero tracking databases, zero link expiration, and zero registration required.

---

## ✨ Key Features

- **⚡ Instant `wa.me` URL Encoding & Phone Sanitizer**: Automatically strips spaces, dashes, parentheses, plus signs, and leading zeros while applying RFC-compliant `encodeURIComponent` encoding in real time.
- **💬 Live WhatsApp Chat Bubble Preview**: Interactive preview card displaying how your customer's pre-filled message appears inside WhatsApp before you share the link.
- **📱 Client-Side QR Code Download (PNG & SVG)**: Instant HTML5 `<canvas>` and vector SVG QR code generation (`1024×1024` print-ready PNG & scalable vector SVG) powered entirely in the browser.
- **🏷️ 1-Click Business Message Templates**: Pre-built industry templates for *Order Inquiries*, *Customer Support*, *Appointment Bookings*, and *Price Quotes*, plus quick-action pill chips.
- **🌍 Full 8-Language Internationalization (i18n)**: Complete native localization and `hreflang` SEO routing for English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), German (`/de/`), French (`/fr/`), Japanese (`/ja/`), Chinese (`/zh/`), and Russian (`/ru/`).
- **🌓 Warm Cream & Emerald Green Light/Dark Theme**: High-contrast, accessible UI with persistent Light Mode default (`#FFF8CF`) and Dark Mode (`#0D170B`).
- **📴 Offline-Ready Progressive Web App (PWA)**: Installable via *"Add to Home Screen"* with an offline-first Service Worker (`public/sw.js`) and local `localStorage` history for your last 5 generated links.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (Static Output Mode) | Zero-JS-by-default static HTML generation & i18n routing |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Variables | Custom Warm Cream & Emerald Green design token system |
| **QR Code Engine** | HTML5 `<canvas>` + `qrcode` | 100% client-side high-res PNG (`1024px`) & vector SVG rendering |
| **Offline PWA** | Web App Manifest + Service Worker (`sw.js`) | Offline-first asset caching & standalone mobile/desktop installation |
| **SEO & Schema** | JSON-LD (`@graph`) + `@astrojs/sitemap` | `WebApplication`, `HowTo`, `FAQPage`, & `BreadcrumbList` schemas |
| **Analytics** | Google Analytics 4 (`G-F5P8W5SQTN`) | Lightweight asynchronous telemetry |
| **CI/CD** | GitHub Actions (`withastro/action@v3`) | Automated build & deployment to GitHub Pages on push to `main` |

---

## 🎨 Color Palette Specification

| Token Name | Hex Code | Role / Usage |
| :--- | :--- | :--- |
| **Deep Forest Emerald** | `#2A7C13` | Primary action buttons, brand badges, QR borders, active mode pills |
| **Vibrant Leaf Green** | `#76C457` | Input borders, hover glow accents, secondary surfaces, dark mode CTAs |
| **Soft Buttercream Light** | `#FFF8CF` | Default light mode primary background, readout boxes, dark mode text |
| **Warm Peach Sand** | `#FBE6C2` | Surface cards, live WhatsApp chat preview card, pill badges |
| **Deep Charcoal Ink** | `#1A2E15` | High-contrast primary typography & QR matrix foreground |

---

## 🚀 Quick Start & Deployment

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/whatzplink/whatzplink.github.io.git
cd whatzplink.github.io

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev

# 4. Build production static site to ./dist
npm run build
```

### Automated GitHub Pages Deployment

This repository includes a turnkey GitHub Actions workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):
1. Go to your repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or trigger manually from the **Actions** tab) to build with Node 22 (`withastro/action@v3`) and publish to `https://whatzplink.github.io/`.

---

## ☕ Support the Developer

If **WhatzpLink** saves you time or helps grow your business, consider supporting ongoing open-source development:

👉 **[Buy Me a Coffee on Gumroad — kisharadilshan.gumroad.com/coffee](https://kisharadilshan.gumroad.com/coffee)**

---

## 📄 License

Distributed under the **MIT License**. See the [LICENSE](./LICENSE) file for full details.
Copyright © 2026 **Kishara Dilshan (WhatzpLink)**.
