"use client";

import { useState, useMemo } from "react";
import { calculateBMR } from "@/lib/utils";

export default function BmrCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<"male" | "female">("male");

  const bmr = useMemo(
    () => calculateBMR(weight, height, age, gender),
    [weight, height, age, gender]
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
                    name="gender"
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
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-surface-dark p-6 flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-gray-500 mb-2">
          Your Basal Metabolic Rate
        </p>
        <p className="text-6xl font-bold text-secondary mb-1">
          {bmr.toFixed(0)}
        </p>
        <p className="text-lg text-gray-500 mb-4">kcal / day</p>
        <div className="inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          Calories your body burns at rest
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
          BMR is the number of calories your body needs to perform basic, life-sustaining functions while at complete rest.
        </p>
      </div>
    </div>
  );
}
