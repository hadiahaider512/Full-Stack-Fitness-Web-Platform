"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dumbbell,
  Calculator,
  TrendingUp,
  Scale,
  Flame,
  Droplets,
  ArrowRight,
  Users,
  Activity,
  Target,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const stats = [
  { value: 50, suffix: "+", label: "Exercises", icon: Dumbbell },
  { value: 6, suffix: "", label: "Calculators", icon: Calculator },
  { value: 10, suffix: "K+", label: "Users", icon: Users },
];

const features = [
  {
    icon: Dumbbell,
    title: "Exercise Library",
    description:
      "Explore 50+ exercises for different muscle groups with proper form guidance and video tutorials.",
    href: "/exercise",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    icon: Calculator,
    title: "Health Calculators",
    description:
      "Calculate your BMI, BMR, calories, protein needs, and daily water intake instantly.",
    href: "/calculators",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your fitness journey, track milestones, and stay motivated every single day.",
    href: "/login",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
  },
];

const calculators = [
  {
    icon: Scale,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index instantly.",
    href: "/calculators",
  },
  {
    icon: Flame,
    title: "BMR Calculator",
    description: "Know your daily calorie requirements.",
    href: "/calculators",
  },
  {
    icon: Droplets,
    title: "Water Intake",
    description: "Find your recommended daily water intake.",
    href: "/calculators",
  },
];

const exercises = [
  {
    name: "Push-Up",
    muscle: "Chest",
    difficulty: "Beginner" as const,
    badgeVariant: "success" as const,
    image:
      "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&q=80",
  },
  {
    name: "Squats",
    muscle: "Legs",
    difficulty: "Beginner" as const,
    badgeVariant: "success" as const,
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
  },
  {
    name: "Plank",
    muscle: "Core",
    difficulty: "Intermediate" as const,
    badgeVariant: "warning" as const,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
  },
];

function AnimatedCounter({
  target,
  suffix,
  label,
  icon: Icon,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center group",
        inView && "animate-counter"
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <p className="text-4xl md:text-5xl font-heading font-bold text-primary">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-slate-500 font-medium">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness gym with equipment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hero-overlay absolute inset-0 z-[1]" />

        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl float" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Activity className="h-4 w-4 text-primary-light" />
              <span className="text-sm text-white/90 font-medium">
                Your Fitness Journey Starts Here
              </span>
            </div>
            <h1 className="hero-text font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Body,
              <br />
              Transform Your{" "}
              <span className="gradient-text">Lifestyle</span>
            </h1>
            <p className="hero-text mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Track your fitness journey, calculate your health metrics, and
              explore exercises with ease. Your healthier self starts here.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/register"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold",
                  "bg-primary text-white rounded-full",
                  "hover:bg-primary-dark transition-all duration-300",
                  "shadow-lg shadow-primary/25 pulse-glow"
                )}
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/exercise"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold",
                  "glass text-white rounded-full",
                  "hover:bg-white/20 transition-all duration-300"
                )}
              >
                Browse Exercises
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Counters */}
      <section className="py-16 bg-white border-b border-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Everything You Need to{" "}
              <span className="gradient-text">Get Fit</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Everything you need to build a stronger, healthier you — all in
              one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href}>
                  <Card hover className="overflow-hidden h-full card-hover">
                    <div className="img-zoom h-48 relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Health <span className="gradient-text">Calculators</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Quick and accurate tools to understand your body better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.title} href={calc.href}>
                  <Card hover className="p-8 text-center card-hover group">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
                      {calc.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {calc.description}
                    </p>
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold",
                        "bg-primary text-white rounded-full",
                        "group-hover:bg-primary-dark transition-colors duration-200"
                      )}
                    >
                      Calculate Now
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exercise Library Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Exercise <span className="gradient-text">Library</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Start with the fundamentals. Master proper form before leveling up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {exercises.map((exercise) => (
              <Link key={exercise.name} href="/exercise">
                <Card hover className="overflow-hidden card-hover group">
                  <div className="img-zoom h-52 relative">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant={exercise.badgeVariant}>
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-secondary">
                          {exercise.name}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          Muscle:{" "}
                          <span className="font-medium text-slate-600">
                            {exercise.muscle}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold",
                          "border-2 border-primary text-primary rounded-full",
                          "group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        )}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-up">
            <Target className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Start Your Fitness Journey
              <br />
              <span className="text-white/90">Today</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of users who have transformed their lives. Track
              workouts, calculate health metrics, and reach your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold",
                  "bg-white text-primary rounded-full",
                  "hover:bg-surface transition-all duration-300",
                  "shadow-xl shadow-black/10"
                )}
              >
                <Zap className="h-5 w-5" />
                Get Started Free
              </Link>
              <Link
                href="/exercise"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold",
                  "border-2 border-white/40 text-white rounded-full",
                  "hover:bg-white/10 transition-all duration-300"
                )}
              >
                Explore Exercises
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
