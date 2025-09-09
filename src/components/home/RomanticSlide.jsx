import { useState, useEffect } from "react";

const images = [
  "/img/kat/03.jpg", // pareja
  "/img/kat/03.jpg", // atardecer
  "/img/kat/03.jpg", // flores
];

export default function RomanticSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  // autoplay cada 5 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
      {/* Imagen actual con efecto fade */}
      <img
        key={index}
        src={images[index]}
        alt="Romantic Slide"
        className={`w-full h-[400px] md:h-[500px] object-cover transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Capa romántica de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* Texto romántico */}
      <div className="absolute bottom-12 w-full text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
          {index === 0 && "Amor que trasciende el tiempo"}
          {index === 1 && "Atardeceres que enamoran el alma"}
          {index === 2 && "Flores que hablan sin palabras"}
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-90">
          {index === 0 && "Un instante eterno en compañía"}
          {index === 1 && "La magia de los colores del cielo"}
          {index === 2 && "Pequeños detalles que lo dicen todo"}
        </p>
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-pink-600 font-bold p-3 rounded-full shadow-md transition"
      >
        ‹
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-pink-600 font-bold p-3 rounded-full shadow-md transition"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              i === index ? "bg-pink-500 scale-125" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
