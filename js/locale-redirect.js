/**
 * Locale funnel router.
 * Brazil (timezone America/* BR, or UTC + pt-BR) stays on Portuguese pages.
 * Everyone else goes to /en (USD / Whop). Only maps routes that exist in both locales.
 * Overrides: ?lang=pt | ?lang=en and localStorage blackink_locale.
 * Bots are never redirected (SEO).
 */
(function (root) {
    'use strict';

    var STORAGE_KEY = 'blackink_locale';

    var BR_TIMEZONES = {
        'America/Sao_Paulo': 1,
        'America/Bahia': 1,
        'America/Fortaleza': 1,
        'America/Recife': 1,
        'America/Noronha': 1,
        'America/Manaus': 1,
        'America/Cuiaba': 1,
        'America/Porto_Velho': 1,
        'America/Rio_Branco': 1,
        'America/Belem': 1,
        'America/Araguaina': 1,
        'America/Maceio': 1,
        'America/Santarem': 1,
        'America/Campo_Grande': 1,
        'America/Boa_Vista': 1,
        'America/Eirunepe': 1
    };

    var TO_EN = {
        '/': '/en/',
        '/cadastro': '/en/cadastro/',
        '/subscribe': '/en/cadastro/'
    };

    var TO_PT = {
        '/en': '/',
        '/en/cadastro': '/cadastro/'
    };

    function normalizePath(pathname) {
        if (!pathname) return '/';
        var p = String(pathname).split('?')[0].split('#')[0];
        p = p.replace(/\/index\.html$/i, '');
        if (p.length > 1) p = p.replace(/\/+$/, '');
        return p || '/';
    }

    function isBot(ua) {
        if (!ua) return false;
        return /googlebot|adsbot|bingbot|bingpreview|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|pinterest|slackbot|whatsapp|telegrambot|applebot|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i.test(ua);
    }

    function isBrazilTimezone(tz) {
        return !!(tz && BR_TIMEZONES[tz]);
    }

    function prefersPtBR(languages) {
        if (!languages || !languages.length) return false;
        for (var i = 0; i < languages.length; i++) {
            var lang = String(languages[i] || '').toLowerCase().replace(/_/g, '-');
            if (lang === 'pt-br' || lang.indexOf('pt-br-') === 0) return true;
        }
        return false;
    }

    function isTimezoneUnknown(tz) {
        return !tz || tz === 'UTC' || tz === 'Etc/UTC' || tz === 'Etc/GMT';
    }

    function isBrazilAudience(timezone, languages) {
        if (isBrazilTimezone(timezone)) return true;
        if (isTimezoneUnknown(timezone) && prefersPtBR(languages)) return true;
        return false;
    }

    function decide(input) {
        var pathname = normalizePath(input.pathname);
        var search = input.search || '';
        if (search && search.charAt(0) !== '?') search = '?' + search;
        var params;
        try {
            params = new URLSearchParams(search);
        } catch (e) {
            params = { get: function () { return null; } };
        }
        var langParam = String(params.get('lang') || '').toLowerCase();
        var stored = input.stored || '';
        var destEn = TO_EN[pathname];
        var destPt = TO_PT[pathname];

        function redirect(url, persist) {
            return { action: 'redirect', url: url + search, persist: persist || undefined };
        }
        function stay(persist) {
            return persist ? { action: 'stay', persist: persist } : { action: 'stay' };
        }

        if (isBot(input.ua)) return stay();

        if (langParam === 'pt') {
            if (destPt) return redirect(destPt, 'pt');
            return stay('pt');
        }
        if (langParam === 'en') {
            if (destEn) return redirect(destEn, 'en');
            return stay('en');
        }

        if (stored === 'pt') {
            if (destPt) return redirect(destPt);
            return stay();
        }
        if (stored === 'en') {
            if (destEn) return redirect(destEn);
            return stay();
        }

        if (isBrazilAudience(input.timezone, input.languages)) {
            if (destPt) return redirect(destPt, 'pt');
            return stay('pt');
        }

        if (destEn) return redirect(destEn, 'en');
        return stay('en');
    }

    function applyDecision(decision, storage) {
        if (decision.persist && storage) {
            try { storage.setItem(STORAGE_KEY, decision.persist); } catch (e) {}
        }
        if (decision.action === 'redirect' && decision.url && typeof window !== 'undefined') {
            window.__blackinkLocaleRedirecting = true;
            window.location.replace(decision.url);
        }
    }

    var api = {
        STORAGE_KEY: STORAGE_KEY,
        normalizePath: normalizePath,
        isBot: isBot,
        isBrazilTimezone: isBrazilTimezone,
        isBrazilAudience: isBrazilAudience,
        decide: decide
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }

    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.location;
    if (isBrowser) {
        window.__blackinkLocale = api;
        var stored = '';
        try { stored = window.localStorage.getItem(STORAGE_KEY) || ''; } catch (e) {}
        var tz = '';
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
        var languages = [];
        try {
            languages = (navigator.languages && navigator.languages.length)
                ? Array.prototype.slice.call(navigator.languages)
                : (navigator.language ? [navigator.language] : []);
        } catch (e) {}
        applyDecision(decide({
            pathname: window.location.pathname,
            search: window.location.search,
            ua: navigator.userAgent || '',
            languages: languages,
            timezone: tz,
            stored: stored
        }), window.localStorage);
    }
})(typeof globalThis !== 'undefined' ? globalThis : this);
