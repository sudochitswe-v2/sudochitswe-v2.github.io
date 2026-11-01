import { CERTIFICATES_DATA } from '@/lib/data';
import { Badge } from '@/themes/christmas/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Button } from '@/themes/christmas/ui/button';

export default function ChristmasCertificates() {
  return (
    <section id="certificates" className="w-full py-12 sm:py-20 border-b border-emerald-500/30 bg-[#061A0E]/60">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Credentials
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Certifications & Honors
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Accredited engineering validations and certifications granted by leading software institutions.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {CERTIFICATES_DATA.map((cert) => (
            <div key={cert.id} className="festive-glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-400/60 transition-all">
              <div>
                <div className="flex items-start justify-between gap-2 pb-3 mb-3 border-b border-emerald-500/20">
                  <div>
                    <h3 className="font-bold text-lg text-emerald-100">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-yellow-300 mt-0.5">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                  <Award className="h-6 w-6 text-yellow-400 shrink-0" />
                </div>

                <div className="flex items-center text-xs font-mono text-emerald-300/80 mb-4">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-yellow-400" /> Date Certified: {cert.year}
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-500/20">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px] font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-2">
                  <Button asChild size="sm" variant="outline" className="w-full text-xs rounded-xl border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-300 hover:border-yellow-400">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Verify Credential
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
