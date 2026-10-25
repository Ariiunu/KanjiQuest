// Service worker: lets the app open and work without internet.
// The app's own files (page, styles, scripts, manifest) are fetched network-first, so updates
// arrive on their own; icons and Google Fonts are served from the saved copy first.
// Bump VERSION when the list below changes so installed apps refresh their saved copy.
const VERSION = 'v3';
const CACHE = 'kanji-no-tankyuu-' + VERSION;
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './strokes.js',
  './app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png',
  './icons/logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const save = (key, res) => { if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); } return res; };

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const own = url.origin === location.origin;

  // The app page: network first, offline falls back to the saved copy.
  // Only the app itself is saved as index.html (not other pages such as tests/run.html).
  if (req.mode === 'navigate') {
    const isApp = own && /\/(index\.html)?$/.test(url.pathname);
    e.respondWith(fetch(req).then(res => isApp ? save('./index.html', res) : res).catch(() => caches.match('./index.html')));
    return;
  }

  // The app's code and styles: network first so changes show up, saved copy when offline.
  if (own && /\.(js|css|webmanifest)$/.test(url.pathname)) {
    e.respondWith(fetch(req).then(res => save(req, res)).catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }

  // Everything else (icons, Google Fonts): saved copy first, then network, saving what arrives.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => save(req, res))));
});
