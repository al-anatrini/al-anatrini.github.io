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

// Custom cursor follower
document.addEventListener('DOMContentLoaded', () => {
  // Generative baroque effects disabled: the Pietra palette is controlled/deliberate.
  // (applyGenerativeNoise / applyHeroTypographyVariations / applyWorkLayoutChoreography)
  const cursor = document.querySelector('.cursor-follower');
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const speed = 0.15;

  if (cursor && window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
      // Use clientX/clientY for fixed positioning (viewport coordinates)
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    function animateCursor() {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Enlarge cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-card, .work-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }
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

// Console easter egg
console.log('%c✦ Alessandro Anatrini ✦', 'color: #d4af37; font-size: 24px; font-weight: bold; font-family: serif;');
console.log('%cComposer & Computational Artist', 'color: #9d8b7a; font-size: 14px; font-family: serif; font-style: italic;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #d4af37;');
console.log('%cWebsite built with modern web standards', 'color: #f5e6d3; font-size: 12px;');
console.log('%c✦ info@anatrini.com', 'color: #d4af37; font-size: 12px;');
