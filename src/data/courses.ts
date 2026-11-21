export type Course = {
  term: string;
  title: string;
  blurb: string;
  /** Course site. Leave out until the site exists; the card shows "coming soon". */
  href?: string;
};

export const courses: Course[] = [
  {
    term: "Spring 2027",
    title: "AI for Media, Entertainment, and Games",
    blurb:
      "Make the content people actually watch, hear, and play. Students use AI models and agents to create short-form video, films, music, and video games—from concept and script to the finished, shareable cut—and learn what this new creative stack means for the business of entertainment.",
    href: "https://zlisto.github.io/AI_MEG_2027_spring/index.html",
  },
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
