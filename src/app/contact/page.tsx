"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Building,
  User,
  Clock,
  ExternalLink,
} from "lucide-react";
import { EVENT_DETAILS } from "@/data/mockData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Inquiry about Felicitation & Registration",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Mail className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Liaison & Secretariat</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          Contact Organising Committee
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Reach out to the Centre for Civil Services Guidance & School of Government
          for delegate inquiries, school/college group delegations, and media accreditations.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
          <div className="p-3 w-fit rounded-xl bg-gold-50 dark:bg-navy-800 text-gold-600">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
            Campus Venue
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Swami Vivekananda Sabhagruha & World Peace Dome
            <br />
            MIT World Peace University (MIT-WPU)
            <br />
            S.No. 124, Paud Road, Kothrud, Pune, Maharashtra - 411038
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
          <div className="p-3 w-fit rounded-xl bg-maroon-50 dark:bg-navy-800 text-maroon-700">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
            Helplines & Desk
          </h3>
          <p className="text-slate-600 dark:text-slate-300 space-y-1">
            <span className="block font-semibold">Secretariat Desk: +91 (020) 2570 3400</span>
            <span className="block font-semibold">Faculty Coordinator: +91 98220 12345</span>
            <span className="block text-slate-400">Timings: Mon – Sat (09:00 AM – 06:00 PM)</span>
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
          <div className="p-3 w-fit rounded-xl bg-blue-50 dark:bg-navy-800 text-blue-600">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white">
            Official Email
          </h3>
          <p className="text-slate-600 dark:text-slate-300 space-y-1">
            <span className="block font-semibold">
              <a href="mailto:civilservices@mitwpu.edu.in" className="hover:text-gold-500">
                civilservices@mitwpu.edu.in
              </a>
            </span>
            <span className="block text-slate-400">
              For media passes: <a href="mailto:media@mitwpu.edu.in" className="hover:text-gold-500">media@mitwpu.edu.in</a>
            </span>
          </p>
        </div>
      </div>

      {/* Interactive Form & Google Map Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-4">
          <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
            Send an Inquiry to the Coordinator
          </h2>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="font-serif font-bold text-base text-emerald-950 dark:text-emerald-200">
                Message Received!
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Thank you for contacting us. The organizing committee will respond to your email within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Patil"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98220 00000"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 dark:text-slate-300">Message / Inquiry *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="State your query clearly..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Google Maps Embed & Transit Info */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-3 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official overflow-hidden">
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
              <iframe
                title="MIT World Peace University Kothrud Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.541434972179!2d73.81249767519129!3d18.504403882586717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9e02377317%3A0x6b3064cfcb378855!2sMIT%20World%20Peace%20University%20(MIT-WPU)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-3 text-xs text-slate-500 flex items-center justify-between">
              <span>📍 Paud Road, Kothrud, Pune - 411038</span>
              <a
                href="https://maps.google.com/?q=MIT+World+Peace+University+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-700 dark:text-gold-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Transit Advice */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 text-xs space-y-2">
            <h4 className="font-serif font-bold text-sm text-navy-950 dark:text-white">
              Directions to MIT-WPU Kothrud Campus
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              • <strong>From Pune Junction Railway Station:</strong> ~8 km (approx. 25 mins by cab / Vanaz Metro Station).
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              • <strong>From Pune International Airport (Lohegaon):</strong> ~17 km (approx. 45 mins).
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              • <strong>Nearest Metro Station:</strong> Vanaz or Ideal Colony Metro Station (Line 2 - Aqua Line, 5 mins walk to Gate #2).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
