/* ==========================================================================
   MUZUS.JS - CASE STUDY: "IS HET ÉCHT ZO STOER?" INTERACTIE & CUSTOM CURSOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CUSTOM CURSOR LOGICA
     ========================================================================== */
  const cursor = document.getElementById('customCursor');

  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll(
      'a, button, .interactive, .back-text-btn, .primary-home-btn, .hero-media-frame, .muzus-frame, .concept-visual-frame'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--active');
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--active');
      });
    });
  }

  /* ==========================================================================
     2. SCROLL REVEAL ANIMATIE VOOR EDITORIAL SECTIES
     ========================================================================== */
  const animatedSections = document.querySelectorAll('.scroll-animate');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    animatedSections.forEach((section) => observer.observe(section));
  } else {
    animatedSections.forEach((section) => section.classList.add('in-view'));
  }

  /* ==========================================================================
     3. NETTE PLACEHOLDER FALLBACK ALS AFBEELDINGEN NOG NIET BESTAAN
     ========================================================================== */
  const conceptImages = document.querySelectorAll('.concept-img');
  conceptImages.forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
    // Check direct of de afbeelding al gefaald is
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
    }
  });

});

