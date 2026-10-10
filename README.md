geometry dash but on the web, ported by bog/aukak
all credits go to him in general.

these are the game files and nothing is required. the autoloader is inside the index.html

## Play

https://cdn.jsdelivr.net/gh/purpleskulltrooper85-svg/geometry-dash-wasm@main/play.svg

## Online levels

Online levels need a CORS proxy (the browser can't call the GD servers directly).
The built-in public proxies are dead, so deploy your own free one:

1. Go to https://workers.cloudflare.com and create a free Worker.
2. Paste the contents of `gd-proxy.js` from this repo and deploy it.
3. Open the game with your worker appended:

   https://cdn.jsdelivr.net/gh/purpleskulltrooper85-svg/geometry-dash-wasm@main/play.svg?proxy=https://YOUR-WORKER.workers.dev/?url=

The page remembers the proxy, so you only need the parameter once.
Note: for safety, account passwords are never sent through third-party proxies,
so logging into an account needs a proxy you host yourself (the worker above counts).

