"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  Award,
  ArrowLeft,
  GraduationCap,
  MapPin,
  BookOpen,
  Calendar,
  CheckCircle2,
  Video,
  FileText,
  UserCheck,
  Share2,
  Check,
  Sparkles,
} from "lucide-react";
import { Ranker } from "@/types";
import { getStoredRankers } from "@/lib/storage";

export default function RankerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [ranker, setRanker] = useState<Ranker | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const list = getStoredRankers();
    const found = list.find((r) => r.id === params.id);
    if (found) {
      setRanker(found);
    }
  }, [params.id]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!ranker) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white">
          Ranker Profile Not Found
        </h2>
        <p className="text-sm text-slate-500">
          The requested civil services ranker could not be found or may have been updated.
        </p>
        <Link
          href="/rankers"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Hall of Fame</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Back button & Share Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/rankers"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-maroon-700 dark:hover:text-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rankers</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copied ? "Link Copied!" : "Share Strategy"}</span>
        </button>
      </div>

      {/* Hero Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Photo with Badges */}
        <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-500/60 shadow-official-lg">
          <Image
            src={ranker.photoUrl}
            alt={ranker.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/90 text-white border border-gold-400 text-xs font-bold shadow-md">
            <Award className="w-4 h-4 text-gold-400" />
            <span>AIR {ranker.air}</span>
          </div>

          <div className="absolute top-3 right-3 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-maroon-700 text-white shadow-md">
            {ranker.service}
          </div>
        </div>

        {/* Details & Quote */}
        <div className="md:col-span-8 space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 dark:bg-navy-800 dark:text-gold-300">
                UPSC CSE {ranker.year}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300">
                Cadre: {ranker.cadre}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300">
                Home State: {ranker.homeState}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-white">
              {ranker.name}
            </h1>
            <p className="text-sm font-semibold text-maroon-700 dark:text-gold-400 mt-1">
              Allotted Service: {ranker.service} • All India Rank {ranker.air}
            </p>
          </div>

          {/* MIT-WPU Alumni Connection Banner */}
          {ranker.isAlumnus && ranker.alumniDetails && (
            <div className="p-3.5 rounded-xl bg-maroon-50 dark:bg-navy-950 border border-maroon-200 dark:border-maroon-900/60 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-maroon-700 text-white shrink-0">
                <GraduationCap className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-maroon-900 dark:text-gold-300 block">
                  MIT World Peace University Alumnus (Batch {ranker.alumniDetails.batch})
                </span>
                <span className="text-maroon-700 dark:text-slate-300">
                  {ranker.alumniDetails.department} • {ranker.alumniDetails.degree}
                </span>
              </div>
            </div>
          )}

          {/* Quote */}
          <blockquote className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border-l-4 border-gold-500 text-xs sm:text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "{ranker.quote}"
          </blockquote>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Optional</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 truncate block">
                {ranker.optionalSubject}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Attempts</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 block">
                #{ranker.attempts} Attempts
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Mains Score</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 block">
                {ranker.marksheet.mainsTotal} / 1750
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Interview (PT)</span>
              <span className="font-bold text-gold-600 dark:text-gold-400 block">
                {ranker.marksheet.interviewMarks} / 275
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marksheet Highlights Breakdown */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-navy-800 pb-3">
          <FileText className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
          <h2 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
            Official Marksheet Performance Summary
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 dark:bg-navy-950 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-navy-800">
              <tr>
                <th className="py-3 px-4">Stage</th>
                <th className="py-3 px-4">Score Breakdown</th>
                <th className="py-3 px-4">Max Marks</th>
                <th className="py-3 px-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-navy-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-navy-900 dark:text-white">
                  Preliminary Exam
                </td>
                <td className="py-3 px-4">{ranker.marksheet.prelimsScore || "Cleared comfortably"}</td>
                <td className="py-3 px-4">400 (Qualifying)</td>
                <td className="py-3 px-4 text-emerald-600 font-medium">Cleared above cutoff</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-navy-900 dark:text-white">
                  Written Mains Exam (GS I-IV, Essay & Optional)
                </td>
                <td className="py-3 px-4 font-bold">{ranker.marksheet.mainsTotal}</td>
                <td className="py-3 px-4">1750</td>
                <td className="py-3 px-4 text-gold-600 font-medium">Top national percentile</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-navy-900 dark:text-white">
                  Personality Test (Interview)
                </td>
                <td className="py-3 px-4 font-bold text-maroon-700 dark:text-gold-400">
                  {ranker.marksheet.interviewMarks}
                </td>
                <td className="py-3 px-4">275</td>
                <td className="py-3 px-4 text-emerald-600 font-medium">Outstanding communication</td>
              </tr>
              <tr className="bg-gold-50/60 dark:bg-navy-950/80 font-bold text-navy-950 dark:text-gold-300">
                <td className="py-3 px-4 font-serif text-sm">Grand Final Total</td>
                <td className="py-3 px-4 text-sm">{ranker.marksheet.totalMarks}</td>
                <td className="py-3 px-4 text-sm">2025</td>
                <td className="py-3 px-4 text-sm uppercase tracking-wider">
                  Secured AIR {ranker.air} ({ranker.service})
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Biography & Preparation Journey */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white border-b border-slate-100 dark:border-navy-800 pb-2">
            Academic Background & Biography
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {ranker.biography}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white border-b border-slate-100 dark:border-navy-800 pb-2">
            The Preparation Journey
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {ranker.preparationJourney}
          </p>
        </div>
      </div>

      {/* 4-Part Exhaustive Strategy Breakdown */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
            Topper's Masterclass Blueprint
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white mt-1">
            Stage-Wise Strategy & Execution Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 block">
              Stage 1: Preliminary Examination
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ranker.strategy.prelims}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-maroon-400 block">
              Stage 2: Mains Answer Writing Framework
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ranker.strategy.mains}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
              Optional Subject: {ranker.optionalSubject}
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ranker.strategy.optional}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              Stage 3: Personality Test (Interview)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ranker.strategy.interview}
            </p>
          </div>
        </div>
      </div>

      {/* Top Tips for Aspirants & Recommended Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tips */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gold-50/50 dark:bg-navy-900 border border-gold-300/60 dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-600" />
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Topper's Golden Rules for Aspirants
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {ranker.tipsForAspirants.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Books */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Essential Booklist Recommended
            </h3>
          </div>
          {ranker.recommendedBooks && ranker.recommendedBooks.length > 0 ? (
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {ranker.recommendedBooks.map((bk, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                  <span className="font-mono text-gold-600 font-bold">0{i + 1}.</span>
                  <span>{bk}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-500">
              NCERTs (Class 9-12), Indian Polity by Laxmikanth, Economic Survey, and The Hindu editorials.
            </p>
          )}

          <div className="pt-3">
            <Link
              href="/resources"
              className="text-xs font-bold text-maroon-700 dark:text-gold-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Download full curated syllabus & topper booklist PDF →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Embedded Video / Felicitation Ceremony Interview */}
      {ranker.videoUrl && (
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Felicitation Session & Interactive Masterclass Video
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Recorded live at Swami Vivekananda Sabhagruha, MIT-WPU Pune.
          </p>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-inner">
            <iframe
              src={ranker.videoUrl}
              title={`UPSC CSE Journey with ${ranker.name}`}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Book Mentorship Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 text-white border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-official">
        <div>
          <h3 className="font-serif font-bold text-xl text-white">
            Connect with {ranker.name} during Orientation Sessions
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Registered attendees can participate in 1-on-1 breakout Q&A consultations with felicitated rankers.
          </p>
        </div>
        <Link
          href="/register"
          className="shrink-0 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
        >
          Register for Event Pass →
        </Link>
      </div>
    </div>
  );
}
