/**
 * POKJA Perubahan Iklim NTT — Roadmap Dashboard
 * Main JavaScript Module v2.1
 */

(function () {
  'use strict';

  // ===== DOM REFERENCES =====
  const navTabs = document.getElementById('navTabs');
  const backToTopBtn = document.getElementById('backToTop');

  // ===== TAB NAVIGATION =====
  function initTabs() {
    if (!navTabs) return;

    navTabs.addEventListener('click', function (e) {
      const tab = e.target.closest('.nav-tab');
      if (!tab) return;

      const tabId = tab.dataset.tab;
      if (!tabId) return;

      // Update active tab button
      navTabs.querySelectorAll('.nav-tab').forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update active panel
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.remove('active');
      });

      var panel = document.getElementById('tab-' + tabId);
      if (panel) {
        panel.classList.add('active');
      }

      // Smooth scroll to nav
      var navRect = navTabs.getBoundingClientRect();
      var scrollTarget = window.scrollY + navRect.top - 10;
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    });

    // Keyboard navigation for tabs
    navTabs.addEventListener('keydown', function (e) {
      var tabs = Array.from(navTabs.querySelectorAll('.nav-tab'));
      var currentIndex = tabs.indexOf(document.activeElement);

      if (currentIndex === -1) return;

      var newIndex = -1;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = tabs.length - 1;
      }

      if (newIndex >= 0) {
        tabs[newIndex].focus();
        tabs[newIndex].click();
      }
    });
  }

  // ===== BACK TO TOP =====
  function initBackToTop() {
    if (!backToTopBtn) return;

    var scrollThreshold = 400;
    var ticking = false;

    function updateVisibility() {
      if (window.scrollY > scrollThreshold) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== DEEP LINKING (optional: open tab from URL hash) =====
  function initDeepLinking() {
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var targetTab = navTabs.querySelector('[data-tab="' + hash + '"]');
      if (targetTab) {
        targetTab.click();
      }
    }
  }

  // ===== PRINT ALL TABS =====
  function initPrintSupport() {
    // Before print: show all tabs
    window.addEventListener('beforeprint', function () {
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.style.display = 'block';
      });
    });

    // After print: restore active tab
    window.addEventListener('afterprint', function () {
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        if (!p.classList.contains('active')) {
          p.style.display = '';
        }
      });
    });
  }

  // ===== INIT =====
  function init() {
    initTabs();
    initBackToTop();
    initDeepLinking();
    initPrintSupport();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();