import Image from 'next/image';
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
    <div className="stone-slab-texture rounded-2xl border border-[#443D36] flex flex-col h-full overflow-hidden shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:border-orange-500/80 hover:-translate-y-1 transition-all duration-300">
      {/* Optional Project Image */}
      {project.imageUrl && (
        <div className="relative h-44 w-full border-b border-[#443D36] overflow-hidden bg-black/40">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-105"
          />
          <div className="absolute top-2 right-2 bg-orange-500/90 text-black px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-[0_0_8px_rgba(255,107,0,0.4)]">
            Open Source
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-stone-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[#443D36]">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] font-mono">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="stone-btn flex-1 text-xs">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <SiGithub className="mr-1.5 h-3.5 w-3.5" /> Source
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild size="sm" className="stone-btn-ember flex-1 text-xs">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
