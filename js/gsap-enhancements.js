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
  initHeroTimeline();
  initHeroTextEnhancement();
  initCounters(dur.counter);
  initRoiCalculator(dur.roiSmooth);
  initPricingToggle();
  initGuaranteeReveal(dur);
  initBeforeAfterReveal(dur);

  if (isFinePointer) {
    initParallaxOrbs(dur.orbParallax);
    initCardTilt(dur.cardTilt);
    initCursorGlow();
  }

  if (isDesktop) {
    initSectionParallax();
  }

  initHorizontalScroll();

  initDividerAnimations();
  initMockupInternals();

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
      }, '+=0.5');
    }
  }

  // ══════════════════════════════════════════════════════════
  // HERO TIMELINE — Fase 2
  // Orquestra entrada sequencial dos elementos do hero via GSAP
  // ══════════════════════════════════════════════════════════

  function initHeroTimeline() {
    window.__gsapReady = true;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const logo   = hero.querySelector('.hero-logo');
    const badge  = hero.querySelector('.hero-badge');
    const line   = hero.querySelector('.hero-line');
    const sub    = hero.querySelector('.hero-sub');
    const ctas   = hero.querySelector('.hero-ctas');
    const trust  = hero.querySelector('.hero-trust');
    const scroll = hero.querySelector('.hero-scroll');

    const tl = gsap.timeline({
      delay: 0.3, // compressed — match loader dismiss timing
      defaults: { ease: 'power3.out' },
    });

    // t=0.0s → Logo (scale + fade)
    if (logo) {
      tl.fromTo(logo,
        { opacity: 0, scale: 0.9, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        0
      );
    }

    // t=0.2s → Badge (slide-down + fade)
    if (badge) {
      tl.fromTo(badge,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      );
    }

    // Title characters (.ch) are animated by the vanilla split system.
    // The existing JS adds .go class at ~300ms after loader, which
    // works in concert with this timeline since both fire post-loader.

    // t=0.4s → Hero line (scaleX reveal)
    if (line) {
      tl.fromTo(line,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.6, transformOrigin: 'left center' },
        0.4
      );
    }

    // t=0.6s → Subtitle
    if (sub) {
      tl.fromTo(sub,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.6
      );
    }

    // t=0.8s → CTA buttons
    if (ctas) {
      tl.fromTo(ctas,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.8
      );
    }

    // t=1.0s → Trust badge
    if (trust) {
      tl.fromTo(trust,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        1.0
      );
    }

    // t=1.3s → Scroll indicator
    if (scroll) {
      tl.fromTo(scroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        1.3
      );
    }
  }

  // ══════════════════════════════════════════════════════════
  // Fase 2 — Parallax por Seção (desktop only)
  // ══════════════════════════════════════════════════════════

  function initSectionParallax() {
    // Mockups with subtle parallax — move slower than scroll
    document.querySelectorAll('.mockup:not(.features-hscroll .mockup)').forEach(mockup => {
      gsap.to(mockup, {
        y: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: mockup.closest('.section') || mockup.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });

    // CTA final section glow parallax
    const ctaFinal = document.querySelector('.cta-final');
    if (ctaFinal) {
      const ctaGlow = ctaFinal.querySelector('.cta-orb');
      if (ctaGlow) {
        gsap.to(ctaGlow, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: ctaFinal,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }
  }

  // ══════════════════════════════════════════════════════════
  // Fase 2 — Section Dividers Animados
  // ══════════════════════════════════════════════════════════

  function initDividerAnimations() {
    const seps = document.querySelectorAll('.sep');
    if (!seps.length) return;

    seps.forEach(sep => {
      gsap.from(sep, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sep,
          start: 'top 90%',
          once: true,
        },
      });
    });
  }

  // ══════════════════════════════════════════════════════════
  // Fase 2 — Mockup Internal Animations
  // ══════════════════════════════════════════════════════════

  function initMockupInternals() {
    // Search Terms mockup — ROAS bars fill progressively
    const termRows = document.querySelectorAll('.term-roas-bar-fill');
    if (termRows.length) {
      termRows.forEach(bar => {
        const targetWidth = bar.style.width || '0%';
        // Set initial width to 0, animate to target
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar.closest('.mockup') || bar,
              start: 'top 75%',
              once: true,
            },
          }
        );
      });
    }

    // Dashboard mockup — sparklines draw
    const sparklines = document.querySelectorAll('.ctrl-sparkline polyline, .ctrl-sparkline path');
    if (sparklines.length) {
      sparklines.forEach(line => {
        const length = line.getTotalLength ? line.getTotalLength() : 0;
        if (length > 0) {
          gsap.fromTo(line,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: line.closest('.mockup') || line,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }
      });
    }
  }

  // ══════════════════════════════════════════════════════════
  // Fase 4 — Hero Text Split 3D Enhancement
  // Override CSS transitions com GSAP rotateX para reveal 3D
  // ══════════════════════════════════════════════════════════

  function initHeroTextEnhancement() {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return;

    const chars = heroTitle.querySelectorAll('.ch');
    if (!chars.length) return;

    // Remove CSS transitions — GSAP takes over
    chars.forEach(ch => {
      ch.style.transition = 'none';
    });

    // Wait for the hero timeline to start (matches the title area ~0.3s)
    gsap.from(chars, {
      opacity: 0,
      rotateX: 80,
      y: 20,
      transformOrigin: 'bottom center',
      duration: 0.6,
      ease: 'back.out(1.2)',
      stagger: 0.015,
      delay: 0.5, // compressed — after loader dismiss + logo/badge
    });
  }

  // ══════════════════════════════════════════════════════════
  // Fase 4 — Cursor Glow Bioluminescente (desktop only)
  // Radial gradient segue o mouse via gsap.quickTo()
  // ══════════════════════════════════════════════════════════

  function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const xTo = gsap.quickTo(glow, 'left', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(glow, 'top', { duration: 0.6, ease: 'power3.out' });

    // Fade in on first mouse move
    let shown = false;

    document.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);

      if (!shown) {
        gsap.to(glow, { opacity: 1, duration: 0.5 });
        shown = true;
      }
    }, { passive: true });

    // Hide when mouse leaves window
    document.addEventListener('mouseleave', () => {
      gsap.to(glow, { opacity: 0, duration: 0.3 });
      shown = false;
    });

    document.addEventListener('mouseenter', () => {
      gsap.to(glow, { opacity: 1, duration: 0.3 });
      shown = true;
    });
  }

  // ══════════════════════════════════════════════════════════
  // Fase 3 — Horizontal Scroll (desktop only)
  // ══════════════════════════════════════════════════════════

  function initHorizontalScroll() {
    const container = document.querySelector('.features-hscroll');
    if (!container) return;

    const nav = document.getElementById('hscroll-nav');
    const dots = nav ? nav.querySelectorAll('.hscroll-dot') : [];

    gsap.matchMedia({
      '(min-width: 901px)': () => {
        const sections = gsap.utils.toArray('.features-hscroll > section');
        if (sections.length < 2) return;

        const tween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => '+=' + (container.offsetWidth * (sections.length - 1)),
            onUpdate: (self) => {
              if (!dots.length) return;
              const progress = self.progress;
              const activeIndex = Math.round(progress * (sections.length - 1));
              dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
              });
              // Update counter
              const counter = document.getElementById('hscroll-counter');
              if (counter) counter.textContent = (activeIndex + 1) + ' / ' + sections.length;
            },
            onToggle: (self) => {
              if (nav) nav.classList.toggle('active', self.isActive);
            },
          },
        });

        // Click dots to scroll to panel
        dots.forEach((dot, i) => {
          dot.addEventListener('click', () => {
            const scrollTarget = tween.scrollTrigger.start +
              (tween.scrollTrigger.end - tween.scrollTrigger.start) * (i / (sections.length - 1));
            window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
          });
        });

        // Keyboard navigation for dots
        dots.forEach((dot, i) => {
          dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              dot.click();
            }
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
              e.preventDefault();
              const next = dots[Math.min(i + 1, dots.length - 1)];
              if (next) { next.focus(); next.click(); }
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
              e.preventDefault();
              const prev = dots[Math.max(i - 1, 0)];
              if (prev) { prev.focus(); prev.click(); }
            }
          });
        });

        return () => {
          // gsap.matchMedia handles cleanup automatically
        };
      },
    });
  }
})();
