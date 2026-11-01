import Image from 'next/image';
import { Badge } from '@/themes/christmas/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: CompanyProject;
}

export function ChristmasProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <div className="festive-glass-card rounded-2xl flex flex-col h-full overflow-hidden hover:border-yellow-400/80 hover:-translate-y-1 transition-all duration-300">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 w-full border-b border-emerald-500/30 overflow-hidden bg-black/20">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2 right-2 bg-red-950/90 text-yellow-300 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_8px_rgba(248,178,41,0.3)]">
            Enterprise
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-emerald-100 mb-1">
            {project.title}
          </h3>
          {project.startDate && project.endDate && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-300/80 mb-3">
              <Calendar className="h-3 w-3 text-yellow-400" />
              <span>{project.startDate} — {project.endDate}</span>
            </div>
          )}
          <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/20">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
