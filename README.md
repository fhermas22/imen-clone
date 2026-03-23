# IMeN Clone

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)
[![Version](https://img.shields.io/badge/Version-0.0.6-green?style=flat-square)](https://github.com/fhermas22/imen-clone)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

> A modern clone of the **Institut des Métiers du Numérique (IMeN)** website, built with React, Vite, and Tailwind CSS. This project replicates the professional look and feel of the original IMeN website, serving as a learning exercise and demonstration of modern frontend development practices.

## ✨ Features

- **Responsive Navigation** — Fully responsive header with navbar and dropdown menus
- **Hero Section** — Immersive hero with background image and call-to-action buttons
- **Pillar Cards** — Reusable UI components for showcasing key information
- **Stats Counter** — Animated statistics display component
- **Modern UI** — Clean, professional design following the original IMeN branding
- **Component-Based Architecture** — Reusable React components
- **Routing** — Client-side routing with React Router DOM

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| React | 19.2.0 | Core UI framework |
| Vite | 7.3.1 | Build tool and dev server |
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| React Router DOM | 7.13.1 | Client-side routing |
| ESLint | 9.39.3 | Code linting |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fhermas22/imen-clone.git
cd imen-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
imen-clone/
├── public/                          # Static assets
│   └── favicon.ico                  # Website favicon
├── src/
│   ├── assets/
│   │   └── images/                  # Images, icons, logos, illustrations
│   │       ├── background/          # Background images
│   │       ├── icons/               # SVG icons
│   │       ├── illustrations/       # Illustration images
│   │       ├── logo/                # Logo images
│   │       └── photos/              # Photography assets
│   ├── components/
│   │   ├── common/
│   │   │   └── Button/              # Reusable button component
│   │   ├── layout/
│   │   │   └── Header/              # Header component with navbar
│   │   │       └── components/
│   │   │           ├── Navbar/      # Navigation bar
│   │   │           └── NavItemDropdown/ # Dropdown menu items
│   │   └── ui/
│   │       ├── PillarCard/          # UI card component
│   │       ├── SectionTitle/        # Section title component
│   │       ├── StatsCounter/        # Animated statistics component
│   │       ├── TrainingCard/        # Training card component
│   │       └── ValuePoint/          # Value point component
│   ├── pages/
│   │   └── Home/                    # Home page
│   ├── utils/
│   │   └── style/                   # Global styles (app.css)
│   ├── main.jsx                     # Application entry point with routing
│   └── App.jsx                      # Root component (if used)
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
└── vercel.json                       # Vercel deployment configuration
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📸 Screenshots

> *(Screenshots will be added as the project develops)*

## 📝 Changelog / Recent Updates

### Version 0.0.6 (Current)

- ✅ Added responsive header with navbar
- ✅ Implemented dropdown navigation menus
- ✅ Created hero section with background image
- ✅ Built PillarCard reusable component
- ✅ Added StatsCounter animated statistics component
- ✅ Added SectionTitle reusable component
- ✅ Added TrainingCard component for long-term formations section
- ✅ Added ValuePoint component for "Why choose us?" section
- ✅ Integrated React Router DOM for client-side routing
- ✅ Set up Tailwind CSS v4 with Vite plugin

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. The original IMeN website content belongs to **Institut des Métiers du Numérique**. Official website: https://imen.school

---

<div align="center">

### ✨ Built with ❤️ by [**@fhermas22**](https://github.com/fhermas22) using **React** & **Tailwind CSS** ✨

</div>

