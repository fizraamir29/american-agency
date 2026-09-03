import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { 
  Feather, 
  CheckSquare, 
  BookOpen, 
  Megaphone, 
  Palette, 
  Paintbrush, 
  Printer, 
  Headphones, 
  Video, 
  Star, 
  Rocket, 
  Compass, 
  Phone, 
  Mail, 
  Shield, 
  Lock 
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteSection } from "../components/QuoteSection";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { ref, value: decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString() };
}

function Stat({ end, suffix = "", prefix = "", label, decimals = 0 }: { end: number; suffix?: string; prefix?: string; label: string; decimals?: number }) {
  const { ref, value } = useCountUp(end, 2000, decimals);
  return (
    <div ref={ref}>
      <div className="stat-num">{prefix}{value}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professional Book Writing Company in USA | American Books Agency" },
      {
        name: "description",
        content:
          "America's trusted professional book writing company offering ghostwriting, editing, cover design & publishing. Work with the best eBook company. Get a free quote today.",
      },
      { property: "og:title", content: "Professional Book Writing Company in USA | American Books Agency" },
      {
        property: "og:description",
        content: "America's trusted professional book writing company offering ghostwriting, editing, cover design & publishing. Work with the best eBook company. Get a free quote today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const css = `
  :root {
    --purple: #7a4fbf;
    --purple-dark: #5b2fa0;
    --purple-light: #a385d6;
    --purple-soft: #efe8fb;
    --purple-ultra-light: #f7f2fc;
    --red: #e63946;
    --red-dark: #b22234;
    --blue-dark: #0d1b3e;
    --blue-accent: #2563eb;
    --white: #ffffff;
    --grey-bg: #f8f9fa;
    --grey-border: #e6e2ee;
    --grey-muted: #6b6785;
    --ink: #0f172a;
    --ink-2: #1e293b;
    --shadow: 0 20px 40px -15px rgba(76,34,138,0.15);
    --radius: 20px;
  }

  /* Continuous Wash & Outer Shell */
  .page-shell {
    background: 
      radial-gradient(ellipse 90% 60% at 50% -10%, #f2ecfb 0%, #faf8ff 60%, #ffffff 100%),
      var(--white);
    min-height: 100vh;
  }

  /* Site Header Seamless Integration */
  .site-header {
    position: sticky; top: 0; left: 0; width: 100%; z-index: 1000;
    margin-top: 0; padding: 14px 24px;
    background: rgba(242, 236, 251, 0.85);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(122, 79, 191, 0.12);
    transition: all 0.3s ease;
  }
  .site-header.scrolled {
    padding: 10px 24px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 10px 30px -5px rgba(13, 27, 62, 0.08), 0 1px 3px rgba(122, 79, 191, 0.12);
    border-bottom: 1px solid rgba(122, 79, 191, 0.18);
  }

  .nav {
    max-width: 1240px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
  }
  .brand { display: flex; align-items: center; gap: 12px; font-weight: 800; color: var(--purple-dark); font-size: 1.15rem; }
  .brand-logo { width: 44px; height: 38px; display: flex; align-items: center; justify-content: center; }
  .nav-links { display: flex; gap: 8px; align-items: center; }
  .nav-links a {
    padding: 10px 18px; border-radius: 999px; font-size: .95rem; font-weight: 600; color: var(--ink-2);
    transition: all .2s ease;
  }
  .nav-links a:hover, .nav-links a.active { background: var(--purple-soft); color: var(--purple-dark); }
  .nav-cta { display: flex; gap: 10px; align-items: center; }
  
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 12px 24px; border-radius: 999px; font-weight: 600; font-size: .95rem;
    transition: all .25s ease; cursor: pointer; border: none; text-align: center; white-space: nowrap;
  }
  .btn-primary { background: var(--red); color: #fff; box-shadow: 0 8px 20px -6px rgba(230, 57, 70, 0.5); }
  .btn-primary:hover { background: var(--red-dark); transform: translateY(-2px); color: #fff; }
  .btn-outline { background: transparent; color: var(--purple-dark); border: 1.5px solid var(--purple); }
  .btn-outline:hover { background: var(--purple-soft); color: var(--purple-dark); }
  .btn-blue { background: var(--blue-accent); color: #fff; }
  .btn-blue:hover { background: #1d4ed8; color: #fff; transform: translateY(-2px); }
  .btn-lg { padding: 16px 36px; font-size: 1.05rem; }

  /* Services Mega Menu */
  .nav-dropdown { position: relative; }
  .nav-dropdown-toggle { display: inline-flex; align-items: center; gap: 4px; }
  .mega-menu {
    position: absolute; left: 50%; top: calc(100% + 12px); transform: translateX(-50%) translateY(8px);
    background: #ffffff; border: 1px solid rgba(122, 79, 191, 0.18); border-radius: 24px;
    box-shadow: 0 25px 60px -10px rgba(13, 27, 62, 0.18); padding: 32px; min-width: 840px;
    opacity: 0; visibility: hidden; transition: all 0.25s ease; pointer-events: none; z-index: 100;
  }
  .nav-dropdown:hover .mega-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }
  .mega-menu-inner { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 32px; }
  .mega-col h6 {
    color: var(--purple-dark); font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 800;
    letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 18px; padding-bottom: 10px;
    border-bottom: 1px solid rgba(122, 79, 191, 0.12);
  }
  .mega-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .mega-col a { display: flex; align-items: flex-start; gap: 12px; color: var(--ink); padding: 10px; border-radius: 12px; transition: all 0.2s ease; }
  .mega-col a:hover { background: var(--purple-soft); transform: translateX(4px); }
  .mega-icon { width: 38px; height: 38px; border-radius: 10px; background: var(--purple-soft); color: var(--purple-dark); display: grid; place-items: center; flex-shrink: 0; }
  .mega-col a:hover .mega-icon { background: var(--red); color: #fff; }
  .mega-col a strong { display: block; font-size: 0.92rem; font-weight: 700; color: var(--purple-dark); }
  .mega-col a span { display: block; color: var(--grey-muted); font-size: 0.8rem; margin-top: 2px; }

  /* Hero Section */
  .hero {
    padding: 80px 0 60px; text-align: center; position: relative; overflow: hidden;
  }
  .hero .eyebrow {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 999px;
    background: var(--purple-soft); color: var(--purple-dark); font-size: .88rem; font-weight: 700; margin-bottom: 24px;
    border: 1px solid rgba(122, 79, 191, 0.18);
  }
  .hero p.lead { max-width: 820px; margin: 24px auto 36px; color: var(--grey-muted); font-size: 1.15rem; line-height: 1.7; }
  .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  /* Book Stack Visual */
  .book-stack { margin: 60px auto 0; max-width: 1100px; position: relative; height: 320px; display: flex; justify-content: center; align-items: flex-end; }
  .book {
    width: 170px; height: 240px; border-radius: 10px; box-shadow: 0 25px 45px -12px rgba(13,27,62,.35);
    background: linear-gradient(135deg, var(--blue-dark), var(--purple-dark)); color: #fff; padding: 24px 18px;
    font-family: 'Playfair Display', serif; font-size: 1.1rem; line-height: 1.2;
    margin: 0 -16px; transform-origin: bottom center; transition: all .35s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  .book:hover { transform: translateY(-16px) scale(1.04) rotate(0deg) !important; z-index: 10; box-shadow: 0 35px 60px -15px rgba(230, 57, 70, 0.4); }
  .book:nth-child(1) { transform: rotate(-8deg); background: linear-gradient(160deg, #efe8fb, #c7b0ec); color: var(--ink); }
  .book:nth-child(2) { transform: rotate(-4deg); background: linear-gradient(160deg, #2563eb, #0d1b3e); color: #fff; }
  .book:nth-child(3) { transform: rotate(0deg) translateY(-10px); background: linear-gradient(160deg, #5b2fa0, #1b0c36); color: #fff; }
  .book:nth-child(4) { transform: rotate(4deg); background: linear-gradient(160deg, #e63946, #8b1520); color: #fff; }
  .book:nth-child(5) { transform: rotate(8deg); background: linear-gradient(160deg, #0d1b3e, #1a2b54); color: #fff; }

  /* Sections */
  section { padding: 95px 0; }
  .section-head { text-align: center; max-width: 780px; margin: 0 auto 60px; }
  .section-head p { color: var(--grey-muted); margin-top: 16px; font-size: 1.1rem; }

  /* Stats Bar */
  .stats { background: var(--purple-soft); padding: 60px 0; border-y: 1px solid rgba(122, 79, 191, 0.15); }
  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: center; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 800; color: var(--purple-dark); }
  .stat-lbl { color: var(--grey-muted); font-size: 1rem; font-weight: 600; margin-top: 6px; }
  @media(max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

  /* Services Grid & Smooth Hover Transition */
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .service {
    background: #ffffff; border-radius: var(--radius); padding: 36px 30px;
    border: 1px solid var(--grey-border); box-shadow: 0 10px 30px -15px rgba(13,27,62,.05);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden;
    display: flex; flex-direction: column;
  }
  .service::before {
    content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
    background: linear-gradient(90deg, var(--purple), var(--red)); opacity: 0; transition: opacity 0.35s ease;
  }
  .service:hover {
    transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(122, 79, 191, 0.22);
    border-color: var(--purple-light); background: linear-gradient(180deg, #ffffff 0%, #f9f5fc 100%);
  }
  .service:hover::before { opacity: 1; }
  .service-icon {
    width: 56px; height: 56px; border-radius: 16px; background: var(--purple-soft); color: var(--purple-dark);
    display: grid; place-items: center; font-size: 1.6rem; margin-bottom: 24px; transition: all 0.35s ease;
  }
  .service:hover .service-icon {
    background: linear-gradient(135deg, var(--purple-dark), var(--purple)); color: #ffffff;
    transform: scale(1.1) rotate(-5deg); box-shadow: 0 8px 20px rgba(122, 79, 191, 0.35);
  }
  .service h3 { margin-bottom: 12px; font-size: 1.35rem; transition: color 0.3s ease; }
  .service:hover h3 { color: var(--purple-dark); }
  .service p { color: var(--grey-muted); font-size: .98rem; line-height: 1.6; flex-grow: 1; margin-bottom: 20px; }
  .service-link { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: var(--purple-dark); font-size: 0.92rem; transition: color 0.2s ease; }
  .service:hover .service-link { color: var(--red); }
  @media(max-width: 992px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
  @media(max-width: 640px) { .services-grid { grid-template-columns: 1fr; } }

  /* Process Section */
  .process { background: linear-gradient(180deg, var(--purple-soft), #fff); }
  .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
  .step { background: #fff; border-radius: var(--radius); padding: 30px 20px; text-align: center; border: 1px solid var(--grey-border); transition: transform 0.3s ease; }
  .step:hover { transform: translateY(-6px); border-color: var(--purple); }
  .step-num { width: 50px; height: 50px; border-radius: 50%; background: var(--purple-dark); color: #fff; display: grid; place-items: center; font-weight: 800; font-size: 1.2rem; margin: 0 auto 18px; }
  .step h4 { margin-bottom: 10px; font-size: 1.15rem; }
  .step p { color: var(--grey-muted); font-size: .9rem; }
  @media(max-width: 992px) { .steps { grid-template-columns: repeat(3, 1fr); } }
  @media(max-width: 640px) { .steps { grid-template-columns: 1fr; } }

  /* Portfolio Grid */
  .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .portfolio-card {
    background: #fff; border-radius: var(--radius); overflow: hidden;
    border: 1px solid var(--grey-border); box-shadow: 0 10px 30px -15px rgba(13,27,62,.08);
    transition: all 0.35s ease; display: flex; flex-direction: column;
  }
  .portfolio-card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(122,79,191,.22); border-color: var(--purple-light); }
  .portfolio-img-wrapper { aspect-ratio: 2/3; overflow: hidden; background: var(--purple-soft); position: relative; }
  .portfolio-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
  .portfolio-card:hover .portfolio-img-wrapper img { transform: scale(1.05); }
  .portfolio-info { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
  .portfolio-badge { align-self: flex-start; padding: 4px 12px; border-radius: 999px; background: var(--purple-soft); color: var(--purple-dark); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
  .portfolio-info h3 { font-size: 1.15rem; font-weight: 700; color: var(--ink); margin-bottom: 6px; font-family: 'Playfair Display', serif; }
  @media(max-width: 992px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
  @media(max-width: 640px) { .portfolio-grid { grid-template-columns: 1fr; } }

  /* Testimonials */
  .testimonials { background: var(--blue-dark); color: #fff; }
  .testimonials .section-head h2 { color: #fff; }
  .testimonials .section-head p { color: #a0aec0; }
  .test-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .test { background: rgba(255,255,255,.05); border-radius: var(--radius); padding: 34px; border: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(10px); }
  .test .stars { color: #f59e0b; margin-bottom: 16px; letter-spacing: 2px; }
  .test p { color: #e2e8f0; font-size: 1rem; line-height: 1.6; margin-bottom: 24px; }
  .test .who { display: flex; align-items: center; gap: 14px; }
  .avatar { width: 46px; height: 46px; border-radius: 50%; background: var(--red); color: #fff; display: grid; place-items: center; font-weight: 700; }
  .test .who strong { display: block; color: #fff; }
  .test .who small { color: #a0aec0; font-size: .85rem; }
  @media(max-width: 992px) { .test-grid { grid-template-columns: 1fr; } }

  /* FAQ Accordion */
  .faq-section { background: var(--purple-ultra-light); }
  .faq-list { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
  .faq-item { background: #fff; border-radius: 16px; border: 1px solid var(--grey-border); overflow: hidden; transition: all 0.25s ease; }
  .faq-item.open { border-color: var(--purple); box-shadow: 0 10px 25px -5px rgba(122,79,191,0.12); }
  .faq-button { width: 100%; text-align: left; padding: 22px 28px; font-weight: 700; font-size: 1.1rem; color: var(--purple-dark); display: flex; justify-content: space-between; align-items: center; cursor: pointer; border: none; background: none; }
  .faq-answer { padding: 0 28px 24px; color: var(--grey-muted); font-size: 1rem; line-height: 1.75; }

  /* CTA Banner */
  .cta {
    background: linear-gradient(135deg, var(--purple-dark), var(--blue-dark));
    color: #fff; border-radius: 24px; padding: 70px 40px; text-align: center; margin: 60px 0;
  }
  .cta h2 { color: #fff; margin-bottom: 16px; }
  .cta p { color: rgba(255,255,255,.9); max-width: 740px; margin: 0 auto 32px; font-size: 1.1rem; line-height: 1.7; }
`;

const servicesList = [
  { 
    icon: <Feather className="h-6 w-6" />, 
    title: "Ghost Book Writing", 
    desc: "Skilled ghostwriters transform your ideas into a compelling, publish-ready manuscript in your unique voice.", 
    link: "/services/ghost-writing" 
  },
  { 
    icon: <CheckSquare className="h-6 w-6" />, 
    title: "Editing & Proofreading", 
    desc: "Meticulous editing sharpens every chapter, removing errors while preserving your original tone and message.", 
    link: "/services/editing-proofreading" 
  },
  { 
    icon: <BookOpen className="h-6 w-6" />, 
    title: "Book Publishing", 
    desc: "Our book publishing services in the USA manage the entire publishing process, getting your book live on major platforms including Amazon, IngramSpark, and other leading retailers with ease.", 
    link: "/services/book-publishing" 
  },
  { 
    icon: <Megaphone className="h-6 w-6" />, 
    title: "Book Marketing", 
    desc: "Strategic promotion plans help your book reach the right readers and build lasting visibility.", 
    link: "/services/book-marketing" 
  },
  { 
    icon: <Palette className="h-6 w-6" />, 
    title: "Cover Design", 
    desc: "Eye-catching, genre-specific covers designed to grab attention and reflect your book's true essence.", 
    link: "/services/book-cover-design" 
  },
  { 
    icon: <Paintbrush className="h-6 w-6" />, 
    title: "Illustrations", 
    desc: "Custom illustrations bring depth and imagination to children's books, novels, and creative projects alike.", 
    link: "/services/book-illustrations" 
  },
  { 
    icon: <Printer className="h-6 w-6" />, 
    title: "Book Printing", 
    desc: "High-quality printing services deliver polished paperback and hardcover copies ready for readers.", 
    link: "/services/book-printing" 
  },
  { 
    icon: <Headphones className="h-6 w-6" />, 
    title: "Audio Book Production", 
    desc: "Professional narration turns your book into an engaging audio experience for on-the-go listeners.", 
    link: "/services/audio-book-publishing" 
  },
  { 
    icon: <Video className="h-6 w-6" />, 
    title: "Video Book Trailers", 
    desc: "Cinematic trailers create buzz and excitement, giving your book a powerful visual introduction.", 
    link: "/services/video-book-trailer" 
  },
];

const processSteps = [
  { n: "01", t: "Book Research", d: "We study your audience and genre to shape a strong, strategic foundation for your book." },
  { n: "02", t: "Write Chapters", d: "Our writers craft each chapter with care, keeping your voice and vision at the center." },
  { n: "03", t: "Edit & Format", d: "Every page is polished and professionally formatted for a smooth, industry-standard reading experience." },
  { n: "04", t: "Cover Design", d: "A striking cover is designed to match your story and stand out on any shelf." },
  { n: "05", t: "Publish & Launch", d: "Your finished book is prepared and released through trusted book publishing services in the USA, ready to reach readers everywhere." },
];

const portfolioItems = [
  {
    image: "/assets/images/portfolio/the-art-of-being-present.jpg",
    alt: '"The Art of Being Present" is a self-help book designed by American books agency, a professional book writing company',
    title: "The Art of Being Present",
    category: "Self-Help"
  },
  {
    image: "/assets/images/portfolio/a-year-of-better-thoughts.jpg",
    alt: '"A Year of Better Thoughts" self-help book cover design by American books agency, professional book writing company',
    title: "A Year of Better Thoughts",
    category: "Self-Help"
  },
  {
    image: "/assets/images/portfolio/echoes-in-silence.jpg",
    alt: '"Echoes in Silence" is a science fiction book cover design by American books agency, a professional book writing company',
    title: "Echoes in Silence",
    category: "Sci-Fi"
  },
  {
    image: "/assets/images/portfolio/the-hidden-garden.jpg",
    alt: '"The Hidden Garden" children\'s book cover illustration by American books agency, a professional book writing company',
    title: "The Hidden Garden",
    category: "Children's Book"
  },
  {
    image: "/assets/images/portfolio/the-fresh-table.jpg",
    alt: '"The Fresh Table" cookbook cover design with watercolor food illustrations, a professional book writing company.',
    title: "The Fresh Table",
    category: "Cookbook"
  },
  {
    image: "/assets/images/portfolio/the-forgotten-face.jpg",
    alt: '"The Forgotten Face" psychological thriller book cover design by American books agency, a professional book writing company',
    title: "The Forgotten Face",
    category: "Psychological Thriller"
  },
  {
    image: "/assets/images/portfolio/the-wounded.png",
    alt: '"The Wounded" memoir book cover design by American books agency, a professional book writing company',
    title: "The Wounded",
    category: "Memoir"
  },
  {
    image: "/assets/images/portfolio/unique-lifetime-vision.jpg",
    alt: '"Unique Lifetime Vision" Christian faith-based book cover design by American books agency, a professional book writing company',
    title: "Unique Lifetime Vision",
    category: "Christian / Faith"
  },
  {
    image: "/assets/images/portfolio/discover-fulfill-lifetime-vision.png",
    alt: '"Discover and Fulfill Your Lifetime Vision" self-help book cover design by American books agency, a professional book writing company',
    title: "Discover and Fulfill Your Lifetime Vision",
    category: "Self-Help"
  },
];

const authorReviews = [
  { name: "Gloria Restoy", rating: 4.9, text: "Thank you to American Books Agency for a great job! They were professional, knowledgeable, and guided me through every detail." },
  { name: "Myron Bruce", rating: 5.0, text: "Outstanding knowledge and guidance. Working with their team exceeded all my expectations in the publication sector." },
  { name: "Kote Morton", rating: 4.9, text: "I'm so happy with the results! They really helped improve my manuscript and cover layout to bestseller standards." },
];

const homeFaqs = [
  {
    question: "What does a professional book writing company do?",
    answer: "A professional book writing company handles every stage of turning an idea into a finished book, including writing, editing, cover design, formatting, and publishing, so authors don't have to manage the process alone."
  },
  {
    question: "How much does it cost to hire a book writing service?",
    answer: "Cost depends on book length, genre, and the services included, such as ghostwriting, editing, or full publishing packages. Request a free quote for pricing tailored to your project."
  },
  {
    question: "Do you offer eBook publishing services?",
    answer: "Yes. As the best eBook company for authors across the USA, we handle formatting, cover design, and distribution to major eBook platforms."
  },
  {
    question: "Can you help publish my book in the USA?",
    answer: "Yes. Our book publishing services in the USA cover the entire process, from manuscript preparation to getting your book live on major retail platforms."
  },
  {
    question: "Do I keep the rights to my book?",
    answer: "Yes, authors retain full rights and ownership of their published work."
  }
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page-shell">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <span className="eyebrow"><Star className="h-4 w-4 fill-red-500 text-red-500 inline" /> #1 Rated Book Publishing Agency USA</span>
            <h1>America's Trusted Professional Book Writing Company</h1>
            <p className="lead">
              From your very first idea to a finished, market-ready book, our professional book writing company guides every author across the USA toward a successful, stress-free publishing journey. With a proven process and a team of experienced writers, editors, and designers, we help first-time and established authors turn their vision into a professionally published book.
            </p>
            <div className="hero-ctas">
              <a href="#request-quote" className="btn btn-primary btn-lg"><Rocket className="h-4 w-4" /> Request a Free Quote</a>
              <Link to="/services" className="btn btn-outline btn-lg"><Compass className="h-4 w-4" /> Explore All Services</Link>
            </div>

            <div className="book-stack" aria-hidden="true">
              <div className="book">A Memoir<br /><small style={{ fontSize: '.75rem', opacity: .7 }}>Untold Stories</small></div>
              <div className="book">The Brilliant Cage</div>
              <div className="book">Voices of America</div>
              <div className="book">Beyond the Page</div>
              <div className="book">Power of Words</div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <Stat end={2500} suffix="+" label="Authors Published" />
              <Stat end={8} suffix="+ Yrs" label="Industry Excellence" />
              <Stat end={100} suffix="%" label="Author Ownership" />
              <Stat end={100} suffix="%" label="Royalties Yours" />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services">
          <div className="container">
            <div className="section-head">
              <span className="subhead" style={{ color: "var(--red)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>Our Solutions</span>
              <h2>Everything Your Book Needs</h2>
              <p>As the best eBook company for authors nationwide, we combine writing, design, and publishing expertise under one roof to bring every story to life, from concept to bookshelf.</p>
            </div>
            <div className="services-grid">
              {servicesList.map((s) => (
                <div className="service" key={s.title}>
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.link} className="service-link">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="container">
            <div className="section-head">
              <span className="subhead" style={{ color: "var(--purple-dark)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>Simple Steps</span>
              <h2>Our Simple Publishing Process</h2>
              <p>A clear five-step journey keeps every author informed, involved, and confident from start to finish, the same process that makes us a professional book writing company authors trust and return to.</p>
            </div>
            <div className="steps">
              {processSteps.map((p) => (
                <div className="step" key={p.n}>
                  <div className="step-num">{p.n}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Portfolio Section */}
        <section id="portfolio">
          <div className="container">
            <div className="section-head">
              <span className="subhead" style={{ color: "var(--red)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>Featured Portfolio</span>
              <h2>Our Published Work</h2>
              <p>Explore a growing library of published books across fiction, non-fiction, memoirs, self-help, business, and children's books, each crafted end-to-end by our writing, editing, and design team. From debut authors publishing their first eBook to seasoned writers expanding their catalog, our portfolio reflects the range and quality that make us the best eBook company for authors who want their story done right.</p>
            </div>
            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <div className="portfolio-card" key={item.title}>
                  <div className="portfolio-img-wrapper">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="portfolio-info">
                    <span className="portfolio-badge">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author Testimonials */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-head">
              <span className="subhead" style={{ color: "var(--purple-light)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>Author Reviews</span>
              <h2>What Authors Say About Us</h2>
              <p>Real stories from authors who transformed their manuscript into published success.</p>
            </div>
            <div className="test-grid">
              {authorReviews.map((t) => (
                <div className="test" key={t.name}>
                  <div className="stars">★★★★★</div>
                  <p>"{t.text}"</p>
                  <div className="who">
                    <div className="avatar">{t.name.split(" ").map(n => n[0]).join("")}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <small>Verified Published Author</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request A Quote Section */}
        <QuoteSection />

        {/* CTA Section */}
        <section id="contact">
          <div className="container">
            <div className="cta">
              <h2>Ready to Turn Your Idea Into a Published Book?</h2>
              <p>Partner with American Books Agency, the professional bookwriting company trusted by aspiring and established authors. Whether you need expert writing, book publishing services in the USA, or the support of the best eBook company, we're here to help you publish with confidence. Contact us today and start your publishing journey.</p>
              <div className="cta-buttons flex justify-center gap-4 flex-wrap">
                <a href="#request-quote" className="btn btn-primary btn-lg">Request a Free Quote</a>
                <a href="tel:+13467085688" className="btn btn-outline btn-lg" style={{ color: "#fff", borderColor: "#fff" }}><Phone className="h-4 w-4" /> Call +1 (346) 708-5688</a>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-head">
              <span className="subhead" style={{ color: "var(--purple-dark)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>Questions & Answers</span>
              <h2>Frequently Asked Questions</h2>
              <p>Got questions about working with a professional book writing company? Here are answers to common questions.</p>
            </div>
            <div className="faq-list">
              {homeFaqs.map((faq, idx) => (
                <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={faq.question}>
                  <button className="faq-button" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <span>{faq.question}</span>
                    <span style={{ fontSize: "1.4rem", transition: "transform 0.2s" }}>{openFaq === idx ? "−" : "+"}</span>
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

