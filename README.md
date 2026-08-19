# FitLife — Full-Stack Fitness Web Platform

A full-stack fitness web application built with Next.js 16 (App Router), Prisma ORM, Neon PostgreSQL, and NextAuth.js. Features 15+ pages, health calculators, exercise library, blog system, and user authentication.

**Created by Abdul Moeid Rao & Team | All rights are reserved**

---

## Features

### Pages (15+)
- **Home** — Hero section, animated counters, featured exercises, calculator preview, CTA
- **About** — Mission, vision, offerings with images, "Why Choose Us" section
- **Exercise Library** — Categories (Strength, Cardio, Yoga, HIIT), popular exercises with images
- **Calculators** — Tabbed interface with 6 health calculators (BMI, BMR, TDEE, Calorie, Protein, Water Intake)
- **Blog** — Fitness articles with categories, detailed article pages, fitness routine guide
- **Contact** — Contact form, FAQ accordion, social links
- **FAQ** — 10 frequently asked questions across 5 categories
- **Privacy Policy** — Static privacy policy page
- **Terms of Service** — Static terms page
- **Login / Register** — Authentication forms with full-page background images
- **Forgot / Reset Password** — Password recovery flow
- **Profile Dashboard** — User profile, workout history, progress tracking, settings

### Authentication
- NextAuth.js v5 (beta) with Credentials provider
- JWT strategy with role-based access (USER / ADMIN)
- Prisma Adapter for session management
- Protected routes via middleware

### Calculators
| Calculator | Description |
|------------|-------------|
| BMI | Body Mass Index based on height and weight |
| BMR | Basal Metabolic Rate using Mifflin-St Jeor equation |
| TDEE | Total Daily Energy Expenditure |
| Calorie | Daily calorie needs based on activity level and goal |
| Protein | Recommended daily protein intake |
| Water Intake | Daily hydration requirement |

### Database (PostgreSQL via Neon)
- **Users** — Accounts, sessions, roles
- **Exercises** — Name, description, muscle group, equipment, difficulty, instructions, images
- **Articles** — Blog posts with slugs, content, author relations
- **User Progress** — Workout tracking (sets, reps, weight, duration)
- **Calculator Results** — Saved calculator inputs and outputs per user
- **Contact Messages** — Form submissions stored in database

### Animations
CSS-only animations including fade-in, slide-up, slide-in, stagger-children, scale-in, float, pulse-glow, image-zoom on hover, card-hover lift, gradient-text, and glass effects.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3.1 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS v4 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod validation |
| Database | PostgreSQL (Neon) |
| ORM | Prisma 7.9.1 |
| Auth | NextAuth.js v5 (beta.32) + bcryptjs |
| Email | Resend |
| Utilities | clsx, tailwind-merge |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** or **pnpm**
- A **Neon** account (free tier works) or any PostgreSQL database
- A **Resend** account (for email features, optional)

### 1. Clone the Repository

```bash
git clone https://github.com/hadiahaider512/Full-Stack-Fitness-Web-Platform.git
cd Full-Stack-Fitness-Web-Platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure:

```env
# Database — Get this from your Neon dashboard (Connection Details → Pooled connection)
DATABASE_URL="postgresql://username:password@ep-xxxxx.us-east-2.aws.neon.tech/fitness_db?sslmode=require"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-here"

# Resend (optional — for contact form email)
RESEND_API_KEY="re_your_resend_api_key"
```

**How to generate `NEXTAUTH_SECRET`:**

```bash
npx secret
```

Or use any random string of 32+ characters.

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Push Database Schema

This creates all tables in your database:

```bash
npx prisma db push
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
fitness-nextjs/
├── prisma/
│   └── schema.prisma          # Database schema (8 models, 4 enums)
├── public/
│   └── favicon.svg            # Custom SVG favicon (dumbbell + heartbeat)
├── src/
│   ├── actions/
│   │   └── auth.ts            # Server actions: register, login, password reset
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, navbar, footer)
│   │   ├── globals.css        # Tailwind theme + animations
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx       # Blog listing
│   │   │   └── [slug]/page.tsx # Blog article detail
│   │   ├── calculators/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── exercise/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   ├── reset-password/page.tsx
│   │   ├── profile/page.tsx
│   │   └── api/
│   │       └── auth/
│   │           └── [...nextauth]/route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── calculators/
│   │   │   ├── BmiCalculator.tsx
│   │   │   ├── BmrCalculator.tsx
│   │   │   ├── TdeeCalculator.tsx
│   │   │   ├── CalorieCalculator.tsx
│   │   │   ├── ProteinCalculator.tsx
│   │   │   └── WaterIntakeCalculator.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Badge.tsx
│   │       ├── Tabs.tsx
│   │       ├── Pagination.tsx
│   │       ├── Modal.tsx
│   │       ├── Select.tsx
│   │       ├── Textarea.tsx
│   │       └── Skeleton.tsx
│   ├── lib/
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── prisma.ts          # Prisma client singleton
│   │   └── utils.ts           # Utility functions + calculator formulas
│   └── middleware.ts          # Route protection
├── .env.example               # Environment variable template
├── next.config.ts             # Next.js config (image domains)
├── postcss.config.mjs         # PostCSS config (Tailwind v4)
└── package.json
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma generate` | Generate Prisma client |
| `npx prisma db push` | Push schema to database |
| `npx prisma studio` | Open Prisma Studio (database browser) |

---

## Key Configuration Notes

### Next.js Image Optimization

External images from `images.unsplash.com` are configured in `next.config.ts`. If you add images from other domains, add them to the `remotePatterns` array:

```ts
// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "your-new-domain.com" },
  ],
},
```

### Prisma 7.x Driver Adapter

This project uses Prisma 7.x which requires a driver adapter. The Prisma client in `src/lib/prisma.ts` initializes with `PrismaPg` adapter for Neon/PostgreSQL connections.

### Tailwind CSS v4

The project uses Tailwind CSS v4 with the `@tailwindcss/postcss` plugin. The theme colors and fonts are defined in `globals.css` using the `@theme inline` directive. Custom CSS animations are also defined there.

---

## Database Schema Overview

```
User ──┬── Account (OAuth)
       ├── Session
       ├── UserProgress ── Exercise
       ├── CalculatorResult
       └── Article

ContactMessage (standalone)
```

- **User** — Supports credentials auth (email + hashed password) and role-based access
- **Exercise** — 50+ exercises with name, description, muscle group, equipment, difficulty, instructions
- **Article** — Blog posts linked to author, with slug-based routing
- **UserProgress** — Tracks workouts (sets, reps, weight, duration, notes)
- **CalculatorResult** — Stores calculator inputs/outputs per user as JSON

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Vercel auto-detects Next.js and deploys

### Manual Deployment

```bash
npm run build
npm start
```

---

## License

This project is private. All rights reserved by Abdul Moeid Rao & Team.
