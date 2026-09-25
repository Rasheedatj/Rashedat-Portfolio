import type { CaseStudySection, Project } from '@/types/project';

const placeholderCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading:
      'lorem ipsum dolor sit amet consectetur adipiscing elit dolores repellendus exercitation consequat',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Fuga et qui dolor puis maxime assumenda id animi eos aliqua omnis exercitation. Possimus et aliquip dolor nostrud ea adipiscing omnis. Et cupidatat sint accusamus cumque in. Adipiscing et eos qui occaecat deserunt.',
  },
  {
    label: 'Challenge',
    heading:
      'lorem ipsum dolor sit amet consectetur adipiscing elit dolores repellendus exercitation consequat',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Fuga et qui dolor puis maxime assumenda id animi eos aliqua omnis exercitation. Possimus et aliquip dolor nostrud ea adipiscing omnis. Et cupidatat sint accusamus cumque in. Adipiscing et eos qui occaecat deserunt.',
  },
  {
    label: 'Solution',
    heading:
      'lorem ipsum dolor sit amet consectetur adipiscing elit dolores repellendus exercitation consequat',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Fuga et qui dolor puis maxime assumenda id animi eos aliqua omnis exercitation. Possimus et aliquip dolor nostrud ea adipiscing omnis. Et cupidatat sint accusamus cumque in. Adipiscing et eos qui occaecat deserunt.',
  },
];

const koyoCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading:
      'Helping people reconnect with Nigerian languages, one lesson at a time',
    body: "Millions of Nigerians, at home and abroad, understand a little of their family's language but never learned to speak it with confidence. Koyo set out to change that with a mobile app that turns Nigerian languages into short, friendly lessons people can pick up in a few minutes a day. I worked on Koyo as part of a product team, overseeing the mobile side of things: shaping how the app was built, guiding the mobile engineers, and making sure what we shipped felt dependable in the hands of real learners.",
  },
  {
    label: 'Challenge',
    heading:
      'A good idea held back by an app that did not always show up for its learners',
    body: 'As more people joined, the cracks started to show. Lessons sometimes failed to load, progress did not always appear where learners left it, and screens could stall on a slow connection, which is a common reality for many of our users. The design had also grown piece by piece and no longer felt like one product. For a learning app, this is serious. Learning a language depends on habit, and every broken moment gives someone a reason to stop coming back. Our store reviews made it clear that reliability, not new features, was what we needed to fix first.',
  },
  {
    label: 'Solution',
    heading:
      'Rebuilding the experience from the ground up and making it dependable',
    body: "We tackled the problem on two fronts. First, the team rebuilt the entire interface, giving Koyo a cleaner, more consistent look that made lessons easier to follow and more enjoyable to come back to. Second, and the work I am proudest of, I led a complete rethink of how the app fetches and keeps track of information behind the scenes. Rather than having every screen ask for its content separately and hope for the best, the app now handles this in one organised, predictable way: it remembers what it has already loaded, retries quietly when a connection drops, and keeps learners' progress in sync. The result was a 97% drop in errors, a noticeably smoother experience, and a higher rating on the app stores as learners felt the difference.",
  },
];

const eatlyCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading:
      'Turning a launched but struggling food app into one people enjoy using',
    body: 'Eatly is a food delivery app built to make ordering a meal feel as satisfying as eating it. The app was already live when its founder brought me in, but it was not living up to that promise. Working alongside a designer and a backend engineer, I led the mobile rebuild, taking Eatly from an app users struggled with to a polished product that was relaunched on the App Store and Google Play in three months.',
  },
  {
    label: 'Challenge',
    heading:
      'An app that looked unfinished and promised more than it delivered',
    body: 'The first version of Eatly had two serious problems. It was hard to look at: the design felt cluttered and inconsistent, which made it difficult for customers to trust the app with their money. Worse, much of what they saw was not real. Some buttons did nothing when tapped, and the wallet looked complete on screen but did not actually work. For a food business, where people expect to order, pay and track a meal without thinking twice, this was costing the founder customers and credibility. Small fixes would not solve it. The app needed to be rebuilt properly.',
  },
  {
    label: 'Solution',
    heading:
      'Rebuilding Eatly from scratch in three months, then seeing it through launch',
    body: 'Together with the designer and backend engineer, we rebuilt both the look and the substance of the app from the ground up. The new interface is clean and polished, and every feature on screen now does what it says. I built the core experience: secure sign up and login with a second verification step, card payments through Paystack, a working wallet, live tracking so customers can follow their order to their door, a fast and flexible search, and meal suggestions that change with the time of day, so breakfast shows up in the morning and dinner in the evening. When both Apple and Google rejected the first submission, I recognised the cause straight away, fixed it, and had the app approved on both stores the same day. After launch I stayed on for a month of maintenance to make sure the app ran smoothly for real customers before handing it over.',
  },
];

const eatlyWebsiteCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading:
      'Giving people a reason to download Eatly before they ever open it',
    body: "Eatly's mobile app serves three different groups: customers who order food, vendors who sell it, and riders who deliver it. Building the app was only half the job. People had to understand what Eatly was and why it was worth their time before they would install it. I built the Eatly website to do exactly that: a modern, animated landing experience that introduces the product and turns curious visitors into app users.",
  },
  {
    label: 'Challenge',
    heading: 'Asking strangers to download an app they had never heard of',
    body: 'Sending people straight to an app store is a big ask when they know little about the product. Most visitors will not download something they cannot picture using, and a single generic page could not speak to everyone at once. A hungry customer, a restaurant owner looking for more orders and a rider looking for flexible work all care about very different things. Eatly needed a front door that felt trustworthy, worked on any device and told each of these groups, in their own terms, why the app was for them.',
  },
  {
    label: 'Solution',
    heading:
      'One polished website with a dedicated story for customers, vendors and riders',
    body: 'I built a fast, visually polished website with smooth animations that make Eatly feel lively and credible from the first scroll. Instead of one page for everyone, the site has three main pages, one each for customers, vendors and riders. Each explains what Eatly offers that audience and ends with a clear invitation to download the app. Every page adapts cleanly to phones, tablets and desktops, so the experience holds up wherever someone first discovers Eatly. The result is a website that does the explaining and convincing up front, so by the time people reach the app store, they already know why they are there.',
  },
];

const legacyCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading:
      'A website that earns the trust of high-end clients before the first call',
    body: 'Legacy Inks is a specialist ghostwriting and content studio that works with high-end clients. Its founder had built a strong reputation through referrals and word of mouth, but that reputation was not showing up online. I designed and built the Legacy Inks website from start to finish, giving the business a professional home on the internet that reflects the quality of its work and makes it easy for the right clients to find it, trust it and get in touch.',
  },
  {
    label: 'Challenge',
    heading: 'Great work, but little proof of it online',
    body: 'Many business owners hit the same wall: they are good at what they do, but when a potential client looks them up, there is little to find, or what they find looks dated and generic. For a studio serving premium clients, that gap is costly, because people who pay for quality judge a business by its first impression. The founder needed to show up online with the same credibility he had in person. The usual route was also a headache: hire a designer, then find a developer, then manage the back and forth between them, with more time, more cost and more room for the final result to drift from the original vision.',
  },
  {
    label: 'Solution',
    heading: 'Design and development handled in one place, from idea to launch',
    body: "I took on both the design and the build, so the founder had one person to work with from the first conversation to launch, with no separate designer to hire and no gaps between how the site was imagined and how it was delivered. We started with what his clients needed to see and feel, then shaped a clean, refined website that presents the studio's services clearly, builds confidence at every scroll and guides visitors toward getting in touch. It is fast, looks sharp on every screen size and is built to be found by people searching for the services he offers. Legacy Inks now has an online presence that matches the calibre of its clients and works for the business around the clock.",
  },
];

const roboCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading: 'Making the first steps into coding feel achievable',
    body: 'Robo is a mobile learning app for complete beginners who want to understand programming but do not know where to start. It breaks coding concepts into short, practical lessons that fit into a few spare minutes on a phone, so learning feels like steady progress rather than a mountain to climb.',
  },
  {
    label: 'Challenge',
    heading: 'Most beginners quit before anything clicks',
    body: "Education products live or die on whether people keep coming back. Beginner coders are especially easy to lose: many learning tools assume knowledge they do not have yet, lessons are long and heavy on jargon, and a first confusing session is often the last. For anyone building in education, the challenge is twofold: make hard material feel approachable, and get a working product into learners' hands quickly enough to see what actually keeps them engaged, rather than spending months perfecting ideas that have never been tested.",
  },
  {
    label: 'Solution',
    heading: 'Bite-sized lessons, built and shipped at speed',
    body: "Robo keeps every lesson short, plain-spoken and hands-on, with clear progress that gives learners a small win each time they open the app. Just as important was how quickly it came together. I moved from idea to a complete, working app in a short timeframe by deciding early what mattered most to a beginner, building those parts first and polishing as I went instead of letting the scope grow. That pace is what early-stage teams need most: a real product in users' hands quickly, so decisions are based on how people actually use it rather than on guesswork.",
  },
];

const cartwiseCaseStudy: CaseStudySection[] = [
  {
    label: 'Overview',
    heading: 'A calmer, faster way to do the grocery run',
    body: 'Cartwise is a mobile grocery shopping app designed to make one of the most routine chores feel quick and effortless. Shoppers can browse, find what they need and build their cart in a few taps, with an interface that stays clear even when there are hundreds of products to choose from. I built Cartwise as a self-initiated product, taking a detailed design from Figma and turning it into a complete mobile app.',
  },
  {
    label: 'Challenge',
    heading: 'In online shopping, small details decide whether people buy',
    body: 'E-commerce businesses spend real money on design, then often watch it get lost in the build. Spacing drifts, colours and fonts shift, product cards look slightly different from screen to screen, and the polished experience that was signed off in the design never quite makes it to customers. In a shopping app, that gap matters: an interface that feels a little off feels less trustworthy, and a less trustworthy checkout is where carts get abandoned. The challenge was to build a grocery app that looks and feels exactly as it was designed, on every screen.',
  },
  {
    label: 'Solution',
    heading: 'A pixel-faithful build of the design, screen for screen',
    body: 'I treated the Figma design as the source of truth and built Cartwise to match it closely, from layout and spacing to typography, colours and the small interactions that make an app feel finished. Reusable building blocks, such as product cards, buttons and cart items, keep every screen consistent, so the app stays faithful to the design as it grows. The result is a shopping experience that is clean, easy to browse and true to what the designer intended. For businesses, that means the investment in design shows up in the product customers actually use.',
  },
];

