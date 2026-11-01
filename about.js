/* ==========================================================================
   ABOUT.JS - SCROLL ANIMATIES & INTERACTIE
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
      'a, button, .interactive, .back-text-btn, .text-contact-link, .primary-email-btn, .secondary-home-btn'
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
     2. INTERSECTION OBSERVER VOOR SCROLL ANIMATIES
     ========================================================================== */
  const animatedSections = document.querySelectorAll('.scroll-animate');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  } else {
    animatedSections.forEach((section) => {
      section.classList.add('in-view');
    });
  }

  /* ==========================================================================
     3. HERO SPLIT-SCREEN SUBTIELE SCROLL FADE
     ========================================================================== */
  const heroSection = document.getElementById('heroSection');

  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos < 600) {
        const opacityVal = 1 - (scrollPos / 600) * 0.4;
        const translateYVal = (scrollPos / 600) * 15;
        heroSection.style.opacity = Math.max(opacityVal, 0.6);
        heroSection.style.transform = `translateY(${translateYVal}px)`;
      }
    });
  }

});
