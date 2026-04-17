# IMeN Clone

<div align=\"center\">

[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)
[![Version](https://img.shields.io/badge/Version-0.3.12-green?style=flat-square)](https://github.com/fhermas22/imen-clone)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

> A modern clone of the **Institut des Métiers du Numérique (IMeN)** website, built with React, Vite, and Tailwind CSS v4. This project replicates the professional look and feel of the original IMeN website with fully responsive design and data-driven sections, serving as a learning exercise in modern frontend development.

## ✨ Features

- **Responsive Header & Navigation** — Header with Navbar and NavItemDropdown support
- **Hero Section** — Immersive hero with IMeN building photo and primary/secondary CTA buttons
- **Fundamental Pillars** — 3 PillarCards with hover icons (Formation Métier, Centré Humain, Employabilité)
- **Animated Stats** — StatsCounter for 72+ students, 16 formations, 39 certifiés, +100 partners
- **Long-term Formations** — 3 TrainingCards (Programmation Informatique, Motion Design, Big Data & IA)
- **Why Choose Us** — ValuePoint list (4 points) with illustration and CTA
- **Continuing Education** — 3 TrainingCards (Dev Web, Maintenance Informatique, Web Design)
- **Training Page** — /training route with TrainingDetail and BoxDetail components
- **Footer & Social Links** — Responsive Footer with SocialLink components (Facebook, Instagram, Twitter/X, LinkedIn)
- **Component-Based & Data-Driven** — Reusable UI components driven by src/datas/ (pillarList.js, trainingList.js, valuePointList.js)
- **ScrollToTop Utility** — Smooth scrolling on page navigation
- **Client-Side Routing** — React Router DOM ready
- **Dynamic Routing** — Training page renders content dynamically via useParams based on route IDs, reducing duplication
- **404 Error Page** — Custom responsive 404 page (/error route)

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| React | 19.2.0 | Core UI framework with StrictMode |
| Vite | 7.3.1 | Fast build tool and dev server |
| Tailwind CSS | 4.1.18 (@tailwindcss/vite) | Utility-first CSS with Vite plugin |
| React Router DOM | 7.13.1 | BrowserRouter for SPA routing |
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
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── icons/                   # SVG icons (primary/secondary/blue/white variants)
│   │       ├── illustrations/
│   │       │   ├── _initial/            # Initial illustrations
│   │       │   ├── long.term.training/  # 3 training images
│   │       │   ├── continuing.education/# 3 training images
│   │       │   └── other/               # our-students.webp
│   │       ├── logo/                    # imen_logo.png, imen_logo_dark.png
│   │       ├── photos/                  # imen-building.webp, it-programming-students.webp
│   │       └── screenshots/             # home_page.png, training_page.png, 404_page.png
│   ├── components/
│   │   ├── common/
│   │   │   └── Button/
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   │   └── components/
│   │   │   │       └── SocialLink/
│   │   │   └── Header/
│   │   │       └── components/
│   │   │           ├── Navbar/
│   │   │           └── NavItemDropdown/
│   │   └── ui/
│   │       ├── PillarCard/
│   │       ├── SectionTitle/
│   │       ├── StatsCounter/
│   │       ├── TrainingCard/
│   │       ├── TrainingDetail/
│   │       ├── BoxDetail/
│   │       └── ValuePoint/
│   ├── datas/
│   │   ├── pillarList.js               # 3 pillars data
│   │   ├── trainingList.js             # All trainings (long-term + continuing)
│   │   └── valuePointList.js           # 4 value points
│   ├── pages/
│   │   ├── Home/
│   │   ├── Training/
│   │   └── Error/
│   ├── utils/
│   │   ├── scripts/
│   │   │   └── ScrollToTop.jsx
│   │   └── style/
│   │       └── app.css
│   └── main.jsx                        # App entry + Router setup
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

<p align="center">
  <img src="src/assets/screenshots/home_page.png" width="280" alt="Home Page">
  <img src="src/assets/screenshots/training_page.png" width="280" alt="Training Page">
  <img src="src/assets/screenshots/404_page.png" width="280" alt="404 Page">
</p>

## 📝 Changelog

### Version 0.0.7
- ✅ Full Home page with 6 data-driven sections
- ✅ Added NavItemDropdown component
- ✅ Initial datas/ setup
- ✅ Tailwind CSS v4 with @tailwindcss/vite plugin
- ✅ vercel.json for deployment
- ✅ eslint.config.js flat config
- ✅ All Home UI components implemented & responsive

### Version 0.2.11
- ✅ Added Training page (/training) with responsive listing
- ✅ New TrainingDetail and BoxDetail UI components
- ✅ trainingList.js data (consolidated long-term + continuing education)
- ✅ ScrollToTop.jsx utility for smooth navigation
- ✅ Updated project structure and datas/

### Version 0.3.12 (Current)
- ✅ Implemented dynamic routing for Training page using useParams (route ID-based templates)
- ✅ Added 404 Error page (src/pages/Error/index.jsx)
- ✅ Added screenshots for training_page and 404_page
- ✅ Synced version to package.json 0.3.12

## 🤝 Contributing

1. Fork & branch: `git checkout -b feature/xyz`
2. Lint: `npm run lint`
3. Commit: `git commit -m '..."`
4. PR

## 📄 License

Educational clone. Original © IMeN (https://imen.school)

---

<div align="center">

✨ **Built by [@fhermas22](https://github.com/fhermas22)** ✨

</div>

