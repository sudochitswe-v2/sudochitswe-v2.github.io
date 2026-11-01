import { EXPERIENCE_DATA } from '@/lib/data';
import { Card, CardContent } from '@/themes/soviet/ui/card';
import { Calendar } from 'lucide-react';

export default function SovietExperience() {
  return (
    <section id="experiences" className="w-full py-12 sm:py-20 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ LABOR SERVICE RECORD ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            OFFICIAL SERVICE & WORK HISTORY
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Chronological log of duty, productive output, and modernization initiatives executed across enterprise bureaus.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Header banner */}
              <div className="bg-[#B81414] text-[#FFC82C] px-6 py-3 border-b-2 border-[#FFC82C] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">★</span>
                  <span className="font-headline text-lg font-bold uppercase tracking-wide">
                    {exp.role}
                  </span>
                  <span className="text-xs bg-[#FFC82C] text-[#7A0000] font-headline font-bold px-2 py-0.5">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.years}</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="font-medium text-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-[#B81414] font-bold">★ SERVICE CLEARANCE: HONORED FULL STACK CADRE</span>
                  <span>RECORD VERIFIED ✓</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
