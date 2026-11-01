import { ThemeToggle } from '@/components/theme-toggle';
import { PortfolioThemeSwitcher } from '@/components/portfolio-theme-switcher';
import { getProfileData } from '@/lib/data';

const navItems = [
  { href: '#about', label: 'WORKSHOP' },
  { href: '#skills', label: 'TOOLKIT' },
  { href: '#experiences', label: 'EXPEDITIONS' },
  { href: '#projects', label: 'TOY FACTORY' },
  { href: '#certificates', label: 'HONORS' },
  { href: '#education', label: 'ACADEMY' },
  { href: '#contact', label: 'POST OFFICE' },
];

export default function ChristmasHeader() {
  const profile = getProfileData('christmas');

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#165B33] bg-background/90 backdrop-blur-md shadow-[0_4px_20px_rgba(22,91,51,0.2)]">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 group">
          <span className="text-xl group-hover:rotate-12 transition-transform duration-200">🎄</span>
          <span className="font-christmas text-3xl font-bold tracking-wide text-[#D42426] dark:text-[#F8B229] group-hover:text-[#165B33] transition-colors">
            {profile.name}
          </span>
          <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 bg-[#165B33] text-[#F8B229] font-mono font-bold uppercase rounded-full border border-[#F8B229] ml-1">
            NORTH-POLE-2026
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-1 text-xs">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-bold uppercase tracking-wider px-2.5 py-1.5 text-foreground hover:text-[#D42426] hover:bg-[#D42426]/10 rounded-lg transition-colors border-b-2 border-transparent hover:border-[#D42426]"
                  >
                    ❄️ {item.label}
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
