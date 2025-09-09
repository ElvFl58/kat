import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, f as addAttribute, i as renderComponent } from '../chunks/astro/server_677_l2We.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_e7LqdEsC.mjs';
import 'clsx';
import { Gift } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const poemas = [
  [
    "He aquí, eres hermosa, amiga mía,",
    "He aquí, eres bella, tus ojos son como palomas.",
    "Si tú no lo sabes, oh hermosa entre las mujeres."
  ],
  [
    "Hermosas son tus mejillas entre los pendientes,",
    "tu cuello entre los collares.",
    "Como el lino entre los espinos,",
    "así es mi amiga entre las doncellas."
  ],
  [
    "Levántate, oh amiga mía, hermosa mía, y ven,",
    "porque estoy enfermo de amor.",
    "Muéstrame tu rostro, hazme oír tu voz,",
    "porque dulce es la voz tuya y hermoso tu aspecto."
  ],
  [
    "Cada latido de mi corazón pronuncia tu nombre,",
    "cada suspiro lleva el eco de tu risa.",
    "Eres el sueño que nunca quise despertar,",
    "la melodía que da sentido a mi existir."
  ]
];
const corazones = ["💖", "❤️", "💕", "💗", "💓", "💞", "💘", "💝", "💟"];
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PoemaRomantico = () => {
  const [poemaIndex, setPoemaIndex] = useState(0);
  const [lineaIndex, setLineaIndex] = useState(0);
  const [showKiss, setShowKiss] = useState(false);
  const [kissPos, setKissPos] = useState({ x: 0, y: 0 });
  const [corazonList, setCorazonList] = useState([]);
  const timerRef = useRef();
  useEffect(() => {
    if (lineaIndex < poemas[poemaIndex].length - 1) {
      timerRef.current = setTimeout(() => setLineaIndex(lineaIndex + 1), 1800);
    } else {
      timerRef.current = setTimeout(() => {
        setLineaIndex(0);
        setPoemaIndex((poemaIndex + 1) % poemas.length);
      }, 3200);
    }
    return () => clearTimeout(timerRef.current);
  }, [lineaIndex, poemaIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCorazonList((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: randomInt(5, 95),
          size: randomInt(18, 38),
          emoji: corazones[randomInt(0, corazones.length - 1)],
          duration: randomInt(6, 14)
        }
      ]);
    }, 900);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (corazonList.length > 30) {
      setCorazonList((prev) => prev.slice(-30));
    }
  }, [corazonList]);
  const handleKiss = (e) => {
    setKissPos({ x: e.clientX, y: e.clientY });
    setShowKiss(true);
    setTimeout(() => setShowKiss(false), 1200);
  };
  return /* @__PURE__ */ jsxs("div", { className: "poema-bg", onClick: handleKiss, children: [
    corazonList.map((c) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "corazon-float",
        style: {
          left: `${c.left}%`,
          fontSize: `${c.size}px`,
          animationDuration: `${c.duration}s`
        },
        children: c.emoji
      },
      c.id
    )),
    showKiss && /* @__PURE__ */ jsx(
      "span",
      {
        className: "beso-float",
        style: { left: kissPos.x, top: kissPos.y },
        children: "💋"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "poema-card animate-poema", children: [
      /* @__PURE__ */ jsx("h1", { className: "poema-title animate-title", children: "Para Ti, Mi Amada Kat" }),
      /* @__PURE__ */ jsx("div", { className: "poema-texto", children: poemas[poemaIndex].slice(0, lineaIndex + 1).map((linea, i) => /* @__PURE__ */ jsx("p", { className: "poema-linea animate-linea", children: linea }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "poema-firma animate-firma", children: "Siempre tuyo, con una pasión infinita." }),
      /* @__PURE__ */ jsx("footer", { className: "poema-footer animate-footer", children: "Mi amor por ti, Kat, es un fuego eterno que jamás se extinguirá. 🔥" })
    ] })
  ] });
};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- \n<video controls autoplay muted loop poster="" class="oli" id="miVideo">\n  <source src={song} type="video/mp4" />\n  Tu navegador no soporta el audio.\n</video>\n<style>\n  .oli {\n    width: 0.1px;\n    height: 0.1px;\n  }\n</style>\n<script type="text/javascript">\n  function videoPlay() {\n    const video = document.querySelector(".oli");\n    video.muted = false;\n    video.style.display = "none";\n  }\n  setInterval(videoPlay, 1000);\n<\/script> -->', '<div class="min-h-28 w-full flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-fuchsia-500"> <div class="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl z-10 gap-8"> <!-- Columna izquierda --> <div class="flex-1 flex flex-col items-center justify-center gap-6 md:items-start text-5xl m-6"> <h1 id="typewriter" class="text-9xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,192,203,0.9)] leading-tight whitespace-nowrap border-r-4 pr-2 min-h-[60px] sm:min-h-[80px]"></h1> <p class="min-w-4 text-white/90 text-base sm:text-lg md:text-xl max-w-md text-center md:text-left drop-shadow-[0_0_15px_rgba(255,182,193,0.8)]">\nEres la raz\xF3n de mi sonrisa, mi inspiraci\xF3n y mi mayor alegr\xEDa. Te amo\n        m\xE1s de lo que las palabras pueden expresar.\n</p> </div> <!-- Columna derecha: imagen --> <div class="flex-1 flex items-center justify-center"> <div class="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[380px] md:w-[500px] md:h-[480px]"> <!-- Imagen --> <img src="/img/gallery/25.jpg" alt="Kat" class="w-full h-full object-cover absolute inset-0 z-0 mask-radial-at-center mask-radial-from-50% mask-radial-to-75%"> <!-- Overlay degradado --> <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle, rgba(244,114,182,0.25) 60%, rgba(244,114,182,0.00) 100%);"></div> <!-- Corazones --> <span class="absolute top-6 sm:top-12 left-6 sm:left-16 text-3xl sm:text-5xl animate-bounce z-20">\u{1F495}</span> <span class="absolute bottom-8 sm:bottom-14 right-10 sm:right-20 text-2xl sm:text-4xl animate-pulse z-20">\u{1F496}</span> <span class="absolute top-1/2 right-6 sm:right-10 text-xl sm:text-3xl animate-bounce z-20">\u{1F497}</span> </div> </div> </div> </div> <script type="text/javascript">\n  // Animaci\xF3n m\xE1quina de escribir\n  document.addEventListener("DOMContentLoaded", function () {\n    const el = document.getElementById("typewriter");\n    const texto = "Katy Brezzia ";\n    let i = 0;\n    function escribir() {\n      if (i <= texto.length) {\n        el.textContent = texto.slice(0, i);\n        i++;\n        setTimeout(escribir, 180);\n      }\n    }\n    escribir();\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/home/Hero.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Recuerdos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="section-amor" data-astro-cid-mupaiect> <h1 class="titulo-neon" data-astro-cid-mupaiect>\u{1F339} Recuerdos \u{1F339}</h1> <div class="mensaje" data-astro-cid-mupaiect>
Desde que llegaste a mi vida, todo cambi\xF3... Eres mi inspiraci\xF3n, mi
    alegr\xEDa, mi paz. <br data-astro-cid-mupaiect>
