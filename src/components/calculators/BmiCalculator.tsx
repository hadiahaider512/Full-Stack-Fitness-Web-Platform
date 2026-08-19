"use client";

import { useState, useMemo } from "react";
import { calculateBMI, getBMICategory } from "@/lib/utils";

export default function BmiCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const bmi = useMemo(() => calculateBMI(weight, height), [weight, height]);
  const category = useMemo(() => getBMICategory(bmi), [bmi]);

  const categoryColor = useMemo(() => {
    if (bmi < 18.5) return "text-blue-600 bg-blue-50 border-blue-200";
    if (bmi < 25) return "text-green-600 bg-green-50 border-green-200";
    if (bmi < 30) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-red-600 bg-red-50 border-red-200";
  }, [bmi]);

  const indicatorColor = useMemo(() => {
    if (bmi < 18.5) return "bg-blue-600";
    if (bmi < 25) return "bg-green-600";
    if (bmi < 30) return "bg-amber-500";
    return "bg-red-600";
  }, [bmi]);

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
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-surface-dark p-6 flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-gray-500 mb-2">Your BMI</p>
        <p className="text-6xl font-bold text-secondary mb-3">
          {bmi.toFixed(1)}
        </p>
        <div className={`inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${categoryColor}`}>
          {category}
        </div>
        <div className="w-full max-w-xs mt-6">
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${indicatorColor}`}
              style={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>15</span>
            <span>25</span>
            <span>35</span>
            <span>40+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
