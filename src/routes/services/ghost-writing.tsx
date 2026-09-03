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
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "100% Confidentiality",
    desc: "Your identity and project details stay completely private, protected by strict non-disclosure agreements."
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Your Voice, Your Story",
    desc: "We study your tone and personality closely so the final manuscript sounds authentically like you."
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: "Unlimited Revisions",
    desc: "We refine chapters until they match your vision, with no limit on how many rounds it takes."
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Experienced Genre Writers",
    desc: "Our team includes specialists across fiction, memoir, business, and self-help genres."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "On-Time Delivery",
    desc: "Every project follows a clear timeline, so your manuscript is ready exactly when promised."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
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

const ghostPageCss = `
  .gw-hero {
    background: linear-gradient(135deg, #0d1b3e 0%, #3b0764 50%, #1a0b2e 100%);
    padding: 100px 0 85px;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }
  .gw-hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: center;
  }
  .gw-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 999px;
    background: rgba(163, 133, 214, 0.22);
    color: #e9d5ff !important;
    font-size: 0.9rem;
    font-weight: 700;
    border: 1px solid rgba(163, 133, 214, 0.35);
    margin-bottom: 20px;
  }
  .gw-hero h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2.3rem, 4.5vw, 3.6rem);
    font-weight: 800;
    color: #ffffff !important;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .gw-hero p.lead {
    color: #cbd5e1 !important;
    font-size: 1.15rem;
    line-height: 1.75;
    margin-bottom: 34px;
    max-width: 620px;
  }
  .gw-hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .gw-btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px 32px;
    border-radius: 999px;
    background: #e63946 !important;
    color: #ffffff !important;
    font-weight: 700;
    font-size: 1.05rem;
    text-decoration: none;
    box-shadow: 0 10px 25px -5px rgba(230, 57, 70, 0.5);
    transition: all 0.25s ease;
    border: none;
    cursor: pointer;
  }
  .gw-btn-primary:hover {
    background: #b22234 !important;
    color: #ffffff !important;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(230, 57, 70, 0.6);
  }
  .gw-btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px 32px;
    border-radius: 999px;
    background: transparent !important;
    color: #ffffff !important;
    border: 2px solid rgba(255, 255, 255, 0.8) !important;
    font-weight: 700;
    font-size: 1.05rem;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
  }
  .gw-btn-outline:hover {
    background: #ffffff !important;
    color: #0d1b3e !important;
    transform: translateY(-2px);
  }
  .gw-hero-img-wrap {
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
    max-width: 480px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.05);
  }
  .gw-hero-img-wrap img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  .gw-overview-section {
    padding: 85px 0;
    background: #ffffff;
    text-align: center;
  }
  .gw-subhead {
    display: inline-block;
    color: #e63946;
    font-size: 0.88rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 12px;
  }
  .gw-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    color: #0f172a !important;
    margin-bottom: 20px;
  }
  .gw-lead-p {
    color: #475569 !important;
    font-size: 1.15rem;
    line-height: 1.85;
    max-width: 860px;
    margin: 0 auto;
  }
  .gw-inclusions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 48px;
  }
  .gw-card {
    background: #ffffff;
    border: 1px solid #e6e2ee;
    border-radius: 20px;
    padding: 34px 28px;
    box-shadow: 0 10px 30px -10px rgba(13, 27, 62, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
  }
  .gw-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px -10px rgba(122, 79, 191, 0.2);
    border-color: #a385d6;
  }
  .gw-card-icon {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    background: #efe8fb;
    color: #5b2fa0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .gw-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a !important;
    margin-bottom: 12px;
  }
  .gw-card p {
    color: #64748b !important;
    font-size: 0.96rem;
    line-height: 1.65;
  }
  .gw-steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-top: 48px;
  }
  .gw-step-card {
    background: #ffffff;
    border: 1px solid #e6e2ee;
    border-radius: 18px;
    padding: 28px 20px;
    text-align: center;
    transition: all 0.25s ease;
  }
  .gw-step-card:hover {
    transform: translateY(-5px);
    border-color: #7a4fbf;
  }
  .gw-step-num {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #5b2fa0;
    color: #ffffff !important;
    font-weight: 800;
    font-size: 1.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
  }
  .gw-step-card h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a !important;
    margin-bottom: 8px;
  }
  .gw-step-card p {
    color: #64748b !important;
    font-size: 0.88rem;
    line-height: 1.6;
  }
  .gw-ebook-banner {
    background: linear-gradient(135deg, #0d1b3e 0%, #3b0764 100%);
    color: #ffffff;
    padding: 85px 0;
    text-align: center;
  }
  .gw-ebook-banner h2 {
    color: #ffffff !important;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 3.5vw, 2.7rem);
    margin: 16px 0 20px;
  }
  .gw-ebook-banner p {
    color: #f1f5f9 !important;
    font-size: 1.15rem;
    line-height: 1.8;
    max-width: 860px;
    margin: 0 auto;
  }
  .gw-trust-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .gw-trust-card {
    background: #ffffff;
    border: 1px solid #e6e2ee;
    border-radius: 18px;
    padding: 24px 28px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  }
  .gw-trust-card h4 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0f172a !important;
    margin-bottom: 4px;
  }
  .gw-trust-card p {
    color: #64748b !important;
    font-size: 0.92rem;
    line-height: 1.5;
  }
  .gw-genres-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 44px;
  }
  .gw-genre-card {
    padding: 32px 28px;
    border-radius: 20px;
    border: 1px solid #e6e2ee;
  }
  .gw-genre-card h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.35rem;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }
  .gw-genre-card p {
    color: #334155 !important;
    font-size: 0.95rem;
    line-height: 1.7;
  }
  .gw-reviews-section {
    background: #0d1b3e;
    color: #ffffff;
    padding: 90px 0;
  }
  .gw-reviews-section h2 {
    color: #ffffff !important;
  }
  .gw-review-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 44px;
  }
  .gw-review-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 32px 26px;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gw-review-card .stars {
    color: #f59e0b;
    margin-bottom: 14px;
    letter-spacing: 2px;
  }
  .gw-review-card p {
    color: #e2e8f0 !important;
    font-size: 0.98rem;
    line-height: 1.65;
    margin-bottom: 20px;
  }
  .gw-review-card strong {
    color: #ffffff !important;
    display: block;
    font-size: 1rem;
  }
  .gw-review-card small {
    color: #94a3b8 !important;
    font-size: 0.85rem;
  }
  .gw-cta-banner {
    background: linear-gradient(135deg, #5b2fa0 0%, #0d1b3e 100%);
    border-radius: 24px;
    padding: 70px 40px;
    text-align: center;
    color: #ffffff;
    margin: 60px 0;
  }
  .gw-cta-banner h2 {
    color: #ffffff !important;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 3.5vw, 2.6rem);
    margin-bottom: 16px;
  }
  .gw-cta-banner p {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 1.15rem;
    max-width: 680px;
    margin: 0 auto 30px;
    line-height: 1.7;
  }
  @media(max-width: 992px) {
    .gw-hero-grid { grid-template-columns: 1fr; text-align: center; }
    .gw-hero-ctas { justify-content: center; }
    .gw-inclusions-grid { grid-template-columns: repeat(2, 1fr); }
    .gw-steps-grid { grid-template-columns: repeat(3, 1fr); }
    .gw-genres-grid { grid-template-columns: 1fr; }
    .gw-review-grid { grid-template-columns: 1fr; }
    .gw-trust-grid { grid-template-columns: 1fr; }
  }
  @media(max-width: 640px) {
    .gw-inclusions-grid { grid-template-columns: 1fr; }
    .gw-steps-grid { grid-template-columns: 1fr; }
  }
`;

