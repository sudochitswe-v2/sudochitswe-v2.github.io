import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrlId?: string; // Make this optional
  startDate?: string;
  endDate?: string;
};

const getImageById = (id?: string): ImagePlaceholder | undefined => {
  if (!id) return undefined;
  return PlaceHolderImages.find((img) => img.id === id);
};

export function ProjectCard({ title, description, technologies, imageUrlId, startDate, endDate }: ProjectCardProps) {
  const image = getImageById(imageUrlId);
  return (
    <Card className="flex h-full flex-col p-0 overflow-hidden retro-panel transition-none">
      <div className="bg-[#000080] p-2 flex justify-between items-center border-b-2 border-border-bevel">
        <CardTitle className="font-headline text-lg font-bold text-white uppercase">{title}</CardTitle>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
          <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
          <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] flex items-center justify-center font-bold text-black text-[10px]">X</div>
        </div>
      </div>
      <CardHeader className="pt-4 pb-2 bg-[#c0c0c0]">
        {(startDate || endDate) && (
          <p className="text-sm font-bold text-black uppercase">
              {startDate} — {endDate}  
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-grow space-y-4 bg-[#c0c0c0]">
        {image?.imageUrl ? (
          <div className="relative aspect-video w-full overflow-hidden border-4 border-black border-r-white border-b-white">
            <Image
              src={image.imageUrl}
              alt={`${title} - Project by Chit Swe - ${image.description || description}`}
              fill
              className="object-cover grayscale contrast-125 transition-all duration-300 hover:grayscale-0 hover:contrast-100"
              data-ai-hint={image.imageHint}
            />
            <div className="retro-scanlines"></div>
          </div>
        ) : (
          <div></div>
        )}
        <CardDescription className="text-black font-bold font-body">{description}</CardDescription>
      </CardContent>
      <CardFooter className="bg-[#c0c0c0] pb-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
