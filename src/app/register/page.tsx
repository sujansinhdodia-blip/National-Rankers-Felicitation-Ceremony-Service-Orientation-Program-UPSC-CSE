import React from "react";
import { Sparkles, ShieldCheck, QrCode, Calendar, MapPin, Clock } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { EVENT_DETAILS } from "@/data/mockData";

export const metadata = {
  title: "Event Registration & Entry Pass Portal | UPSC CSE Felicitation – MIT-WPU",
  description:
    "Complimentary registration portal for students, aspirants, and external guests for the National Rankers Felicitation Ceremony & Service Orientation at MIT-WPU Pune.",
};

export default function RegisterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Official Event Accreditation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Event Registration & Entry Pass
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Secure your complimentary delegate pass for the National Rankers Felicitation Ceremony & Service Orientation Program.
          Instant digital QR-code pass generated upon form submission.
        </p>

        {/* Quick event meta */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-maroon-700 dark:text-gold-400" />
            {EVENT_DETAILS.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-maroon-700 dark:text-gold-400" />
            09:30 AM to 06:15 PM IST
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-maroon-700 dark:text-gold-400" />
            World Peace Dome, MIT-WPU Pune
          </span>
        </div>
      </div>

      {/* Interactive Registration Form Component */}
      <RegistrationForm />
    </div>
  );
}
