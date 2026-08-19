# blackink-website — Landing Page

Pressupõe as 5 Regras do `Blackink/CLAUDE.md` raiz.

## Fontes de verdade

1. **`../docs/architecture.md`** — posicionamento de produto, domínios, diferenciação vs concorrentes. Usar ao atualizar copy/seções.
2. **`./docs/INDEX.md`** — mudanças históricas registradas.
3. **`./AGENTS.md`** — armadilhas de CSS/HTML/breakpoints.

## Stack
- **HTML estático** com CSS + JS inline (sem framework)
- Arquivo principal: `index.html` (~4200 linhas)
- Design tokens: `css/abyss-tokens.css`

## Estrutura do index.html
- Linhas 1-22: `<head>` + meta
- Linhas 23-1627: `<style>` inline (tokens, reset, layout, componentes, media queries)
- Linhas 1628+: `<body>` com seções
- Final: `<script>` inline (interações, sticky CTA, FAQ)

## Breakpoints (ordem importa)
- `767px` — mobile geral
- `768px` — simulador de proteção, before/after
- `640px` — comparativo concorrentes, highlights de vídeo
- `600px` — ROI calculator, resumo de cálculo
- `500px` — features da comunidade
- `480px` — telefones pequenos
- `390px` — iPhone 14 Pro e anteriores

## Design System
- Fonts: Space Grotesk (display), Inter (body), Cormorant Garamond (serif premium)
- Cores: primary `#64b4ff`, gold `#fbbf24`, green `#34d399`
- Easing master: `cubic-bezier(0.16,1,0.3,1)` — variável `var(--ease)`
- Spacing Fibonacci: 3, 5, 8, 13, 21, 34, 55, 89, 144
- Type scale: Golden Ratio 1.618 desktop, Perfect Fourth 1.333 mobile
- Sombras multi-layer (cada camada dobra offset/blur)

## Armadilhas conhecidas

- **`<details>` não suporta CSS transition** no `open/close` nativamente — usar JS ou workaround com `max-height` em elemento interno.
- **CSS brace balance**: depois de editar o `<style>`, validar com script Python (contagem de `{` vs `}`).
- **`:root` pode ser aninhado em `@media`** — é válido CSS.
- **Period switcher** mantém layout row no mobile médio, só vira column em 480px.

## O que NÃO fazer

- Não adicionar framework (Vue/React) — landing deve continuar HTML puro pra speed.
- Não externalizar CSS (fica inline por decisão de performance).
- Não quebrar ordem dos breakpoints — media queries são cascata.
- Não usar `!important` sem comentário explicando por quê.
- Não remover `var(--ease)` de animação — consistência de timing é o que dá sensação premium.

Ver `AGENTS.md` pra lições acumuladas.
