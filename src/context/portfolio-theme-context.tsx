'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ThemeId } from '@/types/portfolio';

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_MODE_STORAGE_KEY = 'portfolio-theme-mode';
export const AVAILABLE_THEMES: ThemeId[] = ['modern', 'brutalism', 'retro', 'soviet'];

interface PortfolioThemeContextType {
  theme: ThemeId;
  mode: 'random' | 'manual';
  setTheme: (theme: ThemeId) => void;
  setRandomMode: () => void;
  rollRandomTheme: () => void;
  isMounted: boolean;
}

const PortfolioThemeContext = createContext<PortfolioThemeContextType | undefined>(undefined);

function getRandomTheme(exclude?: ThemeId): ThemeId {
  const options = exclude ? AVAILABLE_THEMES.filter((t) => t !== exclude) : AVAILABLE_THEMES;
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

export function PortfolioThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with 'modern' for SSR consistency, will hydrate immediately on client mount
  const [theme, setThemeState] = useState<ThemeId>('modern');
  const [mode, setMode] = useState<'random' | 'manual'>('random');
  const [isMounted, setIsMounted] = useState(false);

  // Apply theme attribute to html tag
  const applyThemeToDOM = useCallback((themeId: ThemeId) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-portfolio-theme', themeId);
    }
  }, []);

  // Initialize theme on client mount
  useEffect(() => {
    setIsMounted(true);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlParam = urlParams.get('theme');

      if (urlParam && AVAILABLE_THEMES.includes(urlParam as ThemeId)) {
        const selected = urlParam as ThemeId;
        setThemeState(selected);
        setMode('manual');
        applyThemeToDOM(selected);
        return;
      }

      if (urlParam === 'random') {
        const picked = getRandomTheme();
        setThemeState(picked);
        setMode('random');
        applyThemeToDOM(picked);
        return;
      }

      const savedMode = localStorage.getItem(THEME_MODE_STORAGE_KEY) as 'random' | 'manual' | null;
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;

      if (savedMode === 'manual' && savedTheme && AVAILABLE_THEMES.includes(savedTheme)) {
        setThemeState(savedTheme);
        setMode('manual');
        applyThemeToDOM(savedTheme);
      } else {
        // Default behavior: random selection!
        const randomTheme = getRandomTheme();
        setThemeState(randomTheme);
        setMode('random');
        applyThemeToDOM(randomTheme);
        localStorage.setItem(THEME_MODE_STORAGE_KEY, 'random');
      }
    } catch {
      // Fallback
      const fallback = getRandomTheme();
      setThemeState(fallback);
      applyThemeToDOM(fallback);
    }
  }, [applyThemeToDOM]);

  const setTheme = useCallback((newTheme: ThemeId) => {
    setThemeState(newTheme);
    setMode('manual');
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      localStorage.setItem(THEME_MODE_STORAGE_KEY, 'manual');
    } catch {
      // Ignore localStorage write errors
    }
  }, [applyThemeToDOM]);

  const rollRandomTheme = useCallback(() => {
    const nextTheme = getRandomTheme(theme);
    setThemeState(nextTheme);
    setMode('random');
    applyThemeToDOM(nextTheme);
    try {
      localStorage.setItem(THEME_MODE_STORAGE_KEY, 'random');
    } catch {
      // Ignore
    }
  }, [theme, applyThemeToDOM]);

  const setRandomMode = useCallback(() => {
    rollRandomTheme();
  }, [rollRandomTheme]);

  return (
    <PortfolioThemeContext.Provider
      value={{
        theme,
        mode,
        setTheme,
        setRandomMode,
        rollRandomTheme,
        isMounted,
      }}
    >
      {children}
    </PortfolioThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const context = useContext(PortfolioThemeContext);
  if (!context) {
    throw new Error('usePortfolioTheme must be used within a PortfolioThemeProvider');
  }
  return context;
}
