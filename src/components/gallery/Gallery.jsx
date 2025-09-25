import { useEffect, useState } from "react";
import "./Gallery.css";

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
  { src: "/img/gallery/01.jpg", alt: "Kat" },
];

export default function RomanticGallery() {
  const [corazones, setCorazones] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      emoji: Math.random() > 0.5 ? "💖" : "💘",
      size: 20 + Math.random() * 20,
    }));
    setCorazones(newHearts);
  }, []);

  return (
    <section className="relative min-h-screen py-16 px-6  overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14 animate-glow">
        <h1 className="text-5xl sm:text-7xl font-dancing text-white drop-shadow-lg">
          🌸 Galería de Kat 🌸
        </h1>
        <p className="mt-3 text-lg sm:text-2xl text-white font-dosis">
          Cada recuerdo contigo es un pétalo en mi corazón 💕
        </p>
      </div>

      {/* Galería */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {fotos.map((foto, i) => (
          <div
            key={i}
            onClick={() => setSelected(foto)}
            className="cursor-pointer group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-rotate-2 hover:scale-105 transition duration-500"
          >
            <div className="w-full h-[280px] bg-pink-50 flex items-center justify-center overflow-hidden">
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-rose-200/80 text-center py-3 text-rose-700 font-dancing text-lg backdrop-blur-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
              {foto.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Corazones flotantes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {corazones.map((c) => (
          <span
            key={c.id}
            className="absolute animate-floating"
            style={{
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              fontSize: `${c.size}px`,
            }}
          >
            {c.emoji}
          </span>
        ))}
      </div>

      {/* Modal romántico */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full p-6">
            <img
              src={selected.src}
              alt={selected.alt}
              className="rounded-2xl shadow-2xl w-full max-h-[80vh] object-contain animate-zoomIn"
            />
            <p className="text-center text-white font-dancing text-2xl mt-4 animate-fadeIn">
              {selected.alt} 🌹
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
