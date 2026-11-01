import { getProfileData } from '@/lib/data';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function SovietFooter() {
  const profile = getProfileData('soviet');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#B81414] text-[#FFC82C] border-t-4 border-[#FFC82C] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-xl">★</span>
            <div>
              <p className="font-headline font-bold text-sm tracking-wider uppercase">
                {profile.name} • STATE RECORD ARCHIVE
              </p>
              <p className="text-[11px] font-mono text-[#FFC82C]/80">
                PRODUCED FOR THE BENEFIT OF THE DIGITAL COLLECTIVE • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#FFC82C] hover:bg-[#FFC82C] hover:text-[#7A0000] transition-colors"
              title="GitHub"
            >
              <SiGithub size={18} color="currentColor" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#FFC82C] hover:bg-[#FFC82C] hover:text-[#7A0000] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socialLinks.mastodon}
              target="_blank"
              rel="me"
              className="p-2 border border-[#FFC82C] hover:bg-[#FFC82C] hover:text-[#7A0000] transition-colors"
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
