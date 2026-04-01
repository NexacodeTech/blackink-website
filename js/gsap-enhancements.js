// ══════════════════════════════════════════════════════════
// GSAP Enhancements — BlackInk Landing Page
// Fase 1: Foundation
// ══════════════════════════════════════════════════════════
(() => {
  'use strict';

  // Guard: se GSAP não carregou, sai silenciosamente
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Acessibilidade: respeitar prefers-reduced-motion ──
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Com reduced motion: apenas counters com duração mínima, nada mais
    initCounters(0.01);
    return;
  }

  // ── Desktop vs Mobile ──
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // Durações adaptativas
  const dur = {
    counter: isDesktop ? 2 : 1.5,
    roiSmooth: isDesktop ? 0.6 : 0.4,
    cardTilt: 0.5,
    orbParallax: 0.8,
    guaranteeShield: 0.7,
    guaranteeItems: 0.5,
    baCard: 0.8,
  };

  // ── Inicializar módulos ──
  initCounters(dur.counter);
  initRoiCalculator(dur.roiSmooth);
  initPricingToggle();
  initGuaranteeReveal(dur);
  initBeforeAfterReveal(dur);

  if (isFinePointer) {
    initParallaxOrbs(dur.orbParallax);
    initCardTilt(dur.cardTilt);
  }

  // ══════════════════════════════════════════════════════════
  // MÓDULOS
  // ══════════════════════════════════════════════════════════

  function initCounters(duration) {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    counters.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';

      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: duration,
        ease: 'power4.out',
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el.closest('.stat, .trust-item, .problem-card') || el,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = prefix + Math.round(obj.val) + suffix;
        },
      });
    });
  }

  function initRoiCalculator(duration) {
    // Task 4
  }

  function initPricingToggle() {
    // Task 5
  }

  function initParallaxOrbs(duration) {
    // Task 6
  }

  function initCardTilt(duration) {
    // Task 7
  }

  function initGuaranteeReveal(dur) {
    // Task 8
  }

  function initBeforeAfterReveal(dur) {
    // Task 9
  }
})();
