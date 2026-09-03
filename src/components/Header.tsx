import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Feather, 
  UserCheck, 
  BookOpen, 
  Megaphone, 
  CheckSquare, 
  Palette, 
  FileText, 
  Printer, 
  Headphones, 
  Paintbrush, 
  Laptop, 
  Newspaper, 
  Video,
  Phone,
  Send,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link to="/" className="brand">
          <span className="brand-logo">
            <img src="/assets/images/logo.png" alt="American Books Agency Logo" className="h-9 w-auto object-contain" />
          </span>
          <span>American Books Agency</span>
        </Link>

        <div className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          <Link to="/" activeProps={{ className: "active" }} activeOptions={{ exact: true }}>
            Home
          </Link>

          <div className="nav-dropdown">
            <Link to="/services" className="nav-dropdown-toggle">
              Services <ChevronDown className="h-3.5 w-3.5 inline ml-0.5" />
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-inner">
                <div className="mega-col">
                  <h6>Core Publishing</h6>
                  <ul>
                    <li>
                      <Link to="/services/ghost-writing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Feather className="h-4 w-4" /></span>
                        <div><strong>Ghostwriting</strong><span>Your story expertly written</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-publishing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><BookOpen className="h-4 w-4" /></span>
                        <div><strong>Book Publishing</strong><span>Complete publishing solutions</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-marketing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Megaphone className="h-4 w-4" /></span>
                        <div><strong>Book Marketing</strong><span>Bestseller promo campaigns</span></div>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mega-col">
                  <h6>Production & Editing</h6>
                  <ul>
                    <li>
                      <Link to="/services/editing-proofreading" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><CheckSquare className="h-4 w-4" /></span>
                        <div><strong>Editing & Proofreading</strong><span>Flawless manuscript editing</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-cover-design" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Palette className="h-4 w-4" /></span>
                        <div><strong>Cover Design</strong><span>High-converting book covers</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-formatting" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><FileText className="h-4 w-4" /></span>
                        <div><strong>Book Formatting</strong><span>Print & eBook interior layout</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-printing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Printer className="h-4 w-4" /></span>
                        <div><strong>Book Printing</strong><span>Hardcover & paperback printing</span></div>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mega-col">
                  <h6>Media & Creative</h6>
                  <ul>
                    <li>
                      <Link to="/services/audio-book-publishing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Headphones className="h-4 w-4" /></span>
                        <div><strong>Audiobook Production</strong><span>Voiceover & audio publishing</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/book-illustrations" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Paintbrush className="h-4 w-4" /></span>
                        <div><strong>Book Illustrations</strong><span>Custom artwork & graphics</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/author-website" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Laptop className="h-4 w-4" /></span>
                        <div><strong>Author Website</strong><span>Custom author web platform</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/article-blog-writing" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Newspaper className="h-4 w-4" /></span>
                        <div><strong>Article & Blog Writing</strong><span>SEO content & thought leadership</span></div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/video-book-trailer" onClick={() => setMobileOpen(false)}>
                        <span className="mega-icon"><Video className="h-4 w-4" /></span>
                        <div><strong>Video Book Trailer</strong><span>Cinematic promo trailers</span></div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" activeProps={{ className: "active" }} onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link to="/portfolio" activeProps={{ className: "active" }} onClick={() => setMobileOpen(false)}>Portfolio</Link>
          <Link to="/testimonials" activeProps={{ className: "active" }} onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link to="/contact" activeProps={{ className: "active" }} onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>

        <div className="nav-cta">
          <a href="tel:+13467085688" className="btn btn-outline">
            <Phone className="h-4 w-4" /> Call Us
          </a>
          <a href="#request-quote" className="btn btn-primary">
            <Send className="h-4 w-4" /> Get Quote
          </a>
          <button 
            className="mobile-toggle-btn md:hidden p-2 rounded-full text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
