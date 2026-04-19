// Central site configuration. Edit here to change contact info, service area, URLs.

export const SITE = {
  name: "Allegiant Home Care",
  shortName: "Allegiant",
  tagline: "Compassionate home care for families across Rochester, MN",
  description:
    "Trusted home care in Rochester, MN. Personal care, respite, companionship, and post-discharge support from local, background-checked caregivers.",
  url: "https://www.allegiantcare.org",
  locale: "en-US",
} as const;

export const CONTACT = {
  phoneDisplay: "(507) 218-8833",
  phoneTel: "+15072188833",
  phoneSms: "+15072188833",
  email: "info@allegiantcare.com",
  address: {
    street: "11 1st Ave SW, Suite 201",
    city: "Rochester",
    region: "MN",
    postalCode: "55902",
    country: "US",
  },
  hours: "Monday–Friday, 8:00 AM – 6:00 PM CT",
  hoursNote: "After-hours calls returned the next morning",
  // Approximate Rochester, MN coordinates for LocalBusiness schema
  geo: { latitude: 44.0121, longitude: -92.4802 },
} as const;

export const SERVICE_AREAS = [
  "Rochester",
  "Byron",
  "Stewartville",
  "Pine Island",
  "Oronoco",
  "Eyota",
  "Chatfield",
  "Kasson",
] as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL = {
  // Rendered only if env var is set — never fall back to placeholders.
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "",
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
} as const;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export const FORMSPREE = {
  careSeeker: process.env.NEXT_PUBLIC_FORMSPREE_CARE_SEEKER_ID || "",
  caregiver: process.env.NEXT_PUBLIC_FORMSPREE_CAREGIVER_ID || "",
} as const;

export const TRUST_BADGES = [
  "Licensed & insured",
  "Locally owned",
  "Background-checked caregivers",
  "Serving Rochester & surrounding communities",
] as const;
