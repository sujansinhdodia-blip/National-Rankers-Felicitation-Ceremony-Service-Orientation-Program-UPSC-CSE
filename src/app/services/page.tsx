import React from "react";
import Link from "next/link";
import {
  Compass,
  Landmark,
  Shield,
  Globe,
  Coins,
  GraduationCap,
  Scale,
  Award,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { SERVICE_INFO } from "@/data/mockData";

export const metadata = {
  title: "Service Orientation | All India & Central Services Guide – MIT-WPU",
  description:
    "Comprehensive guide to All India Services (IAS, IPS, IFoS) and Central Services Group A (IFS, IRS, IAAS). Roles, responsibilities, LBSNAA training, career ladder, and cadre allocation.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Civil Services Orientation Module</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          All India & Central Services Orientation
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          Understanding the constitutional framework, hierarchy, training academies, and career trajectories
          of India's premier civil services.
        </p>
      </div>

      {/* Constitutional Overview: All India vs Central Services */}
      <section className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-gold-50 dark:bg-navy-800 text-gold-600">
              <Shield className="w-5 h-5" />
            </span>
            <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
              All India Services (AIS)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Governed under <strong>Article 312</strong> of the Constitution of India. Comprises the
            <strong> Indian Administrative Service (IAS)</strong>, <strong>Indian Police Service (IPS)</strong>,
            and <strong>Indian Forest Service (IFoS)</strong>.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <li>• Common to both the Union and the States.</li>
            <li>• Recruited by the Union (UPSC), but allocated to State cadres.</li>
            <li>• Serve the State Government in early-to-mid career, with central deputation opportunities to Union Ministries.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-maroon-50 dark:bg-navy-800 text-maroon-700">
              <Landmark className="w-5 h-5" />
            </span>
            <h2 className="font-serif font-bold text-xl text-navy-950 dark:text-white">
              Central Civil Services (CCS Group A & B)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Administered directly under the Union Government. Includes the <strong>Indian Foreign Service (IFS)</strong>,
            <strong> Indian Revenue Service (IRS IT & Customs)</strong>, <strong>IAAS (Audit & Accounts)</strong>,
            and <strong>IDAS (Defence Accounts)</strong>.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <li>• Exclusively administer Union subjects (Foreign Policy, Direct Taxes, Customs, Railway Traffic, Audit).</li>
            <li>• No state cadre binding; postings across the country and overseas diplomatic missions.</li>
          </ul>
        </div>
      </section>

      {/* Cadre Allocation Policy Explained */}
      <section className="p-8 rounded-3xl bg-slate-100/70 dark:bg-navy-900/40 border border-slate-200 dark:border-navy-800 space-y-4">
        <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-gold-600" />
          <span>The Cadre Allocation Policy (Zone System)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Introduced by the Department of Personnel and Training (DoPT) in 2017, the Cadre Allocation Policy
          divides Indian states into <strong>5 Zones</strong> to ensure pan-India national integration and balanced administrative distribution:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-300 mb-1">Zone I (North)</strong>
            <span className="text-slate-500 dark:text-slate-400">AGMUT, Himachal Pradesh, Uttarakhand, Punjab, Rajasthan, Haryana</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-300 mb-1">Zone II (Central)</strong>
            <span className="text-slate-500 dark:text-slate-400">Uttar Pradesh, Bihar, Jharkhand, Madhya Pradesh, Odisha</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-300 mb-1">Zone III (West)</strong>
            <span className="text-slate-500 dark:text-slate-400">Maharashtra, Gujarat, Chhattisgarh</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-300 mb-1">Zone IV (East)</strong>
            <span className="text-slate-500 dark:text-slate-400">West Bengal, Sikkim, Assam-Meghalaya, Manipur, Tripura, Nagaland</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-300 mb-1">Zone V (South)</strong>
            <span className="text-slate-500 dark:text-slate-400">Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana</span>
          </div>
        </div>
      </section>

      {/* Dedicated Profiles for Each Key Service */}
      <div className="space-y-12">
        {SERVICE_INFO.map((srv) => (
          <div
            key={srv.code}
            id={srv.code.toLowerCase()}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-6"
          >
            {/* Service Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-navy-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 dark:text-gold-400">
                  {srv.type}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white mt-0.5">
                  {srv.name} ({srv.code})
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Apex Post: <strong className="text-navy-950 dark:text-slate-200">{srv.apexPost}</strong>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Training Academy</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{srv.trainingAcademy}</span>
              </div>
            </div>

            {/* Roles & Responsibilities */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                Primary Roles & Constitutional Mandate
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                {srv.roles.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-navy-950/60">
                    <span className="text-gold-600 font-bold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Ladder Progression */}
            <div className="space-y-2 pt-2">
              <h4 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                Career Hierarchy & Promotion Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                {srv.careerLadder.map((step, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-950"
                  >
                    <span className="font-mono text-[10px] text-maroon-700 dark:text-gold-400 font-bold block">
                      Level {i + 1}
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cadre Policy Note */}
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 dark:border-navy-800">
              <strong>Cadre & Posting Framework:</strong> {srv.cadrePolicy}
            </div>
          </div>
        ))}
      </div>

      {/* Training Academies Spotlight */}
      <section className="p-8 rounded-3xl bg-navy-950 text-white border border-gold-500/40 shadow-official space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Cradle of Civil Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
            Premier Training Academies of India
          </h2>
          <p className="text-xs text-slate-300 mt-2">
            Where freshly selected probationers are transformed into ethical administrators through rigor,
            Bharat Darshan village attachments, and simulated district crises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
            <span className="font-bold text-gold-300 block mb-1">LBSNAA, Mussoorie</span>
            <p className="text-slate-400">
              Lal Bahadur Shastri National Academy of Administration. Conducts the 3.5-month Foundation Course for all civil services.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
            <span className="font-bold text-gold-300 block mb-1">SVPNPA, Hyderabad</span>
            <p className="text-slate-400">
              Sardar Vallabhbhai Patel National Police Academy. Intensive outdoor tactical, weapon, and cyber forensic training for IPS.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
            <span className="font-bold text-gold-300 block mb-1">SSIFS, New Delhi</span>
            <p className="text-slate-400">
              Sushma Swaraj Institute of Foreign Service. International relations protocol, treaty negotiation, and diplomatic languages for IFS.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
            <span className="font-bold text-gold-300 block mb-1">NADT, Nagpur</span>
            <p className="text-slate-400">
              National Academy of Direct Taxes. Financial intelligence, transfer pricing, and digital audit systems for IRS (Income Tax).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
