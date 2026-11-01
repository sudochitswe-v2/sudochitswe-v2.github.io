import { ThemeToggle } from '@/components/theme-toggle';
import { PortfolioThemeSwitcher } from '@/components/portfolio-theme-switcher';
import { Ghost } from 'lucide-react';
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

export default function HalloweenHeader() {
  const profile = getProfileData('halloween');

  return (
    <header className="stone-slab-texture sticky top-0 z-50 w-full border-b-2 border-[#443D36] shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#26211C] border-2 border-[#4E463E] text-orange-400 group-hover:scale-110 group-hover:border-orange-500 transition-all shadow-[inset_1px_1px_0px_rgba(255,255,255,0.15),0_0_12px_rgba(255,107,0,0.3)]">
            <Ghost className="h-5 w-5 animate-pulse text-orange-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-creepster text-2xl tracking-wider text-orange-400 group-hover:text-green-400 transition-colors stone-engraved-text drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]">
                {profile.name}
              </span>
              <span className="text-xs text-orange-500">🎃</span>
            </div>
            <span className="text-[10px] font-mono text-stone-400 -mt-1 hidden sm:inline uppercase tracking-widest">
              Full Stack Engineer & Necromancer
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
                    className="px-3 py-1.5 rounded-lg text-stone-300 hover:text-orange-400 hover:bg-[#2A241F] transition-all text-xs font-mono font-semibold uppercase tracking-wider border border-transparent hover:border-[#524940]"
                  >
                    {item.label}
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
