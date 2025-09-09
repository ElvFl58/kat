import { c as createComponent, r as renderTemplate, f as addAttribute, m as maybeRenderHead, d as createAstro, k as renderHead, i as renderComponent, l as renderSlot } from './astro/server_677_l2We.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "\u{1F389}\u{1F389}", href: "/cumple" },
    { name: "Historia", href: "/historia" },
    { name: "Galer\xEDa", href: "/galeria" },
    { name: "Logan", href: "/logan" }
    // { name: "Sorpresa", href: "/sorpresa" },
  ];
  return renderTemplate(_a || (_a = __template(["", '<nav class="navbar-romantica bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-500 sticky top-0" data-astro-cid-xu5ykefq> <div class="navbar-inner" data-astro-cid-xu5ykefq> <span class="navbar-heart" data-astro-cid-xu5ykefq>\u2764\uFE0F</span> <!-- Bot\xF3n coraz\xF3n para m\xF3vil --> <button class="menu-btn" id="menuBtn" data-astro-cid-xu5ykefq>\u2764\uFE0F</button> <!-- Men\xFA principal --> <ul id="menuList" data-astro-cid-xu5ykefq> ', ' </ul> <span class="navbar-heart" data-astro-cid-xu5ykefq>\u2764\uFE0F</span> </div> </nav>  <script type="text/javascript">\n  document.getElementById("menuBtn").addEventListener("click", function () {\n    document.getElementById("menuList").classList.toggle("show");\n  });\n<\/script>'])), maybeRenderHead(), navLinks.map((link) => renderTemplate`<li data-astro-cid-xu5ykefq> <a${addAttribute(link.href, "href")} data-astro-cid-xu5ykefq> <span class="name" data-astro-cid-xu5ykefq>${link.name}</span> </a> </li>`));
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/shared/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-500 py-10 px-6 sm:px-8 text-center text-white shadow-lg relative overflow-hidden"> <!-- Corazones flotantes --> <div class="absolute inset-0 pointer-events-none"> <span class="absolute top-6 left-6 text-3xl opacity-20 animate-bounce">💖</span> <span class="absolute top-10 right-8 text-2xl opacity-20 animate-bounce delay-150">💕</span> <span class="absolute bottom-12 left-8 text-2xl opacity-20 animate-bounce delay-300">💘</span> <span class="absolute bottom-6 right-6 text-3xl opacity-20 animate-bounce delay-500">💝</span> </div> <!-- Contenido principal --> <div class="relative z-10 flex flex-col items-center gap-4"> <!-- Mensaje principal --> <!-- <h2 class="text-lg sm:text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent text-center">
      Hecho con <span class="animate-pulse">❤️</span> por 
      <span class="underline decoration-wavy decoration-white/70 underline-offset-4 hover:text-pink-100 transition-colors">TuNombre</span>
    </h2> --> <p class="text-xs sm:text-base text-pink-50 italic text-center">
"El amor nunca deja de ser 💕
</p> <!-- Redes sociales --> <div class="flex flex-wrap justify-center gap-4 mt-4"> <!-- Facebook --> <a target="_blank" href="https://web.facebook.com/katy.dayana.982" class="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all" aria-label="Facebook"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24"> <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.334v21.332C0 23.402.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.799.143v3.24l-1.922.001c-1.507 0-1.8.716-1.8 1.763v2.313h3.6l-.468 3.622h-3.132V24h6.134C23.403 24 24 23.402 24 22.666V1.334C24 .598 23.403 0 22.675 0z"></path> </svg> </a> <!-- Instagram --> <a href="#" class="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all" aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.003.248 2.466.415a4.92 4.92 0 011.75 1.145 4.92 4.92 0 011.145 1.75c.167.463.357 1.26.415 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.248 2.003-.415 2.466a4.92 4.92 0 01-1.145 1.75 4.92 4.92 0 01-1.75 1.145c-.463.167-1.26.357-2.466.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.003-.248-2.466-.415a4.92 4.92 0 01-1.75-1.145 4.92 4.92 0 01-1.145-1.75c-.167-.463-.357-1.26-.415-2.466C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.058-1.206.248-2.003.415-2.466a4.92 4.92 0 011.145-1.75 4.92 4.92 0 011.75-1.145c.463-.167 1.26-.357 2.466-.415C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path> </svg> </a> <!-- TikTok --> <a href="#" class="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all" aria-label="TikTok"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24"> <path d="M16.5 3a5.49 5.49 0 01-1.5-3h-3v14.5a2.5 2.5 0 11-2.5-2.5 2.49 2.49 0 011.5.5V9.5A5.5 5.5 0 1016.5 15V8.5c1 .7 2.2 1.1 3.5 1.1V6.6c-1.3 0-2.5-.4-3.5-1.1z"></path> </svg> </a> <!-- Email --> <a href="#" class="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all" aria-label="Email"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24"> <path d="M12 13.065L.003 6h23.994L12 13.065zM0 7.197V20h24V7.197l-12 6.868L0 7.197z"></path> </svg> </a> </div> <!-- Línea decorativa --> <div class="w-28 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent my-4"></div> <!-- Copyright --> <div class="text-xs sm:text-sm text-white/80 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-center"> <!-- <span>&copy; 2025 Todos los derechos reservados</span> --> <span class="hidden sm:inline"></span> <span>Hecho con amor 💕</span> </div> <!-- Mensaje extra --> <!-- <p class="mt-4 text-xs text-white/70 italic">
      "El amor es el mejor lenguaje de programación" ✨
    </p> --> </div> </footer>`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/shared/Footer.astro", void 0);

function Conexion() {
  const currentTime = /* @__PURE__ */ new Date();
  const currentHour = currentTime.getHours();
  const [visible, setVisible] = useState(true);
  let greeting = "";
  if (currentHour < 12) {
    greeting = "☀️ Buenos días,";
  } else if (currentHour < 18) {
    greeting = "🌹 Buenas tardes, corazón";
  } else {
    greeting = "🌙 Dulces noches, mi vida";
  }
  const frases = [
    "💖 Eres mi razón de sonreír.",
    "🌸 Mi mundo brilla contigo.",
    "✨ Eres mi paz y mi alegría.",
    "💌 Tus abrazos son mi refugio.",
    "🔥 Te pienso en cada instante.",
    "🌙 Eres mi hoy y mi siempre."
  ];
  const [fraseActual, setFraseActual] = useState(frases[0]);
  useEffect(() => {
    const intervalo = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setFraseActual(frases[randomIndex]);
    }, 6e3);
    return () => clearInterval(intervalo);
  }, [frases]);
  if (!visible) return null;
  return /* @__PURE__ */ jsxs("section", { className: "modal", children: [
    /* @__PURE__ */ jsx("button", { className: "cerrar", onClick: () => setVisible(false), children: "❌" }),
    /* @__PURE__ */ jsx("p", { className: "saludo", children: greeting }),
    /* @__PURE__ */ jsx("p", { className: "frase", children: fraseActual }),
    /* @__PURE__ */ jsx("div", { className: "hearts" })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="bg-pink-400" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Modal", Conexion, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
