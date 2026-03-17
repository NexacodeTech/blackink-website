/**
 * BlackInk Referral Tracking
 * 1. Detecta ?ref=CODE na URL, rastreia a visita via API e salva o token no localStorage.
 * 2. Propaga o ref em links internos (/cadastro/, /subscribe/) para nao perder a atribuicao.
 * Incluir em todas as paginas do website (landing, subscribe, cadastro).
 */
(function() {
    'use strict';

    var API_BASE_URL = 'https://api.blackink.cloud';
    var REFERRAL_COOKIE_KEY = 'blackink_referral_token';
    var REFERRAL_CODE_KEY = 'blackink_referral_code';

    var params = new URLSearchParams(window.location.search);
    var refCode = params.get('ref');

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

    // ── Tracking via API ──
    if (!refCode) return;

    // Ja rastreou esse codigo? Nao chamar API novamente
    var existingCode = localStorage.getItem(REFERRAL_CODE_KEY);
    if (existingCode === refCode) return;

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

    // Chamar API de tracking
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
        // Salvar o codigo mesmo sem cookie_token (fallback)
        localStorage.setItem(REFERRAL_CODE_KEY, refCode);
    })
    .catch(function() {
        // Em caso de erro, salvar o codigo como fallback
        localStorage.setItem(REFERRAL_CODE_KEY, refCode);
    });
})();
