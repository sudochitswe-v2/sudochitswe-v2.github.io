'use client';

import { getProfileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/themes/halloween/ui/button';
import { Mail, Download, Sparkles, Linkedin, Ghost } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ui/scroll-reveal';

// Dynamically import the 3D Jack-o'-Lantern canvas with SSR disabled
const HalloweenThreeCanvas = dynamic(() => import('@/themes/halloween/ui/three-canvas'), {
  ssr: false,
  loading: () => (
    <div className="h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] animate-pulse rounded-2xl bg-[#1C1916] border-2 border-dashed border-orange-500/40 flex items-center justify-center">
      <span className="font-creepster text-orange-400 text-2xl tracking-wider">🎃 SUMMONING 3D MONUMENT... 🎃</span>
    </div>
  ),
});

export default function HalloweenHero() {
  const profile = getProfileData('halloween');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="stone-bg-noise relative w-full overflow-hidden py-12 sm:py-20 lg:py-28 border-b-2 border-[#443D36]">
      {/* Background eerie watermark */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/4 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="text-[35rem] font-creepster text-orange-500">🎃</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              {/* Necromancer Name */}
              <h1 className="font-creepster text-5xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-6xl md:text-7xl lg:text-8xl stone-engraved-text drop-shadow-[0_4px_20px_rgba(255,107,0,0.35)]">
                {profile.name}
              </h1>

              {/* Title Banner */}
              <div className="inline-block p-3 rounded-xl bg-[#1C1916]/90 border border-[#443D36] shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  🕸️ {profile.title}
                </h2>
              </div>

              {/* Introduction */}
              <p className="max-w-[600px] text-stone-300 font-medium md:text-lg border-l-4 border-orange-500 pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons: Fused clean action text + stone aesthetic */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-3">
                <Button asChild size="lg" className="stone-btn-ember">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> Get In Touch
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="stone-btn">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> Download CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="stone-btn">
                  <a href="#projects">
                    <Sparkles className="mr-2 h-5 w-5 text-green-400" /> View Projects
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-3">
                <Button asChild variant="outline" size="icon" className="stone-btn h-10 w-10 rounded-xl">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="stone-btn h-10 w-10 rounded-xl">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="stone-btn h-10 w-10 rounded-xl">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me" title="Mastodon">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 3D Jack-o'-Lantern & Stone Monument with Cameo Medallion */}
          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] w-full">
              {/* Interactive 3D Canvas Centerpiece */}
              <div className="relative flex items-center justify-center pointer-events-auto">
                <HalloweenThreeCanvas />
              </div>

              {/* Carved Stone Cameo Profile Medallion */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 z-20 group">
                <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-full border-4 border-[#524940] p-1.5 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),0_12px_30px_rgba(0,0,0,0.9)] bg-[#241F1A] transition-all duration-500 group-hover:scale-105 group-hover:border-orange-500 group-hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] overflow-hidden">
                  <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-[#38312B]">
                    <Image
                      src={avatarUrl}
                      alt="Portrait of Necromancer Chit Swe"
                      fill
                      className="object-cover contrast-110 saturate-110"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
