import { PROFILE_DATA } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </p>
          <span className="hidden text-muted-foreground/40 sm:inline">•</span>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
