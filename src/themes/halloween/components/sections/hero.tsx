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
    <div className="h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] animate-pulse rounded-full bg-[#8A2BE2]/10 border-4 border-dashed border-[#FF6B00] flex items-center justify-center">
      <span className="font-creepster text-[#FF6B00] text-2xl tracking-wider">🎃 SUMMONING JACK-O&apos;-LANTERN... 🎃</span>
    </div>
  ),
});

export default function HalloweenHero() {
  const profile = getProfileData('halloween');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="relative w-full overflow-hidden py-12 sm:py-20 lg:py-28 border-b-2 border-[#8A2BE2]">
      {/* Background eerie watermark */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/4 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="text-[35rem] font-creepster text-[#FF6B00]">🎃</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              {/* Coven Merit Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] font-bold text-xs uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
                  <span>🎃</span> {profile.roleBadge} <span>🎃</span>
                </span>
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase border border-[#8A2BE2]/40 rounded px-2 py-1">
                  SPELLBOOK #{profile.dossierNumber}
                </span>
              </div>

              {/* Necromancer Name */}
              <h1 className="font-creepster text-5xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_15px_rgba(255,107,0,0.4)]">
                {profile.name}
              </h1>

              {/* Position Title Banner */}
              <div className="inline-block p-3 bg-card/90 rounded-lg border-2 border-[#8A2BE2] shadow-[4px_4px_0px_0px_#FF6B00]">
                <h2 className="font-creepster text-2xl sm:text-3xl font-bold tracking-wider text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
                  🕸️ {profile.title} 🕸️
                </h2>
              </div>

              {/* Necromancer Introduction */}
              <p className="max-w-[600px] text-foreground/90 font-medium md:text-lg border-l-4 border-[#FF6B00] pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-3">
                <Button asChild size="lg">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> SEANCE DISPATCH
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> UNEARTH GRIMOIRE
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    <Sparkles className="mr-2 h-5 w-5 text-[#39FF14]" /> DARK RITUALS
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-3">
                <Button asChild variant="outline" size="icon" className="rounded-lg">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub Grimoire">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-lg">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="Coven Network (LinkedIn)">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-lg">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me" title="Spirit Communique (Mastodon)">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 3D Jack-o'-Lantern Showcase with Haunted Pass */}
          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] w-full">
              {/* Interactive 3D Emblem Helper Badge */}
              <div className="absolute top-0 right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#8A2BE2]/90 text-[#FF6B00] text-[10px] font-mono font-bold uppercase tracking-wider rounded-md border border-[#FF6B00] shadow-[0_0_10px_rgba(255,107,0,0.4)] pointer-events-none select-none">
                <span>🎃</span> 3D PUMPKIN • DRAG TO ROTATE
              </div>

              {/* 3D Jack-o'-Lantern Canvas (Centerpiece & Fully Visible) */}
              <div className="relative flex items-center justify-center pointer-events-auto">
                <HalloweenThreeCanvas />
              </div>

              {/* Haunted Tintype Pass (Shifted rightwards to avoid covering #projects action button) */}
              <div className="absolute -bottom-4 left-10 sm:bottom-2 sm:left-24 lg:left-32 z-20 p-2 bg-card border-2 border-[#8A2BE2] shadow-[6px_6px_0px_0px_#FF6B00] rounded-xl rotate-[2deg] hover:rotate-0 transition-transform duration-300 w-36 sm:w-44 select-none">
                <div className="bg-[#8A2BE2] text-[#FF6B00] text-center text-[9px] sm:text-[10px] font-bold py-0.5 uppercase tracking-widest rounded border border-[#FF6B00]">
                  🎃 HAUNTED TINTYPE 🎃
                </div>
                <div className="relative h-32 sm:h-40 w-full overflow-hidden rounded border border-[#FF6B00] my-1.5 bg-black/40">
                  <Image
                    src={avatarUrl}
                    alt="Portrait of Necromancer Chit Swe"
                    fill
                    className="object-cover contrast-125 saturate-150"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#8A2BE2]/95 text-[#39FF14] text-center text-[8px] font-mono font-bold py-0.5 uppercase tracking-wider">
                    VERIFIED SORCERER
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-creepster tracking-wider text-center text-[#FF6B00] uppercase leading-tight pt-0.5">
                  {profile.name}
                  <span className="block text-[8px] font-mono text-muted-foreground mt-0.5">
                    #{profile.dossierNumber || 'HW-666'}
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
