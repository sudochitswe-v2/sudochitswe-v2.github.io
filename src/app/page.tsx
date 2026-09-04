import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Certificates from '@/components/sections/certificates';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import AIChatWidget from '@/components/ai-chat-widget';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-void retro-scanlines relative">
      <Header />
      <main className="flex-1 overflow-x-clip relative z-10">
        <Hero />
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Skills />
        </ScrollReveal>
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Experience />
        </ScrollReveal>
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Projects />
        </ScrollReveal>
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Certificates />
        </ScrollReveal>
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Education />
        </ScrollReveal>
        <hr className="retro-divider" />
        <ScrollReveal direction="up" delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
