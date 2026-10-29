document.addEventListener("DOMContentLoaded", function () {
  // Lista de datos, citas y curiosidades de física
  const contenidoAleatorio = [
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

  // Buscar el contenedor en la página
  const contenedor = document.getElementById("random-fact-box");

  if (contenedor) {
    // Seleccionar un elemento al azar
    const item = contenidoAleatorio[Math.floor(Math.random() * contenidoAleatorio.length)];

    // Construir la imagen si existe
    const htmlImagen = item.imagen 
      ? `<img src="${item.imagen}" alt="Imagen" style="width: 70px; height: 70px; object-fit: cover; border-radius: 50%; float: right; margin-left: 12px; border: 2px solid #e0e0e0;">`
      : "";

    // Insertar el bloque estilizado
    contenedor.innerHTML = `
      <div class="admonition ${item.tipo}">
        <p class="admonition-title">${item.titulo}</p>
        <div style="overflow: hidden; padding: 4px 0;">
          ${htmlImagen}
          <p style="margin: 0; font-style: italic;">${item.texto}</p>
        </div>
      </div>
    `;
  }
});
