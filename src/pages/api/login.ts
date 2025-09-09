import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { username, password } = await request.json();
  if (username === "admin" && password === "1234") {
    return new Response(JSON.stringify({ token: "fake-jwt-token" }), { status: 200 });
  }
  return new Response(JSON.stringify({ error: "Credenciales inválidas" }), { status: 401 });
};


// <!-- 
// <main
//   class="min-h-screen w-full bg-gradient-to-br from-purple-900 to-purple-700 flex flex-col items-center justify-center p-4 relative overflow-hidden"
// >
//   <!-- Efectos de fondo -->
// <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//   <div class="absolute inset-0 bg-[url('/img/sparkle-bg.png')] opacity-20">
//   </div>
//   <div
//     class="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-purple-900/80 to-transparent"
//   >
//   </div>
// </div>

// <!-- Sección principal -->
// <section
//   class="relative z-10 max-w-4xl w-full bg-purple-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-purple-400/30 p-8 md:p-12 text-center transform transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]"
// >
//   <!-- Título con animación -->
//   <h1
//     class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent mb-6 animate-float-slow"
//   >
//     ¡Feliz 21 Cumpleaños Kat!
//   </h1>

//   <!-- Pastel con vela -->
//   <div class="relative flex flex-col items-center my-12">
//     <div
//       class="w-64 h-40 bg-gradient-to-b from-amber-300 to-amber-600 rounded-b-full shadow-xl flex justify-center"
//     >
//       <!-- Vela interactiva -->
//       <div
//         id="candle"
//         class="relative cursor-pointer group"
//         onclick="blowCandle()"
//       >
//         <div
//           class="w-4 h-24 bg-gradient-to-b from-white to-purple-200 mx-auto rounded-t-sm"
//         >
//         </div>
//         <div
//           id="flame"
//           class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-gradient-to-b from-yellow-200 via-orange-300 to-transparent rounded-full blur-sm group-hover:blur-md transition-all duration-300 animate-flicker"
//         >
//         </div>
//       </div>
//     </div>
//     <div
//       class="w-72 h-8 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-full shadow-md"
//     >
//     </div>
//   </div>

//   <!-- Instrucción para soplar -->
//   <div
//     id="instruction"
//     class="text-xl md:text-2xl text-purple-100 mb-8 animate-pulse"
//   >
//     ¡Sopla la vela para pedir tu deseo!
//   </div>

//   <!-- Formulario de deseo (oculto inicialmente) -->
//   <div
//     id="wish-form"
//     class="hidden max-w-md mx-auto bg-purple-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/30 animate-fade-in"
//   >
//     <h3 class="text-2xl font-bold text-purple-100 mb-4">Pide tu deseo</h3>
//     <textarea
//       class="w-full bg-purple-800/50 border border-purple-400/30 rounded-lg p-4 text-purple-100 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
//       placeholder="Escribe tu deseo secreto..."></textarea>
//     <button
//       class="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
//     >
//       ¡Pedir deseo!
//     </button>
//   </div>

//   <!-- Mensaje especial (aparece después de soplar) -->
//   <div
//     id="special-message"
//     class="hidden mt-12 bg-gradient-to-r from-purple-600/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border-2 border-purple-400/30 animate-fade-in-up"
//   >
//     <h2 class="text-3xl md:text-4xl font-bold text-purple-100 mb-4">
//       ¡Kat es increíble!
//     </h2>
//     <p class="text-xl text-purple-200 mb-4">Porque eres:</p>
//     <ul class="space-y-3 text-purple-100 text-lg">
//       <li class="flex items-center justify-center gap-2">
//         ✨ Única e irrepetible
//       </li>
//       <li class="flex items-center justify-center gap-2">
//         💜 La mejor amiga que alguien podría tener
//       </li>
//       <li class="flex items-center justify-center gap-2">
//         🌟 Brillante como las estrellas
//       </li>
//       <li class="flex items-center justify-center gap-2">
//         🦄 Mágica en todo lo que haces
//       </li>
//     </ul>
//   </div>
// </section>

