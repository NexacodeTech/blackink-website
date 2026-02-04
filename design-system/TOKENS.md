# Abyss Design System — Token Reference

> All values extracted from `blackink-app/src/theme/abyssTokens.js`, `colors.js`, `BText.jsx`, `index.jsx`.
> CSS variables defined in [`../css/abyss-tokens.css`](../css/abyss-tokens.css).

---

## Abyss Depth Colors

Background gradient that creates the deep ocean feeling.

| Token | Hex | Stop | CSS Variable |
|-------|-----|------|-------------|
| surface | `#0a1628` | 0% | `--abyss-depth-surface` |
| shallow | `#071422` | 25% | `--abyss-depth-shallow` |
| mid | `#050f1a` | 50% | `--abyss-depth-mid` |
| deep | `#030a12` | 75% | `--abyss-depth-deep` |
| abyss | `#020608` | 100% | `--abyss-depth-abyss` |

**CSS gradient (copy-paste):**
```css
background: linear-gradient(
    180deg,
    #0a1628 0%,
    #071422 25%,
    #050f1a 50%,
    #030a12 75%,
    #020608 100%
);
/* var(--abyss-depth-gradient) */
```

---

## Glass Effects

### Standard Glass (cards)

| Layer | Value | CSS Variable |
|-------|-------|-------------|
| top | `rgba(10, 22, 40, 0.82)` | `--abyss-glass-top` |
| mid | `rgba(8, 18, 35, 0.85)` | `--abyss-glass-mid` |
| bottom | `rgba(6, 14, 28, 0.88)` | `--abyss-glass-bottom` |

```css
background: linear-gradient(
    180deg,
    rgba(10, 22, 40, 0.82) 0%,
    rgba(8, 18, 35, 0.85) 50%,
    rgba(6, 14, 28, 0.88) 100%
);
/* var(--abyss-glass-gradient) */
```

### Glass Light (filter buttons)

| Layer | Value | CSS Variable |
|-------|-------|-------------|
| top | `rgba(10, 22, 40, 0.80)` | `--abyss-glass-light-top` |
| mid | `rgba(8, 18, 35, 0.84)` | `--abyss-glass-light-mid` |
| bottom | `rgba(6, 14, 28, 0.86)` | `--abyss-glass-light-bottom` |

```css
background: linear-gradient(
    180deg,
    rgba(10, 22, 40, 0.80) 0%,
    rgba(8, 18, 35, 0.84) 50%,
    rgba(6, 14, 28, 0.86) 100%
);
/* var(--abyss-glass-light-gradient) */
```

### Glass Morphism Recipe

Full glass card effect combining multiple layers:

```css
.glass-card {
    /* Base glass */
    background: var(--abyss-glass-gradient);
    border: 1px solid var(--bio-border);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    position: relative;
    overflow: hidden;
}

/* Bioluminescent top line */
.glass-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: var(--bio-top-line);
    border-radius: var(--radius-card) var(--radius-card) 0 0;
}

/* Ambient glow (top-left corner) */
.glass-card::after {
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
}
```

---

## Bioluminescent Colors

### Base Colors (100% opacity)

| Name | Value | CSS Variable |
|------|-------|-------------|
| primary | `rgba(100, 180, 255, 1)` / `#64B4FF` | `--bio-primary` |
| secondary | `rgba(80, 200, 220, 1)` / `#50C8DC` | `--bio-secondary` |
| accent | `rgba(60, 220, 200, 1)` / `#3CDCC8` | `--bio-accent` |
| particle | `rgba(140, 210, 255, 1)` / `#8CD2FF` | `--bio-particle` |

### Opacity Variants

| Name | Value | Use |
|------|-------|-----|
| border | `rgba(100, 200, 255, 0.15)` | Card/element borders |
| topLine | `rgba(100, 200, 255, 0.10)` | Top edge highlight |
| ambient | `rgba(100, 200, 255, 0.03)` | Corner glow |
| whisper | `rgba(100, 180, 255, 0.015)` | Sanctuary glow |

---

