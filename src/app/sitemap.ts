import { MetadataRoute } from "next";
import { INITIAL_RANKERS } from "@/data/mockData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://national-rankers-felicitation-ceremony-mitwpu.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/rankers",
    "/speakers",
    "/schedule",
    "/services",
    "/guidance",
    "/resources",
    "/register",
    "/mentorship",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/rankers" || route === "/register" ? 0.9 : 0.8,
  }));

  const rankerRoutes = INITIAL_RANKERS.map((ranker) => ({
    url: `${baseUrl}/rankers/${ranker.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...rankerRoutes];
}
