self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  console.log('Requête interceptée:', event.request.url);

  // Vérifier si la requête concerne le domaine www.lesechos.fr
  if (url.hostname.includes('lesechos.fr')) {
    event.respondWith((async () => {
      let modifiedHeaders = new Headers(request.headers);

      // Supprimer les en-têtes spécifiés
      modifiedHeaders.delete('cookie');
      modifiedHeaders.delete('referer');
      modifiedHeaders.delete('sec-ch-ua');
      modifiedHeaders.delete('sec-ch-ua-mobile');
      modifiedHeaders.delete('sec-ch-ua-platform');
      modifiedHeaders.delete('sec-fetch-dest');
      modifiedHeaders.delete('sec-fetch-mode');
      modifiedHeaders.delete('sec-fetch-site');
      modifiedHeaders.delete('sec-fetch-user');

      // Définir l'en-tête User-Agent
      modifiedHeaders.set('User-Agent', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

      // Créer une nouvelle requête avec les en-têtes modifiés
      const modifiedRequest = new Request(request.url, {
        method: request.method,
        headers: modifiedHeaders,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer,
        integrity: request.integrity,
        keepalive: request.keepalive,
        signal: request.signal,
      });

      const response = await fetch(modifiedRequest);
      return response;
    })());
  }
});