## Color Themes

### Dark Theme — Midnight Ocean

#### Background
| Token | Value | CSS Variable |
|-------|-------|-------------|
| primary | `#040d1a` | `--bg-primary` |
| secondary | `rgba(8, 22, 48, 0.7)` | `--bg-secondary` |
| tertiary | `#071428` | `--bg-tertiary` |
| elevated | `rgba(12, 30, 58, 0.85)` | `--bg-elevated` |

#### Text
| Token | Value | CSS Variable |
|-------|-------|-------------|
| primary | `#f8fafc` (slate-50) | `--text-primary` |
| secondary | `#94a3b8` (slate-400) | `--text-secondary` |
| tertiary | `#64748b` (slate-500) | `--text-tertiary` |
| inverse | `#020617` (slate-950) | `--text-inverse` |
| link | `#38bdf8` (sky-400) | `--text-link` |
| gold | `#fbbf24` (amber-400) | `--text-gold` |

#### Accent
| Token | Value | CSS Variable |
|-------|-------|-------------|
| primary | `#3b82f6` (blue-500) | `--accent-primary` |
| secondary | `#6366f1` (indigo-500) | `--accent-secondary` |
| tertiary | `#06b6d4` (cyan-500) | `--accent-tertiary` |
| muted | `rgba(59, 130, 246, 0.15)` | `--accent-muted` |
| glow | `rgba(59, 130, 246, 0.5)` | `--accent-glow` |

#### Status
| Status | Color | Background |
|--------|-------|-----------|
| error | `#ef4444` | `rgba(239, 68, 68, 0.15)` |
| success | `#10b981` | `rgba(16, 185, 129, 0.15)` |
| warning | `#f59e0b` | `rgba(245, 158, 11, 0.15)` |
| info | `#06b6d4` | `rgba(6, 182, 212, 0.15)` |

### Light Theme — Liquid Glass Premium

#### Background
| Token | Value |
|-------|-------|
| primary | `#081943` |
| secondary | `rgba(255, 255, 255, 0.05)` |
| tertiary | `#081943` |
| elevated | `rgba(255, 255, 255, 0.08)` |

#### Text
| Token | Value |
|-------|-------|
| primary | `#FFFFFF` |
| secondary | `#999999` |
| tertiary | `#666666` |
| inverse | `#081943` |
| link | `#116CC5` |

#### Accent
| Token | Value |
|-------|-------|
| primary | `#116CC5` |
| secondary | `#0D5299` |
| muted | `rgba(17, 108, 197, 0.2)` |
| glow | `rgba(17, 108, 197, 0.4)` |

#### Status
| Status | Color | Background |
|--------|-------|-----------|
| error | `#DC2626` | `rgba(220, 38, 38, 0.15)` |
| success | `#16A34A` | `rgba(22, 163, 74, 0.15)` |
| warning | `#D97706` | `rgba(217, 119, 6, 0.15)` |
| info | `#0EA5E9` | `rgba(14, 165, 233, 0.15)` |

---

## Shadows

### Dark Theme

| Name | CSS Value | Use |
|------|-----------|-----|
| card | `0 8px 20px rgba(0,0,0,0.4)` | Standard card |
| card-elevated | `0 12px 28px rgba(0,0,0,0.5)` | Elevated card |
| filter | `0 6px 16px rgba(0,0,0,0.35)` | Filter buttons |
| soft | `0 4px 12px rgba(0,0,0,0.15)` | Subtle |
| medium | `0 8px 16px rgba(0,0,0,0.2)` | Default |
| strong | `0 12px 24px rgba(0,0,0,0.25)` | Prominent |
| glow | `0 0 20px rgba(59,130,246,0.2)` | Blue glow |

### Light Theme

| Name | CSS Value |
|------|-----------|
| card | `0 4px 12px rgba(0,0,0,0.06)` |
| card-elevated | `0 8px 20px rgba(0,0,0,0.10)` |
| glow | `0 0 20px rgba(17,108,197,0.2)` |

---

## Typography Scale

