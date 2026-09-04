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
        <Card className="flex h-full flex-col p-0 overflow-hidden retro-panel transition-none">
            <div className="bg-[#000080] p-2 flex justify-between items-center border-b-2 border-border-bevel">
                <CardTitle className="font-headline text-lg font-bold text-white uppercase">{title}</CardTitle>
                <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
                    <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
                    <div className="w-4 h-4 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] flex items-center justify-center font-bold text-black text-[10px]">X</div>
                </div>
            </div>
            <CardContent className="flex-grow space-y-4 pt-4 bg-[#c0c0c0]">
                {imageUrl ? (
                    <div className="relative aspect-video w-full overflow-hidden border-4 border-black border-r-white border-b-white">
                        <Image
                            src={imageUrl}
                            alt={`${title} - Personal project by Chit Swe - ${description}`}
                            fill
                            className="object-cover grayscale contrast-125 transition-all duration-300 hover:grayscale-0 hover:contrast-100"
                        />
                        <div className="retro-scanlines"></div>
                    </div>
                ) : (
                    <div></div>
                )}
                <CardDescription className="text-black font-bold font-body">{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 bg-[#c0c0c0] pb-6">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <div className="flex gap-3 mt-4 w-full justify-between">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-bevel-btn px-4 py-2 text-sm flex items-center gap-2"
                    >
                        <SiGithub size={20} /> [CODE]
                    </a>
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="retro-bevel-btn px-4 py-2 text-sm flex items-center gap-2"
                        >
                            <ExternalLinkIcon size={20} /> [DEMO]
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}