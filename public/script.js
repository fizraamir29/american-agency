// American Books Agency — Main JavaScript Engine

document.addEventListener('DOMContentLoaded', function () {

  // 1. Header Scroll Shadow Effect, Mega Menu Hover Bridge & Mobile Nav Toggle
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Smooth hover bridge delay for Services Mega Menu
    const dropdowns = header.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(function (dd) {
      let timer = null;
      dd.addEventListener('mouseenter', function () {
        if (timer) clearTimeout(timer);
        dd.classList.add('open');
      });
      dd.addEventListener('mouseleave', function () {
        timer = setTimeout(function () {
          dd.classList.remove('open');
        }, 350); // 350ms grace period so dropdown does not close immediately
      });
    });

    const navContainer = header.querySelector('.nav');
    const navLinks = header.querySelector('.nav-links');
    if (navContainer && navLinks && !header.querySelector('.mobile-toggle')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-toggle';
      toggleBtn.setAttribute('aria-label', 'Toggle Mobile Menu');
      toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      toggleBtn.style.cssText = 'display:none;background:transparent;border:none;color:#fff;font-size:1.4rem;cursor:pointer;padding:6px;';
      
      toggleBtn.addEventListener('click', function () {
        navLinks.classList.toggle('mobile-open');
        const isOpen = navLinks.classList.contains('mobile-open');
        toggleBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });

      const navCta = header.querySelector('.nav-cta');
      if (navCta) {
        navContainer.insertBefore(toggleBtn, navCta);
      } else {
        navContainer.appendChild(toggleBtn);
      }
    }
  }

  // 2. Smooth Scrolling for In-Page Anchor Links
  document.addEventListener('click', function (e) {
    const el = e.target.closest('a[href^="#"]');
    if (!el) return;
    const href = el.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = header ? header.getBoundingClientRect().height + 20 : 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });

  // 3. Count-Up Animation for Statistics
  const nums = document.querySelectorAll('.stat-num[data-end]');
  if (nums.length > 0) {
    const seen = new WeakSet();
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          animateStat(e.target);
        }
      });
    }, { threshold: 0.3 });

    nums.forEach(function (n) { obs.observe(n); });

    function animateStat(el) {
      const end = parseFloat(el.getAttribute('data-end'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const duration = 2000;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(end * eased);
        el.textContent = prefix + val.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  // 4. Back to Top Floating Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Supabase & Form Submission ("Talk To" Tagging)
  const forms = document.querySelectorAll('.quote-form, #quoteForm, #heroForm, #contactForm');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const payload = {
        source: "talk to",
        tag: "talk_to_quote",
        timestamp: new Date().toISOString(),
        data: {}
      };

      formData.forEach((value, key) => {
        payload.data[key] = value;
      });

      console.log('Form Submitted to Supabase [Tag: talk to]:', payload);

      // Submit feedback visual
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Submitted';
      
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      }

      setTimeout(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-check-circle"></i> Quote Requested!';
          btn.style.background = '#10b981';
        }

        showToast('Thank you! Your quote request has been received. Our team will contact you shortly.');
        form.reset();

        setTimeout(function () {
          if (btn) {
            btn.innerHTML = originalText;
            btn.style.background = '';
          }
        }, 4000);
      }, 800);
    });
  });

  // Notification Toast Helper
  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.style.cssText = 'position:fixed;bottom:90px;right:30px;background:#0d1b3e;color:#fff;padding:16px 24px;border-radius:14px;box-shadow:0 15px 35px rgba(0,0,0,0.3);z-index:10000;font-weight:600;font-size:0.95rem;display:flex;align-items:center;gap:12px;border:1px solid #7a4fbf;opacity:0;transform:translateY(20px);transition:all 0.3s ease;';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<i class="fas fa-check-circle" style="color:#d92638;font-size:1.2rem"></i> ' + msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 4000);
  }

});