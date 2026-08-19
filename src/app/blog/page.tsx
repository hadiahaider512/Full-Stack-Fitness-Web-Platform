import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Apple,
  Flower2,
  Heart,
  ArrowRight,
  Clock,
  User,
} from "lucide-react";

const categories = [
  {
    title: "Workout",
    icon: Dumbbell,
    description:
      "Learn about effective exercises, training plans, and workout techniques.",
  },
  {
    title: "Nutrition",
    icon: Apple,
    description: "Discover healthy eating habits, diet tips, and nutrition guides.",
  },
  {
    title: "Yoga",
    icon: Flower2,
    description:
      "Improve flexibility, balance, and mental wellness through yoga.",
  },
  {
    title: "Lifestyle",
    icon: Heart,
    description: "Get wellness tips for a healthier and more balanced lifestyle.",
  },
];

const posts = [
  {
    slug: "10-effective-exercises-for-beginners",
    title: "10 Effective Exercises for Beginners",
    excerpt:
      "Start your fitness journey with these simple and effective exercises suitable for all fitness levels.",
    badge: "Workout",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    author: "Sarah Khan",
    date: "Aug 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "healthy-eating-habits-for-fitness",
    title: "Healthy Eating Habits for Fitness",
    excerpt:
      "Learn how balanced nutrition helps you achieve your fitness goals and maintain energy throughout the day.",
    badge: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    author: "Ahmed Ali",
    date: "Aug 7, 2026",
    readTime: "4 min read",
  },
  {
    slug: "benefits-of-yoga-for-mind-and-body",
    title: "Benefits of Yoga for Mind and Body",
    excerpt:
      "Discover how yoga improves flexibility, reduces stress, and supports overall wellness.",
    badge: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    author: "Lisa Noor",
    date: "Aug 3, 2026",
    readTime: "6 min read",
  },
];

const steps = [
  {
    num: 1,
    title: "Set Your Fitness Goals",
    text: "Decide what you want to achieve, such as weight loss, muscle gain, strength, or better health.",
  },
  {
    num: 2,
    title: "Choose Suitable Exercises",
    text: "Select exercises that match your fitness level and focus on different muscle groups.",
  },
  {
    num: 3,
    title: "Create a Weekly Schedule",
    text: "Plan your workout days, rest days, and recovery time to stay consistent.",
  },
  {
    num: 4,
    title: "Track Your Progress",
    text: "Monitor your improvements and adjust your routine according to your fitness goals.",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary text-white py-16 md:py-24 min-h-[380px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1920&q=80"
          alt="Blog hero"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl fade-in">
            <h1 className="hero-text font-heading text-4xl md:text-5xl font-bold mb-4">
              Fitness Blog
            </h1>
            <p className="hero-text text-lg text-white/80 mb-8 leading-relaxed">
              Discover expert fitness tips, workout guides, healthy recipes, and
              wellness advice to help you achieve your fitness goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#blogs"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-surface transition-colors"
              >
                Explore Blogs
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Browse Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-3">
              Explore Categories
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Find useful tips, guides, and information for every part of your
              health journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-secondary text-lg mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20 bg-surface-dark" id="blogs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-3">
              Latest Blogs
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Read our latest fitness articles, expert advice, and helpful tips to
              improve your health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.badge}
                  </span>
                  <h3 className="font-heading font-semibold text-secondary text-lg mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Build a Fitness Routine */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-3">
              How to Build a Suitable Fitness Routine
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Follow these simple steps to create a workout routine that matches
              your goals and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl h-72 lg:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                alt="Build a fitness routine"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            <div className="space-y-8 stagger-children">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 fade-in">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-secondary mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
