import { CERTIFICATES_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/themes/halloween/ui/card';
import { Badge } from '@/themes/halloween/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Button } from '@/themes/halloween/ui/button';

export default function HalloweenCertificates() {
  return (
    <section id="certificates" className="w-full py-12 sm:py-20 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 ANCIENT RUNES & COVEN HONORS 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            CERTIFIED ARCHITECTURAL HONORS
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Arcane certifications and high credentials granted by the ancient guilds of software engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {CERTIFICATES_DATA.map((cert) => (
            <Card key={cert.id} className="flex flex-col justify-between">
              <CardHeader className="p-5 pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">
                      🕸️ {cert.title}
                    </CardTitle>
                    <CardDescription className="font-bold text-xs uppercase text-[#FF6B00]">
                      GRANTED BY: {cert.issuer}
                    </CardDescription>
                  </div>
                  <Award className="h-6 w-6 text-[#39FF14] shrink-0" />
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-2 space-y-4">
                <div className="flex items-center text-xs font-mono text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-[#FF6B00]" /> Inscribed: {cert.year}
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#8A2BE2]/30">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px] font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <div className="pt-2">
                    <Button asChild size="sm" variant="outline" className="w-full text-xs">
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> VERIFY RUNE
                      </a>
                    </Button>
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
