"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, ChevronRight, Sparkles } from "lucide-react";
import { Announcement } from "@/types";
import { getStoredAnnouncements } from "@/lib/storage";

export const NoticeTicker = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const list = getStoredAnnouncements();
    setAnnouncements(list);

    if (list.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % list.length);
      }, 5500);
      return () => clearInterval(interval);
    }
  }, []);

  if (announcements.length === 0) return null;

  const current = announcements[currentIndex];

  return (
    <div className="bg-navy-950 text-white border-b border-navy-800 text-xs py-1.5 px-3 md:px-6 relative overflow-hidden z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-maroon-700 text-white shadow-sm animate-pulse">
            <Bell className="w-3 h-3" />
            Official Bulletin
          </span>
          <span className="hidden sm:inline-block text-gold-400 font-serif text-[11px]">|</span>
        </div>

        {/* Scrolling Ticker Text */}
        <div className="flex-1 truncate text-slate-200 text-center md:text-left transition-all duration-500 ease-in-out">
          <Link
            href={current.link || "/schedule"}
            className="hover:text-gold-400 transition-colors inline-flex items-center gap-2 max-w-full truncate"
          >
            {current.isNew && (
              <span className="shrink-0 px-1.5 py-0.2 text-[9px] font-bold bg-gold-600 text-navy-950 rounded uppercase">
                New
              </span>
            )}
            <span className="truncate">{current.title}</span>
            <span className="hidden md:inline text-[11px] text-slate-400">({current.date})</span>
          </Link>
        </div>

        {/* Quick link button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 text-[11px]">
          <Link
            href="/register"
            className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            Get Entry Pass
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
