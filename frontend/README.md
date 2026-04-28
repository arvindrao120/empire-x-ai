# Empire X - Frontend Application

Welcome to the Empire X Frontend repository! This project is a highly responsive, modern, production-ready frontend built meticulously with React, Vite, Tailwind CSS, and Framer Motion. 

## 🚀 Features

- **Modern UI/UX Development**: Dark-centric premium aesthetics using gradients and glassmorphism.
- **Highly Responsive Dashboard**: Deep mobile optimization for dashboard visibility and interactive tracking.
- **Modular Analytics & AI Strategy Component**: Dynamic grid layout integrating editable AI recommendations alongside stored strategies.
- **Campaigns Framework**: Dedicated forms, active operation tracking tables, and visually separated metrics mirroring the core platform.
- **Framer Motion Animations**: Smooth page reveals, staggered entrance animations, and responsive layout transitions on the dashboard.
- **Consistent Sidemenu Routing**: Standardized layout spanning nested routes.
- **Admin Panel & Settings Area**: Dedicated interactive views and components for system administrators and user-specific customizations.
- **Dynamic Theming Support**: Fully functional Light & Dark Mode toggle.
- **Scalable Architecture**: Component-driven architecture using robust, reusable pieces (Buttons, Cards, Content Containers).

## 📁 File Structure

The frontend architecture is optimized for a modular React application:

```text
src/
├── api/                     # Axios setups for API requests
├── assets/                  # Static assets (images, global icons)
├── components/              
│   ├── admin/               # Administrative panel components and tables
│   ├── analytics/           # Data visualizations and animated metric grids
│   ├── campaigns/           # Elements handling Ad campaigns and data forms
│   ├── common/              # Highly reusable UI components (Button, Card, ThemeToggle)
│   ├── dashboard/           # Specific elements mapping the authenticated workspace
│   │   ├── home/            # Home sub-section rendering AI Strategies and Actions
│   │   └── sidebar/         # Universal nested route routing
│   ├── layout/              # Structural shells (Header, Footer, ContentContainer)
│   ├── sections/            # Major landing page sections
│   └── settings/            # User profile and platform settings components
├── context/                 # Application Context APIs (AuthContext)
├── pages/                   # Top-level Page components (Landing, Dashboard, Campaigns, Login, Admin, Setting)
├── utils/                   # Shared helpers 
│   ├── animations.js        # Global framer-motion variants
│   └── cn.js                # Tailwind class merging utility (clsx + tailwind-merge)
├── App.css                  # Main application CSS
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
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
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
