import { Badge } from '@/themes/halloween/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Card, CardContent } from '@/themes/halloween/ui/card';

export default function HalloweenSkills() {
  const categoryTitles = {
    Expert: 'Advanced & Production Expertise',
    Intermediate: 'Core Frameworks & Tools',
    Beginner: 'Emerging & Exploring',
  };

  return (
    <section id="skills" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Technical Arsenal
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Skills & Technologies
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Core technologies, programming languages, and scalable architectures leveraged across production applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof categoryTitles, string[]][]).map(
            ([level, skills]) => (
              <div key={level} className="tombstone-slab p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#484139]">
                    <h3 className="font-semibold text-sm tracking-wide text-stone-200">
                      {categoryTitles[level]}
                    </h3>
                    <span className="text-[10px] font-mono font-bold bg-[#26211C] border border-orange-500/50 text-orange-400 px-2 py-0.5 rounded-full">
                      {level}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={level === 'Expert' ? 'default' : level === 'Intermediate' ? 'secondary' : 'outline'}
                        className="text-xs font-mono font-medium hover:scale-105 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-8">
          <div className="stone-slab-texture p-6 rounded-2xl border border-[#443D36] shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-green-400 mb-3 flex items-center gap-2">
              <span>🔮</span> Collaborative & Professional Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="stone-btn px-3 py-1.5 rounded-lg text-xs font-medium text-stone-200 transition-colors"
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
