# Abyss Tokens

> Este documento define a camada de tokens do Abyss com prioridade em **semântica de interface**, não apenas em efeito visual. A regra é simples: a IA deve escolher primeiro o **papel** do elemento e só depois sua **expressão estética**.

---

## 1. Ordem de decisão

| Ordem | Tipo de token | Pergunta que responde |
|---:|---|---|
| 1 | **Semântico** | Qual papel esse elemento exerce na interface? |
| 2 | **Tema** | Esse papel está no modo dark ou light? |
| 3 | **Estético** | Como o Abyss expressa esse papel visualmente? |
| 4 | **Implementação** | Qual CSS variable, classe ou recipe materializa isso? |

Se a escolha começar direto em gradiente, blur, glow ou cor visual, a implementação já começou errada.

---

## 2. Camada semântica oficial

### 2.1 Surface tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `surface/base` | Fundo principal da tela | Base estrutural da viewport |
| `surface/subtle` | Superfície secundária ou bloco de apoio | Não competir com conteúdo principal |
| `surface/elevated` | Card, painel ou bloco com maior importância | Usar quando a camada precisa ganhar relevo |
| `surface/overlay` | Modal, drawer, floating panel | Deve separar contexto sem perder coerência |
| `surface/interactive` | Elemento clicável ou focável | Reservado a itens com ação |
| `surface/critical` | Área que precisa alertar gravidade | Usar com contenção e sem teatralidade |

### 2.2 Text tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `text/primary` | Informação principal | Títulos, métricas, rótulos críticos |
| `text/secondary` | Apoio relevante | Explicações curtas, metadados, subtítulos |
| `text/muted` | Informação de baixa prioridade | Ajuda discreta, timestamps, contexto secundário |
| `text/inverse` | Texto sobre superfícies claras ou ações preenchidas | Garantir legibilidade máxima |
| `text/link` | Navegação ou ação textual | Nunca substituir CTA primário |

### 2.3 Border tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `border/subtle` | Delimitação leve | Cards, divisões calmas, blocos de apoio |
| `border/default` | Delimitação padrão | Inputs, cards principais, filtros |
| `border/strong` | Ênfase controlada | Seleção, agrupamento forte |
| `border/focus` | Foco de interação | Estado de navegação/edição |
| `border/critical` | Erro ou risco alto | Nunca usar para elementos neutros |

### 2.4 Action tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `action/primary` | Ação principal da viewport | Máximo 1 por área principal |
| `action/secondary` | Ação relevante, mas não dominante | Apoio à principal |
| `action/ghost` | Ação contextual leve | Menus, linhas de tabela, ações auxiliares |
| `action/destructive` | Ação irreversível ou sensível | Precisa de fricção adequada |

### 2.5 State tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `state/info` | Informação neutra ou contextual | Status operacionais sem urgência |
| `state/success` | Resultado positivo confirmado | Nunca para otimismo especulativo |
| `state/warning` | Atenção ou risco moderado | Exige leitura, mas não pânico |
| `state/error` | Erro, falha ou risco alto | Precisa orientar correção |
| `state/neutral` | Estado sem carga emocional | Placeholders, estados transitórios, apoio |

### 2.6 Focus tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `focus/ring` | Borda ou halo de foco | Obrigatório para todo elemento interativo |
| `focus/offset` | Separação do foco em superfícies complexas | Usar quando borda competir com o fundo |
| `focus/glow` | Ênfase adicional controlada | Só quando não prejudica contraste |

### 2.7 Global interaction states

