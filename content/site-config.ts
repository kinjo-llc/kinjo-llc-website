// ─── Site-wide configuration ────────────────────────────────────────────────
// Single source of truth for metadata, navigation, services, and capabilities.

export const siteConfig = {
  name: 'KINJO',
  tagline: 'Veteran-Led · Mission Support · Technology Development',
  description:
    'Kinjo LLC is a veteran-led consulting and technology firm specializing in U.S.–Japan operational support, language and SIGINT expertise, mission advisory, and AI-enabled software development.',
  url: 'https://kinjollc.com',
  email: 'tatsuki@kinjollc.com',
  footerBlurb:
    'Veteran-led consulting and technology — U.S.–Japan operational support, language and SIGINT expertise, and mission-focused technology for government and commercial organizations.',
} as const

// ─── Navigation ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'About',        href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Experience',   href: '/experience' },
  { label: 'Projects',     href: '/projects' },
  { label: 'Contact',      href: '/contact' },
] as const

export const navCta = {
  label: 'Contact Kinjo',
  href: '/contact',
} as const

// ─── Homepage capability cards (5 canonical areas) ───────────────────────────

export interface Capability {
  id: string
  title: string
  body: string
  icon: string
}

export const capabilities: Capability[] = [
  {
    id: 'mission-support',
    title: 'Mission Support & Advisory',
    body: 'Operational consulting and advisory services for government and partner organizations — built on two decades of defense and intelligence experience.',
    icon: 'Shield',
  },
  {
    id: 'us-japan',
    title: 'U.S.–Japan Operational Support',
    body: 'Direct operational experience at Yokota AB and Kadena AB supporting JASDF coordination, USFJ engagement, and Indo-Pacific mission environments.',
    icon: 'Map',
  },
  {
    id: 'technology-ai',
    title: 'Software & AI Development',
    body: 'Mission-focused software and AI-enabled tools built for operational workflows and data analysis — practical systems for demanding environments.',
    icon: 'Code2',
  },
  {
    id: 'sigint-support',
    title: 'SIGINT Support',
    body: 'Operational and analytical support related to signals intelligence environments, mission planning, and intelligence-informed reporting.',
    icon: 'Eye',
  },
  {
    id: 'language-cultural',
    title: 'Language & Cultural Support',
    body: 'Japanese language expertise and cross-cultural advisory for missions involving U.S.–Japan coordination — grounded in a Chinese Cryptologic Linguist career.',
    icon: 'Globe',
  },
]

// ─── Legacy — services array kept for the /services route ────────────────────

export interface Service {
  id: string
  title: string
  slug: string
  summary: string
  body: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'intel-analysis',
    title: 'Intelligence & Analytical Systems',
    slug: 'intel-analysis',
    summary: 'Analytical reporting, intelligence support, and decision-support systems grounded in operational experience.',
    body: 'Operational analysis, strategic intelligence reporting, open source research, and decision support for government and commercial clients.',
    icon: 'Eye',
  },
  {
    id: 'language-cultural',
    title: 'Language & Cross-Cultural Support',
    slug: 'language-cultural',
    summary: 'Language analysis, cross-cultural expertise, and international engagement support.',
    body: 'Chinese Cryptologic Linguist background supporting language analysis, cultural advisory, and cross-cultural analytical work.',
    icon: 'Globe',
  },
  {
    id: 'ai-software',
    title: 'AI-Driven Software Development',
    slug: 'ai-software',
    summary: 'Mission-focused tool and system development using AI-native architecture and automation.',
    body: 'Design and development of AI-enabled analytical tools, research automation systems, and decision-support platforms.',
    icon: 'Code2',
  },
  {
    id: 'mission-systems',
    title: 'Mission Systems & Operational Technology',
    slug: 'mission-systems',
    summary: 'Technology systems and operational tools designed for defense, intelligence, and government environments.',
    body: 'Technology systems, operational tools, and advisory services designed around real mission requirements.',
    icon: 'Shield',
  },
]

// ─── Contact details ─────────────────────────────────────────────────────────

export const contactDetails = [
  {
    title: 'Email',
    body: 'tatsuki@kinjollc.com',
  },
  {
    title: 'Response',
    body: 'Target response within 1–2 business days',
  },
  {
    title: 'Focus',
    body: 'Federal and commercial engagements in technology, intelligence, language, and consulting services',
  },
]

// ─── Contact form ─────────────────────────────────────────────────────────────

export const serviceInterestOptions = [
  'Mission Support & Advisory',
  'U.S.–Japan Operational Support',
  'Software & AI Development',
  'SIGINT Support',
  'Language & Cultural Support',
  'General Inquiry',
] as const

export type ServiceInterest = (typeof serviceInterestOptions)[number]

// ─── Engagement steps ────────────────────────────────────────────────────────

export const engagementSteps = [
  { title: 'Discover', body: 'Clarify goals, mission requirements, and engagement context.' },
  { title: 'Design',   body: 'Define the analytical or technical approach aligned to the mission.' },
  { title: 'Deliver',  body: 'Execute with rigor, structure, and accountability.' },
  { title: 'Refine',   body: 'Improve, extend, and sustain the capability over time.' },
]
