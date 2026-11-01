import { Badge } from '@/themes/christmas/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Card, CardContent } from '@/themes/christmas/ui/card';

export default function ChristmasSkills() {
  const categoryTitles = {
    Expert: 'MASTER WORKSHOP TOOLS (EXPERT ARSENAL)',
    Intermediate: 'ELVEN PROTOCOLS (INTERMEDIATE)',
    Beginner: 'NORTH POLE EXPERIMENTS (EXPLORING)',
  };

  return (
    <section id="skills" className="w-full py-12 sm:py-20 bg-card/40 border-b-2 border-[#165B33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#165B33] text-[#F8B229] text-xs font-bold uppercase tracking-widest rounded-full border border-[#F8B229] shadow-[2px_2px_0px_0px_#D42426]">
            🎄 WORKSHOP TOOLKIT & CAPABILITIES 🎄
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-[#D42426] dark:text-[#F8B229] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            ELVEN ARSENAL & TECH CRAFT
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Fine-tuned developer craft, modern frontend architectures, and resilient distributed platforms built to survive Christmas rush traffic.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof categoryTitles, string[]][]).map(
            ([level, skills]) => (
              <Card key={level} className="relative overflow-hidden">
                <div className="bg-[#165B33] text-white px-4 py-2 border-b-2 border-[#F8B229] flex items-center justify-between">
                  <h3 className="font-bold text-xs tracking-wider uppercase font-sans">
                    ⭐ {categoryTitles[level]}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-[#F8B229] text-[#165B33] px-2 py-0.5 rounded-full">
                    TIER {level === 'Expert' ? 'I' : level === 'Intermediate' ? 'II' : 'III'}
                  </span>
                </div>
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={level === 'Expert' ? 'default' : level === 'Intermediate' ? 'secondary' : 'outline'}
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
          <div className="p-4 bg-background/90 rounded-2xl border-2 border-[#165B33] shadow-[4px_4px_0px_0px_#D42426]">
            <h4 className="font-christmas text-2xl tracking-wide text-[#165B33] dark:text-[#52B788] mb-3">
              ❄️ WORKSHOP SYNERGY & COLLABORATION:
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-card rounded-full border border-[#165B33] text-xs font-bold uppercase tracking-wider text-foreground hover:text-[#D42426] hover:border-[#D42426] transition-colors"
                >
                  🎁 {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
