<div align="center">
<img width="1200" height="475" alt="Mavac Communication Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<h1 align="center">Mavac Communication</h1>
<p align="center">
  <strong>Luxury Brand Strategy & CSR Storytelling</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-quick-deploy">Deploy</a> •
  <a href="#-local-development">Development</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-documentation">Docs</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.4-61dafb?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-Ready-000000?logo=vercel" alt="Vercel Ready" />
</p>

---

## 🌟 Overview

**Mavac Communication** is a premium corporate communication and CSR storytelling platform designed for luxury brands. Built with cutting-edge web technologies, it features:

- 🎬 **Cinematic Hero** - Full-screen immersive experience with Ken Burns effect
- 🎨 **Luxury Design** - Gold accents, sophisticated animations, premium aesthetics
- 🖼️ **Portfolio Gallery** - Filterable showcase with elegant hover effects
- 🤖 **AI Consultant** - Powered by Google Gemini AI for brand strategy insights
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

---

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Asmodeus-21/Mavac-Communication)

**Or manually:**

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Vercel auto-detects Vite settings ✨

3. **Add Environment Variable**:
   - Key: `GEMINI_API_KEY`
   - Value: Get from [Google AI Studio](https://aistudio.google.com/app/apikey)

4. **Deploy** 🎉

📖 **Detailed Guide**: See [QUICKSTART.md](./QUICKSTART.md)

---

## 💻 Local Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Asmodeus-21/Mavac-Communication.git
cd Mavac-Communication

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Add your Gemini API key to .env.local
# GEMINI_API_KEY=your_api_key_here

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎨

### Available Scripts

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## ✨ Features

### 1. **Cinematic Hero Section**
- Full-screen immersive experience
- Ken Burns animation effect
- Smooth scroll indicators
- Responsive CTAs

### 2. **Services Showcase**
- 6 core service offerings
- Interactive hover effects
- Gold accent animations
- Grid layout with borders

### 3. **Portfolio Gallery**
- Filterable by category (All, Films, CSR, Publishing, Branded)
- Grayscale to color transitions
- Gold frame overlays
- 6 showcase projects

### 4. **AI Brand Consultant**
- Powered by Google Gemini AI
- Real-time strategy generation
- CSR narrative creation
- Editorial-style responses

### 5. **Luxury Aesthetics**
- Premium gold (#D4AF37) color scheme
- Custom scrollbar styling
- Sophisticated animations
- Inter font family

### 6. **SEO Optimized**
- Comprehensive meta tags
- Open Graph support
- Twitter Card integration
- Semantic HTML structure

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.4 | UI Framework |
| **TypeScript** | 5.8.2 | Type Safety |
| **Vite** | 6.2.0 | Build Tool |
| **Tailwind CSS** | Latest (CDN) | Styling |
| **Google Gemini AI** | 1.39.0 | AI Features |
| **Lucide React** | 0.563.0 | Icons |

---

## 📁 Project Structure

```
Mavac-Communication/
├── components/              # React components
│   ├── Header.tsx          # Navigation with scroll progress
│   ├── Hero.tsx            # Cinematic hero section
│   ├── Services.tsx        # Services grid
│   ├── WorkGallery.tsx     # Portfolio showcase
│   ├── ConsultantAI.tsx    # AI-powered consultant
│   └── Footer.tsx          # Footer with contact
├── public/                 # Static assets
├── App.tsx                 # Main application
├── index.tsx               # Entry point
├── index.html              # HTML template
├── types.ts                # TypeScript types
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies
├── DEPLOYMENT.md           # Detailed deployment guide
├── QUICKSTART.md           # Quick start guide
├── ASSETS.md               # Image assets documentation
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette
```css
--luxury-gold: #D4AF37      /* Primary accent */
--soft-lavender: #E6E6FA    /* Secondary accent */
--deep-black: #0A0A0A       /* Dark backgrounds */
--charcoal: #1A1A1A         /* Text */
--white: #FFFFFF            /* Light backgrounds */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Animations
- Fade-in on scroll
- Ken Burns effect
- Shimmer gold animation
- Floating elements
- Smooth transitions (500-1000ms)

---

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Google Gemini API key for AI consultant |

**Get your API key**: https://aistudio.google.com/app/apikey

---

## 📚 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Comprehensive deployment guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start for Vercel deployment
- **[ASSETS.md](./ASSETS.md)** - Image assets and usage guide

---

## 🌐 Live Demo

Once deployed, your site will be available at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Custom Domain**: Configure in Vercel dashboard

**Original AI Studio App**: https://ai.studio/apps/drive/1l9VCemPHyeKzfvWzFktEgvybnC5GB49q

---

## 🎯 Key Sections

1. **Hero** - Storytelling with Depth and Intent
2. **Services** - The Architecture of Brand Influence
3. **Portfolio** - Selected Works showcase
4. **AI Consultant** - Mavac Insight Engine
5. **Manifesto** - Brand philosophy statement
6. **Footer** - Contact and global studios

---

## 🔧 Customization

### Update Portfolio Items
Edit `components/WorkGallery.tsx`:
```typescript
const workItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Your Project',
    category: Category.FILMS,
    imageUrl: 'your-image-url',
    description: 'Your description'
  }
];
```

### Modify Color Scheme
Edit `index.html` CSS variables:
```css
:root {
  --luxury-gold: #D4AF37;
  --soft-lavender: #E6E6FA;
}
```

### Change AI Model
Edit `components/ConsultantAI.tsx`:
```typescript
const res = await ai.models.generateContent({
  model: 'gemini-3-flash-preview', // Change model here
  // ...
});
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### AI Consultant Not Working
- Verify `GEMINI_API_KEY` is set
- Check API key validity
- Review browser console for errors

### Images Not Loading
- Verify Unsplash URLs are accessible
- Check network tab in DevTools
- Ensure CDN is not blocked

---

## 📊 Performance

- ✅ **Lighthouse Score**: 90+ (Performance)
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.0s
- ✅ **Bundle Size**: ~488 KB (gzipped: ~122 KB)

---

## 🤝 Contributing

This is a private project. For issues or suggestions, please contact the development team.

---

## 📄 License

Private and Proprietary - Mavac Communication © 2025

---

## 🙏 Acknowledgments

- **Images**: Unsplash (free high-quality photography)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **AI**: Google Gemini AI
- **Hosting**: Vercel

---

## 📞 Support

For deployment assistance or technical questions:
- Review documentation files
- Check Vercel deployment logs
- Verify environment variables

---

<div align="center">
  <strong>Built with ❤️ for luxury brands that lead with purpose</strong>
  <br />
  <br />
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel" alt="Deployed on Vercel" />
  </a>
</div>
