/**
 * BlackInk Referral Tracking
 * 1. Detecta ?ref=CODE (parceiro) ou ?fref=CODE (amigo) na URL e salva IMEDIATAMENTE no localStorage.
 * 2. Rastreia a visita via API (assincrono) e salva o cookie_token.
 * 3. Propaga o ref/fref em links internos (/cadastro/, /subscribe/) para nao perder a atribuicao.
 * Incluir em todas as paginas do website (landing, subscribe, cadastro).
 */
(function() {
    'use strict';

    var API_BASE_URL = 'https://api.blackink.cloud';
    var REFERRAL_COOKIE_KEY = 'blackink_referral_token';
    var REFERRAL_CODE_KEY = 'blackink_referral_code';
    var FRIEND_REFERRAL_TOKEN_KEY = 'blackink_friend_referral_token';
    var FRIEND_REFERRAL_CODE_KEY = 'blackink_friend_referral_code';

    var params = new URLSearchParams(window.location.search);
    var refCode = params.get('ref');
    var frefCode = params.get('fref');

    // ── Salvar referral_code IMEDIATAMENTE (sincrono, antes de qualquer fetch) ──
    if (refCode) {
        localStorage.setItem(REFERRAL_CODE_KEY, refCode);
    }
    if (frefCode) {
        localStorage.setItem(FRIEND_REFERRAL_CODE_KEY, frefCode);
    }

    // Mesmo sem ref/fref na URL, pode ter ref/fref salvo — propagar nos links
    var savedRef = refCode || localStorage.getItem(REFERRAL_CODE_KEY);
    var savedFref = frefCode || localStorage.getItem(FRIEND_REFERRAL_CODE_KEY);

    // ── Propagar ref/fref em links internos ──
    if (savedRef || savedFref) {
        document.querySelectorAll('a[href]').forEach(function(a) {
            var href = a.getAttribute('href');
            if (!href) return;
            if (href.indexOf('/cadastro/') === 0 || href.indexOf('/subscribe/') === 0 || href.indexOf('/en/cadastro/') === 0) {
                var url = new URL(href, window.location.origin);
                if (savedRef && !url.searchParams.has('ref')) {
                    url.searchParams.set('ref', savedRef);
                }
                if (savedFref && !url.searchParams.has('fref')) {
                    url.searchParams.set('fref', savedFref);
                }
                a.setAttribute('href', url.pathname + url.search);
            }
        });
    }

    // ── Coletar UTM params ──
    var utmData = {};
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function(key) {
        var val = params.get(key);
        if (val) utmData[key] = val;
    });

    // ── Partner referral tracking via API ──
    if (refCode) {
        var existingToken = localStorage.getItem(REFERRAL_COOKIE_KEY);
        var existingCode = localStorage.getItem(REFERRAL_CODE_KEY);
        if (!(existingCode === refCode && existingToken)) {
            var partnerPayload = { code: refCode };
            Object.keys(utmData).forEach(function(key) { partnerPayload[key] = utmData[key]; });

            fetch(API_BASE_URL + '/api/referral/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(partnerPayload)
            })
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (data && data.valid && data.cookie_token) {
                    localStorage.setItem(REFERRAL_COOKIE_KEY, data.cookie_token);
                }
            })
            .catch(function() {});
        }
    }

    // ── Friend referral tracking via API ──
    if (frefCode) {
        var existingFriendToken = localStorage.getItem(FRIEND_REFERRAL_TOKEN_KEY);
        var existingFriendCode = localStorage.getItem(FRIEND_REFERRAL_CODE_KEY);
        if (!(existingFriendCode === frefCode && existingFriendToken)) {
            var friendPayload = { code: frefCode };
            Object.keys(utmData).forEach(function(key) { friendPayload[key] = utmData[key]; });

            fetch(API_BASE_URL + '/api/friend-referral/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(friendPayload)
            })
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (data && data.cookie_token) {
                    localStorage.setItem(FRIEND_REFERRAL_TOKEN_KEY, data.cookie_token);
                }
            })
            .catch(function() {});
        }
    }
})();
