"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldAlert,
  Send,
  CheckCircle,
  Award,
} from "lucide-react";
import { MitWpuLogo } from "./MitWpuLogo";
import { AshokaChakra } from "./AshokaEmblem";
import { EVENT_DETAILS } from "@/data/mockData";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-gold-600 relative overflow-hidden">
      {/* Decorative Ashoka Watermark Background */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-5 pointer-events-none">
        <AshokaChakra size={400} color="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <MitWpuLogo variant="full" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Organised by the Centre for Civil Services Guidance & School of
              Government at MIT World Peace University (MIT-WPU), Pune. Nurturing
              ethical, visionary, and service-oriented civil servants for Bharat
              and the world.
            </p>
            <div className="p-3 rounded bg-navy-900/80 border border-navy-800 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase text-[11px] tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Ceremony Venue & Date
              </div>
              <p className="text-slate-300 font-medium">{EVENT_DETAILS.venue}</p>
              <p className="text-[11px] text-slate-400">{EVENT_DETAILS.campus}</p>
              <p className="text-gold-400 font-bold text-[11px]">
                Saturday, November 14, 2026 • 09:30 AM IST
              </p>
            </div>
          </div>

          {/* Column 2: Hall of Fame & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-white uppercase border-b border-navy-800 pb-2">
              Hall of Fame
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/rankers" className="hover:text-gold-400 transition-colors">
                  All India Rankers
                </Link>
              </li>
              <li>
                <Link href="/rankers?alumni=true" className="hover:text-gold-400 transition-colors">
                  MIT-WPU Alumni Toppers
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-gold-400 transition-colors">
                  Chief Guests & Dignitaries
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-gold-400 transition-colors">
                  Programme Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">
                  Photo & Press Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Orientation & Preparation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-white uppercase border-b border-navy-800 pb-2">
              Orientation & Guidance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#ias" className="hover:text-gold-400 transition-colors">
                  Indian Administrative Service (IAS)
                </Link>
              </li>
              <li>
                <Link href="/services#ips" className="hover:text-gold-400 transition-colors">
                  Indian Police Service (IPS)
                </Link>
              </li>
              <li>
                <Link href="/services#ifs" className="hover:text-gold-400 transition-colors">
                  Indian Foreign Service (IFS)
                </Link>
              </li>
              <li>
                <Link href="/guidance" className="hover:text-gold-400 transition-colors">
                  UPSC 3-Stage Blueprint (Pre, Mains, Interview)
                </Link>
              </li>
              <li>
                <Link href="/guidance#roadmap" className="hover:text-gold-400 transition-colors">
                  College Student 3-Year Preparation Plan
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gold-400 transition-colors">
                  Download PYQs & Topper Notes
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-gold-400 transition-colors">
                  Officer Mentorship Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-white uppercase border-b border-navy-800 pb-2">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to the MIT-WPU Civil Services Guidance Newsletter for monthly
              strategy briefs, mock test series alerts, and guest lecture updates.
            </p>

            {subscribed ? (
              <div className="p-3 bg-navy-900 border border-green-600/40 rounded flex items-center gap-2 text-green-400 text-xs">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Thank you! You are subscribed to official alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full text-xs px-3 py-2 bg-navy-900 border border-navy-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-maroon-700 hover:bg-maroon-800 text-white rounded text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${EVENT_DETAILS.contactEmail}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {EVENT_DETAILS.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{EVENT_DETAILS.helpline}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>MIT-WPU Campus, Paud Road, Kothrud, Pune - 411038</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Disclaimer (Required by Prompt) */}
        <div className="mt-10 pt-6 border-t border-navy-800/80">
          <div className="p-3.5 rounded-lg bg-navy-900/60 border border-navy-800 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-slate-200">
                Official Institutional Disclaimer
              </p>
              <p className="text-slate-400 leading-relaxed text-[11.5px]">
                This is an official event website of MIT World Peace University
                (MIT-WPU), Pune and is not affiliated with the Union Public Service
                Commission (UPSC) or any government body. "UPSC", "CSE", "IAS",
                "IPS", and related service nomenclature are referenced strictly for
                academic, orientation, and felicitation purposes.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} MIT World Peace University, Pune. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-gold-400">
                About MIT-WPU
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-gold-400">
                Organising Committee
              </Link>
              <span>•</span>
              <Link href="/admin" className="hover:text-gold-400">
                Admin Secure Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
