import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/themes/halloween/ui/card';
import { Badge } from '@/themes/halloween/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';

interface ProjectCardProps {
  project: CompanyProject;
}

export function HalloweenProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:-translate-y-1 transition-all duration-300">
      {/* Project Image with eerie overlay */}
      {image && (
        <div className="relative h-48 w-full border-b-2 border-[#8A2BE2] overflow-hidden bg-black/40">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-110 saturate-125"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2 right-2 bg-[#8A2BE2]/90 text-[#FF6B00] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-[#FF6B00] shadow-[0_0_8px_rgba(255,107,0,0.4)]">
            🎃 ENCHANTED
          </div>
        </div>
      )}

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-xl">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs font-mono font-bold text-[#FF6B00]">
          {project.startDate && project.endDate ? `[ TIMELINE: ${project.startDate} — ${project.endDate} ]` : '[ COVEN CONSTRUCT ]'}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#8A2BE2]/40">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
