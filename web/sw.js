// SPDX-License-Identifier: AGPL-3.0-only
// 🄯 2022, Alexey Parfenov <zxed@alkatrazstudio.net>

const CACHE_PREFIX = 'humanpwd'
const CACHE_VERSION = 2
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/words.js',
    '/icon.png'
]

self.addEventListener('install', event => {
    self.skipWaiting()

    event.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(FILES_TO_CACHE)
        )
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(
            response => response || fetch(event.request)
        )
    )
})

self.addEventListener('activate', event => {
    const cacheAllowList = [CACHE_NAME]
    event.waitUntil(
        caches.keys().then(
            keys => Promise.all(
                keys.map(
                    key => cacheAllowList.includes(key) ? null : caches.delete(key)
                )
            )
        )
    )
})
