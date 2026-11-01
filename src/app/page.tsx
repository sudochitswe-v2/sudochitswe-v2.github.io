'use client';

import { usePortfolioTheme } from '@/context/portfolio-theme-context';
import { THEME_COMPONENTS } from '@/themes';

export default function Home() {
  const { theme } = usePortfolioTheme();
  const ThemeComponent = THEME_COMPONENTS[theme] || THEME_COMPONENTS.modern;

  return <ThemeComponent />;
}
