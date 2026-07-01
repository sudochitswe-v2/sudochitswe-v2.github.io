import { PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLinkIcon } from 'lucide-react'

type PersonalProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    demoUrl?: string;
    imageUrl?: string;
};

export function PersonalProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    demoUrl,
    imageUrl
}: PersonalProjectCardProps) {
    return (
        <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                {imageUrl ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                        <Image
                            src={imageUrl}
                            alt={`${title} - Personal project by Chit Swe - ${description}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <div></div>
                )}
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <div className="flex gap-3">
                    {/* <SiGithub color="currentColor" size={20} /> */}
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        <SiGithub size={20} />
                    </a>
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                            <ExternalLinkIcon className="mr-2" size={20} />
                            <span>Live</span>
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}