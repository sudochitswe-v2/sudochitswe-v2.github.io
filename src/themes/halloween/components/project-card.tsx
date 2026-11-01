import Image from 'next/image';
import { Badge } from '@/themes/halloween/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: CompanyProject;
}

export function HalloweenProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <div className="stone-slab-texture rounded-2xl border border-[#443D36] flex flex-col h-full overflow-hidden shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:border-orange-500/80 hover:-translate-y-1 transition-all duration-300">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 w-full border-b border-[#443D36] overflow-hidden bg-black/40">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-105"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2 right-2 bg-[#26211C]/90 text-orange-400 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/50 shadow-[0_0_8px_rgba(255,107,0,0.3)]">
            Enterprise
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-lg font-bold text-stone-100">
              {project.title}
            </h3>
          </div>
          {project.startDate && project.endDate && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 mb-3">
              <Calendar className="h-3 w-3 text-orange-400" />
              <span>{project.startDate} — {project.endDate}</span>
            </div>
          )}
          <p className="text-sm text-stone-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#443D36]">
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