// <!-- Componente de confeti (se activa al soplar) -->
// <!-- <Confetti client:load /> -->

// <!-- Globos que aparecen después de soplar -->
// <div id="balloons" class="hidden absolute inset-0 pointer-events-none">
//   <!-- Globos generados dinámicamente -->
// </div>

// <style is:global>
//   /* Animaciones personalizadas */
//   @keyframes float-slow {
//     0%,
//     100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-15px);
//     }
//   }

//   @keyframes flicker {
//     0%,
//     100% {
//       opacity: 1;
//       transform: scale(1);
//     }
//     25% {
//       opacity: 0.8;
//       transform: scale(0.95);
//     }
//     50% {
//       opacity: 0.9;
//       transform: scale(1.05);
//     }
//     75% {
//       opacity: 0.85;
//       transform: scale(0.98);
//     }
//   }

//   @keyframes fade-in {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }

//   @keyframes fade-in-up {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @keyframes float-up {
//     0% {
//       transform: translateY(100vh);
//       opacity: 1;
//     }
//     100% {
//       transform: translateY(-100vh);
//       opacity: 0;
//     }
//   }

//   .animate-float-slow {
//     animation: float-slow 6s ease-in-out infinite;
//   }

//   .animate-flicker {
//     animation: flicker 3s ease-in-out infinite;
//   }

//   .animate-fade-in {
//     animation: fade-in 1s ease-out forwards;
//   }

//   .animate-fade-in-up {
//     animation: fade-in-up 1s ease-out forwards;
//   }

//   .balloon {
//     position: absolute;
//     width: 60px;
//     height: 80px;
//     border-radius: 50%;
//     animation: float-up 15s linear forwards;
//   }
// </style>

// <script type="text/javascript">
//   // Función para soplar la vela
//   function blowCandle() {
//     const flame = document.getElementById("flame");
//     const instruction = document.getElementById("instruction");
//     const wishForm = document.getElementById("wish-form");
//     const specialMessage = document.getElementById("special-message");
//     const balloonsContainer = document.getElementById("balloons");

//     // Apagar vela
//     flame.style.opacity = "0";
//     flame.style.transform = "translateX(-50%) translateY(-50%) scale(0.5)";
//     flame.style.transition = "all 0.5s ease-out";

//     // Mostrar efectos
//     setTimeout(() => {
//       // Mostrar confeti
//       const confettiEvent = new CustomEvent("triggerConfetti");
//       window.dispatchEvent(confettiEvent);

//       // Cambiar instrucción
//       instruction.textContent = "¡Tu deseo se hará realidad!";
//       instruction.classList.remove("animate-pulse");

//       // Mostrar formulario de deseo
//       wishForm.classList.remove("hidden");
//       wishForm.classList.add("block");

//       // Mostrar mensaje especial después de 3 segundos
//       setTimeout(() => {
//         specialMessage.classList.remove("hidden");
//         specialMessage.classList.add("block");

//         // Crear globos
//         balloonsContainer.classList.remove("hidden");
//         createBalloons();
//       }, 3000);
//     }, 500);
//   }

//   // Crear globos flotantes
//   function createBalloons() {
//     const colors = [
//       "bg-purple-400",
//       "bg-purple-300",
//       "bg-purple-200",
//       "bg-purple-500",
//       "bg-purple-600",
//     ];
//     const container = document.getElementById("balloons");

//     for (let i = 0; i < 15; i++) {
//       const balloon = document.createElement("div");
//       balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
//       balloon.style.left = `${Math.random() * 100}%`;
//       balloon.style.bottom = "-100px";
//       balloon.style.animationDelay = `${Math.random() * 5}s`;
//       balloon.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`;

//       // Crear hilo del globo
//       const string = document.createElement("div");
//       string.className = "absolute top-full left-1/2 w-1 h-20 bg-purple-200/50";
//       string.style.transform = "translateX(-50%)";

//       balloon.appendChild(string);
//       container.appendChild(balloon);
//     }
//   }
// </script> -->
