"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  Loader2,
  Plus,
  CheckCircle2,
  AlertCircle,
  Calculator,
} from "lucide-react";
import {
  getUserProfileData,
  updateProfileInfo,
  changeUserPassword,
  logUserProgress,
} from "@/actions/profile";

type ProfileTab = "profile" | "history" | "progress" | "settings";

const NAV_ITEMS: { label: string; value: ProfileTab; icon: React.ElementType }[] = [
  { label: "Profile", value: "profile", icon: User },
  { label: "Calculator History", value: "history", icon: History },
  { label: "Progress", value: "progress", icon: TrendingUp },
  { label: "Settings", value: "settings", icon: Settings },
];

export default function ProfilePage() {
  const { data: session, status, update: updateSession } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<ProfileTab>("profile");
  const [loadingInitial, setLoadingInitial] = useState(true);

  // Profile Edit State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // History and Progress data from DB
  const [calculatorHistory, setCalculatorHistory] = useState<
    Array<{ id: string; type: string; inputs: string; result: string; date: string }>
  >([]);
  const [progressList, setProgressList] = useState<
    Array<{ id: string; exercise: string; sets: number | null; reps: number | null; weight: string; date: string }>
  >([]);

  // Log Progress Form State
  const [showLogModal, setShowLogModal] = useState(false);
  const [newExercise, setNewExercise] = useState("");
  const [newSets, setNewSets] = useState(3);
  const [newReps, setNewReps] = useState(10);
  const [newWeight, setNewWeight] = useState("");
  const [logLoading, setLogLoading] = useState(false);

  // Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Notification Preferences
  const [notifications, setNotifications] = useState({
    email: true,
    progress: true,
    reminders: false,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/profile");
      return;
    }

    if (status === "authenticated") {
      loadProfileData();
    }
  }, [status]);

  async function loadProfileData() {
    setLoadingInitial(true);
    const data = await getUserProfileData();

    if (data && !data.error && data.user) {
      setName(data.user.name || "");
      setEmail(data.user.email || "");
      setAvatarUrl(data.user.avatar || "");
      if (data.user.createdAt) {
        const dateObj = new Date(data.user.createdAt);
        setMemberSince(
          dateObj.toLocaleDateString("en-US", { month: "long", year: "numeric" })
        );
      }
      setCalculatorHistory(data.calculatorResults || []);
      setProgressList(data.userProgress || []);
    } else if (session?.user) {
      setName(session.user.name || "");
      setEmail(session.user.email || "");
    }
    setLoadingInitial(false);
  }

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSaveLoading(true);
    setProfileMessage(null);

    const res = await updateProfileInfo({
      name,
      email,
      avatar: avatarUrl,
    });

    if (res.error) {
      setProfileMessage({ type: "error", text: res.error });
    } else {
      setProfileMessage({ type: "success", text: "Profile updated successfully!" });
      // Refresh session
      await updateSession({ name, email, image: avatarUrl });
    }
    setSaveLoading(false);
  }

  async function handleLogWorkout(e: React.FormEvent) {
    e.preventDefault();
    if (!newExercise.trim()) return;

    setLogLoading(true);
    const res = await logUserProgress({
      exerciseName: newExercise,
      sets: newSets,
      reps: newReps,
      weight: newWeight ? Number(newWeight) : undefined,
    });

    if (res.progress) {
      setProgressList([res.progress, ...progressList]);
      setShowLogModal(false);
      setNewExercise("");
      setNewWeight("");
    }
    setLogLoading(false);
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage(null);

    const res = await changeUserPassword(currentPassword, newPassword);

    if (res.error) {
      setPasswordMessage({ type: "error", text: res.error });
    } else {
      setPasswordMessage({ type: "success", text: "Password changed successfully!" });
      setCurrentPassword("");
      setNewPassword("");
    }
    setPasswordLoading(false);
  }

  if (status === "loading" || loadingInitial) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-3 text-sm text-gray-500 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

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
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 overflow-hidden text-primary font-bold text-xl border border-primary/20">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
                  ) : name ? (
                    name.charAt(0).toUpperCase()
                  ) : (
                    <User className="h-8 w-8 text-primary" />
                  )}
                </div>
                <p className="font-semibold text-secondary text-sm text-center">{name || "User"}</p>
                <p className="text-xs text-gray-500 text-center break-all">{email}</p>
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
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden text-primary font-bold text-2xl border-2 border-primary/20">
                      {avatarUrl ? (
                        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
                      ) : name ? (
                        name.charAt(0).toUpperCase()
                      ) : (
                        <User className="h-10 w-10 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-secondary">
                        {name || "Your Name"}
                      </p>
                      <p className="text-sm text-gray-500">{email}</p>
                      {memberSince && (
                        <p className="text-xs text-gray-400 mt-1">
                          Member since {memberSince}
                        </p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-secondary mb-4">
                    Edit Profile
                  </h3>

                  {profileMessage && (
                    <div
                      className={cn(
                        "mb-5 rounded-lg px-4 py-3 text-sm flex items-center gap-2",
                        profileMessage.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : "bg-red-50 border border-red-200 text-red-700"
                      )}
                    >
                      {profileMessage.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : (
                        <AlertCircle className="h-4 w-4 shrink-0" />
                      )}
                      <span>{profileMessage.text}</span>
                    </div>
                  )}

                  <form onSubmit={handleSaveProfile} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
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
                          required
                          className="w-full rounded-lg border border-surface-dark bg-white pl-10 pr-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Avatar Image URL
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

                    <button
                      type="submit"
                      disabled={saveLoading}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {saveLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="rounded-xl bg-white border border-surface-dark shadow-md p-6 fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-secondary">
                    Calculator History
                  </h2>
                  <Link
                    href="/calculators"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <Calculator className="h-3.5 w-3.5" />
                    Open Calculators
                  </Link>
                </div>

                {calculatorHistory.length === 0 ? (
                  <div className="text-center py-12 px-4 border border-dashed border-gray-200 rounded-xl">
                    <Calculator className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                    <h3 className="text-base font-semibold text-secondary mb-1">No Calculator History Yet</h3>
                    <p className="text-sm text-gray-500 mb-4 max-w-sm mx-auto">
                      Use our fitness calculators (BMI, BMR, TDEE, Calories, Protein, Water) to track your body metrics.
                    </p>
                    <Link
                      href="/calculators"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                    >
                      Calculate Now
                    </Link>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-surface-dark">
                          <th className="pb-3 text-left font-medium text-gray-500">Type</th>
                          <th className="pb-3 text-left font-medium text-gray-500">Inputs</th>
                          <th className="pb-3 text-left font-medium text-gray-500">Result</th>
                          <th className="pb-3 text-left font-medium text-gray-500">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calculatorHistory.map((entry) => (
                          <tr
                            key={entry.id}
                            className="border-b border-surface-dark last:border-0 hover:bg-surface-dark/50 transition-colors"
                          >
                            <td className="py-3.5">
                              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                {entry.type}
                              </span>
                            </td>
                            <td className="py-3.5 text-secondary">{entry.inputs}</td>
                            <td className="py-3.5 font-medium text-secondary">{entry.result}</td>
                            <td className="py-3.5 text-gray-500">{entry.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === "progress" && (
              <div className="space-y-6 fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-secondary">
                    Exercise Progress
                  </h2>
                  <button
                    onClick={() => setShowLogModal(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    Log Workout
                  </button>
                </div>

                {showLogModal && (
                  <div className="rounded-xl bg-white border border-primary/20 shadow-lg p-6 mb-6">
                    <h3 className="text-base font-semibold text-secondary mb-4">
                      Record a New Workout
                    </h3>
                    <form onSubmit={handleLogWorkout} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Exercise Name *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Bench Press, Squat, Pushups"
                            value={newExercise}
                            onChange={(e) => setNewExercise(e.target.value)}
                            required
                            className="w-full rounded-lg border border-surface-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Weight (kg, optional)
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            placeholder="e.g. 60"
                            value={newWeight}
                            onChange={(e) => setNewWeight(e.target.value)}
                            className="w-full rounded-lg border border-surface-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Sets
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={newSets}
                            onChange={(e) => setNewSets(Number(e.target.value))}
                            required
                            className="w-full rounded-lg border border-surface-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Reps per set
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={newReps}
                            onChange={(e) => setNewReps(Number(e.target.value))}
                            required
                            className="w-full rounded-lg border border-surface-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowLogModal(false)}
                          className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={logLoading}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {logLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                          Save Workout
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {progressList.length === 0 ? (
                  <div className="text-center py-12 px-4 border border-dashed border-gray-200 rounded-xl bg-white">
                    <Dumbbell className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                    <h3 className="text-base font-semibold text-secondary mb-1">No Workout Logs Yet</h3>
                    <p className="text-sm text-gray-500 mb-4 max-w-sm mx-auto">
                      Log your sets, reps, and weights to see your progress over time.
                    </p>
                    <button
                      onClick={() => setShowLogModal(true)}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Plus className="h-4 w-4" />
                      Log Your First Workout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 stagger-children">
                    {progressList.map((log) => (
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
                )}
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
                        Account Security
                      </h3>

                      {passwordMessage && (
                        <div
                          className={cn(
                            "mb-4 rounded-lg px-4 py-3 text-sm flex items-center gap-2",
                            passwordMessage.type === "success"
                              ? "bg-green-50 border border-green-200 text-green-700"
                              : "bg-red-50 border border-red-200 text-red-700"
                          )}
                        >
                          {passwordMessage.type === "success" ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0" />
                          ) : (
                            <AlertCircle className="h-4 w-4 shrink-0" />
                          )}
                          <span>{passwordMessage.text}</span>
                        </div>
                      )}

                      <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium text-secondary mb-1.5">
                            Current Password
                          </label>
                          <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-secondary mb-1.5">
                            New Password (min. 6 characters)
                          </label>
                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength={6}
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={passwordLoading}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          {passwordLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Updating Password...
                            </>
                          ) : (
                            "Update Password"
                          )}
                        </button>
                      </form>
                    </div>

                    <div className="border-t border-surface-dark pt-6">
                      <h3 className="text-base font-semibold text-secondary mb-4 flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        Notification Preferences
                      </h3>
                      <div className="space-y-3">
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
