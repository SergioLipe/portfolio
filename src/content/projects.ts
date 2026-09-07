import type { Project } from "@/types/content";

/**
 * The four case studies.
 *
 * Everything above `body` is verified fact, taken from the CV and from each
 * project's repository. Everything inside `body` is hand-written prose and is
 * required by the type: see PLACEHOLDERS.md.
 */
export const projects: Project[] = [
  {
    slug: "wheelchair-simulator",
    title: "Wheelchair Simulator",
    year: "2026",
    tagline:
      "A VR and desktop simulator for practising electric wheelchair driving, built with the Braga Cerebral Palsy Association.",
    summary:
      "Learning to drive an electric wheelchair takes practice, but real training needs space, supervision and a wheelchair that is not always free. This simulator lets people practise as often as they want, in VR on the Meta Quest 3 or on a desktop with keyboard and mouse.",
    context:
      "Built in partnership with the Braga Cerebral Palsy Association (APCB). My Master's final project, currently in its real-world application phase.",
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
    images: [
      {
        src: "/projects/wheelchair-simulator/city-crossing.webp",
        alt: "First-person view from the wheelchair at a city crosswalk, a red car crossing in front and taxis moving along the street beyond.",
        width: 1600,
        height: 900,
        caption:
          "An urban level, where the traffic has to be read before crossing. The HUD tracks time, collisions and lateral slips.",
      },
      {
        src: "/projects/wheelchair-simulator/apartment.webp",
        alt: "First-person view from the wheelchair inside a furnished apartment, facing a dining table and chairs with a living room beyond.",
        width: 1600,
        height: 900,
        caption:
          "The apartment level, where the doorways and furniture leave very little room to turn.",
      },
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
        "Built in Unity and C#, running both as a fully immersive VR experience on the Meta Quest 3 and as a desktop version with keyboard and mouse. Developed in partnership with the Braga Cerebral Palsy Association, and published on the Meta Horizon Store.",
      ],
      decisions: [
        {
          title: "Two builds instead of one",
          body: "The VR version is the real training experience, but not every clinic or user has a headset. The desktop build means anyone can practise, and it let people try the project without putting on a Quest.",
        },
        {
          title: "Tracking per patient, not per session",
          body: "What matters to a therapist is the trend, not one run. Frontal collisions, rear collisions and lateral slips are recorded separately instead of as a single score, so you can see what is improving, not just whether it is.",
        },
        {
          title: "Frame rate as an accessibility constraint",
          body: "On the Quest 3, a low or unstable frame rate causes motion sickness, and a training tool that makes people nauseous does not get used. That set the limit on how much could go into each scene.",
        },
      ],
      learned: [
        "I learned Unity from scratch for this project, and the hard part was never the language, it was the domain: physics tuning, scene optimisation, and everything specific to building for VR rather than a screen.",
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
      "A SaaS platform that helps parents shape their kids' screen time, built as team CTO during a three-week European accelerator.",
    summary:
      "Montenova gives parents a say in what their children watch. An AI picks YouTube videos around each child's interests and puts activities and breaks between them, so screen time follows a routine instead of running until someone stops it.",
    context:
      "Selected for the European Innovation Academy, a three-week intensive accelerator for international teams building a startup from scratch, with mentorship from industry professionals.",
    role: "Team CTO, leading product development.",
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
        "Screen time for kids is either unstructured (a tablet with no limits) or rigid, a fixed timer with no room for what the child is actually doing. Parents wanted something in between: real oversight, but a system that adapts to the actual content, not just a countdown.",
      ],
      built: [
        "A SaaS platform where parents build a screen time program: blocks of curated video pulled from the YouTube Data API, mixed with guided breathing and movement breaks, with the schedule adapting elastically to how long each video actually runs. Built on Next.js, TypeScript, Supabase (Postgres and Auth), Tailwind, and the Claude API for the AI-assisted scheduling layer. Deployed on Vercel with continuous delivery from GitHub, a custom domain and SSL.",
      ],
      decisions: [
        {
          title: "Directing the build, not typing it",
          body: "As CTO I made the calls rather than writing every line by hand, directing development with Claude Code and approving or rejecting every technical proposal before it shipped.",
        },
        {
          title: "A PWA over a native app",
          body: "A PWA instead of a native app, to skip app store review cycles.",
        },
        {
          title: "Feature flags over deleting code",
          body: "A feature-flag system, so we could switch off half-finished work without deleting code.",
        },
      ],
      learned: [
        "That reviewing AI-generated code needs to be proportional to risk, not uniform.",
        "Every feature had to pass end-to-end tests against a real production build and a real database, not just a dev environment, and that discipline caught things a lighter review would have missed: a database security policy that had only been half applied, a colour-contrast accessibility issue, and a race condition in UI state. The tests weren't a checkbox, they were how I found out where the AI-written code and my assumptions had actually diverged.",
      ],
    },
  },
  {
    slug: "teamup",
    title: "TeamUP",
    year: "2025",
    tagline:
      "A sports event platform on a microservices backend, with a React web app and a native Android client.",
    summary:
      "TeamUP is for finding people to play with. You create an event for any sport, others join, everyone chats in real time and rates each other afterwards. Behind it sit five Laravel microservices, a React web app and a native Android client.",
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
      "Five independent Laravel microservices (users, event manager, chat, rating and achievements), each with its own database and migrations.",
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
          body: "Chat, ratings and achievements each got their own service, so they could change without touching the core event logic. RabbitMQ connects them: joining an event can unlock an achievement or fire a notification without the services knowing about each other.",
        },
        {
          title: "WebSockets for chat, not the queue",
          body: "Chat runs on its own WebSocket server rather than through the message queue, because live chat needs a connection that stays open.",
        },
        {
          title: "One command to bring the stack up",
          body: "Everything runs in Docker Compose, so all five services come up with one command. That mattered when three of us needed identical environments.",
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
      "A web app for running single-elimination tournaments where you pick every winner yourself.",
    summary:
      "Pick a theme, one of the built-in ones or a set of images you upload yourself, and Tournament Manager turns it into a bracket. It shows you two entries at a time, you choose the one you prefer, and it keeps going until one is left.",
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
        "It also installs as an app, with its own icon and no browser chrome, and there's a stripped-down version that runs a bracket without an account.",
        "Themes can also be built in bulk from the command line: a tool pulls lead images from Wikipedia articles, another crops and squares them, and a third regenerates the seed SQL.",
      ],
      decisions: [
        {
          title: "Rewriting the security foundations",
          body: "The original built its SQL by string concatenation, kept passwords in plain text, and let anyone delete entries or inflate statistics without logging in. The rewrite uses prepared statements throughout, upgrades old passwords to bcrypt on the next login instead of forcing a reset, and asks for a session, theme ownership and a CSRF token on every write.",
        },
        {
          title: "Validating uploads by decoding them",
          body: "Uploads are validated by decoding the file, not by trusting its extension: a file that starts with the bytes GIF89a and then holds anything at all passes the usual checks. They are stored under generated names, with an .htaccess stripping PHP handlers as a second layer.",
        },
        {
          title: "Brackets generated, not hand-written",
          body: "Brackets are generated from the number of entries, replacing the eight hand-written HTML files the original had. That is what makes odd-numbered tournaments possible at all.",
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
