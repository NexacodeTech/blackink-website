# Abyss AI Implementation Protocol

**Objetivo:** permitir que Manus AI, Claude Code ou qualquer outra IA implemente novas funcionalidades na BlackInk sem quebrar o padrão visual, de UX e de interação do Abyss.

Este protocolo é **prescritivo**. Se houver conflito entre improviso visual e regra do sistema, **a regra do sistema vence**.

---

## 1. Ordem correta de leitura

Antes de criar qualquer tela, fluxo, componente ou refactor visual, a IA deve ler nesta ordem:

| Ordem | Documento | Objetivo |
|---:|---|---|
| 1 | `blackink-app/src/theme/ABYSS_DESIGN_SYSTEM.md` | Entender filosofia, arquitetura, princípios e contratos globais |
| 2 | `design-system/TOKENS.md` | Escolher tokens corretos |
| 3 | `design-system/COMPONENTS.md` | Reutilizar componentes e padrões existentes |
| 4 | Arquivos reais do contexto | Validar que a solução respeita a implementação atual e não cria divergência desnecessária |

Se a IA não tiver lido os quatro níveis, ela **não está autorizada** a inventar interface nova.

---

## 2. Regra de decisão principal

A IA deve seguir sempre esta sequência mental:

| Passo | Pergunta obrigatória |
|---:|---|
| 1 | Qual problema operacional do usuário esta interface resolve? |
| 2 | Qual é o contexto da tela: dashboard, tabela, formulário, detalhe, alerta, configuração, onboarding ou marketing? |
| 3 | Qual é a prioridade primária da viewport? |
| 4 | Quais tokens semânticos representam essa prioridade? |
| 5 | Qual componente oficial já resolve 80% do problema? |
| 6 | O que precisa ficar escondido por progressive disclosure? |
| 7 | Como foco, contraste, estados e reduced motion serão tratados? |

A IA nunca deve começar por cor, glow, gradiente ou animação.

---

## 3. O que a IA deve otimizar

| Prioridade | Meta |
|---:|---|
| 1 | **Legibilidade sob pressão** |
| 2 | **Simplicidade percebida** |
| 3 | **Consistência com o Abyss** |
| 4 | **Profundidade premium controlada** |
| 5 | **Escalabilidade para futuras telas** |

Se existir conflito entre “impacto visual” e “clareza operacional”, a IA deve escolher **clareza operacional**.

---

## 4. Regras fixas de layout e hierarquia

| Tema | Regra |
|---|---|
| **CTA primário** | Máximo 1 por viewport principal |
| **Ações secundárias relevantes** | Máximo 2 com peso visual médio |
| **Ações avançadas** | Devem ficar em menu, drawer, aba ou expansão |
| **Métrica principal** | Deve aparecer antes de detalhes explicativos |
| **Texto de apoio** | Deve existir para reduzir ambiguidade, não para repetir o título |
| **Ruído visual** | Efeitos oceanográficos jamais podem competir com dados |
| **Profundidade** | Deve ser sentida em camadas, não em excesso de ornamento |

---

## 5. Regras obrigatórias por tipo de tela

### 5.1 Dashboard

| Elemento | Regra |
|---|---|
| **Topo da tela** | Exibir estado do negócio, métrica principal e ação prioritária |
| **KPIs** | Máximo 4 primários por linha lógica |
| **Detalhes** | Ficam abaixo ou em painel secundário |
| **Comparações** | Devem usar alinhamento e tipografia numérica tabular |

### 5.2 Tabelas e listas densas

| Elemento | Regra |
|---|---|
| **Colunas** | Priorizar leitura; eliminar ruído não essencial |
| **Ações em linha** | Só as mais frequentes ficam visíveis |
| **Bulk actions** | Só aparecem após seleção |
| **Estados vazios** | Devem orientar a próxima ação concreta |

### 5.3 Formulários

| Elemento | Regra |
|---|---|
| **Campos** | Agrupar por intenção, não por backend |
| **Campos avançados** | Recolhidos por padrão |
| **Erro** | Mostrar perto do campo e explicar o que corrigir |
| **Ajuda** | Usar microcopy contextual, não blocos longos |

