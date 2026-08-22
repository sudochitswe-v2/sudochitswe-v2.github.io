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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold tracking-tight">Chit Swe</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-medium text-muted-foreground transition-colors hover:text-primary"
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
