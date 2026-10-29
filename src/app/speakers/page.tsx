import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Building, Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import { SPEAKERS, EVENT_DETAILS } from "@/data/mockData";
import { SpeakerCard } from "@/components/SpeakerCard";

export const metadata = {
  title: "Chief Guests & Speakers | National Rankers Felicitation Ceremony – MIT-WPU",
  description:
    "Profiles of distinguished chief guests, senior civil servants (IAS/IPS/IFS), and academic mentors speaking at the UPSC CSE Felicitation Ceremony at MIT-WPU Pune.",
};

export default function SpeakersPage() {
  const chiefGuest = SPEAKERS.find((s) => s.role === "Chief Guest");
  const otherSpeakers = SPEAKERS.filter((s) => s.role !== "Chief Guest");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-100 dark:bg-navy-800 text-maroon-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Mic className="w-3.5 h-3.5 text-maroon-700 dark:text-gold-400" />
          <span>Distinguished Dais & Keynote Leaders</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Chief Guests & Esteemed Speakers
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Learn from decorated leaders of Indian statecraft, former Secretaries to Government of India,
          serving police commissioners, and senior IAS administrators.
        </p>
      </div>

      {/* Featured Chief Guest Highlight Banner */}
      {chiefGuest && (
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white border-2 border-gold-500/60 shadow-official-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-500/50 shadow-md">
            <Image
              src={chiefGuest.photoUrl}
              alt={chiefGuest.name}
              fill
              className="object-cover object-top"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-maroon-700 text-white shadow-sm">
              Chief Guest of Honour
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Inaugural Presidential Keynote
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
                {chiefGuest.name}
              </h2>
              <p className="text-sm font-semibold text-gold-300 mt-0.5">
                {chiefGuest.title}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <Building className="w-3.5 h-3.5 text-gold-400" />
                {chiefGuest.organization}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-maroon-300 tracking-wider block">
                Keynote Session Topic
              </span>
              <p className="font-serif font-bold text-sm sm:text-base text-gold-200">
                "{chiefGuest.sessionTopic}"
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  {EVENT_DETAILS.date} • {chiefGuest.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  {chiefGuest.venue}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {chiefGuest.bio}
            </p>
          </div>
        </div>
      )}

      {/* Grid of Other Speakers & Session Chairs */}
      <div className="space-y-6">
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-950 dark:text-white border-b border-slate-200 dark:border-navy-800 pb-3">
          Session Chairs & Panelists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
            Attend Keynotes & Interact in the Open Q&A House
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Complimentary passes include access to all speaker keynotes and question sessions.
          </p>
        </div>
        <Link
          href="/register"
          className="shrink-0 px-5 py-2.5 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
        >
          Get Free Entry Pass →
        </Link>
      </div>
    </div>
  );
}
