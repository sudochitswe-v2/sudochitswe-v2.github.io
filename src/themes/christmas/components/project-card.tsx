import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: CompanyProject;
}

export function ChristmasProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/90 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-yellow-400/70 hover:shadow-[0_0_25px_rgba(248,178,41,0.3)] hover:-translate-y-1 group">
      {/* Thumbnail container */}
      {image?.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-emerald-500/20 bg-black/40">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-950/90 text-yellow-300 border border-yellow-400/40 shadow-md">
            🎁 Enterprise
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-christmas text-3xl font-bold text-red-400 dark:text-yellow-400 tracking-wide group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
          </div>
          {(project.startDate || project.endDate) && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-200/80 mb-3">
              <Calendar className="h-3 w-3 text-yellow-400" />
              <span>{project.startDate} — {project.endDate}</span>
            </div>
          )}
          <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Technology badges */}
        <div className="pt-3 border-t border-emerald-500/20">
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
        </div>
      </div>
    </div>
  );
}
