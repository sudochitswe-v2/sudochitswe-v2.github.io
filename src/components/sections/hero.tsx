'use client';

import { PROFILE_DATA } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Download, Briefcase, Linkedin } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ui/scroll-reveal';

// Dynamically import ThreeCanvas with SSR disabled for static export compatibility
const ThreeCanvas = dynamic(() => import('@/components/ui/three-canvas'), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] animate-pulse rounded-full bg-primary/10" />
  ),
});

export default function Hero() {
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');

  return (
    <section id="about" className="relative w-full overflow-hidden bg-card py-12 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="font-mono text-5xl font-bold uppercase leading-none tracking-tighter text-black bg-accent-yellow inline-block px-4 py-2 brutal-border brutal-shadow sm:text-6xl md:text-7xl lg:text-8xl">
                  {PROFILE_DATA.name}
                </h1>
              </div>
              <div>
                <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-white bg-accent-pink px-4 py-2 inline-block brutal-border brutal-shadow sm:text-2xl">
                  {PROFILE_DATA.title}
                </h2>
              </div>
              <p className="max-w-[600px] text-foreground font-medium md:text-xl border-l-4 border-foreground pl-4 bg-card p-4 brutal-shadow-sm brutal-border">
                {PROFILE_DATA.introduction}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Button asChild size="lg" className="brutal-shadow brutal-press">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> Contact Me
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="brutal-shadow brutal-press">
                  <a href="file/sudochitswe.pdf" download>
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="brutal-shadow brutal-press">
                  <a href="#projects">
                    <Briefcase className="mr-2 h-5 w-5" /> See My Work
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild variant="outline" size="icon" className="brutal-shadow brutal-press">
                  <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="brutal-shadow brutal-press">
                  <a href={PROFILE_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="brutal-shadow brutal-press">
                  <a href={PROFILE_DATA.socialLinks.mastodon} target="_blank" rel="me">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center p-8">
              {/* 3D Three.js Interactive Canvas */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <ThreeCanvas />
              </div>

              {/* Profile Image overlay with brutalist frame */}
              {profileImage && (
                <div className="relative z-10 h-56 w-56 overflow-hidden rounded-none brutal-border bg-white brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <Image
                    src={profileImage.imageUrl}
                    alt="Profile picture of Chit Swe"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    data-ai-hint={profileImage.imageHint}
                    priority
                  />
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
