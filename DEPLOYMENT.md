# Mavac Communication - Vercel Deployment Guide

<div align="center">
<img width="1200" height="475" alt="Mavac Communication Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 🌟 Project Overview

**Mavac Communication** is a high-end corporate communication and CSR storytelling website designed for luxury brand strategy and purpose-driven narratives. Built with React, TypeScript, and Vite, featuring:

- ✨ **Luxury Design** - Gold accents, sophisticated animations, and premium aesthetics
- 🎬 **Cinematic Hero** - Full-screen hero with Ken Burns effect
- 🖼️ **Portfolio Gallery** - Filterable work showcase with elegant hover effects
- 🤖 **AI Consultant** - Powered by Google Gemini AI for brand strategy insights
- 📱 **Responsive** - Fully optimized for all devices
- ⚡ **Fast** - Built with Vite for optimal performance

---

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. **Add Environment Variable**:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

7. **Click "Deploy"** 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

---

## 🔧 Local Development

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Asmodeus-21/Mavac-Communication.git
   cd Mavac-Communication
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.local.example` to `.env.local`
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```
   - Get your API key from: https://aistudio.google.com/app/apikey

4. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
Mavac-Communication/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Cinematic hero section
│   ├── Services.tsx     # Services showcase
│   ├── WorkGallery.tsx  # Portfolio gallery
│   ├── ConsultantAI.tsx # AI-powered consultant
│   └── Footer.tsx       # Footer with contact
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment config
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

---

## 🎨 Features

### 1. **Luxury Brand Aesthetics**
- Premium gold (#D4AF37) and lavender (#E6E6FA) color scheme
- Custom scrollbar with gold accents
- Sophisticated animations and transitions
- Inter font family for modern typography

### 2. **Interactive Portfolio Gallery**
- Filterable by category (All, Films, CSR, Publishing, Branded)
- Grayscale to color hover effects
- Gold frame overlays on hover
- Smooth transitions and animations

### 3. **AI-Powered Brand Consultant**
- Powered by Google Gemini AI
- Generates CSR narratives and strategic initiatives
- Sophisticated editorial-style responses
- Real-time brand strategy insights

### 4. **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Adaptive layouts

### 5. **Performance Optimized**
- Built with Vite for fast builds
- Lazy loading and code splitting
- Optimized images from Unsplash
- Minimal bundle size

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI consultant feature | Yes |

**How to get your Gemini API Key:**
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env.local` file

---

## 🌐 Deployment Checklist

Before deploying to Vercel, ensure:

- ✅ All dependencies are installed (`npm install`)
- ✅ Build completes successfully (`npm run build`)
- ✅ Environment variables are configured in Vercel dashboard
- ✅ `.gitignore` includes `.env.local` (already configured)
- ✅ Repository is pushed to GitHub
- ✅ `vercel.json` is present (already included)

---

## 🛠️ Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **AI**: Google Gemini AI (@google/genai)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Inter (Google Fonts)

---

## 📝 Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🎯 Key Pages & Sections

1. **Hero Section** - Full-screen cinematic introduction with Ken Burns effect
2. **Services** - Showcase of expertise areas
3. **Portfolio Gallery** - Filterable work showcase with 6 sample projects
4. **AI Consultant** - Interactive brand strategy tool
5. **Manifesto** - Philosophical statement with gold accents
6. **Footer** - Contact information and social links

---

## 🔗 Live Demo

Once deployed, your site will be available at:
- **Production**: `https://your-project-name.vercel.app`
- **Custom Domain**: Configure in Vercel dashboard

---

## 📞 Support & Contact

For issues or questions:
- View the app in AI Studio: https://ai.studio/apps/drive/1l9VCemPHyeKzfvWzFktEgvybnC5GB49q
- Check Vercel deployment logs for errors
- Ensure environment variables are properly set

---

## 📄 License

This project is private and proprietary.

---

## 🎉 Deployment Success

After successful deployment:
1. ✅ Site is live and accessible
2. ✅ All images load correctly (via Unsplash CDN)
3. ✅ AI consultant works (with valid API key)
4. ✅ Animations and interactions function smoothly
5. ✅ Responsive design works on all devices

**Enjoy your luxury brand storytelling platform! 🌟**
