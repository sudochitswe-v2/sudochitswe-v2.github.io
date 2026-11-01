import HalloweenContactForm from '@/themes/halloween/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, Skull, Sparkles } from 'lucide-react';
import { Card } from '@/themes/halloween/ui/card';

export default function HalloweenContact() {
  const profile = getProfileData('halloween');

  return (
    <section id="contact" className="w-full py-12 sm:py-20 border-b-2 border-[#8A2BE2]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#8A2BE2] text-[#FF6B00] text-xs font-bold uppercase tracking-widest rounded-md border border-[#FF6B00] shadow-[2px_2px_0px_0px_#FF6B00]">
            🎃 SEANCE PARLOR & TELEGRAPH 🎃
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-[#FF6B00] sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            SUMMON THE CODE NECROMANCER
          </h2>
          <p className="max-w-[700px] text-muted-foreground font-medium">
            Open an ethereal communication channel with Chit Swe. Whether you seek system exorcisms, full-stack necromancy, or new ventures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Dispatch Form Card */}
          <Card className="p-6">
            <div className="mb-6 pb-3 border-b-2 border-[#8A2BE2]">
              <h3 className="font-creepster text-2xl tracking-wider text-[#FF6B00]">
                🕸️ SEANCE DISPATCH SCROLL
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                [ SPECTRAL TRANSMISSION TO MASTER SORCERER ]
              </p>
            </div>
            <HalloweenContactForm />
          </Card>

          {/* Bureau Details Card */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="bg-[#8A2BE2] text-[#FF6B00] px-4 py-2 border-b-2 border-[#FF6B00] -mx-6 -mt-6 mb-6 rounded-t-lg">
                <h3 className="font-bold text-xs tracking-wider uppercase font-sans">
                  🔮 SPIRIT SANCTUM & SANCTUARY
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#8A2BE2] text-[#FF6B00] rounded-lg shrink-0 border border-[#FF6B00]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#FF6B00]">
                      ASTRAL EMAIL INBOX
                    </h4>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-mono font-bold hover:underline text-foreground hover:text-[#39FF14] transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#8A2BE2] text-[#FF6B00] rounded-lg shrink-0 border border-[#FF6B00]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#FF6B00]">
                      CRYPT LAIR / REALM
                    </h4>
                    <p className="text-sm font-medium text-foreground">
                      Remote • Global Realm Coverage
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#8A2BE2] text-[#39FF14] rounded-lg shrink-0 border border-[#FF6B00]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#FF6B00]">
                      SUMMONING PROTOCOL
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Available for remote curses, architectural conjuring, and contracts across all mortal timezones.
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
