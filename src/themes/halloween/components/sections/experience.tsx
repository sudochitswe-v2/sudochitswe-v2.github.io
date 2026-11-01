import { EXPERIENCE_DATA } from '@/lib/data';
import { Calendar, Briefcase } from 'lucide-react';

export default function HalloweenExperience() {
  return (
    <section id="experiences" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Career Journey
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Chronological log of full-stack engineering roles, core backend contributions, and high-impact software deliveries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="stone-slab-texture rounded-2xl border border-[#443D36] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:border-orange-500/60 transition-all">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-[#443D36]">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#26211C] border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-stone-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-orange-400 font-mono font-semibold">
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 bg-[#26211C] px-2.5 py-1 rounded-full border border-[#443D36]">
                  <Calendar className="h-3.5 w-3.5 text-orange-400" />
                  <span>{exp.years}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm font-normal text-stone-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
