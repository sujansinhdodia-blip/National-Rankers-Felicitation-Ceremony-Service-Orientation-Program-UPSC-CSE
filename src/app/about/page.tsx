import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Award,
  BookOpen,
  Users,
  Building,
  Quote,
  ShieldCheck,
  CheckCircle,
  Landmark,
} from "lucide-react";
import { LEADERSHIP_MESSAGES, EVENT_DETAILS } from "@/data/mockData";
import { AshokaChakra } from "@/components/AshokaEmblem";
import { MitWpuLogo } from "@/components/MitWpuLogo";

export const metadata = {
  title: "About the Program & MIT-WPU | National Rankers Felicitation Ceremony",
  description:
    "Vision, mission, and objectives of the UPSC CSE National Rankers Felicitation Ceremony and Service Orientation Program at MIT World Peace University (MIT-WPU), Pune.",
};

export default function AboutPage() {
  const objectives = [
    {
      title: "Recognising National Excellence",
      desc: "To formally honour All India Rankers of UPSC CSE, particularly MIT-WPU alumni who have achieved exemplary ranks across IAS, IPS, IFS, and Central Group A Services.",
      icon: Award,
    },
    {
      title: "Deep Service Demystification",
      desc: "To educate students and aspirants about the diverse constitutional roles, LBSNAA training, and field challenges of All India and Central Services.",
      icon: Compass,
    },
    {
      title: "Actionable Mentorship for Aspirants",
      desc: "To bridge the gap between fresh college undergraduates and successful toppers through real marksheet discussions, optional subject advice, and 1-on-1 breakout guidance.",
      icon: Users,
    },
    {
      title: "Integrating Peace with Administration",
      desc: "To inculcate Mahatma Gandhi and Swami Vivekananda's ideals of ethical leadership, empathy, and universal peace into the ethos of future civil servants.",
      icon: Landmark,
    },
  ];

  const committeeMembers = [
    {
      name: "Prof. Dr. Mangesh T. Karad",
      role: "Patron-in-Chief",
      designation: "Executive President & Vice Chancellor, MIT-WPU",
    },
    {
      name: "Dr. Milind Pande",
      role: "Program Director",
      designation: "Dean, Faculty of Governance & Public Policy",
    },
    {
      name: "Prof. Dr. Suresh Sawant",
      role: "Faculty Coordinator & Convener",
      designation: "Head, Centre for Civil Services Guidance",
    },
    {
      name: "Prof. Anjali Ranade",
      role: "Co-Convener",
      designation: "Associate Professor, School of Government",
    },
    {
      name: "Adv. Rahul Gaikwad",
      role: "Member Secretary",
      designation: "Director, Student Affairs & Alumni Relations",
    },
    {
      name: "Dr. Preeti Sharma",
      role: "Protocol Coordinator",
      designation: "Chief Public Relations Officer, MIT-WPU",
    },
  ];

  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Institutional Legacy & Ethos</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          About the Ceremony & Orientation Program
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          A flagship national initiative by MIT World Peace University to honour the nation's
          top civil servants and ignite the spirit of public service among young minds.
        </p>
      </div>

      {/* Vision, Mission & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-4">
            <div className="p-3 w-fit rounded-xl bg-gold-50 dark:bg-navy-800 text-gold-600 border border-gold-200 dark:border-navy-700">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">
              Our Vision
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To establish MIT World Peace University as the premier epicenter for public
              leadership in India, where academic brilliance converges with constitutional
              patriotism and universal human values, creating civil servants who serve as
              catalysts for equitable socio-economic transformation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-4">
            <div className="p-3 w-fit rounded-xl bg-maroon-50 dark:bg-navy-800 text-maroon-700 border border-maroon-200 dark:border-navy-700">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">
              Our Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide undergraduate and graduate students with unconditional access to
              authoritative guidance, transparent marksheet deconstructions, and personal
              mentorship from serving civil servants, ensuring that no deserving aspirant is
              deprived of direction or inspiration due to lack of exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives Grid */}
      <section className="bg-slate-100/70 dark:bg-navy-900/40 py-16 border-y border-slate-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
              Program Pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white mt-1">
              Key Objectives of the Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => {
              const IconComp = obj.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-800 text-maroon-700 dark:text-gold-400 inline-block">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                      {obj.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About MIT-WPU & Centre for Civil Services Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
              <span className="font-bold text-xs uppercase tracking-wider text-maroon-700 dark:text-gold-400">
                Institutional Heritage
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white">
              MIT World Peace University (MIT-WPU), Pune
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Established in 1983 by visionary educationist Prof. Dr. Vishwanath D. Karad, MAEER’s
              MIT Group of Institutions has pioneered higher education in Maharashtra for over four
              decades. Today, MIT World Peace University stands as a globally acknowledged State
              Private University empowering over 25,000 students across 65+ disciplines.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              MIT-WPU is home to India’s first-of-its-kind <strong>School of Government (MIT-SOG)</strong>,
              providing specialised Master’s programs in Political Leadership and Government.
              The university’s dedicated <strong>Centre for Civil Services Guidance (CCSG)</strong> operates
              full-time reading rooms, mock test series, and guest lecture series conducted by serving
              IAS and IPS officers.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>World Peace Dome, Pune Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>UNESCO Chair for Peace & Human Rights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Ranked among Top Universities in India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Over 1,00,000 Global Alumni Network</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-official">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
              alt="MIT-WPU World Peace University Campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="font-serif font-bold text-lg block">MIT-WPU Kothrud Campus</span>
                <span className="text-xs text-gold-300">Pune, Maharashtra • World Peace Dome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages (Chancellor, VC, Dean, Faculty Coordinator) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
            Messages from Institutional Leadership
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white mt-1">
            Guiding Words from Revered Mentors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_MESSAGES.map((leader, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-500/40 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{leader.message}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-navy-800">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-gold-500">
                  <Image
                    src={leader.photoUrl}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-navy-950 dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-maroon-700 dark:text-gold-400">
                    {leader.title}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {leader.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organising Committee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-serif text-2xl font-bold text-navy-950 dark:text-white">
              Organising Committee 2026
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              National Rankers Felicitation Ceremony & Service Orientation Program
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committeeMembers.map((cm, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400 block mb-1">
                  {cm.role}
                </span>
                <h4 className="font-serif font-bold text-sm text-navy-950 dark:text-white">
                  {cm.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cm.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
