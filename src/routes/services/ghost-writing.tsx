import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { useState } from "react";
import { 
  Feather, 
  ShieldCheck, 
  UserCheck, 
  RotateCcw, 
  BookOpen, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  Send, 
  ChevronDown,
  Sparkles
} from "lucide-react";

export const Route = createFileRoute("/services/ghost-writing")({
  head: () => ({
    meta: [
      { title: "Ghost Writing Services in USA | Ghost Book Writing Experts" },
      { 
        name: "description", 
        content: "Professional ghost writing services for authors nationwide. From ebook ghostwriting to full manuscripts, our ghost book writing services turn ideas into published books." 
      },
      { property: "og:title", content: "Ghost Writing Services in USA | Ghost Book Writing Experts" },
      { 
        property: "og:description", 
        content: "Professional ghost writing services for authors nationwide. Turn your ideas into published books." 
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GhostWritingPage,
});

const ghostFaqs = [
  {
    question: "What do ghost writing services include?",
    answer: "Our ghost writing services cover everything from concept development and outlining to full manuscript writing, so your book is ready for editing and publishing."
  },
  {
    question: "Who owns the rights to my ghostwritten book?",
    answer: "You retain 100% legal ownership and all royalties. We write it, but the book is entirely yours."
  },
  {
    question: "Do you offer ebook ghostwriting services?",
    answer: "Yes, our ebook ghostwriting services are tailored for digital formats, including Kindle and other online publishing platforms."
  },
  {
    question: "Is ghostwriting confidential?",
    answer: "Absolutely. Every project is protected under a strict non-disclosure agreement to keep your identity and work private."
  },
  {
    question: "How long does the process take?",
    answer: "Timelines vary by book length and complexity, but most projects are completed within a few months, with clear milestones along the way."
  }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ghostFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const inclusions = [
  {
    icon: <ShieldCheck className="h-7 w-7 text-purple-600" />,
    title: "100% Confidentiality",
    desc: "Your identity and project details stay completely private, protected by strict non-disclosure agreements."
  },
  {
    icon: <UserCheck className="h-7 w-7 text-purple-600" />,
    title: "Your Voice, Your Story",
    desc: "We study your tone and personality closely so the final manuscript sounds authentically like you."
  },
  {
    icon: <RotateCcw className="h-7 w-7 text-purple-600" />,
    title: "Unlimited Revisions",
    desc: "We refine chapters until they match your vision, with no limit on how many rounds it takes."
  },
  {
    icon: <BookOpen className="h-7 w-7 text-purple-600" />,
    title: "Experienced Genre Writers",
    desc: "Our team includes specialists across fiction, memoir, business, and self-help genres."
  },
  {
    icon: <Clock className="h-7 w-7 text-purple-600" />,
    title: "On-Time Delivery",
    desc: "Every project follows a clear timeline, so your manuscript is ready exactly when promised."
  },
  {
    icon: <DollarSign className="h-7 w-7 text-purple-600" />,
    title: "Full Ownership & Royalties",
    desc: "You retain complete legal rights and all royalties for the book we write for you."
  }
];

const workflowSteps = [
  { num: "01", title: "Consultation", desc: "We start with a detailed conversation to understand your story, goals, and target audience." },
  { num: "02", title: "Outline & Structure", desc: "Our writers build a clear roadmap for your book before a single chapter is drafted." },
  { num: "03", title: "Chapter-by-Chapter Writing", desc: "Your manuscript is written in structured phases, with regular updates along the way." },
  { num: "04", title: "Review & Feedback", desc: "You review each draft and share feedback, which our writers incorporate promptly." },
  { num: "05", title: "Final Manuscript Delivery", desc: "Once approved, we deliver your polished, publish-ready manuscript, ready for the next step." }
];

const clientReviews = [
  {
    name: "Arthur Pendelton",
    role: "Business Author",
    text: "Working with American Books Agency's ghostwriters was seamless. They captured my voice and expertise with precision, producing a publish-ready business book in under 4 months.",
    stars: 5
  },
  {
    name: "Elena Rostova",
    role: "Memoirist",
    text: "I had a story to tell but didn't know where to start. My ghostwriter was compassionate, detail-oriented, and brought my childhood memories to life so vividly.",
    stars: 5
  },
  {
    name: "David Vance",
    role: "Sci-Fi Author",
    text: "Top-tier ghostwriting service! The plot outlining and chapter delivery kept me involved at every stage. 100% confidential and incredibly professional.",
    stars: 5
  }
];

export function GhostWritingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page-shell">
      {/* FAQPage Schema Markup for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-semibold">
                  <Feather className="h-4 w-4 text-purple-400" /> #1 Ghostwriting Agency in USA
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif leading-tight">
                  Professional Ghost Writing Services in the USA
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                  Have a story in your head but no time or skill to write it? Our expert ghost writing services turn your ideas into a polished, publish-ready manuscript in your own voice.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                  <a 
                    href="#request-quote" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-base transition shadow-lg shadow-red-600/30"
                  >
                    <Send className="h-4 w-4" /> Get Free Consultation
                  </a>
                  <a 
                    href="tel:+13467085688" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base transition backdrop-blur-md"
                  >
                    <MessageSquare className="h-4 w-4" /> Start Live Chat
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img 
                    src="/assets/images/ghostwriting-hero.jpg" 
                    alt="Ghostwriting services in the USA. Turning author ideas into a written manuscript"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                    ✨ Turning author ideas into market-ready published manuscripts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Ghost Writing Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-3">Overview</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mb-8">
              What Are Ghost Writing Services?
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Ghost writing services connect authors with skilled writers who craft their book from scratch while keeping the author as the sole credited voice. Whether you have a rough idea, a set of notes, or just a vision in your head, our writers turn that into a complete, professionally written manuscript through our ghost book writing services. You share the story; we shape the words, so your book reads exactly the way you imagined it, without you having to write a single chapter yourself.
            </p>
          </div>
        </section>

        {/* Inclusions Section */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-2">Service Highlights</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                What Our Ghost Book Writing Services Include
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                Every author deserves a team that treats their story with care from the very first page to the last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inclusions.map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-2">Step-By-Step</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                How Our Ghostwriting Services Work
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                Getting your book written doesn't have to be complicated. Our five-step process keeps you informed and involved without overwhelming you with the technical work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {workflowSteps.map((step) => (
                <div key={step.num} className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100 flex flex-col text-center items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-900 text-white font-extrabold flex items-center justify-center text-lg mb-4 shadow-md">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized eBook Ghostwriting Services */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="h-4 w-4 text-amber-400" /> Digital First Publishing
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-6">
              Specialized eBook Ghostwriting Services
            </h2>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Digital publishing has changed how readers discover new authors, and our ebook ghostwriting services are built specifically for that shift. From Kindle-ready formatting to concise, engaging chapters designed for online readers, we help you create an eBook that performs well on platforms like Amazon KDP. Whether it's a short guide or a full-length digital title, our writers craft content that fits the pace and expectations of today's eBook audience.
            </p>
          </div>
        </section>

        {/* Why Authors Trust Us */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-2">Proven Track Record</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                Why Authors Trust Our Ghostwriting Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Over 8 Years of Experience</h4>
                  <p className="text-slate-600 text-sm">Helping authors across the USA bring their stories to life with industry standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">2,500+ Satisfied Clients</h4>
                  <p className="text-slate-600 text-sm">Successful projects delivered across fiction, non-fiction, memoir, and business writing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Custom-Matched Genre Writers</h4>
                  <p className="text-slate-600 text-sm">Writers matched specifically to your genre, voice, and subject matter—never a generic template.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Full Author Control & Transparency</h4>
                  <p className="text-slate-600 text-sm">Transparent process with regular check-ins, outline approvals, and complete feedback loops.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genres Covered */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-2">Versatile Expertise</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                Genres We Cover in Our Ghost Book Writing Services
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                Our ghost book writing services span a wide range of genres, so no matter what story you're trying to tell, we have a writer who understands it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100">
                <h3 className="text-2xl font-bold font-serif text-purple-950 mb-4 pb-2 border-b border-purple-200">
                  Fiction
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Fantasy, Science Fiction, Mystery, Thriller, Horror, Romance, Historical Fiction, Young Adult (YA), Crime, Action, Dystopian, Paranormal, Western, Adventure, Suspense, War/Military Fiction, Coming-of-Age
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100">
                <h3 className="text-2xl font-bold font-serif text-indigo-950 mb-4 pb-2 border-b border-indigo-200">
                  Non-Fiction
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Memoir, Autobiography, Biography, Self-Help, Business, Health & Wellness, True Crime, Philosophy, Psychology, Parenting, Finance, Science, Politics, Sports, Motivational, Educational/Academic
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200">
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-300">
                  Specialty
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Children's Books, Poetry, Drama, Satire, Short Stories, Religious/Spiritual, Cookbooks, Travel, Humor, Graphic Novels/Comics, Anthology, Fairy Tales, Mythology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-400 font-extrabold uppercase tracking-wider text-sm block mb-2">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-white">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientReviews.map((rev) => (
                <div key={rev.name} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">"{rev.text}"</p>
                  </div>
                  <div>
                    <strong className="block text-white font-bold">{rev.name}</strong>
                    <span className="text-xs text-slate-400">{rev.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Quote Component */}
        <QuoteSection />

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-4">
                Ready to Start Your Ghostwriting Services Journey?
              </h2>
              <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Let our writers turn your idea into a professionally written manuscript, without you writing a single word.
              </p>
              <a 
                href="#request-quote" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-base transition shadow-lg shadow-red-600/30"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" id="faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-600 font-extrabold uppercase tracking-wider text-sm block mb-2">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                Frequently Asked Questions About Ghost Writing Services
              </h2>
            </div>

            <div className="space-y-4">
              {ghostFaqs.map((faq, idx) => (
                <div key={faq.question} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 font-bold text-slate-900 text-lg flex justify-between items-center gap-4 hover:text-purple-700 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-purple-600 shrink-0 transform transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTalkWidget />
      <BackToTop />
    </div>
  );
}

