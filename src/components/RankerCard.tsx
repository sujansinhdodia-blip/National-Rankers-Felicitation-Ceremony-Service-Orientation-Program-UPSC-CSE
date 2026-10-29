import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, MapPin, BookOpen, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Ranker } from "@/types";

interface RankerCardProps {
  ranker: Ranker;
  featured?: boolean;
}

export const RankerCard: React.FC<RankerCardProps> = ({ ranker, featured = false }) => {
  // Service badge styling
  const getServiceBadge = (service: string) => {
    switch (service) {
      case "IAS":
        return "bg-gold-500 text-navy-950 font-bold border-gold-400";
      case "IPS":
        return "bg-navy-900 text-gold-300 font-bold border-navy-700";
      case "IFS":
        return "bg-maroon-700 text-white font-bold border-maroon-600";
      case "IRS":
      case "IRS (Income Tax)":
        return "bg-emerald-800 text-white font-bold border-emerald-700";
      default:
        return "bg-slate-800 text-white font-medium border-slate-700";
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white dark:bg-navy-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-official-lg hover:-translate-y-1.5 ${
        ranker.isAlumnus
          ? "border-maroon-300/80 dark:border-maroon-800/80 ring-1 ring-maroon-500/20"
          : "border-slate-200 dark:border-navy-800"
      }`}
    >
      {/* Top Header Strip with Service & Rank Badge */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
        <Image
          src={ranker.photoUrl}
          alt={`Photo of ${ranker.name}, AIR ${ranker.air} UPSC CSE`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

        {/* All India Rank Floating Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/90 text-white border border-gold-500/80 shadow-md backdrop-blur-sm">
          <Award className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-serif font-bold text-xs text-gold-300">
            AIR {ranker.air}
          </span>
          <span className="text-[10px] text-slate-300 font-sans">
            (CSE {ranker.year})
          </span>
        </div>

        {/* Service Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-block px-3 py-1 text-xs uppercase tracking-wider rounded-md border shadow-sm ${getServiceBadge(
              ranker.service
            )}`}
          >
            {ranker.service}
          </span>
        </div>

        {/* Alumnus Seal */}
        {ranker.isAlumnus && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-maroon-700/95 text-white border border-gold-400/50 text-[10.5px] font-semibold shadow-sm backdrop-blur-sm">
            <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
            <span>MIT-WPU Alumnus</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Name & Cadre */}
          <div className="mb-2">
            <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white group-hover:text-maroon-700 dark:group-hover:text-gold-400 transition-colors">
              {ranker.name}
            </h3>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2 mt-0.5">
              <span>Cadre: <strong className="text-navy-950 dark:text-gold-300">{ranker.cadre}</strong></span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {ranker.homeState}
              </span>
            </p>
          </div>

          {/* MIT-WPU Connection Details if Alumnus */}
          {ranker.isAlumnus && ranker.alumniDetails && (
            <div className="mb-3 p-2 rounded-lg bg-maroon-50 dark:bg-navy-950/70 border border-maroon-100 dark:border-maroon-900/40 text-[11px] text-maroon-900 dark:text-slate-300">
              <span className="font-bold text-maroon-800 dark:text-gold-400">
                Batch {ranker.alumniDetails.batch}:
              </span>{" "}
              {ranker.alumniDetails.degree}
            </div>
          )}

          {/* Optional Subject & Marksheet summary */}
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 mb-3">
            <div className="flex items-center gap-1.5 truncate">
              <BookOpen className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span className="truncate">
                Optional: <strong className="text-slate-800 dark:text-slate-200">{ranker.optionalSubject}</strong>
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Total Score: <span className="font-semibold text-navy-900 dark:text-gold-400">{ranker.marksheet.totalMarks} / 2025</span> (Interview: {ranker.marksheet.interviewMarks})
            </div>
          </div>

          {/* Inspirational Quote snippet */}
          <blockquote className="text-[11.5px] italic text-slate-500 dark:text-slate-400 line-clamp-2 border-l-2 border-gold-500 pl-2 mb-4">
            "{ranker.quote}"
          </blockquote>
        </div>

        {/* Card Footer Action */}
        <div className="pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs font-semibold">
          <span className="text-[11px] text-slate-400">Attempt: #{ranker.attempts}</span>
          <Link
            href={`/rankers/${ranker.id}`}
            className="inline-flex items-center gap-1 text-maroon-700 dark:text-gold-400 hover:text-maroon-900 dark:hover:text-gold-300 transition-colors font-bold"
          >
            <span>Read Strategy & Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
