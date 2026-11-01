import ChristmasContactForm from '@/themes/christmas/components/contact-form';
import { getProfileData } from '@/lib/data';
import { Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';

export default function ChristmasContact() {
  const profile = getProfileData('christmas');

  return (
    <section id="contact" className="w-full py-16 md:py-24 border-b border-emerald-500/30 bg-[#05160C] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/90 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_10px_rgba(248,178,41,0.2)]">
            🎄 Get In Touch
          </span>
          <h2 className="font-christmas text-5xl sm:text-7xl text-red-500 dark:text-yellow-400 tracking-wide drop-shadow-[0_0_15px_rgba(212,36,38,0.4)]">
            Contact & Inquiries
          </h2>
          <p className="max-w-[700px] text-emerald-100/80 text-sm md:text-base font-medium">
            Send an inquiry or project proposal directly to Chit Swe. Directives, engineering consultations, and career inquiries are welcomed.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Info Column */}
          <div className="space-y-4">
            {/* Direct Mailbox Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/80 backdrop-blur-md p-5 flex items-center gap-4 shadow-lg hover:border-yellow-400/60 transition-all group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 border border-emerald-500/40 text-yellow-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono text-emerald-300">Direct Mailbox</p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-xs sm:text-sm font-semibold text-emerald-100 hover:text-yellow-300 hover:underline transition-colors block truncate"
                >
                  {profile.contact.email}
                </a>
              </div>
            </div>

            {/* Station Location Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/80 backdrop-blur-md p-5 flex items-center gap-4 shadow-lg hover:border-yellow-400/60 transition-all group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 group-hover:scale-110 transition-transform shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-emerald-300">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-emerald-100">
                  Remote • Worldwide Delivery
                </p>
              </div>
            </div>

            {/* Social Connect Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/80 backdrop-blur-md p-5 flex items-center gap-4 shadow-lg hover:border-yellow-400/60 transition-all group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 border border-emerald-500/40 text-yellow-400 group-hover:scale-110 transition-transform shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-emerald-300">Social Connections</p>
                <div className="flex gap-4 pt-1">
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-yellow-400 transition-colors"
                    title="GitHub"
                  >
                    <SiGithub size={18} />
                  </a>
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-yellow-400 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={profile.socialLinks.mastodon}
                    target="_blank"
                    rel="me"
                    className="text-emerald-200 hover:text-yellow-400 transition-colors"
                    title="Mastodon"
                  >
                    <SiMastodon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0C2A18]/80 backdrop-blur-md p-5 flex items-start gap-4 shadow-lg hover:border-yellow-400/60 transition-all group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 border border-yellow-400/40 text-yellow-400 group-hover:scale-110 transition-transform shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-emerald-300">Availability</p>
                <p className="text-xs text-emerald-100/90 leading-relaxed mt-0.5">
                  Available for full-stack engineering roles, distributed architecture contracts, and technical leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-emerald-500/40 bg-[#0C2A18]/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
              <div className="mb-6 pb-3 border-b border-emerald-500/20">
                <h3 className="font-christmas text-3xl font-bold text-yellow-300 mb-1">
                  Dispatch a Message
                </h3>
                <p className="text-xs font-mono text-emerald-200/80">
                  Fill in your details below to send a message directly.
                </p>
              </div>
              <ChristmasContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
