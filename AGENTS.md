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

## 2026-07-31 — Cloaker como produto principal
**Contexto**: cloaker passou a ser o core do produto; copy "Proteção do Tráfego" escondia o diferencial.
**Mudanças**: hero H1/badge lideram com Cloaker; seção features antes do Sonar; nav/footer "Features" → "Cloaker"; FAQ + JSON-LD com pergunta explícita sobre cloaker; zero "proteção" em copy visível ao usuário na landing.
**Regra**: não voltar a usar "proteção" como framing de produto — falar de cloaker, safe page, offer page, filtragem de bots/VPNs.
**Status**: ativo

## 2026-08-11 — Pivot cloaker-only (produto único)
**Contexto**: tracker removido como produto; BlackInk é 100% cloaker server-side para Google Ads.
**Mudanças**: plano Raso removido; 3 tiers cloaker (Maré/Recife/Abissal); Sonar, postback, funil e seções tracker removidas da landing; comparison table só cloaker; cadastro PLANS sem Raso.
**Regra**: não reintroduzir tracker como produto ou plano — falar de cloaker, safe page, offer page, bots, VPNs, revisores de anúncio.
**Status**: ativo

## 2026-08-11 — Deploy HostGator-only (AWS removido)
**Contexto**: site estático migrou de AWS S3 + CloudFront para HostGator via FTP.
**Mudanças**: removido `.github/workflows/deploy.yml` (S3 sync + invalidação CloudFront); deploy ativo é `.github/workflows/ftp-deploy.yml` no push à branch `production`.
**Regra**: não reintroduzir workflow AWS; credencial FTP via secret `FTP_PASSWORD` no GitHub (nunca hardcode).
**Status**: ativo

## 2026-08-11 — Produto único R$399,99 (sem tiers)
**Contexto**: tiers Maré/Recife/Abissal removidos; BlackInk vende um único cloaker a R$ 399,99/mês.
**Mudanças**: pricing single-card na landing; subscribe redireciona para cadastro; cadastro default plan=Maré (nome API interno); comparison table entre tiers removida; FAQ sem comparação de planos.
**Regra**: não reintroduzir tiers ou seleção de plano no site — um produto, um preço. API `plan_name` continua `Maré` até backend migrar.
**Status**: ativo

## 2026-08-11 — Pricing narrativo (produto único)
**Contexto**: preço não pode parecer lista de planos — usuário escolhe só periodicidade (mensal/trimestral/anual).
**Mudanças**: seção `#pricing` em 3 atos (custo → valor → investimento); switcher "Como prefere pagar?"; nav "Investimento"; cadastro "Resumo da assinatura" com linha de cobrança.
**Regra**: framing de billing period, nunca de tier/plano múltiplo.
**Status**: ativo

**Status**: ativo

## 2026-08-12 — Headlines sem ponto final
**Contexto**: ponto final em frases de destaque (hero, H2 banner) parece pesado e quebra ritmo visual.
**Regra**: H1/H2 e linhas de billboard (hero `.ln-i`, marquee, sticky CTA punch) sem `.` no final; parágrafos, FAQ e meta mantêm pontuação normal.
**Status**: ativo

## 2026-08-12 — Posicionamento plataforma profissional
**Contexto**: landing precisa transmitir plataforma enterprise (proteção de campanhas, controle de acesso, infraestrutura) — não script/tool improvisado.
**Mudanças**: seção `#como-funciona` com fluxo visual Visitante → BlackInk → Análise → Safe/Offer; 8 pilares; hero/marquee/nav/footer/sticky CTA com tom de plataforma; nav link "Como funciona".
**Regra**: usar "proteção de campanhas" e "plataforma" como framing profissional; evitar tom de script barato. "Proteção do tráfego" genérico continua evitado — ser específico (campanhas, contas de anúncios).
**Status**: ativo

