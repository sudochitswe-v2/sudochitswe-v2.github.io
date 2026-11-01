'use client';

import { getProfileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/themes/christmas/ui/button';
import { Mail, Download, Gift, Linkedin } from 'lucide-react';
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
    <section id="about" className="relative w-full overflow-hidden py-12 sm:py-20 lg:py-28 border-b border-emerald-500/30 bg-[#061A0E]/70 backdrop-blur-sm">
      {/* Background snowflake watermark */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/4 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="text-[35rem] font-serif text-[#D42426]">❄️</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              {/* Merit Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 text-yellow-400 font-bold text-xs uppercase tracking-widest rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
                  <span>🎄</span> {profile.roleBadge}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-300/80 uppercase border border-emerald-500/30 rounded-full px-2.5 py-1">
                  #{profile.dossierNumber}
                </span>
              </div>

              {/* Architect Name */}
              <h1 className="font-christmas text-5xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_15px_rgba(212,36,38,0.3)]">
                {profile.name}
              </h1>

              {/* Position Title Banner */}
              <div className="inline-block p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/40 shadow-[0_4px_15px_rgba(22,91,51,0.3)]">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-emerald-400">
                  ⭐ {profile.title}
                </h2>
              </div>

              {/* Introduction */}
              <p className="max-w-[600px] text-emerald-100/90 font-medium md:text-lg border-l-4 border-red-500 pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons: Fused clean action text + festive aesthetic */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-3">
                <Button asChild size="lg" className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold border border-yellow-400/50 shadow-[0_0_15px_rgba(212,36,38,0.4)]">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> Get In Touch
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-yellow-300 font-bold border border-emerald-500/40">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> Download CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10">
                  <a href="#projects">
                    <Gift className="mr-2 h-5 w-5 text-yellow-400" /> View Projects
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-3">
                <Button asChild variant="outline" size="icon" className="rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me" title="Mastodon">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 3D Christmas Tree & Portrait Wreath Bauble */}
          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] w-full">
              {/* Interactive 3D Canvas Centerpiece */}
              <div className="relative flex items-center justify-center pointer-events-auto">
                <ChristmasThreeCanvas />
              </div>

              {/* Floating Holiday Portrait Wreath Bauble */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 z-20 group">
                <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-full border-4 border-yellow-400/80 p-1 shadow-[0_0_35px_rgba(248,178,41,0.4)] backdrop-blur-md bg-emerald-950/40 transition-all duration-500 group-hover:scale-105 group-hover:border-red-500 group-hover:shadow-[0_0_35px_rgba(212,36,38,0.5)] overflow-hidden">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src={avatarUrl}
                      alt="Portrait of Santa's Lead Architect Chit Swe"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Workshop Status Ribbon */}
                <div className="absolute -top-2 -right-2 z-30 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/95 border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.5)] text-[10px] font-mono text-yellow-300 pointer-events-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-ping" />
                  <span>Workshop Open</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
