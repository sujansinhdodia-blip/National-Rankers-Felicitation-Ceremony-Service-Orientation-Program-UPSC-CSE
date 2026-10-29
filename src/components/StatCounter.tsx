import React from "react";
import { Award, Users, Mic, Landmark, GraduationCap } from "lucide-react";

export const StatCounter = () => {
  const stats = [
    {
      label: "National Rankers Felicitated",
      value: "25+",
      sub: "AIR 8, 24, 41 & Top 100",
      icon: Award,
      color: "text-gold-600 dark:text-gold-400",
      bg: "bg-gold-50 dark:bg-navy-900/60 border-gold-200 dark:border-navy-700",
    },
    {
      label: "Serving Officers & Chief Guests",
      value: "12+",
      sub: "IAS, IPS, IFS & Central Leaders",
      icon: Mic,
      color: "text-maroon-700 dark:text-maroon-400",
      bg: "bg-maroon-50 dark:bg-navy-900/60 border-maroon-200 dark:border-navy-700",
    },
    {
      label: "MIT-WPU Alumni in Services",
      value: "50+",
      sub: "Across All India & State Cadres",
      icon: GraduationCap,
      color: "text-navy-900 dark:text-blue-300",
      bg: "bg-blue-50 dark:bg-navy-900/60 border-blue-200 dark:border-navy-700",
    },
    {
      label: "Aspirants & Delegates Attending",
      value: "1,500+",
      sub: "Offline & Live Stream Delegates",
      icon: Users,
      color: "text-emerald-700 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-navy-900/60 border-emerald-200 dark:border-navy-700",
    },
    {
      label: "Service Orientation Sessions",
      value: "6",
      sub: "IAS, IPS, IFS, IRS & Allied",
      icon: Landmark,
      color: "text-purple-700 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-navy-900/60 border-purple-200 dark:border-navy-700",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
      {stats.map((s, idx) => {
        const IconComponent = s.icon;
        return (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-xl border ${s.bg} flex flex-col justify-between shadow-sm transition-all hover:shadow-official hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`p-2 rounded-lg bg-white dark:bg-navy-800 shadow-sm ${s.color}`}>
                <IconComponent className="w-5 h-5" />
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Official
              </span>
            </div>
            <div>
              <div className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white leading-none mb-1">
                {s.value}
              </div>
              <h4 className="text-xs font-bold text-navy-900 dark:text-slate-200 leading-tight mb-0.5">
                {s.label}
              </h4>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400">{s.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
