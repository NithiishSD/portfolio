# 🎯 QUICK SETUP INSTRUCTIONS

Follow these steps to get your portfolio running instantly!

## 📦 Installation (2 minutes)

```bash
# 1. Navigate to portfolio directory
cd portfolio

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev
```

**That's it!** Your portfolio will open at `http://localhost:5173`

## ✅ What You'll See

- ✨ Typewriter effect on your name
- 📜 Parchment-themed background with paper texture
- 🎨 Gold accents and elegant serif fonts
- 🚀 Smooth scroll navigation
- 💼 4 featured projects with interactive modals
- 📅 Timeline of your journey
- 📧 Contact section with social links

## 🎨 Customization

All your personal information is already configured:
- Name: Nithiish S D
- Email: nithiishdanasekar@gmail.com
- Education: M.Sc Software Systems @ PSG Tech
- Projects: 4 featured from your GitHub
- Timeline: 2024-2025 milestones

To update any content, edit the files in `src/sections/` and `src/components/`.

## 🚀 Deploy to Vercel (5 minutes)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin https://github.com/NithiishSD/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repository
4. Click "Deploy"
5. Done! Your site is live 🎉

See `DEPLOYMENT.md` for detailed deployment guide.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/      # Reusable components (Navbar, Hero, etc.)
│   ├── sections/        # Main sections (About, Skills, Projects, etc.)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config (colors, fonts)
└── index.html           # HTML template
```

## 🎯 Features Implemented

✅ Typewriter effect on hero name
✅ Smooth scroll navigation
✅ Scroll-triggered animations
✅ Project cards with hover tilt effect
✅ Interactive project modals
✅ Timeline/journey section
✅ Responsive mobile-first design
✅ Old cultured theme (parchment + gold)
✅ Paper texture SVG background
✅ Custom fonts (Playfair Display + Merriweather)
✅ Social links (GitHub, LinkedIn, Email)

## 🛠️ Tech Stack

- React 19
- Vite 6
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)
- React Scroll

## 📝 Next Steps

1. **Test locally**: Run `npm run dev` and explore
2. **Customize**: Update colors, fonts, or content as needed
3. **Deploy**: Push to GitHub and deploy on Vercel
4. **Share**: Add to your resume, LinkedIn, and GitHub profile

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run build
# Check error logs and fix any issues
```

## 📞 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment details
- Review component files in `src/` for code examples

---

**Enjoy your new portfolio! 🎨✨**

Built with care by following the reference design at dineshdoesstuff.xyz
Transformed with cultured aesthetics and modern React best practices.
