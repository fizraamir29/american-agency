import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { FileText, Layout, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/book-formatting")({
  head: () => ({
    meta: [
      { title: "Book Formatting Services — American Books Agency" },
      { name: "description", content: "Professional eBook and print interior formatting for Amazon KDP, IngramSpark, and digital storefronts." }
    ],
  }),
  component: BookFormattingPage,
});

function BookFormattingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Formatting Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Beautiful, pixel-perfect interior page layouts for paperback, hardcover, Kindle, and ePub formats.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Custom Print & Digital Interior Layouts</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Proper interior formatting ensures your book looks elegant and readable across all devices and physical print editions. We design custom typography, margins, chapter headings, drop caps, and table of contents compatible with Amazon KDP, IngramSpark, and Apple Books.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 flex gap-4">
                  <Layout className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-purple-900 mb-1">Print Paperback & Hardcover</h3>
                    <p className="text-slate-600 text-sm">Trim size alignment, running headers/footers, page numbering, gutter margins, and bleed settings.</p>
                  </div>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 flex gap-4">
                  <FileText className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-purple-900 mb-1">eBook ePub & KDP Reflowable</h3>
                    <p className="text-slate-600 text-sm">Clickable digital table of contents, dynamic font sizing, embedded links, and device responsiveness.</p>
                  </div>
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
