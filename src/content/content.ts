// All brochure copy, flags, contact details and image slots live here.
// Set a field to null to hide it. Replace dummy image URLs with real photos later.

const img = (seed: string, w = 1600, h = 1000) => `https://picsum.photos/seed/gla-${seed}/${w}/${h}`;

export const content = {
  flags: {
    showSafetyLine: false,
    showEmbassyBlock: false,
    showQr: false,
  },
  contact: {
    whatsappNumber: null as string | null, // e.g. "919800000000"
    email: null as string | null,
    phone: null as string | null,
    website: null as string | null,
    instagram: null as string | null,
  },
  messages: {
    customer: "Hi GoLookAround, I'd like to know more about your curated experiences.",
    organization:
      "Hi GoLookAround, we're planning something for our team/community and would love a curated shortlist.",
    partner: "Hi GoLookAround, I'd like to talk about partnering.",
  },
  hero: {
    image: img("hero", 1920, 1280),
    alt: "A lone paramotor pilot gliding high above a vast golden landscape",
    tagline: "Curated for the curious.",
    sub: "Handpicked experiences, retreats and events, chosen so you don't have to search.",
  },
  about: {
    image: img("about", 1400, 1000),
    alt: "Friends laughing together mid-adventure outdoors",
    label: "About us",
    headline: "We do the looking. You do the experiencing.",
    body: [
      "There is no shortage of things to do. The hard part is knowing which ones are actually worth your time.",
      "GoLookAround is a curated experience platform. We seek out and handpick the activities, retreats and events that deserve a place in your life, from soaring over a landscape on a paramotor to a quiet weekend away.",
      "We are not a directory, and we don't list everything. Every experience you see here is here for a reason: the quality of the experience, the people behind it, and the way it makes you feel.",
    ],
    signature: "Fewer choices. Better ones.",
  },
  difference: {
    label: "Our difference",
    headline: "Not a list. A point of view.",
    intro:
      "Anyone can list experiences. Curation means choosing, and standing behind what we choose.",
    pillars: [
      { icon: "hand", title: "Handpicked, never crowded.", text: "If an experience isn't worth your time, it isn't here." },
      { icon: "heart", title: "Chosen for how it feels.", text: "Quality, people and atmosphere come first, not just availability." },
      { icon: "users", title: "Made for people and groups.", text: "For you, your friends and family, your team or your community." },
      { icon: "shield", title: "Backed by trusted partners.", text: "We work closely with the providers behind every experience." },
    ],
    compare: [
      ["Thousands of options", "A select few"],
      ["You search and compare", "We've already done the looking"],
      ["Anyone can list", "Providers are selected"],
      ["Choice", "Confidence"],
    ] as [string, string][],
  },
  experiences: {
    label: "Experiences",
    headline: "Make room for the extraordinary.",
    intro:
      "Whether you're chasing adrenaline, learning a new skill or simply looking for something different, here is a considered collection of experiences, each one chosen for the way it makes you feel.",
    tags: ["Adventure", "Skill", "Leisure"],
    items: [
      {
        title: "Paramotoring",
        promise: "See the world differently.",
        copy: "Take to the skies, feel the thrill of flight and see the landscape from a whole new perspective.",
        images: [img("para1"), img("para2"), img("para3")],
        alt: "Paramotor in flight over open terrain",
        whyWeChoseIt: null as string | null,
        safety: null as string | null,
      },
      {
        title: "Rifle Shooting",
        promise: "Focus. Aim. Experience.",
        copy: "Test your concentration, build precision and try something that rewards focus and control.",
        images: [img("rifle1")],
        alt: "A focused participant at a supervised range",
        whyWeChoseIt: null as string | null,
        safety: "Licensed range, trained instructors." as string | null,
      },
      {
        title: "Horse Riding",
        promise: "Find your rhythm.",
        copy: "Connect with these incredible animals and enjoy a refreshing time on horseback.",
        images: [img("horse1"), img("horse2")],
        alt: "Rider on horseback along a quiet trail",
        whyWeChoseIt: null as string | null,
        safety: null as string | null,
      },
    ],
    closing:
      "This is only the beginning. We add new experiences slowly and deliberately, only when they have earned their place.",
  },
  retreats: {
    image: img("retreat", 1920, 1100),
    alt: "A calm lakeside cabin at dawn",
    label: "Retreats",
    headline: "Step away. Slow down. Reconnect.",
    body: [
      "Sometimes the best thing you can do is step away from the everyday.",
      "GoLookAround curates retreats for those looking to pause, recharge and reconnect, with nature, with others and with themselves. Each one is chosen for its setting, its pace and the way it lets you truly switch off.",
    ],
    closing: "A change of pace. A breath of fresh air. A getaway worth taking.",
  },
  events: {
    images: [img("ev1", 1200, 900), img("ev2", 800, 1000), img("ev3", 800, 800), img("ev4", 1200, 800), img("ev5", 800, 1000)],
    alts: ["Crowd at a warm-lit live music evening", "Artist painting at a showcase", "Friends sharing a moment", "Cultural gathering under string lights", "Close-up of a musician"],
    label: "Events",
    headline: "Good times are better shared.",
    lead: "Not every event deserves your evening. We pick the ones that do.",
    body: "From art and live music to cultural gatherings, creative showcases and community events, GoLookAround brings together the experiences that people remember. Discover something inspiring, find your people and be part of moments worth remembering.",
    tags: ["Art", "Live music", "Cultural gatherings", "Creative showcases", "Community events"],
    band: "Fewer events. Better evenings.",
  },
  organizations: {
    teamImage: img("team", 1600, 900),
    teamAlt: "A team sharing an outdoor activity together",
    communityImage: img("community", 1600, 900),
    communityAlt: "Residents of a community at a weekend workshop",
    label: "Corporates and communities",
    headline: "Experiences, curated for your people.",
    intro:
      "The strongest teams and communities are built through shared moments. Tell us about your people and your occasion, and we will bring you a curated shortlist of experiences that fit, so you spend your time choosing, not searching.",
    corporate: {
      title: "For corporates",
      text: "Give teams a reason to step away from their desks and connect beyond meetings and emails. From team experiences and employee engagement to curated outings and offsites, we shape options around your people, objectives and budget.",
      pills: ["Team outings", "Offsites", "Employee engagement", "Festive celebrations", "Wellness days"],
    },
    cards: [
      { title: "For residential communities", text: "Make community living more engaging. We curate workshops, outdoor activities, cultural gatherings and weekend experiences that bring residents together, across ages and interests." },
      { title: "For clubs, groups and institutions", text: "Give your members something memorable to look forward to. We curate activities, outings and events around your group's interests, size and requirements." },
    ],
    steps: [
      "Tell us about your people, occasion and goals.",
      "We curate a considered shortlist, not a catalogue.",
      "We deliver together with our selected partners.",
    ],
    cta: "Planning something for your people? Let's curate it together.",
    ctaButton: "Start a conversation",
  },
  partners: {
    label: "Our curated partners",
    headline: "Selected, not listed.",
    lead: "Behind every GoLookAround experience is a provider we chose to work with.",
    body: "We don't open the doors to everyone. We look for providers who are passionate, professional and committed to doing one thing exceptionally well, and we present them in a way that helps the right people find them.",
    steps: [
      ["Discover", "distinctive experiences and the people behind them."],
      ["Evaluate", "the experience, the standards, the team and the capacity to deliver."],
      ["Select", "only those that meet our bar."],
      ["Shape", "the offering with them: format, pricing and terms, clearly presented."],
      ["Connect", "selected experiences with individuals, groups, corporates and communities."],
    ] as [string, string][],
    lookFor: ["Quality of experience", "Safety and professionalism", "Warm hospitality", "Right fit for our audience"],
    band: "To be on GoLookAround is to be chosen.",
  },
  closing: {
    image: img("closing", 1920, 1280),
    alt: "Sunrise over rolling hills, a new day ahead",
    headline: "Your next experience, handpicked.",
    sub: "There's always something worth discovering. Let us do the looking.",
    cards: [
      { title: "Experience something.", text: "Discover our curated experiences and events.", msg: "customer" },
      { title: "Bring it to your people.", text: "Curated experiences for your organization or community.", msg: "organization" },
      { title: "Partner with us.", text: "Showcase your experience to audiences who value quality.", msg: "partner" },
    ] as { title: string; text: string; msg: "customer" | "organization" | "partner" }[],
  },
};

export function waLink(msg: string) {
  const n = content.contact.whatsappNumber ?? "";
  return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;
}

export const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About us" },
  { id: "difference", title: "Our difference" },
  { id: "experiences", title: "Experiences" },
  { id: "retreats", title: "Retreats" },
  { id: "events", title: "Events" },
  { id: "for-organizations", title: "For organizations" },
  { id: "partners", title: "Our partners" },
  { id: "contact", title: "Contact" },
];
