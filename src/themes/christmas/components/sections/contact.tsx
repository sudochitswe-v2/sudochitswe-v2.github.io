import ChristmasContactForm from '@/themes/christmas/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, Sparkles } from 'lucide-react';

export default function ChristmasContact() {
  const profile = getProfileData('christmas');

  return (
    <section id="contact" className="w-full py-12 sm:py-20 border-b border-emerald-500/30 bg-[#061A0E]/60">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/80 text-yellow-400 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-yellow-400/50 shadow-[0_0_12px_rgba(248,178,41,0.25)]">
            🎄 Get In Touch
          </div>
          <h2 className="font-christmas text-4xl font-extrabold uppercase tracking-wide text-red-500 dark:text-yellow-400 sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(212,36,38,0.2)]">
            Contact & Inquiries
          </h2>
          <p className="max-w-[700px] text-emerald-200/80 font-medium">
            Send an inquiry or project proposal directly to Chit Swe. Directives, engineering consultations, and career inquiries are welcomed.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Dispatch Form Card */}
          <div className="festive-glass-card rounded-2xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.4)]">
            <div className="mb-6 pb-3 border-b border-emerald-500/20">
              <h3 className="text-xl font-bold text-emerald-100">
                Send a Message
              </h3>
              <p className="text-xs text-emerald-300/80 font-mono mt-1">
                Fill in the details below to start a conversation.
              </p>
            </div>
            <ChristmasContactForm />
          </div>

          {/* Details Card */}
          <div className="space-y-6">
            <div className="festive-glass-card rounded-2xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.4)]">
              <div className="pb-3 border-b border-emerald-500/20 mb-5">
                <h3 className="font-bold text-sm tracking-wider uppercase font-mono text-yellow-300">
                  Direct Contact Info
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-red-950/60 text-yellow-400 rounded-xl shrink-0 border border-red-500/40">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-emerald-300 font-mono">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-mono font-semibold hover:underline text-emerald-100 hover:text-yellow-300 transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-950/60 text-yellow-400 rounded-xl shrink-0 border border-emerald-500/40">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-emerald-300 font-mono">
                      Location & Timezone
                    </h4>
                    <p className="text-sm font-medium text-emerald-100">
                      Remote • Global Timezones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-950/60 text-yellow-400 rounded-xl shrink-0 border border-yellow-400/40">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-emerald-300 font-mono">
                      Availability Status
                    </h4>
                    <p className="text-xs text-emerald-200/80 leading-relaxed">
                      Available for full-stack engineering roles, software architecture contracts, and technical leadership.
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
