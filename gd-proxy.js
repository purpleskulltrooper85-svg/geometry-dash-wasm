// Geometry Dash WASM - CORS proxy worker
// Deploy free on Cloudflare Workers, then load the game with:
//   .../index.html?proxy=https://YOUR-WORKER.workers.dev/?url=
// (the page remembers it; play.svg also forwards ?proxy=)

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    }

    const u = new URL(request.url);
    const target = u.searchParams.get('url');

    if (!target || !/^https?:\/\//i.test(target)) {
      return new Response('missing ?url=', { status: 400 });
    }

    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
      'Content-Type':
        request.headers.get('Content-Type') ||
        'application/x-www-form-urlencoded'
    };

    const hasBody = request.method !== 'GET' && request.method !== 'HEAD';

    let body;
    if (hasBody) body = await request.arrayBuffer();

    let upstream;
    try {
      upstream = await fetch(target, {
        method: request.method,
        headers: headers,
        body: body,
        redirect: 'follow'
      });
    } catch (e) {
      return new Response('upstream fetch failed: ' + e, { status: 502 });
    }

    const out = new Headers(upstream.headers);
    out.set('Access-Control-Allow-Origin', '*');
    out.delete('content-security-policy');
    out.delete('x-frame-options');

    return new Response(upstream.body, {
      status: upstream.status,
      headers: out
    });
  }
};
