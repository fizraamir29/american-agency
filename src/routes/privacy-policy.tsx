import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — American Books Agency" },
      { name: "description", content: "Privacy policy and data protection principles for American Books Agency clients and visitors." }
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Privacy Policy</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Your privacy and data protection are paramount. Learn how American Books Agency collects, protects, and handles your information.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6 text-slate-700 leading-relaxed font-sans">
              <h2 className="text-2xl font-bold font-serif text-purple-900">1. Information Collection & Usage</h2>
              <p>
                American Books Agency collects information you voluntarily provide through our quote request forms, contact inquiries, and project questionnaires (including your name, email address, phone number, and project details). This information is used strictly to communicate with you regarding your manuscript and to provide requested publishing services.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">2. Manuscript Confidentiality & Intellectual Property</h2>
              <p>
                We treat all submitted manuscripts, outlines, book concepts, and personal notes as strictly confidential proprietary material. Your intellectual property will never be sold, rented, shared, or disclosed to unauthorized third parties.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">3. Data Security & Encryption</h2>
              <p>
                We maintain industry-standard physical, electronic, and procedural safeguards to protect your personal information. All web form submissions are encrypted using 256-bit SSL encryption protocols.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">4. Third-Party Services</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted service providers who assist in operating our website or conducting our business, provided those parties agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">5. Contact Us Regarding Your Data</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to update or delete your personal information, please contact us at <a href="mailto:info@americanbooksagency.com" className="text-purple-700 font-semibold underline">info@americanbooksagency.com</a> or call <a href="tel:+13467085688" className="text-purple-700 font-semibold underline">+1 (346) 708-5688</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTalkWidget />
      <BackToTop />
    </div>
  );
}
