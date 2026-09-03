import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteSection } from "../components/QuoteSection";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";
import { ShieldCheck, Handshake, Heart, Star, Megaphone, Phone } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — American Books Agency" },
      { name: "description", content: "Learn about American Books Agency — USA's trusted book publishing partner helping authors bring their stories to life." }
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">About American Books Agency</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Your premier independent publishing partner committed to transforming manuscript ideas into world-class bestsellers.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container space-y-10">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-purple-900">ABOUT AMERICAN BOOKS AGENCY PUBLISHING PARTNERS</h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Are you ready to share your story with the world? Look no further than American Books Agency for all your book publishing needs. Our team of experts will guide you through the entire publishing process, from editing and proofreading to cover design and distribution. We offer a wide range of publishing options, including print-on-demand, e-book, and audiobook formats, to ensure your book is available in the formats your readers prefer.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                At American Books Agency, we have an experienced team of publishing professionals dedicated to helping you achieve your book publishing goals. From manuscript evaluation to book design and marketing, our team will work with you to create a book you'll be proud to share with the world. We pride ourselves on our attention to detail and commitment to ensuring your book is published to the highest standards.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-700 flex gap-4 items-start">
                <ShieldCheck className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                <div>
                  <strong className="text-purple-900 text-lg block mb-1">Independent Self-Publishing Agency</strong>
                  <p className="text-slate-700 text-sm m-0">We are an independently operated self-publishing brand. We are not associated with any other brand or entity, nor do we hold any third-party partnerships. This independence lets us focus entirely on your publishing journey, with full transparency and dedication to your success.</p>
                </div>
              </div>
            </div>

            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-purple-900">Our Core Values</h2>
              <p className="text-slate-600 mb-8 text-base">Our work is built on unwavering values that place the author's vision and success first:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <div className="service-icon mb-4"><Handshake className="h-7 w-7 text-purple-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Commitment To Collaboration</h3>
                  <p className="text-slate-600 text-sm">We work side-by-side with you through every rewrite, design iteration, and publication milestone.</p>
                </div>
                <div className="service bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <div className="service-icon mb-4"><Heart className="h-7 w-7 text-purple-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Unwavering Dedication</h3>
                  <p className="text-slate-600 text-sm">Our team is deeply invested in your literary goals, ensuring personalized support from start to finish.</p>
                </div>
                <div className="service bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <div className="service-icon mb-4"><Star className="h-7 w-7 text-purple-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Prioritizing High Quality</h3>
                  <p className="text-slate-600 text-sm">We maintain industry-leading standards across editing, formatting, cover art, and physical book printing.</p>
                </div>
              </div>
            </div>

            <div className="content-card bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-white">Feature Yourself & Boost Your Achievements</h2>
              <p className="text-purple-100 text-base md:text-lg mb-8 leading-relaxed">
                Turn your dream of being a successful author with a dedicated following into reality. Live like a celebrity author today! We assist you in securing featured placements in top national newspapers, digital publications, and literary blogs, magnifying your authority and cultivating a loyal fan base.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#request-quote" className="btn btn-primary inline-flex items-center gap-2"><Megaphone className="h-4 w-4" /> Launch PR Campaign</a>
                <a href="tel:+13467085688" className="btn btn-outline border-white text-white hover:bg-white/10 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Speak With A Consultant</a>
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
