import { useState, useEffect, useRef } from "react";

export default function RomanticSliderGallery() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  ];

  const hearts = ["💖", "💕", "💗", "💓", "💞"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const sliderRef = useRef(null);

  // Cambio automático de imagen principal cada 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  // Scroll automático del slider
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (slider) {
        slider.scrollBy({ left: 200, behavior: "smooth" });
        scrollAmount += 200;

        // Reinicia cuando llega al final
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
          scrollAmount = 0;
        }
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(false);

      // Corazón en el centro
      const rect = document.getElementById("featured").getBoundingClientRect();
      addHeart(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }, 300);
  };

  const changeImage = (i, e) => {
    setFade(true);
    setTimeout(() => {
      setIndex(i);
      setFade(false);
    }, 300);

    if (e) addHeart(e.clientX, e.clientY);
  };

  const addHeart = (x, y) => {
    const newHeart = {
      id: Date.now(),
      x,
      y,
      emoji: hearts[Math.floor(Math.random() * hearts.length)],
    };
    setFloatingHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts((prev) =>
        prev.filter((heart) => heart.id !== newHeart.id)
      );
    }, 1500);
  };

  return (
    <main className="my-10 flex flex-col items-center gap-6">
      {/* Imagen principal */}
      <div className="relative">
        <img
          id="featured"
          src={images[index]}
          alt="Principal"
          className={`max-w-2xl rounded-2xl shadow-2xl transition-all duration-500 ${
            fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {/* Corazones flotantes */}
        {floatingHearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute text-3xl animate-fly"
            style={{ left: heart.x - 20, top: heart.y - 20 }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Slider miniaturas */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-3 w-full max-w-4xl"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Miniatura ${i}`}
            className={`h-24 w-32 object-cover rounded-xl cursor-pointer transition-transform duration-300 ${
              i === index
                ? "ring-4 ring-pink-500 scale-110"
                : "hover:scale-105 hover:rotate-2"
            }`}
            onClick={(e) => changeImage(i, e)}
          />
        ))}
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes fly {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-150px) scale(1.5) rotate(20deg);
          }
        }
        .animate-fly {
          animation: fly 1.5s forwards;
          pointer-events: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
