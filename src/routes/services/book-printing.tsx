import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Printer, Shield, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/book-printing")({
  head: () => ({
    meta: [
      { title: "Book Printing Services — American Books Agency" },
      { name: "description", content: "Hardcover, paperback, and print-on-demand book printing with luxury paper finishes and fast turnaround." }
    ],
  }),
  component: BookPrintingPage,
});

function BookPrintingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Printing Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">High-quality print-on-demand and bulk print runs for paperbacks, hardcovers, and dust jackets.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Premium Physical Book Printing</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Hold a beautifully printed copy of your book. We partner with leading print houses to offer matte and glossy laminate covers, premium cream/white interior paper stock, case laminate hardcovers, and foil stamping.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Printer className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Print-On-Demand</h3>
                  <p className="text-slate-600 text-sm">Zero inventory risk — books are printed and shipped automatically whenever a reader orders.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Shield className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Hardcover & Dust Jacket</h3>
                  <p className="text-slate-600 text-sm">Luxury hardcover editions with cloth binding, foil embossing, and printed jackets.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <CheckCircle className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Author Copies</h3>
                  <p className="text-slate-600 text-sm">Order discounted author copies directly to your doorstep for book signings and events.</p>
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
