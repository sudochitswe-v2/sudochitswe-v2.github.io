'use client';

import ChristmasHeader from './components/header';
import ChristmasHero from './components/sections/hero';
import ChristmasExperience from './components/sections/experience';
import ChristmasSkills from './components/sections/skills';
import ChristmasProjects from './components/sections/projects';
import ChristmasCertificates from './components/sections/certificates';
import ChristmasEducation from './components/sections/education';
import ChristmasContact from './components/sections/contact';
import ChristmasFooter from './components/sections/footer';
import ChristmasAIChatWidget from './components/ai-chat-widget';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function ChristmasTheme() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-body text-foreground transition-colors duration-300">
      <ChristmasHeader />
      <main className="flex-1 overflow-x-clip">
        <ChristmasHero />
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasSkills />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasExperience />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasProjects />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasCertificates />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasEducation />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <ChristmasContact />
        </ScrollReveal>
      </main>
      <ChristmasFooter />
      <ChristmasAIChatWidget />
    </div>
  );
}
