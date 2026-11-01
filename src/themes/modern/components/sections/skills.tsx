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
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my technical abilities and personal strengths.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
          <div className="space-y-6">
            <h3 className="flex items-center justify-center gap-2 font-headline text-2xl font-semibold md:justify-start">
              <Code className="h-7 w-7 text-primary" />
              Technical Skills
            </h3>
            {Object.entries(SKILLS_BY_LEVEL).map(([level, skills]) => (
              <div key={level}>
                <h4 className="mb-3 text-center font-headline text-xl font-semibold text-muted-foreground md:text-left">
                  {level}
                </h4>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={levelVariants[level]}
                      className="transform-gpu cursor-default px-4 py-2 text-sm transition-transform hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center justify-center gap-2 font-headline text-2xl font-semibold md:justify-start">
              <BrainCircuit className="h-7 w-7 text-accent" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {SOFT_SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="transform-gpu cursor-default px-4 py-2 text-sm transition-transform hover:scale-105"
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
