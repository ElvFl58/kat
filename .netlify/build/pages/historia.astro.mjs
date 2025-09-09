import { c as createComponent, i as renderComponent, r as renderTemplate, f as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Historia = createComponent(($$result, $$props, $$slots) => {
  const logros = [
    {
      year: "21 - 09 - 2023",
      title: "Un nuevo sue\xF1o \u{1F48D}",
      desc: "Se prepara para cumplir nuevos sue\xF1os, uno a la vez, con amor.",
      img: "/img/kat/kat2.jpg"
    },
    {
      year: "2025",
      title: "Viaje a Bolivia \u{1F3DE}\uFE0F",
      desc: "Aventura inolvidable al lago Titicaca, compartiendo paisajes y sonrisas.",
      img: "/img/history/viaje.png"
    },
    {
      year: "2025",
      title: "Fiest de Ingreso",
      desc: "Fiesta de cachimbos por haber ingresado.",
      img: "/img/history/welcome.jpg"
    },
    {
      year: "2021",
      title: "Primer viaje \u2708\uFE0F",
      desc: "Viaj\xF3 a la playa y vivi\xF3 momentos m\xE1gicos frente al mar.",
      img: "/img/gallery/02.jpg"
    },
    {
      year: "2020",
      title: "Primer trabajo \u{1F469}\u200D\u{1F4BC}",
      desc: "Consigui\xF3 su primer empleo y aprendi\xF3 a brillar por s\xED sola.",
      img: "/img/history/viaje.png"
    },
    {
      year: "2018",
      title: "Ingreso a la Universidad \u{1F393}",
      desc: "Kat empez\xF3 su gran aventura universitaria, llena de sue\xF1os y pasi\xF3n.",
      img: "/img/history/viaje.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestra Historia", "data-astro-cid-xev6as4f": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="bg-gradient-to-br from-pink-50 via-purple-100 to-pink-200 min-h-screen font-['Poppins'] flex items-center justify-center overflow-hidden" data-astro-cid-xev6as4f> <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center w-full max-w-7xl" data-astro-cid-xev6as4f> <!-- Encabezado rom\xE1ntico --> <header class="max-w-4xl text-center mb-12 sm:mb-16 w-full text-4xl" data-astro-cid-xev6as4f> <h1 class="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-['Dancing_Script'] font-bold text-pink-500 drop-shadow-md mb-4 sm:mb-6 animate-fade-in" data-astro-cid-xev6as4f>
Nuestra Historia \u{1F49E}
</h1> <p class="w-auto text-lg sm:text-xl  text-purple-700 italic leading-relaxed animate-fade-in-slow px-4" data-astro-cid-xev6as4f>
Un sendero tejido con amor, sue\xF1os y promesas. Cada recuerdo, una
          flor. Cada d\xEDa, una nueva p\xE1gina escrita con el coraz\xF3n.
</p> </header> <!-- L\xEDnea del tiempo refinada con contenedor mejorado --> <article class="relative timeline w-full max-w-6xl mx-auto flex-1 flex items-center justify-center overflow-visible" data-astro-cid-xev6as4f> <div class="space-y-16 sm:space-y-20 lg:space-y-24 relative z-10 w-full px-4 sm:px-6 lg:px-8" data-astro-cid-xev6as4f> `, ` </div> </article> <!-- Pie rom\xE1ntico con contenedor mejorado --> <footer class="max-w-3xl mx-auto text-center mt-16 sm:mt-20 lg:mt-24 animate-fade-in-slow w-full px-4" data-astro-cid-xev6as4f> <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border border-pink-300" data-astro-cid-xev6as4f> <h2 class="text-3xl sm:text-4xl font-['Dancing_Script'] text-pink-600 mb-4" data-astro-cid-xev6as4f>
\u{1F338} Nuestro amor no tiene fin \u{1F338}
</h2> <p class="text-purple-700 text-base sm:text-lg italic leading-relaxed" data-astro-cid-xev6as4f>
Cada mirada, cada abrazo, cada promesa... sigue floreciendo. Nuestra
            historia no termina, solo evoluciona.
</p> </div> </footer> </section> </main>  <div id="imageModal" class="fixed inset-0 bg-pink-300/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-opacity duration-300" data-astro-cid-xev6as4f> <div class="relative max-w-4xl max-h-full animate-fade-in w-full" data-astro-cid-xev6as4f> <img id="modalImage" src="" alt="" class="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl" data-astro-cid-xev6as4f> <div class="absolute top-4 right-4 bg-black rounded-4xl" data-astro-cid-xev6as4f> <button onclick="closeModal()" class="bg-purple-600 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-purple-700 transition-all duration-300 shadow-lg" data-astro-cid-xev6as4f>
\u274C
</button> </div> <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-purple-800 px-6 py-3 rounded-xl shadow-md" data-astro-cid-xev6as4f> <h3 id="modalTitle" class="text-center text-2xl font-semibold font-['Dancing_Script']" data-astro-cid-xev6as4f></h3> </div> </div> </div>    <script type="text/javascript">
    function openModal(imgSrc, title) {
      const modal = document.getElementById("imageModal");
      const modalImage = document.getElementById("modalImage");
      const modalTitle = document.getElementById("modalTitle");

      modalImage.src = imgSrc;
      modalImage.alt = title;
      modalTitle.textContent = title;

      modal.classList.remove("hidden");
      modal.classList.add("show");

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeModal();
        }
      });

      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    function closeModal() {
      const modal = document.getElementById("imageModal");
      modal.classList.add("hidden");
      modal.classList.remove("show");
    }
  <\/script> `])), maybeRenderHead(), logros.map((item, i) => {
    const position = i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
    return renderTemplate`<div${addAttribute(`flex flex-col ${position} items-center md:items-start md:gap-8 lg:gap-10 justify-center py-9 sm:py-9 w-full max-w-5xl mx-auto text-center`, "class")} data-astro-cid-xev6as4f>  <div class="p-9 sm:p-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-pink-400 shadow-xl bg-pink-400 flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center "${addAttribute(`openModal('${item.img}', '${item.title}')`, "onclick")} data-astro-cid-xev6as4f> <img${addAttribute(item.img, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover rounded-full" onerror="this.onerror=null;this.src='https://placehold.co/144x144?text=Kat';" data-astro-cid-xev6as4f> </div>  <div class="bg-white/95 backdrop-blur-md shadow-lg rounded-3xl border-l-8 border-pink-400 w-full max-w-md sm:max-w-lg lg:max-w-xl px-6 sm:px-8 py-6 sm:py-8 transition-transform duration-300 hover:scale-105 flex-shrink-0" data-astro-cid-xev6as4f> <span class="text-sm sm:text-base text-purple-600 font-semibold tracking-wide block mb-2" data-astro-cid-xev6as4f> ${item.year} </span> <h3 class="text-xl sm:text-2xl lg:text-3xl text-pink-600 font-['Dancing_Script'] font-bold mb-3 leading-tight" data-astro-cid-xev6as4f> ${item.title} </h3> <p class="text-sm sm:text-base text-gray-700 leading-relaxed italic" data-astro-cid-xev6as4f> ${item.desc} </p> </div> </div>`;
  })) })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/historia.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/historia.astro";
const $$url = "/historia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Historia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
