'use strict';

var locale = require('./locale-redirect.js');
var decide = locale.decide;
var failed = 0;

function assertEqual(actual, expected, label) {
    var a = JSON.stringify(actual);
    var e = JSON.stringify(expected);
    if (a !== e) {
        failed += 1;
        console.error('FAIL ' + label + '\n  expected ' + e + '\n  actual   ' + a);
    } else {
        console.log('ok   ' + label);
    }
}

function us(pathname, extra) {
    extra = extra || {};
    return decide({
        pathname: pathname,
        search: extra.search || '',
        ua: extra.ua || 'Mozilla/5.0',
        languages: extra.languages || ['en-US'],
        timezone: extra.timezone || 'America/New_York',
        stored: extra.stored || ''
    });
}

function br(pathname, extra) {
    extra = extra || {};
    return decide({
        pathname: pathname,
        search: extra.search || '',
        ua: extra.ua || 'Mozilla/5.0',
        languages: extra.languages || ['pt-BR'],
        timezone: extra.timezone || 'America/Sao_Paulo',
        stored: extra.stored || ''
    });
}

assertEqual(us('/'), { action: 'redirect', url: '/en/', persist: 'en' }, 'US home → /en/');
assertEqual(
    us('/cadastro/', { search: '?ref=ABC&period=yearly' }),
    { action: 'redirect', url: '/en/cadastro/?ref=ABC&period=yearly', persist: 'en' },
    'US cadastro keeps query string'
);
assertEqual(
    us('/subscribe/', { search: '?fref=JOAO' }),
    { action: 'redirect', url: '/en/cadastro/?fref=JOAO', persist: 'en' },
    'US subscribe → EN cadastro'
);
assertEqual(us('/en/'), { action: 'stay', persist: 'en' }, 'US already on /en stays');
assertEqual(us('/en/cadastro/'), { action: 'stay', persist: 'en' }, 'US already on EN cadastro stays');
assertEqual(us('/termos-de-uso/'), { action: 'stay', persist: 'en' }, 'unmapped legal page is not prefixed with /en');
assertEqual(
    us('/', { ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }),
    { action: 'stay' },
    'Googlebot is not redirected'
);
assertEqual(
    us('/', { timezone: 'Europe/Lisbon', languages: ['pt-PT'] }),
    { action: 'redirect', url: '/en/', persist: 'en' },
    'Portugal is foreign funnel'
);

assertEqual(br('/'), { action: 'stay', persist: 'pt' }, 'BR home stays PT');
assertEqual(br('/cadastro/'), { action: 'stay', persist: 'pt' }, 'BR cadastro stays PT');
assertEqual(
    br('/en/'),
    { action: 'redirect', url: '/', persist: 'pt' },
    'BR on /en is sent to PT home'
);
assertEqual(
    br('/en/cadastro/', { search: '?plan=Maré' }),
    { action: 'redirect', url: '/cadastro/?plan=Maré', persist: 'pt' },
    'BR on EN cadastro is sent to PT cadastro'
);
assertEqual(
    br('/', { languages: ['en-US'] }),
    { action: 'stay', persist: 'pt' },
    'BR timezone + English Chrome stays PT'
);
assertEqual(
    decide({
        pathname: '/',
        search: '',
        ua: 'Mozilla/5.0',
        languages: ['pt-BR'],
        timezone: 'UTC',
        stored: ''
    }),
    { action: 'stay', persist: 'pt' },
    'UTC + pt-BR is treated as Brazil'
);

assertEqual(
    us('/', { search: '?lang=pt' }),
    { action: 'stay', persist: 'pt' },
    '?lang=pt forces PT even for US'
);
assertEqual(
    br('/', { search: '?lang=en' }),
    { action: 'redirect', url: '/en/?lang=en', persist: 'en' },
    '?lang=en forces EN even for BR'
);
assertEqual(
    br('/cadastro/', { stored: 'en' }),
    { action: 'redirect', url: '/en/cadastro/' },
    'stored en wins over Brazil timezone'
);
assertEqual(
    us('/en/', { stored: 'pt' }),
    { action: 'redirect', url: '/' },
    'stored pt wins over US timezone'
);
assertEqual(
    locale.normalizePath('/cadastro/index.html'),
    '/cadastro',
    'normalize index.html'
);

if (failed) {
    console.error('\n' + failed + ' failed');
    process.exit(1);
}
console.log('\nall passed');
