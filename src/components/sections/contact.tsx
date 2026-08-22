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
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Me
              </h2>
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, project inquiries, or just to connect!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border border-border/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      className="text-sm font-semibold hover:text-primary transition-colors"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Status & Location</p>
                    <p className="text-sm font-semibold">Available for Remote & On-site</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Social Connect</p>
                    <div className="flex gap-4 pt-1">
                      <a
                        href={PROFILE_DATA.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <SiGithub size={18} />
                      </a>
                      <a
                        href={PROFILE_DATA.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={PROFILE_DATA.socialLinks.mastodon}
                        target="_blank"
                        rel="me"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Mastodon"
                      >
                        <SiMastodon size={18} />
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
