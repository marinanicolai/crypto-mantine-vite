export const fetchDataAndCache = async (url: string, cacheTimeout: number = 5 * 60 * 1000): Promise<Response> => {
    if (!('caches' in window)) {
        console.error('Cache API is not supported in this browser');
        return fetch(url);
    }

    const cacheName = 'crypto-currency-cache';
    const cache = await caches.open(cacheName);

    // Check if the URL is already cached and not expired
    const cachedResponse = await cache.match(url);
    if (cachedResponse) {
        const cachedTime = parseInt(cachedResponse.headers.get('my-cache-timestamp') || '', 10);
        const currentTime = Date.now();

        if (currentTime - cachedTime < cacheTimeout) {
            console.log('Returning cached data:', url);
            return cachedResponse;
        } else {
            console.log('Cached data expired:', url);
            await cache.delete(url);
        }
    }

    // If not cached or expired, fetch the data and cache it with the expiration time
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    // Clone the response and add a custom header with the timestamp
    const responseToCache = response.clone();
    const headers = new Headers(responseToCache.headers);
    headers.set('my-cache-timestamp', Date.now().toString());
    const customResponse = new Response(responseToCache.body, { ...responseToCache, headers });

    await cache.put(url, customResponse);

    console.log('Fetched and cached data:', url);
    return response;
};