export function GhostWritingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page-shell">
      <style dangerouslySetInnerHTML={{ __html: ghostPageCss }} />

      {/* FAQPage Schema Markup for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="gw-hero">
          <div className="container">
            <div className="gw-hero-grid">
              <div>
                <span className="gw-eyebrow">
                  <Feather className="h-4 w-4" /> #1 Ghostwriting Agency in USA
                </span>
                <h1>Professional Ghost Writing Services in the USA</h1>
                <p className="lead">
                  Have a story in your head but no time or skill to write it? Our expert ghost writing services turn your ideas into a polished, publish-ready manuscript in your own voice.
                </p>
                <div className="gw-hero-ctas">
                  <a href="#request-quote" className="gw-btn-primary">
                    <Send className="h-4 w-4" /> Get Free Consultation
                  </a>
                  <a href="tel:+13467085688" className="gw-btn-outline">
                    <MessageSquare className="h-4 w-4" /> Start Live Chat
                  </a>
                </div>
              </div>

              <div>
                <div className="gw-hero-img-wrap">
                  <img 
                    src="/assets/images/ghostwriting-hero.jpg" 
                    alt="Ghostwriting services in the USA. Turning author ideas into a written manuscript" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Ghost Writing Services */}
        <section className="gw-overview-section">
          <div className="container">
            <span className="gw-subhead">Overview</span>
            <h2 className="gw-heading">What Are Ghost Writing Services?</h2>
            <p className="gw-lead-p">
              Ghost writing services connect authors with skilled writers who craft their book from scratch while keeping the author as the sole credited voice. Whether you have a rough idea, a set of notes, or just a vision in your head, our writers turn that into a complete, professionally written manuscript through our ghost book writing services. You share the story; we shape the words, so your book reads exactly the way you imagined it, without you having to write a single chapter yourself.
            </p>
          </div>
        </section>

        {/* Inclusions Section */}
        <section style={{ padding: "85px 0", background: "#f8f9fa", borderTop: "1px solid #e6e2ee", borderBottom: "1px solid #e6e2ee" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <span className="gw-subhead">Service Highlights</span>
              <h2 className="gw-heading">What Our Ghost Book Writing Services Include</h2>
              <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
                Every author deserves a team that treats their story with care from the very first page to the last.
              </p>
            </div>

            <div className="gw-inclusions-grid">
              {inclusions.map((item) => (
                <div className="gw-card" key={item.title}>
                  <div className="gw-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / How It Works */}
        <section style={{ padding: "85px 0", background: "#ffffff" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <span className="gw-subhead">Step-By-Step</span>
              <h2 className="gw-heading">How Our Ghostwriting Services Work</h2>
              <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
                Getting your book written doesn't have to be complicated. Our five-step process keeps you informed and involved without overwhelming you with the technical work.
              </p>
            </div>

            <div className="gw-steps-grid">
              {workflowSteps.map((step) => (
                <div className="gw-step-card" key={step.num}>
                  <div className="gw-step-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized eBook Ghostwriting Services */}
        <section className="gw-ebook-banner">
          <div className="container">
            <span className="gw-eyebrow" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)" }}>
              <Sparkles className="h-4 w-4" /> Digital Publishing
            </span>
            <h2>Specialized eBook Ghostwriting Services</h2>
            <p>
              Digital publishing has changed how readers discover new authors, and our ebook ghostwriting services are built specifically for that shift. From Kindle-ready formatting to concise, engaging chapters designed for online readers, we help you create an eBook that performs well on platforms like Amazon KDP. Whether it's a short guide or a full-length digital title, our writers craft content that fits the pace and expectations of today's eBook audience.
            </p>
          </div>
        </section>

        {/* Why Authors Trust Us */}
        <section style={{ padding: "85px 0", background: "#f8f9fa" }}>
          <div className="container" style={{ maxWidth: "1040px" }}>
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <span className="gw-subhead">Credibility</span>
              <h2 className="gw-heading">Why Authors Trust Our Ghostwriting Services</h2>
            </div>

            <div className="gw-trust-grid">
              <div className="gw-trust-card">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0" />
                <div>
                  <h4>Over 8 Years Experience</h4>
                  <p>Helping authors across the USA bring their stories to life.</p>
                </div>
              </div>
              <div className="gw-trust-card">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0" />
                <div>
                  <h4>2,500+ Satisfied Clients</h4>
                  <p>Across fiction, non-fiction, memoir, and business writing.</p>
                </div>
              </div>
              <div className="gw-trust-card">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0" />
                <div>
                  <h4>Matched to Your Genre & Tone</h4>
                  <p>Writers matched to your unique voice, not a generic template.</p>
                </div>
              </div>
              <div className="gw-trust-card">
                <CheckCircle2 className="h-6 w-6 text-purple-700 shrink-0" />
                <div>
                  <h4>Transparent Process</h4>
                  <p>Regular check-ins, outline reviews, and full author control.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genres Covered */}
        <section style={{ padding: "85px 0", background: "#ffffff" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <span className="gw-subhead">Genres</span>
              <h2 className="gw-heading">Genres We Cover in Our Ghost Book Writing Services</h2>
              <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
                Our ghost book writing services span a wide range of genres, so no matter what story you're trying to tell, we have a writer who understands it.
              </p>
            </div>

            <div className="gw-genres-grid">
              <div className="gw-genre-card" style={{ background: "#fbf7ff", borderColor: "#e9d5ff" }}>
                <h3 style={{ color: "#5b2fa0" }}>Fiction</h3>
                <p>
                  Fantasy, Science Fiction, Mystery, Thriller, Horror, Romance, Historical Fiction, Young Adult (YA), Crime, Action, Dystopian, Paranormal, Western, Adventure, Suspense, War/Military Fiction, Coming-of-Age
                </p>
              </div>

              <div className="gw-genre-card" style={{ background: "#f4f7ff", borderColor: "#dbeafe" }}>
                <h3 style={{ color: "#1e40af" }}>Non-Fiction</h3>
                <p>
                  Memoir, Autobiography, Biography, Self-Help, Business, Health & Wellness, True Crime, Philosophy, Psychology, Parenting, Finance, Science, Politics, Sports, Motivational, Educational/Academic
                </p>
              </div>

              <div className="gw-genre-card" style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}>
                <h3 style={{ color: "#0f172a" }}>Specialty</h3>
                <p>
                  Children's Books, Poetry, Drama, Satire, Short Stories, Religious/Spiritual, Cookbooks, Travel, Humor, Graphic Novels/Comics, Anthology, Fairy Tales, Mythology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="gw-reviews-section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <span className="gw-subhead" style={{ color: "#a385d6" }}>Testimonials</span>
              <h2 className="gw-heading">What Our Clients Say</h2>
              <p style={{ color: "#cbd5e1", fontSize: "1.1rem" }}>
                Real stories from authors who transformed their manuscript into published success.
              </p>
            </div>

            <div className="gw-review-grid">
              {clientReviews.map((rev) => (
                <div className="gw-review-card" key={rev.name}>
                  <div>
                    <div className="stars">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 inline mr-1" />
                      ))}
                    </div>
                    <p>"{rev.text}"</p>
                  </div>
                  <div>
                    <strong>{rev.name}</strong>
                    <small>{rev.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <QuoteSection />

        {/* CTA Section */}
        <div className="container">
          <div className="gw-cta-banner">
            <h2>Ready to Start Your Ghostwriting Services Journey?</h2>
            <p>Let our writers turn your idea into a professionally written manuscript, without you writing a single word.</p>
            <a href="#request-quote" className="gw-btn-primary">
              <Send className="h-4 w-4" /> Request a Free Quote
            </a>
          </div>
        </div>

        {/* FAQ Section with Schema Support */}
        <section className="faq-section" id="faq">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto", marginBottom: "48px" }}>
              <span className="gw-subhead">FAQ</span>
              <h2 className="gw-heading">Frequently Asked Questions About Ghost Writing Services</h2>
            </div>

            <div className="faq-list">
              {ghostFaqs.map((faq, idx) => (
                <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={faq.question}>
                  <button className="faq-button" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <span>{faq.question}</span>
                    <span style={{ fontSize: "1.3rem", fontWeight: 800 }}>{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
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
