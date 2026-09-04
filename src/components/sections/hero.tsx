'use client';

import { PROFILE_DATA } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Download, Briefcase, Linkedin } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import ScrollReveal from '@/components/ui/scroll-reveal';
export default function Hero() {
  const profileImage = PlaceHolderImages.find((p) => p.id === 'profile');

  return (
    <section id="about" className="relative w-full overflow-hidden py-12 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-neon-yellow sm:text-3xl retro-glow uppercase">
                {PROFILE_DATA.name}
              </h2>
              <div className="inline-block retro-panel border-2 border-border-bevel p-2 bg-[#000080]">
                <h3 className="font-headline font-bold text-neon-lime sm:text-xl uppercase">
                    {PROFILE_DATA.title}  
                </h3>
              </div>
              <p className="max-w-[600px] text-star-white font-bold md:text-xl">
                {PROFILE_DATA.introduction}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Button asChild size="lg" className="shadow-md">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" /> MESSAGE ME
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/file/sudochitswe.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" /> DOWNLOAD.EXE
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    <Briefcase className="mr-2 h-5 w-5" /> PORTFOLIO
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild variant="outline" size="icon" className="rounded-none">
                  <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-none">
                  <a href={PROFILE_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin color="currentColor" size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-none">
                  <a href={PROFILE_DATA.socialLinks.mastodon} target="_blank" rel="me">
                    <SiMastodon color="currentColor" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} delay={0.2}>
            <div className="relative flex items-center justify-center">
              {profileImage && (
                <div className="retro-panel p-2 bg-[#c0c0c0]">
                  <div className="relative h-64 w-64 overflow-hidden border-4 border-black border-r-white border-b-white sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                    <Image
                      src={profileImage.imageUrl}
                      alt="Profile picture of Chit Swe"
                      fill
                      className="object-cover grayscale contrast-125 transition-all duration-300 hover:grayscale-0 hover:contrast-100"
                      data-ai-hint={profileImage.imageHint}
                      priority
                    />
                    <div className="retro-scanlines"></div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
