# AGENTS.md — blackink-website

Caderno de aprendizados específicos da landing. **Append-only, teto 200 linhas.**

---

## 2026-04-08 — CSS brace balance pós-edit
**Regra**: após editar o bloco `<style>` do index.html, rodar script Python de contagem `{` vs `}` antes de considerar pronto.
**Motivo**: um único brace desbalanceado silencia CSS de tudo abaixo — regressão visual em cascata.
**Status**: ativo

## 2026-04-08 — FAQ usa details sem transition
**Regra**: FAQ é feita com `<details>` nativo. CSS transition em `max-height` do summary/content não funciona nativamente. Se precisar animar, usar JS controlando classe.
**Status**: ativo

---

## 2026-04-08 — Ordem dos breakpoints é cascata — não reordenar
**Contexto**: `767 → 768 → 640 → 600 → 500 → 480 → 390`. Alguns blocos dependem do anterior ter rodado (cascade).
**Regra**: ao adicionar novo breakpoint, inserir respeitando a ordem atual. Nunca mover um `@media` existente.
**Motivo**: media query que resolve depois "ganha", mudar ordem silenciosamente quebra layout em um device específico.
**Status**: ativo

## 2026-04-08 — `body:has()` do WhatsApp FAB é frágil
**Contexto**: sticky CTA e WhatsApp FAB disputam espaço. Reposicionamento usa `body:has(.sticky-cta.visible) .whatsapp-fab { bottom: ... }`.
**Regra**: não alterar classes `.sticky-cta`, `.sticky-cta.visible` nem `.whatsapp-fab` sem atualizar o seletor `body:has()`. Testar as duas posições (com e sem sticky CTA visível).
**Status**: ativo

## 2026-04-08 — Period switcher: row no mobile médio, column só em 480px
**Contexto**: decisão documentada em MEMORY. Tentativa de column em 600px ficou apertado.
**Regra**: period switcher mantém `flex-direction: row` até 481px; em `@media (max-width: 480px)` vira `column`.
**Status**: ativo

## 2026-04-08 — Sem framework, sem externalizar CSS
**Contexto**: decisão de performance — landing precisa de TTFB + LCP mínimos. Vue/React/CSS externo acrescenta round trip.
**Regra**: não propor migração para framework. CSS fica inline no `<style>` do `index.html`. `css/abyss-tokens.css` é a ÚNICA exceção (tokens compartilháveis).
**Status**: ativo

## 2026-04-08 — `var(--ease)` obrigatório em toda animação
**Contexto**: `cubic-bezier(0.16,1,0.3,1)` é a assinatura temporal da marca. Usar `ease`, `ease-out`, `linear` ou outros cubic-bezier quebra a sensação premium (ver `premium-design-formula.md`).
**Regra**: toda `transition` e `animation` usa `var(--ease)`. Exceção documentada com comentário `/* motivo */`.
**Status**: ativo

## 2026-04-08 — `!important` precisa de comentário
**Contexto**: landing acumulou `!important` órfãos que mascararam regressão de especificidade.
**Regra**: todo `!important` novo precisa de comentário na linha anterior explicando porquê (ex: sobrescrevendo HeroUI inline, ou fighting com Tailwind reset). Auto-review rejeita sem comentário.
**Status**: ativo

## 2026-04-24 — Reestruturação: 20 seções → 10 seções
**Contexto**: análise ultra premium identificou fadiga cognitiva (20 seções vs 6 da Stripe). Sonar (diferenciador único) estava enterrado na posição 15.
**Mudanças**: Sonar subiu para posição 4. Removidos: App Mobile, Como Funciona, Widget WhatsApp (HTML+JS), Community section. Hero copy mudou de "Proteja/Controle/Escale" para "Tracking/Proteção/Memória". Subtitle agora: "A infraestrutura completa para o afiliado que opera no Google Ads".
**Status**: superseded por reposicionamento cloaker (2026-07-31)

## 2026-07-31 — Cloaker como produto principal
**Contexto**: cloaker passou a ser o core do produto; copy "Proteção do Tráfego" escondia o diferencial.
**Mudanças**: hero H1/badge lideram com Cloaker; seção features antes do Sonar; nav/footer "Features" → "Cloaker"; FAQ + JSON-LD com pergunta explícita sobre cloaker; zero "proteção" em copy visível ao usuário na landing.
**Regra**: não voltar a usar "proteção" como framing de produto — falar de cloaker, safe page, offer page, filtragem de bots/VPNs.
**Status**: ativo
**Status**: ativo

## 2026-04-24 — WhatsApp Widget removido do body e JS
**Contexto**: emojis, badge vermelho falso e mensagens rotativas intrusivas violavam Quiet Luxury. Link WhatsApp mantido no footer e CTA final.
**Regra**: não restaurar widget flutuante. CSS do widget permanece no `<style>` (inócuo) para não arriscar desbalancear braces.
**Status**: ativo

## 2026-04-24 — Sonar tabs reduzidos de 7 para 3
**Contexto**: 7 tabs causavam fadiga no final da página. Mantidos: Testes, Ofertas, Headlines.
**Regra**: se adicionar tabs ao Sonar, manter máximo 4 para progressive disclosure.
**Status**: ativo

## 2026-08-03 — Plano Maré (cloaker-only R$399,99)
**Contexto**: novo tier entre Raso e Recife; CTAs liberados; cadastro reativado.
**Mudanças**: plano Maré em index/subscribe/cadastro/termos; comparison table 5 cols; cadastro sidebar plan-aware; submit "Continuar para Pagamento" ativo.
**Regra**: Maré = só cloaker (sem tracker/app/sonar); Recife = tracker + cloaker.
**Status**: ativo

<!-- Novas entradas abaixo -->