Atte: tu pap\xE1 \u{1F495}
</div> <div class="slider-romantico" data-astro-cid-mupaiect> <div class="slides" data-astro-cid-mupaiect> <div class="slide active" style="--bg:url('/img/kat/03.jpg')" data-astro-cid-mupaiect> <img src="/img/kat/03.jpg" alt="Momento 1" data-astro-cid-mupaiect> </div> <div class="slide" style="--bg:url('/img/kat/kat.jpg')" data-astro-cid-mupaiect> <img src="/img/kat/kat.jpg" alt="Momento 2" data-astro-cid-mupaiect> </div> <div class="slide" style="--bg:url('/img/recuerdos/foto.jpg')" data-astro-cid-mupaiect> <img src="/img/recuerdos/foto.jpg" alt="Momento 3" data-astro-cid-mupaiect> </div> <div class="slide" style="--bg:url('/img/recuerdos/cachimbos.jpg')" data-astro-cid-mupaiect> <img src="/img/recuerdos/cachimbos.jpg" alt="Momento 4" data-astro-cid-mupaiect> </div> <div class="slide" style="--bg:url('/img/recuerdos/foto2.jpg')" data-astro-cid-mupaiect> <img src="/img/recuerdos/foto2.jpg" alt="Momento 5" data-astro-cid-mupaiect> </div> <div class="slide" style="--bg:url('/img/recuerdos/foto3.jpg')" data-astro-cid-mupaiect> <img src="/img/recuerdos/foto3.jpg" alt="Momento 6" data-astro-cid-mupaiect> </div> </div> <!-- Controles --> <button class="control prev" data-astro-cid-mupaiect>\u276E</button> <button class="control next" data-astro-cid-mupaiect>\u276F</button> <!-- Indicadores --> <div class="indicators" data-astro-cid-mupaiect></div> </div> </section>  <script type="text/javascript">
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const indicatorsContainer = document.querySelector(".indicators");

  // Crear indicadores din\xE1micos
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
    indicatorsContainer.appendChild(dot);
  });
  const indicators = indicatorsContainer.querySelectorAll("span");

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((dot) => dot.classList.remove("active"));
    slides[i].classList.add("active");
    indicators[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Autoplay
  setInterval(nextSlide, 5000);
<\/script>`])), maybeRenderHead());
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/Recuerdos.astro", void 0);

function RomanticCard() {
  const mensajes = [
    "Cada día contigo es un regalo inigualable. 💝",
    "Tu sonrisa ilumina mis días, gracias por existir. 🌹",
    "Eres mi pensamiento favorito al despertar y al soñar. ✨",
    "Eres la más hermosa, hoy y siempre. ❤️",
    "En tus ojos encuentro mi hogar. 🕊️",
    "Tenerte a mi lado es mi mayor fortuna. 💫"
  ];
  const sorpresasTextos = [
    "Siempre en mi corazón 💖",
    "Tú y yo por siempre ✨",
    "Eres mi destino 🌹",
    "Amor eterno ❤️",
    "Eres mi universo 🌙"
  ];
  const fotos = ["/img/kat/03.jpg", "/img/kat/04.jpg", "/img/kat/05.jpg"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [sorpresa, setSorpresa] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mensajes.length);
        setFade(true);
      }, 500);
    }, 8e3);
    return () => clearInterval(interval);
  }, []);
  const activarSorpresa = () => {
    const opciones = ["corazones", "mensajes", "fotos", "petalos"];
    const random = opciones[Math.floor(Math.random() * opciones.length)];
    setSorpresa(random);
    setTimeout(() => setSorpresa(null), 7e3);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden \r\n      bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600 animate-gradient-x",
      role: "region",
      "aria-label": "Tarjeta romántica",
      children: [
        Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute animate-floatSlow select-none",
            style: {
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              fontSize: `${18 + Math.random() * 28}px`,
              color: "rgba(255,255,255,0.7)",
              bottom: "-60px"
            },
            children: "❤"
          },
          i
        )),
        sorpresa === "corazones" && Array.from({ length: 50 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute animate-rainHeart select-none",
            style: {
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${14 + Math.random() * 26}px`,
              color: i % 2 === 0 ? "#ff6b9f" : "#fff",
              top: "-40px"
            },
            children: "❤"
          },
          `heart-${i}`
        )),
        sorpresa === "mensajes" && Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute animate-floatMessage text-white font-bold drop-shadow-lg",
            style: {
              left: `${Math.random() * 100}%`,
              fontSize: "18px",
              top: `${20 + Math.random() * 50}%`
            },
            children: sorpresasTextos[Math.floor(Math.random() * sorpresasTextos.length)]
          },
          `msg-${i}`
        )),
        sorpresa === "fotos" && Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx(
          "img",
          {
            src: fotos[Math.floor(Math.random() * fotos.length)],
            alt: "Recuerdo romántico",
            className: "absolute animate-fallBounce rounded-full shadow-xl border-2 border-white",
            style: {
              left: `${Math.random() * 100}%`,
              width: "70px",
              height: "70px",
              top: "-80px"
            }
          },
          `foto-${i}`
        )),
        sorpresa === "petalos" && Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute animate-petal select-none",
            style: {
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${16 + Math.random() * 20}px`,
              color: "#ffe4e1",
              top: "-40px"
            },
            children: "🌸"
          },
          `petal-${i}`
        )),
        /* @__PURE__ */ jsxs(
          "article",
          {
            className: "relative z-10 max-w-xl w-full mx-6 sm:mx-4 bg-white/10 \r\n        backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl \r\n        p-10 flex flex-col items-center justify-center animate-fadeIn",
            children: [
              /* @__PURE__ */ jsx(
                "blockquote",
                {
                  className: `text-center text-2xl sm:text-3xl md:text-4xl font-bold 
          text-pink-50 drop-shadow-xl font-[Dancing_Script,cursive] 
          transition-all duration-700 ease-in-out ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
                  children: /* @__PURE__ */ jsx("p", { children: mensajes[index] })
                },
                mensajes[index]
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: activarSorpresa,
                  className: "flex items-center justify-center w-16 h-16 rounded-full \r\n            bg-gradient-to-r from-pink-400 to-fuchsia-600 text-white \r\n            shadow-lg hover:scale-110 hover:shadow-xl transition relative",
                  children: [
                    /* @__PURE__ */ jsx(Gift, { size: 34 }),
                    /* @__PURE__ */ jsx("span", { className: "absolute -bottom-6 text-sm text-white opacity-80", children: "Sorpresa ✨" })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        /* Fondo corazones lentos */
        @keyframes floatSlow {
          0% {
            transform: translateY(0) scale(0.9);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(1.2);
            opacity: 0;
          }
        }
        .animate-floatSlow {
          animation: floatSlow linear infinite;
        }

        /* Lluvia de corazones sorpresa */
        @keyframes rainHeart {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-rainHeart {
          animation: rainHeart ease-in-out forwards;
        }

        /* Mensajes flotantes */
        @keyframes floatMessage {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(1.05);
          }
        }
        .animate-floatMessage {
          animation: floatMessage 6s ease-in-out forwards;
        }

        /* Fotos con rebote */
        @keyframes fallBounce {
          0% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            transform: translateY(90vh) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) scale(1);
            opacity: 0;
          }
        }
        .animate-fallBounce {
          animation: fallBounce 6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Pétalos flotantes en zigzag */
        @keyframes petal {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(-40px) rotate(180deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) translateX(40px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-petal {
          animation: petal ease-in-out forwards;
        }

        /* Fondo dinámico */
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 20s ease infinite;
        }

        /* Aparición suave de tarjeta */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
      ` })
      ]
    }
  );
}

const $$Kat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="video-fondo" data-astro-cid-6khslt5z> <video autoplay muted loop playsinline class="video-bg" data-astro-cid-6khslt5z> <source src="/videos/02.mp4" type="video/mp4" data-astro-cid-6khslt5z>
Tu navegador no soporta video HTML5.
</video> <div class="overlay" data-astro-cid-6khslt5z></div> <div class="contenido-romantico" data-astro-cid-6khslt5z> <h1 data-astro-cid-6khslt5z>💖 Momentos Inolvidables 💖</h1> <p data-astro-cid-6khslt5z>Contigo cada instante es un recuerdo eterno...</p> </div> </section> `;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/Kat.astro", void 0);

const fotos = [
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg"
];
function RomanticFinal() {
  const [congelado, setCongelado] = useState(false);
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
        setCongelado(true);
      }, 600);
    }, 9e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "final",
      className: `final-romantico ${congelado ? "congelado" : ""} ${flash ? "flash-activo" : ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "estrellas" }),
        /* @__PURE__ */ jsx("div", { className: "polaroids", children: fotos.map((foto, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "polaroid",
            style: {
              "--i": i,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`
            },
            children: /* @__PURE__ */ jsx("img", { src: foto, alt: "Recuerdo con Kat" })
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "petalos", children: Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "petalo",
            style: {
              "--i": i,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`
            },
            children: "🌸"
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "corazones", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "corazon",
            style: {
              "--i": i,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`
            },
            children: "❤️"
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "destellos", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "destello",
            style: {
              "--i": i,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flash" }),
        /* @__PURE__ */ jsxs("div", { className: "mensaje-final", children: [
          /* @__PURE__ */ jsx("h1", { className: "escritura", children: "💖 Te Amo Kat 💖" }),
          /* @__PURE__ */ jsx("p", { className: "escritura-lenta", children: "Nuestros recuerdos son mi tesoro más grande... y contigo quiero escribir todos los capítulos de mi vida. ✨" })
        ] })
      ]
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Heart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<main data-astro-cid-cucifeve> <h1 data-astro-cid-cucifeve>Para Mi Amada Sho</h1> <div class="heart-animation-container" data-astro-cid-cucifeve> <div class="animated-heart" data-astro-cid-cucifeve>\u2764\uFE0F</div> </div> <div class="te-amo-sho" data-astro-cid-cucifeve>Te Amo Kat</div> <div class="falling-hearts-container" id="fallingHearts" data-astro-cid-cucifeve></div> <div class="footer-love" data-astro-cid-cucifeve>Un amor que late eternamente por ti. \u{1F495}</div> <!-- <script type="text/javascript">\n    const fallingHeartsContainer = document.getElementById("fallingHearts");\n    const numHearts = 20;\n    for (let i = 0; i < numHearts; i++) {\n      const heart = document.createElement("div");\n      heart.classList.add("falling-heart");\n      heart.innerText = "\u{1F496}";\n      heart.style.left = `${Math.random() * 100}vw`;\n      heart.style.animationDelay = `${Math.random() * 6}s`;\n      fallingHeartsContainer.appendChild(heart);\n    }\n  <\/script> --> </main>'], ["", '<main data-astro-cid-cucifeve> <h1 data-astro-cid-cucifeve>Para Mi Amada Sho</h1> <div class="heart-animation-container" data-astro-cid-cucifeve> <div class="animated-heart" data-astro-cid-cucifeve>\u2764\uFE0F</div> </div> <div class="te-amo-sho" data-astro-cid-cucifeve>Te Amo Kat</div> <div class="falling-hearts-container" id="fallingHearts" data-astro-cid-cucifeve></div> <div class="footer-love" data-astro-cid-cucifeve>Un amor que late eternamente por ti. \u{1F495}</div> <!-- <script type="text/javascript">\n    const fallingHeartsContainer = document.getElementById("fallingHearts");\n    const numHearts = 20;\n    for (let i = 0; i < numHearts; i++) {\n      const heart = document.createElement("div");\n      heart.classList.add("falling-heart");\n      heart.innerText = "\u{1F496}";\n      heart.style.left = \\`\\${Math.random() * 100}vw\\`;\n      heart.style.animationDelay = \\`\\${Math.random() * 6}s\\`;\n      fallingHeartsContainer.appendChild(heart);\n    }\n  <\/script> --> </main>'])), maybeRenderHead());
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/home/Heart.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { img, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-ye7oyvcs> <img class="rounded-full right-0 m-auto p-4" height="130" width="130"${addAttribute(img, "src")} alt="" data-astro-cid-ye7oyvcs> <header data-astro-cid-ye7oyvcs>${title}</header> <div data-astro-cid-ye7oyvcs> <p class="text-shadow-2xs text-xs" data-astro-cid-ye7oyvcs> ${description} </p> </div> <button type="submit" data-astro-cid-ye7oyvcs>Mas Info</button> </article> `;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/home/Card.astro", void 0);

const $$InfoSection = createComponent(($$result, $$props, $$slots) => {
  const skill = [
    {
      title: "Medicina Veterinaria",
      description: "Apasionada por la salud y el bienestar animal, en constante formaci\xF3n acad\xE9mica y pr\xE1ctica para convertirse en profesional de la medicina veterinaria. Comprometida con el cuidado responsable y la ciencia que transforma vidas.",
      img: "/img/kat/kat.jpg"
    },
    {
      title: "Habilidades",
      description: "Comunicaci\xF3n efectiva, empat\xEDa, trabajo en equipo, resoluci\xF3n de problemas, adaptabilidad, pensamiento cr\xEDtico, gesti\xF3n del tiempo, liderazgo y habilidades t\xE9cnicas espec\xEDficas del campo veterinario.",
      img: "/img/kat/kat.jpg"
    },
    {
      title: "Intereses",
      description: "Medicina veterinaria, bienestar animal, conservaci\xF3n de la vida silvestre, educaci\xF3n comunitaria sobre el cuidado de las mascotas, investigaci\xF3n cient\xEDfica en salud animal y participaci\xF3n en programas de rescate y rehabilitaci\xF3n de animales.",
      img: "/img/kat/kat.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-ccbxxvpk>Mis Skill</h2> <section class="section-info" data-astro-cid-ccbxxvpk> ${skill.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "img": item.img, "title": item.title, "description": item.description, "data-astro-cid-ccbxxvpk": true })}`)} </section> `;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/home/InfoSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kat Love" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "InfoSection", $$InfoSection, {})} ${renderComponent($$result2, "Heart", $$Heart, {})} ${renderComponent($$result2, "Recuerdos", $$Recuerdos, {})}  ${renderComponent($$result2, "Message", RomanticCard, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/home/Message.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "PoemaRomantico", PoemaRomantico, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/PoemaRomantico", "client:component-export": "default" })} ${renderComponent($$result2, "Kat", $$Kat, {})}  ${renderComponent($$result2, "Final", RomanticFinal, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/components/Final.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/index.astro", void 0);

const $$file = "C:/Users/LENOVO/Desktop/SVELI/LOVE/KAT/app-love/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
