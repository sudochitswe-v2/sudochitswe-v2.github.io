import { PROFILE_DATA } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-border-bevel bg-bg-panel py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 mx-auto">
          <p className="text-sm font-bold text-neon-magenta uppercase">
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. BEST VIEWED WITH NETSCAPE NAVIGATOR.
          </p>
          <span className="hidden text-dim-text sm:inline">||</span>
          <a href="#" className="retro-bevel-btn px-2 py-1 text-xs">
            [ BACK TO TOP ^ ]
          </a>
        </div>
      </div>
    </footer>
  );
}
