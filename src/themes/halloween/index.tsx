'use client';

import HalloweenHeader from './components/header';
import HalloweenHero from './components/sections/hero';
import HalloweenExperience from './components/sections/experience';
import HalloweenSkills from './components/sections/skills';
import HalloweenProjects from './components/sections/projects';
import HalloweenCertificates from './components/sections/certificates';
import HalloweenEducation from './components/sections/education';
import HalloweenContact from './components/sections/contact';
import HalloweenFooter from './components/sections/footer';
import HalloweenAIChatWidget from './components/ai-chat-widget';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function HalloweenTheme() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-body text-foreground transition-colors duration-300">
      <HalloweenHeader />
      <main className="flex-1 overflow-x-clip">
        <HalloweenHero />
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenSkills />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenExperience />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenProjects />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenCertificates />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenEducation />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <HalloweenContact />
        </ScrollReveal>
      </main>
      <HalloweenFooter />
      <HalloweenAIChatWidget />
    </div>
  );
}
