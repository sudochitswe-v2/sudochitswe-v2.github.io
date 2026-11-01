import { CERTIFICATES_DATA } from '@/lib/data';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/themes/christmas/ui/button';

export default function ChristmasCertificates() {
  return (
    <section id="certificates" className="w-full py-16 md:py-24 bg-[#05160C] relative overflow-hidden border-b border-emerald-500/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/90 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_10px_rgba(248,178,41,0.2)]">
            🎄 Credentials
          </span>
          <h2 className="font-christmas text-5xl sm:text-7xl text-red-500 dark:text-yellow-400 tracking-wide drop-shadow-[0_0_15px_rgba(212,36,38,0.4)]">
            Certifications & Honors
          </h2>
          <p className="max-w-[700px] text-emerald-100/80 text-sm md:text-base font-medium">
            Accredited engineering validations and certifications granted by acknowledged software institutions.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/90 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:border-yellow-400/70 hover:shadow-[0_0_25px_rgba(248,178,41,0.3)] hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950 border border-emerald-500/40 text-yellow-400 group-hover:scale-110 group-hover:text-red-400 group-hover:border-red-400 transition-all shadow-[0_0_12px_rgba(248,178,41,0.3)]">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                    <Calendar className="h-3 w-3 text-yellow-400" />
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-lg font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-emerald-300 mt-1">
                    Issued by: {cert.issuer}
                  </p>
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-500/20">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-2">
                  <Button asChild size="sm" variant="outline" className="w-full text-xs rounded-xl border-emerald-500/40 bg-emerald-950/70 text-emerald-200 hover:text-yellow-300 hover:border-yellow-400">
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
