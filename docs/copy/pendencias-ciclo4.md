# Pendências de copy — extraídas do index.html no ciclo 5

Estes blocos eram comentários HTML servidos em view-source na página de vendas.
Saíram do HTML e passam a viver aqui. Nada deles deve ser publicado antes de o fato existir.

## Objeções sem resposta (ciclo 4)

```
<!-- [PENDENTE] CINCO objeções que travam este público e que a página ainda não responde. Cada uma vira um
                 item de FAQ aqui assim que o fato existir. NÃO publicar resposta genérica — aqui promessa sem mecanismo
                 é pior que silêncio. DESTINATÁRIO: (1), (3) e (4) são fato de ENGENHARIA/PRODUTO, disponíveis
                 internamente hoje; só (2) depende de decisão do cliente e (5) do jurídico dele.

                 (1) DOMÍNIO — "Meu anúncio vai apontar para um domínio que não é meu?" É a objeção nº1 hoje: a copy diz
                     "URL da BlackInk" 12 vezes e nunca diz de quem é o host, então o leitor conclui footprint
                     compartilhado com anunciante desconhecido. Se for domínio/subdomínio dedicado por conta, publicar:
                     "Não. Você aponta o seu próprio domínio para a BlackInk. O histórico de aprovação e o footprint
                     continuam seus, e nenhum outro anunciante compartilha o host com você." Se for pool compartilhado,
                     dizer com todas as letras e explicar o isolamento: quantos anunciantes por host, o que acontece com
                     os demais se um vizinho for reprovado, e como se troca de host.

                 (2) CONFIDENCIALIDADE DA OFFER PAGE — a página pede o HTML do ativo que está faturando e não diz quem
                     pode abri-lo (agravado por vendermos o Clone). Precisa de: quem dentro da BlackInk pode abrir o HTML
                     hospedado e sob qual circunstância (suporte só mediante autorização do titular?), se há criptografia
                     em repouso, e o que acontece com o arquivo quando a conta é encerrada. Frase concreta e verificável,
                     sem adjetivo. NÃO publicar "seus dados estão seguros".

                 (3) FAIL-MODE — "Se a BlackInk cair, minha offer page fica exposta?" [PENDENTE: ENGENHARIA confirma,
                     NÃO é fato do cliente] docs/flows/04-cloaker.md descreve comportamento MISTO: invariante 4 =
                     fail-CLOSED na decisão (qualquer Throwable e país não resolvido resultam em safe page);
                     invariante 5 = fail-OPEN explícito (cloaker desativado pelo usuário, credencial inválida,
                     no_cloaker resultam em offer page). Confirmar qual vale em produção e o que acontece quando a
                     plataforma inteira fica indisponível. Por ser misto, NÃO publicar "fail-safe" genérico. Se
                     confirmado fail-closed no caminho de indisponibilidade, publicar: "Não. Em indisponibilidade a
                     requisição é servida com a safe page — o padrão é fechar, não abrir. Você perde venda naquele
                     intervalo, não perde a conta."

                 (4) PARÂMETROS DE URL — "gclid, utm e sub_id chegam na offer page?" [PENDENTE: ENGENHARIA confirma o
                     passthrough de query string do roteamento até a offer page]. Objeção de bloqueio de compra e hoje
                     invisível na página: ninguém troca a URL de destino de campanha que fatura sem saber se a
                     atribuição de criativo e de palavra-chave sobrevive. Precisa de: quais parâmetros são repassados,
                     se existe allowlist, e o que acontece com parâmetro desconhecido. Vira item logo depois de
                     "Já uso outro cloaker. É difícil migrar?", que é onde a pergunta nasce.

                 (5) EXPOSIÇÃO JURÍDICA — "Isso é ilegal? Posso responder na Justiça?" O item de política acima
                     responde ToS, não Justiça, e o leitor faz as duas perguntas. [PENDENTE: JURÍDICO do cliente
                     aprova antes de publicar — a BlackInk não pode emitir parecer jurídico numa página de vendas.]
                     Redação proposta, a ser revisada: "A BlackInk não dá parecer jurídico, e ninguém deveria decidir
                     risco com base numa página de vendas. O que dá para separar é isto: servir páginas diferentes por
                     visitante é descumprimento do contrato que você assinou com a rede de anúncios, e a sanção
                     prevista ali é da rede — reprovação do anúncio, suspensão ou banimento da conta. Exposição
                     jurídica de verdade costuma nascer no conteúdo da oferta: a promessa que você faz, o claim, o
                     produto. Isso continua sendo seu, com ou sem cloaker. Se a sua operação estiver perto dessa
                     linha, converse com um advogado antes de escalar." -->
```

## Prova pendente — seção #prova (seção deletada no ciclo 5)

