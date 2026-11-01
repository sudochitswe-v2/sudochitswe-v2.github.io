import { ThemeToggle } from '@/components/theme-toggle';
import { PortfolioThemeSwitcher } from '@/components/portfolio-theme-switcher';
import { getProfileData } from '@/lib/data';

const navItems = [
  { href: '#about', label: 'DOSSIER' },
  { href: '#skills', label: 'ARSENAL' },
  { href: '#experiences', label: 'RECORD' },
  { href: '#projects', label: 'PLAN' },
  { href: '#certificates', label: 'HONORS' },
  { href: '#education', label: 'ACADEMY' },
  { href: '#contact', label: 'DISPATCH' },
];

export default function SovietHeader() {
  const profile = getProfileData('soviet');

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-[#B81414] bg-background/95 backdrop-blur shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 group">
          <span className="text-xl text-[#B81414] group-hover:scale-125 transition-transform duration-200">★</span>
          <span className="font-headline text-lg sm:text-xl font-bold uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C]">
            {profile.name}
          </span>
          <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-[#B81414] text-[#FFC82C] font-mono font-bold uppercase ml-1">
            CCCP-2026
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-1 text-xs">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-headline font-bold uppercase tracking-wider px-2.5 py-1.5 text-foreground hover:bg-[#B81414] hover:text-[#FFC82C] transition-colors border-b-2 border-transparent hover:border-[#FFC82C]"
                  >
                    ★ {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <PortfolioThemeSwitcher variant="soviet" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
