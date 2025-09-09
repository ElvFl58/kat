import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                   */
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
export { renderers } from '../renderers.mjs';

const fotos = [
  { src: "/img/gallery/24.jpg", alt: "Kat" },
  { src: "/img/gallery/23.jpg", alt: "Kat" },
  { src: "/img/gallery/22.jpg", alt: "Kat" },
  { src: "/img/gallery/21.jpg", alt: "Kat" },
  { src: "/img/gallery/20.jpg", alt: "Kat" },
  { src: "/img/gallery/19.jpg", alt: "Kat" },
  { src: "/img/gallery/18.jpg", alt: "Kat" },
  { src: "/img/gallery/17.jpg", alt: "Kat" },
  { src: "/img/gallery/16.jpg", alt: "Kat" },
  { src: "/img/gallery/15.jpg", alt: "Kat" },
  { src: "/img/gallery/14.jpg", alt: "Kat" },
  { src: "/img/gallery/13.jpg", alt: "Kat" },
  { src: "/img/gallery/12.jpg", alt: "Kat" },
  { src: "/img/gallery/11.jpg", alt: "Kat" },
  { src: "/img/gallery/10.jpg", alt: "Kat" },
  { src: "/img/gallery/09.jpg", alt: "Kat" },
  { src: "/img/gallery/08.jpg", alt: "Kat" },
  { src: "/img/gallery/07.jpg", alt: "Kat" },
  { src: "/img/gallery/06.jpg", alt: "Kat" },
  { src: "/img/gallery/05.jpg", alt: "Kat" },
  { src: "/img/gallery/04.jpg", alt: "Kat" },
  { src: "/img/gallery/03.jpg", alt: "Kat" },
  { src: "/img/gallery/02.jpg", alt: "Kat" },
  { src: "/img/gallery/01.jpg", alt: "Kat" }
];
function RomanticGallery() {
  const [corazones, setCorazones] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      emoji: Math.random() > 0.5 ? "💖" : "💘",
      size: 20 + Math.random() * 20
    }));
    setCorazones(newHearts);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen py-16 px-6 bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-14 animate-glow", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl sm:text-7xl font-dancing text-rose-600 drop-shadow-lg", children: "🌸 Galería de Kat 🌸" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg sm:text-2xl text-rose-500 font-dosis", children: "Cada recuerdo contigo es un pétalo en mi corazón 💕" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto", children: fotos.map((foto, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setSelected(foto),
        className: "cursor-pointer group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-rotate-2 hover:scale-105 transition duration-500",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-full h-[280px] bg-pink-50 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: foto.src,
              alt: foto.alt,
              className: "w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition duration-700"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-rose-200/80 text-center py-3 text-rose-700 font-dancing text-lg backdrop-blur-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-500", children: foto.alt })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: corazones.map((c) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute animate-floating",
        style: {
          left: `${c.left}%`,
          animationDelay: `${c.delay}s`,
          fontSize: `${c.size}px`
        },
        children: c.emoji
      },
      c.id
    )) }),
    selected && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3",
        onClick: () => setSelected(null),
        children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl w-full p-6", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: selected.src,
              alt: selected.alt,
              className: "rounded-2xl shadow-2xl w-full max-h-[80vh] object-contain animate-zoomIn"
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-center text-white font-dancing text-2xl mt-4 animate-fadeIn", children: [
            selected.alt,
            " 🌹"
          ] })
        ] })
      }
    )
  ] });
}

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery", "data-astro-cid-tvv6smhg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-tvv6smhg> ${renderComponent($$result2, "Gallery", RomanticGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/gallery/Gallery.jsx", "client:component-export": "default", "data-astro-cid-tvv6smhg": true })} </main>  ` })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
