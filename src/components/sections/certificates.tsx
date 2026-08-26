import { CERTIFICATES_DATA } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="font-mono text-4xl font-bold tracking-tighter uppercase sm:text-6xl text-foreground">
              [05] Certificates
            </h2>
            <p className="max-w-[900px] text-foreground font-medium md:text-xl">
              Professional diplomas, technical certifications, and verified achievements.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
          {CERTIFICATES_DATA.map((cert) => (
            <Card
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden transition-none brutal-hover bg-card brutal-border brutal-shadow-md"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center brutal-border bg-accent-green text-black transition-none group-hover:bg-foreground group-hover:text-background">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1 text-xs brutal-border px-2 py-1 bg-white text-black font-mono">
                    <Calendar className="h-3 w-3" />
                    {cert.year}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="font-mono text-xl font-bold uppercase tracking-tight">
                    {cert.title}
                  </CardTitle>
                  <p className="mt-2 text-sm font-bold font-mono text-background bg-foreground inline-block px-2 py-0.5 uppercase">
                    {cert.issuer}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <CardDescription className="text-sm font-medium text-foreground leading-relaxed mt-2 border-l-2 border-foreground pl-2">
                  {cert.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-white text-black brutal-border">
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
                      className="inline-flex items-center gap-1.5 brutal-border bg-accent-green text-black px-4 py-2 text-xs font-bold font-mono uppercase brutal-shadow-sm brutal-hover transition-none"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Verify</span>
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
