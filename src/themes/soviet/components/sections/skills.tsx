import { Badge } from '@/themes/soviet/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Card, CardContent } from '@/themes/soviet/ui/card';

export default function SovietSkills() {
  const categoryTitles = {
    Expert: 'HEAVY INDUSTRY (EXPERT ARSENAL)',
    Intermediate: 'OPERATIONAL PROTOCOLS (INTERMEDIATE)',
    Beginner: 'EMERGING SECTORS (EXPLORING)',
  };

  return (
    <section id="skills" className="w-full py-12 sm:py-20 bg-card/40 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ TECHNICAL READINESS REPORT ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            COLLECTIVE TECHNICAL ARSENAL
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Standardized technical competencies certified for deployment across mission-critical systems and distributed networks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof categoryTitles, string[]][]).map(
            ([level, skills]) => (
              <Card key={level} className="relative overflow-hidden">
                <div className="bg-[#B81414] text-[#FFC82C] px-4 py-2 border-b-2 border-[#FFC82C] flex items-center justify-between">
                  <h3 className="font-headline font-bold text-sm tracking-wider uppercase">
                    ★ {categoryTitles[level]}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-[#FFC82C] text-[#7A0000] px-1.5 py-0.5">
                    LEVEL {level === 'Expert' ? 'I' : level === 'Intermediate' ? 'II' : 'III'}
                  </span>
                </div>
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={level === 'Expert' ? 'default' : 'secondary'}
                        className="text-xs font-mono font-bold hover:scale-105 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-8">
          <div className="p-4 bg-background border-2 border-[#B81414] shadow-[4px_4px_0px_0px_#7A0000]">
            <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-[#B81414] dark:text-[#FFC82C] mb-3">
              ★ IDEOLOGICAL & COLLECTIVE COOPERATION SKILLS:
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-card border-2 border-foreground/30 text-xs font-headline font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#B81414]"
                >
                  ★ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
