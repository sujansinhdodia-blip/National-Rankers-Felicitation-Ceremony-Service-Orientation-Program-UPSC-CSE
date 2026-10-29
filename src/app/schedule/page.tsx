import React from "react";
import { Calendar, Clock, MapPin, AlertCircle, ShieldCheck } from "lucide-react";
import { ScheduleTimeline } from "@/components/ScheduleTimeline";
import { EVENT_DETAILS } from "@/data/mockData";

export const metadata = {
  title: "Official Programme Schedule | National Rankers Felicitation Ceremony – MIT-WPU",
  description:
    "Official schedule and timeline for the UPSC CSE National Rankers Felicitation Ceremony & Service Orientation Program at MIT-WPU Pune.",
};

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Official Programme Flow</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Programme Schedule & Timeline
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
          Saturday, November 14, 2026 • 09:30 AM to 06:15 PM IST
          <br />
          Swami Vivekananda Sabhagruha & World Peace Dome, MIT-WPU Pune
        </p>
      </div>

      {/* Protocol / Important Instructions Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-navy-900/90 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3 shadow-sm no-print">
        <AlertCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Protocol & Entry Instructions:</span>
          <p className="text-[11.5px] leading-relaxed text-amber-800 dark:text-amber-300">
            All registered delegates, students, and guests must occupy their seats by <strong>09:15 AM</strong> prior to the arrival of dignitaries. QR-code digital entry pass along with a valid College/Photo ID is mandatory for security verification at Gate #2.
          </p>
        </div>
      </div>

      {/* Timeline Component with Filter, Calendar & Print/PDF */}
      <ScheduleTimeline />
    </div>
  );
}
