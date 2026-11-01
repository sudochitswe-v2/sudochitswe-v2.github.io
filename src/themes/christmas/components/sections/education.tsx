import { EDUCATION_DATA } from '@/lib/data';
import { GraduationCap, Calendar, Sparkles } from 'lucide-react';

export default function ChristmasEducation() {
  return (
    <section id="education" className="w-full py-16 md:py-24 bg-gradient-to-b from-[#061A0E] via-[#092213] to-[#061A0E] relative overflow-hidden border-b border-emerald-500/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/90 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_10px_rgba(248,178,41,0.2)]">
            🎄 Academic Journey
          </span>
          <h2 className="font-christmas text-5xl sm:text-7xl text-red-500 dark:text-yellow-400 tracking-wide drop-shadow-[0_0_15px_rgba(212,36,38,0.4)]">
            Education
          </h2>
          <p className="max-w-[700px] text-emerald-100/80 text-sm md:text-base font-medium">
            Scholastic foundations completed in software engineering, computing disciplines, and distributed systems.
          </p>
        </div>

        {/* Center-Line Timeline */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-yellow-400 via-red-500 to-emerald-400 shadow-[0_0_10px_rgba(248,178,41,0.5)] hidden sm:block" />

          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 flex w-full items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0 ? 'sm:pr-10 text-left sm:text-right' : 'sm:pl-10 text-left'
                }`}
              >
                <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/90 backdrop-blur-md p-6 shadow-xl hover:border-yellow-400/60 hover:shadow-[0_0_25px_rgba(248,178,41,0.25)] transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-200 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30">
                      <Calendar className="h-3 w-3 text-yellow-400" />
                      {edu.years}
                    </span>
                  </div>

                  <h3 className="font-christmas text-3xl font-bold text-red-400 dark:text-yellow-400 tracking-wide group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="mt-1 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                    {edu.institution}
                  </p>

                  <div className={`mt-3.5 pt-3 border-t border-emerald-500/20 flex items-center gap-2 text-[11px] font-mono text-emerald-300/80 ${index % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    <span>Degree Diploma #{edu.id} Validated</span>
                  </div>
                </div>
              </div>

              {/* Center Graduation Milestone Node */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform hidden sm:block">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-950 border-2 border-yellow-400 text-yellow-400 shadow-[0_0_15px_rgba(248,178,41,0.5)]">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
