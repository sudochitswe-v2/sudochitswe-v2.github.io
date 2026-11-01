import { Badge } from '@/themes/christmas/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';

export default function ChristmasSkills() {
  const categoryTitles = {
    Expert: 'Advanced & Production Expertise',
    Intermediate: 'Core Frameworks & Tooling',
    Beginner: 'Emerging & Exploring',
  };

  return (
    <section id="skills" className="w-full py-12 sm:py-20 bg-[#061A0E]/60 border-b border-emerald-500/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Technical Toolkit
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Skills & Technologies
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Core developer craft, frontend architectures, resilient distributed microservices, and modern database platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof categoryTitles, string[]][]).map(
            ([level, skills]) => (
              <div key={level} className="festive-glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
                    <h3 className="font-semibold text-sm tracking-wide text-emerald-100">
                      {categoryTitles[level]}
                    </h3>
                    <span className="text-[10px] font-mono font-bold bg-emerald-950 border border-yellow-400/40 text-yellow-300 px-2 py-0.5 rounded-full">
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
          <div className="festive-glass-card p-6 rounded-2xl">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-yellow-300 mb-3 flex items-center gap-2">
              <span>❄️</span> Team Synergy & Collaborative Strengths:
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-medium text-emerald-200 hover:border-yellow-400/60 transition-colors"
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
