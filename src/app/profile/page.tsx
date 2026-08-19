"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  User,
  History,
  TrendingUp,
  Settings,
  Camera,
  Save,
  Mail,
  Bell,
  Shield,
  Dumbbell,
  Calendar,
  Weight,
  Repeat,
} from "lucide-react";

type ProfileTab = "profile" | "history" | "progress" | "settings";

const NAV_ITEMS: { label: string; value: ProfileTab; icon: React.ElementType }[] = [
  { label: "Profile", value: "profile", icon: User },
  { label: "Calculator History", value: "history", icon: History },
  { label: "Progress", value: "progress", icon: TrendingUp },
  { label: "Settings", value: "settings", icon: Settings },
];

const SAMPLE_HISTORY = [
  {
    id: 1,
    type: "BMI",
    inputs: "80kg, 178cm",
    result: "25.2",
    date: "2026-08-18",
  },
  {
    id: 2,
    type: "BMR",
    inputs: "80kg, 178cm, 28y, Male",
    result: "1,790 kcal",
    date: "2026-08-17",
  },
  {
    id: 3,
    type: "TDEE",
    inputs: "BMR 1,790, Activity: 1.55",
    result: "2,775 kcal",
    date: "2026-08-16",
  },
  {
    id: 4,
    type: "Calories",
    inputs: "TDEE 2,775, Goal: Lose",
    result: "2,275 kcal",
    date: "2026-08-15",
  },
  {
    id: 5,
    type: "Protein",
    inputs: "80kg, Activity: 1.55",
    result: "96g",
    date: "2026-08-14",
  },
  {
    id: 6,
    type: "Water",
    inputs: "80kg, Activity: 1.725",
    result: "3.0 L",
    date: "2026-08-13",
  },
  {
    id: 7,
    type: "BMI",
    inputs: "82kg, 178cm",
    result: "25.9",
    date: "2026-08-01",
  },
];

