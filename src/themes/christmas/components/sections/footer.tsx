import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function ChristmasFooter() {
  const profile = getProfileData('christmas');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#165B33] text-white border-t-2 border-[#F8B229] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-2xl animate-spin-slow">⭐</span>
            <div>
              <p className="font-christmas text-2xl tracking-wide text-[#F8B229]">
                {profile.name} • NORTH POLE WORKSHOP
              </p>
              <p className="text-[11px] font-mono text-white/80">
                PROUDLY ARCHITECTED AT THE NORTH POLE • MERRY CHRISTMAS • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#F8B229] bg-[#D42426] hover:bg-[#F8B229] hover:text-[#165B33] transition-colors"
              title="GitHub"
            >
              <SiGithub size={18} color="currentColor" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#F8B229] bg-[#D42426] hover:bg-[#F8B229] hover:text-[#165B33] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="p-2 rounded-full border border-[#F8B229] bg-[#D42426] hover:bg-[#F8B229] hover:text-[#165B33] transition-colors"
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