## 2026-08-12 — Narrativa correta de setup do cloaker
**Contexto**: copy antiga dizia conectar Google Ads via OAuth e "definir URLs" — o cloaker não integra com Google; páginas são cadastradas na plataforma (ou via BlackInk Clone) e o tráfego aponta para URL da BlackInk.
**Regra**: setup = cadastrar safe/offer page na plataforma → configurar regras → apontar tráfego para URL BlackInk. Nunca OAuth/conexão com conta de anúncios como passo de setup. FAQ, HowTo JSON-LD e trust badges devem refletir camada intermediária server-side, não "integração" com Google, Meta ou TikTok.
**Status**: ativo

<!-- Novas entradas abaixo -->

## 2026-08-18 — Posicionamento multi-plataforma (tráfego pago)
**Contexto**: produto funciona igual para Google Ads, Meta, TikTok e outras — anunciante aponta destino do anúncio para URL BlackInk; não há OAuth com nenhuma rede.
**Regra**: copy user-facing usa "tráfego pago", "revisores de anúncio", "conta de anúncios" — nunca Google Ads sozinho como canal exclusivo. SEO/JSON-LD pode listar Google Ads + Meta + TikTok juntos. Padrão de substituição: "para Google Ads" → "para tráfego pago" ou "Google Ads, Meta, TikTok e outras plataformas".
**Validação pós-edit**: `grep -i "Google Ads"` — deve restar só em listas multi-plataforma ou tags SEO; zero frases que impliquem exclusividade.
**Status**: ativo

## 2026-08-19 — WhatsApp removido do site
**Contexto**: decisão de não expor contato via WhatsApp no site público — links, widget flutuante, comunidade e referências em copy legal/FAQ.
**Regra**: não reintroduzir links `wa.me`, `chat.whatsapp.com`, widget `.wa-widget` nem menções a suporte/comunidade via WhatsApp. Contato via email (`suporte@theblack.ink`) e ticket/chat na plataforma.
**Status**: ativo

## 2026-08-19 — Rewrite cloaker multiplataforma
**Contexto**: rewrite vertical do `index.html` — seções enxutas, tom híbrido (hero/checkout Quiet Luxury; ROI punchy; meio técnico).
**Mudanças**: redes = Google Ads, YouTube Ads, Facebook Ads, TikTok Ads e outras; hero cabe em 100vh (logo menor no mobile); sem hscroll pin, GSAP, loader fullscreen, Sonar ou áudio; sticky CTA sync período + hide em `#pricing`/footer; comparação por arquétipo (client-side / redirect / SaaS).
**Regra**: lista de redes completa em copy user-facing; vanilla JS only; `scroll-padding-top: 72px`.
**Status**: ativo

## 2026-08-19 — Hero 2 linhas + CTA above-the-fold
**Contexto**: H1 em 4 linhas empurrava CTAs para baixo da dobra (desktop 900px e mobile 844px).
**Regra**: hero H1 em no máximo 2 linhas (“Bots veem Safe Page / Compradores veem Offer Page”); CTA primário + trust (PIX/setup/garantia) devem caber no primeiro viewport. Validar com screenshot forçando `animation:none` (headless captura mid-fade).
**Status**: ativo

## 2026-08-20 — Ciclos CRO: CTA nos beats + FAQ preço aberto
**Contexto**: ciclos de conversão na landing cloaker multiplataforma.
**Regra**: CTA hard nos beats de dor/decisão; FAQ lidera com preço/OAuth/redes/garantia (`open` no preço); prova ao vivo em PT; sem mid-CTA redundante após showcase; login unificado `app.theblack.ink`.
**Status**: ativo

## 2026-08-20 — Sticky mobile com preço + ROI payback
**Contexto**: no mobile o sticky escondia o preço (`sticky-cta-text` só ≥768px); ROI não amarrava perda ao payback do plano.
**Regra**: sticky mobile mostra preço curto + CTA com valor; trimestral marcado “Recomendado”; ROI message inclui dias de payback estimado; ponte `#pricing` após calculadora; FAQ outro com e-mail.
**Status**: ativo

## 2026-08-20 — ROI slider fill alinhado às ticks
**Contexto**: fill linear 1k–500k deixava R$10k/R$50k visualmente grudados em R$1k (ticks não-lineares).
**Regra**: `--fill` mapeia por segmentos das ticks (1k→50k→100k→250k→500k); default do slider = R$50.000.
**Status**: ativo

