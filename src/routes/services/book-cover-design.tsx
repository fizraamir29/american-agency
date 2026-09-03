import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Palette, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/book-cover-design")({
  head: () => ({
    meta: [
      { title: "Book Cover Design Services — American Books Agency" },
      { name: "description", content: "High-converting, bestseller-worthy book cover art designed by expert publishing designers." }
    ],
  }),
  component: BookCoverDesignPage,
});

function BookCoverDesignPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Cover Design</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Captivate readers instantly with bestseller-worthy cover artwork custom crafted for your genre.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Covers That Command Attention</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Your book cover is your single most important marketing asset. Our specialized book cover designers combine genre conventions, eye-catching color psychology, and striking typography to ensure your title stands out in search results and online storefronts.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Eye className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">High Conversion Art</h3>
                  <p className="text-slate-600 text-sm">Designed specifically to stop readers from scrolling and drive click-throughs.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Palette className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Full Print Wrap</h3>
                  <p className="text-slate-600 text-sm">Front cover, spine calculations, and back cover layout with barcode integration.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Sparkles className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">3D Mockups Included</h3>
                  <p className="text-slate-600 text-sm">3D digital promotional mockups for social media and website marketing campaigns.</p>
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
