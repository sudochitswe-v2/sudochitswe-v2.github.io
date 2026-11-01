import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/themes/halloween/ui/card';
import { Badge } from '@/themes/halloween/ui/badge';
import { Button } from '@/themes/halloween/ui/button';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import type { PersonalProject } from '@/types/portfolio';

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function HalloweenPersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:-translate-y-1 transition-all duration-300">
      {/* Optional Project Image */}
      {project.imageUrl && (
        <div className="relative h-44 w-full border-b-2 border-[#8A2BE2] overflow-hidden bg-black/40">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-110 saturate-125"
          />
          <div className="absolute top-2 right-2 bg-[#FF6B00] text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-[#8A2BE2]">
            👻 INVOCATION
          </div>
        </div>
      )}

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-xl">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#8A2BE2]/40">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex gap-2">
        {project.githubUrl && (
          <Button asChild size="sm" variant="outline" className="flex-1 text-[11px]">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <SiGithub className="mr-1.5 h-3.5 w-3.5" /> REPOSITORY
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button asChild size="sm" variant="secondary" className="flex-1 text-[11px]">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> TEST POTION
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
