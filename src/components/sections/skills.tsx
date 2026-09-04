import { Badge } from '@/components/ui/badge';
import { SKILLS_BY_LEVEL, SOFT_SKILLS } from '@/lib/data';
import { Code, BrainCircuit } from 'lucide-react';

const levelVariants: { [key: string]: 'default' | 'secondary' | 'outline' } = {
  Expert: 'default',
  Intermediate: 'secondary',
  Beginner: 'outline',
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-neon-yellow retro-glow uppercase">
                 SKILLS.DAT   
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
          <div className="space-y-6 retro-panel p-6">
            <h3 className="font-headline text-2xl font-bold md:justify-start uppercase text-neon-cyan mb-4 border-b-2 border-border-bevel pb-2">
              [ TECHNICAL SKILLS ]
            </h3>
            {Object.entries(SKILLS_BY_LEVEL).map(([level, skills]) => (
              <div key={level} className="mb-6">
                <h4 className="mb-3 text-center font-bold text-neon-lime md:text-left uppercase">
                  {level}_
                </h4>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={levelVariants[level]}
                      className="cursor-default px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4 retro-panel p-6">
            <h3 className="font-headline text-2xl font-bold md:justify-start uppercase text-neon-magenta mb-4 border-b-2 border-border-bevel pb-2">
              [ SOFT SKILLS ]
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {SOFT_SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-default px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
