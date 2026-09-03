import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuoteSection } from "../../components/QuoteSection";
import { BackToTop } from "../../components/BackToTop";
import { FloatingTalkWidget } from "../../components/FloatingTalkWidget";
import { Newspaper, Search, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/article-blog-writing")({
  head: () => ({
    meta: [
      { title: "Article & Blog Writing Services — American Books Agency" },
      { name: "description", content: "Professional SEO article and blog writing to establish thought leadership and grow your author brand." }
    ],
  }),
  component: ArticleBlogWritingPage,
});

function ArticleBlogWritingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Article & Blog Writing Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Words That Engage, Content That Converts — Professional SEO-Optimized Articles That Grow Your Author Brand & Reach.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container space-y-10">
            <div className="content-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">Grow Your Authority With High-Quality Writing</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                At American Books Agency, we craft compelling, SEO-optimized articles and blog posts that elevate your brand's voice and drive measurable traffic. Our team of professional writers specializes in creating content that resonates with your target audience — whether you are an author building your platform or a business establishing thought leadership.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Search className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">SEO-Optimized Content</h3>
                  <p className="text-slate-600 text-sm">Written with search intent, target keywords, structured headings, and meta tags built in.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <ShieldCheck className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">100% Plagiarism-Free</h3>
                  <p className="text-slate-600 text-sm">Original, well-researched copy checked with Grammarly and Copyscape before delivery.</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <Newspaper className="h-6 w-6 text-purple-700 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Author Platform Growth</h3>
                  <p className="text-slate-600 text-sm">Consistently published articles that build loyal email subscribers and brand authority.</p>
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