export const projects: Project[] = [
  {
    slug: 'eatly',
    name: 'Eatly',
    category: 'mobile',
    headline: 'Eatly - Bringing More Fun to Food Delivery.',
    summary:
      'Developed a food delivery experience that feels as satisfying as the meal itself.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'Food delivery can be fun too!',
    links: {
      appStore:
        'https://apps.apple.com/ng/app/eatly-food-delivery/id6755495005',
      playStore:
        'https://play.google.com/store/apps/details?id=com.technologies.eatly',
    },
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/eatly-straight-featured.avif',
        rotated: '/eatly-rotated-featured.avif',
      },
      metaImage: '/eatly-featured.avif',
      cover: '/eatly-coverr.avif',
      annotationArt: '/eatly-arrow.svg',
    },
    caseStudy: eatlyCaseStudy,
    seo: {
      description: 'Eatly — Food Delivery App — Case Study',
    },
  },
  {
    slug: 'koyo',
    name: 'Koyo',
    category: 'mobile',
    headline: 'Koyo - Making Nigerian Languages Easier to Learn.',
    summary:
      'Built a language learning app that makes Nigerian languages easier to understand, remember, and use in everyday life.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'African culture is beautiful',
    links: {
      appStore: 'https://apps.apple.com/ng/app/koyo/id6744146311',
      playStore:
        'https://play.google.com/store/apps/details?id=com.koyo.koyoapp&pcampaignid=web_share',
    },
    techStack: ['react-native', 'typescript'],
    images: {
      featured: {
        straight: '/koyo-straight-featured.avif',
        rotated: '/koyo-rotated-featured.avif',
      },
      metaImage: '/koyo-featured.avif',
      cover: '/koyo-coverr.avif',
      annotationArt: '/koyo-arrow.svg',
    },
    caseStudy: koyoCaseStudy,
    seo: {
      description: 'Koyo — Local Language Learning App — Case Study',
    },
  },
  // JACKO
  // {
  //   slug: 'jacko',
  //   name: 'Jacko',
  //   category: 'mobile',
  //   headline: 'Jacko — Bringing Smart Exam Prep To Your Fingertips',
  //   summary:
  //     'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
  //   role: 'Mobile Engineer',
  //   featured: false,
  //   links: {},
  //   techStack: ['react-native', 'expo', 'typescript'],
  //   images: {
  //     featured: {
  //       straight: '/jacko-straight-featured.avif',
  //       rotated: '/jacko-rotated-featured.avif',
  //     },
  //     metaImage: '/jacko-featured.avif',
  //     cover: '/jacko-cover.avif',
  //     annotationArt: '/robo-arrow.svg',
  //   },
  //   caseStudy: placeholderCaseStudy,
  //   seo: {
  //     description: 'Jacko — Exam Study App — Case Study',
  //   },
  // },
  {
    slug: 'robo',
    name: 'Robo',
    category: 'mobile',
    headline: 'Robo - Learning to Code Made Simple.',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'Hard things can be made really easy to learn',
    links: {},
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/robo-straight-featured.avif',
        rotated: '/robo-rotated-featured.avif',
      },
      metaImage: '/robo-featured.avif',
      cover: '/robo-cover.avif',
      annotationArt: '/robo-arrow.svg',
    },
    caseStudy: roboCaseStudy,
    seo: {
      description: 'Robo — Coding App — Case Study',
    },
  },

  {
    slug: 'cartwise',
    name: 'Cartwise ',
    category: 'mobile',
    headline: 'Cartwise - A Better way to shop groceries',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Mobile Engineer',
    featured: false,
    links: {},
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/cartwise-straight-featuredd.avif',
        rotated: '/cartwise-rotated-featured.avif',
      },
      metaImage: '/cartwise-featured.avif',
      cover: '/cartwise-cover.avif',
      annotationArt: '/cartwise-arrow.svg',
    },
    caseStudy: cartwiseCaseStudy,
    seo: {
      description: 'Cartwise — Grocery Shopping App — Case Study',
    },
  },
  {
    slug: 'eatly-website',
    name: 'Eatly',
    category: 'website',
    headline: 'Eatly — Bringing More Fun to Food Delivery.',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Front-End Developer',
    featured: false,
    annotation: 'Your website should be as fun as your mobile app',
    client: 'Eatly',
    year: '2025',
    links: {
      liveSite: 'https://www.eatly.io/',
    },
    techStack: ['react', 'nextjs', 'typescript', 'tailwindcss'],
    images: {
      featured: '/eatly-website-featured.avif',
      cover: '/eatly-website-cover.avif',
      annotationArt: '/eatly-website-arrow.svg',
    },
    caseStudy: eatlyWebsiteCaseStudy,
    seo: {
      description: 'Eatly — Food Delivery Landing Page — Case Study',
    },
  },
  {
    slug: 'legacy',
    name: 'Legacy Inks',
    category: 'website',
    headline: 'Legacy Inks —  Helping A Content Studio Stay Visible',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Front-End Developer',
    featured: false,
    annotation: 'A specialist ghostwriting and content studio',
    client: 'Legacy Inks',
    year: '2025',
    links: {},
    techStack: ['react', 'nextjs', 'typescript', 'tailwindcss'],
    images: {
      featured: '/legacy-ink-featured.avif',
      cover: '/legacy-inks-cover.avif',
      annotationArt: '/legacy-ink-arrow.svg',
    },
    caseStudy: legacyCaseStudy,
    seo: {
      description: 'Legacy Inks — Business Landing Page — Case Study',
    },
  },
];
