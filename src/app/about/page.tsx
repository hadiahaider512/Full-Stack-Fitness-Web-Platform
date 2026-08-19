import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Apple,
  BarChart3,
  Headphones,
  MousePointerClick,
  Target,
  Heart,
  ArrowRight,
  Zap,
  Eye,
} from "lucide-react";
import Card from "@/components/ui/Card";

const offerings = [
  {
    icon: Dumbbell,
    title: "Workout Plans",
    description:
      "Personalized workout routines for beginners and advanced users tailored to your goals.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
  },
  {
    icon: Apple,
    title: "Nutrition Guide",
    description:
      "Healthy meal plans and diet suggestions to support your fitness goals.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Monitor your workouts, weight, BMI, and achievements with ease.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Stay motivated with helpful fitness tips and expert guidance.",
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=400&q=80",
  },
];

const reasons = [
  {
    icon: MousePointerClick,
    title: "Easy to Use",
    description:
      "A simple and user-friendly platform designed for everyone, no matter your fitness level.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description:
      "Get customized fitness recommendations based on your unique needs and progress.",
  },
  {
    icon: Heart,
    title: "Healthy Lifestyle",
    description:
      "Build long-term healthy habits with workouts, nutrition, and daily motivation.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden min-h-[420px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
          alt="Fitness hero"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-[1]" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <Zap className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white/90">
              About FitLife
            </span>
          </div>
          <h1 className="hero-text font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About FitLife
          </h1>
          <p className="hero-text mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Welcome to FitLife, your trusted fitness partner. We are committed
            to helping you achieve a healthier lifestyle through personalized
            workouts, nutrition guidance, and progress tracking.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold bg-white text-primary rounded-full hover:bg-surface transition-colors duration-200 shadow-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/exercise"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Explore Workouts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
          <Card className="p-10 md:p-14 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="mx-auto md:mx-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Our mission is to make fitness simple, accessible, and effective
                  for everyone. We provide personalized workout plans, nutrition
                  guidance, and progress tracking to help people build healthy habits
                  and achieve their fitness goals.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-80 h-56 md:h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Our mission"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
          <Card className="p-10 md:p-14 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="mx-auto md:mx-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Our vision is to create a smart fitness platform that inspires
                  people to live healthier lives through technology, motivation, and
                  personalized fitness solutions.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-80 h-56 md:h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80"
                  alt="Our vision"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              What We Offer
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Comprehensive tools and resources to support every step of your
              fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} hover className="p-8 text-center card-hover">
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Why Choose Us
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              We are dedicated to helping you become the best version of yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} hover className="p-8 text-center card-hover">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
