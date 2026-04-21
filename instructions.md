# 🧩 RETAILPUZZLE — MASTER ENGINEERING PROMPT
## AI-First Adaptive E-Commerce Platform

> You are a world-class product engineering team: Lead Frontend Architect, Senior Backend Engineer, AI Systems Engineer, UX Design Director, Growth & CRO Strategist, and DevOps Lead. Build a production-grade, AI-native e-commerce platform that learns, adapts, and converts — every session, every user, every device.

---

## 🎯 MISSION

Build a scalable, modular e-commerce system that:

- **Learns** user intent in real-time from behavioral signals
- **Adapts** the entire UI — layout, products, pricing, copy — per user segment
- **Converts** using AI-driven CRO: urgency, social proof, upsells, recovery flows
- **Grows** LTV through post-purchase personalization, loyalty loops, and churn prevention
- **Feels** like a premium, funded product — not a theme or template

---

## 🧠 BRAND IDENTITY (LOCKED)

| Attribute      | Value                                                    |
|----------------|----------------------------------------------------------|
| Brand Name     | **RetailPuzzle**                                         |
| Tagline        | *"Every piece fits. Every shopper feels known."*        |
| Identity       | AI-first adaptive commerce for modern consumers          |
| Tone           | Smart, warm, confident — never robotic                   |
| Positioning    | The platform that assembles the perfect shopping experience for every individual |

---

## 🧩 TECH STACK (STRICT — DO NOT DEVIATE)

### Frontend
- **Framework:** Next.js 14+ (App Router, Server Components, Streaming)
- **Language:** TypeScript (strict mode)
- **UI Library:** Tailwind CSS v3 + ShadCN UI
- **Animations:** Framer Motion (scroll-based, layout-aware)
- **3D (optional):** Three.js / React Three Fiber (featured product showcase only)
- **State:** Zustand (client) + TanStack Query (server state)
- **Forms:** React Hook Form + Zod

### Backend
- **Runtime:** Node.js via Next.js API Routes + Route Handlers
- **ORM:** Prisma (with typed queries)
- **Database:** PostgreSQL (primary) + pgvector extension (AI embeddings)
- **Cache:** Redis via Upstash (sessions, recs, rate limits)
- **Queue:** BullMQ (email, notifications, async AI jobs)
- **Search:** Typesense (self-hosted or cloud) for product search with typo-tolerance

### AI Layer
- **LLM:** OpenAI GPT-4o (or fallback to deterministic mock engine)
- **Embeddings:** OpenAI `text-embedding-3-small` stored in pgvector
- **Recommendation fallback:** Custom scoring algorithm (no API key required)
- **Image AI (optional):** Replicate API for AI product photography enhancement

### Auth & Payments
- **Auth:** NextAuth v5 — Google OAuth + Email Magic Link + Guest sessions
- **Payments:** Stripe (Elements, Webhooks, Subscriptions for loyalty tier)
- **Fraud:** Stripe Radar rules

### Infra & DevOps
- **Hosting:** Vercel (Edge Functions, ISR, Image Optimization)
- **CDN/Storage:** Cloudflare R2 (product images, assets)
- **Monitoring:** Sentry (errors) + Pino (structured logging)
- **Analytics:** PostHog (product analytics, session replay, A/B tests)
- **CI/CD:** GitHub Actions → Vercel preview deployments

---

## 🗂️ PROJECT ARCHITECTURE