```
<!-- [PENDENTE: cliente precisa fornecer] Esta página não tem UMA prova de terceiro, e este é o ponto de
                 maior alavancagem (leitor já concordou com o comparativo, ainda não viu o preço). Os dois parágrafos
                 que ficavam aqui foram removidos: um reformulava o lead de #comparison e o outro repetia o fecho de
                 #features e da garantia. A descrição do decision log foi para o card de #guarantee, colada no risco
                 zero. Quando houver material REAL, complementar este bloco, NESTA ordem de prioridade:
                   (0) DEMO PÚBLICA — a única prova que não depende de nenhum cliente autorizar, porque prova o
                       mecanismo em vez da opinião. Copy pronta, publicar só quando a URL existir e estiver estável:
                       "E dá para conferir na nossa: <URL>. Abra no seu navegador e você recebe a offer page. Abra por
                       VPN ou de um IP de datacenter e você recebe a safe page. Mesma URL, resposta diferente — sem
                       cadastro, sem cartão."
                   (1) print real de decision log de cliente, com IPs mascarados — mesmo artefato que a garantia manda
                       auditar, e basta UM cliente autorizar;
                   (2) número agregado auditável com metodologia declarada (contas ativas, campanhas e requisições
                       analisadas nos últimos 30 dias), no mesmo padrão do rodapé de fontes do roi-calc;
                   (3) 2–3 depoimentos nominais de media buyer — nome, nicho e rede (Google/Meta/TikTok) com dado
                       verificável. É o formato que este comprador menos acredita; entra por último.
                 NÃO renderizar nada aqui antes de o dado existir. Bloco vazio converte mais que prova fabricada. -->
```

## Prova pendente — #guarantee

```
<!-- [PENDENTE: cliente precisa fornecer] A prova que pertence a ESTE ponto da página (decisão), não à seção
                 Prova. A garantia hoje é afirmada, não provada. Dois fatos a transformam em contrato:
                   (1) TAXA REAL DE REEMBOLSO nos 7 dias, com a janela de medição ("N de cada 100 assinaturas dos últimos
                       12 meses pediram reembolso"). Sai direto do financeiro, não depende de nenhum cliente autorizar.
                   (2) PRAZO E MEIO DE DEVOLUÇÃO ("PIX em até X dias úteis; cartão estornado em até X dias").
                 Formato: UMA linha factual abaixo deste parágrafo, no padrão do rodapé de fontes do roi-calc (fato +
                 janela de medição), sem adjetivo e sem selo. NÃO renderizar antes de os dois números existirem. -->
```

## Métricas pendentes — painel demo

```
<!-- Fileira de metricas removida. "Req/segundo" era Math.random(), o mesmo defeito que ja
                             tinha tirado "R$ Economizado" e "99.9% Uptime" deste painel. "<50ms" era a terceira
                             repeticao e, dentro de um painel rotulado "Demo", contaminava uma especificacao real;
                             "0 Redirects" ja e afirmado na tabela comparativa e no FAQ.
                             [PENDENTE: cliente precisa fornecer req/s reais com janela de medicao] -->
```

## Selo LGPD pendente

```
<!-- [PENDENTE: cliente precisa fornecer] Selo de LGPD só volta com o fato por trás: encarregado de dados nomeado
             com contato público, política de retenção do HTML da offer page e prazo de exclusão após o encerramento da
             conta. Sem os três, é adjetivo. "SSL/TLS" e "Server-Side" saíram por não diferenciarem nada. -->
```

---

## Rodada 7 — pendências e notas retiradas do HTML servido

### [PENDENTE: cliente responde] Propriedade do domínio de destino
Objeção nº1 do público e hoje a página é 100% silenciosa (`grep -ic 'domínio' index.html` = 0).
A página manda apontar o anúncio para "a URL da BlackInk" em vários pontos e nunca diz de quem é o host.

Pergunta a publicar no FAQ: **"A URL de destino é domínio de vocês ou meu?"**

A resposta precisa cobrir, nas palavras do cliente:
- (a) o destino é subdomínio compartilhado da plataforma, subdomínio dedicado por conta, ou domínio próprio do anunciante apontado via DNS/CNAME;
- (b) se compartilhado, quantos anunciantes por host, o que acontece se um vizinho for reprovado e como se troca de host;
- (c) se dá para usar domínio próprio e se custa a mais.

Publicar como `<details class="faq-i rv rv-d6">` com a mesma estrutura dos itens existentes **e**
espelhar no JSON-LD FAQPage (topo do arquivo) SÓ depois da resposta.
Resposta vaga aqui é pior que o silêncio — não publicar genérico.

### Notas internas removidas do HTML servido (o conhecimento fica aqui)
- **Default da calculadora**: o `R$ 2.500` escrito no `#pricing-anchor` = R$ 10.000 × 25%, que é a posição inicial do slider. A frase fica correta mesmo sem JS; o script só a personaliza. O guard `if (anchorEl)` tolera o elemento ausente.
- **Ato 2 do pricing** (grid de valor) foi removido em ciclo anterior porque repetia integralmente a lista "Tudo isso incluído" ~300px abaixo.
- **"Menos de R$ 14 por dia"** vale para os três períodos porque R$ 399,99 é o teto — não quebra ao trocar o switcher.
- **`?v=` em `js/gsap-enhancements.js`**: incrementar a cada deploy para furar cache do navegador.
