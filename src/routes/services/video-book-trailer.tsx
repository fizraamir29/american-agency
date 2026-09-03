import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Video, Film, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/video-book-trailer")({
  head: () => ({
    meta: [
      { title: "Video Book Trailer Production — American Books Agency" },
      { name: "description", content: "Cinematic video book trailers with professional voiceover and visual effects to boost book pre-orders and sales." }
    ],
  }),
  component: VideoBookTrailerPage,
});

function VideoBookTrailerPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Video Book Trailer Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">High-impact cinematic promo trailers designed to build hype and turn viewers into buyers across social media.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Cinematic Book Trailers</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Video is the most powerful medium on social media. A custom cinematic book trailer captures your plot's mystery, emotion, or core takeaways in 60 to 90 seconds, making it perfect for YouTube ads, TikTok, Instagram Reels, and Amazon author pages.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Film className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">HD Stock & Visual Effects</h3>
                  <p className="text-slate-600 text-sm">High-definition stock footage, custom motion graphics, and atmospheric visual effects.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Video className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Voiceover & Music</h3>
                  <p className="text-slate-600 text-sm">Dramatic professional voiceover narration paired with licensed cinematic soundtracks.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Sparkles className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Multi-Format Delivery</h3>
                  <p className="text-slate-600 text-sm">Delivered in 16:9 landscape for YouTube and 9:16 vertical for TikTok/Reels/Shorts.</p>
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