const SAMPLE_PROGRESS = [
  {
    id: 1,
    date: "2026-08-18",
    exercise: "Bench Press",
    sets: 4,
    reps: 10,
    weight: "80 kg",
  },
  {
    id: 2,
    date: "2026-08-17",
    exercise: "Squat",
    sets: 4,
    reps: 8,
    weight: "100 kg",
  },
  {
    id: 3,
    date: "2026-08-16",
    exercise: "Deadlift",
    sets: 3,
    reps: 5,
    weight: "120 kg",
  },
  {
    id: 4,
    date: "2026-08-15",
    exercise: "Overhead Press",
    sets: 4,
    reps: 10,
    weight: "50 kg",
  },
  {
    id: 5,
    date: "2026-08-14",
    exercise: "Barbell Row",
    sets: 4,
    reps: 10,
    weight: "70 kg",
  },
  {
    id: 6,
    date: "2026-08-13",
    exercise: "Leg Press",
    sets: 3,
    reps: 12,
    weight: "140 kg",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("profile");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    progress: true,
    reminders: false,
  });

  return (
    <div className="min-h-screen bg-surface">
      {/* Header with gradient image */}
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
          alt="Profile header"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile tabs */}
        <div className="mb-6 -mt-6 relative z-10 lg:hidden fade-in">
          <div className="flex gap-1 overflow-x-auto rounded-lg bg-surface-dark p-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.value}
                  onClick={() => setActiveTab(item.value)}
                  className={cn(
                    "flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
                    activeTab === item.value
                      ? "bg-white text-primary shadow-sm"
                      : "text-secondary hover:text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-8 pb-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 -mt-8 relative z-10">
            <div className="sticky top-24 rounded-xl bg-white border border-surface-dark shadow-md p-4 fade-in">
              <div className="mb-4 flex flex-col items-center pb-4 border-b border-surface-dark">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-secondary text-sm">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.value}
                      onClick={() => setActiveTab(item.value)}
                      className={cn(
                        "flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer",
                        activeTab === item.value
                          ? "bg-primary/10 text-primary"
                          : "text-secondary hover:bg-surface-dark"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 -mt-6 relative z-10">
            {activeTab === "profile" && (
              <div className="space-y-6 fade-in">
                <div className="rounded-xl bg-white border border-surface-dark shadow-md p-6">
                  <h2 className="text-xl font-semibold text-secondary mb-6">
                    My Account
                  </h2>
                  <div className="flex items-center gap-6 mb-8 pb-6 border-b border-surface-dark">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-secondary">
                        {name}
                      </p>
                      <p className="text-sm text-gray-500">{email}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Member since August 2026
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-secondary mb-4">
                    Edit Profile
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border border-surface-dark bg-white pl-10 pr-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Avatar URL
                      </label>
                      <div className="relative">
                        <Camera className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="url"
                          value={avatarUrl}
                          onChange={(e) => setAvatarUrl(e.target.value)}
                          placeholder="https://example.com/avatar.jpg"
                          className="w-full rounded-lg border border-surface-dark bg-white pl-10 pr-4 py-2.5 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors duration-200 cursor-pointer">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="rounded-xl bg-white border border-surface-dark shadow-md p-6 fade-in">
                <h2 className="text-xl font-semibold text-secondary mb-6">
                  Calculator History
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-surface-dark">
                        <th className="pb-3 text-left font-medium text-gray-500">
                          Type
                        </th>
                        <th className="pb-3 text-left font-medium text-gray-500">
                          Inputs
                        </th>
                        <th className="pb-3 text-left font-medium text-gray-500">
                          Result
                        </th>
                        <th className="pb-3 text-left font-medium text-gray-500">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAMPLE_HISTORY.map((entry) => (
                        <tr
                          key={entry.id}
                          className="border-b border-surface-dark last:border-0 hover:bg-surface-dark/50 transition-colors"
                        >
                          <td className="py-3.5">
                            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              {entry.type}
                            </span>
                          </td>
                          <td className="py-3.5 text-secondary">
                            {entry.inputs}
                          </td>
                          <td className="py-3.5 font-medium text-secondary">
                            {entry.result}
                          </td>
                          <td className="py-3.5 text-gray-500">{entry.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "progress" && (
              <div className="space-y-6 fade-in">
                <h2 className="text-xl font-semibold text-secondary">
                  Exercise Progress
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 stagger-children">
                  {SAMPLE_PROGRESS.map((log) => (
                    <div
                      key={log.id}
                      className="card-hover rounded-xl bg-white border border-surface-dark shadow-md p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-secondary">
                            {log.exercise}
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{log.date}</span>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 text-secondary">
                            <Repeat className="h-4 w-4 text-primary/70" />
                            <span>
                              {log.sets} x {log.reps}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-secondary">
                            <Weight className="h-4 w-4 text-primary/70" />
                            <span>{log.weight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6 fade-in">
                <div className="rounded-xl bg-white border border-surface-dark shadow-md p-6">
                  <h2 className="text-xl font-semibold text-secondary mb-6">
                    Settings
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-semibold text-secondary mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Account Settings
                      </h3>
                      <div className="space-y-4 pl-7">
                        <div className="flex items-center justify-between rounded-lg bg-surface-dark p-4">
                          <div>
                            <p className="text-sm font-medium text-secondary">
                              Change Password
                            </p>
                            <p className="text-xs text-gray-500">
                              Update your account password
                            </p>
                          </div>
                          <button className="rounded-lg border border-surface-dark px-4 py-2 text-sm font-medium text-secondary hover:bg-white transition-colors duration-200 cursor-pointer">
                            Update
                          </button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-red-50 border border-red-200 p-4">
                          <div>
                            <p className="text-sm font-medium text-red-700">
                              Delete Account
                            </p>
                            <p className="text-xs text-red-500">
                              Permanently delete your account and data
                            </p>
                          </div>
                          <button className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors duration-200 cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-surface-dark pt-6">
                      <h3 className="text-base font-semibold text-secondary mb-4 flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        Notification Preferences
                      </h3>
                      <div className="space-y-3 pl-7">
                        {(
                          [
                            { key: "email" as const, label: "Email notifications", desc: "Receive updates and tips via email" },
                            { key: "progress" as const, label: "Progress reminders", desc: "Weekly progress tracking reminders" },
                            { key: "reminders" as const, label: "Workout reminders", desc: "Daily workout schedule alerts" },
                          ] as const
                        ).map((item) => (
                          <label
                            key={item.key}
                            className="flex items-center justify-between rounded-lg bg-surface-dark p-4 cursor-pointer"
                          >
                            <div>
                              <p className="text-sm font-medium text-secondary">
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={notifications[item.key]}
                                onChange={(e) =>
                                  setNotifications((prev) => ({
                                    ...prev,
                                    [item.key]: e.target.checked,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-primary transition-colors duration-200" />
                              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
