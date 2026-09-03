import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Shield, Lock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Trust & Guarantee Bar */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div class-name="trust-left" className="trust-left">
              <div className="trust-item">
                <div className="trust-icon"><Shield className="h-5 w-5" /></div>
                <div>
                  <strong>100% Rights Guaranteed</strong>
                  <span>You retain 100% ownership & royalties</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon"><Lock className="h-5 w-5" /></div>
                <div>
                  <strong>256-Bit SSL Encrypted</strong>
                  <span>Your information is completely safe & secure</span>
                </div>
              </div>
            </div>
            <div className="trust-right">
              <div className="payment-icons" aria-label="Accepted Payment Options">
                <span className="pay-badge visa">VISA</span>
                <span className="pay-badge mastercard">Mastercard</span>
                <span className="pay-badge amex">AMEX</span>
                <span className="pay-badge paypal">PayPal</span>
              </div>
              <div className="trust-meta">
                <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link> | © {currentYear} American Books Agency
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="brand" style={{ color: "#fff", marginBottom: "16px" }}>
                <span className="brand-logo">
                  <img src="/assets/images/logo.png" alt="American Books Agency Logo" className="h-8 w-auto" />
                </span>
                <span>American Books Agency</span>
              </div>
              <p style={{ maxWidth: "340px", lineHeight: 1.6, color: "#a0aec0" }}>
                From first word to final print — professional book publishing services for independent authors and creators across the USA.
              </p>
            </div>

            <div>
              <h5>Publishing Services</h5>
              <ul>
                <li><Link to="/services/ghost-writing">Ghostwriting</Link></li>
                <li><Link to="/services/editing-proofreading">Editing & Proofreading</Link></li>
                <li><Link to="/services/book-publishing">Book Publishing</Link></li>
                <li><Link to="/services/book-marketing">Book Marketing</Link></li>
                <li><Link to="/services/audio-book-publishing">Audiobook Production</Link></li>
                <li><Link to="/services/article-blog-writing">Article & Blog Writing</Link></li>
              </ul>
            </div>

            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/portfolio">Our Portfolio</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use">Terms of Use</Link></li>
              </ul>
            </div>

            <div>
              <h5>Contact & Support</h5>
              <ul>
                <li>
                  <Phone className="h-4 w-4 inline mr-2" style={{ color: "var(--red)" }} />
                  <a href="tel:+13467085688">+1 (346) 708-5688</a>
                </li>
                <li>
                  <Mail className="h-4 w-4 inline mr-2" style={{ color: "var(--red)" }} />
                  <a href="mailto:info@americanbooksagency.com">info@americanbooksagency.com</a>
                </li>
                <li>
                  <MapPin className="h-4 w-4 inline mr-2" style={{ color: "var(--red)" }} />
                  <span>United States</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <div>© {currentYear} American Books Agency. All rights reserved.</div>
            <div className="foot-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-use">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
