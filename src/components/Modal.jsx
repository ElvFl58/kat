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
    greeting = "☀️ Hola Katy";
  } else if (currentHour < 18) {
    greeting = "🌹 Hola Brezzia";
  } else {
    greeting = "🌙 Como estas espero que este bien ";
  }

  // Frases románticas cortas
  const frases = [
    "Nunnca te rindas ",
    "Espero que estes bien ",
    "💖 Eres mi razón de sonreír.",
    "🌸 Mi mundo brilla contigo.",
    "✨ Eres mi paz y mi alegría.",
    "💌 Tus abrazos son mi refugio.",
    "🔥 Te pienso en cada instante.",
    "🌙 Eres mi hoy y mi siempre.",
    "🌹 Nunca olvides que estoy aquí para ti.",
      "💖 Eres mi razón de sonreír cada día.",
      "🌸 Mi mundo brilla contigo.",
      "✨ Eres mi paz y mi alegría.",
      "💌 Tus abrazos son mi refugio.",
      "🔥 Te pienso en cada instante.",
      "🌙 Eres mi hoy y mi siempre.",
      "🌹 Nunca olvides que estoy aquí para ti.",
      "💫 Cada día es más bonito contigo.",
      "🌞 Tu sonrisa ilumina mi mundo.",
      "🌷 Cree en ti, yo siempre creo en ti.",
      "💌 No estás sola, siempre te acompaño.",
      "🌟 Eres más fuerte de lo que crees.",
      "💖 Cada momento contigo es un tesoro.",
      "🌸 Tu alegría hace feliz mi corazón.",
      "✨ Nunca te rindas, tus metas son posibles.",
      "🔥 Lo que sueñas es alcanzable, confía en ti.",
      "🌙 Aunque lejos, siempre estoy pensando en ti.",
      "🌹 Eres mi inspiración y mi paz.",
      "💫 Cada día contigo es un regalo precioso.",
      "💌 Tienes un corazón increíble, nunca lo olvides.",
      "🌟 Juntas podemos con todo.",
      "💖 Mi mundo es mejor gracias a ti.",
      "🌸 No dejes que nada apague tu luz.",
      "✨ Siempre habrá alguien que te ame, yo soy ese alguien.",
      "🔥 Recuerda: después de la tormenta siempre llega la calma.",
      "🌙 Eres mi refugio y mi alegría.",
      "💖 Sigue adelante, sé valiente y nunca te rindas.",
      "🌸 Tus sueños y metas son tan importantes como tu sonrisa.",
      "✨ Cada paso que das me hace admirarte más.",
      "💌 No importa la distancia, siempre estoy contigo.",
      "🌟 Lo que hoy parece difícil, mañana será tu logro.",
      "💖 Eres única, especial y muy amada.",
      "🌷 Tu esfuerzo vale y siempre será reconocido.",
      "🔥 Nunca estás sola, yo siempre estaré a tu lado.",
      "💫 Cree en ti misma, tus metas son alcanzables.",
      "🌹 Cada día contigo es un recordatorio de amor verdadero.",
      "✨ Tu corazón merece lo mejor, nunca lo olvides.",
      "💌 Confía en tu camino, yo siempre te acompaño.",
      "🌙 Sigue tus sueños, yo siempre estaré aquí alentándote.",
      "💖 Tu risa y tus logros iluminan mi vida.",
      "🌸 Nada puede detener a alguien tan valiente como tú.",
      "🔥 Nunca te rindas, el mundo necesita tu luz.",
      "💫 Cada meta que conquistas me llena de orgullo.",
      "🌹 Siempre seré tu apoyo incondicional.",
      "✨ Eres capaz de todo lo que te propongas.",
      "💌 Mi corazón celebra cada uno de tus éxitos.",
      "🌟 Nunca estás sola, somos equipo siempre.",
      "💖 Tu fuerza y amor me inspiran cada día.",
      "🌷 Lo imposible solo tarda un poco más en llegar.",
      "🔥 Nunca dejes de luchar por lo que amas.",
      "💫 Cada día es una oportunidad de crecer y amar.",
    
    
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
      <p className="saludo">{greeting}</p>
      <p className="frase">{fraseActual}</p>
      <div className="hearts"></div>
    </section>
  );
}
