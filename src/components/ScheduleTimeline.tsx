"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Download,
  CalendarPlus,
  Share2,
  Check,
  Award,
  Sparkles,
  Printer,
} from "lucide-react";
import { ScheduleItem } from "@/types";
import { SCHEDULE } from "@/data/mockData";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/lib/calendar";

export const ScheduleTimeline = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>("All");
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const tracks = [
    "All",
    "Inaugural & Felicitation",
    "Service Orientation",
    "Aspirant Guidance",
    "Interactive & Networking",
  ];

  const filteredSchedule =
    selectedTrack === "All"
      ? SCHEDULE
      : SCHEDULE.filter((item) => item.track === selectedTrack);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm no-print">
        {/* Track Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                selectedTrack === track
                  ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 shadow-sm"
                  : "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-700"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Action Buttons: Add to Calendar & Print / PDF */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Add to Calendar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-500/80 bg-gold-50 dark:bg-navy-800 text-navy-950 dark:text-gold-300 text-xs font-semibold hover:bg-gold-100 transition-colors shadow-sm"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              <span>Add to Calendar</span>
            </button>

            {calendarMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg shadow-official-lg py-1.5 z-30 animate-in fade-in duration-150">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-gold-50 dark:hover:bg-navy-800"
                  onClick={() => setCalendarMenuOpen(false)}
                >
                  🗓️ Google Calendar
                </a>
                <button
                  onClick={() => {
                    downloadIcsFile();
                    setCalendarMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-gold-50 dark:hover:bg-navy-800"
                >
                  📥 Apple / Outlook (.ICS file)
                </button>
              </div>
            )}
          </div>

          {/* Print / Download Schedule */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 transition-colors shadow-sm"
            title="Print or Save Schedule as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Copy Share Link */}
          <button
            onClick={handleCopyLink}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors"
            title="Copy Schedule Link"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Printable Header (Visible Only in Print Mode) */}
      <div className="hidden print-only mb-6 border-b-2 border-navy-900 pb-4">
        <h1 className="text-xl font-bold font-serif text-navy-950 uppercase">
          MIT World Peace University, Pune
        </h1>
        <h2 className="text-sm font-semibold text-maroon-800">
          National Rankers Felicitation Ceremony & Service Orientation Program – UPSC CSE
        </h2>
        <p className="text-xs text-slate-600">
          Saturday, November 14, 2026 • Venue: World Peace Dome & Swami Vivekananda Sabhagruha, Pune
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-200 dark:border-navy-800 ml-4 md:ml-32 space-y-8 py-2">
        {filteredSchedule.map((item) => (
          <div key={item.id} className="relative pl-6 md:pl-8 group">
            {/* Timeline Dot Indicator */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                item.highlight
                  ? "bg-maroon-700 border-gold-400 ring-4 ring-maroon-200 dark:ring-maroon-950"
                  : "bg-navy-900 dark:bg-gold-500 border-white dark:border-navy-900"
              }`}
            />

            {/* Time Stamp (Placed on left on desktop, or above on mobile) */}
            <div className="md:absolute md:-left-36 md:top-1.5 md:w-28 md:text-right mb-1 md:mb-0">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 dark:text-gold-400 bg-slate-100 dark:bg-navy-950 px-2 py-0.5 rounded border border-slate-200 dark:border-navy-800">
                <Clock className="w-3 h-3 text-gold-600 shrink-0" />
                {item.time.split("–")[0]}
              </span>
            </div>

            {/* Content Card */}
            <div
              className={`p-5 rounded-xl border transition-all duration-200 ${
                item.highlight
                  ? "bg-white dark:bg-navy-900 border-gold-400/80 shadow-official ring-1 ring-gold-400/30"
                  : "bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-official"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    item.track === "Inaugural & Felicitation"
                      ? "bg-maroon-100 text-maroon-800 dark:bg-maroon-900/50 dark:text-maroon-300"
                      : item.track === "Service Orientation"
                      ? "bg-blue-100 text-blue-800 dark:bg-navy-800 dark:text-blue-300"
                      : item.track === "Aspirant Guidance"
                      ? "bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300"
                      : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  }`}
                >
                  {item.track}
                </span>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  <span>{item.venue}</span>
                </div>
              </div>

              <h3 className="font-serif font-bold text-base md:text-lg text-navy-900 dark:text-white leading-snug mb-1.5">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-navy-800 text-xs flex items-center gap-2">
                <span className="font-semibold text-slate-400 uppercase text-[10px]">
                  Featuring / Speakers:
                </span>
                <span className="font-bold text-maroon-700 dark:text-gold-400">
                  {item.speaker}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
