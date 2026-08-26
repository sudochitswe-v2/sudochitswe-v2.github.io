'use client';

import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { PersonalProjectCard } from '@/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="font-mono text-4xl font-bold tracking-tighter uppercase sm:text-6xl text-foreground">
              [04] Projects
            </h2>
            <p className="max-w-[900px] text-foreground font-medium md:text-xl">
              A collection of professional applications and open-source hobby projects I&apos;ve built.
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-8 flex flex-col items-center">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All ({COMPANY_PROJECTS_DATA.length + PERSONAL_PROJECTS_DATA.length})</TabsTrigger>
            <TabsTrigger value="company">Company ({COMPANY_PROJECTS_DATA.length})</TabsTrigger>
            <TabsTrigger value="personal">Hobby ({PERSONAL_PROJECTS_DATA.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            <div className="mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
              {COMPANY_PROJECTS_DATA.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrlId={project.imageUrlId}
                />
              ))}
              {PERSONAL_PROJECTS_DATA.map((project) => (
                <PersonalProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="company" className="w-full">
            <div className="mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
              {COMPANY_PROJECTS_DATA.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrlId={project.imageUrlId}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="w-full">
            <div className="mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
              {PERSONAL_PROJECTS_DATA.map((project) => (
                <PersonalProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
