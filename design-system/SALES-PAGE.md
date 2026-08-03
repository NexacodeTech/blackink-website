# Abyss Design System — Sales Page Patterns

> 7 complete page sections with copy-paste HTML + CSS.
> Requires [`../css/abyss-tokens.css`](../css/abyss-tokens.css).
> Components: [COMPONENTS.md](COMPONENTS.md) | Tokens: [TOKENS.md](TOKENS.md)

---

## Shared Page Styles

Include this CSS alongside `abyss-tokens.css` for all sections below:

```css
/* ── Page Reset & Base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: var(--font-system);
    color: var(--text-primary);
    background: var(--abyss-depth-abyss);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

a { color: var(--text-link); text-decoration: none; }
a:hover { text-decoration: underline; }

img { max-width: 100%; display: block; }

/* ── Layout Containers ── */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
}

.section {
    padding: var(--space-xxl) 0;
    position: relative;
}

@media (min-width: 768px) {
    .section { padding: 80px 0; }
}

/* ── Grid ── */
.grid-2 { display: grid; grid-template-columns: 1fr; gap: var(--space-lg); }
.grid-3 { display: grid; grid-template-columns: 1fr; gap: var(--space-lg); }

@media (min-width: 768px) {
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
}

/* ── Section Title Block ── */
.section-header {
    text-align: center;
    margin-bottom: var(--space-xxl);
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
}

/* ── Gradient Text ── */
.gradient-text {
    background: linear-gradient(135deg, var(--text-primary), var(--accent-primary), var(--accent-tertiary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## 1. Hero Section

Full-screen abyss background with gradient headline, CTAs, and stats.

### HTML

```html
<section class="hero">
    <div class="hero__bg">
        <div class="hero__gradient"></div>
        <div class="hero__mist"></div>
        <div class="hero__particle" style="left: 15%;"></div>
        <div class="hero__particle" style="left: 35%;"></div>
        <div class="hero__particle" style="left: 55%;"></div>
        <div class="hero__particle" style="left: 75%;"></div>
    </div>

    <div class="container hero__content">
        <span class="bt bt-label-upper animate-fade-in" style="color: var(--accent-tertiary);">
            Blackink Performance Marketing
        </span>

        <h1 class="bt bt-display hero__title gradient-text animate-fade-in-up delay-1">
            Track Every Conversion.<br>Scale What Works.
        </h1>

        <p class="bt bt-body hero__subtitle animate-fade-in-up delay-2" style="color: var(--text-secondary);">
            The ultra-premium tracking platform that gives you complete visibility
            into your marketing performance. Real-time data, zero guesswork.
        </p>

        <div class="hero__ctas animate-fade-in-up delay-3">
            <button class="b-btn b-btn--primary b-btn--large">
                Start Free Trial
            </button>
            <button class="b-btn b-btn--outline b-btn--large">
                See Demo
            </button>
        </div>

        <div class="hero__stats animate-fade-in-up delay-4">
            <div class="hero__stat">
                <span class="bt bt-metric-lg" style="color: var(--accent-primary);">99.9%</span>
                <span class="bt bt-caption-md">Uptime</span>
            </div>
            <div class="hero__stat">
                <span class="bt bt-metric-lg" style="color: var(--accent-tertiary);">&lt;50ms</span>
                <span class="bt bt-caption-md">Latency</span>
            </div>
            <div class="hero__stat">
                <span class="bt bt-metric-lg" style="color: var(--text-gold);">10M+</span>
                <span class="bt bt-caption-md">Events/day</span>
            </div>
        </div>
    </div>
</section>
```

### CSS

```css
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

/* Background layers */
.hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
}
.hero__gradient {
    position: absolute;
    inset: 0;
    background: var(--abyss-depth-gradient);
}
.hero__mist {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 15, 35, 0.25) 65%, rgba(0, 8, 20, 0.4) 100%);
}

