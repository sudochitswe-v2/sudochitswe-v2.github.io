import SovietContactForm from '@/themes/soviet/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, Radio, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/themes/soviet/ui/card';

export default function SovietContact() {
  const profile = getProfileData('soviet');

  return (
    <section id="contact" className="w-full py-12 sm:py-20 border-b-4 border-[#B81414]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#B81414] text-[#FFC82C] text-xs font-headline font-bold uppercase tracking-widest border border-[#FFC82C]">
            ★ COMMUNICATIONS COMMISSARIAT ★
          </div>
          <h2 className="font-headline text-3xl font-extrabold uppercase tracking-tight text-[#B81414] dark:text-[#FFC82C] sm:text-4xl md:text-5xl">
            OFFICIAL TELEGRAPH & DISPATCH
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Direct high-priority communication line with Comrade Chit Swe. Directives, engineering consultations, and career inquiries are welcomed.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Dispatch Form Card */}
          <Card className="p-6">
            <div className="mb-6 pb-3 border-b-2 border-[#B81414]">
              <h3 className="font-headline text-xl font-bold uppercase text-[#B81414] dark:text-[#FFC82C]">
                ★ TELEGRAM DISPATCH FORM
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                [ SECURE CITIZEN TO ENGINEER DIRECT CHANNEL ]
              </p>
            </div>
            <SovietContactForm />
          </Card>

          {/* Bureau Details Card */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="bg-[#B81414] text-[#FFC82C] px-4 py-2 border-b-2 border-[#FFC82C] -mx-6 -mt-6 mb-6">
                <h3 className="font-headline font-bold text-sm tracking-wider uppercase">
                  ★ OFFICIAL POST & TRANSMISSION POST
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#B81414] text-[#FFC82C] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xs font-bold uppercase text-[#B81414] dark:text-[#FFC82C]">
                      OFFICIAL ELECTRONIC POST
                    </h4>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-mono font-bold hover:underline text-foreground"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#B81414] text-[#FFC82C] shrink-0">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xs font-bold uppercase text-[#B81414] dark:text-[#FFC82C]">
                      RESPONSE PROTOCOL
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      All valid dispatches processed within 24 hours of transmission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#B81414] text-[#FFC82C] shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xs font-bold uppercase text-[#B81414] dark:text-[#FFC82C]">
                      ENGAGEMENT CLEARANCE
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      Open to enterprise contracts, high-scale backend architecture, and full-stack software leadership.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Propaganda Stamp Banner */}
            <div className="p-4 bg-[#B81414] text-[#FFC82C] border-2 border-[#FFC82C] shadow-[4px_4px_0px_0px_#4A0000] text-center space-y-1">
              <span className="text-2xl">★ ★ ★</span>
              <p className="font-headline text-xs font-bold uppercase tracking-widest">
                GLORY TO RESOLUTE ARCHITECTURE AND BULLETPROOF SOFTWARE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
