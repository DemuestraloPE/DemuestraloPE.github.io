function renderRandomQuote() {
  // Lista de datos, citas y curiosidades de física
  const contenidoAleatorio = [
    // --- CITAS REALES VERIFICADAS ---
    {
      titulo: "Isaac Newton",
      texto: "Si he logrado ver más lejos, ha sido porque me he subido a hombros de gigantes.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",
      tipo: "quote"
    },
    {
      titulo: "Galileo Galilei",
      texto: "Las matemáticas son el alfabeto con el cual Dios ha escrito el universo.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
      tipo: "quote"
    },
    {
      titulo: "James Clerk Maxwell",
      texto: "El verdadero trabajo de la ciencia no es reducir las cosas a leyes mecánicas, sino descubrir la armonía de la naturaleza.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/James_Clerk_Maxwell.png/220px-James_Clerk_Maxwell.png",
      tipo: "quote"
    },
    {
      titulo: "Johannes Kepler",
      texto: "Medí los cielos, ahora mido las sombras. La mente estaba en el cielo, el cuerpo descansa en la tierra.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Kepler_1610.jpg/220px-Johannes_Kepler_1610.jpg",
      tipo: "quote"
    },
    {
      titulo: "Niels Bohr",
      texto: "Todo lo que llamamos real está hecho de cosas que no pueden considerarse reales.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/220px-Niels_Bohr.jpg",
      tipo: "quote"
    },
    {
      titulo: "Carl Sagan",
      texto: "En algún lugar, algo increíble está esperando ser descubierto.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Carl_Sagan_Planetary_Society.JPG/220px-Carl_Sagan_Planetary_Society.JPG",
      tipo: "quote"
    },
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
    ,
    {
      titulo: "Paul Dirac",
      texto: "En la ciencia uno intenta decir a la gente, de una forma que todos puedan entender, algo que nadie sabía antes. En la poesía, es exactamente lo contrario.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/50/Paul_Dirac%2C_1933.jpg",
      tipo: "quote"
    }
    // --- DATOS CURIOSOS Y HECHOS HISTÓRICOS COMPROBADOS ---
    {
      titulo: "Gravedad Clásica",
      texto: "En el vacío, una pluma y una bola de cañón caen a la misma velocidad. Galileo lo demostró teóricamente y David Scott lo probó en la Luna en 1971.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Mecánica Celeste",
      texto: "El planeta Neptuno fue descubierto mediante cálculo matemático antes de ser visto con un telescopio, gracias a las perturbaciones en la órbita de Urano.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Termodinámica",
      texto: "El Cero Absoluto (0 Kelvin o -273.15 °C) es el límite donde las partículas tienen la menor energía cinética posible, pero la física cuántica impide que se detengan por completo.",
      imagen: "",
      tipo: "tip"
    },
    {
      titulo: "Óptica e Interferometría",
      texto: "En 1801, Thomas Young realizó el experimento de la doble rendija, demostrando por primera vez que la luz se comporta como una onda al generar patrones de interferencia.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Electromagnetismo",
      texto: "Michael Faraday no tenía formación matemática formal, pero sus experimentos intuitivos sobre campos magnéticos inspiraron a Maxwell a formular las ecuaciones fundamentales de la luz.",
      imagen: "",
      tipo: "tip"
    },
    {
      titulo: "Física de Partículas",
      texto: "Los muones producidos por rayos cósmicos en la alta atmósfera logran llegar a la superficie terrestre gracias a la dilatación del tiempo predicha por la Relatividad Especial.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Transiciones Cuánticas",
      texto: "Un electrón en un átomo no 'viaja' de un orbital a otro; salta instantáneamente entre niveles de energía dado que su trayectoria no esta definida, si lo pueden la posición o el momento lineal, pero nunca los dos a la vez.",
      imagen: "",
      tipo: "info"
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
