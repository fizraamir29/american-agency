import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { BookOpen, Globe, Shield, Star } from "lucide-react";

export const Route = createFileRoute("/services/book-publishing")({
  head: () => ({
    meta: [
      { title: "Complete Book Publishing Services — American Books Agency" },
      { name: "description", content: "End-to-end self-publishing packages for Amazon Kindle, Barnes & Noble, IngramSpark, and global stores." }
    ],
  }),
  component: BookPublishingPage,
});

function BookPublishingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Publishing Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Publish your book globally with complete control, 100% royalty ownership, and expert guidance at every step.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container space-y-10">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Seamless Global Book Publishing</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Publishing your book doesn't have to be overwhelming. American Books Agency takes care of technical requirements, ISBN registration, copyright filings, barcode generation, metadata optimization, and storefront distribution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Globe className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Global Distribution</h3>
                  <p className="text-slate-600 text-sm">Distribution to Amazon KDP, Barnes & Noble, IngramSpark, Apple Books, Kobo, and Google Play.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Shield className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">100% Royalties & Rights</h3>
                  <p className="text-slate-600 text-sm">You retain full rights to your intellectual property and 100% of all sales royalties.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Star className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Bestseller Positioning</h3>
                  <p className="text-slate-600 text-sm">Targeted keyword research, category selection, and pricing strategies to maximize visibility.</p>
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
