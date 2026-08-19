import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@fitlife.com",
    sub: "We reply within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+92 300 1234567",
    sub: "Mon – Fri | 9:00 AM – 6:00 PM",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Faisalabad, Pakistan",
    sub: "Available Worldwide Online",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Monday – Friday",
    sub: "9:00 AM – 6:00 PM",
  },
];

const faqItems = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the Sign Up button, enter your details, verify your email, and your account will be ready to use.",
  },
  {
    question: "Are the workout plans free?",
    answer:
      "Yes! We offer many free workout plans. Premium members get access to personalized programs and advanced features.",
  },
  {
    question: "Can beginners use this website?",
    answer:
      "Absolutely! We provide beginner, intermediate, and advanced workout plans suitable for every fitness level.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us through the contact form, email us at support@fitlife.com, or call our support team during working hours.",
  },
  {
    question: "Can I access the website on my mobile phone?",
    answer:
      "Yes. Our website is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
];

const FacebookIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const TwitterIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const LinkedinIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const YoutubeIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const socials = [
  { icon: FacebookIcon, label: "Facebook", color: "hover:bg-blue-600" },
  { icon: InstagramIcon, label: "Instagram", color: "hover:bg-pink-500" },
  { icon: TwitterIcon, label: "Twitter", color: "hover:bg-sky-500" },
  { icon: LinkedinIcon, label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: YoutubeIcon, label: "YouTube", color: "hover:bg-red-600" },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary text-white py-16 md:py-24 min-h-[380px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact hero"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="hero-text text-lg text-white/80 leading-relaxed">
              We&apos;d love to hear from you! Whether you have a question,
              feedback, or need support, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-secondary mb-1">
                    {info.title}
                  </h3>
                  <p className="text-slate-700 font-medium text-sm mb-1">
                    {info.detail}
                  </p>
                  <p className="text-slate-400 text-xs">{info.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 mb-8">
                Find answers to the most common questions.
              </p>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-secondary mb-3 fade-in">
            Follow Us
          </h2>
          <p className="text-slate-500 mb-6 fade-in">
            Stay connected for fitness tips, healthy recipes, and the latest
            updates.
          </p>
          <div className="flex items-center justify-center gap-3 stagger-children">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white transition-colors ${s.color}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-white text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
          alt="Start your journey"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold mb-3 fade-in">
            Start Your Fitness Journey Today
          </h2>
          <p className="hero-text text-white/80 mb-8 max-w-xl mx-auto fade-in">
            Join our community and take the first step toward a healthier,
            stronger, and happier lifestyle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 fade-in">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-surface transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/exercise"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Workouts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
