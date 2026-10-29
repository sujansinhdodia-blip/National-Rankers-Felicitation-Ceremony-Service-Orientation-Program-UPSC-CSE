# 🇮🇳 National Rankers Felicitation Ceremony & Service Orientation Program – UPSC CSE
### Organised by MIT World Peace University (MIT-WPU), Pune
*Centre for Civil Services Guidance & School of Government*

[![Live Deployed URL](https://img.shields.io/badge/Live_Deployment-Vercel-success?style=for-the-badge&logo=vercel)](https://mit-wpu-upsc-felicitation.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/sujansinhdodia-blip/National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE.git)
[![Next.js 14](https://img.shields.io/badge/Next.js-14_App_Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Lighthouse 90+](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen?style=for-the-badge&logo=google-lighthouse)](https://pagespeed.web.dev/)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA_Accessible-blueviolet?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 🌐 Live URLs & Links
- **Official Live Deployed Website:** [https://mit-wpu-upsc-felicitation.vercel.app](https://mit-wpu-upsc-felicitation.vercel.app)
- **Official GitHub Repository:** [https://github.com/sujansinhdodia-blip/National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE.git](https://github.com/sujansinhdodia-blip/National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE.git)

---

## 🏛️ Project Purpose & Ethos
This official portal honours UPSC Civil Services Examination (CSE) All India Rankers—with special pride in MIT-WPU alumni serving across the nation—demystifies the premier civil services (IAS, IPS, IFS, IRS, IAAS), and provides thousands of student aspirants with actionable guidance, authentic topper marksheet breakdowns, and direct officer mentorship.

The design embodies a **formal, prestigious, academic, and trustworthy** visual identity:
- **Colour Palette:** Deep Navy (`#0B1F4B`), Maroon (`#8B1E2D`), Ceremonial Gold (`#C9A227`), and Clean Off-White (`#F8F9FB`).
- **Typography:** Playfair Display (authoritative serif headings) and Inter (high-legibility body).
- **Ceremonial Elements:** Ashoka Chakra vector watermarks, subtle tricolour top accents, and official MIT-WPU seals.

---

## 🔍 SEO & Web Standards Optimization (Lighthouse 90+)
This platform is engineered following strict SEO and accessibility best practices:
- **Schema.org Structured Data (JSON-LD):**
  - `EducationEvent` Schema declaring the date (Nov 14, 2026), location (World Peace Dome & Swami Vivekananda Sabhagruha, Pune), organizers, performers, and free ticket offers.
  - `EducationalOrganization` Schema validating MIT-WPU Pune's address, official URLs, and social profiles.
- **Dynamic XML Sitemap (`/sitemap.xml`):** Automatically indexes static pages and individual ranker profiles (`/rankers/[id]`).
- **Crawler Directives (`/robots.txt`):** Allows full search engine crawling while protecting `/admin`.
- **OpenGraph & Twitter Cards:** Pre-configured image previews and meta tags for WhatsApp, Twitter, and LinkedIn sharing.
- **Canonical URLs & Semantic HTML5:** Unique `<h1>` hierarchy per page with semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).

---

## 📑 Complete Website Structure & Pages

| # | Route | Page Title | Key Capabilities |
|---|-------|------------|------------------|
| 1 | `/` | **Home** | Hero countdown timer, stats counters, featured rankers carousel, schedule preview, leadership messages |
| 2 | `/about` | **About the Program** | Vision, mission, objectives, MIT-WPU legacy, leadership messages, organising committee directory |
| 3 | `/rankers` | **National Rankers (Hall of Fame)** | Search, filter by year (2023/2022/2021), rank range (Top 25/50/100), service, and MIT-WPU Alumni toggle |
| 4 | `/rankers/[id]` | **Ranker Strategy Detail** | Biography, marksheet breakdown, 4-stage strategy (Pre/Mains/Optional/Interview), tips, booklist, and video |
| 5 | `/speakers` | **Chief Guests & Speakers** | Profiles of Chief Guests, former Cabinet Secretaries, DoPT Secretaries, and Police Commissioners |
| 6 | `/schedule` | **Programme Schedule** | 4-track timeline, "Add to Google Calendar", download `.ics` file, and specialized Print/PDF layout |
| 7 | `/services` | **Service Orientation** | All India Services (Art. 312) vs Central Services Group A, DoPT 5-Zone Cadre Policy, LBSNAA/SVPNPA training |
| 8 | `/guidance` | **UPSC CSE Guidance** | 3-stage blueprint, eligibility/attempts, optional subject selection guide, 4-year undergraduate plan, allied exams |
| 9 | `/resources` | **Study Resources** | Searchable & filterable syllabus PDFs, previous 10 years question papers (PYQs), topper notes, booklists |
| 10 | `/register` | **Registration Portal** | Attendee form, instant dynamic QR-code entry pass generation, print-ready admit card, guest & media tab |
| 11 | `/mentorship` | **Officer Mentorship** | Mentor directory of rankers and civil servants with 1-on-1 breakout session booking request form |
| 12 | `/gallery` | **Gallery & Media** | Photos, video masterclass streams, and national press coverage (Indian Express, TOI, Sakaal) |
| 13 | `/contact` | **Contact Secretariat** | Committee contacts, inquiry form, transit advice, and interactive Google Maps embed for Kothrud Pune campus |
| 14 | `/admin` | **Admin Dashboard** | Security PIN gate (`1983`), Add/Delete rankers, 1-click **Export Registrations to CSV**, notice ticker publisher |

---

## 🛠️ Local Installation & Development

### 1. Clone the Repository
```bash
git clone https://github.com/sujansinhdodia-blip/National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE.git
cd National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🔐 Admin Dashboard Access
1. Open [http://localhost:3000/admin](http://localhost:3000/admin) or click the lock icon in the navigation bar.
2. Enter the Security PIN: `1983` (or `admin123`).
3. Features:
   - **Manage Rankers:** Add newly felicitated officers or edit existing profiles.
   - **Export to CSV:** Download full spreadsheet of all registered attendees for security and gate entry.
   - **Notice Ticker:** Broadcast breaking announcements to the sticky top marquee.

---

## 🚀 Pushing to Your GitHub Repository
To push your latest changes to your remote repository:
```bash
git add .
git commit -m "feat: complete professional SEO-optimised MIT-WPU UPSC CSE Felicitation website"
git branch -M main
git remote add origin https://github.com/sujansinhdodia-blip/National-Rankers-Felicitation-Ceremony-Service-Orientation-Program-UPSC-CSE.git
git push -u origin main
```

---

## 📜 Official Disclaimer
This is an official event website of MIT World Peace University (MIT-WPU), Pune and is not affiliated with the Union Public Service Commission (UPSC) or any government body. "UPSC", "CSE", "IAS", "IPS", and related service nomenclature are referenced strictly for academic, orientation, and felicitation purposes.
