import { CERTIFICATES_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/themes/soviet/ui/card';
import { Badge } from '@/themes/soviet/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Button } from '@/themes/soviet/ui/button';

export default function SovietCertificates() {
  return (
    <section id="certificates" className="w-full py-12 sm:py-20 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ AWARDS & CREDENTIALS BUREAU ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            STATE HONORS & QUALIFICATIONS
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Accredited validations issued by acknowledged institutions verifying mastery in algorithmic disciplines.
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
                      ★ {cert.title}
                    </CardTitle>
                    <CardDescription className="font-headline font-bold text-xs uppercase text-[#B81414] dark:text-[#FFC82C]">
                      ISSUED BY: {cert.issuer}
                    </CardDescription>
                  </div>
                  <Award className="h-6 w-6 text-[#FFC82C] shrink-0" />
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-2 space-y-4">
                <div className="flex items-center text-xs font-mono text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" /> Date Certified: {cert.year}
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
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
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> VERIFY CREDENTIAL IN ARCHIVE
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