/* Particles */
.hero__particle {
    position: absolute;
    width: var(--particle-size);
    height: var(--particle-size);
    border-radius: 50%;
    background: var(--particle-color);
    bottom: -10px;
    animation:
        float-up var(--duration-particle) linear infinite,
        glow-pulse var(--duration-glow-cycle) ease-in-out infinite;
    pointer-events: none;
}
.hero__particle:nth-child(3) { animation-delay: 0s, 0s; }
.hero__particle:nth-child(4) { animation-delay: -15s, -2.5s; }
.hero__particle:nth-child(5) { animation-delay: -30s, -5s; }
.hero__particle:nth-child(6) { animation-delay: -45s, -7.5s; }

/* Content */
.hero__content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 120px 0 80px;
}

.hero__title {
    margin: var(--space-lg) auto;
    max-width: 800px;
}

.hero__subtitle {
    max-width: 560px;
    margin: 0 auto var(--space-xl);
}

/* CTAs */
.hero__ctas {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
}

/* Stats row */
.hero__stats {
    display: flex;
    justify-content: center;
    gap: var(--space-xxl);
    margin-top: var(--space-xxl);
}

.hero__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
}

@media (max-width: 767px) {
    .hero__stats {
        gap: var(--space-xl);
    }
    .hero__content {
        padding: 100px 0 60px;
    }
}
```

---

## 2. Features Grid

3-column glass cards with ethereal glow icons.

### HTML

```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <span class="bt bt-label-upper" style="color: var(--accent-tertiary);">Features</span>
            <h2 class="bt bt-h1 gradient-text" style="margin-top: var(--space-sm);">
                Everything You Need to Win
            </h2>
            <p class="bt bt-body" style="color: var(--text-secondary); margin-top: var(--space-md);">
                Built for performance marketers who demand precision and speed.
            </p>
        </div>

        <div class="grid-3">
            <!-- Feature 1 -->
            <div class="b-card animate-fade-in-up delay-1">
                <div class="b-card__content" style="text-align: center;">
                    <div class="b-glass-icon" style="--icon-color: 100, 180, 255; --icon-size: 48px; margin: 0 auto var(--space-lg);">
                        <svg width="28" height="28" fill="rgba(100, 180, 255, 1)" viewBox="0 0 24 24">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                    </div>
                    <h3 class="bt bt-h3">Real-Time Tracking</h3>
                    <p class="bt bt-body-sm" style="margin-top: var(--space-sm);">
                        Every click, conversion, and event tracked in under 50ms. No sampling, no delays.
                    </p>
                </div>
            </div>

            <!-- Feature 2 -->
            <div class="b-card animate-fade-in-up delay-2">
                <div class="b-card__content" style="text-align: center;">
                    <div class="b-glass-icon" style="--icon-color: 80, 200, 220; --icon-size: 48px; margin: 0 auto var(--space-lg);">
                        <svg width="28" height="28" fill="rgba(80, 200, 220, 1)" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3 class="bt bt-h3">Server-Side Postback</h3>
                    <p class="bt bt-body-sm" style="margin-top: var(--space-sm);">
                        S2S tracking that bypasses ad blockers and browser restrictions. 100% attribution.
                    </p>
                </div>
            </div>

            <!-- Feature 3 -->
            <div class="b-card animate-fade-in-up delay-3">
                <div class="b-card__content" style="text-align: center;">
                    <div class="b-glass-icon" style="--icon-color: 60, 220, 200; --icon-size: 48px; margin: 0 auto var(--space-lg);">
                        <svg width="28" height="28" fill="rgba(60, 220, 200, 1)" viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="rgba(60, 220, 200, 1)" stroke-width="2" fill="none"/>
                        </svg>
                    </div>
                    <h3 class="bt bt-h3">Deep Analytics</h3>
                    <p class="bt bt-body-sm" style="margin-top: var(--space-sm);">
                        Multi-touch attribution, funnel analysis, and ROI insights that actually make sense.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

