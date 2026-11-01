import { ThemeToggle } from '@/components/theme-toggle';
import { PortfolioThemeSwitcher } from '@/components/portfolio-theme-switcher';
import { Gift } from 'lucide-react';
import { getProfileData } from '@/lib/data';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experiences', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Honors' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function ChristmasHeader() {
  const profile = getProfileData('christmas');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/30 bg-[#061A0E]/85 backdrop-blur-md shadow-[0_4px_25px_rgba(22,91,51,0.2)]">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-950/70 border border-red-500/40 text-yellow-400 group-hover:scale-110 group-hover:border-yellow-400 transition-all shadow-[0_0_12px_rgba(212,36,38,0.3)]">
            <Gift className="h-5 w-5 animate-bounce text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-christmas text-3xl font-bold tracking-wide text-red-500 dark:text-yellow-400 group-hover:text-emerald-400 transition-colors drop-shadow-[0_0_8px_rgba(212,36,38,0.3)]">
                {profile.name}
              </span>
              <span className="text-xs">🎄</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-300/80 -mt-1 hidden sm:inline">
              Full Stack Architect
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-1 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="px-3 py-1.5 rounded-lg text-emerald-100 hover:text-yellow-400 hover:bg-emerald-950/50 transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <PortfolioThemeSwitcher variant="christmas" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
