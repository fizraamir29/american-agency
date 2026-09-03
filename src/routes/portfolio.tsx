import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteSection } from "../components/QuoteSection";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";
import { Star } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — American Books Agency" },
      { name: "description", content: "Explore published bestsellers and featured book designs crafted by American Books Agency." }
    ],
  }),
  component: PortfolioPage,
});

const items = [
  { title: "Published Fiction Bestseller", badge: "Bestseller", bg: "linear-gradient(160deg,#5b2fa0,#1b0c36)" },
  { title: "Non-Fiction & Biography", badge: "Top Seller", bg: "linear-gradient(160deg,#0d1b3e,#1a2b54)" },
  { title: "Self-Help & Business", badge: "Editor's Choice", bg: "linear-gradient(160deg,#e63946,#8b1520)" },
  { title: "Children's Illustrated Book", badge: "Award Winner", bg: "linear-gradient(160deg,#2563eb,#0d1b3e)" },
  { title: "Mystery & Thriller", badge: "Featured Title", bg: "linear-gradient(160deg,#1e293b,#0f172a)" },
  { title: "Memoir & Autobiography", badge: "Top Rated", bg: "linear-gradient(160deg,#7a4fbf,#4c228a)" },
  { title: "Sci-Fi & Fantasy Epic", badge: "Bestseller", bg: "linear-gradient(160deg,#b22234,#6b101e)" },
  { title: "Poetry & Creative Prose", badge: "Reader's Choice", bg: "linear-gradient(160deg,#0d1b3e,#2563eb)" },
];

function PortfolioPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Our Portfolio</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore recent published releases, bestseller book covers, and author success stories.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="portfolio-grid">
              {items.map((i) => (
                <div className="cover shadow-lg rounded-2xl overflow-hidden p-6 flex flex-col justify-end text-white relative min-h-[300px]" style={{ background: i.bg }} key={i.title}>
                  <span className="font-serif font-bold text-xl relative z-10">{i.title}</span>
                  <div className="rating text-amber-300 font-sans text-xs font-semibold mt-2 relative z-10 flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-300" /> {i.badge}
                  </div>
                </div>
              ))}
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
