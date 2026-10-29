import React from "react";
import Image from "next/image";
import { Clock, MapPin, Mic, Building2 } from "lucide-react";
import { Speaker } from "@/types";

interface SpeakerCardProps {
  speaker: Speaker;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-official transition-all duration-300">
      <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-navy-950">
        <Image
          src={speaker.photoUrl}
          alt={speaker.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded text-[10.5px] font-bold uppercase tracking-wider bg-maroon-700 text-white shadow-sm">
            {speaker.role}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white">
              {speaker.honorific ? `${speaker.honorific} ` : ""}
              {speaker.name}
            </h3>
            <p className="text-xs font-semibold text-gold-600 dark:text-gold-400">
              {speaker.title}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{speaker.organization}</span>
            </div>
          </div>

          {/* Session Topic Box */}
          <div className="my-3 p-3 rounded-lg bg-navy-50 dark:bg-navy-950/80 border border-navy-100 dark:border-navy-800 text-xs">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-maroon-700 dark:text-maroon-400 mb-1 flex items-center gap-1">
              <Mic className="w-3 h-3" />
              Session Address
            </span>
            <p className="font-medium text-navy-950 dark:text-slate-200 leading-snug">
              {speaker.sessionTopic}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {speaker.bio}
          </p>
        </div>

        {/* Timing and Venue */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-600" />
            {speaker.time}
          </span>
          <span className="flex items-center gap-1 truncate max-w-[150px]">
            <MapPin className="w-3 h-3 text-gold-600 shrink-0" />
            <span className="truncate">{speaker.venue}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
