import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  GraduationCap,
  Layers,
  Award,
  Clock,
  Target,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "UPSC CSE Guidance Blueprint | College Student Preparation Roadmap – MIT-WPU",
  description:
    "Exhaustive guide to UPSC Civil Services Exam pattern, eligibility, optional subject selection, 4-year undergraduate roadmap, and other government exams (MPSC, SSC, Banking).",
};

export default function GuidancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 dark:bg-navy-800 text-gold-900 dark:text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>Aspirant Master Blueprint</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 dark:text-white">
          UPSC CSE Guidance & Strategic Roadmap
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          The definitive roadmap designed by the MIT-WPU Centre for Civil Services Guidance
          for college students and serious government exam aspirants.
        </p>
      </div>

      {/* 1. ELIGIBILITY, ATTEMPTS & PATTERN SUMMARY */}
      <section className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-6">
        <div className="border-b border-slate-100 dark:border-navy-800 pb-3">
          <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">
            1. Eligibility Criteria & Age Limits
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">As notified in the official UPSC CSE Gazette</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2">
            <span className="font-bold text-sm text-navy-900 dark:text-gold-400 block">
              Educational Qualification
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Candidate must hold a Bachelor’s Degree from any recognized Central, State, or Deemed University.
              Students in their final year of graduation are eligible to appear for the Preliminary examination.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2">
            <span className="font-bold text-sm text-navy-900 dark:text-gold-400 block">
              Age Limits (As on August 1)
            </span>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              <li>• General & EWS: <strong>21 to 32 Years</strong></li>
              <li>• OBC (Non-Creamy): <strong>21 to 35 Years</strong> (3 yrs relaxation)</li>
              <li>• SC / ST: <strong>21 to 37 Years</strong> (5 yrs relaxation)</li>
              <li>• PwBD Candidates: Up to <strong>42 Years</strong></li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2">
            <span className="font-bold text-sm text-navy-900 dark:text-gold-400 block">
              Number of Attempts
            </span>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              <li>• General & EWS: <strong>6 Attempts</strong></li>
              <li>• OBC: <strong>9 Attempts</strong></li>
              <li>• SC / ST: <strong>Unlimited</strong> (within age limit)</li>
              <li>• Note: An attempt is counted only if you appear in at least one paper of Prelims.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. THREE-STAGE EXAMINATION BLUEPRINT */}
      <section id="blueprint" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
            Structure of the Marathon
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white mt-1">
            2. The 3-Stage UPSC CSE Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stage 1: Prelims */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 dark:bg-navy-800 dark:text-gold-300">
              Stage I (Objective Screening)
            </span>
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Preliminary Examination (400 Marks)
            </h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                <strong>GS Paper I (200 Marks, 100 MCQs):</strong> History, Polity, Economy, Geography, Environment, Science & Current Affairs. Determines Prelims cutoff.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                <strong>CSAT Paper II (200 Marks, 80 MCQs):</strong> Reading comprehension, logical reasoning, and basic numeracy. Qualifying only (min 33% = 66 marks).
              </div>
            </div>
          </div>

          {/* Stage 2: Mains */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-maroon-100 text-maroon-900 dark:bg-navy-800 dark:text-maroon-300">
              Stage II (Subjective Written)
            </span>
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Mains Examination (1750 Marks)
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <p>• <strong>Qualifying:</strong> Indian Language (300) & English (300)</p>
              <p>• <strong>Essay Paper:</strong> 2 essays, 250 Marks</p>
              <p>• <strong>GS I:</strong> Heritage, History, Geography, Society (250)</p>
              <p>• <strong>GS II:</strong> Governance, Constitution, Polity, IR (250)</p>
              <p>• <strong>GS III:</strong> Economy, Tech, Environment, Security (250)</p>
              <p>• <strong>GS IV:</strong> Ethics, Integrity & Aptitude (250)</p>
              <p>• <strong>Optional:</strong> Paper 1 & 2 (250 + 250 = 500)</p>
            </div>
          </div>

          {/* Stage 3: Interview */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 dark:bg-navy-800 dark:text-blue-300">
              Stage III (Personality Test)
            </span>
            <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">
              Interview Test (275 Marks)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Conducted at Dholpur House, New Delhi by a board headed by a UPSC Member. Evaluates mental alertness, critical assimilation, clear logical exposition, balanced judgment, and moral integrity.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs font-semibold text-navy-950 dark:text-gold-300">
              Grand Total: 2025 Marks (Determines final All India Rank & Service Allocation)
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPTIONAL SUBJECT SELECTION GUIDE */}
      <section className="p-8 rounded-3xl bg-slate-100/70 dark:bg-navy-900/40 border border-slate-200 dark:border-navy-800 space-y-4">
        <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-gold-600" />
          <span>3. How to Choose Your Optional Subject</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The Optional subject carries 500 marks (nearly 30% of the Mains total) and is often the primary differentiator between getting an All India Rank or missing the list. Follow this 4-step framework:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-400 font-serif mb-1">1. Interest & Sustained Reading</strong>
            <p className="text-slate-600 dark:text-slate-300">You must read this subject for 600+ hours. If you find the syllabus tedious, you will struggle to develop high-scoring analytical depth.</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-400 font-serif mb-1">2. Overlap with General Studies</strong>
            <p className="text-slate-600 dark:text-slate-300">Subjects like PSIR (GS-2), Sociology (GS-1/4), Geography (GS-1/3), and Public Administration (GS-2/4) heavily reinforce GS preparation.</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-400 font-serif mb-1">3. Availability of Mentorship & Material</strong>
            <p className="text-slate-600 dark:text-slate-300">Ensure high quality standard notes, solved PYQ compilations, and reliable test series evaluators exist for your subject.</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
            <strong className="block text-navy-950 dark:text-gold-400 font-serif mb-1">4. Past Scoring Trends</strong>
            <p className="text-slate-600 dark:text-slate-300">Analyze the number of candidates securing 280+ marks in recent UPSC examinations before finalizing.</p>
          </div>
        </div>
      </section>

      {/* 4. YEAR-WISE ROADMAP FOR UNDERGRADUATES */}
      <section id="roadmap" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
            Balancing College with UPSC
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white mt-1">
            4. 4-Year Undergraduate Preparation Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400 block">
              1st Year (Foundation)
            </span>
            <h4 className="font-bold text-sm text-navy-950 dark:text-white">Curiosity & Habit Building</h4>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>• Read The Hindu / Indian Express daily (1 hr).</li>
              <li>• Complete NCERTs (Class 9 to 12) for History, Geography, and Polity.</li>
              <li>• Maintain high academic CGPA in degree.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="font-mono text-xs font-bold text-maroon-700 dark:text-maroon-400 block">
              2nd Year (Static Core)
            </span>
            <h4 className="font-bold text-sm text-navy-950 dark:text-white">Core Subjects & Optional Choice</h4>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>• Thorough study of Laxmikanth, Spectrum History, and Shankar IAS Environment.</li>
              <li>• Explore syllabi and finalize Optional Subject.</li>
              <li>• Analyze last 10 years of Prelims PYQs.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400 block">
              3rd Year (Mains Depth)
            </span>
            <h4 className="font-bold text-sm text-navy-950 dark:text-white">Optional Mastery & Answer Writing</h4>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>• Complete 100% syllabus of Optional Paper 1 & 2.</li>
              <li>• Daily 2 answer writing practice for GS.</li>
              <li>• Prepare Ethics (GS-4) through 50 case studies.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm space-y-2">
            <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 block">
              Final Year (Execution)
            </span>
            <h4 className="font-bold text-sm text-navy-950 dark:text-white">Test Series & First Attempt</h4>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>• Solve 40 full-length Prelims mock tests.</li>
              <li>• Intense CSAT practice sessions weekly.</li>
              <li>• Appear in UPSC CSE immediately upon qualifying graduation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. OTHER GOVERNMENT EXAMINATIONS OVERVIEW */}
      <section id="other-exams" className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-official space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 dark:text-gold-400">
            Parallel Examination Opportunities
          </span>
          <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white mt-1">
            5. State PSCs & Allied Government Examinations
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            How your UPSC preparation seamlessly empowers you to qualify other prestigious government careers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">MPSC Rajyaseva (Maharashtra)</strong>
            <p className="text-slate-600 dark:text-slate-300">Recruits Deputy Collectors, DySP, and Tehsildars. The new syllabus is 90% identical to the UPSC descriptive pattern with added Maharashtra context.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">RBI Grade B Officer</strong>
            <p className="text-slate-600 dark:text-slate-300">Prestigious managerial role in India's central bank. Tests Economic & Social Issues (ESI) and Finance, which directly overlap with UPSC GS-3.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">SSC CGL (Central Ministries)</strong>
            <p className="text-slate-600 dark:text-slate-300">Recruits Assistant Section Officers (ASO) in Central Secretariat, Intelligence Bureau, and Inspectors in GST & Enforcement Directorate.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">CAPF (Assistant Commandant)</strong>
            <p className="text-slate-600 dark:text-slate-300">UPSC-conducted exam for direct Gazetted Officer recruitment into BSF, CRPF, CISF, ITBP, and SSB.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">CDS & AFCAT (Defense Services)</strong>
            <p className="text-slate-600 dark:text-slate-300">Commissioned Officer entries into the Indian Army, Navy, and Air Force. Strong overlap in General Studies and English.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1.5">
            <strong className="font-serif text-sm text-navy-950 dark:text-gold-300 block">State PSCs across India</strong>
            <p className="text-slate-600 dark:text-slate-300">UPPSC, BPSC, KPSC, and RPSC. Candidates with solid UPSC foundations consistently top state civil services examinations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="p-6 rounded-2xl bg-maroon-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-official">
        <div>
          <h3 className="font-serif font-bold text-lg">
            Download the Comprehensive UPSC Guidance Syllabus Kit
          </h3>
          <p className="text-xs text-slate-200">
            Free downloadable PDF compiled by MIT-WPU Centre for Civil Services Guidance.
          </p>
        </div>
        <Link
          href="/resources"
          className="shrink-0 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
        >
          Access Study Resources →
        </Link>
      </div>
    </div>
  );
}
