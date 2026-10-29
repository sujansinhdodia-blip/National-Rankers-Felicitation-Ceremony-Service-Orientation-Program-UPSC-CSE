"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Award,
  Search,
  GraduationCap,
  RotateCcw,
} from "lucide-react";
import { RankerCard } from "@/components/RankerCard";
import { getStoredRankers } from "@/lib/storage";
import { Ranker } from "@/types";

function RankersContent() {
  const searchParams = useSearchParams();
  const initialAlumniFilter = searchParams.get("alumni") === "true";

  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<string>("All");
  const [selectedRankRange, setSelectedRankRange] = useState<string>("All");
  const [onlyAlumni, setOnlyAlumni] = useState<boolean>(initialAlumniFilter);
  const [sortBy, setSortBy] = useState<"rank" | "year">("rank");

  useEffect(() => {
    setRankers(getStoredRankers());
  }, []);

  const years = ["All", "2023", "2022", "2021"];
  const services = ["All", "IAS", "IPS", "IFS", "IRS", "IAAS"];
  const rankRanges = [
    { label: "All Ranks", value: "All" },
    { label: "Top 25 (AIR 1 - 25)", value: "top25" },
    { label: "Top 50 (AIR 1 - 50)", value: "top50" },
    { label: "Top 100 (AIR 1 - 100)", value: "top100" },
    { label: "AIR 100+", value: "above100" },
  ];

  const filteredRankers = useMemo(() => {
    return rankers
      .filter((r) => {
        const matchesSearch =
          r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.optionalSubject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.cadre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.homeState.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesYear =
          selectedYear === "All" || r.year.toString() === selectedYear;

        const matchesService =
          selectedService === "All" ||
          r.service.toLowerCase().includes(selectedService.toLowerCase());

        let matchesRank = true;
        if (selectedRankRange === "top25") matchesRank = r.air <= 25;
        else if (selectedRankRange === "top50") matchesRank = r.air <= 50;
        else if (selectedRankRange === "top100") matchesRank = r.air <= 100;
        else if (selectedRankRange === "above100") matchesRank = r.air > 100;

        const matchesAlumni = !onlyAlumni || r.isAlumnus;

        return (
          matchesSearch &&
          matchesYear &&
          matchesService &&
          matchesRank &&
          matchesAlumni
        );
      })
      .sort((a, b) => {
        if (sortBy === "rank") return a.air - b.air;
        return b.year - a.year;
      });
  }, [
    rankers,
    searchTerm,
    selectedYear,
    selectedService,
    selectedRankRange,
    onlyAlumni,
    sortBy,
  ]);

  const resetAllFilters = () => {
    setSearchTerm("");
    setSelectedYear("All");
    setSelectedService("All");
    setSelectedRankRange("All");
    setOnlyAlumni(false);
    setSortBy("rank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-navy-800 pb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Hall of Fame • Civil Services Examination</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 dark:text-white">
          National Rankers Directory
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
          Explore complete profiles, optional subjects, marksheet statistics, and preparation journeys
          of UPSC CSE toppers felicitated by MIT World Peace University, Pune.
        </p>
      </div>

      {/* Filter and Search Control Panel */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-4">
        {/* Search Bar & Alumni Switch */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ranker name, optional subject (PSIR, Sociology...), state, or cadre..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-slate-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* MIT-WPU Alumni Toggle Button */}
            <button
              onClick={() => setOnlyAlumni(!onlyAlumni)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                onlyAlumni
                  ? "bg-maroon-700 text-white shadow-md ring-2 ring-maroon-500/40"
                  : "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span>MIT-WPU Alumni Only</span>
            </button>

            {/* Reset Filters */}
            <button
              onClick={resetAllFilters}
              title="Reset Filters"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-navy-900 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dropdown Filters Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-navy-800 text-xs">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              UPSC CSE Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y === "All" ? "All Years" : `UPSC CSE ${y}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Service Allotted
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "All Services" : s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              AIR Rank Range
            </label>
            <select
              value={selectedRankRange}
              onChange={(e) => setSelectedRankRange(e.target.value)}
              className="w-full p-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            >
              {rankRanges.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "rank" | "year")}
              className="w-full p-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            >
              <option value="rank">AIR Rank (Lowest to Highest)</option>
              <option value="year">Examination Year (Recent First)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing <strong>{filteredRankers.length}</strong> felicitated rankers
          {onlyAlumni ? " (MIT-WPU Alumni)" : ""}
        </span>
        {onlyAlumni && (
          <span className="text-maroon-700 dark:text-gold-400 font-semibold">
            🎓 MIT-WPU Alumni Filter Active
          </span>
        )}
      </div>

      {/* Ranker Cards Grid */}
      {filteredRankers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRankers.map((ranker) => (
            <RankerCard key={ranker.id} ranker={ranker} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-4">
          <Award className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white">
            No Rankers Found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No rankers matched your current combination of filters. Try clearing filters or searching with a different term.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-4 py-2 rounded-lg bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-semibold"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function RankersPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs text-slate-500">
          Loading National Rankers Directory...
        </div>
      }
    >
      <RankersContent />
    </Suspense>
  );
}
