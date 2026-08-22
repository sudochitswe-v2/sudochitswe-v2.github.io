import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Certificates from '@/components/sections/certificates';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