No additional CSS needed beyond the shared styles and component CSS from [COMPONENTS.md](COMPONENTS.md).

---

## 3. Social Proof / Testimonials

Cards with avatar, quote, and author info.

### HTML

```html
<section class="section" style="background: var(--bg-secondary);">
    <div class="container">
        <div class="section-header">
            <span class="bt bt-label-upper" style="color: var(--accent-primary);">Testimonials</span>
            <h2 class="bt bt-h1" style="margin-top: var(--space-sm);">
                Trusted by Performance Teams
            </h2>
        </div>

        <div class="grid-3">
            <!-- Testimonial 1 -->
            <div class="b-card animate-fade-in-up delay-1">
                <div class="b-card__content">
                    <div class="testimonial__stars" style="margin-bottom: var(--space-md); color: var(--text-gold);">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <p class="bt bt-body" style="font-style: italic; margin-bottom: var(--space-lg);">
                        "Switched from manual UTM tracking to Blackink and our CPA dropped 34% in the first month.
                        The real-time dashboard is incredible."
                    </p>
                    <div class="testimonial__author">
                        <div class="testimonial__avatar" style="background: var(--accent-primary);">
                            <span class="bt bt-button" style="color: var(--color-white);">MR</span>
                        </div>
                        <div>
                            <span class="bt bt-body-md">Marcos Ribeiro</span>
                            <span class="bt bt-caption" style="display: block;">Head of Growth, TechScale</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="b-card animate-fade-in-up delay-2">
                <div class="b-card__content">
                    <div class="testimonial__stars" style="margin-bottom: var(--space-md); color: var(--text-gold);">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <p class="bt bt-body" style="font-style: italic; margin-bottom: var(--space-lg);">
                        "Finally, a tracker that handles our volume without breaking a sweat.
                        10M events per day and still sub-50ms response."
                    </p>
                    <div class="testimonial__author">
                        <div class="testimonial__avatar" style="background: var(--accent-tertiary);">
                            <span class="bt bt-button" style="color: var(--color-white);">AC</span>
                        </div>
                        <div>
                            <span class="bt bt-body-md">Ana Costa</span>
                            <span class="bt bt-caption" style="display: block;">CTO, MediaPulse</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="b-card animate-fade-in-up delay-3">
                <div class="b-card__content">
                    <div class="testimonial__stars" style="margin-bottom: var(--space-md); color: var(--text-gold);">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <p class="bt bt-body" style="font-style: italic; margin-bottom: var(--space-lg);">
                        "The server-side postback integration with Google Ads was seamless.
                        Our ROAS visibility improved overnight."
                    </p>
                    <div class="testimonial__author">
                        <div class="testimonial__avatar" style="background: var(--text-gold);">
                            <span class="bt bt-button" style="color: var(--text-inverse);">LS</span>
                        </div>
                        <div>
                            <span class="bt bt-body-md">Lucas Silva</span>
                            <span class="bt bt-caption" style="display: block;">Performance Lead, AdVenture</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### CSS

```css
.testimonial__author {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.testimonial__avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.testimonial__stars {
    font-size: 16px;
    letter-spacing: 2px;
}
```

---

## 4. Pricing

Real Blackink plans: Raso, Maré, Recife, Abissal (source: landing `index.html`, `cadastro/index.html`).

### Plan Data Reference

| | Free | Raso | Maré | Recife | Abissal |
|---|---|---|---|---|---|
| **Preço** | R$ 0 | R$ 119,99/mês | R$ 399,99/mês | R$ 469,99/mês | R$ 999,99/mês |
| **Duração** | 7 dias | 30 dias | 30 dias | 30 dias | 30 dias |
| **Campanhas ativas** | 1 | 10 | 10 | 10 | Ilimitado |
| **Tracker** | &#10003; | &#10003; | &#10005; | &#10003; | &#10003; |
| **Cloaker** | &#10003; | &#10005; | &#10003; | &#10003; | &#10003; |
| **Contas de anúncio ilimitadas** | — | &#10003; | &#10003; | &#10003; | &#10003; |
| **Rastreamento completo do funil** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Rastreamento iOS 14+** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Métricas do Google em tempo real** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Dashboard completo de métricas** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Funil de métricas completo** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Conversões automáticas no Google Ads** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **URL Builder completo** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Integrações (ClickBank, Buygoods, GuruMidia, MaxWeb, CartPanda)** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Notificações de vendas** | — | &#10003; | &#10003; | &#10003; | &#10003; |
| **App Mobile** | — | &#10003; | &#10003; | &#10003; | &#10003; |
| **Análise de performance das VSL** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Blackink Clone** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Área de membros + tutoriais** | — | &#10003; | &#10005; | &#10003; | &#10003; |
| **Cloaker server-side** | &#10005; | &#10005; | &#10003; | &#10003; | &#10003; |
| **Filtragem de VPNs** | &#10005; | &#10005; | &#10003; | &#10003; | &#10003; |
| **Filtragem de bots** | &#10005; | &#10005; | &#10003; | &#10003; | &#10003; |
| **Suporte prioritário** | &#10005; | &#10005; | &#10005; | &#10005; | &#10003; |
| **Custo campanha extra** | R$ 40 | R$ 40 | R$ 40 | R$ 40 | **R$ 6** |

### HTML

```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <span class="bt bt-label-upper" style="color: var(--accent-primary);">Planos</span>
            <h2 class="bt bt-h1 gradient-text" style="margin-top: var(--space-sm);">
                Escolha o Plano Ideal
            </h2>
            <p class="bt bt-body" style="color: var(--text-secondary); margin-top: var(--space-md);">
                Sem taxas escondidas. Escale conforme cresce.
            </p>
        </div>

        <div class="grid-3 pricing-grid">

            <!-- ═══════════════ RASO ═══════════════ -->
            <div class="b-card pricing-card animate-fade-in-up delay-1">
                <div class="b-card__content">
                    <span class="bt bt-label-upper" style="color: var(--accent-primary);">Raso</span>
                    <p class="bt bt-caption" style="margin-top: var(--space-xs);">Plano Básico</p>

                    <div style="margin: var(--space-lg) 0;">
                        <span class="bt bt-caption">R$</span>
                        <span class="bt bt-display" style="color: var(--text-primary);">149</span>
                        <span class="bt bt-caption">,90/mês</span>
                    </div>

                    <ul class="pricing-features">
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>10</strong> campanhas ativas</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Contas de <strong>anúncio ilimitadas</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Rastreamento completo</strong> do funil</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Rastreamento <strong>iOS 14+</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Métricas do Google</strong> em tempo real</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Dashboard completo</strong> de métricas do funil</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Funil de métricas completo</strong> (Review, topo, fundo de funil etc.)</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Conversões automáticas</strong> no Google Ads</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>URL Builder completo</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Integrações</strong> (ClickBank, Buygoods, GuruMidia, MaxWeb, CartPanda + outras por demanda)</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Notificações</strong> de vendas</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>App Mobile</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Análise de performance das VSL</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Blackink Clone</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Área de membros</strong> com tutoriais completos</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Campanhas extras por <strong>R$ 40,00</strong> cada</li>
                        <li class="bt bt-body-sm pricing-disabled"><span class="pricing-x">&#10005;</span> Cloaker server-side</li>
                        <li class="bt bt-body-sm pricing-disabled"><span class="pricing-x">&#10005;</span> Filtragem de VPNs</li>
                        <li class="bt bt-body-sm pricing-disabled"><span class="pricing-x">&#10005;</span> Filtragem de bots</li>
                    </ul>

                    <button class="b-btn b-btn--outline b-btn--large b-btn--full" style="margin-top: var(--space-xl);">
                        Começar Agora
                    </button>
                </div>
            </div>

            <!-- ═══════════════ RECIFE ═══════════════ -->
            <div class="b-card b-card--elevated pricing-card pricing-card--featured animate-fade-in-up delay-2">
                <div class="b-card__content">
                    <div style="display: flex; align-items: center; gap: var(--space-sm);">
                        <span class="bt bt-label-upper" style="color: var(--accent-primary);">Recife</span>
                        <span class="b-badge b-badge--popular">Mais Popular</span>
                    </div>
                    <p class="bt bt-caption" style="margin-top: var(--space-xs);">Plano Pro</p>

                    <div style="margin: var(--space-lg) 0;">
                        <span class="bt bt-caption">R$</span>
                        <span class="bt bt-display gradient-text">249</span>
                        <span class="bt bt-caption">,99/mês</span>
                    </div>

                    <ul class="pricing-features">
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Tudo do <strong>Raso +</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Cloaker server-side</strong> (safe page / offer page)</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Filtragem de VPNs</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Filtragem de bots</strong> e crawlers</li>
                    </ul>

                    <button class="b-btn b-btn--primary b-btn--large b-btn--full" style="margin-top: var(--space-xl);">
                        Começar Agora
                    </button>
                </div>
            </div>

            <!-- ═══════════════ ABISSAL ═══════════════ -->
            <div class="b-card pricing-card pricing-card--premium animate-fade-in-up delay-3">
                <div class="b-card__content">
                    <div style="display: flex; align-items: center; gap: var(--space-sm);">
                        <span class="bt bt-label-upper" style="color: var(--text-gold);">Abissal</span>
                        <span class="b-badge b-badge--enterprise">Recomendado</span>
                    </div>
                    <p class="bt bt-caption" style="margin-top: var(--space-xs);">Plano Premium</p>

                    <div style="margin: var(--space-lg) 0;">
                        <span class="bt bt-caption">R$</span>
                        <span class="bt bt-display" style="color: var(--text-gold);">399</span>
                        <span class="bt bt-caption">,99/mês</span>
                    </div>

                    <ul class="pricing-features">
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>20</strong> campanhas ativas</li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Tudo do <strong>Recife +</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> <strong>Suporte prioritário</strong></li>
                        <li class="bt bt-body-sm"><span class="pricing-check">&#10003;</span> Campanhas extras por <strong>R$ 6,00</strong> cada</li>
                    </ul>

                    <button class="b-btn b-btn--primary b-btn--large b-btn--full" style="margin-top: var(--space-xl);">
                        Começar Agora
                    </button>
                </div>
            </div>

        </div>
    </div>
</section>
```

### CSS

```css
.pricing-card .b-card__content {
    padding: var(--space-xl);
}

/* Recife — featured card */
.pricing-card--featured {
    border-color: var(--border-accent);
    box-shadow: var(--shadow-card-elevated), var(--shadow-glow);
}

/* Abissal — premium gold card */
.pricing-card--premium {
    border-color: rgba(251, 191, 36, 0.3);
    box-shadow: var(--shadow-card-elevated), 0 0 20px rgba(251, 191, 36, 0.1);
}

/* On desktop, featured card pops up */
@media (min-width: 768px) {
    .pricing-card--featured {
        transform: translateY(-8px);
    }
}

.pricing-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.pricing-check {
    color: var(--status-success);
    margin-right: var(--space-sm);
    font-weight: 700;
}
.pricing-x {
    color: var(--text-tertiary);
    margin-right: var(--space-sm);
}
.pricing-disabled {
    opacity: 0.5;
}
```

---

## 5. FAQ

Accordion using native `<details>/<summary>`.

### HTML

```html
<section class="section" style="background: var(--bg-secondary);">
    <div class="container">
        <div class="section-header">
            <span class="bt bt-label-upper" style="color: var(--accent-primary);">FAQ</span>
            <h2 class="bt bt-h1" style="margin-top: var(--space-sm);">Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
            <details class="faq-item">
                <summary class="faq-question bt bt-section-title">
                    How does server-side tracking work?
                </summary>
                <div class="faq-answer bt bt-body-sm">
                    Our server-side (S2S) postback system sends conversion data directly from your server to ad platforms,
                    bypassing browser limitations and ad blockers. This ensures 100% attribution accuracy regardless
                    of client-side restrictions.
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question bt bt-section-title">
                    What happens if I exceed my event limit?
                </summary>
                <div class="faq-answer bt bt-body-sm">
                    We never stop tracking. If you exceed your plan's event limit, we continue capturing all events
                    and notify you. You can upgrade anytime. No data is ever lost.
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question bt bt-section-title">
                    Do you integrate with Google Ads and Meta?
                </summary>
                <div class="faq-answer bt bt-body-sm">
                    Yes. We have native integrations with Google Ads, Meta (Facebook/Instagram), TikTok Ads,
                    and all major ad platforms. Setup takes less than 5 minutes per platform.
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question bt bt-section-title">
                    Is there a free trial?
                </summary>
                <div class="faq-answer bt bt-body-sm">
                    Yes, all plans include a 14-day free trial with full access to all features.
                    No credit card required to start.
                </div>
            </details>

            <details class="faq-item">
                <summary class="faq-question bt bt-section-title">
                    Can I migrate from another tracker?
                </summary>
                <div class="faq-answer bt bt-body-sm">
                    Absolutely. Our team provides hands-on migration support at no extra cost.
                    We'll help you move your pixels, postbacks, and historical data.
                </div>
            </details>
        </div>
    </div>
</section>
```

### CSS

```css
.faq-list {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.faq-item {
    background: var(--abyss-glass-gradient);
    border: 1px solid var(--bio-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
}

.faq-question {
    padding: var(--space-lg);
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: color 200ms ease;
}
.faq-question::-webkit-details-marker { display: none; }

/* Arrow indicator */
.faq-question::after {
    content: '+';
    font-size: 20px;
    font-weight: 300;
    color: var(--text-tertiary);
    flex-shrink: 0;
    margin-left: var(--space-md);
    transition: transform 200ms ease;
}
.faq-item[open] .faq-question::after {
    content: '\2212'; /* minus sign */
    color: var(--accent-primary);
}

.faq-question:hover {
    color: var(--accent-primary);
}

.faq-answer {
    padding: 0 var(--space-lg) var(--space-lg);
    color: var(--text-secondary);
    line-height: 1.6;
}
```

---

## 6. CTA Section

Full-width call-to-action with particles and gradient.

### HTML

```html
<section class="cta-section">
    <div class="cta-section__bg">
        <div class="cta-section__gradient"></div>
        <div class="cta-section__particle" style="left: 20%;"></div>
        <div class="cta-section__particle" style="left: 50%;"></div>
        <div class="cta-section__particle" style="left: 80%;"></div>
    </div>

    <div class="container cta-section__content">
        <h2 class="bt bt-h1 gradient-text">
            Ready to Scale Your Performance?
        </h2>
        <p class="bt bt-body" style="color: var(--text-secondary); margin: var(--space-lg) auto 0; max-width: 480px;">
            Join thousands of marketers who trust Blackink to track, optimize, and grow their campaigns.
        </p>
        <div style="margin-top: var(--space-xl); display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
            <button class="b-btn b-btn--primary b-btn--large">
                Start Free Trial
            </button>
            <button class="b-btn b-btn--ghost b-btn--large">
                Talk to Sales
            </button>
        </div>
        <p class="bt bt-caption" style="margin-top: var(--space-lg);">
            14-day free trial &middot; No credit card required &middot; Cancel anytime
        </p>
    </div>
</section>
```

### CSS

```css
.cta-section {
    position: relative;
    padding: 100px 0;
    text-align: center;
    overflow: hidden;
}

.cta-section__bg {
    position: absolute;
    inset: 0;
}

.cta-section__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        var(--abyss-depth-mid) 0%,
        var(--abyss-depth-deep) 50%,
        var(--abyss-depth-abyss) 100%
    );
}

.cta-section__particle {
    position: absolute;
    width: var(--particle-size);
    height: var(--particle-size);
    border-radius: 50%;
    background: var(--particle-color);
    bottom: -10px;
    animation:
        float-up var(--duration-particle) linear infinite,
        glow-pulse var(--duration-glow-cycle) ease-in-out infinite;
    pointer-events: none;
}
.cta-section__particle:nth-child(2) { animation-delay: 0s, 0s; }
.cta-section__particle:nth-child(3) { animation-delay: -20s, -3s; }
.cta-section__particle:nth-child(4) { animation-delay: -40s, -6s; }

.cta-section__content {
    position: relative;
    z-index: 1;
}
```

---

## 7. Footer

Multi-column footer with brand, links, and copyright.

### HTML

```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Brand column -->
            <div class="footer-brand">
                <h3 class="bt bt-h2" style="color: var(--text-primary);">Blackink</h3>
                <p class="bt bt-body-sm" style="margin-top: var(--space-sm); max-width: 240px;">
                    Ultra-premium performance tracking for marketers who demand precision.
                </p>
            </div>

            <!-- Product -->
            <div class="footer-col">
                <h4 class="bt bt-label-upper footer-col__title">Product</h4>
                <ul class="footer-links">
                    <li><a class="bt bt-body-sm" href="#">Features</a></li>
                    <li><a class="bt bt-body-sm" href="#">Pricing</a></li>
                    <li><a class="bt bt-body-sm" href="#">Integrations</a></li>
                    <li><a class="bt bt-body-sm" href="#">API Docs</a></li>
                </ul>
            </div>

            <!-- Company -->
            <div class="footer-col">
                <h4 class="bt bt-label-upper footer-col__title">Company</h4>
                <ul class="footer-links">
                    <li><a class="bt bt-body-sm" href="#">About</a></li>
                    <li><a class="bt bt-body-sm" href="#">Blog</a></li>
                    <li><a class="bt bt-body-sm" href="#">Careers</a></li>
                    <li><a class="bt bt-body-sm" href="#">Contact</a></li>
                </ul>
            </div>

            <!-- Legal -->
            <div class="footer-col">
                <h4 class="bt bt-label-upper footer-col__title">Legal</h4>
                <ul class="footer-links">
                    <li><a class="bt bt-body-sm" href="#">Privacy Policy</a></li>
                    <li><a class="bt bt-body-sm" href="#">Terms of Service</a></li>
                    <li><a class="bt bt-body-sm" href="#">LGPD</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <span class="bt bt-caption">
                &copy; 2026 Blackink. All rights reserved.
            </span>
        </div>
    </div>
</footer>
```

### CSS

```css
.site-footer {
    background: var(--abyss-depth-abyss);
    border-top: 1px solid var(--border-primary);
    padding: var(--space-xxl) 0 var(--space-lg);
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
}

.footer-col__title {
    margin-bottom: var(--space-md);
    color: var(--text-tertiary);
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 200ms ease;
}
.footer-links a:hover {
    color: var(--text-primary);
    text-decoration: none;
}

.footer-bottom {
    margin-top: var(--space-xxl);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--border-secondary);
    text-align: center;
}
```

---

## Complete Page Template

To build a full sales page, combine all sections in order:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackink — Performance Tracking</title>
    <link rel="stylesheet" href="css/abyss-tokens.css">
    <style>
        /* Paste shared page styles here */
        /* Paste each section's CSS here */
    </style>
</head>
<body class="theme-dark">
    <!-- 1. Hero -->
    <!-- 2. Features Grid -->
    <!-- 3. Social Proof -->
    <!-- 4. Pricing -->
    <!-- 5. FAQ -->
    <!-- 6. CTA Section -->
    <!-- 7. Footer -->

    <script>
    /* Scroll-triggered animations */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    </script>
</body>
</html>
```
