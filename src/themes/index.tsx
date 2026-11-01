import React from 'react';
import type { ThemeId, ThemeMeta } from '@/types/portfolio';
import dynamic from 'next/dynamic';

// Dynamic imports with ssr false to avoid any hydration differences across themes
const ModernTheme = dynamic(() => import('./modern'), {
  ssr: false,
  loading: () => <ThemeLoadingFallback theme="modern" />,
});

const BrutalismTheme = dynamic(() => import('./brutalism'), {
  ssr: false,
  loading: () => <ThemeLoadingFallback theme="brutalism" />,
});

const RetroTheme = dynamic(() => import('./retro'), {
  ssr: false,
  loading: () => <ThemeLoadingFallback theme="retro" />,
});

export const THEMES: ThemeMeta[] = [
  {
    id: 'modern',
    name: 'Modern 3D',
    tagline: 'Sleek & Interactive',
    description: 'Clean glassmorphism, 3D interactive knot wireframe, smooth scrolling, and modern typography.',
    icon: 'Sparkles',
    accentColor: '#8F00FF',
  },
  {
    id: 'brutalism',
    name: 'Neo-Brutalism',
    tagline: 'Bold & High-Contrast',
    description: 'Stark geometric shapes, punchy drop-shadows, monospace typography, and brutalist wireframe cage.',
    icon: 'Square',
    accentColor: '#FFE600',
  },
  {
    id: 'retro',
    name: 'Retro 90s',
    tagline: 'Cyberpunk & Vintage',
    description: 'CRT scanlines, Windows 95 bevel buttons, rainbow dividers, neon glow, and terminal aesthetics.',
    icon: 'Terminal',
    accentColor: '#00FFFF',
  },
];

export const THEME_COMPONENTS: Record<ThemeId, React.ComponentType> = {
  modern: ModernTheme,
  brutalism: BrutalismTheme,
  retro: RetroTheme,
};

function ThemeLoadingFallback({ theme }: { theme: ThemeId }) {
  if (theme === 'retro') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#040411] text-[#00FFFF] font-mono text-xl animate-pulse">
        [ SYSTEM BOOTING... ]
      </div>
    );
  }
  if (theme === 'brutalism') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFDF0] text-black font-mono text-xl font-bold uppercase tracking-widest border-8 border-black m-4">
        INITIALIZING BRUTALISM_
      </div>
    );
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
