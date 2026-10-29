export type ServiceType = "IAS" | "IPS" | "IFS" | "IRS" | "IAAS" | "IDAS" | "Allied";

export interface Ranker {
  id: string;
  name: string;
  year: number;
  air: number;
  service: ServiceType | string;
  cadre: string;
  homeState: string;
  isAlumnus: boolean;
  alumniDetails?: {
    batch: string;
    department: string;
    degree: string;
  };
  photoUrl: string;
  optionalSubject: string;
  attempts: number;
  marksheet: {
    prelimsScore?: string;
    mainsTotal: number;
    interviewMarks: number;
    totalMarks: number;
  };
  quote: string;
  biography: string;
  preparationJourney: string;
  strategy: {
    prelims: string;
    mains: string;
    interview: string;
    optional: string;
  };
  tipsForAspirants: string[];
  recommendedBooks?: string[];
  videoUrl?: string;
  featured?: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  honorific?: string;
  title: string;
  role: "Chief Guest" | "Keynote Speaker" | "Session Chair" | "Panelist" | "Special Guest";
  photoUrl: string;
  sessionTopic: string;
  time: string;
  venue: string;
  bio: string;
  organization: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker: string;
  track: "Inaugural & Felicitation" | "Service Orientation" | "Aspirant Guidance" | "Interactive & Networking";
  venue: string;
  highlight?: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: "Syllabus" | "PYQs" | "Standard Books" | "Current Affairs" | "Toppers Notes";
  fileType: "PDF" | "DOC" | "LINK";
  fileSize: string;
  downloadUrl: string;
  description: string;
  year?: number;
  authorOrSource?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  isNew: boolean;
  link?: string;
}

export interface Registration {
  id: string;
  passId: string;
  fullName: string;
  email: string;
  phone: string;
  category: "student" | "external" | "media" | "faculty";
  institution: string;
  prnOrId: string;
  yearOfStudy: string;
  branchOrDegree: string;
  serviceInterest: string;
  mode: "offline" | "online";
  timestamp: string;
  qrCodeData: string;
}

export interface Mentor {
  id: string;
  name: string;
  service: string;
  batch: string;
  currentDesignation: string;
  expertiseAreas: string[];
  bio: string;
  photoUrl: string;
  availableForSession: boolean;
}
