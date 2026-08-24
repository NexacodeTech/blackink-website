# CSS morto no `<style>` do index.html

A rodada 6 removeu as famílias `.calc-loss*`, `.calc-cta*`, `.guarantee-*` (menos
`badge`/`text`), `.pricing-includes*`, `.cmp-*` e `.problem-card:nth-child(3)`, todas
verificadas como sem alvo no HTML e no JS.

A rodada 8 zerou o resto: saíram as famílias `.mock-*`, `.mockup`, `.showcase*`,
`.prot-sim-*`, `.founder-*`, `.testimonial-*`, `.proof-*`, `.term-*`, `.video-*`,
`.how-step*`, `.plat-*`, `.p-card*`, `.p-feat*`, `.pricing-grid*`, `.stats*`,
`.comm-*`, `.insight-*`, `.trust-badges`, `.rv-d6`, `.w3`, mais os `@keyframes`
órfãos (`sim*`, `notif-in`). O script abaixo agora retorna lista vazia.

Fatos de manutenção que viviam em comentário no arquivo servido e foram movidos
para cá quando os comentários saíram:

- `.features-hscroll` era um carrossel horizontal (100vw por painel,
  `overflow:hidden`) sem nenhum JS que transladasse o track — no desktop os painéis
  2 e 3 ficavam clipados e invisíveis. CSS e nav removidos; as seções empilham na
  vertical, como já faziam no mobile.
- O mockup de postback tinha um `.flow-node` homônimo do nó do diagrama de fluxo
  (definição viva mais abaixo no `<style>`) e vazava `gap:12px` + background de
  hover para dentro dele. Se alguém recriar um mockup, não reusar esse nome.
- A faixa `.trust-badges` (selos LGPD/SSL/Server-Side) saiu por ser selo sem lastro.
  Não reintroduzir sem prova real.
- O `initPricingToggle` e o `initCardTilt` do `js/gsap-enhancements.js` dependiam de
  `.p-card`, que não existe mais no HTML — removidos junto.
- A seção `#features` (painel Decision Log animado com dados de exemplo) saiu na
  rodada 8: não provava nada e a própria copy admitia ser demonstração. Formato que
  a substitui, quando o cliente entregar: `<img>` estática de um decision log real
  com dados borrados, dentro de `#como-funciona`.
  [PENDENTE: cliente precisa fornecer print real do decision log]
- [PENDENTE: cliente confirma o método técnico de ligação do domínio] O fato dos
  dois domínios (ambos do anunciante; domínio BlackInk nunca exposto) foi
  confirmado pelo cliente em 2026-08-20 e já está na copy. O COMO (CNAME, DNS
  apontado, proxy reverso) NÃO foi confirmado — não escrever esses termos em texto
  visível até a confirmação.
- [PENDENTE: engenharia confirma escopo] Atribuição (gclid/wbraid/gbraid, UTMs,
  decoração de links de checkout) está documentada em `docs/flows/01-clone-html.md`
  e `docs/flows/02-instalacao.md`, mas amarrada ao caminho Clone/instalador. Não foi
  publicada no FAQ porque a doc não sustenta a afirmação para toda configuração.

Para regerar a lista:

```bash
python3 - <<'PY'
import re, io
h = io.open('index.html', encoding='utf-8').read()
css = re.search(r'<style>(.*?)</style>', h, re.S).group(1)
rest = h[h.index('</style>'):]
sels = set(re.findall(r'\.([a-zA-Z][\w-]+)', re.sub(r'/\*.*?\*/', '', css, flags=re.S)))
print(sorted(s for s in sels if s not in rest))
PY
```

Antes de apagar qualquer família, confirmar que a classe não é montada por
concatenação de string no JS — a busca acima é textual e não cobre esse caso.
