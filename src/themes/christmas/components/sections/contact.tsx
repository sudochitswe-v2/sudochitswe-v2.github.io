import ChristmasContactForm from '@/themes/christmas/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, Sparkles, Gift } from 'lucide-react';
import { Card } from '@/themes/christmas/ui/card';

export default function ChristmasContact() {
  const profile = getProfileData('christmas');

  return (
    <section id="contact" className="w-full py-12 sm:py-20 border-b-2 border-[#165B33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#165B33] text-[#F8B229] text-xs font-bold uppercase tracking-widest rounded-full border border-[#F8B229] shadow-[2px_2px_0px_0px_#D42426]">
            🎄 NORTH POLE POST OFFICE 🎄
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-[#D42426] dark:text-[#F8B229] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            WRITE TO SANTA&apos;S LEAD ARCHITECT
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Send high-priority dispatches, software engineering inquiries, and holiday wishes directly to Chit Swe.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Dispatch Form Card */}
          <Card className="p-6">
            <div className="mb-6 pb-3 border-b-2 border-[#165B33]">
              <h3 className="font-christmas text-3xl tracking-wide text-[#D42426] dark:text-[#F8B229]">
                🎁 LETTER TO THE NORTH POLE
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                [ DIRECT DISPATCH TO LEAD ARCHITECT ]
              </p>
            </div>
            <ChristmasContactForm />
          </Card>

          {/* Bureau Details Card */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="bg-[#165B33] text-white px-4 py-2 border-b-2 border-[#F8B229] -mx-6 -mt-6 mb-6 rounded-t-xl">
                <h3 className="font-bold text-xs tracking-wider uppercase font-sans">
                  ⭐ WORKSHOP POSTAL STATION
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#D42426] text-white rounded-xl shrink-0 border border-[#F8B229]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#D42426] dark:text-[#F8B229]">
                      WORKSHOP EMAIL
                    </h4>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-mono font-bold hover:underline text-foreground hover:text-[#165B33] dark:hover:text-[#52B788] transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#165B33] text-[#F8B229] rounded-xl shrink-0 border border-[#F8B229]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#D42426] dark:text-[#F8B229]">
                      NORTH POLE LOCATION
                    </h4>
                    <p className="text-sm font-medium text-foreground">
                      Remote • Worldwide Delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#F8B229] text-[#165B33] rounded-xl shrink-0 border border-[#D42426]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#D42426] dark:text-[#F8B229]">
                      HOLIDAY AVAILABILITY
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Accepting software architecture contracts, consulting, and engineering adventures for 2026 and beyond!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
