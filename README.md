# PortaCoCo Corporate Website

Official corporate website for **PortaCoCo** ([www.portacoco.com](https://www.portacoco.com)), founded by **Mark Pacan**.

PortaCoCo is a boutique hardware engineering and commercial innovation venture dedicated to retro-computing mobility, sustainable battery reuse, and non-destructive hardware enhancement.

---

## Live Repository & Production Deployment

- **GitHub Repository**: [https://github.com/Fballer/portacoco_website](https://github.com/Fballer/portacoco_website)
- **Live Website**: [https://www.portacoco.com](https://www.portacoco.com)
- **Host**: InMotion Hosting (cPanel root: `/home/flutte14/portacoco.com`)
- **Historical Site Backup**: All 7 original WordPress HTML pages and 60+ original media assets are permanently archived in [`backup_original_website/`](https://github.com/Fballer/portacoco_website/tree/main/backup_original_website).

---

## Full Project Recap & What Was Accomplished

### 1. Executive Career & Resume Gap-Filler Alignment
- Redesigned the site from an informal WordPress blog into an executive-level hardware engineering venture.
- Serves as living proof on Mark Pacan's resume of cross-functional executive leadership across **Product Lifecycle, CPG Category Insights, Revenue Growth Management (RGM), and Agentic AI Systems**.

### 2. Authentic Tandy Color Computer (CoCo) Heritage & Modern Fusion
- Replaced generic tech palettes with authentic **Tandy CoCo Black and CRT Phosphor Green** (`#00e676` and `#10b981`).
- Accented with **Vintage Enclosure Cream** (`#f5f1e8`) reminiscent of the classic CoCo 3, CM-8, and MC-10 cases.
- **Tandy 8-Color VDG Micro-Spectrum**: A subtle 3px header accent bar replicating the legendary Motorola 6847 palette (Green, Yellow, Blue, Red, Buff, Cyan, Magenta, Orange).
- **Retro Terminal Micro-Details**: Badges featuring the classic `OK` command prompt and an authentic blinking green terminal cursor (`_`).

### 3. Streamlined Production Hardware Showcase
- Shifted entirely from "prototype" terminology to **Production-Ready Commercial Architecture**.
- **Primary Showcase 1: Porta Mini CM-8 Monitor**: Bespoke wireless monitor replicating the iconic CM-8 styling with high-resolution digital IPS display and battery integration.
- **Primary Showcase 2: WireFree CoCo 3 System**: Streamlined, cord-free setup delivering low-latency wireless HDMI transmission and 7+ hours of battery runtime with zero chassis modification.
- **Companion Hardware: Porta MC-10 Mobility Kit**: Ultra-compact self-contained mobility kit with unified battery power and composite video routing.

### 4. Environmental Sound Practices & Circular Design
- Replaced the top-section CocoFest box with an **Eco-Smart Sustainable Battery Reuse** highlight:
  - `Sustainable` &bull; `Reuses Standard Batteries`
- Highlights circular engineering: running hardware off widely owned power tool batteries (e.g., Ryobi ONE+) to eliminate proprietary battery e-waste and drastically reduce consumer expense.

### 5. Canada–US Trade Tariff & Manufacturing Restructuring Advisory
- Transparently explains that direct storefront ordering is temporarily paused to protect customers from volatile customs surcharges and duty adjustments between Canada and the United States.
- Informs visitors that PortaCoCo is actively evaluating alternative domestic manufacturing partners, contract assembly lines, and component sourcing.
- Frames the sales pause as strategic geopolitical awareness, financial prudence, and active supply chain management.

### 6. Founder Section: CPG Leadership & Agentic AI Mastery
- **Executive Title**: *Founder, Product Development & Hardware Lead &bull; CPG &amp; Agentic AI Strategist*
- Integrates Mark's background in **Consumer Packaged Goods (CPG), Category Management, Shopper Insights, and Revenue Growth Management (RGM)**.
- **Frontier AI Mastery**: Details hands-on daily use of **Claude Code, Google Antigravity, and Cursor**, powered by frontier reasoning models (**Claude 3.7 Sonnet, Gemini 2.5 Pro, and GPT-4o**) for rapid CAD design, firmware synthesis, and supply chain modeling.
- Updated expo timeline to **CocoFest 2025 & 2026**.

### 7. Comprehensive Mobile Responsiveness
- Engineered for phones, tablets, and laptops:
  - Fluid typography (`clamp()`) preventing awkward word wraps.
  - Interactive hamburger menu with an animated **"X"** toggle, solid backdrop blur, full-width touch targets, and outside-click dismissal.
  - Responsive stats grid that never squishes or overlaps text on narrow viewports.
  - Proportional media containers preventing image overflow.

### 8. Automated 404 & Broken URL Redirection
- Configured Apache **`.htaccess`** with an HTTP 302 redirect rule:
  ```apache
  ErrorDocument 404 /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^.*$ / [R=302,L]
  ```
- Any request to old WordPress URLs (e.g. `/portacoco-3-kit/`, `/contact-us/`, or mistyped links) automatically forwards the browser to the root homepage (`https://www.portacoco.com/`), ensuring all CSS, images, and fonts load with 100% fidelity.
- Added a fallback `404.html` with instant client-side redirection.

---

## Repository Structure

```
├── index.html                   # Production-ready modern single-page corporate site
├── style.css                    # Bespoke CoCo black & green phosphor responsive design system
├── script.js                    # Vanilla ES6 script for navigation, copy actions, and mobile drawer
├── .htaccess                    # Apache server configuration for 404 & URL redirects
├── 404.html                     # Fallback client-side instant redirect page
├── portacoco_site_deploy.zip    # Single-file deployment zip ready for cPanel File Manager
├── assets/
│   └── images/                  # Optimized product photos, GIFs, and brand logos
│       ├── logo.jpg
│       ├── mini-cm8.gif
│       ├── wirefree-coco3.png
│       ├── porta-mc10.png
│       ├── coco3-kit.gif
│       └── portacoco-og.png
└── backup_original_website/     # Full historical archive of the original WordPress website
    ├── index.html
    ├── contact-us.html
    ├── info.html
    ├── mini-cm-8-portable-retro-monitor.html
    ├── porta-mc-10.html
    ├── portacoco-3-kit.html
    ├── wirefree-coco-3.html
    └── media/                   # 60+ original images, GIFs, and photos
```

---

## Deployment Reference (InMotion Hosting)

1. Open **cPanel File Manager** in `/home/flutte14/portacoco.com`.
2. Ensure `.htaccess` (and hidden files) are visible by checking **"Show Hidden Files (dotfiles)"** in File Manager Settings.
3. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - `.htaccess`
   - `404.html`
   - `assets/` folder (or upload and extract `portacoco_site_deploy.zip`)
4. Check **"Overwrite existing files"** when prompted.
5. Deactivate old WordPress by renaming `index.php` to `index.php.bak`.
