import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Feather, CheckSquare, BookOpen, Megaphone, Palette, Paintbrush, Printer, Headphones, Video, Laptop, Newspaper, FileText } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All Publishing Services — American Books Agency" },
      { name: "description", content: "Explore our full spectrum of professional book publishing services including ghostwriting, editing, cover design, marketing, and distribution." }
    ],
  }),
  component: ServicesIndexPage,
});

const allServices = [
  { title: "Ghost Book Writing", desc: "Expert ghostwriters bring your story ideas to life in your exact voice.", icon: <Feather className="h-6 w-6" />, link: "/services/ghost-writing" },
  { title: "Editing & Proofreading", desc: "Developmental editing, copyediting, and meticulous proofreading to ensure error-free prose.", icon: <CheckSquare className="h-6 w-6" />, link: "/services/editing-proofreading" },
  { title: "Book Publishing", desc: "Seamless publishing across digital Kindle eBooks, paperbacks, and collector hardcover editions.", icon: <BookOpen className="h-6 w-6" />, link: "/services/book-publishing" },
  { title: "Book Marketing", desc: "Strategic advertising campaigns, press releases, social media promotion, and media outreach.", icon: <Megaphone className="h-6 w-6" />, link: "/services/book-marketing" },
  { title: "Book Cover Design", desc: "Striking, genre-specific cover art designed to grab reader attention instantly.", icon: <Palette className="h-6 w-6" />, link: "/services/book-cover-design" },
  { title: "Book Illustrations", desc: "Vibrant, custom artwork for children’s books, graphic novels, and illustrated titles.", icon: <Paintbrush className="h-6 w-6" />, link: "/services/book-illustrations" },
  { title: "Book Printing", desc: "High-quality print-on-demand and bulk offset printing with luxury finishes.", icon: <Printer className="h-6 w-6" />, link: "/services/book-printing" },
  { title: "Audiobook Production", desc: "Professional voiceover narration, audio mastering, and distribution to Audible and Apple.", icon: <Headphones className="h-6 w-6" />, link: "/services/audio-book-publishing" },
  { title: "Author Website", desc: "Custom-built author websites optimized for search engines, lead capture, and book sales.", icon: <Laptop className="h-6 w-6" />, link: "/services/author-website" },
  { title: "Book Video Trailer", desc: "Cinematic promotional trailers that highlight your book’s climax and plot to captivate buyers.", icon: <Video className="h-6 w-6" />, link: "/services/video-book-trailer" },
  { title: "Book Formatting", desc: "Meticulous interior layout design for print margins, fonts, and ePub digital compatibility.", icon: <FileText className="h-6 w-6" />, link: "/services/book-formatting" },
  { title: "Article & Blog Writing", desc: "Professional SEO-optimized articles and blog posts that elevate your author platform.", icon: <Newspaper className="h-6 w-6" />, link: "/services/article-blog-writing" },
];

function ServicesIndexPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Our Book Publishing Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Comprehensive, end-to-end publishing solutions tailored to your unique genre and publishing goals.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">What We Offer</span>
              <h2 className="text-3xl font-extrabold font-serif mt-2 mb-4">Why Choose American Books Agency?</h2>
              <p className="text-slate-600">American Books Agency has been in the publishing industry for over eight years, delivering top-tier publications across Amazon, Barnes & Noble, Apple Books, and independent bookstores.</p>
            </div>

            <div className="services-grid">
              {allServices.map((s) => (
                <div className="service" key={s.title}>
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-600 mb-4">{s.desc}</p>
                  <Link to={s.link} className="service-link mt-auto font-semibold text-purple-700 hover:text-red-500">
                    View Details →
                  </Link>
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
