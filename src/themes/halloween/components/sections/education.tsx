import { EDUCATION_DATA } from '@/lib/data';
import { Card, CardContent } from '@/themes/halloween/ui/card';
import { GraduationCap, Calendar, Ghost } from 'lucide-react';

export default function HalloweenEducation() {
  return (
    <section id="education" className="w-full py-12 sm:py-20 bg-card/30 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 SCHOLOMANCE ACADEMIES 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            ARCANE DEGREES & FOUNDATIONS
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Scholastic training in computational sorcery, binary arts, and algorithmic mysteries.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu) => (
            <Card key={edu.id} className="relative overflow-hidden flex flex-col justify-between">
              <div className="bg-[#8A2BE2] text-[#FF6B00] px-4 py-2 border-b-2 border-[#FF6B00] flex items-center justify-between">
                <span className="font-bold text-xs tracking-wider uppercase font-sans">
                  🕸️ DEGREE SCROLL #{edu.id}
                </span>
                <GraduationCap className="h-4 w-4 text-[#39FF14]" />
              </div>

              <CardContent className="p-6 space-y-3">
                <h3 className="font-creepster text-2xl font-bold uppercase text-[#FF6B00] leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-foreground">
                  {edu.institution}
                </p>
                <div className="pt-2 border-t border-[#8A2BE2]/30 flex items-center text-xs font-mono font-bold text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-[#39FF14]" /> {edu.years}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
