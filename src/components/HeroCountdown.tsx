"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { EVENT_DETAILS } from "@/data/mockData";
import { AshokaChakra } from "./AshokaEmblem";

export const HeroCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-11-14T09:30:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-16 md:py-24 border-b border-navy-800">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <AshokaChakra size={700} color="#C9A227" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Organizing Body Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>MIT World Peace University, Pune Presents</span>
          </div>

          {/* Main Title & Nomenclature */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
            National Rankers Felicitation Ceremony
            <span className="block mt-2 text-gold-400 font-serif italic text-2xl sm:text-4xl lg:text-4xl font-normal">
              & Service Orientation Program – UPSC CSE
            </span>
          </h1>

          {/* Ceremonial Ornamental Divider */}
          <div className="ceremonial-divider max-w-md mx-auto my-6">
            <span className="font-serif text-gold-400 tracking-widest text-xs uppercase font-bold">
              ✦ Swa-Dharma & Rashtra Seva ✦
            </span>
          </div>

          {/* Subtitle / Objective */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Honouring the stellar achievers of the Civil Services Examination,
            celebrating MIT-WPU alumni in administration, and inspiring the next
            generation of civil servants with comprehensive service orientation and
            expert mentorship.
          </p>

          {/* Event Key Facts Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-navy-900/80 border border-navy-700/80 backdrop-blur-sm shadow-sm">
              <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Date</span>
                <span className="font-bold text-slate-100">{EVENT_DETAILS.date}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-navy-900/80 border border-navy-700/80 backdrop-blur-sm shadow-sm">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Time</span>
                <span className="font-bold text-slate-100">09:30 AM – 06:15 PM</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-navy-900/80 border border-navy-700/80 backdrop-blur-sm shadow-sm">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="text-left truncate">
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Venue</span>
                <span className="font-bold text-slate-100 truncate">World Peace Dome, Pune</span>
              </div>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-gold-500/40 shadow-official max-w-xl mx-auto">
            <div className="text-center mb-3">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Ceremony Commences In
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="bg-navy-950/80 p-2 sm:p-3 rounded-xl border border-navy-700">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-white">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Days</span>
              </div>
              <div className="bg-navy-950/80 p-2 sm:p-3 rounded-xl border border-navy-700">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-white">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-navy-950/80 p-2 sm:p-3 rounded-xl border border-navy-700">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-white">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Mins</span>
              </div>
              <div className="bg-navy-950/80 p-2 sm:p-3 rounded-xl border border-navy-700">
                <span className="block text-2xl sm:text-4xl font-serif font-bold text-gold-400">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-official hover:-translate-y-0.5 border border-maroon-600 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
              <span>Register Now (Free Pass)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/rankers"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-navy-800/90 hover:bg-navy-700 text-gold-300 hover:text-white font-semibold text-sm tracking-wider uppercase transition-all border border-gold-500/40 hover:border-gold-400 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-gold-400" />
              <span>Meet Our Rankers</span>
            </Link>

            <Link
              href="/schedule"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-all border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>View Schedule</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
