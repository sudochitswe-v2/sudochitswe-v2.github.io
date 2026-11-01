'use client';

import { getProfileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/themes/christmas/ui/button';
import { Mail, Download, Gift, Linkedin, Sparkles } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ui/scroll-reveal';

// Dynamically import the 3D Christmas Tree canvas with SSR disabled
const ChristmasThreeCanvas = dynamic(() => import('@/themes/christmas/ui/three-canvas'), {
  ssr: false,
  loading: () => (
    <div className="h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] animate-pulse rounded-full bg-[#165B33]/10 border-4 border-dashed border-[#D42426] flex items-center justify-center">
      <span className="font-christmas text-[#D42426] text-3xl font-bold tracking-wide">🎄 DECORATING NORTH POLE TREE... 🎄</span>
    </div>
  ),
});

export default function ChristmasHero() {
  const profile = getProfileData('christmas');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="relative w-full overflow-hidden py-12 sm:py-20 lg:py-28 border-b-2 border-[#165B33]">
      {/* Background snowflake watermark */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/4 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="text-[35rem] font-serif text-[#D42426]">❄️</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              {/* Workshop Merit Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#165B33] text-[#F8B229] font-bold text-xs uppercase tracking-widest rounded-full border border-[#F8B229] shadow-[2px_2px_0px_0px_#D42426]">
                  <span>🎄</span> {profile.roleBadge} <span>🎄</span>
                </span>
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase border border-[#165B33]/30 rounded-full px-2.5 py-1">
                  WORKSHOP #{profile.dossierNumber}
                </span>
              </div>

              {/* Architect Name */}
              <h1 className="font-christmas text-5xl font-extrabold uppercase tracking-wide text-[#D42426] dark:text-[#F8B229] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_15px_rgba(212,36,38,0.3)]">
                {profile.name}
              </h1>

              {/* Position Title Banner */}
              <div className="inline-block p-3 bg-card/90 rounded-xl border-2 border-[#165B33] shadow-[4px_4px_0px_0px_#D42426]">
                <h2 className="font-christmas text-2xl sm:text-3xl font-bold tracking-wider text-[#165B33] dark:text-[#52B788]">
                  ⭐ {profile.title} ⭐
                </h2>
              </div>

              {/* Architect Introduction */}
              <p className="max-w-[600px] text-foreground/90 font-medium md:text-lg border-l-4 border-[#D42426] pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-3">
                <Button asChild size="lg">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> WRITE TO SANTA
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> WORKSHOP BLUEPRINT
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    <Gift className="mr-2 h-5 w-5 text-[#D42426] dark:text-[#F8B229]" /> TOY FACTORY
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-3">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub Workshop">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="Elven Network (LinkedIn)">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me" title="Sleigh Radio (Mastodon)">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 3D Christmas Tree Interactive Showcase with Workshop Badge */}
          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] w-full">
              {/* Interactive 3D Emblem Helper Badge */}
              <div className="absolute top-0 right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#165B33]/90 text-[#F8B229] text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border border-[#F8B229] shadow-[0_0_10px_rgba(248,178,41,0.4)] pointer-events-none select-none">
                <span>🎄</span> 3D TREE • DRAG TO ROTATE
              </div>

              {/* 3D Christmas Tree Canvas (Centerpiece & Fully Visible) */}
              <div className="relative flex items-center justify-center pointer-events-auto">
                <ChristmasThreeCanvas />
              </div>

              {/* Workshop Pass (Shifted rightwards to avoid covering #projects action button) */}
              <div className="absolute -bottom-4 left-10 sm:bottom-2 sm:left-24 lg:left-32 z-20 p-2 bg-card border-2 border-[#165B33] shadow-[6px_6px_0px_0px_#D42426] rounded-2xl rotate-[2deg] hover:rotate-0 transition-transform duration-300 w-36 sm:w-44 select-none">
                <div className="bg-[#D42426] text-white text-center text-[9px] sm:text-[10px] font-bold py-0.5 uppercase tracking-wider rounded-lg border border-[#F8B229]">
                  🎄 WORKSHOP PASS 🎄
                </div>
                <div className="relative h-32 sm:h-40 w-full overflow-hidden rounded-xl border border-[#165B33] my-1.5 bg-black/10">
                  <Image
                    src={avatarUrl}
                    alt="Portrait of Santa's Lead Architect Chit Swe"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#165B33]/90 text-[#F8B229] text-center text-[8px] font-mono font-bold py-0.5 uppercase tracking-wider">
                    CERTIFIED MASTER ELF
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-christmas text-2xl text-center text-[#D42426] dark:text-[#F8B229] leading-tight pt-0.5">
                  {profile.name}
                  <span className="block text-[8px] font-mono text-muted-foreground mt-0.5">
                    #{profile.dossierNumber || 'NP-2026'}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
