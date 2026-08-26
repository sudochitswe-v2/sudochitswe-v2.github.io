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
        <Card className="flex h-full flex-col overflow-hidden brutal-hover bg-card">
            {imageUrl ? (
                <div className="relative aspect-video w-full border-b-4 border-foreground">
                    <Image
                        src={imageUrl}
                        alt={`${title} - Personal project by Chit Swe - ${description}`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            ) : (
                <div className="h-4 border-b-4 border-foreground bg-accent-pink"></div>
            )}
            <CardHeader>
                <CardTitle className="font-mono text-2xl font-bold uppercase">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-foreground text-base font-medium">{description}</CardDescription>
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
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center brutal-border px-4 py-2 text-sm font-bold font-mono uppercase bg-accent-yellow text-black brutal-shadow-sm brutal-hover"
                    >
                        <SiGithub size={20} />
                    </a>
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center brutal-border px-4 py-2 text-sm font-bold font-mono uppercase bg-white text-black brutal-shadow-sm brutal-hover"
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