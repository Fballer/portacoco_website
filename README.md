# PortaCoCo Corporate Website

Official corporate website for **PortaCoCo** ([www.portacoco.com](https://www.portacoco.com)), founded by **Mark Pacan**.

PortaCoCo is a boutique hardware engineering and product development venture dedicated to retro-computing mobility and non-destructive hardware enhancement.

---

## Repository Structure

- `index.html`: Clean, semantic modern HTML5 single-page corporate portal.
- `style.css`: Bespoke responsive dark slate design system with amber CRT & cyan tech accents.
- `script.js`: Vanilla ES6 script for navigation interactions and corporate contact management.
- `assets/images/`: Optimized local image assets and product GIFs.
- `backup_original_website/`: Full historical archive of the original WordPress website, including all 7 subpages and 60+ media assets.

---

## Strategic Highlights

1. **Executive Portfolio & Resume Alignment**:
   - Focuses on end-to-end product design: ideation, CAD modeling, rapid prototyping, electrical power systems, and trade show demonstrations (CocoFest 2024–2025).
   - Showcases the **"Zero Case Modification"** engineering principle (100% reversible retro-preservation).

2. **Supply Chain & Tariff Advisory**:
   - Prominently addresses the current pause in commercial direct sales as a proactive operational response to evolving US–Canada cross-border trade duties and tariffs.
   - Highlights ongoing strategic exploration of domestic manufacturing and nearshore assembly capabilities.

3. **Streamlined Product Showcase**:
   - **Porta Mini CM-8**: Portable, battery-compatible wireless retro monitor replicating the classic CM-8 aesthetic with modern IPS display.
   - **WireFree CoCo 3**: Untethered computing with wireless HDMI transmission and 7+ hours of battery life.
   - **Porta MC-10 Module**: Ultra-compact mobile conversion kit for the Tandy MC-10.
   - **PortaCoCo 3 & OG Platforms**: Ryobi ONE+ battery-powered systems with integrated displays and internal DriveWire / Wi-Fi.

---

## Deployment to one.com

This website is completely self-contained with zero server dependencies or build steps.

### Deployment Steps:
1. Log in to your **one.com Control Panel**.
2. Navigate to **File Manager** (or connect via SFTP).
3. Open your root web directory (`public_html` or `/`).
4. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - The entire `assets/` folder
5. (Optional) Keep `backup_original_website/` stored locally and on GitHub as your archive.

---

## Linking to GitHub

To push this repository to GitHub:

```bash
# 1. Create a new repository on github.com (e.g., portacoco_website)
# 2. Link your local repo to GitHub:
git remote add origin https://github.com/<your-username>/portacoco_website.git

# 3. Push to main:
git push -u origin main
```
