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
- ✅ **Botões "Começar Agora" dos planos redirecionam DIRETO para `/cadastro/?plan=NomePlano&period=monthly`**
- ✅ **CTA final redireciona para `/subscribe/` (permite escolher período)**
- ✅ Já possui botão de WhatsApp na seção CTA final

### 2. `/website/subscribe/index.html`
- ✅ Atualizado todos os preços nos cards de planos
- ✅ Corrigido desconto anual de -20% para -15%
- ✅ Atualizado data-attributes nos cards (data-price-monthly, data-price-quarterly, data-price-yearly)
- ✅ Botões já redirecionam corretamente para `/cadastro/` com parâmetros plan e period
- ✅ **Adicionado seção de WhatsApp antes dos trust badges**

### 3. `/website/cadastro/index.html`
- ✅ Atualizado objeto PLANS no JavaScript com novos valores
- ✅ Corrigido cálculo do desconto anual de 0.8 (20%) para 0.85 (15%)
- ✅ Página já recebe corretamente os parâmetros de plan e period via URL
- ✅ **Adicionado botão de WhatsApp no rodapé do formulário**

## Fluxo de Assinatura

O fluxo de assinatura foi otimizado com duas opções principais:

### Fluxo 1: Direto dos Planos (Index → Cadastro)
1. **Index (/)** → Usuário escolhe um plano específico e clica em "Começar Agora"
   - Link DIRETO: `/cadastro/?plan=NomePlano&period=monthly`
   - Vai direto para o cadastro com o plano escolhido e período mensal pré-selecionado
   - **Ideal para quem já decidiu o plano**

### Fluxo 2: CTA Geral ou Subscribe (Index → Subscribe → Cadastro)
1. **Index (/)** → Usuário clica no CTA final "Começar Agora" (sem plano específico)
   - Link: `/subscribe/`
   - Vai para página de seleção onde pode comparar e escolher o período

2. **Subscribe (/subscribe/)** → Usuário escolhe o plano e período (mensal/trimestral/anual)
   - Link: `/cadastro/?plan=NomePlano&period=monthly|quarterly|yearly`
   - **Ideal para quem quer comparar períodos e descontos**

3. **Cadastro (/cadastro/)** → Preenche os dados e finaliza
   - Recebe plan e period via URL
   - Calcula o preço correto baseado no período selecionado
   - Envia para a API de cadastro

### Suporte via WhatsApp
Todas as páginas agora possuem opção de contato via WhatsApp:
- **Index**: Seção CTA final
- **Subscribe**: Seção antes dos trust badges
- **Cadastro**: Rodapé do formulário

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

### Preços e Descontos
1. ✅ Verificar se os preços estão corretos na página inicial (R$ 119,99, R$ 469,99, R$ 999,99)
2. ✅ Verificar se os preços mudam corretamente ao alternar entre mensal/trimestral/anual em /subscribe/
3. ✅ Verificar desconto trimestral (10%) e anual (15%) aplicados corretamente

### Fluxo de Navegação
4. ✅ **Index → Cadastro**: Clicar em "Começar Agora" de qualquer plano deve redirecionar DIRETO para `/cadastro/?plan=NomePlano&period=monthly`
5. ✅ **Index → Subscribe**: CTA final "Começar Agora" (genérico) deve redirecionar para `/subscribe/`
6. ✅ **Subscribe → Cadastro**: Ao escolher período e clicar em "Começar Agora" deve redirecionar para `/cadastro/?plan=NomePlano&period=escolhido`
7. ✅ Verificar se o preço mostrado em /cadastro/ está correto baseado no plano e período

### WhatsApp
8. ✅ Verificar botão WhatsApp na index (seção CTA final)
9. ✅ Verificar seção WhatsApp em /subscribe/ (antes dos trust badges)
10. ✅ Verificar botão WhatsApp em /cadastro/ (rodapé do formulário)
11. ✅ Verificar se todos os links do WhatsApp funcionam corretamente

## Data da Atualização
2026-03-02
