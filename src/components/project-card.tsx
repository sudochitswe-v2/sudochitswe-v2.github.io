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
};

const getImageById = (id?: string): ImagePlaceholder | undefined => {
  if (!id) return undefined;
  return PlaceHolderImages.find((img) => img.id === id);
};

export function ProjectCard({ title, description, technologies, imageUrlId }: ProjectCardProps) {
  const image = getImageById(imageUrlId);
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {image?.imageUrl ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
              src={image.imageUrl}
              alt={`${title} - Project by Chit Swe - ${image.description || description}`}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        ) : (
          <div></div>
        )}
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
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
