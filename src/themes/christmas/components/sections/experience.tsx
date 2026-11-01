import { EXPERIENCE_DATA } from '@/lib/data';
import { Card, CardContent } from '@/themes/christmas/ui/card';
import { Calendar, Gift } from 'lucide-react';

export default function ChristmasExperience() {
  return (
    <section id="experiences" className="w-full py-12 sm:py-20 border-b-2 border-[#165B33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#165B33] text-[#F8B229] text-xs font-bold uppercase tracking-widest rounded-full border border-[#F8B229] shadow-[2px_2px_0px_0px_#D42426]">
            🎄 EXPEDITION LOG 🎄
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-[#D42426] dark:text-[#F8B229] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            NORTH POLE WORK HISTORY
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Chronological record of duty, toy workshop modernization, and reliable software deliveries for global scale.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Header banner */}
              <div className="bg-[#165B33] text-white px-6 py-3 border-b-2 border-[#F8B229] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-[#F8B229]" />
                  <span className="font-bold text-base uppercase tracking-wide font-sans">
                    {exp.role}
                  </span>
                  <span className="text-xs bg-[#D42426] text-white font-bold px-2 py-0.5 rounded-full">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white/90">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.years}</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="font-medium text-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-2 border-t border-[#165B33]/20 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-[#D42426] dark:text-[#F8B229] font-bold">⭐ STATUS: SANTA VERIFIED MASTER ARCHITECT</span>
                  <span className="text-[#165B33] dark:text-[#52B788]">RECORD SEALED ✓</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
