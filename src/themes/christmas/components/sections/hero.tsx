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
    <div className="h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] animate-pulse rounded-full bg-emerald-950/30 border-2 border-dashed border-red-500/40 flex items-center justify-center">
      <span className="font-christmas text-red-500 text-3xl font-bold tracking-wide">🎄 Decorating North Pole Tree...</span>
    </div>
  ),
});

export default function ChristmasHero() {
  const profile = getProfileData('christmas');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="relative w-full overflow-hidden bg-gradient-to-b from-[#061A0E] via-[#0A2615] to-[#061A0E] py-14 sm:py-24 lg:py-32 border-b border-emerald-500/30">
      {/* Background festive radial glow & snowflake watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-900/25 via-red-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 select-none opacity-5 pointer-events-none">
        <span className="text-[25rem] font-serif text-yellow-400">❄️</span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-5">
              {/* Architect Name */}
              <h1 className="font-christmas text-5xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_0_20px_rgba(212,36,38,0.35)]">
                {profile.name}
              </h1>

              {/* Position Title Banner */}
              <div className="inline-block p-3 bg-emerald-950/70 rounded-2xl border border-emerald-500/40 shadow-lg backdrop-blur-md">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-emerald-400">
                  ⭐ {profile.title}
                </h2>
              </div>

              {/* Introduction */}
              <p className="max-w-[600px] text-emerald-100/90 font-medium md:text-lg border-l-4 border-red-500 pl-4 py-1 leading-relaxed">
                {profile.introduction}
              </p>

              {/* Action Buttons: Fused clean action text + festive aesthetic */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-2">
                <Button asChild size="lg" className="rounded-full px-7 py-3 text-sm font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white shadow-[0_0_25px_rgba(220,38,38,0.45)] hover:scale-105 active:scale-95 transition-all">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> Get In Touch
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full px-6 py-3 text-sm font-semibold bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-100 hover:text-white border border-emerald-500/40 hover:border-yellow-400/60 transition-all shadow-[0_0_15px_rgba(22,91,51,0.25)] hover:scale-105 active:scale-95">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> Download CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 text-sm font-bold border border-yellow-500/50 hover:border-red-400 hover:bg-emerald-950/40 text-yellow-300 hover:text-yellow-200 transition-all shadow-sm hover:scale-105 active:scale-95">
                  <a href="#projects">
                    <Gift className="mr-2 h-5 w-5 text-yellow-400" /> View Projects
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 pt-2">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(248,178,41,0.4)] hover:scale-110 transition-all"
                  title="GitHub"
                >
                  <SiGithub size={18} />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(248,178,41,0.4)] hover:scale-110 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={profile.socialLinks.mastodon}
                  target="_blank"
                  rel="me"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(248,178,41,0.4)] hover:scale-110 transition-all"
                  title="Mastodon"
                >
                  <SiMastodon size={18} />
                </a>
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
                <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-full border-4 border-yellow-400/80 p-1 shadow-[0_0_35px_rgba(248,178,41,0.4)] backdrop-blur-md bg-emerald-950/40 transition-all duration-500 group-hover:scale-110 group-hover:border-red-500 group-hover:shadow-[0_0_35px_rgba(212,36,38,0.5)] animate-spooky-float overflow-hidden">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src={avatarUrl}
                      alt="Portrait of Chit Swe"
                      fill
                      className="object-cover"
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
