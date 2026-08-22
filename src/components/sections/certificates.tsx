import { CERTIFICATES_DATA } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Certificates
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional diplomas, technical certifications, and verified achievements.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
          {CERTIFICATES_DATA.map((cert) => (
            <Card
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border border-border/50"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    {cert.year}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="font-headline text-xl font-bold tracking-tight">
                    {cert.title}
                  </CardTitle>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {cert.issuer}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.credentialUrl && cert.credentialUrl.trim() !== '' && (
                  <div className="pt-2">
                    <a
                      href={
                        cert.credentialUrl.trim().startsWith('http://') ||
                          cert.credentialUrl.trim().startsWith('https://')
                          ? cert.credentialUrl.trim()
                          : `https://${cert.credentialUrl.trim()}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Verified</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
