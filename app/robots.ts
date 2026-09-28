import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://venturetech.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/services", "/solutions", "/contact", "/login", "/register"],
        disallow: ["/api/", "/dashboard/", "/reset-password/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