| Estado | Token canônico | Valor base | Regra operacional |
|---|---|---|---|
| `hover` | `states.interactive.hover.overlayDark` | `rgba(100, 200, 255, 0.06)` | Só para superfícies acionáveis; nunca competir com foco |
| `pressed` | `states.interactive.pressed.scale` | `0.985` | Press reduz escala com contenção premium, sem bounce agressivo |
| `pressed` | `states.interactive.pressed.opacity` | `0.94` | Usar junto de overlay, não como substituto de contraste |
| `pressed` | `states.interactive.pressed.backgroundDark` | `rgba(120, 210, 255, 0.05)` | Overlay dark padrão para toque, filtros, tabs e itens selecionáveis |
| `focus` | `states.interactive.focus.ringWidth` | `2` | Obrigatório para teclado, navegação e inputs focáveis |
| `focus` | `states.interactive.focus.ring` | `rgba(100, 200, 255, 0.30)` | Halo bioluminescente sutil, legível e não decorativo |
| `focus` | `states.interactive.focus.glow` | `rgba(59, 130, 246, 0.24)` | Usar apenas como reforço do ring, nunca sozinho |
| `disabled` | `states.interactive.disabled.opacity` | `0.52` | Estado indisponível mantém legibilidade e não some da interface |
| `disabled` | `states.interactive.disabled.borderDark` | `rgba(100, 200, 255, 0.08)` | Borda reduzida para superfícies dark desabilitadas |
| `loading` | `states.interactive.loading.opacity` | `0.72` | Estado transitório sem colapsar layout |
| `loading` | `states.interactive.loading.surfaceDark` | `rgba(10, 22, 40, 0.76)` | Superfície de loading dark consistente com profundidade oceânica |
| `loading` | `states.interactive.loading.shimmerHighlight` | `rgba(100, 200, 255, 0.12)` | Brilho de shimmer sutil e controlado |

### 2.8 Bottom tab bar runtime contract

| Área | Token canônico | Papel | Regra operacional |
|---|---|---|---|
| Container | `components.navigation.bottomTabBar.container.dark.*` | Gradiente base da navegação | Deve usar `top`, `mid`, `bottom` sem hardcode local |
| Linha premium | `components.navigation.bottomTabBar.premiumLine.*` | Assinatura oceânica superior | Glow horizontal sutil, nunca neon agressivo |
| Glass ativo | `components.navigation.bottomTabBar.activeTab.*` | Estado selecionado | Borda, gradiente e largura mínima centralizados em tokens |
| Indicador | `components.navigation.bottomTabBar.indicator.*` | Feedback de tab ativa | Largura, expansão e glow governados por tokens |
| Ambiente | `components.navigation.bottomTabBar.ambient.*` | Profundidade periférica | Reforça camadas sem roubar atenção do conteúdo |

### 2.9 Data emphasis tokens

| Token semântico | Papel | Regra de uso |
|---|---|---|
| `metric/default` | Métrica padrão | KPIs neutros |
| `metric/positive` | Ganho ou avanço confirmado | Crescimento, melhoria, sucesso |
| `metric/negative` | Queda, perda ou risco | Redução, falha, alerta |
| `metric/neutral` | Variação não classificável | Base comparativa ou dado não conclusivo |

---

## 3. Tema oficial

O Abyss é **dark-first, dual-theme capable**.

| Tema | Papel |
|---|---|
| **Dark / Oceanic Dark** | Expressão premium oficial do sistema |
| **Light / Controlled Compatibility** | Compatibilidade visual para cenários específicos |

A IA deve assumir **dark** como padrão, a menos que o requisito do produto justifique explicitamente o tema light.

---

## 4. Tokens estéticos canônicos do Abyss

Esses tokens sustentam a assinatura visual. Eles não substituem a camada semântica; apenas a expressam.

### 4.1 Depth colors

| Token | Valor | Papel |
|---|---|---|
| `--abyss-depth-surface` | `#0a1628` | topo do gradiente de profundidade |
| `--abyss-depth-shallow` | `#071422` | camada intermediária alta |
| `--abyss-depth-mid` | `#050f1a` | profundidade média |
| `--abyss-depth-deep` | `#030a12` | profundidade baixa |
| `--abyss-depth-abyss` | `#020608` | fundo máximo |

### 4.2 Glass layers

