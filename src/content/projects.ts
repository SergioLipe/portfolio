import type { Project } from "@/types/content";

/**
 * The four case studies.
 *
 * Everything above `body` is verified fact, taken from the CV and from each
 * project's repository. Everything inside `body` is `null` and renders as a
 * visible placeholder until written — see PLACEHOLDERS.md.
 */
export const projects: Project[] = [
  {
    slug: "wheelchair-simulator",
    title: "Wheelchair Simulator",
    year: "2026",
    tagline:
      "A VR and desktop simulator for safe electric wheelchair driving training, built with the Braga Cerebral Palsy Association.",
    summary:
      "Driving an electric wheelchair takes motor coordination, spatial awareness and quick reactions to obstacles — skills that need repetition to build, but that are hard to practise safely. Real training needs large spaces, constant supervision and a wheelchair that may not be available. This simulator removes those barriers, letting users practise at their own pace as many times as they need. It runs as a fully immersive experience on the Meta Quest 3 and as a desktop version playable with keyboard and mouse.",
    context:
      "Built in partnership with the Associação de Paralisia Cerebral de Braga (APCB). My Master's final project, currently in its real-world application phase.",
    stack: ["Unity", "C#", "Virtual Reality", "Meta Quest 3"],
    links: [
      {
        label: "Meta Horizon Store",
        href: "https://www.meta.com/experiences/wheelchair-simulator/1157013487494015/",
        kind: "store",
      },
      {
        label: "Play the PC version",
        href: "https://lipepipo.itch.io/wheelchairsimulator",
        kind: "live",
      },
      {
        label: "Source on GitHub",
        href: "https://github.com/SergioLipe/Wheelchair_Simulator",
        kind: "code",
      },
    ],
    recognition: [
      "Presented at CIPA 2026",
      "Presented at SASYR 2026",
      "Article published in the RIAGE journal",
      "Short paper at SASYR",
    ],
    // No `highlights`: every one of them restated the prose below, which says it
    // better. The levels, freestyle mode, physics, collision metrics, star ratings
    // and per-patient tracking are all covered in `built` and `decisions`.
    body: {
      problem: [
        "Driving an electric wheelchair takes motor coordination, spatial awareness, and fast reactions to obstacles. Those skills need repetition to build, but real-world training rarely allows for it: you need a large space, constant supervision, and a wheelchair that isn't always available. The barrier to practice isn't willingness, it's logistics.",
      ],
      built: [
        "A driving simulator that removes those constraints, letting users practise at their own pace as many times as they need. Ten progressive levels, each unlocking as you complete the one before, take you from the fundamentals (straight lines, 90° and 180° turns, an obstacle course, reverse driving, navigating a tight apartment) out into urban scenarios with moving pedestrians, ramps, traffic lights, and crossings. There's also a freestyle mode: an open virtual city with no timer or scoring, for consolidating skills without pressure.",
        "Under that sits realistic wheelchair physics with real-world speeds and a choice of front- or rear-wheel steering, a collision system that distinguishes frontal and rear impacts from lateral slips, gamification with one to three stars per level, and per-patient performance tracking that records completion time and keeps a full session history rather than just the latest run, so therapists can follow progress across sessions. Fully localised in Portuguese and English.",
        "Built in Unity and C#, running both as a fully immersive VR experience on the Meta Quest 3 and as a desktop version with keyboard and mouse. Developed in partnership with the Associação de Paralisia Cerebral de Braga, and published on the Meta Horizon Store.",
      ],
      decisions: [
        {
          title: "Two builds instead of one",
          body: "The VR version is the real training experience, but a headset is a hard requirement and not every clinic or user has one. The desktop build means anyone can practise, and it also made the project reviewable by people who'd never put on a Quest.",
        },
        {
          title: "Tracking per patient, not per session",
          body: "The tracking model is per patient, not per session, because what matters to a therapist isn't one run, it's the trend. Recording frontal collisions, rear collisions, and lateral slips as separate metrics rather than one score means you can see what is improving, not just whether it is.",
        },
        {
          title: "Frame rate as an accessibility constraint",
          body: "On the Quest 3, frame rate isn't a polish concern, it's an accessibility one. Low or unstable framerates cause motion sickness, and a training tool that makes users nauseous doesn't get used. That constraint shaped a lot of what went into each scene.",
        },
      ],
      learned: [
        "I learned Unity and C# from scratch for this project, and the hardest part wasn't the language, it was the domain: physics tuning, scene optimisation, and everything specific to building for VR rather than a screen.",
        "Motion sickness was the constraint that taught me the most. In VR, keeping frame rates high on standalone hardware isn't an optimisation you do at the end, it's a design constraint you build around from the start, and it affects level scale, asset density, and how movement is handled. A desktop game that drops frames is annoying. A VR training tool that drops frames makes the user physically unwell and stops the training.",
        "Working with the APCB also taught me that features I assumed were secondary (how forgiving the physics are, whether a failed run restarts immediately) mattered more to real users than the ones I'd been focused on.",
      ],
    },
  },
  {
    slug: "montenova",
    title: "Montenova",
    year: "2026",
    tagline:
      "A SaaS platform for family screen-time management, built as team CTO during a three-week European accelerator.",
    summary:
      "Montenova lets a parent curate what their children watch: an AI selects YouTube videos based on each child's preferences and generates activities and breaks between them, turning passive viewing into a structured routine. It was built from scratch during the European Innovation Academy, a three-week intensive accelerator where international teams build a startup with mentorship from industry professionals.",
    context:
      "Selected for the European Innovation Academy, a three-week intensive accelerator for international teams building a startup from scratch, with mentorship from industry professionals.",
    role: "Team CTO — I led product development.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "Claude API",
      "Tailwind CSS",
      "next-intl",
      "Playwright",
      "Vercel",
    ],
    links: [
      { label: "Live site", href: "https://www.montenova-tv.com/", kind: "live" },
      {
        label: "Source on GitHub",
        href: "https://github.com/SergioLipe/Montenova",
        kind: "code",
      },
    ],
    highlights: [
      "AI-driven programming: the Claude API selects and sequences videos against a child's preferences, and generates activities and breaks between them.",
      "Multi-profile households, with a who-is-watching flow, per-child preferences, onboarding and access codes.",
      "Installable as a progressive web app, with a service worker and install prompt.",
      "Internationalised from the start with next-intl, and deployed on Vercel.",
    ],
    body: {
      problem: [
        "Screen time for kids is either unstructured — a tablet with no limits — or rigid, a fixed timer with no room for what the child is actually doing. Parents wanted something in between: real oversight, but a system that adapts to the actual content, not just a countdown.",
      ],
      built: [
        "A SaaS platform where parents build a screen time program: blocks of curated video pulled from the YouTube Data API, mixed with guided breathing and movement breaks, with the schedule adapting elastically to how long each video actually runs. Built on Next.js, TypeScript, Supabase (Postgres and Auth), Tailwind, and the Claude API for the AI-assisted scheduling layer. Deployed on Vercel with continuous delivery from GitHub, a custom domain and SSL.",
      ],
      decisions: [
        {
          title: "Directing the build, not typing it",
          body: "As CTO I made the calls rather than writing every line by hand — directing development with Claude Code and reviewing, approving, or rejecting every technical proposal before it shipped.",
        },
        {
          title: "Row Level Security as the real boundary",
          body: "The one I'd highlight: I chose Postgres Row Level Security as the real security boundary for family data, not application-level logic, because RLS holds even if a future feature forgets to check permissions. I validated it with isolation tests between real accounts.",
        },
        {
          title: "A PWA over a native app",
          body: "I also chose a PWA over a native app to skip app store review cycles.",
        },
        {
          title: "Feature flags over deleting code",
          body: "I built a feature-flag system so we could disable half-finished work without deleting code.",
        },
      ],
      learned: [
        "That reviewing AI-generated code needs to be proportional to risk, not uniform.",
        "Every feature had to pass end-to-end tests against a real production build and a real database, not just a dev environment, and that discipline caught things a lighter review would have missed: a partially-applied RLS policy, a colour-contrast accessibility issue, and a race condition in UI state. The tests weren't a checkbox, they were how I found out where the AI-written code and my assumptions had actually diverged.",
      ],
    },
  },
  {
    slug: "teamup",
    title: "TeamUP",
    year: "2025",
    tagline:
      "A full-stack sports event platform with a microservices backend and both web and native mobile clients.",
    summary:
      "TeamUP brings people together around sports activities: users create and join events, chat with the other participants in real time, rate each other afterwards and earn achievements. It was built as a Master's project, deliberately structured as five independent Laravel microservices communicating over RabbitMQ and a WebSocket server, with a React web client and a native Android app.",
    context: "A Master's project in Software Engineering at IPCA.",
    stack: [
      "Laravel",
      "PHP",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "RabbitMQ",
      "WebSockets",
      "React",
      "Kotlin",
      "Jetpack Compose",
    ],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/SergioLipe/TeamUP",
        kind: "code",
      },
    ],
    highlights: [
      "Five independent Laravel microservices — users, event manager, chat, rating and achievements — each with its own database and migrations.",
      "Asynchronous messaging between services over RabbitMQ, with a dedicated WebSocket server for live chat.",
      "The whole backend stack orchestrated with Docker Compose, and an SSL-enabled deployment variant.",
      "Two first-class clients against the same API: a React web app and a native Android app in Kotlin with Jetpack Compose.",
    ],
    body: {
      problem: [
        "People who want to play football, do yoga, or train for anything else often can't, not because they lack interest, but because they lack the people. A five-a-side game needs ten players. A climbing session needs a partner. The activity isn't the barrier, finding others to do it with is.",
      ],
      built: [
        "TeamUP lets anyone create an event for any activity: pick the sport, the location, the time, and how many people you need, then let others join. Around that core there's real-time chat per event, notifications that surface events matching your interests, ratings, and gamification tracking how many events you've joined and what kinds.",
        "Built as a Master's project by a team of three, on a microservices architecture: five Laravel services (users, event manager, chat, rating, achievements) in Docker containers communicating over RabbitMQ, with a separate WebSocket server for live chat. React on the web, Kotlin and Jetpack Compose on Android. We each worked across the whole stack rather than splitting by layer.",
      ],
      decisions: [
        {
          title: "A service per domain, wired with RabbitMQ",
          body: "We split each domain into its own service so chat, ratings, and achievements could evolve independently of the core event logic. RabbitMQ handles the asynchronous communication between them, so an action in one service (joining an event) can trigger work in another (unlocking an achievement, sending a notification) without the two being directly coupled.",
        },
        {
          title: "WebSockets for chat, not the queue",
          body: "Chat runs over a separate WebSocket server rather than through the message queue, because live chat needs a persistent open connection, not fire-and-forget messaging.",
        },
        {
          title: "One command to bring the stack up",
          body: "Everything runs in Docker Compose so the whole five-service stack comes up with one command, which mattered a lot when three people needed identical environments.",
        },
      ],
      learned: [
        "This was my first project with a real microservices architecture, and the lesson was that the hard part isn't splitting the services up, it's everything that comes after. Keeping data consistent across service boundaries, debugging a request that crosses three services, and knowing when two things genuinely belong apart versus when you've just added complexity for its own sake.",
        "It also taught me that infrastructure decisions are team decisions. Containerising everything wasn't the interesting technical problem, but it was the one that made three people able to work in parallel without stepping on each other.",
      ],
    },
  },
  {
    slug: "tournament-manager",
    title: "Tournament Manager",
    year: "2024",
    tagline:
      "A web application for running single-elimination bracket tournaments, with asynchronous updates and image management.",
    summary:
      "Tournament Manager turns any set of contenders into a single-elimination bracket that the user judges themselves: two competitors are shown at a time, you pick the one you prefer, and the bracket advances until one winner is left. Tournaments can be run on built-in themes or on sets of images the user uploads.",
    stack: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap", "PDO"],
    links: [
      { label: "Live site", href: "https://www.torneio.site/", kind: "live" },
      {
        label: "Source on GitHub",
        href: "https://github.com/SergioLipe/TournamentManager",
        kind: "code",
      },
    ],
    // Trimmed to the facts the prose below does not already cover. Bracket sizes,
    // byes, upload validation, security hardening, the PWA and per-theme
    // statistics all appear in `built` and `decisions`.
    highlights: [
      "Bracket progression driven by AJAX against JSON endpoints, so rounds advance without a page reload.",
      "An Android wrapper build. The app installs from Chrome as a PWA, but Play Store verification is blocked by the host's JavaScript challenge.",
    ],
    body: {
      problem: [
        "Sometimes you can't decide between things, and a list doesn't help. Tournament Manager turns that into a bracket: two options at a time, you pick the one you prefer, and it advances until one is left. Useful for genuinely making up your mind, or as something to argue about with friends.",
      ],
      built: [
        "A PHP and MySQL web app for running single-elimination tournaments where you are the judge. Anywhere from 2 to 16 competitors, with odd numbers handled through byes. You can play with built-in themes or create your own and upload images to them, and every battle is recorded so the statistics page shows which entries actually win over time.",
        "The whole thing also installs as an app: a service worker, web manifest, and offline page make it a PWA with its own icon and no browser chrome. There's a separate entry point (app.php) that serves the same bracket with accounts stripped out, sharing the view layer with the main site rather than duplicating it.",
        "Themes can also be built in bulk from the command line: a tool pulls lead images from Wikipedia articles, another crops and squares them, and a third regenerates the seed SQL.",
      ],
      decisions: [
        {
          title: "Rewriting the security foundations",
          body: "The rewrite is the interesting part. The original version built every SQL query by string concatenation, stored passwords in plain text, and let anyone delete competitors or inflate statistics with an unauthenticated request. Fixing that properly meant prepared statements everywhere, bcrypt hashes upgraded transparently on each user's next login rather than forcing a reset, and requiring a session, theme ownership, and a CSRF token on every write.",
        },
        {
          title: "Validating uploads by decoding them",
          body: "Upload validation decodes each file rather than trusting finfo or the extension, because a file starting with the bytes GIF89a followed by arbitrary content passes both. Uploads are stored under generated names in a directory derived from the theme ID, with an .htaccess stripping PHP handlers as a second layer.",
        },
        {
          title: "Brackets generated, not hand-written",
          body: "The brackets are generated from the competitor count instead of the eight hand-written HTML files the original had. That's what makes odd-numbered tournaments possible at all.",
        },
      ],
      learned: [
        "I built the original mostly by hand, before I was using AI much, and going back to it now is the clearest measure I have of how much I've learned. The features worked; the foundations didn't.",
        "The other lesson was that hosting constraints are real engineering constraints. The free host puts a JavaScript challenge in front of every request, which means curl -I reports 200 for a file that was never actually sent, and it blocks Play Store verification entirely because Chrome fetches assetlinks.json without running JavaScript. The FTP server also rejects any filename containing a space, silently truncating the upload. Neither of those is in any tutorial.",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
