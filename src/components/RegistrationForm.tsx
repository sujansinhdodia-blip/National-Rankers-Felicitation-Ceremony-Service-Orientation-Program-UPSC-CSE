"use client";

import React, { useState } from "react";
import QRCode from "qrcode";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle,
  Download,
  Printer,
  ShieldCheck,
  QrCode,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Calendar,
  MapPin,
  RefreshCw,
  Award,
} from "lucide-react";
import { Registration } from "@/types";
import { saveRegistration } from "@/lib/storage";
import { EVENT_DETAILS } from "@/data/mockData";
import { MitWpuLogo } from "./MitWpuLogo";
import { AshokaChakra } from "./AshokaEmblem";

export const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState<"student" | "external">("student");
  const [loading, setLoading] = useState(false);
  const [registeredPass, setRegisteredPass] = useState<Registration | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "MIT World Peace University, Pune",
    prnOrId: "",
    yearOfStudy: "3rd Year",
    branchOrDegree: "B.Tech Computer Engineering",
    serviceInterest: "IAS (Indian Administrative Service)",
    mode: "offline" as "offline" | "online",
    guestDesignation: "",
    mediaOrg: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const passId = `MITWPU-UPSC-${randomNum}`;
      const timestamp = new Date().toISOString();

      const qrPayload = JSON.stringify({
        passId,
        name: formData.fullName,
        inst: formData.institution,
        cat: activeTab,
        mode: formData.mode,
        event: "UPSC-Felicitation-2026",
      });

      // Generate dynamic QR code data URL
      const qrDataUrl = await QRCode.toDataURL(qrPayload, {
        width: 240,
        margin: 1,
        color: {
          dark: "#0B1F4B",
          light: "#FFFFFF",
        },
      });

      const newRegistration: Registration = {
        id: `reg-${Date.now()}`,
        passId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        category: activeTab,
        institution: formData.institution,
        prnOrId: formData.prnOrId || "EXT-" + randomNum,
        yearOfStudy: activeTab === "student" ? formData.yearOfStudy : "Guest/Professional",
        branchOrDegree: activeTab === "student" ? formData.branchOrDegree : formData.guestDesignation || "External Dignitary",
        serviceInterest: formData.serviceInterest,
        mode: formData.mode,
        timestamp,
        qrCodeData: qrPayload,
      };

      // Save to storage
      saveRegistration(newRegistration);
      setRegisteredPass(newRegistration);
      setQrCodeUrl(qrDataUrl);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C9A227", "#8B1E2D", "#0B1F4B"],
        });
      } catch (err) {
        // ignore in non-browser or sandbox
      }
    } catch (err) {
      console.error("Error generating pass:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleReset = () => {
    setRegisteredPass(null);
    setQrCodeUrl("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      institution: "MIT World Peace University, Pune",
      prnOrId: "",
      yearOfStudy: "3rd Year",
      branchOrDegree: "",
      serviceInterest: "IAS (Indian Administrative Service)",
      mode: "offline",
      guestDesignation: "",
      mediaOrg: "",
    });
  };

  // If already registered in this session, show Digital Pass
  if (registeredPass && qrCodeUrl) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="no-print p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold text-sm">Registration Confirmed Successfully!</p>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Your official QR-code entry pass has been generated. Confirmation sent to {registeredPass.email}.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Pass</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-emerald-400 bg-white dark:bg-navy-900 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              New Registration
            </button>
          </div>
        </div>

        {/* OFFICIAL DIGITAL ENTRY PASS (PRINT-READY) */}
        <div className="print-card relative bg-white border-2 border-navy-900 dark:border-gold-500/80 rounded-2xl overflow-hidden shadow-official-lg text-navy-950">
          {/* Top Decorative Tricolour Strip */}
          <div className="tricolour-ribbon" />

          {/* Pass Header */}
          <div className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b-2 border-gold-500">
            <div className="flex items-center gap-3">
              <MitWpuLogo variant="crest" monochrome={false} />
              <div>
                <span className="font-serif font-bold text-sm sm:text-base tracking-wide block uppercase text-gold-300">
                  MIT World Peace University, Pune
                </span>
                <span className="text-[11px] text-slate-300 block">
                  Centre for Civil Services Guidance & School of Government
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] tracking-widest uppercase block text-slate-400 font-bold">
                Pass Number
              </span>
              <span className="font-mono font-bold text-sm text-gold-400">
                {registeredPass.passId}
              </span>
            </div>
          </div>

          {/* Pass Banner */}
          <div className="bg-maroon-700 text-white px-6 py-2 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-400" />
              <span>OFFICIAL CEREMONY ENTRY DELEGATE PASS</span>
            </div>
            <span className="uppercase tracking-wider font-bold text-[10px] bg-white/20 px-2 py-0.5 rounded">
              {registeredPass.mode === "offline" ? "🏛️ In-Person Dome Pass" : "💻 Live Stream Access"}
            </span>
          </div>

          {/* Pass Body */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Delegate Details */}
            <div className="md:col-span-8 space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Delegate Name
                </span>
                <span className="font-serif font-bold text-lg text-navy-950">
                  {registeredPass.fullName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Category & ID / PRN
                  </span>
                  <span className="font-semibold text-slate-800">
                    {registeredPass.category.toUpperCase()} • {registeredPass.prnOrId}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Service Interest
                  </span>
                  <span className="font-semibold text-slate-800">
                    {registeredPass.serviceInterest}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Institution / Affiliation
                </span>
                <span className="font-medium text-slate-800">
                  {registeredPass.institution}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-maroon-700" />
                  <span>{EVENT_DETAILS.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                  <span>World Peace Dome, Kothrud</span>
                </div>
              </div>
            </div>

            {/* Right QR Code Section */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              {/* Generated QR Code Image */}
              <img
                src={qrCodeUrl}
                alt="Entry Verification QR Code"
                className="w-36 h-36 border border-navy-900 rounded-lg p-1 bg-white shadow-sm"
              />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-2">
                Scan at Security Check
              </span>
              <span className="text-[9px] text-slate-400">Gate #2 & Sabhagruha Foyer</span>
            </div>
          </div>

          {/* Pass Footer Instructions */}
          <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 text-[10px] text-slate-600 flex items-center justify-between">
            <span>• Please carry a valid Photo ID along with this pass.</span>
            <span>• Seating closes at 09:15 AM sharp.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 rounded-2xl shadow-official overflow-hidden">
      {/* Form Tabs */}
      <div className="grid grid-cols-2 border-b border-slate-200 dark:border-navy-800 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab("student")}
          className={`py-3.5 px-4 text-center transition-colors flex items-center justify-center gap-2 ${
            activeTab === "student"
              ? "bg-navy-900 dark:bg-navy-800 text-white border-b-2 border-gold-500 font-bold"
              : "bg-slate-50 dark:bg-navy-950 text-slate-600 dark:text-slate-400 hover:text-navy-900"
          }`}
        >
          <GraduationCap className="w-4 h-4 text-gold-400" />
          <span>Student / Aspirant Registration</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("external")}
          className={`py-3.5 px-4 text-center transition-colors flex items-center justify-center gap-2 ${
            activeTab === "external"
              ? "bg-navy-900 dark:bg-navy-800 text-white border-b-2 border-gold-500 font-bold"
              : "bg-slate-50 dark:bg-navy-950 text-slate-600 dark:text-slate-400 hover:text-navy-900"
          }`}
        >
          <Building className="w-4 h-4 text-gold-400" />
          <span>External Guests, Faculty & Media</span>
        </button>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
        <div className="border-b border-slate-100 dark:border-navy-800 pb-3">
          <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white">
            {activeTab === "student"
              ? "Aspirant & Student Delegate Application"
              : "External Guest, Faculty & Press Accreditation"}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Complimentary registration sponsored by MIT-WPU Centre for Civil Services Guidance.
          </p>
        </div>

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Full Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              Full Name (As you want on the Certificate & Entry Pass) *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ananya Shinde"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              Email Address (For Pass & Updates) *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ananya@example.com"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              Mobile Number (WhatsApp Enabled) *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          {/* Institution */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              College / University / Organization *
            </label>
            <input
              type="text"
              required
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="e.g. MIT World Peace University, COEP, Fergusson College..."
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            />
          </div>

          {/* Student Specific Fields */}
          {activeTab === "student" ? (
            <>
              {/* PRN / Student ID */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Student PRN / College Roll No. *
                </label>
                <input
                  type="text"
                  required
                  value={formData.prnOrId}
                  onChange={(e) => setFormData({ ...formData, prnOrId: e.target.value })}
                  placeholder="e.g. 1032210874"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Year of Study */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Current Year of Study *
                </label>
                <select
                  value={formData.yearOfStudy}
                  onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                >
                  <option>1st Year (Foundation)</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>Final Year / Graduate</option>
                  <option>Postgraduate / Scholar</option>
                  <option>Full-Time UPSC Aspirant</option>
                </select>
              </div>

              {/* Branch / Degree */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Degree & Major *
                </label>
                <input
                  type="text"
                  required
                  value={formData.branchOrDegree}
                  onChange={(e) => setFormData({ ...formData, branchOrDegree: e.target.value })}
                  placeholder="e.g. B.Tech Mechanical / B.A. Economics"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>
            </>
          ) : (
            <>
              {/* Designation for External / Media */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Designation / Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.guestDesignation}
                  onChange={(e) => setFormData({ ...formData, guestDesignation: e.target.value })}
                  placeholder="e.g. Assistant Professor, Senior Correspondent"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700 dark:text-slate-300">
                  Media Publication / Department
                </label>
                <input
                  type="text"
                  value={formData.mediaOrg}
                  onChange={(e) => setFormData({ ...formData, mediaOrg: e.target.value })}
                  placeholder="e.g. The Indian Express / Sakaal / University Dept"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>
            </>
          )}

          {/* Primary Service Interest */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              Primary Civil Service of Interest *
            </label>
            <select
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
            >
              <option>IAS (Indian Administrative Service)</option>
              <option>IPS (Indian Police Service)</option>
              <option>IFS (Indian Foreign Service)</option>
              <option>IRS (Income Tax & Customs)</option>
              <option>IAAS (Indian Audit & Accounts)</option>
              <option>MPSC (State Civil Services - Deputy Collector/DySP)</option>
              <option>Multiple / General Civil Services</option>
            </select>
          </div>

          {/* Mode of Attendance */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="font-semibold text-slate-700 dark:text-slate-300 block">
              Mode of Attendance *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <label
                className={`p-3 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${
                  formData.mode === "offline"
                    ? "border-maroon-700 bg-maroon-50/50 dark:bg-navy-800"
                    : "border-slate-300 dark:border-navy-700"
                }`}
              >
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  checked={formData.mode === "offline"}
                  onChange={() => setFormData({ ...formData, mode: "offline" })}
                  className="text-maroon-700"
                />
                <div>
                  <span className="font-bold block text-navy-900 dark:text-slate-200">
                    🏛️ In-Person (World Peace Dome, Pune)
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Complimentary Delegate Kit, High Tea & Direct Ranker Networking
                  </span>
                </div>
              </label>

              <label
                className={`p-3 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${
                  formData.mode === "online"
                    ? "border-maroon-700 bg-maroon-50/50 dark:bg-navy-800"
                    : "border-slate-300 dark:border-navy-700"
                }`}
              >
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  checked={formData.mode === "online"}
                  onChange={() => setFormData({ ...formData, mode: "online" })}
                  className="text-maroon-700"
                />
                <div>
                  <span className="font-bold block text-navy-900 dark:text-slate-200">
                    💻 Live Webcast Stream
                  </span>
                  <span className="text-[11px] text-slate-500">
                    HD Interactive Live Broadcast & Digital Certificate
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-navy-800">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-serif font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-official disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-gold-400" />
                <span>Generating Official Pass...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Confirm Registration & Generate QR Pass</span>
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-500 mt-2">
            No registration fee required. An official digital entry pass will be generated instantly.
          </p>
        </div>
      </form>
    </div>
  );
};
