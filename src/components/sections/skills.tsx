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
          <div className="space-y-4">
            <h2 className="font-mono text-4xl font-bold tracking-tighter uppercase sm:text-6xl text-foreground">
              [03] Skills
            </h2>
            <p className="max-w-[900px] text-foreground font-medium md:text-xl">
              A showcase of my technical abilities and personal strengths.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:max-w-5xl">
          <div className="space-y-6">
            <h3 className="flex items-center justify-center gap-2 font-mono uppercase text-2xl font-bold md:justify-start brutal-border-b-4 pb-2 border-foreground">
              <Code className="h-7 w-7 text-foreground" />
              Technical Skills
            </h3>
            {Object.entries(SKILLS_BY_LEVEL).map(([level, skills]) => (
              <div key={level}>
                <h4 className="mb-3 text-center font-mono uppercase text-lg font-bold text-foreground md:text-left">
                  {level}
                </h4>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={levelVariants[level]}
                      className="px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center justify-center gap-2 font-mono uppercase text-2xl font-bold md:justify-start brutal-border-b-4 pb-2 border-foreground">
              <BrainCircuit className="h-7 w-7 text-foreground" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start mt-6">
              {SOFT_SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-accent-pink text-white hover:bg-accent-pink"
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
