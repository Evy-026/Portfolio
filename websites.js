/* ==========================================================================
   WEBSITES.JS - BROWSER TAB INTERACTIE & CUSTOM CURSOR
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
      'a, button, .interactive, .browser-tab, .browser-back-link, .live-project-link'
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
     2. BROWSER TABS INTERACTIE
     ========================================================================== */
  const tabs = document.querySelectorAll('.browser-tab');
  const panels = document.querySelectorAll('.tab-panel');
  const addressUrl = document.getElementById('addressUrl');

  const tabUrls = {
    'tab-1': 'https://mijnportfolio.nl/projecten/web-app',
    'tab-2': 'https://mijnportfolio.nl/projecten/portfolio-studio'
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTabId = tab.getAttribute('data-tab');

      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => {
        panel.classList.remove('active');
      });

      const targetPanel = document.getElementById(`project-${targetTabId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      if (addressUrl && tabUrls[targetTabId]) {
        addressUrl.textContent = tabUrls[targetTabId];
      }
    });
  });

});
