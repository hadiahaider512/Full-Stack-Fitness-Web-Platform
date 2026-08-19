import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service — FitLife",
  description: "FitLife terms of service. Read the terms and conditions governing your use of our platform.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using FitLife, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our platform. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.",
  },
  {
    title: "User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information during registration and to update it as necessary. FitLife reserves the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "User Content",
    content:
      "Any content you submit to FitLife, including profile information and feedback, remains yours. By submitting content, you grant FitLife a non-exclusive, worldwide license to use, display, and distribute your content in connection with operating and improving the platform.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, design, graphics, logos, and software on FitLife are the intellectual property of FitLife and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "FitLife provides fitness information and tools for educational purposes only. We are not a substitute for professional medical advice. Use our calculators and workout guides at your own risk. FitLife shall not be held liable for any injuries, damages, or losses arising from the use of our platform.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service are governed by and construed in accordance with the laws of Pakistan. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Faisalabad, Pakistan.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms of Service, please contact us at support@fitlife.com or visit our Contact page for more ways to reach us.",
  },
];

export default function TermsOfService() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
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
            Welcome to FitLife. These Terms of Service outline the rules and
            regulations for using our fitness platform. By using FitLife, you
            accept these terms in full.
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
