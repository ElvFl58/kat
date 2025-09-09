import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CTE9JTod.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/api/love.astro.mjs');
const _page3 = () => import('./pages/cumple.astro.mjs');
const _page4 = () => import('./pages/galeria.astro.mjs');
const _page5 = () => import('./pages/galeria1.astro.mjs');
const _page6 = () => import('./pages/historia.astro.mjs');
const _page7 = () => import('./pages/logan.astro.mjs');
const _page8 = () => import('./pages/logan1.astro.mjs');
const _page9 = () => import('./pages/sorpresa.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.ts", _page1],
    ["src/pages/api/love.ts", _page2],
    ["src/pages/cumple.astro", _page3],
    ["src/pages/galeria.astro", _page4],
    ["src/pages/galeria1.astro", _page5],
    ["src/pages/historia.astro", _page6],
    ["src/pages/logan.astro", _page7],
    ["src/pages/logan1.astro", _page8],
    ["src/pages/sorpresa.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "180e6977-4bfd-4d0e-9777-b44c63da5727"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
