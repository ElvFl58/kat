import React, { useEffect, useRef, useState } from "react";
import "./PoemaRomantico.css";

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

  // Animación de líneas del poema
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

  // Corazones flotantes
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

  // Eliminar corazones después de animar
  useEffect(() => {
    if (corazonList.length > 30) {
      setCorazonList((prev) => prev.slice(-30));
    }
  }, [corazonList]);

  // Beso flotante al hacer click
  const handleKiss = (e) => {
    setKissPos({ x: e.clientX, y: e.clientY });
    setShowKiss(true);
    setTimeout(() => setShowKiss(false), 1200);
  };

  return (
    <div className="poema-bg" onClick={handleKiss}>
      {/* Corazones flotantes */}
      {corazonList.map((c) => (
        <span
          key={c.id}
          className="corazon-float"
          style={{
            left: `${c.left}%`,
            fontSize: `${c.size}px`,
            animationDuration: `${c.duration}s`
          }}
        >
          {c.emoji}
        </span>
      ))}
      {/* Beso animado */}
      {showKiss && (
        <span
          className="beso-float"
          style={{ left: kissPos.x, top: kissPos.y }}
        >
          💋
        </span>
      )}
      <div className="poema-card animate-poema">
        <h1 className="poema-title animate-title">Para Ti, Mi Amada Kat</h1>
        <div className="poema-texto">
          {poemas[poemaIndex].slice(0, lineaIndex + 1).map((linea, i) => (
            <p key={i} className="poema-linea animate-linea">{linea}</p>
          ))}
        </div>
        <div className="poema-firma animate-firma">Siempre con una pasión infinita.</div>
        <footer className="poema-footer animate-footer">
          Mi amor por ti, Kat, es un fuego eterno que jamás se extinguirá. 🔥
        </footer>
      </div>
    </div>
  );
};

export default PoemaRomantico;
