import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'nyaya-case-study',
    title: 'How I designed Nyaya AI: Legal-tech PM case study',
    date: 'May 2026',
    preview: 'A deep dive into personas, competitor research, and responsible AI product strategy for legal simplification.',
    tags: ['Legal-Tech', 'PM', 'MVP'],
    link: '/Nyaya-AI%20Case%20Study.pdf',
  },
  {
    id: 'moscow-vs-rice',
    title: 'MoSCoW vs RICE: choosing the right prioritization lens',
    date: 'April 2026',
    preview: 'A practical guide for selecting the best framework during early product discovery and roadmap planning.',
    tags: ['Product Strategy', 'Portfolio Prep'],
    content: `<h2>Introduction</h2>
<p>Prioritization is the most repeated, highest-stakes decision a PM makes every sprint. Two of the most widely taught frameworks — MoSCoW and RICE — take opposite stances on that question. MoSCoW gives you a quick yes/no signal; RICE gives you a weighted score. Getting the right one in front of the right conversation is the skill, not the math.</p>

<h2>What is MoSCoW?</h2>
<p>MoSCoW classifies every item into one of four buckets: <strong>Must have</strong>, <strong>Should have</strong>, <strong>Could have</strong>, and <strong>Won't / Would like to have</strong>. It's fast, it forces a trade-off, and it surfaces hard decisions early — exactly the kind of conversation an early-stage PM needs to run when stakeholders are still chasing everything.</p>
<p>Where it falls short: two "Must haves" still have no shared scale. MoSCoW tells you what matters relative to the conversation, not whether item A is twice as important as item B.</p>

<h2>What is RICE?</h2>
<p>RICE (Reach × Impact × Confidence ÷ Effort) is a scoring model. Each feature earns a numerical score, making it possible to compare a week-long slotted fix against a month-long platform rewrite on the same table. The formula is simple, but each input carries weight.</p>
<ul>
  <li><strong>Reach</strong> — how many users per quarter?</li>
  <li><strong>Impact</strong> — how much does it move the needle per user? (3 = massive, 0.25 = minimal)</li>
  <li><strong>Confidence</strong> — how sure are we of the estimate? (100 % = locked, 80 % = some research, 50 % = a guess)</li>
  <li><strong>Effort</strong> — person-months from engineering.</li>
</ul>

<h2>When to use which</h2>
<p>A common pattern is to start with MoSCoW to force the strategic conversation, then layer RICE on top for the items that survive the Must / Should cut. This two-pass approach is what I used when prioritising FocusFlow features over its 5-month build cycle.</p>
<ul>
  <li><strong>MoSCoW first</strong> when you have ten ideas and need to get to three before the sprint room.</li>
  <li><strong>RICE first</strong> when you have a backlog, decent data on usage, and need a defensible score for leadership review.</li>
  <li><strong>Both</strong> when you want strategy from MoSCoW and rigour from RICE without duplicating effort.</li>
</ul>

<h2>Summary</h2>
<p>The right framework is whichever one starts the hardest trade-off conversation the fastest. The framework is not the product — the clarity it forces in the room is. I recommend beginning every roadmap cycle with a short MoSCoW pass, then scoring the surviving items through RICE before the detailed planning session.</p>`,
  },
  {
    id: 'syra-freemium',
    title: 'Building SYRA AI: Razorpay, analytics, and product retention',
    date: 'March 2026',
    preview: 'Why freemium worked for SYRA and how we instrumented engagement with real-time analytics.',
    tags: ['Monetization', 'Analytics', 'Strategy'],
    content: `<h2>Why freemium, not paid-first</h2>
<p>SYRA AI ships as a voice assistant that automates everyday digital tasks — mail, calendar, playlists. The barrier to entry is understanding whether it works for you, not your credit card. A freemium model where a free tier lets users experience voice commands on one integration creates a natural metric: did the user try Sheet or Spotify before they charged?</p>
<p>Paid-first kills that loop because the user must commit money before they can form an opinion. Freemium wins where the product's value is experiential — you feel the time saved before you see the bill.</p>

<h2>Setting up the conversion funnel</h2>
<p>Early in the SYRA build, I instrumented session-level funnels: free signup → first voice command → first connected service → billing page visit → subscription active. Razorpay's webhook layer landed on every transition point, giving me a live ledger of every conversion step without touching the backend directly.</p>
<p>The funnel view immediately surfaced a problem: 60 % of users connected one service (Gmail) and never hit a second. That was a product-shape problem, not a pricing problem. The answer was to auto-suggest a second service based on the first, nudging the category breadth of every new user.</p>

<h2>Retention, not just conversion</h2>
<p>Retention holds freemium together. Free users who touch the product for 7 days in the first week have a 4x higher chance of upgrading. Instrumenting a week-one frequency signal (≥3 voice sessions in 7 days) became the primary KPI for onboarding flows.</p>
<p>In summary: freemium wins for SYRA because voice commands are experiential, the Razorpay webhook pipeline closed conversion tracking without backend work, and the 7-day frequency signal gave us a leading indicator for revenue conversions before they landed.</p>`,
  },
  {
    id: 'focusflow-learning',
    title: 'Lessons from FocusFlow: behavioral science in product design',
    date: 'February 2026',
    preview: 'A short note on designing focus workflows with habit loops, incentives, and user empathy.',
    tags: ['UX', 'Product Thinking', 'Behavioral Science'],
    content: `<h2>The problem with pure motivation products</h2>
<p>Focus building and study-tracker apps assume motivation is the scarce resource. The better framing: will-power is finite; the environment is the thing to design. FocusFlow was built around that assumption. The reminder to focus is useless if the phone is a thumb-tap away from the very distraction you are fighting.</p>
<p>The behavioral core of FocusFlow came down to two ideas: consequence and signal. A focus session should feel expensive if cancelled mid-way, and the product should signal progress with enough clarity that a streak becomes something worth protecting emotionally.</p>

<h2>Habit loops in the UI</h2>
<p>A habit loop in product design maps to: cue → routine → reward → investment. FocusFlow placed the cue (session start dry tap) above the fold, the routine (25 min timer) in the centre, the reward (streak counter + XP level) immediately visible post-session. The investment was the streak bank itself — once a user had a 7-day streak, the mental cost of breaking it rose sharply.</p>
<p>The payoff came in user interviews: 3 of 8 testers named the streak as their primary reason for returning, not feature richness or aesthetics.</p>

<h2>Incentives without manipulation</h2>
<p>Beginners need streaks; experienced learners need performance signals. FocusFlow layered XP-based rewards for new users and moved to completion-rate benchmarking for users past 30 sessions. This split meant the product scaled its incentive model as the user grew — a pattern worth adopting in any habit-forming workflow product.</p>
<p>The core lesson: behavioral design isn't about gamification for gamification's sake. It is about mapping every interaction to a cognitive lever, protecting the user's progress when they are most likely to drop, and transitioning the incentive model as the user matures.</p>`,
  },
];
