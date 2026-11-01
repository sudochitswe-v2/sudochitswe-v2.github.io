import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { SovietProjectCard } from '@/themes/soviet/components/project-card';
import { SovietPersonalProjectCard } from '@/themes/soviet/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/soviet/ui/tabs';

export default function SovietProjects() {
  return (
    <section id="projects" className="w-full py-12 sm:py-20 bg-card/30 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ FIVE-YEAR PRODUCTION DIRECTIVE ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            COMPLETED SYSTEMS & INITIATIVES
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Exhibition of delivered platforms, distributed databases, cloud microservices, and mobile applications.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="company">
                ★ STATE & ENTERPRISE PROJECTS ({COMPANY_PROJECTS_DATA.length})
              </TabsTrigger>
              <TabsTrigger value="personal">
                ★ INDEPENDENT INITIATIVES ({PERSONAL_PROJECTS_DATA.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="company" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {COMPANY_PROJECTS_DATA.map((project) => (
                <SovietProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PERSONAL_PROJECTS_DATA.map((project) => (
                <SovietPersonalProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
