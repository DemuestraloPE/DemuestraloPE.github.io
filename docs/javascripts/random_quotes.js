document.addEventListener("DOMContentLoaded", function () {
  // Lista de datos, citas y curiosidades de física
  const citas = [
    {
      titulo: "💡 Cita del día — Richard Feynman",
      texto: '"Si crees que entiendes la mecánica cuántica, es que no entiendes la mecánica cuántica."',
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Richard_Feynman_1959.jpg/220px-Richard_Feynman_1959.jpg",
      tipo: "quote"
    },
    {
      titulo: "⚛️ Dato Curioso — Transiciones Cuánticas",
      texto: "Un electrón en un átomo no 'viaja' de un orbital a otro; salta instantáneamente entre niveles de energía sin pasar por el espacio intermedio.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "🌌 Cita del día — Albert Einstein",
      texto: '"La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación abarca todo el mundo."',
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
      tipo: "quote"
    },
    {
      titulo: "🧪 Hecho Histórico — Marie Curie",
      texto: "Marie Curie fue la primera persona en ganar dos Premios Nobel en distintas especialidades científicas: Física (1903) y Química (1911).",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
      tipo: "tip"
    },
    {
      titulo: "✨ Cita del día — Paul Dirac",
      texto: '"En la ciencia uno intenta decir a la gente, de una forma que todos puedan entender, algo que nadie sabía antes. En la poesía, es exactamente lo contrario."',
      imagen: "",
      tipo: "quote"
    }
  ];

  const contenedor = document.getElementById("sidebar-random-fact");

  if (contenedor) {
    const item = citas[Math.floor(Math.random() * citas.length)];
    contenedor.innerHTML = `
      <div class="admonition ${item.tipo}" style="margin: 0; font-size: 0.75rem;">
        <p class="admonition-title" style="font-size: 0.8rem;">💡 ${item.autor}</p>
        <p style="margin: 0; font-style: italic;">"${item.texto}"</p>
      </div>
    `;
  }
});
