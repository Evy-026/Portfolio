/* ==========================================================================
   POSTER.JS - POSTER PAGINA INTERACTIE & CUSTOM CURSOR
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
      'a, button, .interactive, .back-text-btn, .hero-poster-frame, .detail-media-frame'
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

});