## 2026-08-20 — Compressão educação/setup (scroll)
**Contexto**: `#o-que-e` + pilares em `#como-funciona` repetiam safe/offer e features do showcase.
**Regra**: educação enxuta (copy curta, sem soft-CTA); setup compacto com steps+fluxo+CTA hard; pilares removidos (prova/showcase carrega os detalhes).
**Status**: ativo

## 2026-08-20 — Cadastro: troca de periodicidade inline
**Contexto**: quem chega no cadastro pelo CTA mensal não conseguia mudar para trimestral/anual sem voltar.
**Regra**: switcher Mensal/Trimestral/Anual no resumo da assinatura; atualiza preço, billing e `?period=` via `history.replaceState`; trimestral marcado Rec.
**Status**: ativo

## 2026-08-20 — Sticky some no CTA final + padding body
**Contexto**: sticky competia com `#comecar`/`.cta-final` e cobria conteúdo no fim das seções.
**Regra**: sticky esconde em pricing + cta-final + footer; `body.has-sticky-cta` adiciona padding-bottom; CTA final aponta desconto para `#pricing` (não FAQ).
**Status**: ativo

## 2026-08-20 — FAQ progressivo + nudge de periodicidade
**Contexto**: 12 FAQs após o preço geravam fadiga; mensal sem lembrete de economia.
**Regra**: FAQ mostra 5 prioritárias (preço/OAuth/redes/garantia/setup); resto atrás de “Ver mais perguntas”; nudge sob o period switcher muda com o período ativo.
**Status**: ativo

## 2026-08-20 — Redes/arquitetura compactas
**Contexto**: `#redes` + `#por-que` alongavam o caminho até ROI/pricing.
**Regra**: ambas `section--compact`; copy mais curta; CTA secundário de arquitetura aponta para `#roi-calc` (calcular perdas).
**Status**: ativo

## 2026-08-20 — Pricing enxuto + sticky some no FAQ
**Contexto**: ato “custo real” repetia o ROI; includes depois do CTA atrasavam o clique; sticky competia com FAQ outro.
**Regra**: pricing começa no valor; includes compactos **antes** do CTA; sticky esconde também em `#faq`; submit do cadastro mostra preço do período.
**Status**: ativo

## 2026-08-20 — Landing respeita `?period=`
**Contexto**: share/CTA para trimestral precisava pré-selecionar billing na landing.
**Regra**: `?period=monthly|quarterly|yearly` ativa o switcher + CTAs; clique no período atualiza a URL via `replaceState`.
**Status**: ativo

## 2026-08-20 — Prova ao vivo mais curta + proof line
**Contexto**: `#cloaker` ainda era seção cheia com 3 feats redundantes; obj-strip verboso antes do preço.
**Regra**: cloaker `section--compact`, 2 feats + CTA soft para pricing; proof line sync com stats do simulador; objeções em copy curta.
**Status**: ativo

## 2026-08-20 — Garantia no submit do cadastro
**Contexto**: risk reversal ficava só no resumo; no momento do submit a dúvida volta.
**Regra**: bloco de garantia 7 dias imediatamente acima do CTA “Continuar para pagamento”; trust line reforça PIX/sem fidelidade/setup.
**Status**: ativo

## 2026-08-20 — Nudge trimestral clicável + FAQ CTA hard
**Contexto**: economia do trimestral era texto passivo; FAQ outro só tinha link textual.
**Regra**: nudge mensal inclui botão “Escolher trimestral”; FAQ outro tem CTA hard + atalho trimestral.
**Status**: ativo

## 2026-08-20 — Funil prova → ROI → preço
**Contexto**: redes/arquétipos atrasavam a quantificação da perda e o preço.
**Regra**: após `#cloaker`, ordem é `#roi-calc` → `#pricing`; `#redes`/`#por-que` ficam como reforço pós-decisão; nav prioriza Investimento antes de Redes.
**Status**: ativo
