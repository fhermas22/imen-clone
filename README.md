# IMeN Clone

<div align=\"center\">

[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)
[![Version](https://img.shields.io/badge/Version-0.0.7-green?style=flat-square)](https://github.com/fhermas22/imen-clone)
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
- **Component-Based & Data-Driven** — Reusable UI components + datas/*.js
- **Client-Side Routing** — React Router DOM ready

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
│   │       ├── icons/               # SVG icons (blue/white variants)
│   │       ├── illustrations/
│   │       │   ├── long.term.training/
│   │       │   ├── continuing.education/
│   │       │   └── other/           # our-students.jpg
│   │       ├── logo/                # imen_logo.png/dark.png
│   │       └── photos/              # imen-building.jpg etc.
│   │       └── screenshots/         # home_page.png
│   ├── components/
│   │   ├── common/Button/
│   │   ├── layout/Header/
│   │   │   └── components/
│   │   │       ├── Navbar/
│   │   │       └── NavItemDropdown/
│   │   └── ui/
│   │       ├── PillarCard/
│   │       ├── SectionTitle/
│   │       ├── StatsCounter/
│   │       ├── TrainingCard/
│   │       └── ValuePoint/
│   ├── datas/                       # Data arrays: pillarList.js etc.
│   ├── pages/Home/
│   ├── utils/style/app.css
│   └── main.jsx                     # Entry + Router
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
<img src="src/assets/screenshots/home_page.png" width="280" alt="IMeN Clone Home Page Screenshot">
</p>

## 📝 Changelog

### Version 0.0.7 (Current)
- ✅ Full Home page with 6 data-driven sections
- ✅ Added NavItemDropdown component
- ✅ Complete datas/ (pillarList, longTrainingList, valuePointList, continuingEducationList)
- ✅ Tailwind CSS v4 with @tailwindcss/vite plugin
- ✅ vercel.json for deployment
- ✅ eslint.config.js flat config
- ✅ All UI components implemented & responsive

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

