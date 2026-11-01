'use client';

import Header from './components/header';
import Hero from './components/sections/hero';
import Experience from './components/sections/experience';
import Skills from './components/sections/skills';
import Projects from './components/sections/projects';
import Certificates from './components/sections/certificates';
import Education from './components/sections/education';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';
import AIChatWidget from './components/ai-chat-widget';

export default function BrutalismTheme() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-mono text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <hr className="border-t-4 border-foreground" />
        <Experience />
        <hr className="border-t-4 border-foreground" />
        <Skills />
        <hr className="border-t-4 border-foreground" />
        <Projects />
        <hr className="border-t-4 border-foreground" />
        <Certificates />
        <hr className="border-t-4 border-foreground" />
        <Education />
        <hr className="border-t-4 border-foreground" />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
