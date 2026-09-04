import { Code2 } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border-bevel bg-bg-panel/90 backdrop-blur">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 hover:opacity-80">
          <span className="font-headline text-2xl font-bold tracking-tight text-neon-cyan retro-glow">
            [ CHIT_SWE ]<span className="animate-blink">_</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-4 text-sm font-bold">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="retro-bevel-btn px-2 py-1 text-xs"
                  >
                    [{item.label.toUpperCase()}]
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
