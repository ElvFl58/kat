import { useState, useEffect } from "react";
import "./Mascot.css";
const mascota = {
  nombre: "Logan",
  edad: "3 años",
  foto: "/img/logan/logan5.png",
  descripcion: "El mejor amigo peludo, lleno de amor y travesuras",
  personalidad: "Juguetón, cariñoso y siempre feliz",
};

const recuerdos = [
  {
    src: "/img/logan/logan.jpg",
    alt: "Logan en el parque",
    titulo: "Aventuras en el Parque",
    descripcion: "Explorando nuevos lugares juntos",
  },
  {
    src: "/img/logan/logan2.png",
    alt: "Logan corriendo",
    titulo: "Corriendo Libre",
    descripcion: "La libertad de ser feliz",
  },
  {
    src: "/img/logan/logan3.png",
    alt: "Logan mirando",
    titulo: "Mirada de Amor",
    descripcion: "Esos ojos que dicen todo",
  },
  {
    src: "/img/logan/logan4.png",
    alt: "Logan sentado",
    titulo: "Momentos Tranquilos",
    descripcion: "Descansando juntos",
  },
];

export default function LoganGallery() {
  const [modal, setModal] = useState(null);
  const [particles, setParticles] = useState([]);

  // Generar partículas flotantes
  useEffect(() => {
    const icons = ["💖", "💕", "🐾", "💘", "💝", "💗", "✨", "🌟"];
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      size: `${20 + Math.random() * 20}px`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen w-full  flex flex-col items-center justify-center overflow-hidden">
      {/* HERO */}
      <section className="relative py-20 sm:py-28 lg:py-32 flex flex-col items-center justify-center w-full">
        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute animate-floatElement opacity-70"
              style={{
                left: p.left,
                animationDelay: p.delay,
                fontSize: p.size,
              }}
            >
              {p.icon}
            </span>
          ))}
        </div>

        {/* Luces */}
        <div className="absolute inset-0">
          <div className="light-effect light-1" />
          <div className="light-effect light-2" />
          <div className="light-effect light-3" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          {/* Título */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-28">
            <div className="flex items-center gap-6 justify-center mb-6">
              <span className="text-4xl text-pink-400">🐾</span>
              <h1 className="text-5xl md:text-7xl font-bold text-purple-600 drop-shadow-lg animate-fade-in">
                Mi compañero de aventuras
              </h1>
              <span className="text-4xl text-pink-400">💕</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-purple-500 animate-fade-in-delay">
              {mascota.nombre}
            </h2>
          </div>

          {/* Tarjeta principal */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-purple-200 p-10 md:p-16 animate-fade-in-delay-2 w-full max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Imagen */}
              <div className="relative group">
                <img
                  src={mascota.foto}
                  alt={mascota.nombre}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/288x288?text=Logan")
                  }
                  className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full border-8 border-yellow-300 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl animate-pulse shadow-lg">
                  💖
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <h3 className="text-4xl font-bold text-purple-600">
                  {mascota.nombre}
                </h3>
                <p className="text-2xl text-purple-500 font-medium">
                  {mascota.edad}
                </p>
                <p className="text-xl text-gray-700 italic">
                  "{mascota.descripcion}"
                </p>
                <p className="text-lg text-gray-600">{mascota.personalidad}</p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce">
                    🐕 Juguetón
                  </span>
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce delay-200">
                    💕 Cariñoso
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce delay-400">
                    😊 Feliz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="relative py-20 sm:py-28 lg:py-32 w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-pink-500 animate-fade-in">
            Recuerdos Preciosos
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 mt-4 animate-fade-in-delay">
            Cada momento con Logan es un tesoro que guardamos en el corazón 💕
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recuerdos.map((recuerdo, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 hover:-rotate-1 cursor-pointer animate-fade-in-delay-2"
              onClick={() => setModal(recuerdo)}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={recuerdo.src}
                  alt={recuerdo.alt}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/400x256?text=Logan")
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-purple-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {recuerdo.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{recuerdo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4 w-[30%] h-auto"
          onClick={() => setModal(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={modal.src}
              alt={modal.alt}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl animate-zoomIn"
            />
            <div className="absolute top-4 left-4 bg-white/95 px-6 py-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">{modal.titulo}</h3>
              <p className="text-sm text-gray-600">{modal.descripcion}</p>
            </div>
            <button
              className="absolute top-4 right-4 bg-white/95 rounded-full w-12 h-12 flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition"
              onClick={() => setModal(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
