import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Megaphone, Target, Share2, Award } from "lucide-react";

export const Route = createFileRoute("/services/book-marketing")({
  head: () => ({
    meta: [
      { title: "Book Marketing & PR Services — American Books Agency" },
      { name: "description", content: "Targeted bestseller book promotion, Amazon ads, social media marketing, and press release distribution." }
    ],
  }),
  component: BookMarketingPage,
});

function BookMarketingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Marketing Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Strategic promotion campaigns designed to connect your book with thousands of active, target readers.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Reach Bestseller Status</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Writing a great book is only half the battle — getting it in front of enthusiastic readers is what drives sales. Our book marketing specialists craft tailored campaigns including Amazon PPC ads, social media campaigns, press release distribution, and email blast promotions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Target className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Amazon & Social Ads</h3>
                  <p className="text-slate-600 text-sm">Data-driven Amazon Sponsored Ads and targeted Facebook/Instagram campaigns.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Share2 className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">PR & Media Outreach</h3>
                  <p className="text-slate-600 text-sm">Press release drafting and syndication across major digital news outlets and literary blogs.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Award className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Launch Campaign</h3>
                  <p className="text-slate-600 text-sm">Organized launch week push to rank your book in high-visibility Amazon subcategories.</p>
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
