"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Video, Newspaper, Award, Filter, ExternalLink } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos" | "press">("all");

  const photos = [
    {
      title: "Ceremonial Citation & Medallion Conferment",
      category: "Ceremony",
      date: "Past Felicitation Edition",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      caption: "All India Rankers receiving the Rashtra Seva Ratna memento on the grand dais at MIT-WPU.",
    },
    {
      title: "Lamp Lighting & World Peace Prayer",
      category: "Inaugural",
      date: "Swami Vivekananda Sabhagruha",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      caption: "Dignitaries, Vice Chancellor, and Chief Guests initiating the proceedings with auspicious Vedic peace invocation.",
    },
    {
      title: "IAS & IPS Service Orientation Masterclass",
      category: "Masterclass",
      date: "Sant Dnyaneshwar Hall",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      caption: "Over 800 aspiring students engrossed during the service orientation session on district governance.",
    },
    {
      title: "1-on-1 Mentorship Breakout Discussions",
      category: "Mentorship",
      date: "Seminar Pavilion",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      caption: "Aspirants reviewing Mains answer copies and receiving personalized study timeline audits.",
    },
    {
      title: "MIT-WPU World Peace Dome Aerial View",
      category: "Campus",
      date: "Kothrud, Pune",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      caption: "The majestic World Peace Dome, venue of the national gathering of scholars and administrators.",
    },
    {
      title: "Dignitaries Executive Luncheon & Networking",
      category: "Networking",
      date: "Banquet Hall",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      caption: "Informal exchange between serving senior IAS officers, alumni rankers, and faculty members.",
    },
  ];

  const pressClippings = [
    {
      publication: "The Indian Express",
      headline: "MIT-WPU Felicitates UPSC CSE Rankers; Focus on Ethical Leadership in Civil Services",
      date: "November 2023",
      snippet: "Addressing the gathering, key dignitaries urged young probationers to act as catalysts for democratic accountability and universal harmony.",
    },
    {
      publication: "The Times of India",
      headline: "Over 20 UPSC Toppers Guide College Aspirants at Pune's World Peace Dome",
      date: "October 2023",
      snippet: "Engineering and humanities students from across Maharashtra attended the service orientation sessions at MIT-WPU.",
    },
    {
      publication: "Maharashtra Times / Sakaal",
      headline: "एमआयटी वर्ल्ड पीस युनिव्हर्सिटीतर्फे यूपीएससी गुणवंतांचा राष्ट्रीय गौरव सोहळा संपन्न",
      date: "December 2023",
      snippet: "राष्ट्रसेवेचा वसा घेतलेल्या यशस्वी अधिकाऱ्यांना सन्मानित करताना कुलगुरूंनी शांतता शिक्षणाचे महत्त्व अधोरेखित केले.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Camera className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Ceremony Archives & Media</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Gallery, Video Highlights & Press Coverage
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Glimpses of past felicitation ceremonies, dignitary addresses, student interactive sessions,
          and national news reports.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-slate-200 dark:border-navy-800 pb-4 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "all"
              ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800"
          }`}
        >
          All Highlights
        </button>
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === "photos"
              ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800"
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Ceremony Photos</span>
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === "videos"
              ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800"
          }`}
        >
          <Video className="w-3.5 h-3.5" />
          <span>Video Masterclasses</span>
        </button>
        <button
          onClick={() => setActiveTab("press")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === "press"
              ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800"
          }`}
        >
          <Newspaper className="w-3.5 h-3.5" />
          <span>Press Coverage</span>
        </button>
      </div>

      {/* Photo Grid */}
      {(activeTab === "all" || activeTab === "photos") && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            Ceremony Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-official transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-navy-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-950/80 text-gold-300 backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] text-slate-400 block">{item.date}</span>
                  <h3 className="font-serif font-bold text-sm text-navy-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Highlights */}
      {(activeTab === "all" || activeTab === "videos") && (
        <div className="space-y-4 pt-6">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            Broadcast & Video Sessions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Felicitation Highlights"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
                National Felicitation Ceremony Highlights & Address by Former Cabinet Secretary
              </h3>
              <p className="text-xs text-slate-500">
                Full 45-minute inaugural ceremony recorded live from Swami Vivekananda Sabhagruha, MIT-WPU.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Topper Strategy Panel"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
                Topper Panel: Cracking UPSC CSE in 1st Attempt from College
              </h3>
              <p className="text-xs text-slate-500">
                Interactive dialogue featuring AIR 8 Aditya Deshmukh and AIR 24 Priyanka Kulkarni.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Press Coverage */}
      {(activeTab === "all" || activeTab === "press") && (
        <div className="space-y-4 pt-6">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            National & Regional Press Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressClippings.map((press, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-maroon-700 dark:text-gold-400 font-bold uppercase tracking-wider">
                    <span>{press.publication}</span>
                    <span className="text-slate-400 font-normal">{press.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-navy-950 dark:text-white leading-snug">
                    "{press.headline}"
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {press.snippet}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-navy-800 text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <span>Official Media Clipping</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
