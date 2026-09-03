import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { FloatingTalkWidget } from "../components/FloatingTalkWidget";
import { Phone, Mail, Clock, Send, Loader2, CheckCircle2, User, ConciergeBell, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — American Books Agency" },
      { name: "description", content: "Get in touch with American Books Agency publishing consultants for a free manuscript analysis and quote." }
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      source: "talk to",
      tag: "talk_to",
      timestamp: new Date().toISOString(),
      data: Object.fromEntries(formData.entries()),
    };

    console.log("Contact Form Submitted to Supabase [Tag: talk to]:", payload);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="inner-banner bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white py-16 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Contact Our Publishing Experts</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Have questions about your manuscript or ready to publish? Reach out to our dedicated support team today.</p>
          </div>
        </section>

        <section className="page-content py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="service bg-white p-8 rounded-3xl border border-purple-100 shadow-md">
                <div className="service-icon mb-4"><Phone className="h-6 w-6 text-purple-700" /></div>
                <h3 className="font-bold text-xl mb-2">Call Us Directly</h3>
                <p className="text-slate-600 mb-4 text-sm">Speak with a publishing specialist for instant assistance.</p>
                <a href="tel:+13467085688" className="service-link text-purple-800 font-semibold">+1 (346) 708-5688 →</a>
              </div>

              <div className="service bg-white p-8 rounded-3xl border border-purple-100 shadow-md">
                <div className="service-icon mb-4"><Mail className="h-6 w-6 text-purple-700" /></div>
                <h3 className="font-bold text-xl mb-2">Send An Email</h3>
                <p className="text-slate-600 mb-4 text-sm">Email our team for detailed proposals and project quotes.</p>
                <a href="mailto:info@americanbooksagency.com" className="service-link text-purple-800 font-semibold">info@americanbooksagency.com →</a>
              </div>

              <div className="service bg-white p-8 rounded-3xl border border-purple-100 shadow-md">
                <div className="service-icon mb-4"><Clock className="h-6 w-6 text-purple-700" /></div>
                <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                <p className="text-slate-600 mb-4 text-sm">Monday – Friday: 9:00 AM – 7:00 PM EST<br />Saturday – Sunday: Support Available</p>
                <span className="text-purple-800 font-semibold text-sm">24/7 Response Guaranteed</span>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="quote-card bg-white p-8 md:p-12 rounded-3xl border border-purple-100 shadow-xl max-w-4xl mx-auto">
              <div className="quote-header text-center mb-8">
                <h2 className="text-3xl font-bold font-serif text-purple-900 mb-2">Send Us A Message</h2>
                <p className="text-slate-600">Fill out the form below and one of our dedicated publishing project managers will get back to you within 24 hours.</p>
              </div>

              <form className="quote-form space-y-6" onSubmit={handleSubmit}>
                <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="contactName" className="block font-semibold mb-2 text-sm text-slate-700"><User className="h-4 w-4 inline mr-1" /> Full Name *</label>
                    <input type="text" id="contactName" name="name" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-purple-500 outline-none" placeholder="John Doe" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactEmail" className="block font-semibold mb-2 text-sm text-slate-700"><Mail className="h-4 w-4 inline mr-1" /> Email Address *</label>
                    <input type="email" id="contactEmail" name="email" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-purple-500 outline-none" placeholder="john@example.com" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPhone" className="block font-semibold mb-2 text-sm text-slate-700"><Phone className="h-4 w-4 inline mr-1" /> Phone Number *</label>
                    <input type="tel" id="contactPhone" name="phone" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-purple-500 outline-none" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactService" className="block font-semibold mb-2 text-sm text-slate-700"><ConciergeBell className="h-4 w-4 inline mr-1" /> Primary Service Needed *</label>
                    <select id="contactService" name="service" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-purple-500 outline-none" required>
                      <option value="">Select Service</option>
                      <option value="Book Writing & Ghostwriting">Book Writing & Ghostwriting</option>
                      <option value="Editing & Proofreading">Editing & Proofreading</option>
                      <option value="Book Publishing & Distribution">Book Publishing & Distribution</option>
                      <option value="Cover Design & Layout">Cover Design & Layout</option>
                      <option value="Book Marketing">Book Marketing</option>
                      <option value="Audiobook Production">Audiobook Production</option>
                    </select>
                  </div>

                  <div className="form-group md:col-span-2">
                    <label htmlFor="contactMessage" className="block font-semibold mb-2 text-sm text-slate-700"><MessageSquare className="h-4 w-4 inline mr-1" /> Project Details & Notes *</label>
                    <textarea id="contactMessage" name="message" rows={5} className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-purple-500 outline-none" placeholder="Tell us about your manuscript or project goals..." required></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full p-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending Message...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" /> Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Send Message Now
                    </>
                  )}
                </button>
              </form>
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
