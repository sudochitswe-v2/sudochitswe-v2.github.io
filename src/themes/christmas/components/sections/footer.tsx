import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function ChristmasFooter() {
  const profile = getProfileData('christmas');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-emerald-500/30 bg-[#041208] py-8 text-emerald-200">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <p className="text-xs sm:text-sm font-mono text-emerald-200/80">
            &copy; {currentYear} {profile.name} • Season&apos;s Greetings 🎄
          </p>
          <span className="hidden text-emerald-500/40 sm:inline">•</span>
          <span className="text-xs text-yellow-400 font-christmas text-xl">
            Designed &amp; Built with Next.js &amp; Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="Mastodon"
            >
              <SiMastodon size={16} />
            </a>
          </div>
          <span className="text-emerald-500/40">•</span>
          <a href="#" className="text-xs font-mono text-emerald-200 hover:text-yellow-400 transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
