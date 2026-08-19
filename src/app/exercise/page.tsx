import { Dumbbell, Flame, Heart, Timer, Target, Zap } from "lucide-react";

const CATEGORIES = [
  {
    title: "Strength Training",
    description: "Build muscle, increase strength, and improve overall fitness.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
  },
  {
    title: "Cardio Workouts",
    description: "Improve endurance, burn calories, and boost heart health.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80",
  },
  {
    title: "Yoga",
    description: "Increase flexibility, improve posture, and reduce stress.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  },
  {
    title: "HIIT Training",
    description: "Burn fat with short, high-intensity interval workouts.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&q=80",
  },
];

const POPULAR_EXERCISES = [
  {
    name: "Push Ups",
    target: "Chest, Shoulders, Arms",
    difficulty: "Beginner",
    icon: Timer,
    image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=400&q=80",
  },
  {
    name: "Squats",
    target: "Legs, Glutes",
    difficulty: "Beginner",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
  },
  {
    name: "Plank",
    target: "Core Muscles",
    difficulty: "Intermediate",
    icon: Target,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80",
  },
  {
    name: "Running",
    target: "Full Body / Cardio",
    difficulty: "Beginner",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80",
  },
];

export default function Exercise() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness hero"
          className="absolute inset-0 h-full w-full object-cover fade-in"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="hero-text text-4xl font-bold text-white sm:text-5xl">
              Explore Our Exercises
            </h1>
            <p className="hero-text mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Discover different exercises designed to improve strength,
              flexibility, and overall fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="py-16" id="categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center fade-in">
            <h2 className="text-3xl font-bold text-secondary">
              Exercise Categories
            </h2>
            <p className="mt-3 text-gray-500">
              Choose the exercise category that best matches your fitness goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="card-hover group overflow-hidden rounded-2xl bg-white border border-surface-dark shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="img-zoom h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-white" />
                      <h3 className="font-semibold text-white">{cat.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <p className="mb-4 text-sm text-gray-500">{cat.description}</p>
                    <button className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors duration-200">
                      View Exercises
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Exercises */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center fade-in">
            <h2 className="text-3xl font-bold text-secondary">
              Popular Exercises
            </h2>
            <p className="mt-3 text-gray-500">
              Explore some of the most popular exercises for every fitness
              level.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {POPULAR_EXERCISES.map((ex) => {
              const Icon = ex.icon;
              return (
                <div
                  key={ex.name}
                  className="card-hover group overflow-hidden rounded-2xl bg-white border border-surface-dark shadow-md"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ex.image}
                      alt={ex.name}
                      className="img-zoom h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-white" />
                      <h3 className="font-semibold text-white">{ex.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4 space-y-1.5 text-sm">
                      <p className="text-gray-500">
                        <span className="font-medium text-secondary">Target: </span>
                        {ex.target}
                      </p>
                      <p className="text-gray-500">
                        <span className="font-medium text-secondary">Difficulty: </span>
                        {ex.difficulty}
                      </p>
                    </div>
                    <button className="w-full rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors duration-200">
                      View Exercise
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
