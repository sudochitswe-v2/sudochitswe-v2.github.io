import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/themes/soviet/ui/card';
import { Badge } from '@/themes/soviet/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { CompanyProject } from '@/types/portfolio';

interface ProjectCardProps {
  project: CompanyProject;
}

export function SovietProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageUrlId);

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 w-full border-b-2 border-[#B81414] overflow-hidden bg-black/10">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover contrast-110 sepia-[0.2]"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute top-2 right-2 bg-[#B81414] text-[#FFC82C] px-2 py-0.5 text-[10px] font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ ENTERPRISE
          </div>
        </div>
      )}

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-xl">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs font-mono font-bold text-[#B81414] dark:text-[#FFC82C]">
          {project.startDate && project.endDate ? `[ PERIOD: ${project.startDate} — ${project.endDate} ]` : '[ STATE DIRECTIVE ]'}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
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
