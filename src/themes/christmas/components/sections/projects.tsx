'use client';

import { COMPANY_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from '@/lib/data';
import { ChristmasProjectCard } from '@/themes/christmas/components/project-card';
import { ChristmasPersonalProjectCard } from '@/themes/christmas/components/personal-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/themes/christmas/ui/tabs';

export default function ChristmasProjects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-gradient-to-b from-[#061A0E] via-[#092213] to-[#061A0E] relative overflow-hidden border-b border-emerald-500/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/90 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_10px_rgba(248,178,41,0.2)]">
            🎄 Portfolio Showcase
          </span>
          <h2 className="font-christmas text-5xl sm:text-7xl text-red-500 dark:text-yellow-400 tracking-wide drop-shadow-[0_0_15px_rgba(212,36,38,0.4)]">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-emerald-100/80 text-sm md:text-base font-medium">
            Production systems, full-stack microservices, cloud applications, and developer tools delivered with high reliability.
          </p>
        </div>

        {/* Themed Tabs */}
        <Tabs defaultValue="company" className="mt-6 flex flex-col items-center">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-emerald-950/80 border border-emerald-500/40 p-1.5 rounded-full shadow-lg">
            <TabsTrigger
              value="company"
              className="rounded-full text-xs font-bold uppercase tracking-wider data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-rose-600 data-[state=active]:text-white transition-all py-2"
            >
              Enterprise ({COMPANY_PROJECTS_DATA.length})
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="rounded-full text-xs font-bold uppercase tracking-wider data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-rose-600 data-[state=active]:text-white transition-all py-2"
            >
              Personal ({PERSONAL_PROJECTS_DATA.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="w-full mt-10">
            <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-6xl">
              {COMPANY_PROJECTS_DATA.map((project) => (
                <ChristmasProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="w-full mt-10">
            <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-6xl">
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
