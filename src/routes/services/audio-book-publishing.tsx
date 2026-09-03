import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Headphones, Mic, Radio } from "lucide-react";

export const Route = createFileRoute("/services/audio-book-publishing")({
  head: () => ({
    meta: [
      { title: "Audiobook Production & Publishing — American Books Agency" },
      { name: "description", content: "Studio voiceover narration, audio mastering, and global distribution to Audible, iTunes, and Spotify." }
    ],
  }),
  component: AudioBookPublishingPage,
});

function AudioBookPublishingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Audiobook Production & Publishing</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Tap into the fastest-growing sector of publishing with studio narration and distribution on Audible, Apple, and Spotify.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Professional Voiceover & ACX Distribution</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Audiobooks allow readers to enjoy your story during commutes and workouts. We pair your manuscript with professional voice artists, produce studio-grade narration, handle audio mastering to ACX standards, and distribute to Audible, iTunes, and Google Play.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Mic className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Voiceover Casting</h3>
                  <p className="text-slate-600 text-sm">Select from a curated pool of professional male and female voiceover actors matched to your genre.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Headphones className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Studio Editing & ACX</h3>
                  <p className="text-slate-600 text-sm">Noise reduction, audio mastering, RMS volume normalization, and chapter formatting.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Radio className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Global Distribution</h3>
                  <p className="text-slate-600 text-sm">Published on Audible, Amazon, Apple Books, Spotify, Chirp, and OverDrive libraries.</p>
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
