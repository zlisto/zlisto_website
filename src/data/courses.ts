export type Course = {
  term: string;
  title: string;
  blurb: string;
  href: string;
};

export const courses: Course[] = [
  {
    term: "Fall 2026",
    title: "AI Foundations for Managers",
    blurb:
      "Build AI agents for the modern enterprise—document intelligence, research, agentic search, workflows, and more—through vibe coding and hands-on projects. No prior coding experience required.",
    href: "https://zlisto.github.io/mgt_409_fa26/",
  },
  {
    term: "Summer 2026",
    title: "Generative AI and Social Media",
    blurb:
      "Explore how generative AI can analyze and produce social media content through coding projects, interactive apps, and hands-on assignments.",
    href: "https://zlisto.github.io/genAI_social_media_2026_summer/",
  },
  {
    term: "Spring 2026",
    title: "Generative AI and Social Media",
    blurb:
      "Explore how generative AI can analyze and produce social media content through coding projects, interactive apps, and hands-on assignments.",
    href: "https://zlisto.github.io/genAI_social_media/",
  },
];
