import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/themes/soviet/ui/card';
import { Badge } from '@/themes/soviet/ui/badge';
import { Button } from '@/themes/soviet/ui/button';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import type { PersonalProject } from '@/types/portfolio';

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function SovietPersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
      {/* Optional Project Image */}
      {project.imageUrl && (
        <div className="relative h-44 w-full border-b-2 border-[#B81414] overflow-hidden bg-black/10">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-110 sepia-[0.2]"
          />
          <div className="absolute top-2 right-2 bg-[#FFC82C] text-[#7A0000] px-2 py-0.5 text-[10px] font-headline font-bold uppercase tracking-widest border border-[#B81414]">
            ★ INITIATIVE
          </div>
        </div>
      )}

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-lg">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
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
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> INSPECT LIVE
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
