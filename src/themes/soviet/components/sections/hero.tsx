'use client';

import { getProfileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/themes/soviet/ui/button';
import { Mail, Download, Briefcase, Linkedin } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ui/scroll-reveal';

// Dynamically import the 3D Hammer and Sickle canvas with SSR disabled
const SovietThreeCanvas = dynamic(() => import('@/themes/soviet/ui/three-canvas'), {
  ssr: false,
  loading: () => (
    <div className="h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] animate-pulse rounded-full bg-[#B81414]/10 border-4 border-dashed border-[#B81414] flex items-center justify-center">
      <span className="font-headline text-[#B81414] text-xl font-bold">★ CONSTRUCTING ARSENAL... ★</span>
    </div>
  ),
});

export default function SovietHero() {
  const profile = getProfileData('soviet');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="relative w-full overflow-hidden py-12 sm:py-20 lg:py-28 border-b-4 border-[#B81414]">
      {/* Constructivist background geometric watermark */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/4 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="text-[40rem] font-headline font-black text-[#B81414]">★</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              {/* State Merit Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B81414] text-[#FFC82C] font-headline text-xs font-bold tracking-widest border border-[#FFC82C] shadow-[2px_2px_0px_0px_#4A0000]">
                  <span>★</span> {profile.roleBadge} <span>★</span>
                </span>
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase border border-border px-2 py-1">
                  DOSSIER #{profile.dossierNumber}
                </span>
              </div>

              {/* Comrade Name */}
              <h1 className="font-headline text-4xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
                {profile.name}
              </h1>

              {/* Position Title Banner */}
              <div className="inline-block p-2.5 bg-[#B81414] text-[#FFC82C] border-2 border-[#FFC82C] shadow-[4px_4px_0px_0px_#7A0000]">
                <h2 className="font-headline text-xl sm:text-2xl font-bold uppercase tracking-wider">
                  ★ {profile.title} ★
                </h2>
              </div>

              {/* Manifesto Introduction */}
              <p className="max-w-[600px] text-foreground/90 font-medium md:text-lg border-l-4 border-[#B81414] pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-3">
                <Button asChild size="lg">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> TRANSMIT DISPATCH
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> DOWNLOAD DOSSIER
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    <Briefcase className="mr-2 h-5 w-5" /> FIVE-YEAR PLAN
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-3">
                <Button asChild variant="outline" size="icon">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub Arsenal">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="State Network (LinkedIn)">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me" title="Communique (Mastodon)">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 3D Hammer and Sickle Interactive Showcase with Corner Cadre Pass */}
          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] w-full">
              {/* Interactive 3D Emblem Helper Badge */}
              <div className="absolute top-0 right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#B81414]/90 text-[#FFC82C] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#FFC82C] shadow-[2px_2px_0px_0px_#4A0000] pointer-events-none select-none">
                <span>★</span> 3D EMBLEM • DRAG TO ROTATE
              </div>

              {/* 3D Hammer & Sickle Canvas (Centerpiece & Fully Visible) */}
              <div className="relative flex items-center justify-center pointer-events-auto">
                <SovietThreeCanvas />
              </div>

              {/* Cadre Official Identity Pass (Positioned rightwards so it clears #projects button) */}
              <div className="absolute -bottom-4 left-10 sm:bottom-2 sm:left-24 lg:left-32 z-20 p-2 bg-card border-3 border-[#B81414] shadow-[6px_6px_0px_0px_#7A0000] rotate-[2deg] hover:rotate-0 transition-transform duration-300 w-36 sm:w-44 select-none">
                <div className="bg-[#B81414] text-[#FFC82C] text-center text-[9px] sm:text-[10px] font-headline font-bold py-0.5 uppercase tracking-widest border border-[#FFC82C]">
                  ★ CADRE PASS ★
                </div>
                <div className="relative h-32 sm:h-40 w-full overflow-hidden border border-[#B81414] my-1.5 bg-black/10">
                  <Image
                    src={avatarUrl}
                    alt="Portrait of Comrade Chit Swe"
                    fill
                    className="object-cover contrast-110 sepia-[0.25]"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#B81414]/90 text-[#FFC82C] text-center text-[8px] font-mono font-bold py-0.5 uppercase tracking-tighter">
                    VERIFIED CADRE
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-headline font-bold text-center text-[#B81414] dark:text-[#FFC82C] uppercase leading-tight pt-0.5">
                  {profile.name}
                  <span className="block text-[8px] font-mono text-muted-foreground mt-0.5">
                    #{profile.dossierNumber || 'CCCP-2026'}
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