```
retailpuzzle/
├── app/                          # Next.js App Router
│   ├── (shop)/                   # Customer-facing routes
│   │   ├── page.tsx              # AI-personalized homepage
│   │   ├── products/[slug]/      # Product detail (SSR + ISR)
│   │   ├── category/[slug]/      # Dynamic category pages
│   │   ├── search/               # Semantic search results
│   │   ├── cart/                 # Optimistic cart UI
│   │   ├── checkout/             # Multi-step Stripe checkout
│   │   └── account/              # User dashboard + AI insights
│   ├── (admin)/                  # Admin routes (protected)
│   │   ├── dashboard/            # Revenue + AI analytics
│   │   ├── products/             # Product management
│   │   ├── orders/               # Order fulfillment
│   │   └── ai-insights/          # Recommendation effectiveness
│   └── api/                      # API route handlers
│       ├── ai/                   # AI endpoints
│       ├── products/             # Product CRUD + search
│       ├── cart/                 # Cart operations
│       ├── checkout/             # Stripe session + webhooks
│       ├── auth/                 # NextAuth handlers
│       └── track/                # Behavior event ingestion
│
├── components/
│   ├── ui/                       # ShadCN base components
│   ├── shop/                     # Product cards, grid, filters
│   ├── ai/                       # AI widget components
│   │   ├── RecommendationRail    # Horizontal rec strip
│   │   ├── PersonalizedHero      # Adaptive hero banner
│   │   ├── IntentBadge           # "You might need this" tag
│   │   └── InsightCard           # AI reasoning shown to user
│   ├── cart/                     # Cart drawer, upsell prompts
│   ├── checkout/                 # Stripe Elements wrappers
│   └── analytics/                # Admin charts, heatmaps
│
├── ai/                           # AI Engine (core intelligence)
│   ├── recommendation-engine.ts  # Ranking + matching core
│   ├── personalization.ts        # Homepage + layout adaptation
│   ├── intent-detector.ts        # Session intent scoring
│   ├── pricing-engine.ts         # Dynamic discount logic
│   ├── churn-predictor.ts        # LTV + churn risk scoring
│   ├── search-ranker.ts          # Semantic search re-ranking
│   ├── email-personalizer.ts     # AI email content generator
│   └── insights.ts               # Admin-facing AI analytics
│
├── lib/
│   ├── db.ts                     # Prisma client singleton
│   ├── redis.ts                  # Upstash Redis client
│   ├── stripe.ts                 # Stripe client
│   ├── openai.ts                 # OpenAI client + fallback
│   ├── typesense.ts              # Search client
│   ├── analytics.ts              # PostHog server-side
│   └── utils.ts                  # Shared utilities
│
├── services/
│   ├── product.service.ts        # Product business logic
│   ├── order.service.ts          # Order lifecycle management
│   ├── user.service.ts           # User profile + preferences
│   ├── inventory.service.ts      # Stock management
│   ├── email.service.ts          # Transactional + AI emails
│   └── notification.service.ts   # Push + SMS orchestration
│
├── hooks/
│   ├── usePersonalization.ts     # Client-side AI state
│   ├── useCart.ts                # Optimistic cart mutations
│   ├── useBehaviorTracker.ts     # Event capture hook
│   ├── useSearch.ts              # Debounced semantic search
│   └── useRecommendations.ts     # Rec rail data fetching
│
├── db/
│   └── schema.prisma             # Full database schema
│
├── types/                        # Global TypeScript types
├── config/                       # App constants + feature flags
└── tests/                        # Vitest + Playwright
```

---

## 🧠 AI ENGINE — DEEP SPECIFICATION

### 1. BEHAVIOR TRACKING SYSTEM

**Real-time signals captured (client-side, non-blocking):**

```typescript
type BehaviorEvent = {
  userId: string | null       // null for guest (fingerprinted)
  sessionId: string
  eventType:
    | 'page_view'
    | 'product_view'
    | 'scroll_depth'          // 25 / 50 / 75 / 100%
    | 'hover_product'         // >1.5s hover = interest signal
    | 'add_to_cart'
    | 'remove_from_cart'
    | 'cart_abandon'
    | 'search_query'
    | 'filter_applied'
    | 'purchase'
    | 'wishlist_add'
    | 'review_read'
    | 'image_zoom'            // High purchase intent signal
    | 'size_selected'
  payload: Record<string, unknown>
  timestamp: Date
  deviceType: 'mobile' | 'tablet' | 'desktop'
  geo: { country: string; city: string }
}
```

**Architecture:** Events are batched client-side (500ms debounce), sent to `/api/track`, written to Redis stream, then async-consumed by a BullMQ worker into PostgreSQL. Zero impact on render performance.

---

### 2. USER SEGMENTATION ENGINE

