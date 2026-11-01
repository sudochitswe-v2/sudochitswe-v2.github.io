import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { HalloweenProjectCard } from '@/themes/halloween/components/project-card';
import { HalloweenPersonalProjectCard } from '@/themes/halloween/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/halloween/ui/tabs';

export default function HalloweenProjects() {
  return (
    <section id="projects" className="w-full py-12 sm:py-20 bg-card/30 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 GRIMOIRE OF WORKS 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            CONJURED SYSTEMS & ARTIFACTS
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Gallery of enchanted production fortresses, high-throughput cloud cauldrons, and bewitched client experiences.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="company">
                🎃 COVEN & REALM SYSTEMS ({COMPANY_PROJECTS_DATA.length})
              </TabsTrigger>
              <TabsTrigger value="personal">
                👻 CURSED EXPERIMENTS ({PERSONAL_PROJECTS_DATA.length})
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
