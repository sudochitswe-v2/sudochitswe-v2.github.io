import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { ChristmasProjectCard } from '@/themes/christmas/components/project-card';
import { ChristmasPersonalProjectCard } from '@/themes/christmas/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/christmas/ui/tabs';

export default function ChristmasProjects() {
  return (
    <section id="projects" className="w-full py-12 sm:py-20 bg-card/30 border-b-2 border-[#165B33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#165B33] text-[#F8B229] text-xs font-bold uppercase tracking-widest rounded-full border border-[#F8B229] shadow-[2px_2px_0px_0px_#D42426]">
            🎄 DELIVERED TOYS & WORKSHOP SYSTEMS 🎄
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-[#D42426] dark:text-[#F8B229] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            COMPLETED SYSTEMS & INVENTIONS
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Exhibition of high-traffic production platforms, global gift pipelines, and robust web applications.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="company">
                🎁 ENTERPRISE WORKSHOP SYSTEMS ({COMPANY_PROJECTS_DATA.length})
              </TabsTrigger>
              <TabsTrigger value="personal">
                ⭐ ELVEN CREATIONS ({PERSONAL_PROJECTS_DATA.length})
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
