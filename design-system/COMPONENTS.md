# Abyss Components

> Este documento descreve os **contratos oficiais** dos componentes do Abyss. O objetivo não é apenas mostrar HTML/CSS, mas definir **quando usar, como compor, quais estados existem e quais regras de UX, acessibilidade e motion são obrigatórias**.

---

## 1. Como ler esta documentação

Todo componente oficial do Abyss deve ser entendido nesta ordem.

| Ordem | Bloco | Pergunta que responde |
|---:|---|---|
| 1 | **Purpose** | Para que o componente existe? |
| 2 | **When to use** | Em quais contextos ele é a escolha correta? |
| 3 | **Anatomy** | Quais partes estruturais são obrigatórias? |
| 4 | **Variants** | Quais variações oficiais existem? |
| 5 | **States** | Como ele se comporta em default, hover, focus, active, disabled, loading ou erro? |
| 6 | **Accessibility** | Como foco, teclado, contraste e semântica devem funcionar? |
| 7 | **Do / Don’t** | O que respeita ou quebra o padrão do Abyss? |

Se um componente não tiver esses sete blocos, ele ainda não está maduro o suficiente para implementação por IA.

---

## 2. Regras globais de componentes

| Regra | Decisão obrigatória |
|---|---|
| **Semântica antes da estética** | O componente deve nascer do papel funcional, não do efeito visual |
| **Máximo de prioridade visual** | Um componente não pode competir com a hierarquia primária da tela |
| **Motion funcional** | Toda animação deve orientar, confirmar ou suavizar transição |
| **Estados explícitos** | Elementos interativos precisam de estados completos e previsíveis |
| **Acessibilidade premium** | Foco, contraste e áreas de toque adequadas são obrigatórios |
| **Escalabilidade** | O componente deve poder ser repetido em vários contextos sem exceção visual |

---

## 3. BText

### Purpose

O **BText** existe para garantir **hierarquia, escaneabilidade e consistência verbal**. Em BlackInk, tipografia não é decoração; é infraestrutura de leitura.

### When to use

| Uso correto | Uso incorreto |
|---|---|
| Títulos, métricas, labels, explicações e status | Criar tamanhos ad hoc fora da escala |

### Anatomy

| Parte | Obrigatória |
|---|---|
| Estilo tipográfico oficial | Sim |
| Cor semântica correta | Sim |
| Variação numérica tabular em métricas | Sim, quando houver números comparáveis |

### Variants oficiais

| Grupo | Variantes |
|---|---|
| **Display** | display, metric, metric-lg, metric-sm |
| **Heading** | h1, h2, h3, title |
| **Section** | section-title, section-subtitle |
| **Label** | label, label-sm, label-upper |
| **Body** | body, body-md, body-sm |
| **Caption** | caption, caption-md |
| **Numeric** | numeric, numeric-lg, percentage, percentage-lg |

### Regras de uso

| Regra | Decisão |
|---|---|
| **No máximo um display dominante por bloco** | Evitar competição de leitura |
| **Números comparáveis usam tabular nums** | Tabelas, KPIs e comparações |
| **Label uppercase é exceção** | Só para reforço de categoria, nunca corpo de conteúdo |

---

## 4. BButton

### Purpose

O **BButton** existe para organizar prioridade de ação. Em Abyss, botão não é só clique; é hierarquia de decisão.

### When to use

| Variante | Quando usar |
|---|---|
| **Primary** | Única ação principal da área |
| **Secondary** | Ação relevante, mas não dominante |
| **Outline** | Ação importante sem roubar a prioridade da primary |
| **Ghost** | Ação contextual ou suporte |
| **Danger** | Ação destrutiva ou irreversível |

### Anatomy

| Parte | Obrigatória |
|---|---|
| Container com tamanho oficial | Sim |
| Label clara | Sim |
| Estado visual completo | Sim |
| Disabled/loading previsível | Sim |

### States obrigatórios

| Estado | Regra |
|---|---|
| **Default** | Botão claro e consistente com a prioridade |
| **Hover** | Pode aumentar resposta visual, nunca teatralidade |
| **Focus** | Precisa ser visível e consistente |
| **Active/pressed** | Feedback curto e controlado |
| **Disabled** | Perder ênfase, mas manter legibilidade |
| **Loading** | Bloquear clique duplicado e comunicar processamento |

### Regras de UX

| Regra | Decisão |
|---|---|
| **Máximo 1 primary por viewport principal** | Obrigatório |
| **Danger pede fricção** | Confirmação ou contexto adicional quando houver risco alto |
| **Ghost não pode parecer link perdido** | Deve manter consistência de affordance |

---

## 5. BCard

### Purpose

O **BCard** cria profundidade, agrupamento e foco contextual. Ele é a principal superfície premium do Abyss.

### When to use

| Uso correto | Uso incorreto |
|---|---|
| Agrupar métricas, blocos analíticos, status e configurações relacionadas | Colocar card em tudo e transformar a tela em mosaico pesado |

### Anatomy

