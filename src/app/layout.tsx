import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { PortfolioThemeProvider } from '@/context/portfolio-theme-context';
import { PROFILE_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: 'Chit Swe | Full Stack Developer',
    template: '%s | Chit Swe',
  },
  description: 'Portfolio of Chit Swe, a Full Stack Developer specialized in C#, .NET Core, Flutter, and React.js. Explore my projects, work experience, and technical skills.',
  keywords: [
    'Chit Swe',
    'sudochitswe',
    'sudochitswe-v2',
    'Full Stack Developer',
    'Software Engineer',
    '.NET Core Developer',
    'Flutter Developer',
    'React Developer',
    'Myanmar Software Engineer',
    'Chit Swe Portfolio'
  ],
  authors: [{ name: 'Chit Swe', url: 'https://github.com/sudochitswe-v2' }],
  creator: 'Chit Swe',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sudochitswe-v2.github.io/portfolio'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'profile',
    firstName: 'Chit',
    lastName: 'Swe',
    username: 'sudochitswe',
    title: 'Chit Swe | Full Stack Developer',
    description: 'Portfolio of Chit Swe, a Full Stack Developer specialized in C#, .NET Core, Flutter, and React.js.',
    url: '/',
    siteName: 'Chit Swe Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chit Swe | Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chit Swe | Full Stack Developer',
    description: 'Portfolio of Chit Swe, a Full Stack Developer specialized in C#, .NET Core, Flutter, and React.js.',
    images: ['/images/og-image.png'],
    creator: '@sudochitswe',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE_DATA.name,
    jobTitle: PROFILE_DATA.title,
    description: PROFILE_DATA.introduction,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sudochitswe-v2.github.io/portfolio',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sudochitswe-v2.github.io/portfolio'}/images/profile.png`,
    sameAs: [
      PROFILE_DATA.socialLinks.linkedin,
      PROFILE_DATA.socialLinks.github,
      PROFILE_DATA.socialLinks.mastodon,
    ].filter(Boolean),
    knowsAbout: [
      'C#',
      '.NET Core',
      'Flutter',
      'Dart',
      'React.js',
      'JavaScript',
      'Database Management Systems',
      'Software Engineering',
      'Web Development'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Apex Integra Co.,Ltd.',
    }
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Creepster&family=Inter:wght@400;500;700&family=Mountains+of+Christmas:wght@400;700&family=Russo+One&family=Share+Tech+Mono&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var search = window.location.search;
                  var match = search.match(/[?&]theme=([^&]+)/);
                  var valid = ['modern', 'brutalism', 'retro', 'soviet', 'halloween', 'christmas'];
                  var theme = null;
                  if (match && valid.indexOf(match[1]) !== -1) {
                    theme = match[1];
                  } else {
                    var savedMode = localStorage.getItem('portfolio-theme-mode');
                    var savedTheme = localStorage.getItem('portfolio-theme');
                    if (savedMode === 'manual' && savedTheme && valid.indexOf(savedTheme) !== -1) {
                      theme = savedTheme;
                    } else {
                      theme = valid[Math.floor(Math.random() * valid.length)];
                    }
                  }
                  if (theme) {
                    document.documentElement.setAttribute('data-portfolio-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <PortfolioThemeProvider>
            {children}
            <Toaster />
          </PortfolioThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
