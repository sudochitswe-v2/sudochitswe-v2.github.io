import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="font-mono text-4xl font-bold tracking-tighter uppercase sm:text-6xl text-foreground">
              [06] Education
            </h2>
            <p className="max-w-[900px] text-foreground font-medium md:text-xl">
              My academic journey and qualifications.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl border-l-4 border-foreground pl-8">
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.id}
              className="relative mb-12 flex w-full flex-col items-start"
            >
              <div className="absolute -left-[54px] top-4 z-10 flex h-10 w-10 items-center justify-center brutal-border bg-accent-blue text-black brutal-shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="w-full">
                <div className="brutal-border bg-card p-6 brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-none">
                  <h3 className="font-mono text-2xl font-bold text-foreground uppercase">
                    {edu.institution}
                  </h3>
                  <p className="font-mono font-bold text-accent-blue uppercase">{edu.degree}</p>
                  <div className="mt-2 inline-block bg-foreground text-background font-mono text-sm px-2 py-1">
                    {edu.years}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
