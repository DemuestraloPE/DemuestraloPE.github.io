function renderRandomQuote() {
  // Lista de datos, citas y curiosidades de física
  const contenidoAleatorio = [
    {
      titulo: "Richard Feynman",
      texto: "Si crees que entiendes la mecánica cuántica, es que no entiendes la mecánica cuántica.",
      imagen: "https://upload.wikimedia.org/wikipedia/en/4/42/Richard_Feynman_Nobel.jpg",
      tipo: "quote"
    },
    {
      titulo: "Albert Einstein",
      texto: "La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación abarca todo el mundo.",
      imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/250px-Albert_Einstein_%28Nobel%29.png",
      tipo: "quote"
    },
    {
      titulo: "Marie Curie",
      texto: "Nada en la vida debe ser temido, solo debe ser comprendido. Ahora es el momento de comprender más, para que podamos temer menos.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg",
      tipo: "tip"
    },
    {
      titulo: "Transiciones Cuánticas",
      texto: "Un electrón en un átomo no 'viaja' de un orbital a otro; salta instantáneamente entre niveles de energía dado que su trayectoria no esta definida, si lo pueden la posición o el momento lineal, pero nunca los dos a la vez.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Paul Dirac",
      texto: "En la ciencia uno intenta decir a la gente, de una forma que todos puedan entender, algo que nadie sabía antes. En la poesía, es exactamente lo contrario.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/50/Paul_Dirac%2C_1933.jpg",
      tipo: "quote"
    }
  ];

  // 📌 1. SELECCIÓN ALEATORIA DE UN ELEMENTO (AQUÍ ESTABA EL ERROR PRINCIPAL):
  const item = contenidoAleatorio[Math.floor(Math.random() * contenidoAleatorio.length)];

  // 2. Inyectar en la Barra Lateral Derecha (Sidebar)
  const contenedorSidebar = document.getElementById("sidebar-random-fact");
  if (contenedorSidebar) {
    contenedorSidebar.innerHTML = `
      <div class="admonition ${item.tipo}" style="margin: 0; font-size: 0.78rem;">
        <p class="admonition-title" style="font-size: 0.82rem;">💡 ${item.titulo}</p>
        <div style="padding: 2px 0;">
          ${item.imagen ? `<img src="${item.imagen}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 50%; float: right; margin-left: 8px;">` : ''}
          <p style="margin: 0; font-style: italic;">"${item.texto}"</p>
        </div>
      </div>
    `;
  }

  // 3. Inyectar en el cuerpo del Markdown (si existe <div id="random-fact-box"></div>)
  const contenedorCuerpo = document.getElementById("random-fact-box");
  if (contenedorCuerpo) {
    contenedorCuerpo.innerHTML = `
      <div class="admonition ${item.tipo}">
        <p class="admonition-title">💡 ${item.titulo}</p>
        <div style="overflow: hidden; padding: 4px 0;">
          ${item.imagen ? `<img src="${item.imagen}" style="width: 65px; height: 65px; object-fit: cover; border-radius: 50%; float: right; margin-left: 12px; border: 2px solid var(--md-accent-fg-color);">` : ''}
          <p style="margin: 0; font-style: italic;">"${item.texto}"</p>
        </div>
      </div>
    `;
  }
}

// 📌 4. SUSCRIPCIÓN COMPATIBLE CON NAVEGACIÓN INSTANTÁNEA DE MKDOCS MATERIAL:
if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    renderRandomQuote();
  });
} else {
  document.addEventListener("DOMContentLoaded", renderRandomQuote);
}
