import HalloweenContactForm from '@/themes/halloween/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, Sparkles } from 'lucide-react';

export default function HalloweenContact() {
  const profile = getProfileData('halloween');

  return (
    <section id="contact" className="stone-bg-noise w-full py-12 sm:py-20 border-b-2 border-[#443D36]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#26211C] text-orange-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-orange-500/60 shadow-[0_0_12px_rgba(255,107,0,0.25)]">
            🎃 Get In Touch
          </div>
          <h2 className="font-creepster text-4xl font-extrabold uppercase tracking-wider text-orange-400 sm:text-5xl md:text-6xl stone-engraved-text drop-shadow-[0_2px_10px_rgba(255,107,0,0.3)]">
            Contact & Inquiries
          </h2>
          <p className="max-w-[700px] text-stone-300 font-medium">
            Send an inquiry or project proposal directly to Chit Swe. Inquiries regarding full-stack contracts and technical leadership are welcome.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Dispatch Form Card */}
          <div className="stone-slab-texture rounded-2xl border border-[#443D36] p-6 shadow-[0_6px_25px_rgba(0,0,0,0.7)]">
            <div className="mb-6 pb-3 border-b border-[#443D36]">
              <h3 className="text-xl font-bold text-stone-100">
                Send a Message
              </h3>
              <p className="text-xs text-stone-400 font-mono mt-1">
                Fill in the details below to start a conversation.
              </p>
            </div>
            <HalloweenContactForm />
          </div>

          {/* Details Card */}
          <div className="space-y-6">
            <div className="stone-slab-texture rounded-2xl border border-[#443D36] p-6 shadow-[0_6px_25px_rgba(0,0,0,0.7)]">
              <div className="pb-3 border-b border-[#443D36] mb-5">
                <h3 className="font-bold text-sm tracking-wider uppercase font-mono text-orange-400">
                  Direct Contact Info
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#26211C] text-orange-400 rounded-xl shrink-0 border border-orange-500/40">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-stone-400 font-mono">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-mono font-semibold hover:underline text-stone-100 hover:text-orange-400 transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#26211C] text-orange-400 rounded-xl shrink-0 border border-orange-500/40">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-stone-400 font-mono">
                      Location & Timezone
                    </h4>
                    <p className="text-sm font-medium text-stone-200">
                      Remote • Global Timezones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#26211C] text-green-400 rounded-xl shrink-0 border border-green-500/40">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-stone-400 font-mono">
                      Availability Status
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Available for full-stack engineering roles, high-scale backend consulting, and open-source collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
