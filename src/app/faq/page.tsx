import {
  HelpCircle,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "What is FitLife?",
    answer:
      "FitLife is a comprehensive fitness platform that provides workout plans, health calculators (BMI, BMR, calories), exercise libraries, and progress tracking to help you achieve your fitness goals.",
    category: "General",
  },
  {
    question: "Is FitLife free to use?",
    answer:
      "Yes! FitLife offers many free features including workout guides, health calculators, and exercise libraries. Premium features with personalized plans may be available for subscribed users.",
    category: "General",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on the Sign Up button on the login page, enter your details including name, email, and password. Verify your email address and your account will be ready to use.",
    category: "Account",
  },
  {
    question: "Can I reset my password?",
    answer:
      "Yes. Click on 'Forgot Password' on the login page, enter your registered email address, and follow the instructions sent to your inbox to reset your password.",
    category: "Account",
  },
  {
    question: "Are the workout plans suitable for beginners?",
    answer:
      "Absolutely! Our exercise library includes beginner, intermediate, and advanced difficulty levels. Each exercise comes with detailed instructions so you can start safely regardless of your fitness level.",
    category: "Workouts",
  },
  {
    question: "How do the health calculators work?",
    answer:
      "Our calculators use scientifically validated formulas. The BMI calculator uses weight and height, the BMR calculator factors in age, gender, weight, and height, and the calorie calculator considers your activity level and goals.",
    category: "Workouts",
  },
  {
    question: "What nutrition information does FitLife provide?",
    answer:
      "FitLife offers daily water intake recommendations based on your weight and activity level, protein intake calculations, and general nutrition guidance to complement your workout routine.",
    category: "Nutrition",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "We take data security seriously. All personal information is encrypted and stored securely. We never sell or share your data with third parties. Please review our Privacy Policy for complete details.",
    category: "Technical",
  },
  {
    question: "Does FitLife work on mobile devices?",
    answer:
      "Yes! FitLife is fully responsive and works smoothly on desktops, tablets, and smartphones. You can access all features from any device with a web browser.",
    category: "Technical",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us through the Contact page form, email us at support@fitlife.com, or call our support team at +92 300 1234567 during working hours (Mon–Fri, 9 AM – 6 PM).",
    category: "General",
  },
];

export const metadata = {
  title: "FAQ — FitLife",
  description:
    "Find answers to frequently asked questions about FitLife's fitness platform, workouts, calculators, and account management.",
};

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find answers to the most common questions about our fitness platform,
            workouts, calculators, and more.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} showCategory />
        </div>
      </section>
    </>
  );
}
