"use client";

import { useState, useMemo } from "react";
import { calculateWaterIntake } from "@/lib/utils";

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: "1.2" },
  { label: "Lightly active (1–3 days/week)", value: "1.375" },
  { label: "Moderately active (3–5 days/week)", value: "1.55" },
  { label: "Active (6–7 days/week)", value: "1.725" },
  { label: "Very active (hard exercise daily)", value: "1.9" },
];

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState("1.55");

  const waterLiters = useMemo(
    () => calculateWaterIntake(weight, Number(activityLevel)),
    [weight, activityLevel]
  );

  const waterCups = useMemo(
    () => (waterLiters * 1000) / 250,
    [waterLiters]
  );

  const multiplier = Number(activityLevel);

  const description = useMemo(() => {
    if (multiplier <= 1.2)
      return "Standard hydration for a sedentary lifestyle";
    if (multiplier <= 1.55)
      return "Slightly increased for moderate activity";
    if (multiplier <= 1.725)
      return "Increased intake for active individuals";
    return "Extra hydration for very active & intense training";
  }, [multiplier]);

  const indicatorHeight = useMemo(
    () => Math.min((waterLiters / 5) * 100, 100),
    [waterLiters]
  );

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
          Recommended Daily Water Intake
        </p>
        <p className="text-6xl font-bold text-green-600 mb-1">
          {waterLiters.toFixed(1)}
        </p>
        <p className="text-lg text-gray-500 mb-4">liters / day</p>
        <div className="inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          ~{waterCups.toFixed(0)} glasses (250 ml each)
        </div>
        <div className="w-full max-w-xs mt-6">
          <div className="relative w-10 h-40 mx-auto rounded-full border-2 border-green-300 bg-green-50 overflow-hidden">
            <div
              className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-b-full transition-all duration-500"
              style={{ height: `${indicatorHeight}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2 max-w-[200px] mx-auto">
            <span>0 L</span>
            <span>2.5 L</span>
            <span>5 L</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
