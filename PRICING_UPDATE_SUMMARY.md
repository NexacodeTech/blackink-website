# Atualização de Preços - BlackInk

## Resumo das Alterações

Todos os preços dos planos foram atualizados conforme solicitado:

### Valores Mensais
- **Raso**: R$ 119,99/mês (era R$ 114,99)
- **Recife**: R$ 469,99/mês (era R$ 359,99)
- **Abissal**: R$ 999,99/mês (era R$ 799,99)

### Valores Trimestrais (10% de desconto)
- **Raso**: R$ 323,97/tri
- **Recife**: R$ 1.268,97/tri
- **Abissal**: R$ 2.699,97/tri

### Valores Anuais (15% de desconto)
- **Raso**: R$ 1.223,90/ano
- **Recife**: R$ 4.793,90/ano
- **Abissal**: R$ 10.199,90/ano

## Arquivos Alterados

### 1. `/website/index.html`
- ✅ Atualizado pricing section com novos valores
- ✅ Corrigido desconto anual de -20% para -15%
- ✅ Atualizado FAQ com novos valores
- ✅ **Botões "Começar Agora" redirecionam DIRETO para `/cadastro/?plan=NomePlano&period=monthly`**
- ✅ CTA final também redireciona para cadastro com plano Recife (mais popular)

### 2. `/website/subscribe/index.html`
- ✅ Atualizado todos os preços nos cards de planos
- ✅ Corrigido desconto anual de -20% para -15%
- ✅ Atualizado data-attributes nos cards (data-price-monthly, data-price-quarterly, data-price-yearly)
- ✅ Botões já redirecionam corretamente para `/cadastro/` com parâmetros plan e period

### 3. `/website/cadastro/index.html`
- ✅ Atualizado objeto PLANS no JavaScript com novos valores
- ✅ Corrigido cálculo do desconto anual de 0.8 (20%) para 0.85 (15%)
- ✅ Página já recebe corretamente os parâmetros de plan e period via URL

## Fluxo de Assinatura

O fluxo de assinatura foi otimizado:

### Fluxo Principal (Index → Cadastro)
1. **Index (/)** → Usuário vê os planos e clica em "Começar Agora"
   - Link DIRETO: `/cadastro/?plan=NomePlano&period=monthly`
   - Vai direto para o cadastro com período mensal pré-selecionado

### Fluxo Alternativo (Subscribe → Cadastro)
Usuários que acessam `/subscribe/` diretamente podem escolher o período:

1. **Subscribe (/subscribe/)** → Usuário escolhe o período (mensal/trimestral/anual) e clica em "Começar Agora"
   - Link: `/cadastro/?plan=NomePlano&period=monthly|quarterly|yearly`

2. **Cadastro (/cadastro/)** → Usuário preenche os dados e finaliza a assinatura
   - Recebe plan e period via URL
   - Calcula o preço correto baseado no período selecionado
   - Envia para a API de cadastro

## Cálculos dos Descontos

### Trimestral (10% de desconto)
```
Valor Trimestral = Valor Mensal × 3 × 0.90
```

Exemplos:
- Raso: R$ 119,99 × 3 × 0.90 = R$ 323,97
- Recife: R$ 469,99 × 3 × 0.90 = R$ 1.268,97
- Abissal: R$ 999,99 × 3 × 0.90 = R$ 2.699,97

### Anual (15% de desconto)
```
Valor Anual = Valor Mensal × 12 × 0.85
```

Exemplos:
- Raso: R$ 119,99 × 12 × 0.85 = R$ 1.223,90
- Recife: R$ 469,99 × 12 × 0.85 = R$ 4.793,90
- Abissal: R$ 999,99 × 12 × 0.85 = R$ 10.199,90

## Testes Recomendados

1. ✅ Verificar se os preços estão corretos na página inicial
2. ✅ Verificar se ao clicar em "Começar Agora" na index, redireciona DIRETO para `/cadastro/?plan=NomePlano&period=monthly`
3. ✅ Verificar se o preço mostrado em /cadastro/ está correto (R$ 119,99 para Raso, R$ 469,99 para Recife, R$ 999,99 para Abissal)
4. ✅ Verificar se os preços mudam corretamente ao alternar entre mensal/trimestral/anual em /subscribe/
5. ✅ Verificar se ao clicar em "Começar Agora" em /subscribe/, redireciona para /cadastro/ com plano e período corretos
6. ✅ Verificar se o CTA final da index redireciona para Recife mensal

## Data da Atualização
2026-03-02
