import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { HalloweenProjectCard } from '@/themes/halloween/components/project-card';
import { HalloweenPersonalProjectCard } from '@/themes/halloween/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/halloween/ui/tabs';

export default function HalloweenProjects() {
  return (
    <section id="projects" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Portfolio Showcase
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Production systems, full-stack microservices, cloud applications, and developer tools delivered with high reliability.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#1C1916] border border-[#443D36] p-1 rounded-xl">
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
                <HalloweenProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PERSONAL_PROJECTS_DATA.map((project) => (
                <HalloweenPersonalProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
