// Family resource articles. Stored inline for now; can migrate to MDX later.

export type Resource = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  body: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "planning-for-discharge",
    title: "Planning ahead for a hospital discharge",
    description:
      "A practical checklist for families preparing to bring a loved one home from a hospital or rehabilitation stay.",
    readingTime: "5 min read",
    body: `The days leading up to a discharge can feel rushed. A little planning goes a long way.

**A few days before discharge**

- Ask the discharge team what kind of support your loved one will need at home — bathing, mobility, meals, medication reminders.
- Walk through the home with a caregiver's eye: clear hallways, secure rugs, add grab bars where needed, and set up a bed and bathroom on the same level if possible.
- Stock the home with easy meals, water, and any supplies the discharge team recommends.

**The day of discharge**

- Have someone available to accompany your loved one home. The first few hours home are the most disorienting.
- Confirm medications, follow-up appointments, and who to call if something feels off.

**The first two weeks home**

- Expect more help to be needed than you thought. Recovery is tiring.
- Don't wait to ask for help. If you're stretched, a few hours of support each day can prevent a setback.

If you'd like help planning a transition home, we're here. Call us at (507) 218-8833 — we'll walk through your situation with no cost or commitment.`,
  },
  {
    slug: "starting-the-conversation",
    title: "Starting the conversation about care at home",
    description:
      "How to talk with a parent or spouse about bringing in help — without making it feel like a loss.",
    readingTime: "4 min read",
    body: `Most families wait too long to talk about home care. The conversation feels loaded — like it's about losing independence, not gaining support.

A few things we've learned from families in Rochester:

**Frame it as support, not replacement.** Nobody wants to "be taken care of." But most people are glad to have someone around who can help with the heavy lifting — literal and figurative.

**Start small.** A few hours of companionship each week is a low-stakes way to introduce the idea. It often becomes the thing your loved one looks forward to most.

**Let them be part of the decision.** Matching personality matters. A good caregiver feels like a welcome guest, not a stranger.

**Give yourself permission.** If you're the primary family caregiver, your well-being matters too. Respite isn't selfish — it's what makes sustained caregiving possible.

If you'd like to talk through what might work for your family, call us at (507) 218-8833. No pressure, no obligation.`,
  },
  {
    slug: "what-to-expect",
    title: "What to expect from your first consultation",
    description:
      "A simple walkthrough of what happens when you reach out, who you'll talk to, and what comes next.",
    readingTime: "3 min read",
    body: `We keep this simple.

**When you call or submit a form**

You'll talk to a member of our care team — not a phone tree, not an out-of-state call center. We'll listen first, ask a few questions, and answer yours.

**Your free consultation**

A care coordinator meets with you and your family, in person or by video. We ask about the situation, the person who needs support, and what "success" looks like for your family. We explain what we do (and what we don't), walk through options, and answer questions about cost and coverage.

**If it's the right fit**

We put a care plan together, match a caregiver, introduce them before the first shift, and stay involved from there. If anything changes — or if the match isn't right — we adjust.

That's it. No pressure, no obligation, no long contracts.`,
  },
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
