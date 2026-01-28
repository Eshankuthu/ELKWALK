import { MetadataRoute } from "next";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elkwalk.ai";

  const routes = [
    "",
    "/services",
    "/pricing",
    "/industries",
    "/case-studies",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
