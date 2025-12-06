## Tags

# Portfolio Website - Akanksha Negi

A modern, responsive personal portfolio website showcasing projects, skills, education, and contact information. Built with cutting-edge web technologies to deliver a smooth and visually appealing user experience.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Animated Background** - Custom SVG animations with motion paths for an engaging hero section
- **3D Elements** - Interactive 3D star canvas using Three.js
- **Smooth Animations** - Framer Motion for fluid page transitions and scroll animations
- **Dynamic Typewriter Effect** - Rotating role titles in the hero section
- **Interactive Timeline** - Vertical timeline component for education and experience
- **Contact Form** - Integrated EmailJS for direct messaging
- **Parallax Effects** - Tilt effects on profile image and project cards
- **Dark Theme** - Elegant dark mode design with gradient accents

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2** - Latest React with modern hooks and features
- **Vite 7.2** - Ultra-fast build tool and dev server

### Styling & UI
- **Styled Components** - CSS-in-JS for component-level styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Material-UI (MUI)** - React component library for consistent UI elements
- **Emotion** - CSS-in-JS library for MUI integration

### Animations & 3D
- **Framer Motion** - Production-ready animation library
- **Three.js** - WebGL library for 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Maath** - Math utilities for 3D animations

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Scroll** - Smooth scrolling navigation
- **React Parallax Tilt** - Parallax tilt effects
- **Typewriter Effect** - Animated typing effect
- **React Vertical Timeline Component** - Timeline visualization
- **EmailJS** - Email service integration
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **Vite Plugin React** - Fast refresh and JSX transformation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akanksha718/Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/
│   │   ├── canvas/      # Three.js 3D components
│   │   ├── section/     # Main section components
│   │   ├── HeroBgAnimation/ # SVG background animation
│   │   └── Navbar.jsx   # Navigation component
│   ├── data/
│   │   └── constants.js # Portfolio data (projects, skills, etc.)
│   ├── utils/
│   │   ├── motion.js    # Framer Motion variants
│   │   └── Theme.js     # Theme configuration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/constants.js` to update:
- Bio information (name, roles, description)
- Social media links
- Skills and technologies
- Project details
- Education and experience

### Modify Theme
Edit `src/utils/Theme.js` to customize:
- Color scheme
- Typography
- Spacing and breakpoints

### Change Animations
Edit `src/utils/motion.js` to adjust:
- Animation timing
- Motion variants
- Transition effects

## 📱 Responsive Breakpoints

- **Desktop**: > 960px
- **Tablet**: 640px - 960px
- **Mobile**: < 640px
- **Small Mobile**: < 480px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Akanksha Negi**
- GitHub: [@akanksha718](https://github.com/akanksha718)
- LinkedIn: [Akanksha Negi](https://www.linkedin.com/in/akanksha-negi-51555a2b6/)

---

Made with ❤️ using React, Vite, and Three.js
