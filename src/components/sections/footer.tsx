import { PROFILE_DATA } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="w-full brutal-border-t-4 border-foreground bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 w-full justify-between">
          <p className="text-sm font-mono font-bold uppercase text-foreground">
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </p>
          <a href="#" className="text-sm font-mono font-bold uppercase bg-accent-yellow text-black px-4 py-2 brutal-border brutal-shadow-sm brutal-hover transition-none">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