| Token | Valor | Papel |
|---|---|---|
| `--abyss-glass-top` | `rgba(10, 22, 40, 0.82)` | camada superior do glass |
| `--abyss-glass-mid` | `rgba(8, 18, 35, 0.85)` | camada média do glass |
| `--abyss-glass-bottom` | `rgba(6, 14, 28, 0.88)` | camada inferior do glass |
| `--abyss-glass-light-top` | `rgba(10, 22, 40, 0.80)` | versão leve para interações menores |
| `--abyss-glass-light-mid` | `rgba(8, 18, 35, 0.84)` | versão leve média |
| `--abyss-glass-light-bottom` | `rgba(6, 14, 28, 0.86)` | versão leve inferior |

### 4.3 Bioluminescent tokens

| Token | Valor | Papel |
|---|---|---|
| `--bio-primary` | `#64B4FF` | destaque principal de assinatura |
| `--bio-secondary` | `#50C8DC` | apoio secundário |
| `--bio-accent` | `#3CDCC8` | acento contido |
| `--bio-border` | `rgba(100, 200, 255, 0.15)` | borda premium padrão |
| `--bio-top-line` | `rgba(100, 200, 255, 0.10)` | acabamento superior |
| `--bio-ambient` | `rgba(100, 200, 255, 0.03)` | atmosfera localizada |
| `--bio-whisper` | `rgba(100, 180, 255, 0.015)` | santuário sutil |

---

## 5. Mapeamento semântico → estético

A IA deve usar a tabela abaixo como default de implementação.

| Token semântico | Expressão dark recomendada | Observação |
|---|---|---|
| `surface/base` | profundidade oceânica base | Sem glow |
| `surface/subtle` | bg secundário ou glass muito leve | Não competir com card principal |
| `surface/elevated` | glass padrão + sombra card | Relevo controlado |
| `surface/overlay` | surface elevada + overlay escuro | Foco contextual |
| `border/default` | `--bio-border` | Borda premium oficial |
| `border/focus` | accent/focus visível | Nunca invisível |
| `text/primary` | texto gelo de alto contraste | Métrica e título |
| `text/secondary` | cinza metálico secundário | Explicação e apoio |
| `action/primary` | gradiente/button primary oficial | Máximo 1 por área principal |
| `state/error` | cor semântica de erro + fundo soft | Sempre com orientação de correção |

---

## 6. Regras de uso de tokens

| Regra | Decisão obrigatória |
|---|---|
| **Semântica primeiro** | Nunca escolher visual antes do papel |
| **Poucas superfícies hero** | Nem toda caixa merece glass premium completo |
| **Borda premium é rara e precisa** | Não usar borda bioluminescente em tudo |
| **Accent é hierarquia, não decoração** | Cor de destaque deve orientar prioridade |
| **Textos críticos vencem atmosfera** | Sempre aumentar legibilidade antes de preservar efeito |
| **Tema light não inventa identidade nova** | Continua falando a língua do Abyss |

---

## 7. Motion e particles

| Elemento | Regra |
|---|---|
| **Particles** | Só em fundos de contexto, nunca em áreas de foco operacional intenso |
| **Glow pulsante** | Usar raramente e respeitar reduced motion |
| **Transições** | Curvas suaves e duração controlada |
| **Feedback** | Motion deve confirmar ação ou orientar, nunca só ornamentar |

---

## 8. O que a IA deve evitar

| Erro comum | Correção |
|---|---|
| Escolher direto `--bio-*` porque “parece bonito” | Começar pelo token semântico |
| Usar glass forte em todos os cards | Reservar relevo para o que importa |
| Criar borda nova fora da escala | Reusar `border/subtle`, `border/default` ou `border/focus` |
| Usar accent demais em tabela e dashboard | Guardar acento para prioridade e estado |
| Confundir status com estética da marca | Estado semântico sempre vence assinatura visual |

---

## 9. Definição de pronto para tokens

Uma implementação baseada em tokens só está correta quando atende os cinco pontos abaixo.

| Critério | Validação |
|---|---|
| **Semântico** | O papel do elemento é claro e nomeado corretamente |
| **Consistente** | O mesmo papel usa o mesmo token em contextos equivalentes |
| **Acessível** | Há contraste, foco e distinção suficiente |
| **Premium** | A superfície transmite profundidade sem ruído |
| **Escalável** | Outra IA conseguiria repetir a lógica sem inventar exceção |
