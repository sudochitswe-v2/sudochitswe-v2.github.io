import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Education
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic journey and qualifications.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-8 flex w-full items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}
              >
                <div className="rounded-lg bg-card p-4 shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="font-headline text-lg font-semibold text-primary">
                    {edu.institution}
                  </h3>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.years}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
