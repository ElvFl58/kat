import { useEffect, useState } from "react";
import "./Final.css"; // moveré el CSS a archivo externo para limpieza

const fotos = [
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
  "/img/kat/kat.jpg",
];

export default function RomanticFinal() {
  const [congelado, setCongelado] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
        setCongelado(true);
      }, 600);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="final"
      className={`final-romantico ${congelado ? "congelado" : ""} ${
        flash ? "flash-activo" : ""
      }`}
    >
      {/* Fondo de estrellas */}
      <div className="estrellas"></div>

      {/* Polaroids cayendo */}
      <div className="polaroids">
        {fotos.map((foto, i) => (
          <div
            key={i}
            className="polaroid"
            style={{
              "--i": i,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <img src={foto} alt="Recuerdo con Kat" />
          </div>
        ))}
      </div>

      {/* Pétalos */}
      <div className="petalos">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="petalo"
            style={{
              "--i": i,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* Corazones */}
      <div className="corazones">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="corazon"
            style={{
              "--i": i,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Destellos */}
      <div className="destellos">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="destello"
            style={{
              "--i": i,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Flash */}
      <div className="flash"></div>

      {/* Contenido central */}
      <div className="mensaje-final">
        <h1 className="escritura">💖 Te Amo Kat 💖</h1>
        <p className="escritura-lenta">
          Nuestros recuerdos son mi tesoro más grande... y contigo quiero
          escribir todos los capítulos de mi vida. ✨
        </p>
      </div>
    </section>
  );
}
