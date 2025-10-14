import type { Metadata } from 'next';
import './globals.css';

// Satoshi font configuration
const satoshiFont = {
  regular: 'Satoshi-Regular',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  medium: 'Satoshi-Medium',
  bold: 'Satoshi-Bold',
  black: 'Satoshi-Black',
  variable: 'Satoshi-Variable',
};

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Vance - World's First AI Superconnector",
    template: '%s | Vance',
  },
  description: 'I can connect you with the right people who can change the trajectory of your life.',
  keywords: [
    'professional networking',
    'business connections',
    'career development',
    'networking services',
    'professional relationships',
    'industry connections',
    'executive networking',
    'business networking',
  ],
  authors: [{ name: 'Vance Team' }],
  creator: 'Vance',
  publisher: 'Vance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vance-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vance-website.vercel.app',
    title: "Vance - World's First AI Superconnector",
    description: 'I can connect you with the right people who can change the trajectory of your life.',
    siteName: 'Vance',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vance - Professional Networking Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vance - World's First AI Superconnector",
    description: 'I can connect you with the right people who can change the trajectory of your life.',
    images: ['/images/og-image.jpg'],
    creator: '@vance_networking',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="font-sans">
      <head>
        {/* Satoshi Font */}
        <link rel="stylesheet" href="/fonts/satoshi.css" />
        
        {/* Optima Nova LT Font */}
        <link rel="stylesheet" href="/fonts/optima/optima-nova-lt.css" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Edu NSW ACT Cursive Font */}
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap" rel="stylesheet" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="https://res.cloudinary.com/doyhawzj1/image/upload/w_32,h_32,c_fill,r_max/v1760044455/vanceintro_v8cq9a.png" sizes="any" />
        <link rel="icon" href="https://res.cloudinary.com/doyhawzj1/image/upload/w_32,h_32,c_fill,r_max/v1760044455/vanceintro_v8cq9a.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/doyhawzj1/image/upload/w_180,h_180,c_fill,r_max/v1760044455/vanceintro_v8cq9a.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="application-name" content="Vance" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vance" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured data for better search engine understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vance',
              description: 'Professional networking services that connect ambitious professionals with industry leaders',
              url: 'https://vance-website.vercel.app',
              logo: 'https://vance-website.vercel.app/images/logo.png',
              sameAs: [
                'https://linkedin.com/company/vance-networking',
                'https://twitter.com/vance_networking',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-0123',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-text antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-background px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content" className="relative">
          {children}
        </div>
        
        {/* Global loading indicator (can be customized later) */}
        <div id="global-loading" className="hidden" aria-hidden="true">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
        
        {/* Error boundary fallback (can be customized later) */}
        <div id="error-boundary" className="hidden" aria-hidden="true">
          <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-text mb-4">Something went wrong</h1>
              <p className="text-text-secondary mb-6">Please refresh the page to try again.</p>
              <a
                href="/"
                className="btn-primary inline-block"
              >
                Refresh Page
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