Each user is dynamically scored into segments on every session:

| Segment | Signals | AI Response |
|---------|---------|-------------|
| `new_explorer` | First visit, no history | Trending + bestsellers + brand story |
| `warm_browser` | Return visitor, no purchase | Recently viewed + "Where you left off" |
| `high_intent` | Multiple views of same SKU, image zoom, size check | Urgency banner + low-stock alert + discount offer |
| `cart_abandoner` | Cart built, no checkout (>30min) | Recovery banner + social proof + checkout offer |
| `loyal_buyer` | 2+ purchases, high LTV | Loyalty tier badge + early access + VIP recs |
| `at_risk_churner` | Previously active, 30+ days silent | Win-back campaign + personalized incentive |
| `deal_seeker` | Click pattern: discount badges, sale filters | Price anchoring + bundle deals |
| `premium_shopper` | Views premium SKUs, high AOV history | Premium collection hero + quality-first copy |

---

### 3. RECOMMENDATION ENGINE — `ai/recommendation-engine.ts`

**Four-layer hybrid ranking model:**

```
Final Score = (0.35 × CollabScore)
            + (0.30 × ContentScore)
            + (0.20 × TrendScore)
            + (0.15 × IntentScore)
```

**Layer A — Collaborative Filtering**
- Matrix factorization on purchase + view co-occurrence
- "Users with your taste also bought..."
- Fallback: item-item similarity via cosine distance on behavior vectors

**Layer B — Content-Based Filtering**
- Product embeddings via OpenAI `text-embedding-3-small`
- Stored in pgvector, queried with `<=>` cosine distance operator
- Inputs: product title, description, tags, category, material, use-case

**Layer C — Trend Engine**
- Global trend score: purchase velocity (last 24h / 7d rolling window)
- Local trend: geo-localized trending (city/country level)
- Category trend: trending within browsed categories this session

**Layer D — Intent Scoring**
- Session-level real-time scoring
- High weight on: image zoom (+3), size check (+4), repeated views (+2), cart add (+5)
- Suppresses already-purchased products (unless consumable)
- Boosts complementary items to cart contents

---

### 4. DYNAMIC HOMEPAGE PERSONALIZATION — `ai/personalization.ts`

The homepage is not a static layout. It assembles itself per user:

```typescript
type HomepageLayout = {
  hero: HeroVariant                  // 6 variants based on segment
  sections: HomepageSection[]        // Dynamic section order
  featuredProducts: Product[]        // AI-ranked, segment-aware
  socialProof: SocialProofVariant    // Reviews / numbers / trust badges
  urgencyLayer: UrgencyVariant | null
}
```

**Section pool (AI selects and orders):**
- `TrendingNow` — global velocity-ranked products
- `BecauseYouViewed` — content-based recs
- `PickUpWhere-Left-Off` — session continuity
- `FrequentlyBoughtTogether` — basket AI
- `LimitedStock` — real inventory-triggered urgency
- `NewArrivals` — recency + category match
- `PremiumEditorial` — for premium_shopper segment
- `DealOfTheDay` — for deal_seeker segment
- `LoyaltyRewards` — for loyal_buyer segment
- `WinBackOffer` — for at_risk_churner segment

---

### 5. DYNAMIC PRICING ENGINE — `ai/pricing-engine.ts`

**Rules-based + ML discount logic:**

```typescript
type PricingDecision = {
  basePrice: number
  finalPrice: number
  discountPercent: number | null
  discountReason: 'loyalty' | 'cart_recovery' | 'demand_low' | 'bundle' | null
  expiresAt: Date | null           // Time-boxed urgency discounts
  showOriginalPrice: boolean
}
```

**Triggers:**
- Cart abandonment > 45 min → 10% limited-time offer (once per user, per 30 days)
- Low inventory (< 5 units) → no discount, show scarcity instead
- High demand + low conversion → surface bundle discount
- Loyalty tier 2+ → automatic member pricing
- Demand forecasting dip → auto-markdown (admin-configurable threshold)

---

### 6. AI SEARCH — `ai/search-ranker.ts`

