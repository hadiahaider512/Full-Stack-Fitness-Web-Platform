"use client";

import { useState, useMemo } from "react";
import {
  calculateBMR,
  calculateTDEE,
  calculateCalories,
} from "@/lib/utils";

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: "1.2" },
  { label: "Lightly active (1–3 days/week)", value: "1.375" },
  { label: "Moderately active (3–5 days/week)", value: "1.55" },
  { label: "Active (6–7 days/week)", value: "1.725" },
  { label: "Very active (hard exercise daily)", value: "1.9" },
];

const goals = [
  { label: "Lose Weight", value: "lose" as const, color: "border-blue-600 bg-blue-50 text-blue-700" },
  { label: "Maintain", value: "maintain" as const, color: "border-green-600 bg-green-50 text-green-700" },
  { label: "Gain Weight", value: "gain" as const, color: "border-amber-600 bg-amber-50 text-amber-700" },
];

export default function CalorieCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityLevel, setActivityLevel] = useState("1.55");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain");

  const result = useMemo(() => {
    const bmr = calculateBMR(weight, height, age, gender);
    const tdee = calculateTDEE(bmr, Number(activityLevel));
    const calories = calculateCalories(tdee, goal);
    return { tdee, calories };
  }, [weight, height, age, gender, activityLevel, goal]);

  const goalInfo = useMemo(
    () => goals.find((g) => g.value === goal)!,
    [goal]
  );

  const goalDescription = useMemo(() => {
    if (goal === "lose") return "500 kcal deficit for gradual weight loss";
    if (goal === "gain") return "500 kcal surplus for gradual weight gain";
    return "Calories to maintain your current weight";
  }, [goal]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-md border border-surface-dark p-6">
        <h2 className="text-lg font-semibold text-secondary mb-6">
          Enter Your Details
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">
              Age (years)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              {(["male", "female"] as const).map((g) => (
                <label
                  key={g}
                  className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    gender === g
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-surface-dark text-secondary hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="calorie-gender"
                    value={g}
                    checked={gender === g}
                    onChange={() => setGender(g)}
                    className="sr-only"
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">
              Activity Level
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full appearance-none rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors duration-200"
            >
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Goal
            </label>
            <div className="flex gap-3">
              {goals.map((g) => (
                <label
                  key={g.value}
                  className={`flex-1 text-center cursor-pointer rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                    goal === g.value
                      ? g.color
                      : "border-surface-dark text-secondary hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={g.value}
                    checked={goal === g.value}
                    onChange={() => setGoal(g.value)}
                    className="sr-only"
                  />
                  {g.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-surface-dark p-6 flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-gray-500 mb-2">
          Recommended Daily Calories
        </p>
        <p className="text-6xl font-bold text-green-600 mb-1">
          {result.calories.toFixed(0)}
        </p>
        <p className="text-lg text-gray-500 mb-4">kcal / day</p>
        <div className={`inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${goalInfo.color}`}>
          {goalInfo.label}
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
          {goalDescription}
        </p>
        <div className="w-full max-w-xs mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">TDEE</span>
            <span className="font-medium text-secondary">
              {result.tdee.toFixed(0)} kcal
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">Adjustment</span>
            <span className="font-medium text-secondary">
              {goal === "lose" ? "-500" : goal === "gain" ? "+500" : "0"} kcal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
