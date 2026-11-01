import Image from 'next/image';
import { Badge } from '@/themes/christmas/ui/badge';
import { Button } from '@/themes/christmas/ui/button';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import type { PersonalProject } from '@/types/portfolio';

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function ChristmasPersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <div className="festive-glass-card rounded-2xl flex flex-col h-full overflow-hidden hover:border-yellow-400/80 hover:-translate-y-1 transition-all duration-300">
      {/* Optional Project Image */}
      {project.imageUrl && (
        <div className="relative h-44 w-full border-b border-emerald-500/30 overflow-hidden bg-black/20">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-yellow-400 text-emerald-950 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-[0_0_8px_rgba(248,178,41,0.4)]">
            Open Source
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-emerald-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 pb-4 border-b border-emerald-500/20">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] font-mono">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="flex-1 text-xs rounded-xl border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-300 hover:border-yellow-400">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <SiGithub className="mr-1.5 h-3.5 w-3.5" /> Source
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild size="sm" className="flex-1 text-xs rounded-xl bg-red-600 hover:bg-red-700 text-white border border-yellow-400/50">
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
