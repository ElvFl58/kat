import { useEffect, useState } from "react";
import "./Modal.css";

export default function Conexion() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // Estado para mostrar u ocultar
  const [visible, setVisible] = useState(true);

  // Saludo romántico según la hora
  let greeting = "";
  if (currentHour < 12) {
    greeting = "☀️ Buenos días,";
  } else if (currentHour < 18) {
    greeting = "🌹 Buenas tardes, corazón";
  } else {
    greeting = "🌙 Dulces noches, mi vida";
  }
 let greeting = "Hola Katy";
  // Frases románticas cortas
  const frases = [
    "💖 Eres mi razón de sonreír.",
    "🌸 Mi mundo brilla contigo.",
    "✨ Eres mi paz y mi alegría.",
    "💌 Tus abrazos son mi refugio.",
    "🔥 Te pienso en cada instante.",
    "🌙 Eres mi hoy y mi siempre.",
  ];

  const [fraseActual, setFraseActual] = useState(frases[0]);

  // Cambio de frase cada 6 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setFraseActual(frases[randomIndex]);
    }, 6000);
    return () => clearInterval(intervalo);
  }, [frases]);

  // Si está cerrado, no renderiza nada
  if (!visible) return null;

  return (
    <section className="modal">
      <button className="cerrar" onClick={() => setVisible(false)}>
        ❌
      </button>
      <p className="saludo">'Hola Katy'</p>
      <p className="frase">{fraseActua}</p>
      <div className="hearts"></div>
    </section>
  );
}
