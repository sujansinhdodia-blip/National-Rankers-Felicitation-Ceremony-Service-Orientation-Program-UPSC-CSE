"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle, ExternalLink } from "lucide-react";
import { ResourceItem } from "@/types";

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Create a mock download blob for demonstration
    const content = `MIT-WPU Centre for Civil Services Guidance\nResource: ${resource.title}\nCategory: ${resource.category}\nSource: ${resource.authorOrSource || "MIT-WPU UPSC Cell"}\n\nThis material is curated exclusively for UPSC CSE aspirants at MIT-WPU Pune.`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${resource.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, "_")}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-official transition-all duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 dark:bg-navy-800 dark:text-gold-300">
            {resource.category}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            {resource.fileType} • {resource.fileSize}
          </span>
        </div>

        <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white leading-snug mb-2">
          {resource.title}
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          {resource.description}
        </p>

        {resource.authorOrSource && (
          <div className="text-[11px] text-slate-500 mb-4">
            Curated by: <strong className="text-slate-700 dark:text-slate-300">{resource.authorOrSource}</strong>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
        <span className="text-[10px] text-slate-400 font-medium">Free Academic Resource</span>
        <button
          onClick={handleDownload}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            downloaded
              ? "bg-green-600 text-white"
              : "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 hover:bg-navy-800 dark:hover:bg-gold-400 shadow-sm"
          }`}
        >
          {downloaded ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Downloaded</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Download Material</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
