import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const mascota = {
  nombre: "Logan",
  edad: "3 años",
  foto: "/img/logan/logan5.png",
  descripcion: "El mejor amigo peludo, lleno de amor y travesuras",
  personalidad: "Juguetón, cariñoso y siempre feliz"
};
const recuerdos = [
  {
    src: "/img/logan/logan.jpg",
    alt: "Logan en el parque",
    titulo: "Aventuras en el Parque",
    descripcion: "Explorando nuevos lugares juntos"
  },
  {
    src: "/img/logan/logan2.png",
    alt: "Logan corriendo",
    titulo: "Corriendo Libre",
    descripcion: "La libertad de ser feliz"
  },
  {
    src: "/img/logan/logan3.png",
    alt: "Logan mirando",
    titulo: "Mirada de Amor",
    descripcion: "Esos ojos que dicen todo"
  },
  {
    src: "/img/logan/logan4.png",
    alt: "Logan sentado",
    titulo: "Momentos Tranquilos",
    descripcion: "Descansando juntos"
  }
];
function LoganGallery() {
  const [modal, setModal] = useState(null);
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const icons = ["💖", "💕", "🐾", "💘", "💝", "💗", "✨", "🌟"];
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      size: `${20 + Math.random() * 20}px`
    }));
    setParticles(newParticles);
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-gradient-to-br from-pink-700 via-purple-500 to-rose-700 flex flex-col items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 sm:py-28 lg:py-32 flex flex-col items-center justify-center w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "absolute animate-floatElement opacity-70",
          style: {
            left: p.left,
            animationDelay: p.delay,
            fontSize: p.size
          },
          children: p.icon
        },
        p.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "light-effect light-1" }),
        /* @__PURE__ */ jsx("div", { className: "light-effect light-2" }),
        /* @__PURE__ */ jsx("div", { className: "light-effect light-3" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 sm:mb-20 lg:mb-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 justify-center mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl text-pink-400", children: "🐾" }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold text-purple-600 drop-shadow-lg animate-fade-in", children: "Mi compañero de aventuras" }),
            /* @__PURE__ */ jsx("span", { className: "text-4xl text-pink-400", children: "💕" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-purple-500 animate-fade-in-delay", children: mascota.nombre })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-200 p-10 md:p-16 animate-fade-in-delay-2 w-full max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: mascota.foto,
                alt: mascota.nombre,
                onError: (e) => e.currentTarget.src = "https://placehold.co/288x288?text=Logan",
                className: "w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full border-8 border-yellow-300 shadow-2xl group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl animate-pulse shadow-lg", children: "💖" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center lg:text-left space-y-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-purple-600", children: mascota.nombre }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl text-purple-500 font-medium", children: mascota.edad }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl text-gray-700 italic", children: [
              '"',
              mascota.descripcion,
              '"'
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: mascota.personalidad }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center lg:justify-start gap-4 mt-6", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce", children: "🐕 Juguetón" }),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce delay-200", children: "💕 Cariñoso" }),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce delay-400", children: "😊 Feliz" })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 sm:py-28 lg:py-32 w-full max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold text-pink-500 animate-fade-in", children: "Recuerdos Preciosos" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-2xl text-gray-700 mt-4 animate-fade-in-delay", children: "Cada momento con Logan es un tesoro que guardamos en el corazón 💕" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: recuerdos.map((recuerdo, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 hover:-rotate-1 cursor-pointer animate-fade-in-delay-2",
          onClick: () => setModal(recuerdo),
          style: { animationDelay: `${idx * 0.2}s` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: recuerdo.src,
                  alt: recuerdo.alt,
                  onError: (e) => e.currentTarget.src = "https://placehold.co/400x256?text=Logan",
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 text-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-800 mb-2 group-hover:text-pink-600 transition-colors", children: recuerdo.titulo }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: recuerdo.descripcion })
            ] })
          ]
        },
        idx
      )) })
    ] }),
    modal && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        onClick: () => setModal(null),
        children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl w-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: modal.src,
              alt: modal.alt,
              className: "w-full h-auto object-contain rounded-2xl shadow-2xl animate-zoomIn"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 bg-white/95 px-6 py-4 rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800", children: modal.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: modal.descripcion })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute top-4 right-4 bg-white/95 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition",
              onClick: () => setModal(null),
              children: "✕"
            }
          )
        ] })
      }
    )
  ] });
}

const $$Logan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logan - Mi Mejor Amigo", "data-astro-cid-szgtohfr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-szgtohfr> ${renderComponent($$result2, "Mascot", LoganGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/Logan/Mascot.jsx", "client:component-export": "default", "data-astro-cid-szgtohfr": true })} </main>  ` })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/logan.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/logan.astro";
const $$url = "/logan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
