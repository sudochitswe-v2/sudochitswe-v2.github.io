import { EXPERIENCE_DATA } from '@/lib/data';
import { Calendar, Briefcase } from 'lucide-react';

export default function ChristmasExperience() {
  return (
    <section id="experiences" className="w-full py-12 sm:py-20 border-b border-emerald-500/30 bg-[#061A0E]/60">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Career Record
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Chronological record of roles, duties, and delivered software systems across enterprise teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="festive-glass-card rounded-2xl p-6 hover:border-yellow-400/60 transition-all">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-red-950/60 border border-red-500/40 text-yellow-400 flex items-center justify-center shrink-0">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-emerald-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-yellow-300 font-mono font-semibold">
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <Calendar className="h-3.5 w-3.5 text-yellow-400" />
                  <span>{exp.years}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm font-normal text-emerald-100/90 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
