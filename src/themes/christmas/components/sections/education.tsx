import { EDUCATION_DATA } from '@/lib/data';
import { GraduationCap, Calendar } from 'lucide-react';

export default function ChristmasEducation() {
  return (
    <section id="education" className="w-full py-12 sm:py-20 border-b border-emerald-500/30 bg-[#061A0E]/60">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Academic Journey
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Education
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Scholastic foundations and formal degrees in computer science and software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="festive-glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-400/60 transition-all">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Degree #{edu.id}
                </span>
                <GraduationCap className="h-4 w-4 text-yellow-400" />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-emerald-100 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-yellow-300 font-mono">
                  {edu.institution}
                </p>
                <div className="pt-2 border-t border-emerald-500/20 flex items-center text-xs font-mono text-emerald-300/80">
                  <Calendar className="mr-1.5 h-3.5 w-3.5 text-yellow-400" /> {edu.years}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
