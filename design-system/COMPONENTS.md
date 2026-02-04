# Abyss Design System — Web Components

> React Native components translated to HTML/CSS.
> Requires [`../css/abyss-tokens.css`](../css/abyss-tokens.css).
> Token reference: [TOKENS.md](TOKENS.md)

---

## Table of Contents

1. [BText](#1-btext) — Typography (25+ variants)
2. [BButton](#2-bbutton) — Button (5 variants × 3 sizes)
3. [BCard](#3-bcard) — Glass morphism card
4. [BInput](#4-binput) — Text input
5. [BFilterButton](#5-bfilterbutton) — Filter card with accent bar
6. [B3DCard](#6-b3dcard) — 3D perspective card
7. [BAccentBar](#7-baccentbar) — Multi-layer gradient bar
8. [BGlassIcon](#8-bglassicon) — Radial glow icon
9. [BAnimateEntry](#9-banimateentry) — Entry animations
10. [BToast](#10-btoast) — Notification toasts
11. [BAbyssBackground](#11-babyssbackground) — Full-page background
12. [BBadge](#12-bbadge) — Status badges

---

## 1. BText

Source: `BText.jsx` — 25+ typography variants as CSS classes.

All classes use the `.bt` base class prefix. Add `.bt` for the base font-family, then a variant class.

### Usage

```html
<h1 class="bt bt-h1">Page Title</h1>
<h2 class="bt bt-h2">Section Title</h2>
<p class="bt bt-body">Body text paragraph with standard sizing.</p>
<span class="bt bt-caption">Caption text</span>
<span class="bt bt-label-upper">Category Label</span>
<span class="bt bt-numeric-lg">R$ 12.450,00</span>
<span class="bt bt-percentage" style="color: var(--status-success)">+23.5%</span>
```

### Full Variant List

```html
<!-- Display / Metrics -->
<span class="bt bt-display">40px Bold</span>
<span class="bt bt-metric">28px Bold</span>
<span class="bt bt-metric-lg">34px Bold</span>
<span class="bt bt-metric-sm">22px Bold</span>

<!-- Headings -->
<h1 class="bt bt-h1">32px Bold</h1>
<h2 class="bt bt-h2">24px Bold</h2>
<h3 class="bt bt-h3">20px Semibold</h3>
<h2 class="bt bt-title">28px Bold</h2>

<!-- Section -->
<h3 class="bt bt-section-title">18px Semibold</h3>
<p class="bt bt-section-subtitle">14px Medium (secondary)</p>

<!-- Labels -->
<span class="bt bt-label">13px Semibold</span>
<span class="bt bt-label-sm">11px Semibold (tertiary)</span>
<span class="bt bt-label-upper">11px UPPERCASE</span>

<!-- Body -->
<p class="bt bt-body">16px Regular</p>
<p class="bt bt-body-md">15px Medium</p>
<p class="bt bt-body-sm">14px Regular (secondary)</p>

<!-- Caption -->
<span class="bt bt-caption">12px Regular (tertiary)</span>
<span class="bt bt-caption-md">12px Medium (secondary)</span>

<!-- Special -->
<p class="bt bt-subtitle">16px Regular (secondary, centered)</p>
<a class="bt bt-link" href="#">14px Medium link</a>
<span class="bt bt-button">16px Semibold</span>
<span class="bt bt-button-sm">14px Semibold</span>
<span class="bt bt-accent">14px Semibold (accent color)</span>

<!-- Numeric (tabular-nums) -->
<span class="bt bt-numeric">R$ 1.234</span>
<span class="bt bt-numeric-lg">R$ 45.678</span>
<span class="bt bt-percentage">+12.3%</span>
<span class="bt bt-percentage-lg">85%</span>
```

---

## 2. BButton

Source: `BButton.jsx` — 5 variants × 3 sizes.

### HTML Structure

```html
<button class="b-btn b-btn--primary b-btn--medium">
    Button Text
</button>
```

### CSS

```css
/* Base */
.b-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md); /* 12px */
    border: 1px solid transparent;
    font-family: var(--font-system);
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: transform 150ms ease, opacity 150ms ease, box-shadow 200ms ease;
    position: relative;
    overflow: hidden;
}
.b-btn:active {
    transform: scale(0.97);
    opacity: 0.9;
}
.b-btn:disabled {
    opacity: var(--btn-disabled-opacity);
    cursor: not-allowed;
}

/* ── Variants ── */

/* Primary */
.b-btn--primary {
    background: var(--btn-primary-gradient);
    color: var(--btn-primary-text);
    border-color: transparent;
    box-shadow: var(--shadow-medium);
}
.b-btn--primary::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 50%;
    background: linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
    border-radius: 12px 12px 0 0;
    pointer-events: none;
}
.b-btn--primary:hover {
    box-shadow: var(--shadow-glow), var(--shadow-medium);
}

/* Secondary */
.b-btn--secondary {
    background: var(--btn-secondary-bg);
    color: var(--btn-secondary-text);
    border-color: var(--border-primary);
}
.b-btn--secondary:hover {
    background: var(--bg-elevated);
}

/* Outline */
.b-btn--outline {
    background: transparent;
    color: var(--btn-outline-text);
    border: 1.5px solid var(--btn-outline-border);
}
.b-btn--outline:hover {
    background: var(--accent-muted);
}

/* Ghost */
.b-btn--ghost {
    background: transparent;
    color: var(--btn-outline-text);
    border-color: transparent;
}
.b-btn--ghost:hover {
    background: var(--accent-muted);
}

/* Danger */
.b-btn--danger {
    background: var(--btn-danger-bg);
    color: var(--btn-danger-text);
    border-color: transparent;
}
.b-btn--danger:hover {
    background: rgba(239, 68, 68, 0.3);
}

/* ── Sizes ── */
.b-btn--small  { height: 40px; padding: 0 16px; font-size: 14px; }
.b-btn--medium { height: 48px; padding: 0 20px; font-size: 16px; }
.b-btn--large  { height: 56px; padding: 0 24px; font-size: 18px; }

/* ── Full width ── */
.b-btn--full { width: 100%; }

/* ── With icon ── */
.b-btn__icon-left  { margin-right: 8px; }
.b-btn__icon-right { margin-left: 8px; }
```

### All Variants

```html
<!-- Primary (3 sizes) -->
<button class="b-btn b-btn--primary b-btn--small">Small</button>
<button class="b-btn b-btn--primary b-btn--medium">Medium</button>
<button class="b-btn b-btn--primary b-btn--large">Large</button>

<!-- Secondary -->
<button class="b-btn b-btn--secondary b-btn--medium">Secondary</button>

<!-- Outline -->
<button class="b-btn b-btn--outline b-btn--medium">Outline</button>

<!-- Ghost -->
<button class="b-btn b-btn--ghost b-btn--medium">Ghost</button>

<!-- Danger -->
<button class="b-btn b-btn--danger b-btn--medium">Delete</button>

<!-- Full width with icon -->
<button class="b-btn b-btn--primary b-btn--large b-btn--full">
    <svg class="b-btn__icon-left" width="20" height="20">...</svg>
    Get Started
</button>

<!-- Disabled -->
<button class="b-btn b-btn--primary b-btn--medium" disabled>Disabled</button>
```

---

## 3. BCard

Source: `BCard.jsx` — Glass morphism container.

### HTML Structure

```html
<div class="b-card">
    <div class="b-card__content">
        <h3 class="bt bt-section-title">Card Title</h3>
        <p class="bt bt-body-sm">Card content goes here.</p>
    </div>
</div>
```

### CSS

```css
/* Card container */
.b-card {
    border-radius: var(--radius-card);
    overflow: hidden;
    position: relative;
    background: var(--abyss-glass-gradient);
    border: 1px solid var(--bio-border);
    box-shadow: var(--shadow-card);
}

/* Bioluminescent top line */
.b-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: var(--bio-top-line);
    border-radius: var(--radius-card) var(--radius-card) 0 0;
    z-index: 2;
}

/* Ambient glow */
.b-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 140px; height: 50px;
    background: radial-gradient(
        ellipse at top left,
        var(--bio-ambient) 0%,
        rgba(80, 200, 220, 0.008) 40%,
        transparent 100%
    );
    border-top-left-radius: var(--radius-card);
    pointer-events: none;
    z-index: 1;
}

/* Content */
.b-card__content {
    padding: 20px;
    position: relative;
    z-index: 3;
}

/* Elevated variant */
.b-card--elevated {
    box-shadow: var(--shadow-card-elevated);
}

/* No padding variant */
.b-card--flush .b-card__content {
    padding: 0;
}
```

### Variants

```html
<!-- Standard -->
<div class="b-card">
    <div class="b-card__content">Standard card</div>
</div>

<!-- Elevated -->
<div class="b-card b-card--elevated">
    <div class="b-card__content">Elevated card</div>
</div>

<!-- No padding -->
<div class="b-card b-card--flush">
    <div class="b-card__content">
        <img src="..." alt="" style="width:100%">
    </div>
</div>
```

---

## 4. BInput

Source: `BInput.jsx` — Text input with glass effect.

### HTML Structure

```html
<div class="b-input">
    <label class="b-input__label">Email</label>
    <div class="b-input__wrapper">
        <svg class="b-input__icon">...</svg>
        <input class="b-input__field" type="email" placeholder="your@email.com">
    </div>
</div>
```

### CSS

```css
/* Container */
.b-input {
    margin-bottom: 18px;
}

/* Label */
.b-input__label {
    display: block;
    margin-bottom: 10px;
    color: var(--text-tertiary);
    font-family: var(--font-system);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    opacity: 0.8;
}

/* Input wrapper */
.b-input__wrapper {
    display: flex;
    align-items: center;
    background: var(--input-bg);
    border-radius: var(--radius-button); /* 14px */
    border: 1px solid var(--input-border);
    padding: 0 16px;
    height: 54px;
    box-shadow: var(--shadow-soft);
    transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
}

/* Focus state */
.b-input__wrapper:focus-within {
    border-color: var(--input-focus-border);
    background: var(--input-focus-bg);
    box-shadow: 0 6px 16px rgba(100, 200, 255, 0.1);
}

/* Icon */
.b-input__icon {
    flex-shrink: 0;
    margin-right: 12px;
    color: var(--input-placeholder);
    width: 20px;
    height: 20px;
}
.b-input__wrapper:focus-within .b-input__icon {
    color: var(--accent-primary);
}

/* Field */
.b-input__field {
    flex: 1;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    font-family: var(--font-system);
    color: var(--input-text);
    background: transparent;
    border: none;
    outline: none;
}
.b-input__field::placeholder {
    color: var(--input-placeholder);
}

/* Password toggle */
.b-input__toggle {
    flex-shrink: 0;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--input-placeholder);
}
.b-input__wrapper:focus-within .b-input__toggle {
    color: var(--accent-primary);
}

/* Error state */
.b-input--error .b-input__wrapper {
    border-color: var(--status-error);
}
.b-input__error-text {
    margin-top: 6px;
    font-size: 12px;
    color: var(--status-error);
}
```

### Variants

```html
<!-- Simple text -->
<div class="b-input">
    <label class="b-input__label">Name</label>
    <div class="b-input__wrapper">
        <input class="b-input__field" type="text" placeholder="Your name">
    </div>
</div>

<!-- With icon -->
<div class="b-input">
    <label class="b-input__label">Email</label>
    <div class="b-input__wrapper">
        <svg class="b-input__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
        <input class="b-input__field" type="email" placeholder="your@email.com">
    </div>
</div>

<!-- Password with toggle -->
<div class="b-input">
    <label class="b-input__label">Password</label>
    <div class="b-input__wrapper">
        <input class="b-input__field" type="password" placeholder="Enter password">
        <button class="b-input__toggle" type="button" onclick="togglePassword(this)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>
        </button>
    </div>
</div>

<!-- Error state -->
<div class="b-input b-input--error">
    <label class="b-input__label">Email</label>
    <div class="b-input__wrapper">
        <input class="b-input__field" type="email" value="invalid">
    </div>
    <span class="b-input__error-text">Please enter a valid email</span>
</div>
```

---

## 5. BFilterButton

Source: `BFilterButton.jsx` — Glass card with accent bar.

### HTML Structure

```html
<button class="b-filter-btn">
    <div class="b-filter-btn__accent" style="--accent: #3b82f6;"></div>
    <div class="b-filter-btn__content">
        <span class="bt bt-body-md">Filter Label</span>
        <span class="bt bt-metric-sm">R$ 12.450</span>
    </div>
</button>
```

### CSS

```css
.b-filter-btn {
    display: block;
    width: 100%;
    position: relative;
    border-radius: var(--radius-button);
    overflow: hidden;
    background: var(--abyss-glass-light-gradient);
    border: 1px solid var(--bio-border);
    box-shadow: var(--shadow-filter);
    cursor: pointer;
    transition: transform 150ms ease;
    text-align: left;
}
.b-filter-btn:active {
    transform: scale(0.98);
}

/* Accent bar */
.b-filter-btn__accent {
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(
        180deg,
        color-mix(in srgb, var(--accent, #3b82f6) 31%, transparent) 0%,
        color-mix(in srgb, var(--accent, #3b82f6) 56%, transparent) 50%,
        color-mix(in srgb, var(--accent, #3b82f6) 31%, transparent) 100%
    );
    border-radius: var(--radius-button) 0 0 var(--radius-button);
    z-index: 2;
}

/* Accent glow */
.b-filter-btn__accent::after {
    content: '';
    position: absolute;
    top: 10px; left: 0; bottom: 10px;
    width: 32px;
    background: radial-gradient(
        ellipse at left center,
        color-mix(in srgb, var(--accent, #3b82f6) 8%, transparent) 0%,
        transparent 70%
    );
    pointer-events: none;
}

/* Top line */
.b-filter-btn::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: var(--bio-top-line);
    z-index: 1;
}

/* Content */
.b-filter-btn__content {
    padding: 12px 14px 12px 16px;
    position: relative;
    z-index: 3;
}
```

### Variants

```html
<!-- Default (blue) -->
<button class="b-filter-btn">
    <div class="b-filter-btn__accent"></div>
    <div class="b-filter-btn__content">
        <span class="bt bt-body-md">Revenue</span>
    </div>
</button>

<!-- Custom accent color -->
<button class="b-filter-btn">
    <div class="b-filter-btn__accent" style="--accent: #10b981;"></div>
    <div class="b-filter-btn__content">
        <span class="bt bt-body-md">Conversions</span>
    </div>
</button>

<!-- With value -->
<button class="b-filter-btn">
    <div class="b-filter-btn__accent" style="--accent: #f59e0b;"></div>
    <div class="b-filter-btn__content" style="display:flex; justify-content:space-between; align-items:center;">
        <span class="bt bt-body-md">CPA</span>
        <span class="bt bt-metric-sm">R$ 45,20</span>
    </div>
</button>
```

---

## 6. B3DCard

Source: `B3DCard.jsx` — Card with perspective tilt on hover.

### HTML Structure

```html
<div class="b-3d-card">
    <div class="b-card">
        <div class="b-card__content">
            <h3 class="bt bt-h3">3D Card</h3>
            <p class="bt bt-body-sm">Hover to see the tilt effect.</p>
        </div>
    </div>
</div>
```

### CSS

```css
.b-3d-card {
    perspective: 1000px;
    margin-bottom: 20px;
}

.b-3d-card > .b-card {
    transition: transform 300ms ease-out, box-shadow 300ms ease-out;
    transform-style: preserve-3d;
}

.b-3d-card:hover > .b-card {
    transform: rotateX(2deg) rotateY(-2deg) scale(0.988);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
}

.b-3d-card:active > .b-card {
    transform: rotateX(0) rotateY(0) scale(0.97);
    transition-duration: 100ms;
}

/* Parallax content shift */
.b-3d-card__parallax {
    padding: 24px;
    transition: transform 300ms ease-out;
}
.b-3d-card:hover .b-3d-card__parallax {
    transform: translate(1px, 1px);
}
```

### JS Enhancement (optional)

For true per-cursor tilt, add this to the card element:

```html
<div class="b-3d-card" onmousemove="tilt3D(event, this)" onmouseleave="resetTilt(this)">
    <div class="b-card">
        <div class="b-card__content">Content</div>
    </div>
</div>

<script>
function tilt3D(e, el) {
    const card = el.querySelector('.b-card');
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;  /* ±5deg */
    const rotateX = ((y / rect.height) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.988)`;
}
function resetTilt(el) {
    const card = el.querySelector('.b-card');
    card.style.transform = '';
}
</script>
```

---

## 7. BAccentBar

Source: `BAccentBar.jsx` — Multi-layer gradient accent bar.

### HTML Structure

```html
<div class="b-accent-bar" style="--bar-color: #3b82f6;"></div>
```

### CSS

```css
.b-accent-bar {
    --bar-color: #3b82f6;
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 32px;
    z-index: 10;
    overflow: visible;
    pointer-events: none;
}

/* Layer 1: Atmospheric glow */
.b-accent-bar::before {
    content: '';
    position: absolute;
    top: 10px; left: 0; bottom: 10px;
    width: 32px;
    border-top-left-radius: var(--radius-card);
    border-bottom-left-radius: var(--radius-card);
    background: radial-gradient(
        ellipse at left center,
        color-mix(in srgb, var(--bar-color) 8%, transparent) 0%,
        color-mix(in srgb, var(--bar-color) 3%, transparent) 30%,
        transparent 60%
    );
}

/* Layer 2: Main bar — thin and elegant */
.b-accent-bar::after {
    content: '';
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 3px;
    border-top-left-radius: var(--radius-card);
    border-bottom-left-radius: var(--radius-card);
    background: linear-gradient(
        180deg,
        color-mix(in srgb, var(--bar-color) 31%, transparent) 0%,
        color-mix(in srgb, var(--bar-color) 44%, transparent) 25%,
        color-mix(in srgb, var(--bar-color) 56%, transparent) 50%,
        color-mix(in srgb, var(--bar-color) 44%, transparent) 75%,
        color-mix(in srgb, var(--bar-color) 31%, transparent) 100%
    );
}
```

---

## 8. BGlassIcon

Source: `BGlassIcon.jsx` — Icon with radial ethereal glow.

### HTML Structure

```html
<div class="b-glass-icon" style="--icon-color: 100, 180, 255; --icon-size: 40px;">
    <svg width="24" height="24">...</svg>
</div>
```

### CSS

```css
.b-glass-icon {
    --icon-color: 100, 180, 255;
    --icon-size: 40px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
}

/* Radial glow */
.b-glass-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(
        circle at center,
        rgba(var(--icon-color), 0.25) 0%,
        rgba(var(--icon-color), 0.15) 25%,
        rgba(var(--icon-color), 0.08) 50%,
        rgba(var(--icon-color), 0.03) 75%,
        transparent 100%
    );
}

/* Shadow glow */
.b-glass-icon::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(var(--icon-color), 0.4);
}

/* Icon content */
.b-glass-icon > * {
    position: relative;
    z-index: 10;
}
```

### Variants

```html
<!-- Blue (default) -->
<div class="b-glass-icon" style="--icon-color: 100, 180, 255;">
    <svg width="24" height="24" fill="rgba(100, 180, 255, 1)">...</svg>
</div>

<!-- Cyan -->
<div class="b-glass-icon" style="--icon-color: 80, 200, 220;">
    <svg width="24" height="24" fill="rgba(80, 200, 220, 1)">...</svg>
</div>

<!-- Green -->
<div class="b-glass-icon" style="--icon-color: 60, 220, 200;">
    <svg width="24" height="24" fill="rgba(60, 220, 200, 1)">...</svg>
</div>

<!-- Large -->
<div class="b-glass-icon" style="--icon-color: 100, 180, 255; --icon-size: 56px;">
    <svg width="32" height="32" fill="rgba(100, 180, 255, 1)">...</svg>
</div>
```

---

## 9. BAnimateEntry

Source: `BAnimateEntry.jsx` — Entry animations with stagger.

CSS animations are defined in `abyss-tokens.css`. Use classes directly:

### Usage

```html
<!-- Single element -->
<div class="animate-fade-in-up">Content</div>

<!-- Staggered list -->
<div class="animate-fade-in-up delay-1">First item</div>
<div class="animate-fade-in-up delay-2">Second item</div>
<div class="animate-fade-in-up delay-3">Third item</div>
<div class="animate-fade-in-up delay-4">Fourth item</div>

<!-- Different directions -->
<div class="animate-fade-in-down">From top</div>
<div class="animate-fade-in-left">From left</div>
<div class="animate-fade-in-right">From right</div>
<div class="animate-fade-in">Just fade</div>
```

### Intersection Observer (scroll-triggered)

```html
<div class="animate-on-scroll" data-animation="fade-in-up" data-delay="0">
    Appears when scrolled into view
</div>

<script>
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const anim = el.dataset.animation || 'fade-in-up';
            const delay = el.dataset.delay || '0';
            el.style.animationDelay = delay + 'ms';
            el.classList.add('animate-' + anim);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
</script>
```

---

## 10. BToast

Toast notifications for feedback.

### HTML Structure

```html
<div class="b-toast b-toast--success">
    <svg class="b-toast__icon" width="20" height="20">...</svg>
    <span class="b-toast__text bt bt-body-md">Operation completed</span>
</div>
```

### CSS

```css
.b-toast {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    border-radius: var(--radius-md);
    border: 1px solid;
    backdrop-filter: blur(12px);
    box-shadow: var(--shadow-medium);
    animation: fade-in-down 0.3s ease-out;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: var(--z-toast);
    max-width: 400px;
}

.b-toast--success {
    background: var(--toast-success-bg);
    border-color: var(--toast-success-border);
    color: var(--toast-success-text);
}
.b-toast--error {
    background: var(--toast-error-bg);
    border-color: var(--toast-error-border);
    color: var(--toast-error-text);
}
.b-toast--warning {
    background: var(--toast-warning-bg);
    border-color: var(--toast-warning-border);
    color: var(--toast-warning-text);
}
.b-toast--info {
    background: var(--toast-info-bg);
    border-color: var(--toast-info-border);
    color: var(--toast-info-text);
}

.b-toast__icon { flex-shrink: 0; }
.b-toast__text { flex: 1; }
```

### All 4 Types

```html
<div class="b-toast b-toast--success">
    <span class="b-toast__text bt bt-body-md">Changes saved successfully</span>
</div>

<div class="b-toast b-toast--error">
    <span class="b-toast__text bt bt-body-md">Failed to save changes</span>
</div>

<div class="b-toast b-toast--warning">
    <span class="b-toast__text bt bt-body-md">Your session expires soon</span>
</div>

<div class="b-toast b-toast--info">
    <span class="b-toast__text bt bt-body-md">New update available</span>
</div>
```

---

## 11. BAbyssBackground

Source: `BAbyssBackground.jsx` — Full-page deep ocean background with particles.

### HTML Structure

```html
<div class="b-abyss-bg">
    <div class="b-abyss-bg__gradient"></div>
    <div class="b-abyss-bg__mist"></div>
    <div class="b-abyss-bg__particle" style="left: 20%;"></div>
    <div class="b-abyss-bg__particle" style="left: 40%;"></div>
    <div class="b-abyss-bg__particle" style="left: 60%;"></div>
    <div class="b-abyss-bg__particle" style="left: 80%;"></div>
    <div class="b-abyss-bg__content">
        <!-- Page content here -->
    </div>
</div>
```

### CSS

```css
.b-abyss-bg {
    position: relative;
    min-height: 100vh;
    background-color: var(--abyss-depth-abyss);
    overflow: hidden;
}

/* Depth gradient */
.b-abyss-bg__gradient {
    position: absolute;
    inset: 0;
    background: var(--abyss-depth-gradient);
}

/* Mist overlay */
.b-abyss-bg__mist {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(0, 15, 35, 0.25) 65%,
        rgba(0, 8, 20, 0.4) 100%
    );
    pointer-events: none;
}

/* Bioluminescent particles */
.b-abyss-bg__particle {
    position: absolute;
    width: var(--particle-size);
    height: var(--particle-size);
    border-radius: 50%;
    background: var(--particle-color);
    animation:
        float-up var(--duration-particle) linear infinite,
        glow-pulse var(--duration-glow-cycle) ease-in-out infinite;
    pointer-events: none;
}

/* Stagger particle start positions */
.b-abyss-bg__particle:nth-child(3) { animation-delay: 0s, 0s; bottom: -10px; }
.b-abyss-bg__particle:nth-child(4) { animation-delay: -15s, -2.5s; bottom: -10px; }
.b-abyss-bg__particle:nth-child(5) { animation-delay: -30s, -5s; bottom: -10px; }
.b-abyss-bg__particle:nth-child(6) { animation-delay: -45s, -7.5s; bottom: -10px; }

/* Content layer */
.b-abyss-bg__content {
    position: relative;
    z-index: 1;
}
```

---

## 12. BBadge

Badges for pricing plans and status indicators.

### HTML Structure

```html
<span class="b-badge b-badge--popular">Most Popular</span>
```

### CSS

```css
.b-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: var(--radius-full);
    font-family: var(--font-system);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
}

.b-badge--popular {
    background: var(--accent-muted);
    color: var(--accent-primary);
    border: 1px solid var(--border-accent);
}

.b-badge--enterprise {
    background: linear-gradient(90deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15));
    color: var(--text-gold);
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.b-badge--success {
    background: var(--status-success-bg);
    color: var(--status-success);
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.b-badge--error {
    background: var(--status-error-bg);
    color: var(--status-error);
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.b-badge--warning {
    background: var(--status-warning-bg);
    color: var(--status-warning);
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.b-badge--info {
    background: var(--status-info-bg);
    color: var(--status-info);
    border: 1px solid rgba(6, 182, 212, 0.3);
}
```

### Variants

```html
<span class="b-badge b-badge--popular">Most Popular</span>
<span class="b-badge b-badge--enterprise">Enterprise</span>
<span class="b-badge b-badge--success">Active</span>
<span class="b-badge b-badge--error">Expired</span>
<span class="b-badge b-badge--warning">Trial</span>
<span class="b-badge b-badge--info">Beta</span>
```
