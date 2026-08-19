import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — FitLife",
  description: "FitLife privacy policy. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us. This may include your name, email address, phone number, fitness goals, weight, height, and age. We also collect usage data such as pages visited, features used, and interactions with the platform to improve our services.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services; to personalize your experience and deliver tailored fitness recommendations; to send you relevant updates, tips, and notifications; to respond to your inquiries and provide customer support; and to monitor and analyze usage patterns to enhance platform performance.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share aggregated, non-identifying information for analytics purposes. We may also share information when required by law, to protect our rights, or in connection with a merger, acquisition, or sale of assets.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encryption, secure socket layer (SSL) technology, and regular security audits to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings. Disabling cookies may affect certain platform functionalities.",
  },
  {
    title: "Children's Privacy",
    content:
      "FitLife is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a revised 'Last Updated' date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy or our data practices, please contact us at support@fitlife.com or reach out through our Contact page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">
            Last updated: August 19, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 leading-relaxed mb-10">
            At FitLife, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our fitness platform and services.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
