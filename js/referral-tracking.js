/**
 * BlackInk Referral Tracking
 * 1. Detecta ?ref=CODE na URL e salva IMEDIATAMENTE no localStorage (sincrono).
 * 2. Rastreia a visita via API (assincrono) e salva o cookie_token.
 * 3. Propaga o ref em links internos (/cadastro/, /subscribe/) para nao perder a atribuicao.
 * Incluir em todas as paginas do website (landing, subscribe, cadastro).
 */
(function() {
    'use strict';

    var API_BASE_URL = 'https://api.blackink.cloud';
    var REFERRAL_COOKIE_KEY = 'blackink_referral_token';
    var REFERRAL_CODE_KEY = 'blackink_referral_code';

    var params = new URLSearchParams(window.location.search);
    var refCode = params.get('ref');

    // ── Salvar referral_code IMEDIATAMENTE (sincrono, antes de qualquer fetch) ──
    // Garante que mesmo que o visitante clique em um CTA antes do fetch retornar,
    // o codigo ja esta disponivel no localStorage para propagacao e registro.
    if (refCode) {
        localStorage.setItem(REFERRAL_CODE_KEY, refCode);
    }

    // Mesmo sem ref na URL, pode ter ref salvo — propagar nos links
    var savedRef = refCode || localStorage.getItem(REFERRAL_CODE_KEY);

    // ── Propagar ref em links internos ──
    if (savedRef) {
        document.querySelectorAll('a[href]').forEach(function(a) {
            var href = a.getAttribute('href');
            if (!href) return;
            // Apenas links internos que levam para cadastro ou subscribe
            if (href.indexOf('/cadastro/') === 0 || href.indexOf('/subscribe/') === 0) {
                var url = new URL(href, window.location.origin);
                if (!url.searchParams.has('ref')) {
                    url.searchParams.set('ref', savedRef);
                    a.setAttribute('href', url.pathname + url.search);
                }
            }
        });
    }

    // ── Tracking via API (assincrono) ──
    if (!refCode) return;

    // Ja rastreou esse codigo? Nao chamar API novamente
    // (verifica se ja tem cookie_token, pois o code ja foi salvo acima)
    var existingToken = localStorage.getItem(REFERRAL_COOKIE_KEY);
    var existingCode = localStorage.getItem(REFERRAL_CODE_KEY);
    if (existingCode === refCode && existingToken) return;

    // Coletar UTM params se presentes
    var utmData = {};
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function(key) {
        var val = params.get(key);
        if (val) utmData[key] = val;
    });

    // Montar payload
    var payload = { code: refCode };
    Object.keys(utmData).forEach(function(key) {
        payload[key] = utmData[key];
    });

    // Chamar API de tracking (cookie_token depende da resposta)
    fetch(API_BASE_URL + '/api/referral/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
        if (data && data.valid && data.cookie_token) {
            localStorage.setItem(REFERRAL_COOKIE_KEY, data.cookie_token);
        }
    })
    .catch(function() {
        // Erro no tracking — referral_code ja esta salvo no localStorage,
        // sera enviado como fallback no registro.
    });
})();