- **Typesense** handles typo-tolerance, faceting, instant results
- **Semantic layer:** Query is embedded → pgvector search → results re-ranked by intent
- **NLP parsing:** "red floral summer dress under $60" → parsed to `{ color: red, pattern: floral, season: summer, maxPrice: 60, category: dress }`
- **Personalized ranking:** Logged-in users get search results re-ranked by their purchase/view history
- **Zero-result fallback:** AI generates a suggestion prompt instead of an empty page

---

### 7. CHURN + LTV INSIGHTS — `ai/churn-predictor.ts`

Computed async nightly via BullMQ job:

```typescript
type UserInsight = {
  ltv: number                         // Predicted 12-month LTV
  purchaseProbability: number          // 0–1: likelihood to buy this session
  churnRisk: 'low' | 'medium' | 'high'
  upsellOpportunity: Product[]         // Top 3 upsell candidates
  recommendedEmailTemplate: string     // Which email variant to send
  nextBestAction: string               // For admin dashboard display
}
```

---

## 🛒 CORE FEATURE SET

### Customer Features
- **AI-personalized homepage** — adapts layout, hero, sections, products per segment
- **Semantic product search** — NLP query parsing + personalized re-ranking
- **Smart product detail page** — AI-generated descriptions, dynamic "complete the look"
- **Intelligent cart** — real-time upsell suggestions, bundle prompts, threshold nudge ("$12 away from free shipping")
- **Adaptive checkout** — one-page, Stripe Elements, saved addresses, Apple Pay / Google Pay
- **User dashboard** — order history, AI style profile, wishlist, loyalty tier, personalized recs
- **Post-purchase flow** — AI thank-you page with curated next purchase suggestions
- **Review + UGC system** — star ratings, verified buyer badges, AI-summarized review highlights

### Admin Features
- **Revenue dashboard** — GMV, AOV, conversion rate, refund rate — daily / weekly / monthly
- **AI performance panel** — recommendation CTR, uplift from AI vs control, segment breakdown
- **Product manager** — bulk upload, AI description generator, pricing rules, inventory alerts
- **Order management** — fulfillment status, refund flow, customer lookup
- **Discount engine** — rule builder for campaigns, user-targeted offers, bundle logic
- **A/B test manager** — via PostHog feature flags, results with statistical confidence
- **Email campaign builder** — trigger-based, AI-personalized content per segment

---

## 🎨 DESIGN SYSTEM

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0D1321` | Deep ink navy — primary text, nav |
| `--color-accent` | `#5B6AF0` | Puzzle indigo — CTAs, highlights |
| `--color-accent-warm` | `#F76D3C` | Warm orange — urgency, sale |
| `--color-success` | `#22C55E` | Confirmation, in-stock |
| `--color-surface` | `#FFFFFF` | Cards, modals |
| `--color-bg` | `#F7F8FC` | Page background |
| `--color-muted` | `#6B7280` | Secondary text |
| `--color-border` | `#E5E7EB` | Dividers, input borders |

### Typography

- **Display:** `Inter` (variable font) — headings, hero text
- **Body:** `Inter` — 16px / 1.7 line-height
- **Mono:** `JetBrains Mono` — prices, codes, data values
- Scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64px

### Motion Principles (Framer Motion)

```typescript
// Standard easing — feels intelligent, not bouncy
const ease = [0.16, 1, 0.3, 1]
const duration = 0.45

// Product card entrance — staggered on scroll
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration, ease }
  })
}

// AI section reveal — subtle, not dramatic
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}
```

**Rules:**
- No bounce, spring, or elastic on business-critical UI
- Reordering animations must use `layoutId` for smooth AI re-ranking
- Micro-interactions: 150ms max (hover states, button press)
- Page transitions: fade-through, 300ms
- Never animate content that requires user action (forms, checkout)

---

## 🗃️ DATABASE SCHEMA (PRISMA)

