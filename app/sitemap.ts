import type { MetadataRoute } from "next";

const baseUrl = "https://www.citizenshiptestau.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/exam",
    "/citizenship-test-guide",
    "/study-guide",
    "/citizenship-test-faq",
    "/about-test",
    "/australian-values",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  // Chapter pages: Part 1 to Part 4
  const chapters = [1, 2, 3, 4].map(
    (n) => `/citizenshipPoints/part-${n}`
  );

  return [...staticPages, ...chapters].map((path) => ({
    url: `${baseUrl}${path}`,

    lastModified:
      path === "/australian-values"
        ? new Date("2026-10-03")
        : new Date("2026-09-24"),

    changeFrequency: path === "" ? "weekly" : "monthly",

    priority:
      path === ""
        ? 1
        : path === "/exam"
          ? 0.9
          : 0.7,
  }));
}