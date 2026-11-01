import { EXPERIENCE_DATA } from '@/lib/data';
import { Card, CardContent } from '@/themes/halloween/ui/card';
import { Calendar, Skull } from 'lucide-react';

export default function HalloweenExperience() {
  return (
    <section id="experiences" className="w-full py-12 sm:py-20 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 CRYPT CHRONICLES 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            PROFESSIONAL NECROMANCY LOG
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Chronological parchment detailing legendary quests, high-stakes system resurrections, and realm architectural tours.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Header banner */}
              <div className="bg-[#8A2BE2] text-[#FF6B00] px-6 py-3 border-b-2 border-[#FF6B00] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Skull className="h-5 w-5 text-[#39FF14]" />
                  <span className="font-bold text-base uppercase tracking-wide font-sans text-white">
                    {exp.role}
                  </span>
                  <span className="text-xs bg-[#FF6B00] text-black font-bold px-2 py-0.5 rounded">
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

                <div className="pt-2 border-t border-[#8A2BE2]/30 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-[#FF6B00] font-bold">🕸️ STATUS: MASTER NECROMANCER DISPATCHED</span>
                  <span className="text-[#39FF14]">SOUL BOUND ✓</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
