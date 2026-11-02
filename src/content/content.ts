// All brochure copy, flags, contact details and image slots live here.
// Set a field to null to hide it. Images live in public/images.

const img = (name: string) => `/images/${name}.jpg`;

export const content = {
  flags: {
    showSafetyLine: false,
    showEmbassyBlock: false,
    showQr: false,
  },
  contact: {
    whatsappNumber: "919390631008" as string | null, // e.g. "919800000000"
    email: "connect@lookaround.in" as string | null,
    phone: "+91 93906 31008" as string | null,
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
    eyebrow: "Handpicked, never listed",
    titleLines: ["Curated for", "the curious."],
    tagline: "Curated for the curious.",
    sub: "Handpicked experiences, retreats and events, chosen so you don't have to search.",
    prompt: "Scroll to explore",
    tunnel: [
      { src: "/images/tunnel/paramotoring.jpg", title: "Paramotoring" },
      { src: "/images/tunnel/go-karting.jpg", title: "Go Karting" },
      { src: "/images/tunnel/mirror-maze.jpg", title: "Mirror maze" },
      { src: "/images/tunnel/rifle-shooting.jpg", title: "Rifle Shooting" },
      { src: "/images/tunnel/golf.jpg", title: "Golf" },
      { src: "/images/tunnel/sky-cycle.jpg", title: "Sky cycle" },
      { src: "/images/tunnel/rope-course.jpg", title: "Rope course" },
      { src: "/images/tunnel/bungee.jpg", title: "Bungee" },
      { src: "/images/tunnel/climbing-wall.jpg", title: "Climbing wall" },
    ],
  },
  about: {
    image: img("about"),
    alt: "A smiling rider in a helmet on a sky cycle high above an adventure park",
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
        images: [img("para-1"), img("para-2"), img("para-3"), img("para-4")],
        alt: "Paramotor in flight over open terrain",
        whyWeChoseIt: null as string | null,
        safety: null as string | null,
      },
      {
        title: "Rifle Shooting",
        promise: "Focus. Aim. Experience.",
        copy: "Test your concentration, build precision and try something that rewards focus and control.",
        images: [img("rifle-1"), img("rifle-2"), img("rifle-3")],
        alt: "A focused participant at a supervised indoor range",
        whyWeChoseIt: null as string | null,
        safety: "Licensed range, trained instructors." as string | null,
      },
      {
        title: "Go Karting",
        promise: "Find your racing line.",
        copy: "Feel the speed, take the corners and race your friends around a proper outdoor track.",
        images: [img("kart-1"), img("kart-2"), img("kart-3"), img("kart-4")],
        alt: "Go-karts racing around an outdoor track",
        whyWeChoseIt: null as string | null,
        safety: null as string | null,
      },
      {
        title: "Golf",
        promise: "Tee off, wind down.",
        copy: "Swing from a multi-level driving range with open fairway ahead. Great for first-timers, friends and families alike.",
        images: [img("golf-1"), img("golf-2"), img("golf-3"), img("golf-4")],
        alt: "Golfers on a multi-level driving range at sunset",
        whyWeChoseIt: null as string | null,
        safety: null as string | null,
      },
    ],
    more: "And many more.",
    closing:
      "This is only the beginning. We add new experiences slowly and deliberately, only when they have earned their place.",
  },
  retreats: {
    image: img("retreat"),
    alt: "An aerial view of a wide green lawn and a multi-level building",
    label: "Retreats",
    headline: "Step away. Slow down. Reconnect.",
    body: [
      "Sometimes the best thing you can do is step away from the everyday.",
      "GoLookAround curates retreats for those looking to pause, recharge and reconnect, with nature, with others and with themselves. Each one is chosen for its setting, its pace and the way it lets you truly switch off.",
    ],
    closing: "A change of pace. A breath of fresh air. A getaway worth taking.",
  },
  events: {
    images: [img("event-1"), img("event-2"), img("event-3"), img("event-4"), img("event-5")],
    alts: ["A lively venue with a large LED screen and dining tables", "A glowing neon entrance at night", "A colourful bar and lounge with lantern lighting", "A warmly lit hall with tables and string lights", "A relaxed lounge with industrial lighting"],
    label: "Events",
    headline: "Good times are better shared.",
    lead: "Not every event deserves your evening. We pick the ones that do.",
    body: "From art and live music to cultural gatherings, creative showcases and community events, GoLookAround brings together the experiences that people remember. Discover something inspiring, find your people and be part of moments worth remembering.",
    tags: ["Art", "Live music", "Cultural gatherings", "Creative showcases", "Community events"],
    band: "Fewer events. Better evenings.",
  },
  gallery: {
    label: "Gallery",
    headline: "A look at what's out there.",
    intro: "Drag the line, or let it run.",
    slides: [
      { image: "/images/gallery/01.jpg", title: "The range from above", caption: "Sky Golf" },
      { image: "/images/gallery/02.jpg", title: "Mirror maze", caption: "Discovate" },
      { image: "/images/gallery/03.jpg", title: "Go Karting", caption: "Red Riders" },
      { image: "/images/gallery/04.jpg", title: "The range from above", caption: "Sky Golf" },
      { image: "/images/gallery/05.jpg", title: "Tunnel ride", caption: "Discovate" },
      { image: "/images/gallery/06.jpg", title: "The viewing deck", caption: "Red Riders" },
      { image: "/images/gallery/07.jpg", title: "Burger & fries", caption: "Sky Golf" },
      { image: "/images/gallery/08.jpg", title: "Garden chimes", caption: "Discovate" },
      { image: "/images/gallery/09.jpg", title: "Climbing wall", caption: "Red Riders" },
      { image: "/images/gallery/10.jpg", title: "Crispy chicken", caption: "Sky Golf" },
      { image: "/images/gallery/11.jpg", title: "Rope course", caption: "Discovate" },
      { image: "/images/gallery/12.jpg", title: "Bungee trampoline", caption: "Red Riders" },
      { image: "/images/gallery/13.jpg", title: "Biryani", caption: "Sky Golf" },
      { image: "/images/gallery/14.jpg", title: "Rope course", caption: "Discovate" },
      { image: "/images/gallery/15.jpg", title: "Sky swing", caption: "Red Riders" },
      { image: "/images/gallery/16.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/17.jpg", title: "Banquet hall", caption: "Discovate" },
      { image: "/images/gallery/18.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/19.jpg", title: "Banquet hall", caption: "Discovate" },
      { image: "/images/gallery/20.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/21.jpg", title: "Climbing wall", caption: "Discovate" },
      { image: "/images/gallery/22.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/23.jpg", title: "Climbing wall", caption: "Discovate" },
      { image: "/images/gallery/24.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/25.jpg", title: "Gyro ride", caption: "Discovate" },
      { image: "/images/gallery/26.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/27.jpg", title: "Gyro ride", caption: "Discovate" },
      { image: "/images/gallery/28.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/29.jpg", title: "Sky wheel", caption: "Discovate" },
      { image: "/images/gallery/30.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/31.jpg", title: "Sky cycle", caption: "Discovate" },
      { image: "/images/gallery/32.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/33.jpg", title: "Sky cycle", caption: "Discovate" },
      { image: "/images/gallery/34.jpg", title: "On the tee", caption: "Sky Golf" },
      { image: "/images/gallery/35.jpg", title: "The clubhouse", caption: "Sky Golf" },
      { image: "/images/gallery/36.jpg", title: "The clubhouse", caption: "Sky Golf" }
    ] as { image: string; title: string; caption: string }[],
  },
  organizations: {
    teamImage: img("team"),
    teamAlt: "A high ropes course and climbing tower for team activities",
    communityImage: img("community"),
    communityAlt: "Two kids playing foosball together at a weekend outing",
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
  { id: "gallery", title: "Gallery" },
  { id: "for-organizations", title: "For organizations" },
  { id: "partners", title: "Our partners" },
  { id: "contact", title: "Contact" },
];