```prisma
model User {
  id              String          @id @default(cuid())
  email           String          @unique
  name            String?
  image           String?
  segment         UserSegment     @default(NEW_EXPLORER)
  loyaltyTier     LoyaltyTier     @default(BRONZE)
  ltv             Float           @default(0)
  churnRisk       ChurnRisk       @default(LOW)
  behaviors       UserBehavior[]
  orders          Order[]
  cart            Cart?
  wishlist        WishlistItem[]
  insights        UserInsight?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
}

model UserBehavior {
  id          String    @id @default(cuid())
  userId      String?
  sessionId   String
  eventType   String
  productId   String?
  payload     Json
  deviceType  String
  country     String?
  city        String?
  createdAt   DateTime  @default(now())
  user        User?     @relation(fields: [userId], references: [id])
}

model Product {
  id              String        @id @default(cuid())
  slug            String        @unique
  name            String
  description     String
  aiDescription   String?       // AI-generated SEO description
  price           Float
  comparePrice    Float?
  images          String[]
  embedding       Float[]       // pgvector embedding
  category        Category      @relation(fields: [categoryId], references: [id])
  categoryId      String
  tags            String[]
  inventory       Int           @default(0)
  trendScore      Float         @default(0)
  conversionRate  Float         @default(0)
  createdAt       DateTime      @default(now())
}

model Order {
  id              String        @id @default(cuid())
  userId          String
  status          OrderStatus   @default(PENDING)
  items           OrderItem[]
  total           Float
  stripeSessionId String?
  aiSourced       Boolean       @default(false)  // Was this driven by AI rec?
  aiProductIds    String[]      // Which products were AI-recommended
  createdAt       DateTime      @default(now())
  user            User          @relation(fields: [userId], references: [id])
}

model UserInsight {
  id                      String    @id @default(cuid())
  userId                  String    @unique
  ltv                     Float
  purchaseProbability     Float
  churnRisk               ChurnRisk
  upsellProductIds        String[]
  recommendedEmailTemplate String
  nextBestAction          String
  computedAt              DateTime  @default(now())
  user                    User      @relation(fields: [userId], references: [id])
}

enum UserSegment {
  NEW_EXPLORER
  WARM_BROWSER
  HIGH_INTENT
  CART_ABANDONER
  LOYAL_BUYER
  AT_RISK_CHURNER
  DEAL_SEEKER
  PREMIUM_SHOPPER
}

enum LoyaltyTier { BRONZE SILVER GOLD PLATINUM }
enum ChurnRisk   { LOW MEDIUM HIGH }
enum OrderStatus { PENDING PAID FULFILLED CANCELLED REFUNDED }
```

---

## 🔐 AUTH & SECURITY

- **NextAuth v5** — Google OAuth + Email Magic Link + optional Guest session
- Guest sessions: Redis-stored cart, merged on login
- **RBAC:** `CUSTOMER | ADMIN | SUPER_ADMIN` roles enforced at middleware level
- Rate limiting: Upstash Ratelimit on all `/api/` routes (100 req/min per IP)
- Input validation: Zod schemas on all API inputs
- CSRF: built-in NextAuth protection
- Stripe Radar: fraud detection on payment intents
- Environment secrets: Vercel encrypted env vars, never in source

---

## ⚡ PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 92 |
| LCP (Largest Contentful Paint) | < 2.0s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| TTFB (Time to First Byte) | < 400ms (Edge cache) |
| Homepage AI load time | < 200ms (Redis-cached recs) |
| Search results | < 150ms (Typesense) |
| AI recommendation freshness | 5-min cache TTL in Redis |

**Techniques:**
- ISR (Incremental Static Regeneration) for product and category pages
- Edge-cached personalization tokens (Vercel Edge Config)
- AI recommendation results cached in Redis per `userId + sessionSegment`
- Image optimization: Cloudflare R2 + Next.js `<Image>` with AVIF/WebP
- Route prefetching on hover for instant navigation feel
- Lazy-load below-fold AI sections with Suspense + streaming

---

## 📊 AI ANALYTICS DASHBOARD (ADMIN)

**Panels required:**

