"use client";

import { useState, useMemo } from "react";
import { calculateProtein } from "@/lib/utils";

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: "1.2" },
  { label: "Lightly active (1–3 days/week)", value: "1.375" },
  { label: "Moderately active (3–5 days/week)", value: "1.55" },
  { label: "Active (6–7 days/week)", value: "1.725" },
  { label: "Very active (hard exercise daily)", value: "1.9" },
];

export default function ProteinCalculator() {
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState("1.55");

  const protein = useMemo(
    () => calculateProtein(weight, Number(activityLevel)),
    [weight, activityLevel]
  );

  const multiplier = Number(activityLevel);

  const perKg = useMemo(() => {
    if (multiplier <= 1.2) return 0.8;
    if (multiplier <= 1.55) return 1.2;
    if (multiplier <= 1.725) return 1.6;
    return 2.0;
  }, [multiplier]);

  const description = useMemo(() => {
    if (multiplier <= 1.2) return "Basic protein needs for sedentary individuals";
    if (multiplier <= 1.55) return "Moderate protein for light to moderate exercise";
    if (multiplier <= 1.725) return "Higher protein for regular intense training";
    return "Maximum protein for elite athletes & hard gainers";
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
          Recommended Daily Protein
        </p>
        <p className="text-6xl font-bold text-green-600 mb-1">
          {protein.toFixed(0)}
        </p>
        <p className="text-lg text-gray-500 mb-4">grams / day</p>
        <div className="inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          {perKg} g per kg of body weight
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
