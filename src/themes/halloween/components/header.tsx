import { ThemeToggle } from '@/components/theme-toggle';
import { PortfolioThemeSwitcher } from '@/components/portfolio-theme-switcher';
import { getProfileData } from '@/lib/data';

const navItems = [
  { href: '#about', label: 'GRIMOIRE' },
  { href: '#skills', label: 'ALCHEMY' },
  { href: '#experiences', label: 'CHRONICLES' },
  { href: '#projects', label: 'SPELLCRAFT' },
  { href: '#certificates', label: 'HONORS' },
  { href: '#education', label: 'ACADEMY' },
  { href: '#contact', label: 'SEANCE' },
];

export default function HalloweenHeader() {
  const profile = getProfileData('halloween');

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#8A2BE2] bg-background/90 backdrop-blur-md shadow-[0_4px_20px_rgba(138,43,226,0.2)]">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 group">
          <span className="text-xl group-hover:animate-bounce transition-transform duration-200">🎃</span>
          <span className="font-creepster text-2xl tracking-wider text-[#FF6B00] group-hover:text-[#39FF14] transition-colors">
            {profile.name}
          </span>
          <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-[#8A2BE2] text-[#FF6B00] font-mono font-bold uppercase rounded border border-[#FF6B00] ml-1">
            SPOOKY-2026
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-1 text-xs">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-bold uppercase tracking-wider px-2.5 py-1.5 text-foreground hover:text-[#FF6B00] hover:bg-[#8A2BE2]/20 rounded transition-colors border-b-2 border-transparent hover:border-[#FF6B00]"
                  >
                    🕸️ {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <PortfolioThemeSwitcher variant="halloween" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
