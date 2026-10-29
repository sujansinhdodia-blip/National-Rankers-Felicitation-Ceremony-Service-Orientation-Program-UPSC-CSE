import { Ranker, Registration, Announcement, ResourceItem } from "@/types";
import { INITIAL_RANKERS, INITIAL_ANNOUNCEMENTS, RESOURCES } from "@/data/mockData";

const STORAGE_KEYS = {
  RANKERS: "mitwpu_upsc_rankers_v1",
  REGISTRATIONS: "mitwpu_upsc_registrations_v1",
  ANNOUNCEMENTS: "mitwpu_upsc_announcements_v1",
  RESOURCES: "mitwpu_upsc_resources_v1",
  MENTORSHIP: "mitwpu_upsc_mentorship_v1",
};

export const getStoredRankers = (): Ranker[] => {
  if (typeof window === "undefined") return INITIAL_RANKERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RANKERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.RANKERS, JSON.stringify(INITIAL_RANKERS));
      return INITIAL_RANKERS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading rankers from localStorage", err);
    return INITIAL_RANKERS;
  }
};

export const saveRanker = (ranker: Ranker): Ranker[] => {
  if (typeof window === "undefined") return INITIAL_RANKERS;
  try {
    const current = getStoredRankers();
    const index = current.findIndex((r) => r.id === ranker.id);
    let updated: Ranker[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = ranker;
    } else {
      updated = [ranker, ...current];
    }
    localStorage.setItem(STORAGE_KEYS.RANKERS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error saving ranker", err);
    return INITIAL_RANKERS;
  }
};

export const deleteRanker = (id: string): Ranker[] => {
  if (typeof window === "undefined") return INITIAL_RANKERS;
  try {
    const current = getStoredRankers();
    const updated = current.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.RANKERS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error deleting ranker", err);
    return INITIAL_RANKERS;
  }
};

export const resetRankers = (): Ranker[] => {
  if (typeof window === "undefined") return INITIAL_RANKERS;
  localStorage.setItem(STORAGE_KEYS.RANKERS, JSON.stringify(INITIAL_RANKERS));
  return INITIAL_RANKERS;
};

// Registrations
const INITIAL_DEMO_REGISTRATIONS: Registration[] = [
  {
    id: "reg-demo-1",
    passId: "MITWPU-UPSC-00101",
    fullName: "Aarav Sharma",
    email: "aarav.sharma@mitwpu.edu.in",
    phone: "+91 98230 45678",
    category: "student",
    institution: "MIT World Peace University, Pune",
    prnOrId: "1032201452",
    yearOfStudy: "3rd Year",
    branchOrDegree: "B.Tech Computer Science & Peace Studies",
    serviceInterest: "IAS (Indian Administrative Service)",
    mode: "offline",
    timestamp: "2026-10-25T14:32:00Z",
    qrCodeData: "PASS-MITWPU-UPSC-00101|Aarav Sharma|offline",
  },
  {
    id: "reg-demo-2",
    passId: "MITWPU-UPSC-00102",
    fullName: "Sneha Deshpande",
    email: "sneha.deshpande@gmail.com",
    phone: "+91 97654 32109",
    category: "external",
    institution: "Fergusson College, Pune",
    prnOrId: "FC-POL-882",
    yearOfStudy: "Final Year",
    branchOrDegree: "B.A. Political Science",
    serviceInterest: "IPS (Indian Police Service)",
    mode: "offline",
    timestamp: "2026-10-26T10:15:00Z",
    qrCodeData: "PASS-MITWPU-UPSC-00102|Sneha Deshpande|offline",
  },
];

export const getStoredRegistrations = (): Registration[] => {
  if (typeof window === "undefined") return INITIAL_DEMO_REGISTRATIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(INITIAL_DEMO_REGISTRATIONS));
      return INITIAL_DEMO_REGISTRATIONS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading registrations", err);
    return INITIAL_DEMO_REGISTRATIONS;
  }
};

export const saveRegistration = (reg: Registration): Registration[] => {
  if (typeof window === "undefined") return [reg];
  try {
    const current = getStoredRegistrations();
    const updated = [reg, ...current];
    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error saving registration", err);
    return [reg];
  }
};

export const exportRegistrationsToCSV = (registrations: Registration[]) => {
  if (registrations.length === 0) return;

  const headers = [
    "Pass ID",
    "Full Name",
    "Email",
    "Phone",
    "Category",
    "Institution",
    "PRN / ID",
    "Year of Study",
    "Branch / Degree",
    "Service of Interest",
    "Attendance Mode",
    "Registration Timestamp",
  ];

  const rows = registrations.map((r) => [
    `"${r.passId}"`,
    `"${r.fullName}"`,
    `"${r.email}"`,
    `"${r.phone}"`,
    `"${r.category}"`,
    `"${r.institution.replace(/"/g, '""')}"`,
    `"${r.prnOrId}"`,
    `"${r.yearOfStudy}"`,
    `"${r.branchOrDegree.replace(/"/g, '""')}"`,
    `"${r.serviceInterest}"`,
    `"${r.mode}"`,
    `"${r.timestamp}"`,
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `MITWPU_UPSC_Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Announcements
export const getStoredAnnouncements = (): Announcement[] => {
  if (typeof window === "undefined") return INITIAL_ANNOUNCEMENTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(INITIAL_ANNOUNCEMENTS));
      return INITIAL_ANNOUNCEMENTS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading announcements", err);
    return INITIAL_ANNOUNCEMENTS;
  }
};

export const saveAnnouncement = (announcement: Announcement): Announcement[] => {
  if (typeof window === "undefined") return INITIAL_ANNOUNCEMENTS;
  try {
    const current = getStoredAnnouncements();
    const updated = [announcement, ...current];
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error saving announcement", err);
    return INITIAL_ANNOUNCEMENTS;
  }
};

export const deleteAnnouncement = (id: string): Announcement[] => {
  if (typeof window === "undefined") return INITIAL_ANNOUNCEMENTS;
  try {
    const current = getStoredAnnouncements();
    const updated = current.filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error deleting announcement", err);
    return INITIAL_ANNOUNCEMENTS;
  }
};

// Resources
export const getStoredResources = (): ResourceItem[] => {
  if (typeof window === "undefined") return RESOURCES;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RESOURCES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(RESOURCES));
      return RESOURCES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading resources", err);
    return RESOURCES;
  }
};
