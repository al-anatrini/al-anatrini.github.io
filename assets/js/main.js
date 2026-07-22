// =====================================================
// GENERATIVE SYSTEM - C + E + A
// =====================================================

// OPTION E: Global Subtle Noise (per-session variations) - ENHANCED
function applyGenerativeNoise() {
  // Only apply once per session
  if (sessionStorage.getItem('generativeNoiseApplied')) return;

  // Random hue rotation: ±6 degrees (doubled from ±3)
  const hueShift = (Math.random() * 12) - 6;  // -6 to +6

  // Random grain opacity: 0.010-0.022 (wider range, more visible)
  const grainOpacity = 0.010 + (Math.random() * 0.012);

  // Apply to body
  document.body.style.filter = `hue-rotate(${hueShift}deg)`;

  // Apply to grain overlay
  const grain = document.querySelector('.grain-overlay');
  if (grain) {
    grain.style.opacity = grainOpacity;
  }

  sessionStorage.setItem('generativeNoiseApplied', 'true');
  console.log(`🎨 Generative atmosphere: hue ${hueShift.toFixed(1)}°, grain ${grainOpacity.toFixed(3)}`);
}

// OPTION A: Hero Title Typography Variations - ENHANCED
function applyHeroTypographyVariations() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  // Get all words in the title
  const words = heroTitle.querySelectorAll('.title-line span');

  words.forEach((word, index) => {
    // Random letter spacing: -0.01em to -0.06em (wider range)
    const letterSpacing = -0.01 - (Math.random() * 0.05);  // -0.01 to -0.06

    // Vertical offset: ±4px (doubled from ±2px)
    const verticalShift = (Math.random() * 8) - 4;  // -4 to +4

    // Font size variation: ±0.5rem (increased from ±0.3rem)
    const sizeVariation = (Math.random() * 1) - 0.5;  // -0.5 to +0.5

    word.style.letterSpacing = `${letterSpacing}em`;
    word.style.transform = `translateY(${verticalShift}px)`;
    word.style.fontSize = `calc(1em + ${sizeVariation}rem)`;
  });

  console.log(`✍️ Generative signature applied`);
}

// OPTION C: Spatial Choreography - ENHANCED (more dramatic)
function applyWorkLayoutChoreography() {
  const workDetail = document.querySelector('.work-detail');
  if (!workDetail) return;

  // Select random layout (1-5)
  const layoutVariant = Math.floor(Math.random() * 5) + 1;
  workDetail.setAttribute('data-layout', layoutVariant);

  console.log(`📐 Spatial choreography: Layout ${layoutVariant}/5`);
}

// Subtle scroll reveal (fade-up on enter). Respects reduced-motion; skips print/portfolio.
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const selector = '.reveal-row, .research-thread, .pub-group, .now-item, .work-content .work-section, .work-content .credits-section';
  const items = Array.from(document.querySelectorAll(selector));
  if (!items.length) return;

  items.forEach((el) => el.classList.add('reveal-init'));

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  items.forEach((el) => io.observe(el));
});

// "+" menu overlay with ARIA support
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  if (!navToggle || !navOverlay) return;

  const setOpen = (open) => {
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navOverlay.classList.toggle('is-open', open);
    navOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('nav-open', open);
  };

  navToggle.addEventListener('click', () => {
    setOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  // Choosing a destination always closes the overlay first, so the open state
  // never survives a same-URL click or a slow navigation.
  navOverlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Click on the empty overlay backdrop closes it
  navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) setOpen(false);
  });

  // Escape closes and returns focus to the toggle
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      navToggle.focus();
    }
  });

  // Always land on a closed, unlocked menu — including bfcache restores
  // (Back/Forward), which otherwise leave the overlay open and body scroll
  // locked, freezing the page until a manual reload.
  window.addEventListener('pageshow', () => setOpen(false));
});

// Scroll animations - DISABLED for work-item (causes flickering and conflicts)
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // ONLY animate .work-card, NOT .work-item (causes conflicts)
  const animatedElements = document.querySelectorAll('.work-card');
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s`;
    observer.observe(el);
  });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add loading states for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    if (!img.complete) {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s';
    }
  });
});

// Video lazy loading
document.addEventListener('DOMContentLoaded', () => {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          videoObserver.unobserve(iframe);
        }
      }
    });
  }, {
    rootMargin: '200px'
  });

  document.querySelectorAll('iframe[data-src]').forEach(iframe => {
    videoObserver.observe(iframe);
  });
});

// Parallax effect on hero section
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = hero.querySelectorAll('.hero-float');
      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.2);
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
});

// Add active state to current nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    link.classList.remove('active');

    if (linkPath === currentPath ||
        (currentPath.includes('/works') && linkPath.includes('/works')) ||
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
});

// Sticky navigation scroll detection
document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.querySelector('.main-nav');

  if (mainNav) {
    let lastScroll = 0;

    const handleNavScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    };

    // Debounce scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(handleNavScroll);
    });

    handleNavScroll(); // Check on load
  }
});

// Back to top button
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    const handleBackToTopVisibility = () => {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };

    // Debounce scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(handleBackToTopVisibility);
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    handleBackToTopVisibility(); // Check on load
  }
});

// Enhanced lazy loading with .loaded class
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window && lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Add loaded class when image actually loads
          if (img.complete) {
            img.classList.add('loaded');
          } else {
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            });
          }

          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => img.classList.add('loaded'));
  }
});

// Fade-in animations for elements with .fade-in class
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  }
});

// Work page: group Specifications + Credits into one compact side colophon
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.work-content');
  if (!content) return;

  const sections = Array.from(content.querySelectorAll('.work-section'));
  const specsSection = sections.find((s) => s.querySelector('.tech-specs'));
  const credits = content.querySelector('.credits-section');
  if (!specsSection && !credits) return;

  const colophon = document.createElement('aside');
  colophon.className = 'work-colophon';
  content.insertBefore(colophon, specsSection || credits);
  if (specsSection) colophon.appendChild(specsSection);
  if (credits) colophon.appendChild(credits);
});

// Console easter egg
console.log('%c✦ Alessandro Anatrini ✦', 'color: #d4af37; font-size: 24px; font-weight: bold; font-family: serif;');
console.log('%cComposer & Computational Artist', 'color: #9d8b7a; font-size: 14px; font-family: serif; font-style: italic;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #d4af37;');
console.log('%cWebsite built with modern web standards', 'color: #f5e6d3; font-size: 12px;');
console.log('%c✦ info@anatrini.com', 'color: #d4af37; font-size: 12px;');
