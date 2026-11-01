import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { ChristmasProjectCard } from '@/themes/christmas/components/project-card';
import { ChristmasPersonalProjectCard } from '@/themes/christmas/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/christmas/ui/tabs';

export default function ChristmasProjects() {
  return (
    <section id="projects" className="w-full py-12 sm:py-20 border-b border-emerald-500/30 bg-[#061A0E]/60">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Portfolio Showcase
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Production systems, full-stack microservices, cloud applications, and developer tools delivered with high reliability.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-emerald-950/80 border border-emerald-500/30 p-1 rounded-xl">
              <TabsTrigger value="company" className="rounded-lg text-xs font-semibold px-4 py-2">
                Enterprise Projects ({COMPANY_PROJECTS_DATA.length})
              </TabsTrigger>
              <TabsTrigger value="personal" className="rounded-lg text-xs font-semibold px-4 py-2">
                Personal Projects ({PERSONAL_PROJECTS_DATA.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="company" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {COMPANY_PROJECTS_DATA.map((project) => (
                <ChristmasProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PERSONAL_PROJECTS_DATA.map((project) => (
                <ChristmasPersonalProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
