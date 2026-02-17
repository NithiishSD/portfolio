# Nithiish S D - Portfolio

A modern, cultured-theme portfolio website built with React 19, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Old Cultured Theme**: Parchment background (#FDF6E3), gold accents (#D4AF37), elegant serif typography
- **Typography**: Playfair Display (headings), Merriweather (body text)
- **Animations**: Smooth scroll, typewriter effect, scroll-triggered reveals, hover effects
- **Responsive**: Mobile-first design with seamless adaptation across all devices
- **Interactive**: Project modals, tilt effects, and smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm installed

### Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx          # Hero section with typewriter effect
│   │   ├── ProjectCard.jsx   # Project card with modal
│   │   └── Footer.jsx        # Footer with social links
│   ├── sections/
│   │   ├── About.jsx         # About section with education
│   │   ├── Skills.jsx        # Categorized skills grid
│   │   ├── Projects.jsx      # Featured projects showcase
│   │   ├── Journey.jsx       # Timeline/journey section
│   │   └── Contact.jsx       # Contact information
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Sections

1. **Hero**: Typewriter name animation, tagline, dual CTA buttons (View Work + Download Resume)
2. **About**: Profile photo, bio, education details, location, competitive athlete & coding practice
3. **Skills**: Categorized tech stack (Frontend, Backend, Languages, Tools & Platforms) - 16 skills total
4. **Projects**: 4 featured projects with modals (SignBridge, LifeSync, Asteroid Breaker, Arceus Gallery)
5. **Journey**: Timeline of milestones from 2024-2025
6. **Contact**: Email, LinkedIn, GitHub links
7. **Resume**: Downloadable PDF accessible from navbar and hero section

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/NithiishSD/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. **Build locally**:
```bash
npm run build
```

2. **Deploy via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Or drag and drop the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "homepage": "https://NithiishSD.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})
```

4. **Deploy**:
```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React 19**: Latest React with improved performance
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready animations
- **Lucide React**: Beautiful icon library
- **React Scroll**: Smooth scrolling navigation

## 📝 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  parchment: { /* ... */ },
  gold: { /* ... */ },
  ink: { /* ... */ }
}
```

### Content
Update your information in:
- `src/components/Hero.jsx` - Name and tagline
- `src/sections/About.jsx` - Bio and education
- `src/sections/Skills.jsx` - Skills list
- `src/sections/Projects.jsx` - Project details
- `src/sections/Journey.jsx` - Timeline events
- `src/sections/Contact.jsx` - Contact information

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **Email**: nithiishdanasekar@gmail.com
- **LinkedIn**: [linkedin.com/in/nithiish-s-d](https://www.linkedin.com/in/nithiish-s-d)
- **GitHub**: [github.com/NithiishSD](https://github.com/NithiishSD)

---

**Built with ❤️ by Nithiish S D**