### 5.4 Modais e drawers

| Elemento | Regra |
|---|---|
| **Modal** | Usar para confirmação, decisão curta ou tarefa pequena |
| **Drawer** | Usar para detalhe contextual, filtros avançados e edição sem perder contexto |
| **Escape** | Sempre previsível por clique externo, botão claro ou tecla adequada |

---

## 6. Contrato de estilo

| Decisão | Regra |
|---|---|
| **Surface** | Escolher primeiro o nível semântico da superfície |
| **Bordas** | Sempre discretas; nunca competir com conteúdo |
| **Glow** | Usar com contenção; nunca atrás de texto crítico |
| **Particles** | Permitidas só como assinatura ambiental e nunca em fluxos de concentração alta |
| **Accent color** | Usar para hierarquia e ação, não para decoração gratuita |
| **Radius** | Seguir escala oficial; proibir raios ad hoc |
| **Shadows** | Devem reforçar profundidade, não produzir efeito “flutuante demais” |

---

## 7. Contrato de acessibilidade

| Tema | Regra obrigatória |
|---|---|
| **Foco visível** | Todo elemento interativo deve ter foco observável e consistente |
| **Contraste** | Nenhum texto essencial pode depender de contraste fraco em nome de estética |
| **Teclado** | Fluxos críticos precisam ser navegáveis sem mouse/toque quando aplicável |
| **Reduced motion** | Animações decorativas devem respeitar redução de movimento |
| **Estado** | Não comunicar estado apenas por cor |
| **Hit area** | Garantir alvo confortável para ações frequentes |

---

## 8. O que a IA nunca deve fazer

| Anti-padrão | Proibição |
|---|---|
| **Inventar nova paleta semântica** | Proibido |
| **Criar componente novo sem verificar se já existe base reutilizável** | Proibido |
| **Encher a tela de glass, blur e glow** | Proibido |
| **Mostrar todas as opções de uma vez** | Proibido |
| **Criar exceção visual para resolver urgência local** | Proibido |
| **Misturar estilo marketing com estilo operacional sem critério** | Proibido |
| **Aceitar inconsistência entre app e web sem registrar decisão** | Proibido |

---

## 9. Checklists obrigatórios

### 9.1 Antes de implementar

| Pergunta | Sim/Não |
|---|---|
| Li a doutrina do Abyss? |  |
| Sei qual contexto de tela estou resolvendo? |  |
| Sei qual ação é a principal? |  |
| Identifiquei o que deve ficar escondido por disclosure? |  |
| Reutilizei padrões existentes antes de pensar em exceções? |  |

### 9.2 Durante a implementação

| Pergunta | Sim/Não |
|---|---|
| Estou usando tokens semânticos antes de tokens estéticos? |  |
| A interface está calma e legível? |  |
| Existe foco visível e contraste adequado? |  |
| O motion ajuda ou só enfeita? |  |
| A tela ainda parece BlackInk? |  |

### 9.3 Antes de concluir

| Pergunta | Sim/Não |
|---|---|
| Outra IA conseguiria repetir esse padrão? |  |
| App e web continuam coerentes? |  |
| A solução evita susto cognitivo? |  |
| O componente ou fluxo documentado pode virar padrão? |  |
| A entrega aumenta consistência em vez de criar dívida? |  |

---

## 10. Definição de pronto no Abyss

Uma entrega só está pronta quando atende simultaneamente aos cinco critérios abaixo.

| Critério | Definição |
|---|---|
| **Clareza** | O usuário entende o que está vendo sem esforço extra |
| **Consistência** | A solução se encaixa no ecossistema do Abyss sem parecer exceção |
| **Premium** | A experiência transmite controle, profundidade e qualidade |
| **Acessibilidade** | Foco, contraste, estado e motion foram tratados corretamente |
| **Escala** | A solução pode ser repetida em novas features sem retrabalho conceitual |

---

## 11. Regra final

> Se a interface ficou bonita, mas mais difícil de entender, a IA falhou.

> Se a interface ficou simples, mas perdeu a assinatura de profundidade oceânica, a IA falhou.

> Se a interface ficou clara, consistente, profunda e fácil de operar, então ela está dentro do Abyss.
