# Abyss Design System — Blackink Web

The web implementation of the Blackink design system, extracted from the React Native app (`blackink-app`).

## Quick Start

Import the CSS tokens file in your HTML:

```html
<link rel="stylesheet" href="css/abyss-tokens.css">
```

This gives you 150+ CSS custom properties (colors, spacing, typography, shadows) and utility classes (animation, typography).

Apply the dark theme (default) or light theme:

```html
<body class="theme-dark">  <!-- or theme-light -->
```

Use tokens in your CSS:

```css
.my-element {
    background: var(--abyss-glass-gradient);
    color: var(--text-primary);
    border: 1px solid var(--bio-border);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    padding: var(--space-lg);
}
```

Use typography classes directly in HTML:

```html
<h1 class="bt bt-h1">Heading</h1>
<p class="bt bt-body">Paragraph text</p>
<span class="bt bt-metric-lg">R$ 12.450</span>
```

## Documentation

| File | Description |
|------|-------------|
| [`css/abyss-tokens.css`](../css/abyss-tokens.css) | CSS custom properties, typography classes, animation keyframes |
| [`TOKENS.md`](TOKENS.md) | Complete token reference — every color, spacing, shadow, radius value |
| [`COMPONENTS.md`](COMPONENTS.md) | 12 web components with copy-paste HTML + CSS |
| [`SALES-PAGE.md`](SALES-PAGE.md) | 7 sales page sections with complete HTML + CSS |

## Design Principles

1. **Abyss Depth** — Dark backgrounds use a 5-stop ocean gradient from `#0a1628` to `#020608`. Glass morphism creates depth through translucent layers.

2. **Bioluminescent Light** — Color is used sparingly. Borders at 15% opacity, top-line highlights at 10%, ambient glows at 3%. The light whispers; it never shouts.

3. **Precision Typography** — 25+ variants with calibrated letter-spacing. Negative tracking for headings (tighter), positive for labels (readable). Tabular nums for aligned columns.

## Source of Truth

All values are extracted from the React Native app:

| App Source | Web Output |
|------------|-----------|
| `src/theme/abyssTokens.js` | Depth, glass, bio colors, shadows, particles |
| `src/theme/colors.js` | Dark/Light theme tokens |
| `src/components/ui/BText.jsx` | Typography scale (25+ variants) |
| `src/components/ui/BButton.jsx` | Button variants and sizes |
| `src/components/ui/BCard.jsx` | Card glass morphism |
| `src/components/ui/BInput.jsx` | Input styles |
| `src/components/ui/BFilterButton.jsx` | Filter button with accent bar |
| `src/components/ui/B3DCard.jsx` | 3D perspective card |
| `src/components/ui/BAccentBar.jsx` | Multi-layer accent bar |
| `src/components/ui/BGlassIcon.jsx` | Radial glow icon |
| `src/components/ui/BAnimateEntry.jsx` | Entry animations |
| `src/components/ui/BAbyssBackground.jsx` | Background + particles |
| `src/components/ui/index.jsx` | Spacing, radius, font-size scales |

## Status

- CSS tokens: complete (dark + light themes, all token categories)
- Token docs: complete (every value with copy-paste CSS)
- Component docs: 12 components translated to web HTML/CSS
- Sales page patterns: 7 sections with full markup
- Not yet covered: complex interactive components (tab bar, modals) that need JS frameworks
