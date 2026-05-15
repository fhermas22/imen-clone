# IMeN Clone

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)
[![Version](https://img.shields.io/badge/Version-1.13.16-green?style=flat-square)](https://github.com/fhermas22/imen-clone)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

> A modern clone of the **Institut des Métiers du Numérique (IMeN)** website, built with React, Vite, and Tailwind CSS v4. This project replicates the professional look and feel of the original IMeN website with fully responsive design and data-driven sections, serving as a learning exercise in modern frontend development.

## ✨ Features

- **Responsive Header & Navigation** — Header with Navbar featuring mobile hamburger menu, scroll-aware styling (backdrop blur + shadow), and NavItemDropdown support
- **Hero Section** — Immersive hero with IMeN building photo and primary/secondary CTA buttons
- **Fundamental Pillars** — 3 PillarCards with hover icons (Formation Métier, Centré Humain, Employabilité)
- **Animated Stats** — StatsCounter for 72+ students, 16 formations, 39 certifiés, +100 partners
- **Long-term Formations** — 8 TrainingCards across Digital and Design departments (Programmation Informatique, Motion Design, Big Data & IA, Cybersécurité, etc.)
- **Why Choose Us** — ValuePoint list (4 points) with illustration and CTA
- **Continuing Education** — 6 TrainingCards (Développement Web, Analyse de Données, Maintenance Informatique, Montage Vidéo, Graphisme, Web Design)
- **Department Pages** — Dynamic `/department/:dept` routes (Numérique, Design, Continuing Education) with hero illustrations and filtered training grids
- **School Page** — `/school` page with data-driven RichTextBlock sections and CTAs
- **Vision Page** — `/our-vision` page with data-driven RichTextBlock sections and CTAs
- **Certification Process Page** — `/certification-process` page with step-by-step certification journey, RichTextBlock sections, and CTA buttons for registration or department discovery
- **Contact Page** — `/contact` page with a responsive contact form, `InputField` components, and ContactDetail cards for location, phone, and email
- **Training Detail Page** — `/training/:id` route with TrainingDetail, BoxDetail components, and downloadable payment terms
- **Programs Page** — `/programs` route displaying 4 programs (PIP, PFE, Foire de l'Emploi, IMeN Boost Days) with RichTextBlock components
- **Under Construction Pages** — Reusable placeholder component for upcoming routes with countdown redirect
- **AI Chat Assistant** — AfriChatBootstrap integration with My-AfriChat widget (Amina), featuring voice, multilingual support, and custom IMeN configuration
- **RichTextBlock Component** — Reusable component for rendering multi-paragraph content with title and borders
- **Reusable Error Component** — Configurable ErrorNotFound component with auto-redirect countdown for 404 scenarios
- **Footer & Social Links** — Responsive Footer with SocialLink components (Facebook, Instagram, Twitter/X, LinkedIn)
- **Component-Based & Data-Driven** — Reusable UI components driven by `src/datas/` (certificationInfo.js, pillarList.js, programList.js, schoolInfo.js, visionInfo.js, trainingList.js, valuePointList.js)
- **ScrollToTop Utility** — Smooth scrolling on page navigation
- **Client-Side Routing** — React Router DOM with BrowserRouter
- **Dynamic Routing** — Department and Training pages render content dynamically via `useParams` based on route IDs, reducing duplication
- **404 Error Page** — Custom responsive 404 page with automatic countdown redirect
- **SPA Redirects** — `public/_redirects` configured for client-side routing on static hosts

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| React | 19.2.0 | Core UI framework with StrictMode |
| Vite | 7.3.1 | Fast build tool and dev server |
| Tailwind CSS | 4.1.18 (@tailwindcss/vite) | Utility-first CSS with Vite plugin |
| React Router DOM | 7.13.1 | BrowserRouter for SPA routing |
| My-AfriChat | 0.1.3 | AI Chat widget integration (Amina assistant) |
| ESLint | 9.39.3 (flat config) | Modern linting configuration |

## 📋 Prerequisites

- **Node.js** v18+
- **npm** or **yarn**

## 🚀 Getting Started

### 1. Clone

```bash
git clone https://github.com/fhermas22/imen-clone.git
cd imen-clone
```

### 2. Install

```bash
npm install
```

### 3. Dev Server

```bash
npm run dev
```

Open http://localhost:5173 (or assigned port).

### 4. Build & Preview

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
imen-clone/
├── public/
│   ├── _redirects                    # SPA redirect rules for static hosts
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── documents/                # Payment terms and other documents
│   │   ├── images/
│   │   │   ├── icons/                # SVG icons (primary/secondary/blue/white variants)
│   │   │   ├── illustrations/
│   │   │   │   ├── hero/             # Hero illustrations
│   │   │   │   ├── other/            # our-students.webp
│   │   │   │   ├── trainings/
│   │   │   │   │   ├── continuing.education/     # 6 training images + hero
│   │   │   │   │   └── long.term.training/       # 8 training images + hero (digital/design)
│   │   │   ├── logo/                 # imen_logo.png, imen_logo_dark.png
│   │   │   ├── photos/               # imen-building.webp, it-programming-students.webp
│   │   │   └── screenshots/          # Page screenshots for documentation
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── ErrorNotFound/        # Reusable 404 component with countdown redirect
│   │   │   ├── Hero/
│   │   │   ├── InputField/
│   │   │   └── RichTextBlock/        # Multi-paragraph content renderer
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   │   └── components/
│   │   │   │       └── SocialLink/
│   │   │   └── Header/
│   │   │       └── components/
│   │   │           ├── Navbar/       # Mobile hamburger + scroll-aware nav
│   │   │           └── NavItemDropdown/
│   │   └── ui/
│   │       ├── AfriChatBootstrap/    # My-AfriChat AI assistant integration
│   │       ├── BoxDetail/            # Training metadata sidebar component
│   │       ├── ContactDetail/        # Contact information card component
│   │       ├── PillarCard/
│   │       ├── SectionTitle/
│   │       ├── StatsCounter/
│   │       ├── TrainingCard/
│   │       ├── TrainingDetail/
│   │       └── ValuePoint/
│   ├── datas/
│   │   ├── certificationInfo.js      # Certification process content
│   │   ├── pillarList.js             # 3 pillars data
│   │   ├── programList.js            # 4 programs (PIP, PFE, Foire, Boost Days)
│   │   ├── schoolInfo.js             # School page content
│   │   ├── trainingList.js           # All trainings (8 long-term + 6 continuing)
│   │   ├── valuePointList.js         # 4 value points
│   │   └── visionInfo.js         # IMeN Vision content
│   ├── pages/
│   │   ├── CertificationProcess/      # Certification journey page
│   │   ├── Contact/                    # Contact form and details page
│   │   ├── Department/               # Dynamic department listing page
│   │   ├── Error/                    # 404 error page
│   │   ├── Home/                     # Landing page with 6 sections
│   │   ├── Programs/                 # Programs listing page
│   │   ├── School/                   # School presentation page
│   │   ├── Training/                 # Dynamic training detail page
│   │   ├── UnderConstruction/        # Placeholder for upcoming pages
│   │   └── Vision/                   # Vision page
│   ├── utils/
│   │   ├── hooks/
│   │   ├── scripts/
│   │   │   └── ScrollToTop.jsx
│   │   └── style/
│   │       └── app.css
│   └── main.jsx                      # App entry + Router setup
├── africhat.config.js                # My-AfriChat configuration (Amina assistant)
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── vercel.json
```

## 🎨 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run lint` | Lint code |

## 🚀 Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. `vercel` (follow prompts)
3. Or push to GitHub + Vercel dashboard.

Configures SPA rewrites + asset caching.

## 📸 Screenshots

| | | |
|:---:|:---:|:---:|
| **Home Page** | **Training Detail Page** | **404 Error Page** |
| <img src="src/assets/screenshots/home_page.png" width="280" alt="Home Page"> | <img src="src/assets/screenshots/training_page.png" width="280" alt="Training Detail Page"> | <img src="src/assets/screenshots/404_page.png" width="280" alt="404 Error Page"> |
| **Digital Department** | **Design Department** | **Continuing Education** |
| <img src="src/assets/screenshots/department-digital_page.png" width="280" alt="Digital Department Page"> | <img src="src/assets/screenshots/department-design_page.png" width="280" alt="Design Department Page"> | <img src="src/assets/screenshots/continuing-education_page.png" width="280" alt="Continuing Education Page"> |
| **Programs Page** | **Under Construction** | **School Page** |
| <img src="src/assets/screenshots/programs_page.png" width="280" alt="Programs Page"> | <img src="src/assets/screenshots/under-construction_page.png" width="280" alt="Under Construction Page"> | <img src="src/assets/screenshots/school_page.png" width="280" alt="School Page"> |
| **Vision Page** | **Certification Process** | **Contact Page** |
| <img src="src/assets/screenshots/vision_page.png" width="280" alt="Vision Page"> | <img src="src/assets/screenshots/certification-process_page.png" width="280" alt="Certification Process"> | <img src="src/assets/screenshots/contact_page.png" width="280" alt="Contact Page"> |


## 📝 Changelog

### Version 1.13.16 (Current)
- ✅ Added `CertificationProcess` and `Contact` pages with dedicated rich content and action buttons
- ✅ Added contact form page with `InputField` form fields and `ContactDetail` cards for location, phone, and email
- ✅ Added `certificationInfo.js` data file for content-driven page
- ✅ Added screenshots for **Certification Process** and **Contact** pages
- ✅ Synced README version to `package.json` (1.13.16)

### Version 0.11.14
- ✅ Added **School** and **Vision** pages (`/school`, `/our-vision`) with data-driven RichTextBlock content
- ✅ Added `cschoolInfo.js` and `visionInfo.js` data files for content-driven pages
- ✅ Added screenshots for School and Vision pages
- ✅ Updated Project Structure documentation
- ✅ Synced version to package.json 0.11.14

### Version 0.9.14
- ✅ Added **Programs Page** (`/programs`) with RichTextBlock components displaying 4 programs
  - Programme d'Insertion Professionnelle (PIP)
  - Programme de Formation en Entrepreneuriat (PFE)
  - Foire de l'Emploi
  - IMeN Boost Days
- ✅ Added **UnderConstruction Page** for upcoming routes with reusable placeholder component
- ✅ Implemented **My-AfriChat Integration** (AI Chat Assistant "Amina")
  - Added `my-africhat` v0.1.3 dependency
  - Created `AfriChatBootstrap` component
  - Added `africhat.config.js` with custom IMeN configuration
  - Features: voice output, multilingual support, professional persona
- ✅ Added **RichTextBlock** reusable component
- ✅ Added 11 new routes using UnderConstruction placeholder:
  - `/school`, `/our-vision`, `/our-network`, `/certification-process`
  - `/workshops`, `/blog`, `/events`, `/jobs`, `/about`
  - `/student-portfolio`, `/student-registration`
- ✅ Added screenshots for Programs and UnderConstruction pages
- ✅ Updated Project Structure documentation
- ✅ Synced version to package.json 0.9.14

### Version 0.6.12
- ✅ Added Department pages (`/department/:dept`) with dynamic routing for Numérique, Design, and Continuing Education
- ✅ Created reusable `ErrorNotFound` component with configurable auto-redirect countdown
- ✅ Added `BoxDetail` UI component for training metadata side-panel
- ✅ Expanded training catalog to **14 programs** (8 long-term + 6 continuing education) with detailed fields (presentation, goals, openings, target audience, materials, preview)
- ✅ Implemented mobile-responsive navbar with hamburger menu and scroll-aware backdrop blur styling
- ✅ Added `public/_redirects` for SPA routing support on static hosts
- ✅ Added screenshots for Digital Department, Design Department, and Continuing Education pages
- ✅ Synced version to package.json 0.6.12

### Version 0.3.12
- ✅ Implemented dynamic routing for Training page using useParams (route ID-based templates)
- ✅ Added 404 Error page (`src/pages/Error/index.jsx`)
- ✅ Added screenshots for training_page and 404_page
- ✅ Synced version to package.json 0.3.12

### Version 0.2.11
- ✅ Added Training page (`/training`) with responsive listing
- ✅ New TrainingDetail and BoxDetail UI components
- ✅ trainingList.js data (consolidated long-term + continuing education)
- ✅ ScrollToTop.jsx utility for smooth navigation
- ✅ Updated project structure and datas/

### Version 0.0.7
- ✅ Full Home page with 6 data-driven sections
- ✅ Added NavItemDropdown component
- ✅ Initial datas/ setup
- ✅ Tailwind CSS v4 with @tailwindcss/vite plugin
- ✅ vercel.json for deployment
- ✅ eslint.config.js flat config
- ✅ All Home UI components implemented & responsive

## 🤝 Contributing

1. Fork & branch: `git checkout -b feature/xyz`
2. Lint: `npm run lint`
3. Commit: `git commit -m '...'`
4. PR

## 📄 License

Educational clone. Original © IMeN (https://imen.school)

---

<div align="center">

✨ **Built by [@fhermas22](https://github.com/fhermas22)** ✨

</div>