| Parte | Obrigatória |
|---|---|
| Superfície com depth/glass coerente | Sim |
| Delimitação sutil | Sim |
| Conteúdo com padding consistente | Sim |
| Hierarquia interna clara | Sim |

### Variants oficiais

| Variante | Uso |
|---|---|
| **Default** | Bloco padrão de conteúdo |
| **Elevated** | Card com destaque superior |
| **Compact** | Uso em grids e métricas secundárias |
| **Interactive** | Card clicável ou selecionável |

### Regras de UX

| Regra | Decisão |
|---|---|
| **Card não substitui layout** | A estrutura da tela deve funcionar mesmo sem excesso de cards |
| **Glow ambiente é raro** | Só quando reforça profundidade sem atrapalhar leitura |
| **Card clicável precisa parecer clicável** | Hover/focus/pressed devem ser evidentes |

---

## 6. BInput

### Purpose

O **BInput** existe para captura de dado com o mínimo possível de esforço e ambiguidade.

### When to use

| Uso correto | Uso incorreto |
|---|---|
| Entrada de texto, senha, código, parâmetro ou filtro curto | Formular campos longos sem agrupamento, ajuda e validação |

### Anatomy

| Parte | Obrigatória |
|---|---|
| Label clara | Sim |
| Campo com placeholder útil | Sim |
| Estado de foco visível | Sim |
| Mensagem de erro e ajuda contextual | Sim |

### States obrigatórios

| Estado | Regra |
|---|---|
| **Default** | Campo legível e neutro |
| **Focus** | Destaque claro sem exagero |
| **Filled** | Valor legível e estável |
| **Error** | Cor + mensagem + orientação |
| **Disabled** | Inativo, mas compreensível |
| **Success** | Usar com parcimônia, só quando agrega segurança |

### Regras de UX

| Regra | Decisão |
|---|---|
| **Ajuda perto do contexto** | Nunca obrigar o usuário a adivinhar |
| **Erro explica correção** | Não basta dizer que falhou |
| **Campos avançados** | Ficam recolhidos por padrão quando possível |

---

## 7. BFilterBar / BFilterButton

### Purpose

Esses componentes existem para tornar **complexidade filtrável** sem despejar tudo de uma vez. São peças centrais para a sensação de simplicidade em produto denso.

### When to use

| Contexto | Decisão |
|---|---|
| **Filtros principais** | Visíveis por padrão |
| **Filtros avançados** | Em drawer, popover ou expansão controlada |

### Regras de UX

| Regra | Decisão |
|---|---|
| **Essencial primeiro** | Só os filtros que mudam 80% dos casos ficam expostos |
| **Contagem e estado ativo** | Precisam ser claramente percebidos |
| **Limpeza de filtro** | Deve ser rápida e previsível |

---

## 8. BToast / BBanner / Feedback

### Purpose

Esses componentes comunicam resultado, status e orientação de recuperação.

### Regras oficiais

| Tipo | Uso |
|---|---|
| **Toast** | Feedback curto, não crítico e temporário |
| **Banner** | Estado persistente ou relevante para a operação |
| **Inline feedback** | Correção imediata em formulário ou bloco local |

| Severidade | Regra |
|---|---|
| **Info** | Orienta sem alarmar |
| **Success** | Confirma ação concluída |
| **Warning** | Exige atenção, mas não pânico |
| **Error** | Explica falha e próxima ação |

---

## 9. BAbyssBackground

### Purpose

O **BAbyssBackground** carrega a assinatura ambiental do sistema. Ele existe para sustentar profundidade, não para chamar mais atenção que o conteúdo.

### Regras de uso

| Regra | Decisão |
|---|---|
| **Background é estrutural** | Nunca informacional |
| **Particles são opcionais** | Devem poder ser reduzidas ou desligadas |
| **Performance vence assinatura** | Se motion ou partículas afetarem clareza/performance, reduzir |
| **Android e web** | Devem ter fallback coerente, não abandono visual |

---

## 10. Componentes que o Abyss precisa formalizar como padrão premium

Para atingir nível mundial, o sistema precisa documentar explicitamente mais estes padrões.

| Componente/padrão | Motivo |
|---|---|
| **Tabela densa premium** | Produto operacional depende disso |
| **Drawer de detalhe** | Mantém profundidade sem sobrecarregar viewport |
| **Bulk actions bar** | Essencial para operação em massa |
| **Empty state operacional** | Precisa orientar próximo passo concreto |
| **Skeleton/loading de dashboard** | Aumenta robustez percebida |
| **Status row de integração** | Crítico para tracker, postback e proteção |

---

## 11. Acessibilidade obrigatória para todos os componentes

| Tema | Regra |
|---|---|
| **Foco** | Sempre visível |
| **Teclado** | Navegação coerente quando aplicável |
| **Contraste** | Legibilidade acima da estética |
| **Hit area** | Ações frequentes com área confortável |
| **Motion** | Respeitar reduced motion |
| **Estado** | Nunca depender só de cor |

---

## 12. Regra final

> Um componente do Abyss não está pronto quando está bonito. Ele está pronto quando pode ser reutilizado por outra IA, em outra tela, com a mesma clareza, a mesma assinatura e a mesma disciplina.
