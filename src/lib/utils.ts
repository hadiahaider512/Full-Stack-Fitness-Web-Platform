import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  gender: "male" | "female"
): number {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

export function calculateTDEE(bmr: number, activityLevel: number): number {
  return bmr * activityLevel;
}

export function calculateCalories(tdee: number, goal: "lose" | "maintain" | "gain"): number {
  if (goal === "lose") return tdee - 500;
  if (goal === "gain") return tdee + 500;
  return tdee;
}

export function calculateProtein(weight: number, activityLevel: number): number {
  if (activityLevel <= 1.2) return weight * 0.8;
  if (activityLevel <= 1.55) return weight * 1.2;
  if (activityLevel <= 1.725) return weight * 1.6;
  return weight * 2.0;
}

export function calculateWaterIntake(weight: number, activityLevel: number): number {
  const base = weight * 0.033;
  if (activityLevel > 1.725) return base * 1.3;
  if (activityLevel > 1.55) return base * 1.15;
  return base;
}