All variants from `BText.jsx`. Font: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif`.

### Display & Metrics

| Variant | Size | Weight | Tracking | Line-Height | CSS Class |
|---------|------|--------|----------|-------------|-----------|
| display | 40px | 700 | -1.5px | 48px | `.bt-display` |
| metricValue | 28px | 700 | -0.8px | 34px | `.bt-metric` |
| metricValueLarge | 34px | 700 | -1.2px | 40px | `.bt-metric-lg` |
| metricValueSmall | 22px | 700 | -0.5px | 28px | `.bt-metric-sm` |

### Headings

| Variant | Size | Weight | Tracking | Line-Height | CSS Class |
|---------|------|--------|----------|-------------|-----------|
| h1 | 32px | 700 | -0.8px | 40px | `.bt-h1` |
| h2 | 24px | 700 | -0.5px | 30px | `.bt-h2` |
| h3 | 20px | 600 | -0.3px | 26px | `.bt-h3` |
| title | 28px | 700 | -0.5px | 34px | `.bt-title` |

### Section

| Variant | Size | Weight | Tracking | Line-Height | Color | CSS Class |
|---------|------|--------|----------|-------------|-------|-----------|
| sectionTitle | 18px | 600 | -0.2px | 24px | primary | `.bt-section-title` |
| sectionSubtitle | 14px | 500 | 0.1px | 20px | secondary | `.bt-section-subtitle` |

### Labels

| Variant | Size | Weight | Tracking | Line-Height | Color | CSS Class |
|---------|------|--------|----------|-------------|-------|-----------|
| label | 13px | 600 | 0.3px | 18px | secondary | `.bt-label` |
| labelSmall | 11px | 600 | 0.4px | 14px | tertiary | `.bt-label-sm` |
| labelUppercase | 11px | 600 | 0.8px | 14px | secondary, uppercase | `.bt-label-upper` |

### Body

| Variant | Size | Weight | Tracking | Line-Height | Color | CSS Class |
|---------|------|--------|----------|-------------|-------|-----------|
| body | 16px | 400 | 0 | 24px | primary | `.bt-body` |
| bodyMedium | 15px | 500 | 0 | 22px | primary | `.bt-body-md` |
| bodySmall | 14px | 400 | 0.1px | 20px | secondary | `.bt-body-sm` |

### Caption

| Variant | Size | Weight | Tracking | Line-Height | Color | CSS Class |
|---------|------|--------|----------|-------------|-------|-----------|
| caption | 12px | 400 | 0.2px | 16px | tertiary | `.bt-caption` |
| captionMedium | 12px | 500 | 0.2px | secondary | secondary | `.bt-caption-md` |

### Special

| Variant | Size | Weight | Tracking | Line-Height | Color | CSS Class |
|---------|------|--------|----------|-------------|-------|-----------|
| subtitle | 16px | 400 | 0.1px | 22px | secondary, center | `.bt-subtitle` |
| link | 14px | 500 | 0.1px | 20px | accent-primary | `.bt-link` |
| button | 16px | 600 | 0.2px | 22px | primary | `.bt-button` |
| buttonSmall | 14px | 600 | 0.2px | 18px | primary | `.bt-button-sm` |
| accent | 14px | 600 | 0.1px | 20px | accent-primary | `.bt-accent` |

### Numeric

| Variant | Size | Weight | Tracking | Line-Height | CSS Class |
|---------|------|--------|----------|-------------|-----------|
| numeric | 16px | 600 | -0.2px | 22px | `.bt-numeric` |
| numericLarge | 24px | 700 | -0.5px | 30px | `.bt-numeric-lg` |
| percentage | 14px | 700 | -0.2px | 18px | `.bt-percentage` |
| percentageLarge | 40px | 700 | -1.5px | 48px | `.bt-percentage-lg` |

All numeric variants include `font-variant-numeric: tabular-nums` for aligned columns.

---

## Spacing Scale

Source: `SIZES.spacing` in `index.jsx`.

| Token | Value | CSS Variable |
|-------|-------|-------------|
| xs | 4px | `--space-xs` |
| sm | 8px | `--space-sm` |
| md | 16px | `--space-md` |
| lg | 24px | `--space-lg` |
| xl | 32px | `--space-xl` |
| xxl | 48px | `--space-xxl` |

```
4 ░
8 ░░
16 ░░░░
24 ░░░░░░
32 ░░░░░░░░
48 ░░░░░░░░░░░░
```

---

## Border Radius

Source: `SIZES.radius` in `index.jsx` + `ABYSS_RADIUS` in `abyssTokens.js`.

| Token | Value | CSS Variable | Use |
|-------|-------|-------------|-----|
| xs | 4px | `--radius-xs` | Chips, small tags |
| sm | 8px | `--radius-sm` | Small buttons, inputs |
| md | 12px | `--radius-md` | Buttons |
| lg | 16px | `--radius-lg` | Cards (`--radius-card`) |
| xl | 20px | `--radius-xl` | Large cards |
| full | 9999px | `--radius-full` | Circles, pills |
| button | 14px | `--radius-button` | Filter buttons |

---

## Z-Index

| Layer | Value | CSS Variable |
|-------|-------|-------------|
| base | 0 | `--z-base` |
| card | 1 | `--z-card` |
| sticky | 10 | `--z-sticky` |
| header | 100 | `--z-header` |
| overlay | 200 | `--z-overlay` |
| modal | 300 | `--z-modal` |
| toast | 400 | `--z-toast` |

---

## Animation

### Durations

| Token | Value | CSS Variable |
|-------|-------|-------------|
| fast | 150ms | `--duration-fast` |
| normal | 300ms | `--duration-normal` |
| slow | 500ms | `--duration-slow` |
| particle | 60s | `--duration-particle` |
| glow cycle | 10s | `--duration-glow-cycle` |

### Spring Presets (from BAnimateEntry.jsx)

For CSS, these translate to `ease-out` or custom `cubic-bezier`. The app uses spring physics with these values:

| Preset | Damping | Mass | Stiffness | CSS Equivalent |
|--------|---------|------|-----------|----------------|
| default | 14 | 0.85 | 95 | `ease-out` |
| gentle | 18 | 1.1 | 55 | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| snappy | 16 | 0.45 | 160 | `cubic-bezier(0.2, 0, 0, 1)` |
| bouncy | 9 | 0.55 | 110 | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| abyss | 12 | 0.8 | 75 | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

### Entry Animations (keyframes in abyss-tokens.css)

| Direction | Keyframe | CSS Class |
|-----------|----------|-----------|
| up | `fade-in-up` | `.animate-fade-in-up` |
| down | `fade-in-down` | `.animate-fade-in-down` |
| left | `fade-in-left` | `.animate-fade-in-left` |
| right | `fade-in-right` | `.animate-fade-in-right` |
| fade | `fade-in` | `.animate-fade-in` |

Stagger with `.delay-1` through `.delay-8` (increments of 70ms).

---

## Breakpoints

| Name | Value | CSS Variable |
|------|-------|-------------|
| sm | 640px | `--bp-sm` |
| md | 768px | `--bp-md` |
| lg | 1024px | `--bp-lg` |
| xl | 1280px | `--bp-xl` |

```css
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## Particles

Source: `ABYSS_PARTICLES` in `abyssTokens.js`.

| Property | Value | CSS Variable |
|----------|-------|-------------|
| count | 7 (4 in BAbyssBackground) | — |
| size | 3px | `--particle-size` |
| color | `rgba(140, 210, 255, 1)` | `--particle-color` |
| opacity min | 0.08 | `--particle-opacity-min` |
| opacity max | 0.18 | `--particle-opacity-max` |
| float duration | 60s | `--duration-particle` |
| glow cycle | 10s | `--duration-glow-cycle` |

---

## Brand Colors

| Name | Value |
|------|-------|
| brandBlue | `#116CC5` |
| brandDeepBlue | `#081943` |
| white | `#FFFFFF` |
| black | `#000000` |
