import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Paintbrush, Image, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/book-illustrations")({
  head: () => ({
    meta: [
      { title: "Custom Book Illustrations — American Books Agency" },
      { name: "description", content: "Custom artwork and illustrations for children's picture books, graphic novels, and fantasy books." }
    ],
  }),
  component: BookIllustrationsPage,
});

function BookIllustrationsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Book Illustration Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Vibrant, custom artwork for children's books, comic art, fantasy maps, and illustrated fiction.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Bringing Characters & Stories To Life</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Whether you need full-page watercolor paintings for a children's storybook or detailed line drawings for a fantasy novel, our professional illustrators collaborate closely with you from initial character sketches to final digital color passes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Paintbrush className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Children's Books</h3>
                  <p className="text-slate-600 text-sm">Whimsical, colorful character designs and full-spread storybook illustrations.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Image className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Comic & Graphic Art</h3>
                  <p className="text-slate-600 text-sm">Dynamic comic book panel layouts, inking, coloring, and graphic novel artwork.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Sparkles className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Custom Vector Art</h3>
                  <p className="text-slate-600 text-sm">Clean digital vector art, technical diagrams, fantasy maps, and spot illustrations.</p>
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
