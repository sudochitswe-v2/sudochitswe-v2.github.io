import { Badge } from '@/themes/halloween/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Card, CardContent } from '@/themes/halloween/ui/card';

export default function HalloweenSkills() {
  const categoryTitles = {
    Expert: 'MASTER SPELLCRAFT (EXPERT ARSENAL)',
    Intermediate: 'INCANTATION BASICS (INTERMEDIATE)',
    Beginner: 'CURIOUS APPRENTICESHIP (EXPLORING)',
  };

  return (
    <section id="skills" className="w-full py-12 sm:py-20 bg-card/40 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 ALCHEMICAL RUNES & CAPABILITIES 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            DARK SORCERY & TECH ARSENAL
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Potent alchemical ingredients, arcane frameworks, and enchanted languages mastered across deep spectral architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof categoryTitles, string[]][]).map(
            ([level, skills]) => (
              <Card key={level} className="relative overflow-hidden">
                <div className="bg-[#8A2BE2] text-[#FF6B00] px-4 py-2 border-b-2 border-[#FF6B00] flex items-center justify-between">
                  <h3 className="font-bold text-xs tracking-wider uppercase font-sans">
                    🕸️ {categoryTitles[level]}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-[#FF6B00] text-black px-1.5 py-0.5 rounded">
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
          <div className="p-4 bg-background/90 rounded-xl border-2 border-[#8A2BE2] shadow-[4px_4px_0px_0px_#FF6B00]">
            <h4 className="font-creepster text-lg tracking-wider text-[#39FF14] mb-3">
              🔮 COVEN TELEPATHY & FAMILIAR DYNAMICS:
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-card rounded-md border border-[#8A2BE2] text-xs font-bold uppercase tracking-wider text-foreground hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                >
                  ✨ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
