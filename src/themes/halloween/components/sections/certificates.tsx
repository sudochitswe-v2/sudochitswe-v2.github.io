import { CERTIFICATES_DATA } from '@/lib/data';
import { Badge } from '@/themes/halloween/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Button } from '@/themes/halloween/ui/button';

export default function HalloweenCertificates() {
  return (
    <section id="certificates" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Credentials
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Certifications & Honors
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Verified industry credentials and honors awarded by acknowledged technology platforms and academic institutions.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {CERTIFICATES_DATA.map((cert) => (
            <div key={cert.id} className="stone-slab-texture rounded-2xl border border-[#443D36] p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:border-orange-500/60 transition-all">
              <div>
                <div className="flex items-start justify-between gap-2 pb-3 mb-3 border-b border-[#443D36]">
                  <div>
                    <h3 className="font-bold text-lg text-stone-100">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-orange-400 mt-0.5">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                  <Award className="h-6 w-6 text-orange-400 shrink-0" />
                </div>

                <div className="flex items-center text-xs font-mono text-stone-400 mb-4">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-orange-400" /> Date Certified: {cert.year}
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#443D36]">
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
                  <Button asChild size="sm" variant="outline" className="stone-btn w-full text-xs">
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
