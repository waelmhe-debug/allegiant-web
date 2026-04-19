// Service catalog. Copy comes from allegiant-website-copy.md.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  cardDescription: string;
  overview: string;
  included: string[];
  whoItsFor: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "personal-homemaker-support",
    name: "Personal & Homemaker Support",
    shortName: "Personal & Homemaker",
    cardDescription:
      "Help with bathing, dressing, meals, light housekeeping, and the daily tasks that make home feel like home.",
    overview:
      "Hands-on help with the everyday tasks that keep someone comfortable, healthy, and at home. Our caregivers step in where help is needed — whether that's a few mornings a week or steady daily support.",
    included: [
      "Bathing, dressing, and personal grooming",
      "Meal preparation and mealtime support",
      "Light housekeeping and laundry",
      "Medication reminders",
      "Assistance with mobility and transfers",
      "Safety checks around the home",
    ],
    whoItsFor: [
      "Older adults who want to stay independent at home",
      "Adults recovering from illness, surgery, or a hospital stay",
      "Individuals who need consistent help with daily routines",
    ],
    faqs: [
      {
        q: "Can we start with just a few hours a week?",
        a: "Yes. Many families start with a few hours of personal care each week and adjust as needs change.",
      },
      {
        q: "Will the same caregiver come each visit?",
        a: "We match you with caregivers who fit your schedule and your loved one's personality, and we work hard to keep that team consistent.",
      },
    ],
  },
  {
    slug: "respite-companion-care",
    name: "Respite & Companion Care",
    shortName: "Respite & Companion",
    cardDescription:
      "Temporary relief for family caregivers, and meaningful company for the person being cared for.",
    overview:
      "Family caregivers carry a lot. Respite and companion care give you a break — and give your loved one a thoughtful, engaged companion while you're away.",
    included: [
      "Friendly conversation and engagement",
      "Reading, games, crafts, and shared activities",
      "Accompaniment to appointments, errands, and outings",
      "Meal prep and mealtime company",
      "Safety supervision while you take time for yourself",
    ],
    whoItsFor: [
      "Primary family caregivers who need scheduled breaks",
      "Loved ones who are alone during the day",
      "Families planning around a trip, work travel, or a busy season",
    ],
    faqs: [
      {
        q: "How short can a respite visit be?",
        a: "We work with your schedule. For many families, a few hours once or twice a week is enough to make a real difference.",
      },
      {
        q: "Do you provide overnight respite?",
        a: "Yes, overnight coverage is available for families who need it.",
      },
    ],
  },
  {
    slug: "individualized-home-supports",
    name: "Individualized Home Supports",
    shortName: "Individualized Home Supports",
    cardDescription:
      "Tailored, goal-oriented care plans that build skills and support greater independence over time.",
    overview:
      "A thoughtful, person-centered support plan built around the goals, preferences, and strengths of the person we're caring for. We focus on building skills and confidence — not just completing tasks.",
    included: [
      "Personalized support plan built with you and your family",
      "Skill-building routines for daily living",
      "Community and social engagement",
      "Progress check-ins and plan adjustments over time",
      "Coordination with other support services involved in care",
    ],
    whoItsFor: [
      "Adults who want to build independence in specific areas",
      "Individuals stepping down from more intensive support",
      "Families who want care with a clear direction, not just coverage",
    ],
    faqs: [
      {
        q: "How do you build the support plan?",
        a: "We start by listening. A care coordinator meets with you and your family to understand goals, preferences, and daily realities, then puts a plan together and revisits it regularly.",
      },
    ],
  },
  {
    slug: "community-independent-living",
    name: "Community & Independent Living Support",
    shortName: "Community & Independent Living",
    cardDescription:
      "Help with daily routines, budgeting, transportation, and staying connected to community life.",
    overview:
      "Practical, everyday support that helps adults live independently in the community — with the right amount of help, in the right places, from someone they trust.",
    included: [
      "Help with daily routines and home management",
      "Budgeting and paying bills",
      "Transportation to appointments, work, and activities",
      "Grocery shopping and errands",
      "Staying connected to community and social life",
    ],
    whoItsFor: [
      "Adults living independently who want focused support in specific areas",
      "Individuals transitioning to their own home or apartment",
      "People who want to stay engaged in their community with reliable help",
    ],
    faqs: [
      {
        q: "Can a caregiver drive my loved one to appointments?",
        a: "Yes. Transportation to medical appointments, errands, and community activities is part of how we support independent living.",
      },
    ],
  },
  {
    slug: "family-training",
    name: "Family Training",
    shortName: "Family Training",
    cardDescription:
      "Practical coaching for family members who are becoming the primary caregiver at home.",
    overview:
      "When a family member steps into the caregiver role, the learning curve is steep. We coach families through the practical, day-to-day parts of caregiving so they can feel confident and supported at home.",
    included: [
      "One-on-one coaching for the primary family caregiver",
      "Hands-on practice with daily care tasks",
      "Guidance on home setup, safety, and routines",
      "Strategies for preventing caregiver burnout",
      "Check-ins as the situation changes",
    ],
    whoItsFor: [
      "Family members stepping into a caregiving role",
      "Spouses or adult children taking on more responsibility at home",
      "Families who want confidence and skills, not just answers",
    ],
    faqs: [
      {
        q: "Is family training a one-time session?",
        a: "It can be, but most families benefit from several sessions over time as routines change and new questions come up.",
      },
    ],
  },
  {
    slug: "transitional-post-discharge-care",
    name: "Transitional & Post-Discharge Support",
    shortName: "Transitional & Post-Discharge",
    cardDescription:
      "Short-term, higher-intensity support during the first weeks home from a hospital or rehabilitation stay.",
    overview:
      "Coming home from a hospital or rehabilitation stay is a fragile moment. We help families make that transition safely — coordinating with your existing care team, setting up the home, and providing the steady support that makes recovery at home possible.",
    included: [
      "Pre-discharge planning with you and your care team",
      "Home setup for a safe return — mobility paths, bathroom safety, supplies",
      "Higher-intensity support during the first days and weeks home",
      "Coordination with your existing providers and family",
      "Step-down support as recovery progresses",
    ],
    whoItsFor: [
      "Families preparing for a loved one's discharge from a hospital or rehabilitation stay",
      "Out-of-town family members coordinating care from a distance",
      "Adults who want to recover at home with the right support in place",
    ],
    faqs: [
      {
        q: "How fast can you start after discharge?",
        a: "For urgent hospital-discharge situations, we work with families to start as soon as possible — often within the same day or the next day.",
      },
      {
        q: "Do you coordinate with the existing care team?",
        a: "Yes. We communicate with your loved one's existing providers and family members so the plan at home lines up with the plan at discharge.",
      },
      {
        q: "Is this medical care?",
        a: "No. Allegiant provides personal care, companionship, and support at home — not medical treatment. We work alongside your medical providers, not in place of them.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
