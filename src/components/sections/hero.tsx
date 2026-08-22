import { PROFILE_DATA } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Download, Briefcase, Linkedin } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section
      id="about"
      className="w-full bg-card py-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {PROFILE_DATA.name}
            </h1>
            <h2 className="font-headline text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
              {PROFILE_DATA.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {PROFILE_DATA.introduction}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="file/sudochitswe.pdf" download>
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
              <Button asChild variant="outline" size="icon">
                <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub color="currentColor" size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={PROFILE_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin color="currentColor" size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={PROFILE_DATA.socialLinks.mastodon} target="_blank" rel="me">
                  <SiMastodon color="currentColor" size={20} />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {profileImage && (
              <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl lg:h-96 lg:w-96">
                <Image
                  src={profileImage.imageUrl}
                  alt="Profile picture of Chit Swe"
                  fill
                  className="object-cover"
                  data-ai-hint={profileImage.imageHint}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
