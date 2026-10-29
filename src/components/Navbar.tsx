"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Award,
  BookOpen,
  Calendar,
  Compass,
  FileText,
  UserCheck,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Lock,
} from "lucide-react";
import { MitWpuLogo } from "./MitWpuLogo";
import { ThemeToggle } from "./ThemeToggle";
import { NoticeTicker } from "./NoticeTicker";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [guidanceDropdown, setGuidanceDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setGuidanceDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Rankers (Hall of Fame)",
      href: "/rankers",
      highlight: true,
      badge: "Toppers",
    },
    { label: "Speakers", href: "/speakers" },
    { label: "Schedule", href: "/schedule" },
    {
      label: "Services",
      href: "/services",
      isDropdown: true,
      subItems: [
        { label: "All India Services (IAS, IPS, IFoS)", href: "/services#ias" },
        { label: "Central Services (IFS, IRS, IAAS)", href: "/services#central" },
        { label: "Cadre Allocation & LBSNAA Training", href: "/services#training" },
      ],
    },
    {
      label: "Guidance",
      href: "/guidance",
      isDropdown: true,
      subItems: [
        { label: "UPSC CSE 3-Stage Blueprint", href: "/guidance#blueprint" },
        { label: "College Student Roadmap", href: "/guidance#roadmap" },
        { label: "Other Govt Exams (MPSC, SSC, Banking)", href: "/guidance#other-exams" },
      ],
    },
    { label: "Resources", href: "/resources" },
    { label: "Mentorship", href: "/mentorship" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Subtle National Tricolour Ribbon at Top */}
      <div className="tricolour-ribbon" />

      {/* Announcements Notice Ticker */}
      <NoticeTicker />

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-official border-slate-200 dark:border-navy-800 py-2.5"
            : "bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* University & Event Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded p-1"
            >
              <MitWpuLogo variant="full" />
              <div className="hidden xl:block h-9 w-[1px] bg-slate-200 dark:bg-navy-700" />
              <div className="hidden xl:flex flex-col">
                <span className="font-serif font-bold text-xs uppercase text-maroon-700 dark:text-gold-400 tracking-wider">
                  UPSC CSE Felicitation 2026
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  National Rankers Ceremony & Orientation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.isDropdown) {
                  const isDropdownActive = pathname.startsWith(link.href);
                  const isCurrentOpen =
                    link.label === "Services" ? servicesDropdown : guidanceDropdown;
                  const setToggle =
                    link.label === "Services"
                      ? setServicesDropdown
                      : setGuidanceDropdown;

                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setToggle(true)}
                      onMouseLeave={() => setToggle(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold tracking-wide transition-colors ${
                          isDropdownActive
                            ? "text-maroon-700 dark:text-gold-400 bg-maroon-50/50 dark:bg-navy-800"
                            : "text-navy-900 dark:text-slate-200 hover:text-maroon-700 dark:hover:text-gold-400"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                      </button>

                      {isCurrentOpen && (
                        <div className="absolute top-full left-0 w-64 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg shadow-official-lg py-2 mt-0.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-xs font-bold text-navy-900 dark:text-gold-400 border-b border-slate-100 dark:border-navy-800 hover:bg-slate-50 dark:hover:bg-navy-800"
                          >
                            Explore All {link.label} Overview →
                          </Link>
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-gold-50 dark:hover:bg-navy-800 hover:text-maroon-700 dark:hover:text-gold-400 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-2.5 py-1.5 rounded text-xs font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "text-maroon-700 dark:text-gold-400 bg-maroon-50 dark:bg-navy-800 border-b-2 border-maroon-700 dark:border-gold-400"
                        : "text-navy-900 dark:text-slate-200 hover:text-maroon-700 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800/60"
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 text-[9px] font-bold rounded bg-gold-600 text-navy-950 uppercase tracking-tighter">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {/* Admin Portal Shortcut */}
              <Link
                href="/admin"
                title="Admin Dashboard"
                className="hidden sm:inline-flex items-center gap-1 p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-gold-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors text-xs"
              >
                <Lock className="w-4 h-4" />
              </Link>

              {/* Primary Register CTA Button */}
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-maroon-700 hover:bg-maroon-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-official hover:-translate-y-0.5 border border-maroon-600 focus:outline-none focus:ring-2 focus:ring-maroon-500"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden sm:inline">Register Now</span>
                <span className="sm:hidden">Register</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-navy-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-950 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col gap-1.5">
              <div className="p-2 mb-2 bg-slate-50 dark:bg-navy-900 rounded-md border border-slate-200 dark:border-navy-800">
                <span className="block text-[11px] font-bold text-maroon-700 dark:text-gold-400 uppercase tracking-wider">
                  Event Date & Venue
                </span>
                <span className="text-xs text-navy-900 dark:text-slate-200 font-medium">
                  Nov 14, 2026 • World Peace Dome, Kothrud, Pune
                </span>
              </div>

              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-slate-100 dark:border-navy-800/60 pb-1">
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-2 px-2 text-sm font-semibold rounded ${
                      pathname === link.href
                        ? "text-maroon-700 dark:text-gold-400 bg-maroon-50/60 dark:bg-navy-900"
                        : "text-navy-900 dark:text-slate-200 hover:text-maroon-700 dark:hover:text-gold-400"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-gold-600 text-navy-950">
                        {link.badge}
                      </span>
                    )}
                  </Link>

                  {link.subItems && (
                    <div className="ml-4 pl-2 border-l-2 border-gold-500/40 space-y-1 mt-1">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-maroon-700 dark:hover:text-gold-400"
                        >
                          • {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <Link
                  href="/register"
                  className="w-full text-center py-2.5 rounded-md bg-maroon-700 text-white font-semibold text-sm shadow-md"
                >
                  Register Now (Free Entry Pass)
                </Link>
                <Link
                  href="/admin"
                  className="w-full text-center py-2 rounded-md border border-slate-300 dark:border-navy-700 text-navy-900 dark:text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Admin Dashboard Portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
