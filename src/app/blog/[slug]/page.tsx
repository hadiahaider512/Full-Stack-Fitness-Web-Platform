import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  LinkIcon,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    gradient: string;
    content: string[];
  }
> = {
  "10-effective-exercises-for-beginners": {
    title: "10 Effective Exercises for Beginners",
    category: "Workout",
    author: "Sarah Khan",
    date: "August 10, 2026",
    readTime: "5 min read",
    gradient: "from-green-500 to-emerald-600",
    content: [
      "Starting a fitness journey can feel overwhelming, but the right exercises make all the difference. Whether you're looking to lose weight, build muscle, or simply improve your overall health, these ten beginner-friendly exercises will set you on the right path.",
      "1. Walking — Walking is one of the simplest and most effective forms of exercise. It improves cardiovascular health, strengthens bones, and helps manage weight. Aim for at least 30 minutes a day.",
      "2. Push-ups — Push-ups are a classic bodyweight exercise that targets the chest, shoulders, and triceps. Start with knee push-ups if a full push-up feels too difficult.",
      "3. Squats — Squats work the quadriceps, hamstrings, and glutes. They're fundamental for lower-body strength and can be done anywhere without equipment.",
      "4. Planks — The plank is excellent for building core stability. Hold the position for 20–30 seconds and gradually increase as you get stronger.",
      "5. Lunges — Lunges improve balance and coordination while strengthening the legs. Step forward with one leg and lower your hips until both knees are at 90 degrees.",
      "6. Glute Bridges — This exercise targets the glutes and lower back. Lie on your back with knees bent and lift your hips toward the ceiling.",
      "7. Band Pull-aparts — Using a resistance band, pull it apart at chest height to strengthen the upper back and improve posture.",
      "8. Dead Bugs — Lie on your back and extend opposite arm and leg simultaneously. This builds core coordination and stability.",
      "9. Step-ups — Using a sturdy chair or bench, step up with one foot and bring the other up to meet it. This mimics climbing stairs and builds leg strength.",
      "10. Stretching — End every session with gentle stretching. It improves flexibility, reduces muscle soreness, and prevents injury.",
      "Remember, consistency is key. Start slow, listen to your body, and progressively increase intensity. Within weeks you'll notice improvements in strength, energy, and mood.",
    ],
  },
  "healthy-eating-habits-for-fitness": {
    title: "Healthy Eating Habits for Fitness",
    category: "Nutrition",
    author: "Ahmed Ali",
    date: "August 7, 2026",
    readTime: "4 min read",
    gradient: "from-orange-400 to-rose-500",
    content: [
      "Nutrition is the cornerstone of any fitness plan. You can exercise every day, but without proper fuel, your body won't recover or perform at its best. Here are some healthy eating habits to support your fitness goals.",
      "Eat a balanced plate — Aim for a mix of lean protein, complex carbohydrates, and healthy fats in every meal. A good rule of thumb is half vegetables, a quarter protein, and a quarter whole grains.",
      "Don't skip breakfast — Breakfast kick-starts your metabolism and provides energy for morning workouts. Opt for oatmeal, eggs, or a smoothie packed with fruits and greens.",
      "Stay hydrated — Water is essential for nutrient absorption, joint health, and temperature regulation. Drink at least 8 glasses a day, more if you're active.",
      "Plan your meals — Meal prepping saves time and ensures you always have healthy options available. Dedicate an hour on weekends to cook and portion meals for the week.",
      "Limit processed foods — Packaged snacks and fast food are often high in sugar, sodium, and unhealthy fats. Replace them with whole foods like fruits, nuts, and lean meats.",
      "Listen to your body — Eat when you're hungry and stop when you're satisfied. Mindful eating prevents overeating and helps you develop a healthier relationship with food.",
      "Small changes lead to big results. Start by swapping one unhealthy habit for a better one each week, and you'll build a sustainable nutrition plan over time.",
    ],
  },
  "benefits-of-yoga-for-mind-and-body": {
    title: "Benefits of Yoga for Mind and Body",
    category: "Yoga",
    author: "Lisa Noor",
    date: "August 3, 2026",
    readTime: "6 min read",
    gradient: "from-violet-500 to-purple-600",
    content: [
      "Yoga is more than just stretching — it's a holistic practice that benefits both the body and the mind. Whether you're a complete beginner or a seasoned practitioner, the advantages of regular yoga are profound.",
      "Improved flexibility — One of the most well-known benefits of yoga is increased flexibility. Poses like Downward Dog, Forward Fold, and Pigeon gradually lengthen tight muscles.",
      "Better posture — Yoga strengthens the muscles that support your spine. Practicing regularly helps you stand taller and reduces back pain caused by sitting.",
      "Stress relief — Breathing exercises and meditation in yoga activate the parasympathetic nervous system, reducing cortisol levels and promoting calm.",
      "Enhanced strength — Many yoga poses require you to support your own body weight, which builds functional strength throughout the body.",
      "Improved balance — Balancing poses like Tree Pose and Warrior III improve proprioception and coordination, reducing the risk of falls and injuries.",
      "Better sleep — Studies show that practicing yoga before bed can improve sleep quality. The relaxation response triggered by yoga helps you fall asleep faster.",
      "Mental clarity — The meditative aspect of yoga sharpens focus and mindfulness. Many practitioners report feeling more centered and productive after a session.",
      "To get started, try a beginner class or follow a 15-minute home routine. Even a few minutes of daily practice can make a noticeable difference in how you feel.",
    ],
  },
};

const relatedPosts = [
  {
    slug: "10-effective-exercises-for-beginners",
    title: "10 Effective Exercises for Beginners",
    badge: "Workout",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    slug: "healthy-eating-habits-for-fitness",
    title: "Healthy Eating Habits for Fitness",
    badge: "Nutrition",
    gradient: "from-orange-400 to-rose-500",
  },
  {
    slug: "benefits-of-yoga-for-mind-and-body",
    title: "Benefits of Yoga for Mind and Body",
    badge: "Yoga",
    gradient: "from-violet-500 to-purple-600",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} — FitLife Blog` : "Blog Post — FitLife",
    description: post ? post.content[0] : "",
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-secondary mb-4">
            Post Not Found
          </h1>
          <p className="text-slate-500 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${post.gradient} py-16 md:py-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <article className="prose prose-slate max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-600 leading-relaxed mb-5 text-base"
              >
                {i === 0 ? (
                  <span className="text-lg font-medium text-secondary">
                    {paragraph}
                  </span>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="h-5 w-5 text-slate-500" />
              <span className="font-heading font-semibold text-secondary">
                Share this article
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-secondary hover:text-white transition-colors"
              >
                <LinkIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-secondary text-center mb-10">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
                >
                  <div
                    className={`h-40 bg-gradient-to-br ${rp.gradient} flex items-center justify-center`}
                  >
                    <Dumbbell className="h-10 w-10 text-white/40" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {rp.badge}
                    </span>
                    <h3 className="font-heading font-semibold text-secondary text-lg">
                      {rp.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
