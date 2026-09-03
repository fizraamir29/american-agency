import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { CheckSquare, CheckCircle, Shield, FileCheck } from "lucide-react";

export const Route = createFileRoute("/services/editing-proofreading")({
  head: () => ({
    meta: [
      { title: "Editing & Proofreading Services — American Books Agency" },
      { name: "description", content: "Flawless manuscript editing, copyediting, proofreading, and line editing by publishing professionals." }
    ],
  }),
  component: EditingProofreadingPage,
});

function EditingProofreadingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Editing & Proofreading</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Transform your raw draft into a flawless, publication-ready masterpiece with thorough editing and line-by-line proofreading.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Meticulous Manuscript Editing</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Even the most captivating story can be diminished by grammar errors, awkward phrasing, or plot inconsistencies. American Books Agency provides comprehensive manuscript editing services tailored to every stage of your book.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <FileCheck className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Developmental Editing</h3>
                  <p className="text-slate-600 text-sm">Pacing, structure, plot consistency, and character arc evaluation for maximum storytelling impact.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <CheckSquare className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Line & Copyediting</h3>
                  <p className="text-slate-600 text-sm">Line-by-line refinement of syntax, tone, readability, vocabulary, and paragraph flow.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Shield className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Proofreading Pass</h3>
                  <p className="text-slate-600 text-sm">Final detailed check for typos, punctuation, spelling, formatting glitches, and consistency.</p>
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
