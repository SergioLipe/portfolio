import type {
  LanguageSkill,
  Publication,
  TimelineEntry,
} from "@/types/content";

/**
 * About-page content.
 *
 * Note on the academic record: no grades appear on the site. The overall
 * average, individual unit grades and the student number all stay off it.
 */

export const aboutIntro: string[] = [
  "I am a Software Engineer finishing a Master's in Software Engineering at IPCA, in Braga. My work spans full-stack web development, native mobile, and virtual reality, a range that came less from a plan than from following whichever problem seemed worth solving next.",
  "That range is the thread through my projects. TeamUP pushed me into distributed systems, five Laravel microservices talking over RabbitMQ, and a native Android client. Montenova was three weeks of building a product from nothing as team CTO. The Wheelchair Simulator took me somewhere I had not expected software to go: a rehabilitation centre, watching people use something I built to practise a skill that matters to their independence.",
];

export const pathIntoSoftware: string[] = [
  "I did my Bachelor's first, then went to manage a restaurant because the money was good and it seemed like the sensible thing to do. I stayed three years. It taught me a lot about coordinating people and solving problems in the moment, with no option to defer them to tomorrow, but it also made it obvious over time that I was drifting away from the thing I actually wanted to be doing. So I went back and started the Master's.",
  "My first real project came earlier, during my Bachelor's internship: a website that tracked a city's buses on a map, built with the Google Maps API. No AI, no shortcuts, just working out how to make an API and a map behave the way I needed. That was the one that made it click, seeing something you wrote turn into a thing people could open and actually use.",
  "Since then the projects have gotten bigger. A VR training simulator built with a rehabilitation association, now published and presented at two congresses. A SaaS product I led as CTO at an accelerator, from architecture to production. A full-stack app on a microservices architecture. Work across web, mobile and games, because I've never wanted to be boxed into one layer of the stack.",
  "What ties them together is that I'd rather ship something people actually use than build something technically clean that nobody touches. That's also how I think about AI: it's a tool that lets me move much faster, but the architecture calls, the security decisions and the responsibility for what ends up in production stay mine. I'm currently rewriting that first tournament app I built by hand years ago, and the gap between the two versions is the clearest measure I have of what's changed.",
];

export const education: TimelineEntry[] = [
  {
    title: "Master's in Software Engineering",
    organisation: "Universidade Politécnica do Cávado e do Ave (IPCA)",
    period: "2024 – 2026",
    description:
      "Coursework across cloud computing, advanced databases, systems architecture and integration, high-performance computing, applied artificial intelligence, software quality and testing, and research methods. Final project: the VR Wheelchair Simulator, now in its real-world application phase.",
  },
  {
    title: "Web Programming (300 hours)",
    organisation: "Instituto do Emprego e Formação Profissional (IEFP)",
    period: "2024",
    description: "A professional training programme in web development.",
  },
];

export const awards: TimelineEntry[] = [
  {
    title: "OERN Master's Award",
    organisation: "Order of Engineers, Northern Region",
    period: "2026",
    href: "https://www.oern.pt/noticias/oern-distingue-52-estudantes-na-2-a-edicao-dos-premios-de-mestrado/",
  },
];

export const publications: Publication[] = [
  {
    title: "VR Electric Wheelchair Driving Simulator",
    venue: "RIAGE journal",
    year: "2026",
    type: "Journal article",
  },
  {
    title: "VR Electric Wheelchair Driving Simulator",
    venue: "SASYR 2026",
    year: "2026",
    type: "Short paper",
  },
  {
    title: "VR Electric Wheelchair Driving Simulator",
    venue: "CIPA 2026",
    year: "2026",
    type: "Conference presentation",
  },
  {
    title: "VR Electric Wheelchair Driving Simulator",
    venue: "SASYR 2026",
    year: "2026",
    type: "Conference presentation",
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Restaurant Manager",
    organisation: "Il Fiume",
    period: "2020 – 2023",
    description:
      "Team coordination and inventory management, focused on operational problem-solving and conflict management.",
  },
  {
    title: "Internship (6 months)",
    organisation: "Eleven Systems Lda.",
    period: "2019",
    description:
      "Development of web solutions and integration with the Google Maps API.",
  },
];

export const activities: TimelineEntry[] = [
  {
    title: "Capoeira",
    organisation: "Sports / Community",
    period: "2011 – 2020",
    description:
      "Nine years of practice. Discipline, consistency, and a strong sense of community.",
  },
];

export const languages: LanguageSkill[] = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "Spanish", level: "Basic" },
];
