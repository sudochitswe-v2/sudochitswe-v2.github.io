import { PROFILE_DATA } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
