import Image from 'next/image';
import { Button } from '@/themes/christmas/ui/button';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import type { PersonalProject } from '@/types/portfolio';

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function ChristmasPersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/90 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-yellow-400/70 hover:shadow-[0_0_25px_rgba(248,178,41,0.3)] hover:-translate-y-1 group">
      {/* Optional image */}
      {project.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-emerald-500/20 bg-black/40">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-yellow-950/90 text-yellow-300 border border-yellow-400/40 shadow-md">
            ⭐ Open Source
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
        <div>
          <h3 className="font-christmas text-3xl font-bold text-red-400 dark:text-yellow-400 tracking-wide group-hover:text-emerald-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-3 border-t border-emerald-500/20">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="flex-1 text-xs rounded-xl border-emerald-500/40 bg-emerald-950/60 text-emerald-200 hover:text-yellow-300 hover:border-yellow-400">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <SiGithub className="mr-1.5 h-3.5 w-3.5" /> Source
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild size="sm" className="flex-1 text-xs rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold border border-yellow-400/50 shadow-md">
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
