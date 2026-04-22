# Abyss Design System — Web Implementation

A implementação web do **Abyss Design System** traduz para HTML/CSS os contratos visuais, semânticos e operacionais definidos para a BlackInk. O objetivo não é apenas reproduzir estilo, mas garantir que **app e web falem a mesma língua** e que novas funcionalidades possam ser implementadas por humanos ou IA sem quebrar consistência.

O Abyss é um sistema **dark-first, dual-theme capable**. O modo dark representa sua assinatura premium oficial, baseada em **profundidade oceânica, bioluminescência contida e simplicidade percebida**. O light theme existe como compatibilidade controlada, não como redefinição da identidade central.

---

## Ordem correta de leitura

| Ordem | Arquivo | Papel |
|---:|---|---|
| 1 | `../../blackink-app/src/theme/ABYSS_DESIGN_SYSTEM.md` | Doutrina oficial, arquitetura, princípios e contratos globais |
| 2 | [`AI_IMPLEMENTATION_PROTOCOL.md`](AI_IMPLEMENTATION_PROTOCOL.md) | Regras operacionais para Manus AI, Claude Code e outras IAs |
| 3 | [`TOKENS.md`](TOKENS.md) | Tokens semânticos e estéticos do sistema |
| 4 | [`COMPONENTS.md`](COMPONENTS.md) | Componentes oficiais e contratos de uso |
| 5 | [`../css/abyss-tokens.css`](../css/abyss-tokens.css) | Materialização dos tokens em CSS |

Se a implementação divergir da documentação, a documentação oficial deve ser consultada primeiro e a divergência precisa ser corrigida ou explicitamente versionada.

---

## Quick Start

Importe o arquivo de tokens CSS no HTML:

```html
<link rel="stylesheet" href="css/abyss-tokens.css">
```

Aplique o tema oficial:

```html
<body class="theme-dark">
```

O `theme-dark` é o ponto de partida recomendado para experiências premium do Abyss. O `theme-light` só deve ser usado quando o contexto do produto justificar compatibilidade específica.

Use tokens no CSS:

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

Use tipografia oficial no HTML:

```html
<h1 class="bt bt-h1">Heading</h1>
<p class="bt bt-body">Paragraph text</p>
<span class="bt bt-metric-lg">R$ 12.450</span>
```

---

## Como pensar o sistema

A forma correta de construir no Abyss é sempre esta:

| Passo | Regra |
|---:|---|
| 1 | Definir o contexto: dashboard, tabela, formulário, detalhe, alerta ou marketing |
| 2 | Escolher primeiro os tokens **semânticos** |
| 3 | Aplicar a assinatura visual oceânica correspondente |
| 4 | Limitar a complexidade visível com **progressive disclosure** |
| 5 | Validar foco, contraste, motion e estados |

O erro clássico é começar por glow, blur, partículas e gradiente. No Abyss, **efeito nunca vem antes de função**.

---

## Documentação principal

| Arquivo | Descrição |
|------|-------------|
| `../../blackink-app/src/theme/ABYSS_DESIGN_SYSTEM.md` | Fonte de verdade do sistema |
| [`AI_IMPLEMENTATION_PROTOCOL.md`](AI_IMPLEMENTATION_PROTOCOL.md) | Protocolo para implementação consistente por IA |
| [`../css/abyss-tokens.css`](../css/abyss-tokens.css) | CSS custom properties, tipografia e motion básico |
| [`TOKENS.md`](TOKENS.md) | Referência completa de tokens |
| [`COMPONENTS.md`](COMPONENTS.md) | Componentes oficiais e regras de uso |
| [`SALES-PAGE.md`](SALES-PAGE.md) | Padrões de sales page |

---

## Princípios oficiais do web system

| Princípio | Implicação prática |
|---|---|
| **Profundidade sem ruído** | Glass, bordas e glow devem ser sentidos, não gritados |
| **Poder sem susto** | A UI precisa transmitir robustez sem despejar complexidade |
| **Legibilidade sob pressão** | Dados, alertas e ações devem vencer a atmosfera visual |
| **Consistência multi-superfície** | App e web devem manter a mesma linguagem |
| **Acessibilidade premium** | Foco, contraste, teclado e reduced motion fazem parte da experiência |

---

## Status atual

| Área | Status |
|---|---|
| **Doutrina do sistema** | Atualizada |
| **Protocolo para IA** | Atualizado |
| **Tokens CSS** | Existentes, precisam convergir cada vez mais para semântica oficial |
| **Componentes web** | Base disponível, ainda precisam evoluir com contratos mais rígidos |
| **Padrões de produto denso** | Devem ser ampliados nas próximas iterações |

---

## Regra final

> O Abyss não existe para deixar a BlackInk apenas mais bonita. Ele existe para fazer a BlackInk parecer e operar como um SaaS premium de classe mundial.
