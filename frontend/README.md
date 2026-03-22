# Empire X - Frontend Landing Page

Welcome to the Empire X Frontend repository! This project is a highly responsive, modern, production-ready landing page built meticulously with React, Vite, Tailwind CSS, and Framer Motion. 

## 🚀 Features

- **Modern UI/UX**: Includes a dark-centric premium design utilizing gradients, glassmorphism, and deep contrast.
- **Framer Motion Animations**: Smooth page reveals, staggered entrance animations, and interactive hover effects.
- **Dynamic Theming Support**: Fully functional Light & Dark Mode toggle located in the Navigation bar.
- **Scalable Architecture**: Component-driven architecture using robust, reusable pieces (Buttons, Cards, Content Containers).
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile devices.

## 📁 File Structure

The frontend architecture is optimized for a large-scale project:

```
src/
├── assets/                  # Static assets (images, global icons)
├── components/              
│   ├── common/              # Highly reusable UI components (Button, Card, ThemeToggle)
│   ├── layout/              # Structural shells (Header, Footer, ContentContainer)
│   └── sections/            # Major page sections (Hero, Features, Pricing, etc.)
├── pages/                   # Top-level Page components (Landing.jsx)
├── utils/                   # Shared helpers 
│   ├── animations.js        # Global framer-motion variants
│   └── cn.js                # Tailwind class merging utility (clsx + tailwind-merge)
├── App.jsx                  # Main entry point merging context and pages
├── index.css                # Global CSS variables for Theming and Tailwind directives
└── main.jsx                 # React DOM Renderer
```

## 🌗 Light and Dark Mode

The project features a comprehensive theming system:
1. **CSS Variables**: Global colors are defined as variables mapped to `--background`, `--card`, `--primary`, etc. in `src/index.css` via `:root` (light) and `.dark` selectors.
2. **Tailwind Mapping**: `tailwind.config.js` translates these variables into classes (e.g., `bg-background`, `text-primary`).
3. **Toggle Control**: `ThemeToggle.jsx` automatically applies the `.dark` class to the HTML document relative to the user's preference or manual selection.

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Class Merging**: `clsx` and `tailwind-merge`

## 🏃 Setup & Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
