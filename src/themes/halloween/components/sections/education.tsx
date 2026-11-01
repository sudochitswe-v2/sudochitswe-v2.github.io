import { EDUCATION_DATA } from '@/lib/data';
import { GraduationCap, Calendar } from 'lucide-react';

export default function HalloweenEducation() {
  return (
    <section id="education" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Academic Journey
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Education
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Scholastic foundations and formal degrees in computer science and software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="stone-slab-texture rounded-2xl border border-[#443D36] p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:border-orange-500/60 transition-all">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#443D36]">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Degree #{edu.id}
                </span>
                <GraduationCap className="h-4 w-4 text-orange-400" />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-stone-100 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-orange-400 font-mono">
                  {edu.institution}
                </p>
                <div className="pt-2 border-t border-[#443D36] flex items-center text-xs font-mono text-stone-400">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-orange-400" /> {edu.years}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
