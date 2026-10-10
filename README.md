geometry dash but on the web, ported by bog/aukak
all credits go to him in general.

these are the game files and nothing is required. the autoloader is inside the index.html

## Play

https://cdn.jsdelivr.net/gh/purpleskulltrooper85-svg/geometry-dash-wasm@main/play.svg

## Online levels

Online levels work out of the box through public GD API relays
(api.sngdu.com, api.ixl.college) — the browser can't reach the GD servers
directly because of CORS, so requests are relayed. Account passwords are
never sent through these relays: to log in to an account, host your own
proxy (`gd-proxy.js`, free on Cloudflare Workers) and open the game once with

    https://cdn.jsdelivr.net/gh/purpleskulltrooper85-svg/geometry-dash-wasm@main/play.svg?proxy=https://YOUR-WORKER.workers.dev/?url=

The page remembers the proxy. If a relay goes down in the future, the game
automatically falls back to the other one, and to any proxy saved above.

