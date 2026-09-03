import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteSection } from "../components/QuoteSection";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Author Testimonials — American Books Agency" },
      { name: "description", content: "Read real reviews and testimonials from authors who published their books with American Books Agency." }
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Gloria Restoy", order: "#2e390", rating: 4.6, text: "Thank you to American Books Agency for a great job! They were professional and knowledgeable and always answered my calls and emails. I appreciate their patience during the whole process of correcting errors made by another publisher." },
  { name: "Myron Bruce", order: "#78h4u2", rating: 5.0, text: "I have had the privilege to work with Delilah. I would like to share with you how pleased I am to have her as my partner and guide. She has exceeded my expectations in all areas. Her pleasant personality plus outstanding knowledge in the publication sector will bring me to a very successful future." },
  { name: "Kote Morton", order: "#78h4u2", rating: 4.7, text: "I'm so happy with the work from American Books Agency. They really helped improve my book, and now it looks amazing. I couldn't be happier with the results." },
  { name: "Luis Parsley", order: "#78h4u2", rating: 5.0, text: "I was completely lost with the whole publishing process, but American Books Agency made it easy. They help with everything — editing, formatting, and Amazon distribution." },
  { name: "Jami West", order: "#515f71", rating: 4.9, text: "They took the time to really understand my book and my goals. I'm so proud of how my novel turned out! I'm recommending them to all of my fellow writers!" },
  { name: "Amanda Vance", order: "Verified Author", rating: 5.0, text: "American Books Agency is the ultimate one-stop shop for publishing, writing and design services. Their team is incredibly talented and professional." },
];

function TestimonialsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Author Testimonials</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Why Authors Love American Books Agency — Read real experiences from authors across the United States.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="test-grid">
              {reviews.map((r) => (
                <div className="test bg-white p-8 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between" key={r.name}>
                  <div>
                    <div className="stars text-amber-400 mb-3 text-lg">★★★★★ <span className="text-slate-400 text-xs ml-1 font-sans">{r.rating}/5.0</span></div>
                    <p className="text-slate-700 text-base leading-relaxed mb-6 font-sans">"{r.text}"</p>
                  </div>
                  <div className="who flex items-center gap-3">
                    <div className="avatar w-11 h-11 rounded-full bg-purple-700 text-white font-bold grid place-items-center">{r.name.split(" ").map(n => n[0]).join("")}</div>
                    <div>
                      <strong className="block text-purple-900 font-bold">{r.name}</strong>
                      <small className="text-slate-500 text-xs">Verified Client • {r.order}</small>
                    </div>
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
