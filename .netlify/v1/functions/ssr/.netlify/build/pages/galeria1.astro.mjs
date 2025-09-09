import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Galeria1 = createComponent(($$result, $$props, $$slots) => {
  const fotos = [
    { src: "/img/gallery/24.jpg", alt: "Kat" },
    { src: "/img/gallery/23.jpg", alt: "Kat " },
    { src: "/img/gallery/22.jpg", alt: "Kat " },
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa Rom\xE1ntica" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center justify-center p-96 m-64"> <main class="relative min-h-screen py-10 px-4 sm:px-8 overflow-hidden p-14"> <!-- Título --> <div class="text-center m-20 text-5xl"> <h1 class="text-4xl sm:text-9xl font-dancing text-rose-600 drop-shadow-md">
🌸 Galería de Kat
</h1> <p class="mt-2 text-9xl sm:text-2xl text-rose-500 font-dosis">
Recuerdos más lindos, guardados con amor 💖
</p> </div> <br> <!-- Galería --> <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto m-20"> ${fotos.map((foto) => renderTemplate`<div class="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform duration-300"> <div class="w-full h-[300px] bg-pink-100"> <img${addAttribute(foto.src, "src")}${addAttribute(foto.alt, "alt")} class="w-full h-64 object-contain aspect-square rounded-xl shadow-lg transition duration-300"> </div> <div class="absolute bottom-0 left-0 right-0 bg-rose-200/80 text-center py-2 text-rose-700 font-dancing text-lg backdrop-blur-sm group-hover:bg-rose-400 group-hover:text-white transition-all"> ${foto.alt} </div> </div>`)} </div> <br> <!-- Corazones flotantes --> <div class="pointer-events-none fixed inset-0 z-0"> <span class="absolute text-pink-300 text-3xl animate-floating-slow" style="left: 10%; animation-delay: 0s;">💖</span> <span class="absolute text-pink-400 text-3xl animate-floating-slow" style="left: 30%; animation-delay: 2s;">💘</span> <span class="absolute text-pink-300 text-3xl animate-floating-slow" style="left: 50%; animation-delay: 4s;">💖</span> <span class="absolute text-pink-400 text-3xl animate-floating-slow" style="left: 70%; animation-delay: 6s;">💘</span> <span class="absolute text-pink-300 text-3xl animate-floating-slow" style="left: 90%; animation-delay: 8s;">💖</span> </div> </main> </section>   ` })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/galeria1.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/galeria1.astro";
const $$url = "/galeria1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
