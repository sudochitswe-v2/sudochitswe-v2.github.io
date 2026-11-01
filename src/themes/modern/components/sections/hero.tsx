'use client';

import { getProfileData } from '@/lib/data';
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
  const profile = getProfileData('modern');
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');
  const avatarUrl = profile.avatarUrl || profileImage?.imageUrl || '/images/profile.png';

  return (
    <section id="about" className="relative w-full overflow-hidden bg-card py-12 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <h2 className="font-headline text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                {profile.title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {profile.introduction}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Button asChild size="lg" className="shadow-md">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> Contact Me
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    <Briefcase className="mr-2 h-5 w-5" /> See My Work
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href={profile.socialLinks.mastodon} target="_blank" rel="me">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center">
              {/* 3D Three.js Interactive Canvas */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-auto">
                <ThreeCanvas />
              </div>

              {/* Profile Image overlay with glass backdrop */}
              <div className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-background/80 shadow-2xl backdrop-blur-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80 transition-transform duration-500 hover:scale-105">
                <Image
                  src={avatarUrl}
                  alt="Profile picture of Chit Swe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
