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
    // Com reduced motion não registramos nenhuma animação. O CSS já entrega
    // o estado final de tudo (ver bloco prefers-reduced-motion no index.html).
    return;
  }

  // ── Desktop vs Mobile ──
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // Durações adaptativas
  const dur = {
    counter: isDesktop ? 2 : 1.5,
    orbParallax: 0.8,
    baCard: 0.8,
  };

  // ── Inicializar módulos ──
  // O hero NÃO é animado aqui: os elementos têm animação CSS com fill:both, que vence
  // style inline na cascata — qualquer tween do GSAP sobre eles seria inerte. Quem
  // controla o hero é o CSS (delays em .hero-sub/.hero-ctas/.hero-trust). O H1
  // nasce visível — sem stagger por linha.

  if (isFinePointer) {
    initParallaxOrbs(dur.orbParallax);
    initCursorGlow();
  }

  if (isDesktop) {
    initSectionParallax();
  }


  initDividerAnimations();

  // ══════════════════════════════════════════════════════════
  // MÓDULOS
  // ══════════════════════════════════════════════════════════


  // initPricingToggle/initCardTilt removidos — dependiam de .p-card, que saiu do HTML.
  // A calculadora de ROI é animada pelo _vanillaAnimNum do index.html.
  // Havia aqui um initRoiCalculator que sobrescrevia window.__gsapAnimNum e fazia
  // `return` silencioso — os 4 valores de perda ficavam travados em "R$ 0" para
  // qualquer posição do slider. Removido. Não reintroduzir sem testar os extremos.

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


  // ══════════════════════════════════════════════════════════
  // HERO TIMELINE — Fase 2
  // Orquestra entrada sequencial dos elementos do hero via GSAP
  // ══════════════════════════════════════════════════════════


  // ══════════════════════════════════════════════════════════
  // Fase 2 — Parallax por Seção (desktop only)
  // ══════════════════════════════════════════════════════════

  function initSectionParallax() {
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
      gsap.set(sep, { scaleX: 0, transformOrigin: 'left center' });
      gsap.to(sep, {
        scaleX: 1,
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


  // ══════════════════════════════════════════════════════════
  // Fase 4 — Hero Text Split 3D Enhancement
  // Override CSS transitions com GSAP rotateX para reveal 3D
  // ══════════════════════════════════════════════════════════



  // ══════════════════════════════════════════════════════════
  // Fase 4 — Cursor Glow Bioluminescente (desktop only)
  // Radial gradient segue o mouse via gsap.quickTo()
  // ══════════════════════════════════════════════════════════

  function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const xTo = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3.out' });

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

})();
