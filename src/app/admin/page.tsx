"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  Unlock,
  Award,
  Users,
  Bell,
  Download,
  Trash2,
  Plus,
  RefreshCw,
  CheckCircle,
  Database,
  Search,
  ExternalLink,
} from "lucide-react";
import { Ranker, Registration, Announcement } from "@/types";
import {
  getStoredRankers,
  saveRanker,
  deleteRanker,
  resetRankers,
  getStoredRegistrations,
  exportRegistrationsToCSV,
  getStoredAnnouncements,
  saveAnnouncement,
  deleteAnnouncement,
} from "@/lib/storage";
import { isSupabaseConfigured } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState<"rankers" | "registrations" | "announcements" | "settings">("rankers");
  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [regSearch, setRegSearch] = useState("");
  const [showAddRankerModal, setShowAddRankerModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // New Ranker Form State
  const [newRanker, setNewRanker] = useState({
    name: "",
    year: 2023,
    air: 15,
    service: "IAS",
    cadre: "Maharashtra",
    homeState: "Maharashtra",
    isAlumnus: true,
    batch: "2020",
    dept: "School of Government",
    degree: "Master in Government",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    optionalSubject: "Political Science & IR",
    attempts: 2,
    mainsTotal: 810,
    interviewMarks: 195,
    totalMarks: 1005,
    quote: "True leadership is humble service to the public.",
    biography: "Passionate administrator with strong grounding in ethical governance and public leadership from MIT-WPU.",
    preparationJourney: "Balanced degree coursework with consistent current affairs deconstruction and 50+ mock tests.",
    strategyPrelims: "Strict NCERT revision and daily newspaper notes.",
    strategyMains: "Crisp point-wise answers with constitutional case studies.",
    strategyInterview: "DAF depth and authentic, calm demeanor.",
    strategyOptional: "Mastery over classical and contemporary thinkers.",
  });

  // New Announcement State
  const [newAnnTitle, setNewAnnTitle] = useState("");
  const [newAnnLink, setNewAnnLink] = useState("/schedule");

  useEffect(() => {
    // Check if session pin remembered
    if (sessionStorage.getItem("mitwpu_admin_auth") === "true") {
      setIsAuthenticated(true);
    }
    refreshData();
  }, []);

  const refreshData = () => {
    setRankers(getStoredRankers());
    setRegistrations(getStoredRegistrations());
    setAnnouncements(getStoredAnnouncements());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 1983 (Year MIT was founded) or admin123
    if (pin === "1983" || pin === "admin123" || pin === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("mitwpu_admin_auth", "true");
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("mitwpu_admin_auth");
  };

  const handleCreateRanker = (e: React.FormEvent) => {
    e.preventDefault();
    const rankerId = newRanker.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-" + Date.now().toString().slice(-4);

    const formattedRanker: Ranker = {
      id: rankerId,
      name: newRanker.name,
      year: Number(newRanker.year),
      air: Number(newRanker.air),
      service: newRanker.service,
      cadre: newRanker.cadre,
      homeState: newRanker.homeState,
      isAlumnus: newRanker.isAlumnus,
      alumniDetails: newRanker.isAlumnus
        ? {
            batch: newRanker.batch,
            department: newRanker.dept,
            degree: newRanker.degree,
          }
        : undefined,
      photoUrl: newRanker.photoUrl,
      optionalSubject: newRanker.optionalSubject,
      attempts: Number(newRanker.attempts),
      marksheet: {
        prelimsScore: "Cleared comfortably",
        mainsTotal: Number(newRanker.mainsTotal),
        interviewMarks: Number(newRanker.interviewMarks),
        totalMarks: Number(newRanker.totalMarks),
      },
      quote: newRanker.quote,
      biography: newRanker.biography,
      preparationJourney: newRanker.preparationJourney,
      strategy: {
        prelims: newRanker.strategyPrelims,
        mains: newRanker.strategyMains,
        interview: newRanker.strategyInterview,
        optional: newRanker.strategyOptional,
      },
      tipsForAspirants: [
        "Focus on revision cycles every 15 days.",
        "Solve last 10 years of UPSC PYQs thoroughly.",
        "Maintain ethical composure in the Personality Test.",
      ],
      featured: true,
    };

    const updated = saveRanker(formattedRanker);
    setRankers(updated);
    setShowAddRankerModal(false);
    setSuccessMessage(`Successfully added ${newRanker.name} to the Hall of Fame!`);
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleDeleteRanker = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name} from the database?`)) {
      const updated = deleteRanker(id);
      setRankers(updated);
    }
  };

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle) return;

    const newAnn: Announcement = {
      id: `ann-${Date.now()}`,
      title: newAnnTitle,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      isNew: true,
      link: newAnnLink,
    };

    const updated = saveAnnouncement(newAnn);
    setAnnouncements(updated);
    setNewAnnTitle("");
    setSuccessMessage("Announcement posted to the top banner notice ticker!");
    setTimeout(() => setSuccessMessage(""), 3500);
  };

  const handleDeleteAnnouncement = (id: string) => {
    const updated = deleteAnnouncement(id);
    setAnnouncements(updated);
  };

  const filteredRegistrations = registrations.filter(
    (r) =>
      r.fullName.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.email.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.passId.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.institution.toLowerCase().includes(regSearch.toLowerCase())
  );

  // Authentication Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official-lg space-y-6">
          <div className="text-center space-y-2">
            <div className="p-3 w-fit mx-auto rounded-2xl bg-gold-50 dark:bg-navy-800 text-gold-600 border border-gold-300 dark:border-navy-700">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">
              Admin Portal Login
            </h1>
            <p className="text-xs text-slate-500">
              Authorised access for MIT-WPU Civil Services Guidance Committee
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Security PIN / Password
              </label>
              <input
                type="password"
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (Default: 1983)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-gold-500"
              />
              <span className="text-[11px] text-slate-400 block">
                Demo Security PIN: <strong className="text-navy-900 dark:text-gold-400 font-mono">1983</strong> or <strong className="text-navy-900 dark:text-gold-400 font-mono">admin123</strong>
              </span>
            </div>

            {pinError && (
              <p className="text-xs text-red-600 dark:text-red-400 font-semibold">
                Invalid Security PIN. Please enter 1983 or admin123.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Authenticate & Enter</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-navy-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 dark:text-gold-400">
            Internal Operations Portal
          </span>
          <h1 className="font-serif font-bold text-3xl text-navy-950 dark:text-white mt-1">
            MIT-WPU Felicitation Admin Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage rankers, export attendee registrations, and post official bulletin notices.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={refreshData}
            className="p-2 rounded-lg border border-slate-300 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-red-300 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold hover:bg-red-50 dark:hover:bg-red-950/40"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {successMessage && (
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Metrics Counter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Total Felicitated Rankers</span>
            <div className="font-serif font-bold text-3xl text-navy-950 dark:text-white mt-1">
              {rankers.length}
            </div>
            <span className="text-[11px] text-gold-600 dark:text-gold-400 font-medium">
              {rankers.filter((r) => r.isAlumnus).length} MIT-WPU Alumni
            </span>
          </div>
          <Award className="w-8 h-8 text-gold-500" />
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Registered Delegates</span>
            <div className="font-serif font-bold text-3xl text-navy-950 dark:text-white mt-1">
              {registrations.length}
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">
              Ready for CSV Export
            </span>
          </div>
          <Users className="w-8 h-8 text-maroon-600" />
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Active Announcements</span>
            <div className="font-serif font-bold text-3xl text-navy-950 dark:text-white mt-1">
              {announcements.length}
            </div>
            <span className="text-[11px] text-blue-600 font-medium">
              Live in Notice Ticker
            </span>
          </div>
          <Bell className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Dashboard Nav Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-navy-800 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("rankers")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "rankers"
              ? "border-maroon-700 text-maroon-700 dark:border-gold-400 dark:text-gold-400 font-bold"
              : "border-transparent text-slate-500 hover:text-navy-950"
          }`}
        >
          Manage Rankers ({rankers.length})
        </button>

        <button
          onClick={() => setActiveTab("registrations")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "registrations"
              ? "border-maroon-700 text-maroon-700 dark:border-gold-400 dark:text-gold-400 font-bold"
              : "border-transparent text-slate-500 hover:text-navy-950"
          }`}
        >
          Delegate Registrations ({registrations.length})
        </button>

        <button
          onClick={() => setActiveTab("announcements")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "announcements"
              ? "border-maroon-700 text-maroon-700 dark:border-gold-400 dark:text-gold-400 font-bold"
              : "border-transparent text-slate-500 hover:text-navy-950"
          }`}
        >
          Announcements Ticker ({announcements.length})
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "settings"
              ? "border-maroon-700 text-maroon-700 dark:border-gold-400 dark:text-gold-400 font-bold"
              : "border-transparent text-slate-500 hover:text-navy-950"
          }`}
        >
          Database & Supabase Config
        </button>
      </div>

      {/* 1. RANKERS TAB CONTENT */}
      {activeTab === "rankers" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
              Hall of Fame Database
            </h2>
            <button
              onClick={() => setShowAddRankerModal(!showAddRankerModal)}
              className="px-4 py-2 rounded-xl bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddRankerModal ? "Close Form" : "Add New Ranker"}</span>
            </button>
          </div>

          {/* Add Ranker Form Drawer / Modal */}
          {showAddRankerModal && (
            <form
              onSubmit={handleCreateRanker}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-gold-500/80 shadow-official-lg space-y-4 text-xs animate-in fade-in"
            >
              <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white border-b border-slate-100 dark:border-navy-800 pb-2">
                Add Topper to Official Hall of Fame
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Ranker Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newRanker.name}
                    onChange={(e) => setNewRanker({ ...newRanker, name: e.target.value })}
                    placeholder="e.g. Chinmay Gaikwad"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">All India Rank (AIR) *</label>
                  <input
                    type="number"
                    required
                    value={newRanker.air}
                    onChange={(e) => setNewRanker({ ...newRanker, air: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">UPSC CSE Year *</label>
                  <select
                    value={newRanker.year}
                    onChange={(e) => setNewRanker({ ...newRanker, year: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  >
                    <option value={2024}>2024</option>
                    <option value={2023}>2023</option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                    <option value={2020}>2020</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Service Allotted *</label>
                  <select
                    value={newRanker.service}
                    onChange={(e) => setNewRanker({ ...newRanker, service: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  >
                    <option>IAS</option>
                    <option>IPS</option>
                    <option>IFS</option>
                    <option>IRS (Income Tax)</option>
                    <option>IRS (Customs & GST)</option>
                    <option>IAAS</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Cadre Allotted *</label>
                  <input
                    type="text"
                    required
                    value={newRanker.cadre}
                    onChange={(e) => setNewRanker({ ...newRanker, cadre: e.target.value })}
                    placeholder="e.g. Maharashtra / AGMUT"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Home State *</label>
                  <input
                    type="text"
                    required
                    value={newRanker.homeState}
                    onChange={(e) => setNewRanker({ ...newRanker, homeState: e.target.value })}
                    placeholder="e.g. Maharashtra"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Optional Subject *</label>
                  <input
                    type="text"
                    required
                    value={newRanker.optionalSubject}
                    onChange={(e) => setNewRanker({ ...newRanker, optionalSubject: e.target.value })}
                    placeholder="e.g. PSIR / Sociology / Geography"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Number of Attempts</label>
                  <input
                    type="number"
                    value={newRanker.attempts}
                    onChange={(e) => setNewRanker({ ...newRanker, attempts: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Total Marks (out of 2025)</label>
                  <input
                    type="number"
                    value={newRanker.totalMarks}
                    onChange={(e) => setNewRanker({ ...newRanker, totalMarks: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1 sm:col-span-3">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Photo URL (Square/Portrait)</label>
                  <input
                    type="url"
                    required
                    value={newRanker.photoUrl}
                    onChange={(e) => setNewRanker({ ...newRanker, photoUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1 sm:col-span-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newRanker.isAlumnus}
                      onChange={(e) => setNewRanker({ ...newRanker, isAlumnus: e.target.checked })}
                      className="rounded text-maroon-700"
                    />
                    <span className="font-bold text-navy-950 dark:text-gold-400">
                      Is this Ranker an MIT-WPU Alumnus?
                    </span>
                  </label>
                </div>

                {newRanker.isAlumnus && (
                  <>
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Alumni Batch Year</label>
                      <input
                        type="text"
                        value={newRanker.batch}
                        onChange={(e) => setNewRanker({ ...newRanker, batch: e.target.value })}
                        placeholder="e.g. 2020"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950"
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Degree & Department</label>
                      <input
                        type="text"
                        value={newRanker.degree}
                        onChange={(e) => setNewRanker({ ...newRanker, degree: e.target.value })}
                        placeholder="e.g. B.Tech Computer Engineering / Master in Government"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-1 sm:col-span-3">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Inspirational Quote</label>
                  <input
                    type="text"
                    value={newRanker.quote}
                    onChange={(e) => setNewRanker({ ...newRanker, quote: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3 border-t border-slate-100 dark:border-navy-800">
                <button
                  type="button"
                  onClick={() => setShowAddRankerModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-maroon-700 text-white font-bold text-xs uppercase"
                >
                  Save & Publish to Hall of Fame
                </button>
              </div>
            </form>
          )}

          {/* Rankers List Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-navy-950 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-navy-800">
                <tr>
                  <th className="py-3 px-4">Rank & Name</th>
                  <th className="py-3 px-4">Service & Cadre</th>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Optional</th>
                  <th className="py-3 px-4">MIT-WPU Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-navy-800 text-slate-700 dark:text-slate-300">
                {rankers.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gold-600 dark:text-gold-400 font-serif">
                          AIR {r.air}
                        </span>
                        <strong className="text-navy-950 dark:text-white">{r.name}</strong>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-semibold">{r.service}</span> ({r.cadre})
                    </td>
                    <td className="py-3 px-4">{r.year}</td>
                    <td className="py-3 px-4">{r.optionalSubject}</td>
                    <td className="py-3 px-4">
                      {r.isAlumnus ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-maroon-100 text-maroon-800 dark:bg-maroon-900/60 dark:text-maroon-300">
                          Alumnus ({r.alumniDetails?.batch})
                        </span>
                      ) : (
                        <span className="text-slate-400">National Candidate</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <a
                        href={`/rankers/${r.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleDeleteRanker(r.id, r.name)}
                        className="text-red-600 hover:text-red-800 font-semibold p-1"
                        title="Delete Ranker"
                      >
                        <Trash2 className="w-3.5 h-3.5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. REGISTRATIONS TAB WITH 1-CLICK CSV EXPORT */}
      {activeTab === "registrations" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
                Attendee Registrations Log ({registrations.length})
              </h2>
              <p className="text-xs text-slate-500">
                All confirmed attendees with generated pass IDs and QR verification payload.
              </p>
            </div>

            <button
              onClick={() => exportRegistrationsToCSV(registrations)}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export All to CSV Spreadsheet</span>
            </button>
          </div>

          {/* Search Table */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={regSearch}
              onChange={(e) => setRegSearch(e.target.value)}
              placeholder="Search by pass ID, delegate name, email, or institution..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-xs text-slate-800 dark:text-slate-200"
            />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-navy-950 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-navy-800">
                <tr>
                  <th className="py-3 px-4">Pass ID</th>
                  <th className="py-3 px-4">Delegate Name</th>
                  <th className="py-3 px-4">Contact Info</th>
                  <th className="py-3 px-4">Institution & ID</th>
                  <th className="py-3 px-4">Service Interest</th>
                  <th className="py-3 px-4">Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-navy-800 text-slate-700 dark:text-slate-300">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="py-3 px-4 font-mono font-bold text-gold-600 dark:text-gold-400">
                      {reg.passId}
                    </td>
                    <td className="py-3 px-4 font-semibold text-navy-950 dark:text-white">
                      {reg.fullName}
                      <span className="block text-[10px] text-slate-400 font-normal capitalize">
                        {reg.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div>{reg.email}</div>
                      <div className="text-[11px] text-slate-400">{reg.phone}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="truncate max-w-[200px]">{reg.institution}</div>
                      <div className="text-[10px] text-slate-400">ID: {reg.prnOrId}</div>
                    </td>
                    <td className="py-3 px-4">{reg.serviceInterest}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          reg.mode === "offline"
                            ? "bg-maroon-100 text-maroon-800 dark:bg-maroon-900/60 dark:text-maroon-300"
                            : "bg-blue-100 text-blue-800 dark:bg-navy-800 dark:text-blue-300"
                        }`}
                      >
                        {reg.mode}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. ANNOUNCEMENTS TICKER TAB */}
      {activeTab === "announcements" && (
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            Manage Notice Ticker & Bulletins
          </h2>

          <form
            onSubmit={handleCreateAnnouncement}
            className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3 text-xs"
          >
            <h3 className="font-bold text-sm text-navy-950 dark:text-white">
              Broadcast New Notice
            </h3>
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 dark:text-slate-300">
                Notice Title / Headline *
              </label>
              <input
                type="text"
                required
                value={newAnnTitle}
                onChange={(e) => setNewAnnTitle(e.target.value)}
                placeholder="e.g. Seat Allocation update for World Peace Dome..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 dark:text-slate-300">
                Target Link (Optional)
              </label>
              <input
                type="text"
                value={newAnnLink}
                onChange={(e) => setNewAnnLink(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold uppercase text-xs"
            >
              Post to Notice Ticker
            </button>
          </form>

          <div className="space-y-2">
            {announcements.map((ann) => (
              <div
                key={ann.id}
                className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex items-center justify-between gap-4 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    {ann.isNew && (
                      <span className="px-1.5 py-0.2 rounded bg-gold-600 text-navy-950 text-[9px] font-bold uppercase">
                        New
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400">{ann.date}</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{ann.title}</span>
                </div>
                <button
                  onClick={() => handleDeleteAnnouncement(ann.id)}
                  className="text-red-600 hover:text-red-800 p-1 shrink-0"
                  title="Remove Notice"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. SETTINGS & SUPABASE CONFIG TAB */}
      {activeTab === "settings" && (
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            System & Storage Configuration
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4 text-xs">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-gold-600" />
              <h3 className="font-bold text-sm text-navy-950 dark:text-white">
                Database Engine Status
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
              <div className="flex items-center justify-between">
                <span>Supabase Cloud Integration:</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    isSupabaseConfigured
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {isSupabaseConfigured ? "Connected" : "Local Browser Storage (Active)"}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                To connect to remote Supabase DB, supply `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
              <div>
                <span className="font-bold block text-navy-950 dark:text-white">
                  Reset Mock Seed Data
                </span>
                <span className="text-slate-500 text-[11px]">
                  Restores default 2023/2022 rankers, schedule, and announcements.
                </span>
              </div>
              <button
                onClick={() => {
                  if (confirm("Reset rankers data to initial official mock data?")) {
                    const fresh = resetRankers();
                    setRankers(fresh);
                    setSuccessMessage("Seed data restored successfully!");
                  }
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-navy-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              >
                Reset Default Seed Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
