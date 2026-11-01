import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/themes/christmas/ui/card';
import { Badge } from '@/themes/christmas/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';

interface ProjectCardProps {
  project: CompanyProject;
}

export function ChristmasProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:-translate-y-1 transition-all duration-300">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 w-full border-b-2 border-[#165B33] overflow-hidden bg-black/10">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2 right-2 bg-[#D42426] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#F8B229] shadow-[0_0_8px_rgba(248,178,41,0.4)]">
            🎁 ENTERPRISE TOY
          </div>
        </div>
      )}

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-2xl">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs font-mono font-bold text-[#D42426] dark:text-[#F8B229]">
          {project.startDate && project.endDate ? `[ DELIVERY WINDOW: ${project.startDate} — ${project.endDate} ]` : '[ WORKSHOP DIRECTIVE ]'}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#165B33]/20">
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
