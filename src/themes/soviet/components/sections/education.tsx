import { EDUCATION_DATA } from '@/lib/data';
import { Card, CardContent } from '@/themes/soviet/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

export default function SovietEducation() {
  return (
    <section id="education" className="w-full py-12 sm:py-20 bg-card/30 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ HIGHER EDUCATIONAL FORMATION ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            ACADEMIC TRAINING & DEGREES
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Rigorous scholastic foundations completed in software engineering and computing disciplines.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu) => (
            <Card key={edu.id} className="relative overflow-hidden flex flex-col justify-between">
              <div className="bg-[#B81414] text-[#FFC82C] px-4 py-2 border-b-2 border-[#FFC82C] flex items-center justify-between">
                <span className="font-headline font-bold text-xs tracking-wider uppercase">
                  ★ DIPLOMA #{edu.id}
                </span>
                <GraduationCap className="h-4 w-4" />
              </div>

              <CardContent className="p-6 space-y-3">
                <h3 className="font-headline text-lg font-bold uppercase text-[#B81414] dark:text-[#FFC82C] leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-foreground">
                  {edu.institution}
                </p>
                <div className="pt-2 border-t border-border flex items-center text-xs font-mono font-bold text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-[#B81414]" /> {edu.years}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
