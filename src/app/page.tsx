"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Compass,
  GraduationCap,
  Users,
  ShieldCheck,
  ChevronRight,
  Quote,
  CheckCircle,
} from "lucide-react";
import { HeroCountdown } from "@/components/HeroCountdown";
import { StatCounter } from "@/components/StatCounter";
import { RankerCard } from "@/components/RankerCard";
import { SpeakerCard } from "@/components/SpeakerCard";
import { AshokaChakra } from "@/components/AshokaEmblem";
import { MitWpuLogo } from "@/components/MitWpuLogo";
import { getStoredRankers } from "@/lib/storage";
import { SPEAKERS, SCHEDULE, LEADERSHIP_MESSAGES, EVENT_DETAILS } from "@/data/mockData";
import { Ranker } from "@/types";

export default function HomePage() {
  const [rankers, setRankers] = useState<Ranker[]>([]);

  useEffect(() => {
    setRankers(getStoredRankers());
  }, []);

  const featuredRankers = rankers.filter((r) => r.featured).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION WITH COUNTDOWN TIMER */}
      <HeroCountdown />

      {/* 2. STATS & CEREMONIAL HIGHLIGHTS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <StatCounter />
      </section>

      {/* 3. FEATURED NATIONAL RANKERS (HALL OF FAME PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              <span>National Hall of Fame</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 dark:text-white">
              Honouring National Rankers (UPSC CSE)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Celebrating the exceptional perseverance of our All India Rankers and MIT-WPU
              alumni who have proven their mettle in India's most prestigious examination.
            </p>
          </div>

          <Link
            href="/rankers"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400 hover:text-maroon-900 dark:hover:text-gold-300 group"
          >
            <span>Explore All 25+ Rankers & Marksheets</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Rankers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRankers.map((ranker) => (
            <RankerCard key={ranker.id} ranker={ranker} />
          ))}
        </div>

        {/* MIT-WPU Alumni Highlight Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-maroon-900 via-navy-900 to-navy-950 text-white border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-official">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-gold-500/40 text-gold-400">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Proud Heritage: MIT-WPU Alumni in Civil Services
              </h3>
              <p className="text-xs text-slate-300">
                From School of Government and Engineering to the corridors of LBSNAA and Central Ministries.
              </p>
            </div>
          </div>
          <Link
            href="/rankers?alumni=true"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Filter Alumni Rankers →
          </Link>
        </div>
      </section>

      {/* 4. CHIEF GUESTS & DIGNITARIES PREVIEW */}
      <section className="bg-slate-100/70 dark:bg-navy-900/40 py-16 border-y border-slate-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 dark:text-gold-400">
              Dignitaries on Dais
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 dark:text-white mt-1">
              Distinguished Chief Guests & Speakers
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Interacting with veterans of Indian statecraft, former Secretaries to Government of India,
              and serving police commissioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPEAKERS.slice(0, 3).map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-xs font-semibold uppercase tracking-wider text-navy-900 dark:text-slate-200 hover:bg-gold-50 dark:hover:bg-navy-800 transition-colors"
            >
              <span>View Full Speaker Lineup & Topics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICE ORIENTATION HIGHLIGHTS (IAS, IPS, IFS, IRS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Orientation Masterclasses</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 dark:text-white">
            Comprehensive Service Orientation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Demystifying the hierarchy, responsibilities, LBSNAA training, and career paths
            across India's premier administrative services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              code: "IAS",
              title: "Indian Administrative Service",
              desc: "District administration as Collector, policy design in ministries, and leadership of public governance.",
              link: "/services#ias",
              color: "border-gold-500/60 bg-gold-50/50 dark:bg-navy-900",
            },
            {
              code: "IPS",
              title: "Indian Police Service",
              desc: "Law enforcement, urban policing, intelligence operations, and heading national armed police forces.",
              link: "/services#ips",
              color: "border-blue-500/60 bg-blue-50/50 dark:bg-navy-900",
            },
            {
              code: "IFS",
              title: "Indian Foreign Service",
              desc: "Diplomatic representation in 180+ global missions, multilateral negotiations, and strategic foreign policy.",
              link: "/services#ifs",
              color: "border-maroon-500/60 bg-maroon-50/50 dark:bg-navy-900",
            },
            {
              code: "IRS",
              title: "Indian Revenue Service",
              desc: "Safeguarding economic sovereignty, direct taxes, GST regulation, and international transfer pricing.",
              link: "/services#central",
              color: "border-emerald-500/60 bg-emerald-50/50 dark:bg-navy-900",
            },
          ].map((srv) => (
            <div
              key={srv.code}
              className={`p-6 rounded-2xl border ${srv.color} flex flex-col justify-between shadow-sm hover:shadow-official transition-all`}
            >
              <div>
                <span className="font-serif font-bold text-2xl text-navy-950 dark:text-gold-400 block mb-1">
                  {srv.code}
                </span>
                <h4 className="font-bold text-sm text-navy-900 dark:text-white mb-2">
                  {srv.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {srv.desc}
                </p>
              </div>
              <Link
                href={srv.link}
                className="text-xs font-bold text-maroon-700 dark:text-gold-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Read Full Profile & Hierarchy</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROGRAMME SCHEDULE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 border border-gold-500/40 shadow-official relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none">
            <AshokaChakra size={400} color="#C9A227" />
          </div>

          <div className="max-w-2xl relative z-10 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-gold-400">
              Ceremony Programme Timeline
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
              Saturday, November 14, 2026 Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              From the auspicious Lamp Lighting & World Peace Prayer to the high-stakes Felicitation,
              Masterclasses, and 1-on-1 Mentorship Sessions.
            </p>
          </div>

          {/* Quick Schedule Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {SCHEDULE.slice(1, 4).map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 backdrop-blur-sm"
              >
                <span className="text-[11px] font-mono text-gold-400 font-bold block mb-1">
                  {s.time}
                </span>
                <h4 className="font-bold text-sm text-white leading-snug mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{s.description}</p>
                <div className="mt-2 text-[11px] text-maroon-300 font-medium">
                  Venue: {s.venue}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-xs text-slate-400">
              Full schedule features 10 consecutive sessions, tea breaks, and lunch.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/schedule"
                className="px-5 py-2.5 rounded-lg bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                View Full Detailed Schedule →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP MESSAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 dark:text-gold-400">
            Institutional Patronage
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 dark:text-white mt-1">
            Words of Inspiration from Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_MESSAGES.slice(0, 2).map((msg, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-500/40 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{msg.message}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-navy-800">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gold-500">
                  <Image
                    src={msg.photoUrl}
                    alt={msg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-navy-950 dark:text-white">
                    {msg.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-maroon-700 dark:text-gold-400">
                    {msg.title}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {msg.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. REGISTRATION CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-maroon-800 via-maroon-900 to-navy-950 text-white text-center relative overflow-hidden shadow-official-lg border border-gold-500/40">
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider">
              Limited Seats at World Peace Dome
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">
              Reserve Your Official Entry Pass Today
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Open to college students, civil service aspirants, academics, and parents.
              Instant QR-code verification pass generated upon registration.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-serif font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-official"
              >
                Register for Free Pass →
              </Link>
              <Link
                href="/resources"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all border border-white/20"
              >
                Download Study Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
