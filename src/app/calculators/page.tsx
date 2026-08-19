"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Target,
  TrendingUp,
  Lightbulb,
  Compass,
  ArrowRight,
} from "lucide-react";
import Tabs from "@/components/ui/Tabs";
import BmiCalculator from "@/components/calculators/BmiCalculator";
import BmrCalculator from "@/components/calculators/BmrCalculator";
import TdeeCalculator from "@/components/calculators/TdeeCalculator";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";
import ProteinCalculator from "@/components/calculators/ProteinCalculator";
import WaterIntakeCalculator from "@/components/calculators/WaterIntakeCalculator";

const CALCULATOR_TABS = [
  { label: "BMI", value: "bmi" },
  { label: "BMR", value: "bmr" },
  { label: "TDEE", value: "tdee" },
  { label: "Calories", value: "calories" },
  { label: "Protein", value: "protein" },
  { label: "Water", value: "water" },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor changes in your body metrics over time to see how your fitness journey is progressing.",
  },
  {
    icon: Target,
    title: "Set Goals",
    description:
      "Establish realistic, data-driven fitness and nutrition goals based on your unique body measurements.",
  },
  {
    icon: Lightbulb,
    title: "Improve Decisions",
    description:
      "Make informed choices about diet, exercise, and recovery using accurate health calculations.",
  },
  {
    icon: Compass,
    title: "Personalized Planning",
    description:
      "Build customized workout and nutrition plans tailored to your specific body and activity level.",
  },
];

const CALCULATOR_MAP: Record<string, React.ComponentType> = {
  bmi: BmiCalculator,
  bmr: BmrCalculator,
  tdee: TdeeCalculator,
  calories: CalorieCalculator,
  protein: ProteinCalculator,
  water: WaterIntakeCalculator,
};

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState("bmi");
  const ActiveCalculator = CALCULATOR_MAP[activeTab];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
          alt="Fitness calculators hero"
          className="absolute inset-0 h-full w-full object-cover fade-in"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <Activity className="mx-auto mb-4 h-12 w-12 text-white/80" />
            <h1 className="hero-text text-3xl font-bold text-white sm:text-4xl">
              Fitness Calculators
            </h1>
            <p className="hero-text mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Take control of your health by tracking key metrics. Use our
              science-based calculators to understand your body and build a
              smarter fitness plan.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Tabs
              tabs={CALCULATOR_TABS}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
          <div key={activeTab}>
            <ActiveCalculator />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center fade-in">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              Why Use Fitness Calculators?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Understanding your body is the first step toward a healthier
              lifestyle. Our calculators give you the data you need to make
              real progress.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="card-hover rounded-xl bg-white border border-surface-dark p-6 text-center shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-secondary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-surface-dark shadow-xl fade-in">
            <div className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
              <div className="hidden sm:block shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Fitness journey"
                  className="img-zoom h-64 w-64 rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="mb-8 max-w-lg text-gray-500">
                  Use our fitness calculators to understand your body and make
                  smarter decisions about your health and training.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <Link
                    href="/calculators"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors duration-200"
                  >
                    Try a Calculator
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/exercise"
                    className="inline-flex items-center gap-2 rounded-lg border border-surface-dark bg-white px-6 py-3 text-sm font-medium text-secondary hover:bg-surface-dark transition-colors duration-200"
                  >
                    Browse Exercises
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
