import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tramato.vercel.app/sitemap.xml",
    host: "https://tramato.vercel.app",
  };
}
