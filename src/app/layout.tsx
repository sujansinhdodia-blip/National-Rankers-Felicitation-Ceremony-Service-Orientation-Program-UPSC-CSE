import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1F4B",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://national-rankers-felicitation-ceremony-mitwpu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "National Rankers Felicitation Ceremony & Service Orientation – UPSC CSE | MIT-WPU Pune",
    template: "%s | MIT-WPU UPSC CSE Felicitation Ceremony",
  },
  description:
    "Official portal for the National Rankers Felicitation Ceremony & Service Orientation Program for UPSC CSE, organised by MIT World Peace University (MIT-WPU), Pune. Honouring All India Rankers, service orientation with IAS, IPS, IFS officers, aspirant guidance, and free resources.",
  keywords: [
    "MIT World Peace University",
    "MIT-WPU Pune",
    "UPSC CSE Rankers Felicitation 2026",
    "Civil Services Orientation Program",
    "IAS Toppers 2023",
    "IPS Felicitation Pune",
    "UPSC Guidance MIT WPU",
    "Civil Services Examination Pune",
    "World Peace Dome Kothrud",
    "Swami Vivekananda Sabhagruha",
    "UPSC Topper Strategy Notes",
    "LBSNAA Mussoorie Orientation",
  ],
  authors: [{ name: "MIT World Peace University, Pune", url: "https://mitwpu.edu.in" }],
  creator: "MIT World Peace University, Pune",
  publisher: "MIT World Peace University, Pune",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "National Rankers Felicitation Ceremony & Service Orientation – UPSC CSE (MIT-WPU)",
    description:
      "Honouring national UPSC CSE rankers, IAS/IPS service orientation, masterclasses, and mentorship at MIT-WPU, Pune.",
    siteName: "MIT-WPU UPSC CSE Felicitation Portal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "MIT-WPU World Peace Dome Pune - UPSC CSE Felicitation Ceremony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Rankers Felicitation Ceremony & Service Orientation – UPSC CSE | MIT-WPU Pune",
    description:
      "Honouring national UPSC CSE rankers, IAS/IPS service orientation, masterclasses, and mentorship at MIT-WPU, Pune.",
    images: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engine Rich Snippets
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "National Rankers Felicitation Ceremony & Service Orientation Program – UPSC CSE",
    description:
      "Prestigious academic ceremony honouring UPSC CSE rankers, featuring service orientation masterclasses with serving IAS, IPS, and IFS officers at MIT World Peace University, Pune.",
    startDate: "2026-11-14T09:30:00+05:30",
    endDate: "2026-11-14T18:15:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Swami Vivekananda Sabhagruha & World Peace Dome",
      address: {
        "@type": "PostalAddress",
        streetAddress: "S.No. 124, Paud Road, Kothrud",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411038",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5044,
        longitude: 73.8125,
      },
    },
    organizer: {
      "@type": "CollegeOrUniversity",
      name: "MIT World Peace University (MIT-WPU), Pune",
      url: "https://mitwpu.edu.in",
      logo: "https://mitwpu.edu.in/images/logo.png",
      sameAs: [
        "https://www.facebook.com/MITWPUOfficial",
        "https://twitter.com/MITWPUOfficial",
        "https://www.instagram.com/mitwpuofficial",
        "https://www.linkedin.com/school/mitwpuofficial",
      ],
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/register`,
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-10-01",
    },
    performer: [
      {
        "@type": "Person",
        name: "Aditya Deshmukh",
        jobTitle: "IAS Officer (AIR 8, UPSC CSE 2023)",
      },
      {
        "@type": "Person",
        name: "Priyanka Kulkarni",
        jobTitle: "IPS Officer (AIR 24, UPSC CSE 2023)",
      },
      {
        "@type": "Person",
        name: "Rohit Singh Rathore",
        jobTitle: "IFS Officer (AIR 41, UPSC CSE 2023)",
      },
    ],
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MIT World Peace University, Pune",
    alternateName: "MIT-WPU",
    url: "https://mitwpu.edu.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paud Road, Kothrud",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411038",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-offwhite dark:bg-navy-950 text-navy-950 dark:text-slate-100 font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
