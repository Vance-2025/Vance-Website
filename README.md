# Vance Website

A professional networking service portfolio website built with Next.js 14+ and TypeScript.

## Features

- 🚀 Next.js 14+ with App Router
- 🎨 Dark-themed luxury design
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized
- ♿ Accessibility compliant
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Home page
├── globals.css         # Global styles and Tailwind
├── components/
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── animations/     # Animation components
├── lib/
│   └── utils.ts        # Utility functions
└── public/
    ├── images/         # Static images
    └── icons/          # Icons and assets
```

## Design System

### Colors
- Background: #000000 (black)
- Primary: #00D9FF (cyan)
- Secondary: #00FF88 (green)
- Accent Blue: #1a1f3a (navy)
- Text: #FFFFFF (white)
- Text Secondary: #A0A0A0 (gray)

### Typography
- Primary Font: Inter
- Display Font: Poppins
- Responsive font scales

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Performance

- Lighthouse score target: 90+
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal bundle size

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved.

