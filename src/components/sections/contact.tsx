import ContactForm from '@/components/contact-form';
import { PROFILE_DATA } from '@/lib/data';
import { Mail, MapPin, MessageSquare, Linkedin } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
          {/* Info side */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <h2 className="font-mono text-4xl font-bold tracking-tighter uppercase sm:text-5xl text-foreground">
                [07] Contact Me
              </h2>
              <p className="text-foreground font-medium md:text-xl">
                Feel free to reach out for collaborations, project inquiries, or just to connect!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="brutal-border bg-accent-yellow transition-none brutal-hover brutal-shadow">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center brutal-border bg-white text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-mono uppercase text-black">Email</p>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      className="text-sm font-bold font-mono text-black hover:underline"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="brutal-border bg-accent-pink transition-none brutal-hover brutal-shadow">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center brutal-border bg-white text-black">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-mono uppercase text-white">Status & Location</p>
                    <p className="text-sm font-bold font-mono text-white">Available for Remote & On-site</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="brutal-border bg-accent-green transition-none brutal-hover brutal-shadow">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center brutal-border bg-white text-black">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-mono uppercase text-black">Social Connect</p>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={PROFILE_DATA.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-white transition-none"
                        aria-label="GitHub"
                      >
                        <SiGithub size={20} />
                      </a>
                      <a
                        href={PROFILE_DATA.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-white transition-none"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={PROFILE_DATA.socialLinks.mastodon}
                        target="_blank"
                        rel="me"
                        className="text-black hover:text-white transition-none"
                        aria-label="Mastodon"
                      >
                        <SiMastodon size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
