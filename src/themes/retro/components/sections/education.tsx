import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-neon-cyan retro-glow uppercase">
                 EDUCATION LOG   
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.id}
              className="retro-panel p-6 bg-black"
            >
              <div className="mb-4 border-b-2 border-border-bevel pb-2">
                <h3 className="font-headline text-xl font-bold text-neon-yellow">
                  {edu.institution}
                </h3>
                <p className="font-bold text-neon-magenta mt-1">{edu.degree}</p>
              </div>
              <p className="text-neon-lime text-sm mb-4">LOG_DATE: {edu.years}</p>
              <p className="text-star-white font-body">
                {`> `}Status: Completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
