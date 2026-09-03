import { useState } from "react";
import { FileSignature, User, Mail, Phone, ConciergeBell, Bookmark, Calculator, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

export function QuoteSection() {
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

    console.log("Form Submitted to Supabase [Tag: talk to]:", payload);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="request-quote" className="quote-section">
      <div className="container">
        <div className="quote-card">
          <div className="quote-header">
            <span className="badge flex items-center justify-center gap-1.5 mx-auto w-max mb-3">
              <FileSignature className="h-4 w-4" /> Free Custom Quote
            </span>
            <h2 className="main-headings">Request A Free Publishing Quote</h2>
            <p>Tell us about your project and receive a personalized publishing estimate within 24 hours.</p>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="quoteName"><User className="h-4 w-4 inline mr-1" /> Full Name *</label>
                <input type="text" id="quoteName" name="name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="quoteEmail"><Mail className="h-4 w-4 inline mr-1" /> Email Address *</label>
                <input type="email" id="quoteEmail" name="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="quotePhone"><Phone className="h-4 w-4 inline mr-1" /> Phone Number *</label>
                <input type="tel" id="quotePhone" name="phone" placeholder="+1 (555) 000-0000" required />
              </div>

              <div className="form-group">
                <label htmlFor="quoteService"><ConciergeBell className="h-4 w-4 inline mr-1" /> Primary Service Needed *</label>
                <select id="quoteService" name="service" required>
                  <option value="">Select a Publishing Service</option>
                  <option value="Book Writing & Ghostwriting">Book Writing & Ghostwriting</option>
                  <option value="Editing & Proofreading">Editing & Proofreading</option>
                  <option value="Book Publishing & Distribution">Book Publishing & Distribution</option>
                  <option value="Cover Design & Layout">Cover Design & Layout</option>
                  <option value="Book Marketing & PR">Book Marketing & PR</option>
                  <option value="Audiobook Production">Audiobook Production</option>
                  <option value="Article & Blog Writing">Article & Blog Writing</option>
                  <option value="Complete Publishing Package">Complete Publishing Package</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quoteGenre"><Bookmark className="h-4 w-4 inline mr-1" /> Book Genre / Subject</label>
                <input type="text" id="quoteGenre" name="genre" placeholder="e.g. Memoir, Fiction, Business, Sci-Fi" />
              </div>

              <div className="form-group">
                <label htmlFor="quoteWords"><Calculator className="h-4 w-4 inline mr-1" /> Estimated Word Count</label>
                <input type="text" id="quoteWords" name="word_count" placeholder="e.g. 30,000 words" />
              </div>

              <div className="form-group full-width">
                <label htmlFor="quoteMessage"><MessageSquare className="h-4 w-4 inline mr-1" /> Project Details & Notes</label>
                <textarea id="quoteMessage" name="message" rows={4} placeholder="Tell us about your book goals, timeline, or any questions you have..."></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary quote-submit-btn flex items-center justify-center gap-2"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Submitting Request...
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" /> Quote Requested Successfully!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Submit Quote Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
