"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Award,
  CheckCircle,
  Calendar,
  Send,
  MessageSquare,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { MENTORS } from "@/data/mockData";
import { Mentor } from "@/types";

export default function MentorshipPage() {
  const [selectedMentor, setSelectedMentor] = useState<string>("mnt-1");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetYear: "2026",
    optionalSubject: "PSIR",
    specificQueries: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Users className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Officer & Topper Mentorship Cell</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Civil Services Mentorship Directory
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Book dedicated 1-on-1 guidance sessions with serving civil servants and recent UPSC CSE rankers.
          Receive personalized feedback on your study schedule, optional subject, and answer writing.
        </p>
      </div>

      {/* Mentor Directory Grid */}
      <div className="space-y-6">
        <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white border-b border-slate-200 dark:border-navy-800 pb-3">
          Available Mentors (Officers & Rankers)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((m) => (
            <div
              key={m.id}
              className={`p-6 rounded-2xl bg-white dark:bg-navy-900 border transition-all flex flex-col justify-between shadow-sm hover:shadow-official ${
                selectedMentor === m.id
                  ? "border-gold-500 ring-2 ring-gold-500/20"
                  : "border-slate-200 dark:border-navy-800"
              }`}
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-navy-800">
                  <Image
                    src={m.photoUrl}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                  />
                  {m.availableForSession && (
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-green-600 text-white shadow-sm">
                      Available
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
                  {m.name}
                </h3>
                <p className="text-xs font-semibold text-maroon-700 dark:text-gold-400">
                  {m.service}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">{m.currentDesignation}</p>

                <div className="my-3 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Core Expertise
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {m.expertiseAreas.map((exp, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {m.bio}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-navy-800">
                <button
                  type="button"
                  onClick={() => setSelectedMentor(m.id)}
                  className={`w-full py-2 rounded-lg text-xs font-semibold transition-colors ${
                    selectedMentor === m.id
                      ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950"
                      : "border border-slate-300 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800"
                  }`}
                >
                  {selectedMentor === m.id ? "Selected Mentor ✓" : "Choose for Session"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentorship Booking Form */}
      <section className="max-w-3xl mx-auto p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-6">
        <div>
          <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">
            Request a Mentorship Consultation
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Breakout sessions will be conducted during the felicitation ceremony at Seminar Halls 1–4.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-emerald-950 dark:text-emerald-200">
              Mentorship Request Submitted!
            </h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
              Our academic guidance cell will assign your time slot with the selected mentor.
              Confirmation details will be sent to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
            >
              Submit Another Query
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Omkar Joshi"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="omkar@example.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98220 12345"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Target UPSC CSE Year *
                </label>
                <select
                  value={formData.targetYear}
                  onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                >
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028 or Later</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Optional Subject (Decided or Exploring) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.optionalSubject}
                  onChange={(e) => setFormData({ ...formData, optionalSubject: e.target.value })}
                  placeholder="e.g. Political Science & IR, Sociology, Geography..."
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Specific Questions / Guidance Areas for the Mentor *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.specificQueries}
                  onChange={(e) => setFormData({ ...formData, specificQueries: e.target.value })}
                  placeholder="e.g. How to balance engineering exams with GS notes, strategies to improve CSAT scores..."
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Mentorship Request</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
