"use client";

import { useState, useMemo } from "react";
import { calculateBMR, calculateTDEE } from "@/lib/utils";

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: "1.2" },
  { label: "Lightly active (1–3 days/week)", value: "1.375" },
  { label: "Moderately active (3–5 days/week)", value: "1.55" },
  { label: "Active (6–7 days/week)", value: "1.725" },
  { label: "Very active (hard exercise daily)", value: "1.9" },
];

export default function TdeeCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityLevel, setActivityLevel] = useState("1.55");

  const tdee = useMemo(() => {
    const bmr = calculateBMR(weight, height, age, gender);
    return calculateTDEE(bmr, Number(activityLevel));
  }, [weight, height, age, gender, activityLevel]);

  const multiplier = Number(activityLevel);

  const description = useMemo(() => {
    if (multiplier <= 1.2) return "Sedentary lifestyle with little to no exercise";
    if (multiplier <= 1.375) return "Light exercise 1–3 days per week";
    if (multiplier <= 1.55) return "Moderate exercise 3–5 days per week";
    if (multiplier <= 1.725) return "Hard exercise 6–7 days per week";
    return "Very intense exercise or physical job daily";
  }, [multiplier]);

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
                    name="tdee-gender"
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
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-surface-dark p-6 flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-gray-500 mb-2">
          Your Total Daily Energy Expenditure
        </p>
        <p className="text-6xl font-bold text-secondary mb-1">
          {tdee.toFixed(0)}
        </p>
        <p className="text-lg text-gray-500 mb-4">kcal / day</p>
        <div className="inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          {description}
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
          TDEE is the total calories you burn each day including all activities and exercise.
        </p>
      </div>
    </div>
  );
}
