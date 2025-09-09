import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, j as renderScript } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Logan1 = createComponent(($$result, $$props, $$slots) => {
  const mascota = {
    nombre: "Logan",
    edad: "3 a\xF1os",
    foto: "/img/logan/logan5.png",
    descripcion: "El mejor amigo peludo, lleno de amor y travesuras",
    personalidad: "Juguet\xF3n, cari\xF1oso y siempre feliz"
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logan - Mi Mejor Amigo", "data-astro-cid-66w3enek": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<logan data-astro-cid-66w3enek></logan> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek> <br data-astro-cid-66w3enek>  <main class="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex flex-col items-center justify-center overflow-hidden" data-astro-cid-66w3enek> <!-- Contenedor Principal --> <div class="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20" data-astro-cid-66w3enek> <!-- Hero Section mejorado --> <section class="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" data-astro-cid-66w3enek>  <div class="absolute inset-0 pointer-events-none overflow-hidden" data-astro-cid-66w3enek> <div class="floating-elements" data-astro-cid-66w3enek> <span class="floating-element" data-astro-cid-66w3enek>💖</span> <span class="floating-element" data-astro-cid-66w3enek>💕</span> <span class="floating-element" data-astro-cid-66w3enek>🐾</span> <span class="floating-element" data-astro-cid-66w3enek>💘</span> <span class="floating-element" data-astro-cid-66w3enek>💝</span> <span class="floating-element" data-astro-cid-66w3enek>💗</span> <span class="floating-element" data-astro-cid-66w3enek>✨</span> <span class="floating-element" data-astro-cid-66w3enek>🌟</span> </div> </div>  <div class="absolute inset-0" data-astro-cid-66w3enek> <div class="light-effect light-1" data-astro-cid-66w3enek></div> <div class="light-effect light-2" data-astro-cid-66w3enek></div> <div class="light-effect light-3" data-astro-cid-66w3enek></div> </div>  <div class="relative z-10 w-full flex flex-col items-center justify-center" data-astro-cid-66w3enek>  <div class="text-center mb-20 sm:mb-24 lg:mb-32 flex flex-col items-center justify-center" data-astro-cid-66w3enek> <div class="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8" data-astro-cid-66w3enek> <span class="text-3xl sm:text-4xl lg:text-5xl text-pink-400" data-astro-cid-66w3enek>🐾</span> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-600 drop-shadow-lg animate-fade-in" data-astro-cid-66w3enek>
Mi compañero de aventuras
</h1> <span class="text-3xl sm:text-4xl lg:text-5xl text-pink-400" data-astro-cid-66w3enek>💕</span> </div> <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500 animate-fade-in-delay" data-astro-cid-66w3enek> ${mascota.nombre} </h2> </div>  <div class="w-full max-w-5xl mx-auto flex flex-col items-center justify-center" data-astro-cid-66w3enek> <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-200 p-10 sm:p-12 lg:p-16 xl:p-20 animate-fade-in-delay-2 w-full" data-astro-cid-66w3enek> <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-20" data-astro-cid-66w3enek>  <div class="relative group flex-shrink-0 flex items-center justify-center" data-astro-cid-66w3enek> <div class="relative" data-astro-cid-66w3enek> <img${addAttribute(mascota.foto, "src")}${addAttribute(mascota.nombre, "alt")} class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full border-8 border-yellow-300 shadow-2xl group-hover:scale-105 transition-all duration-500" onerror="this.onerror=null;this.src='https://placehold.co/288x288?text=Logan';" data-astro-cid-66w3enek> <div class="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" data-astro-cid-66w3enek></div> <div class="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl animate-pulse shadow-lg" data-astro-cid-66w3enek>
💖
</div> </div> </div>  <div class="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center" data-astro-cid-66w3enek> <div class="space-y-8 sm:space-y-10 flex flex-col items-center lg:items-start" data-astro-cid-66w3enek> <div class="text-center lg:text-left" data-astro-cid-66w3enek> <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-4 sm:mb-6" data-astro-cid-66w3enek>${mascota.nombre}</h3> <p class="text-xl sm:text-2xl lg:text-3xl text-purple-500 font-medium" data-astro-cid-66w3enek>${mascota.edad}</p> </div> <div class="space-y-6 sm:space-y-8 text-center lg:text-left" data-astro-cid-66w3enek> <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 italic leading-relaxed" data-astro-cid-66w3enek>"${mascota.descripcion}"</p> <p class="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed" data-astro-cid-66w3enek>${mascota.personalidad}</p> </div>  <div class="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6" data-astro-cid-66w3enek> <span class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg lg:text-xl shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce" data-astro-cid-66w3enek>
🐕 Juguetón
</span> <span class="bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg lg:text-xl shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce" style="animation-delay: 0.2s;" data-astro-cid-66w3enek>
💕 Cariñoso
</span> <span class="bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg lg:text-xl shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce" style="animation-delay: 0.4s;" data-astro-cid-66w3enek>
😊 Feliz
</span> </div> </div> </div> </div> </div> </div> </div> </section> <!-- Sección de Recuerdos mejorada --> <section class="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" data-astro-cid-66w3enek>  <div class="absolute inset-0 overflow-hidden" data-astro-cid-66w3enek> <div class="absolute top-10 left-10 text-5xl opacity-30 animate-float" data-astro-cid-66w3enek>🐾</div> <div class="absolute top-20 right-20 text-4xl opacity-30 animate-float" style="animation-delay: 1s;" data-astro-cid-66w3enek>💕</div> <div class="absolute bottom-20 left-20 text-4xl opacity-30 animate-float" style="animation-delay: 2s;" data-astro-cid-66w3enek>💖</div> <div class="absolute bottom-10 right-10 text-5xl opacity-30 animate-float" style="animation-delay: 3s;" data-astro-cid-66w3enek>🐾</div> </div>  <div class="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center" data-astro-cid-66w3enek>  <div class="text-center mb-16 sm:mb-20 lg:mb-24 flex flex-col items-center justify-center" data-astro-cid-66w3enek> <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-pink-500 animate-fade-in text-center" data-astro-cid-66w3enek>
Recuerdos Preciosos
</h2> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed text-center" data-astro-cid-66w3enek>
Cada momento con Logan es un tesoro que guardamos en el corazón 💕
</p> </div>  <div class="w-full mb-16 sm:mb-20 lg:mb-24 flex flex-col items-center justify-center" data-astro-cid-66w3enek> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full max-w-6xl mx-auto" data-astro-cid-66w3enek> ${recuerdos.map((recuerdo, idx) => renderTemplate`<div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-delay-2 cursor-pointer transform hover:scale-105 hover:-rotate-1 flex flex-col items-center justify-center"${addAttribute(`animation-delay: ${idx * 0.2}s;`, "style")}${addAttribute(`openImageModal('${recuerdo.src}', '${recuerdo.titulo}', '${recuerdo.descripcion}')`, "onclick")} data-astro-cid-66w3enek>  <div class="relative overflow-hidden h-56 sm:h-64 lg:h-72 w-full flex items-center justify-center" data-astro-cid-66w3enek> <img${addAttribute(recuerdo.src, "src")}${addAttribute(recuerdo.alt, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.onerror=null;this.src='https://placehold.co/400x256?text=Logan';" data-astro-cid-66w3enek> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-66w3enek></div> </div>  <div class="p-6 sm:p-8 w-full flex flex-col items-center justify-center text-center" data-astro-cid-66w3enek> <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-purple-800 mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors duration-300" data-astro-cid-66w3enek> ${recuerdo.titulo} </h3> <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed" data-astro-cid-66w3enek> ${recuerdo.descripcion} </p> </div>  <div class="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-astro-cid-66w3enek></div> </div>`)} </div> </div> </div> </section> </div> </main>  <div id="imageModal" class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 hidden items-center justify-center p-4" data-astro-cid-66w3enek> <div class="relative max-w-5xl max-h-[90vh] mx-auto w-full flex items-center justify-center" data-astro-cid-66w3enek> <img id="modalImage" src="" alt="" class="w-full h-auto object-contain rounded-2xl shadow-2xl" data-astro-cid-66w3enek> <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg" data-astro-cid-66w3enek> <h3 id="modalTitle" class="text-xl font-bold text-gray-800 mb-1" data-astro-cid-66w3enek></h3> <p id="modalDescription" class="text-sm text-gray-600" data-astro-cid-66w3enek></p> </div> <button onclick="closeImageModal()" class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-gray-800 hover:bg-white transition-colors duration-200 shadow-lg" data-astro-cid-66w3enek>
✕
</button> </div> </div> ${renderScript($$result2, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/logan1.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/logan1.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/logan1.astro";
const $$url = "/logan1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logan1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
