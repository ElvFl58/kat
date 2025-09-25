import { useState, useEffect } from "react";
// import { Gift } from "lucide-react";

export default function RomanticCard() {
  const mensajes = [
    "Cada día contigo es un regalo inigualable. 💝",
    "Tu sonrisa ilumina mis días, gracias por existir. 🌹",
    "Eres mi pensamiento favorito al despertar y al soñar. ✨",
    "Eres la más hermosa, hoy y siempre. ❤️",
    "En tus ojos encuentro mi hogar. 🕊️",
    "Tenerte a mi lado es mi mayor fortuna. 💫",
  ];

  const sorpresasTextos = [
    "Siempre en mi corazón 💖",
    "Tú y yo por siempre ✨",
    "Eres mi destino 🌹",
    "Amor eterno ❤️",
    "Eres mi universo 🌙",
  ];

  const fotos = ["/img/kat/03.jpg", "/img/kat/04.jpg", "/img/kat/05.jpg"];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [sorpresa, setSorpresa] = useState(null);

  // cambio automático de mensajes
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mensajes.length);
        setFade(true);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const activarSorpresa = () => {
    const opciones = ["corazones", "mensajes", "fotos", "petalos"];
    const random = opciones[Math.floor(Math.random() * opciones.length)];
    setSorpresa(random);
    setTimeout(() => setSorpresa(null), 7000); // dura más para mejor efecto
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600 animate-gradient-x"
      role="region"
      aria-label="Tarjeta romántica"
    >
      {/* Fondo corazones lentos */}
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className="absolute animate-floatSlow select-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            fontSize: `${18 + Math.random() * 28}px`,
            color: "rgba(255,255,255,0.7)",
            bottom: "-60px",
          }}
        >
          ❤
        </span>
      ))}

      {/* Sorpresas */}
      {sorpresa === "corazones" &&
        Array.from({ length: 50 }).map((_, i) => (
          <span
            key={`heart-${i}`}
            className="absolute animate-rainHeart select-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${14 + Math.random() * 26}px`,
              color: i % 2 === 0 ? "#ff6b9f" : "#fff",
              top: "-40px",
            }}
          >
            ❤
          </span>
        ))}

      {sorpresa === "mensajes" &&
        Array.from({ length: 15 }).map((_, i) => (
          <span
            key={`msg-${i}`}
            className="absolute animate-floatMessage text-white font-bold drop-shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: "18px",
              top: `${20 + Math.random() * 50}%`,
            }}
          >
            {
              sorpresasTextos[
                Math.floor(Math.random() * sorpresasTextos.length)
              ]
            }
          </span>
        ))}

      {sorpresa === "fotos" &&
        Array.from({ length: 8 }).map((_, i) => (
          <img
            key={`foto-${i}`}
            src={fotos[Math.floor(Math.random() * fotos.length)]}
            alt="Recuerdo romántico"
            className="absolute animate-fallBounce rounded-full shadow-xl border-2 border-white"
            style={{
              left: `${Math.random() * 100}%`,
              width: "70px",
              height: "70px",
              top: "-80px",
            }}
          />
        ))}

      {sorpresa === "petalos" &&
        Array.from({ length: 40 }).map((_, i) => (
          <span
            key={`petal-${i}`}
            className="absolute animate-petal select-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${16 + Math.random() * 20}px`,
              color: "#ffe4e1",
              top: "-40px",
            }}
          >
            🌸
          </span>
        ))}

      {/* Tarjeta central */}
      <article
        className="relative z-10 max-w-xl w-full mx-6 sm:mx-4 bg-white/10 
        backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl 
        p-10 flex flex-col items-center justify-center animate-fadeIn"
      >
        <blockquote
          className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold 
          text-pink-50 drop-shadow-xl font-[Dancing_Script,cursive] 
          transition-all duration-700 ease-in-out ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          key={mensajes[index]}
        >
          <p>{mensajes[index]}</p>
        </blockquote>

        {/* Botón sorpresa */}
        <div className="mt-6">
          <button
            onClick={activarSorpresa}
            className="flex items-center justify-center w-16 h-16 rounded-full 
            bg-gradient-to-r from-pink-400 to-fuchsia-600 text-white 
            shadow-lg hover:scale-110 hover:shadow-xl transition relative"
          >
            {/* <Gift size={34} /> */}
            <span className="absolute -bottom-6 text-sm text-white opacity-80">
              Sorpresa ✨
            </span>
          </button>
        </div>
      </article>

      {/* Animaciones */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
}
