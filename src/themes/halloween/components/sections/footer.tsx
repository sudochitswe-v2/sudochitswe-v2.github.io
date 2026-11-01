import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function HalloweenFooter() {
  const profile = getProfileData('halloween');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="stone-slab-texture w-full text-stone-300 border-t-2 border-[#443D36] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="text-2xl animate-pulse">🎃</span>
            <div>
              <p className="font-creepster text-lg tracking-wider text-orange-400 stone-engraved-text">
                {profile.name} • Portfolio
              </p>
              <p className="text-xs font-mono text-stone-400">
                Designed & Built with Next.js & Tailwind CSS • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="stone-btn p-2 rounded-xl text-stone-300 hover:text-orange-400"
              title="GitHub"
            >
              <SiGithub size={18} color="currentColor" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="stone-btn p-2 rounded-xl text-stone-300 hover:text-orange-400"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="stone-btn p-2 rounded-xl text-stone-300 hover:text-orange-400"
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
