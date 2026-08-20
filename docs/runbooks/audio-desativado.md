# Áudio da landing — desativado, o que reativar

O motor de áudio (`abyssEngine`, `LAYERS`, `startAudio`/`stopAudio`) foi **removido do
`index.html`** na rodada 7: eram 563 linhas (~22KB) baixadas e parseadas por toda pageview
sem nunca executar — nenhum dos quatro ids de controle (`audio-btn`, `audio-vol-range`,
`mob-audio-btn`, `mob-audio-vol`) existe no HTML, `startAudio()` nunca era chamada e o
`LAYERS.forEach` final registrava zero listeners.

Recuperar o código com:

```
git show ba499e6:index.html | sed -n '2615,3177p'
```

## Bug a corrigir ANTES de reativar

`#audio-btn` e `#audio-vol-range` estão comentados no HTML. Sem eles, `startAudio()`
liga as camadas e só depois estoura em `audioVol.value` (null): o som começa e o
usuário fica sem nenhum controle para desligar. Restaurar os elementos primeiro.

## Bloco a recolocar (depois de corrigir o HTML)

```js
const autoStartEvents = ['click', 'touchstart', 'scroll', 'keydown'];
function onFirstInteraction() {
    autoStartEvents.forEach(e => document.removeEventListener(e, onFirstInteraction, { capture: true }));
    startAudio();
}
autoStartEvents.forEach(e => document.addEventListener(e, onFirstInteraction, { once: true, capture: true }));

if (audioBtn) audioBtn.addEventListener('click', () => isPlaying ? stopAudio() : startAudio());
if (mobAudioBtn) mobAudioBtn.addEventListener('click', () => isPlaying ? stopAudio() : startAudio());
if (audioVol) audioVol.addEventListener('input', () => handleMasterVolume(audioVol.value));
if (mobAudioVol) mobAudioVol.addEventListener('input', () => handleMasterVolume(mobAudioVol.value));
```

Os guardas `if (...)` são obrigatórios: sem eles a linha lançava TypeError em toda pageview.