1. **Revenue Attribution** — % of GMV driven by AI recommendations vs organic
2. **Recommendation Performance** — CTR per rec type (collab / content / trend / intent)
3. **Segment Distribution** — Live pie of users per segment, trending changes
4. **Conversion Funnel** — View → Cart → Checkout → Purchase with AI vs non-AI split
5. **Churn Risk Monitor** — Users flagged HIGH risk today, recommended actions
6. **Search Analytics** — Top queries, zero-result queries, AI parse success rate
7. **Pricing Engine Log** — Discounts triggered, revenue impact, redemption rate
8. **A/B Test Results** — Active experiments, significance levels, winners

---

## 📧 AI EMAIL ENGINE — `ai/email-personalizer.ts`

**Trigger-based automated flows:**

| Trigger | Email | AI Personalization |
|---------|-------|-------------------|
| Cart abandoned (45min) | Recovery email | Top cart item + AI "you might also need" |
| Purchase complete | Thank you + next recs | Post-purchase AI recs based on order |
| 7 days since purchase | Re-engagement | New arrivals in favorite category |
| Churn risk: HIGH | Win-back | Personalized offer + best-match product |
| Loyalty tier upgrade | Celebration | Curated picks for new tier |
| Wishlist item low stock | Urgency alert | Real-time inventory trigger |
| Weekly digest (opt-in) | Personalized weekly | AI-selected top 5 for the user |

**Content generation:** GPT-4o generates subject line + email body variation per segment, respecting brand tone guidelines passed via system prompt.

---

## 🧪 TESTING STRATEGY

```
tests/
├── unit/           # Vitest — AI scoring functions, utility logic
├── integration/    # Vitest — API routes, DB operations
├── e2e/            # Playwright — full user journeys
│   ├── checkout.spec.ts
│   ├── personalization.spec.ts
│   └── search.spec.ts
└── ai/             # Deterministic mock tests for AI engine
```

**Coverage targets:**
- AI engine functions: 90% unit test coverage
- Critical paths (checkout, cart, auth): 100% E2E coverage
- API routes: integration tested with test DB

---

## 🚫 HARD CONSTRAINTS

1. **No generic template UI** — every screen must feel custom-built for RetailPuzzle
2. **No fake AI** — if OpenAI key is missing, run deterministic scoring fallback (not placeholder text)
3. **No N+1 queries** — all Prisma queries use proper `include` / `select` with pagination
4. **No client-side secrets** — all API keys server-side only
5. **No blocking AI calls on critical path** — recommendations are async, never block page render
6. **No single-file components over 300 lines** — enforce modularity
7. **No hardcoded content** — all copy comes from a content config file (easy i18n-ready)
8. **No skipped error boundaries** — every async UI block wrapped in Suspense + error fallback
9. **Must remain Vercel-deployable** — no Docker-only dependencies
10. **Must pass Lighthouse ≥ 92** — performance is a feature

---

## 📈 POST-MVP ROADMAP

### Phase 2 — Real-Time Intelligence
- WebSocket-powered live personalization (segment updates mid-session)
- Server-Sent Events for live inventory + price changes
- Real-time "X people viewing this" social proof

### Phase 3 — Advanced AI
- Visual search: upload photo → find similar products (Replicate CLIP API)
- AI personal shopper chatbot (GPT-4o function calling + product tool)
- Predictive demand forecasting for inventory automation
- Dynamic pricing AI with reinforcement learning (revenue vs conversion tradeoff)

### Phase 4 — Scale & Growth
- Multi-region deployment (geo-aware personalization)
- Marketplace mode: multi-vendor support
- B2B purchasing mode: bulk orders, net terms, account management
- Affiliate + influencer program with tracked links

---

## 🧠 FINAL ENGINEERING PHILOSOPHY

> RetailPuzzle is not a store with AI bolted on. It is an AI system that happens to sell products.

Every architectural decision must pass this test:

- **Does this help the AI learn faster?** → Yes → build it
- **Does this reduce friction to purchase?** → Yes → build it
- **Does this feel like Amazon-quality UX inside a startup budget?** → Yes → build it
- **Is this complexity justified by conversion impact?** → No → simplify it

**The puzzle is complete when every shopper feels like the store was built for them.**