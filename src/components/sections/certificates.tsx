import { CERTIFICATES_DATA } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-neon-yellow retro-glow uppercase">
                 CERTIFICATES   
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
          {CERTIFICATES_DATA.map((cert) => (
            <Card
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden retro-panel p-4 bg-[#c0c0c0] transition-none"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black border-r-white border-b-white bg-[#000080] text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="default" className="flex items-center gap-1 text-xs px-2 bg-black border-neon-yellow text-neon-yellow font-body">
                    <Calendar className="h-3 w-3" />
                    {cert.year}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="font-headline text-xl font-bold tracking-tight text-black uppercase">
                    {cert.title}
                  </CardTitle>
                  <p className="mt-1 text-sm font-bold text-[#800080] uppercase">
                    {cert.issuer}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <CardDescription className="text-sm font-body text-star-white font-bold">
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
                      className="retro-bevel-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-black uppercase"
                    >
                      <CheckCircle2 className="h-4 w-4" color="green" />
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
