'use client';

import SovietHeader from './components/header';
import SovietHero from './components/sections/hero';
import SovietExperience from './components/sections/experience';
import SovietSkills from './components/sections/skills';
import SovietProjects from './components/sections/projects';
import SovietCertificates from './components/sections/certificates';
import SovietEducation from './components/sections/education';
import SovietContact from './components/sections/contact';
import SovietFooter from './components/sections/footer';
import SovietAIChatWidget from './components/ai-chat-widget';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function SovietTheme() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-body text-foreground transition-colors duration-300">
      <SovietHeader />
      <main className="flex-1 overflow-x-clip">
        <SovietHero />
        <ScrollReveal direction="up" delay={0.1}>
          <SovietSkills />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <SovietExperience />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <SovietProjects />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <SovietCertificates />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <SovietEducation />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <SovietContact />
        </ScrollReveal>
      </main>
      <SovietFooter />
      <SovietAIChatWidget />
    </div>
  );
}
