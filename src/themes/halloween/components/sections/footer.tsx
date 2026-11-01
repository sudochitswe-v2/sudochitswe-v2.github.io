import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function HalloweenFooter() {
  const profile = getProfileData('halloween');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#180B28] text-[#FF6B00] border-t-2 border-[#8A2BE2] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-2xl animate-pulse">🎃</span>
            <div>
              <p className="font-creepster text-lg tracking-wider text-[#FF6B00]">
                {profile.name} • CODE NECROMANCER SANCTUM
              </p>
              <p className="text-[11px] font-mono text-[#FF6B00]/70">
                CRAFTED IN THE WITCHING HOUR • HAPPY HALLOWEEN • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#8A2BE2] bg-[#8A2BE2]/20 hover:bg-[#FF6B00] hover:text-black transition-colors"
              title="GitHub"
            >
              <SiGithub size={18} color="currentColor" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#8A2BE2] bg-[#8A2BE2]/20 hover:bg-[#FF6B00] hover:text-black transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="p-2 rounded-lg border border-[#8A2BE2] bg-[#8A2BE2]/20 hover:bg-[#FF6B00] hover:text-black transition-colors"
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
