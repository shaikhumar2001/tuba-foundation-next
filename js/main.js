/**
 * Tuba Foundation — Clean Vanilla JavaScript
 * Zero external frameworks. Accessible, modular, performant.
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Mobile Navigation Toggle
  // ---------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  const navBackdrop = document.getElementById('nav-backdrop');

  function openNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    if (navBackdrop) navBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    if (navBackdrop) navBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function toggleNav() {
    const isExpanded = navToggle && navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeNav();
    } else {
      openNav();
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeNav);
  }

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
    }
  });

  // Close navigation menu when a link inside is clicked
  if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Header Shadow on Scroll
  // ---------------------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('site-header--scrolled');
      } else {
        siteHeader.classList.remove('site-header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
})();
