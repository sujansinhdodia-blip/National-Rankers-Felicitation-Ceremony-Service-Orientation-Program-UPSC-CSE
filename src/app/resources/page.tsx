"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, Download, FileText, BookOpen, Filter, CheckCircle2 } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";
import { getStoredResources } from "@/lib/storage";
import { ResourceItem } from "@/types";

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setResources(getStoredResources());
  }, []);

  const categories = [
    "All",
    "Syllabus",
    "PYQs",
    "Standard Books",
    "Toppers Notes",
    "Current Affairs",
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const matchesSearch =
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (res.authorOrSource && res.authorOrSource.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === "All" || res.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [resources, searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Curated Academic Repository</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          UPSC CSE Study Resources & Topper Notes
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Free downloadable syllabi, thematic previous year questions (PYQs), topper handwritten copies,
          and authoritative reading lists curated by the MIT-WPU Centre for Civil Services Guidance.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by topic, subject (Ethics, Sociology, Polity), PYQs, or topper copies..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-slate-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-navy-800">
          <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 shadow-sm"
                  : "bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <strong>{filteredResources.length}</strong> verified study materials
        </span>
        <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Free for all aspirants
        </span>
      </div>

      {/* Grid of Resource Cards */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
          <FileText className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
            No Study Materials Found
          </h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search keywords or switching category filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 rounded-lg bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
