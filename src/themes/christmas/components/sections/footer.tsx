import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function ChristmasFooter() {
  const profile = getProfileData('christmas');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04120A] text-emerald-200 border-t border-emerald-500/30 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="text-2xl animate-spin-slow">⭐</span>
            <div>
              <p className="font-christmas text-2xl tracking-wide text-yellow-400">
                {profile.name} • Portfolio
              </p>
              <p className="text-xs font-mono text-emerald-300/80">
                Designed & Built with Next.js & Tailwind CSS • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="GitHub"
            >
              <SiGithub size={18} color="currentColor" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="p-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              title="Mastodon"
            >
              <SiMastodon size={18} color="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
