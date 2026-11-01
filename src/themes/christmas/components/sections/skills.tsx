import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Sparkles, Bell, Gift } from 'lucide-react';

export default function ChristmasSkills() {
  const trayConfig = {
    Expert: {
      title: 'Production & Architecture (Expert)',
      icon: '🎁',
      tagColor: 'border-red-500/50 bg-red-950/40 text-red-200 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(248,178,41,0.4)]',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    },
    Intermediate: {
      title: 'Core Frameworks & Tools (Intermediate)',
      icon: '🧸',
      tagColor: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(22,91,51,0.4)]',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
    Beginner: {
      title: 'Emerging & Exploration (Labs)',
      icon: '🛷',
      tagColor: 'border-yellow-500/50 bg-yellow-950/40 text-yellow-200 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(248,178,41,0.4)]',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    },
  };

  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-gradient-to-b from-[#061A0E] via-[#092213] to-[#061A0E] relative overflow-hidden border-b border-emerald-500/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/90 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_10px_rgba(248,178,41,0.2)]">
            🎄 Technical Toolkit
          </span>
          <h2 className="font-christmas text-5xl sm:text-7xl text-red-500 dark:text-yellow-400 tracking-wide drop-shadow-[0_0_15px_rgba(212,36,38,0.4)]">
            Skills & Technologies
          </h2>
          <p className="max-w-[700px] text-emerald-100/80 text-sm md:text-base font-medium">
            Fine-tuned developer craft, resilient distributed microservices, and modern frontend platforms built to deliver under high load.
          </p>
        </div>

        {/* Workshop Trays Grid */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {(Object.entries(SKILLS_BY_LEVEL) as [keyof typeof trayConfig, string[]][]).map(
            ([level, skills]) => {
              const cfg = trayConfig[level];
              return (
                <div
                  key={level}
                  className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/80 backdrop-blur-md p-6 shadow-xl hover:border-yellow-400/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Tray Banner */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{cfg.icon}</span>
                        <h3 className="font-headline font-bold text-sm tracking-wide text-yellow-300">
                          {cfg.title}
                        </h3>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cfg.badgeColor}`}>
                        Tier {level === 'Expert' ? 'I' : level === 'Intermediate' ? 'II' : 'III'}
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all duration-200 cursor-default hover:scale-105 ${cfg.tagColor}`}
                        >
                          <Sparkles className="h-3 w-3 opacity-60" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-10 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/60 backdrop-blur-md p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-yellow-400 animate-bounce" />
              <h3 className="font-headline font-bold text-sm tracking-wide text-yellow-300 uppercase">
                Team Synergy & Collaborative Strengths (Soft Skills)
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-100 hover:border-yellow-400 hover:text-yellow-300 hover:shadow-[0_0_12px_rgba(248,178,41,0.3)] transition-all cursor-default"
                >
                  <Gift className="h-3 w-3 text-red-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
