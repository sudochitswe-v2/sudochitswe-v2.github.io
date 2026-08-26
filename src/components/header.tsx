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
    <header className="sticky top-0 z-50 w-full brutal-border-4 border-l-0 border-r-0 border-t-0 bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 transition-none hover:translate-x-[2px] hover:translate-y-[2px]">
          <Code2 className="h-6 w-6 text-foreground" />
          <span className="font-mono text-xl font-bold uppercase tracking-tight">Chit Swe</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-mono uppercase tracking-widest text-xs font-bold text-foreground transition-none hover:bg-accent-yellow hover:text-black px-3 py-2 brutal-border"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Nav could be added here with a Sheet component */}
      </div>
    </header>
  );
}
