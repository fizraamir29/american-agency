import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — American Books Agency" },
      { name: "description", content: "Terms of use and service agreements for American Books Agency clients and visitors." }
    ],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Terms of Use</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Please read these terms of use carefully before using the services of American Books Agency.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6 text-slate-700 leading-relaxed font-sans">
              <h2 className="text-2xl font-bold font-serif text-purple-900">1. Agreement to Terms</h2>
              <p>
                By accessing or using the American Books Agency website and services, you agree to be bound by these Terms of Use. If you do not agree to all terms, you may not access or use our services.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">2. Author Ownership & Rights</h2>
              <p>
                American Books Agency is an independent self-publishing assistance brand. Authors retain 100% full ownership, copyright, and publishing rights to all manuscripts, cover designs, and printed editions produced through our collaboration.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">3. Services & Revision Policies</h2>
              <p>
                Project scope, deliverables, turnaround times, and revision cycles are agreed upon prior to project commencement. Revisions will be performed according to the specific package specifications outlined in your service agreement.
              </p>

              <h2 className="text-2xl font-bold font-serif text-purple-900">4. Contact & Support</h2>
              <p>
                For questions regarding terms or project agreements, please contact us at <a href="mailto:info@americanbooksagency.com" className="text-purple-700 font-semibold underline">info@americanbooksagency.com</a> or call <a href="tel:+13467085688" className="text-purple-700 font-semibold underline">+1 (346) 708-5688</a>.
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
