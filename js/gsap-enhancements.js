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
    const calcSlider = document.getElementById('calc-budget');
    if (!calcSlider) return;

    const targets = {
      invisible: document.getElementById('calc-invisible'),
      fraud: document.getElementById('calc-fraud'),
      total: document.getElementById('calc-total'),
      hours: document.getElementById('calc-hours'),
    };

    const tweens = {};
    Object.entries(targets).forEach(([key, el]) => {
      if (!el) return;
      tweens[key] = { el, current: 0 };
    });

    window.__gsapAnimNum = (el, target, prefix, suffix) => {
      const key = Object.keys(targets).find(k => targets[k] === el);
      if (!key || !tweens[key]) return;

      const obj = tweens[key];
      gsap.to(obj, {
        current: target,
        duration: duration,
        ease: 'power2.out',
        overwrite: true,
        onUpdate: () => {
          el.textContent = prefix + Math.round(obj.current).toLocaleString('pt-BR') + suffix;
        },
      });
    };
  }

  function initPricingToggle() {
    const periodBtns = document.querySelectorAll('.period-btn');
    const cards = document.querySelectorAll('.p-card');
    if (!periodBtns.length || !cards.length) return;

    periodBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        gsap.fromTo(cards,
          { scale: 1 },
          {
            scale: 1.015,
            duration: 0.15,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
            stagger: 0.05,
          }
        );
      });
    });
  }

  function initParallaxOrbs(duration) {
    const orbs = document.querySelectorAll('.hero-mesh div');
    if (!orbs.length) return;

    const factors = [0.02, -0.015, 0.01];

    const orbTweens = Array.from(orbs).map((orb, i) => {
      const f = factors[i] || 0.01;
      return {
        xTo: gsap.quickTo(orb, 'x', { duration: duration, ease: 'power3.out' }),
        yTo: gsap.quickTo(orb, 'y', { duration: duration, ease: 'power3.out' }),
        factor: f,
      };
    });

    document.addEventListener('mousemove', e => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;

      orbTweens.forEach(({ xTo, yTo, factor }) => {
        xTo(mx * factor * 100);
        yTo(my * factor * 100);
      });
    }, { passive: true });
  }

  function initCardTilt(duration) {
    const cards = document.querySelectorAll('.p-card');
    if (!cards.length) return;

    const maxTilt = 6;

    cards.forEach(card => {
      const rotateXTo = gsap.quickTo(card, 'rotateX', { duration: duration, ease: 'power2.out' });
      const rotateYTo = gsap.quickTo(card, 'rotateY', { duration: duration, ease: 'power2.out' });

      card.addEventListener('mousemove', e => {
        const cardRect = card.getBoundingClientRect();
        const x = (e.clientX - cardRect.left) / cardRect.width;
        const y = (e.clientY - cardRect.top) / cardRect.height;
        rotateXTo((0.5 - y) * maxTilt);
        rotateYTo((x - 0.5) * maxTilt);
      });

      card.addEventListener('mouseleave', () => {
        rotateXTo(0);
        rotateYTo(0);
      });
    });
  }

  function initGuaranteeReveal(dur) {
    const section = document.querySelector('.guarantee');
    if (!section) return;

    const shield = section.querySelector('.guarantee-shield');
    const badge = section.querySelector('.guarantee-badge');
    const pillars = section.querySelectorAll('.guarantee-pillar');

    if (shield) {
      gsap.from(shield, {
        scale: 0.8,
        opacity: 0,
        duration: dur.guaranteeShield,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: shield,
          start: 'top 85%',
          once: true,
        },
      });
    }

    if (badge) {
      gsap.from(badge, {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: badge,
          start: 'top 85%',
          once: true,
        },
      });
    }

    if (pillars.length) {
      gsap.from(pillars, {
        y: 20,
        opacity: 0,
        duration: dur.guaranteeItems,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: pillars[0].closest('.guarantee-pillars') || pillars[0],
          start: 'top 85%',
          once: true,
        },
      });
    }
  }

  function initBeforeAfterReveal(dur) {
    const grid = document.querySelector('.ba-grid');
    if (!grid) return;

    const beforeCard = grid.querySelector('.ba-card--before');
    const afterCard = grid.querySelector('.ba-card--after');

    if (beforeCard && afterCard) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          once: true,
        },
      });

      tl.from(beforeCard, {
        x: -30,
        opacity: 0,
        duration: dur.baCard,
        ease: 'power3.out',
      });

      tl.from(afterCard, {
        x: 30,
        opacity: 0,
        duration: dur.baCard,
        ease: 'power3.out',
      }, '+=0.2');
    }
  }
})();
