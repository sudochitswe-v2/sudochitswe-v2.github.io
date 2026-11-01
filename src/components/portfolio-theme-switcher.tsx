'use client';

import React from 'react';
import { usePortfolioTheme } from '@/context/portfolio-theme-context';
import type { ThemeId } from '@/types/portfolio';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sparkles, Terminal, Square, Flame, Dices, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'modern',
    name: 'Modern 3D',
    tagline: 'Sleek & Interactive',
    icon: Sparkles,
  },
  {
    id: 'brutalism',
    name: 'Neo-Brutalism',
    tagline: 'Bold & High-Contrast',
    icon: Square,
  },
  {
    id: 'retro',
    name: 'Retro 90s',
    tagline: 'Cyberpunk & Vintage',
    icon: Terminal,
  },
  {
    id: 'soviet',
    name: 'Soviet (CCCP)',
    tagline: 'Constructivist & 3D Hammer/Sickle',
    icon: Flame,
  },
];

interface ThemeSwitcherProps {
  variant?: 'modern' | 'brutalism' | 'retro' | 'soviet';
  className?: string;
}

export function PortfolioThemeSwitcher({ variant = 'modern', className }: ThemeSwitcherProps) {
  const { theme, mode, setTheme, rollRandomTheme, setRandomMode } = usePortfolioTheme();

  const currentOption = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];
  const CurrentIcon = currentOption.icon;

  // Trigger button styles according to the theme variant
  let triggerClasses = '';
  if (variant === 'soviet') {
    triggerClasses =
      'bg-[#B81414] text-[#FFC82C] border-2 border-[#FFC82C] shadow-[3px_3px_0px_0px_#4A0000] font-headline uppercase text-xs font-bold px-3 py-1.5 flex items-center gap-2 hover:bg-[#FFC82C] hover:text-[#7A0000] hover:border-[#B81414] transition-all';
  } else if (variant === 'brutalism') {
    triggerClasses =
      'brutal-border brutal-shadow brutal-press font-mono uppercase text-xs font-bold px-3 py-2 bg-background flex items-center gap-2 hover:bg-accent-yellow hover:text-black transition-none';
  } else if (variant === 'retro') {
    triggerClasses =
      'retro-bevel-btn text-xs px-2.5 py-1.5 flex items-center gap-2 font-bold uppercase';
  } else {
    // modern default
    triggerClasses =
      'inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground shadow-sm';
  }

  // Dropdown content styles according to theme variant
  let contentClasses = '';
  if (variant === 'soviet') {
    contentClasses =
      'border-2 border-[#B81414] shadow-[6px_6px_0px_0px_#7A0000] rounded-none bg-card p-1.5 min-w-[240px] font-headline';
  } else if (variant === 'brutalism') {
    contentClasses =
      'brutal-border-3 brutal-shadow-lg rounded-none bg-background p-1.5 min-w-[210px] font-mono';
  } else if (variant === 'retro') {
    contentClasses =
      'retro-panel border-2 border-border-bevel bg-bg-panel p-1.5 min-w-[220px] text-star-white font-mono';
  } else {
    contentClasses = 'w-60 p-1.5 shadow-xl border border-border/60 bg-popover/95 backdrop-blur-lg';
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(triggerClasses, className)}
          aria-label="Switch portfolio theme"
          title="Switch Portfolio Theme"
        >
          {mode === 'random' ? (
            <Dices className="h-4 w-4 animate-spin-slow text-accent" />
          ) : (
            <CurrentIcon className="h-4 w-4" />
          )}
          <span className="truncate">
            {mode === 'random' ? `🎲 ${currentOption.name}` : currentOption.name}
          </span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className={contentClasses}>
        <DropdownMenuLabel
          className={cn(
            'text-xs font-semibold px-2 py-1.5 tracking-wider',
            variant === 'soviet' && 'text-[#B81414] dark:text-[#FFC82C] font-headline font-bold uppercase tracking-widest text-sm',
            variant === 'brutalism' && 'uppercase text-foreground font-bold',
            variant === 'retro' && 'text-neon-cyan uppercase font-headline tracking-widest text-sm',
            variant === 'modern' && 'text-muted-foreground'
          )}
        >
          {variant === 'soviet' ? '★ SELECT STATE THEME ★' : 'Portfolio Theme'}
        </DropdownMenuLabel>

        {/* Random Option */}
        <DropdownMenuItem
          onClick={setRandomMode}
          className={cn(
            'flex items-center justify-between gap-2 px-2.5 py-2 text-xs cursor-pointer rounded-sm',
            mode === 'random' &&
              (variant === 'soviet'
                ? 'bg-[#B81414] text-[#FFC82C] font-bold border border-[#FFC82C]'
                : variant === 'brutalism'
                ? 'bg-accent-yellow text-black font-bold'
                : variant === 'retro'
                ? 'bg-[#000080] text-neon-yellow font-bold border border-border-bevel'
                : 'bg-primary/10 text-primary font-semibold'),
            variant === 'soviet' && 'rounded-none hover:bg-[#B81414] hover:text-[#FFC82C] font-headline uppercase',
            variant === 'brutalism' && 'rounded-none hover:bg-accent-yellow hover:text-black uppercase',
            variant === 'retro' && 'hover:bg-[#101040] text-star-white font-mono'
          )}
        >
          <div className="flex items-center gap-2">
            <Dices className="h-4 w-4 text-neon-magenta" />
            <div className="flex flex-col text-left">
              <span className="font-medium">Surprise Me (Random)</span>
              <span className="text-[10px] opacity-70">Rolls a new theme</span>
            </div>
          </div>
          {mode === 'random' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>

        <DropdownMenuSeparator
          className={cn(
            'my-1',
            variant === 'soviet' && 'border-t-2 border-[#B81414]',
            variant === 'brutalism' && 'border-t-2 border-foreground',
            variant === 'retro' && 'border-t border-border-bevel'
          )}
        />

        {/* Individual Themes */}
        {THEME_OPTIONS.map((item) => {
          const Icon = item.icon;
          const isSelected = theme === item.id && mode === 'manual';

          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={cn(
                'flex items-center justify-between gap-2 px-2.5 py-2 text-xs cursor-pointer rounded-sm my-0.5',
                isSelected &&
                  (variant === 'soviet'
                    ? 'bg-[#B81414] text-[#FFC82C] font-bold border border-[#FFC82C]'
                    : variant === 'brutalism'
                    ? 'bg-foreground text-background font-bold'
                    : variant === 'retro'
                    ? 'bg-[#000080] text-neon-cyan font-bold border border-border-bevel'
                    : 'bg-accent text-accent-foreground font-semibold'),
                variant === 'soviet' && 'rounded-none hover:bg-[#B81414] hover:text-[#FFC82C] font-headline uppercase',
                variant === 'brutalism' && 'rounded-none hover:bg-accent-yellow hover:text-black uppercase',
                variant === 'retro' && 'hover:bg-[#101040] text-star-white font-mono'
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <div className="flex flex-col text-left">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-[10px] opacity-70">{item.tagline}</span>
                </div>
              </div>
              {isSelected && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
