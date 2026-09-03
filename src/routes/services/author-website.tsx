import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Laptop, Globe, UserCheck } from "lucide-react";

export const Route = createFileRoute("/services/author-website")({
  head: () => ({
    meta: [
      { title: "Author Website Development — American Books Agency" },
      { name: "description", content: "Custom author websites designed to grow your audience, sell books directly, and capture reader email subscribers." }
    ],
  }),
  component: AuthorWebsitePage,
});

function AuthorWebsitePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Author Website Development</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Build an online author platform that captures email subscribers, showcases your books, and builds your brand.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Your Online Author Hub</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                An official author website gives you a professional digital home to feature your book series, blog, media coverage, and direct buy links. We build fast, mobile-friendly author websites optimized for search engine rankings and newsletter lead capture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Laptop className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Custom Responsive Design</h3>
                  <p className="text-slate-600 text-sm">Sleek, modern design tailored to your author brand that looks stunning on mobile and desktop.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <UserCheck className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Lead Capture & Email</h3>
                  <p className="text-slate-600 text-sm">Newsletter signup forms integrated with Mailchimp, ConvertKit, or active newsletter platforms.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Globe className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Direct Buy Links</h3>
                  <p className="text-slate-600 text-sm">Integrated Amazon, Barnes & Noble, and direct eCommerce buy links for your book series.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuoteSection />
      </main>
      <Footer />
      <FloatingTalkWidget />
      <BackToTop />
    </div>
  );
}
