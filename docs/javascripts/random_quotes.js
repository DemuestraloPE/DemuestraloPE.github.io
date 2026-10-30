function renderRandomQuote() {
  // Citas y curiosidades de matemáticas, física y astronomía
  const contenidoAleatorio = [
    // --- CITAS REALES VERIFICADAS ---
    {
      titulo: "Isaac Newton",
      texto: "Si he logrado ver más lejos, ha sido porque me he subido a hombros de gigantes.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
      tipo: "quote"
    },
    {
      titulo: "Galileo Galilei",
      texto: "Las matemáticas son el alfabeto con el cual Dios ha escrito el universo.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
      tipo: "quote"
    },
    {
      titulo: "James Clerk Maxwell",
      texto: "El verdadero trabajo de la ciencia no es reducir las cosas a leyes mecánicas, sino descubrir la armonía de la naturaleza.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/James_Clerk_Maxwell_big.jpg",
      tipo: "quote"
    },
    {
      titulo: "Johannes Kepler",
      texto: "Medí los cielos, ahora mido las sombras. La mente estaba en el cielo, el cuerpo descansa en la tierra.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Portrait_Confused_With_Johannes_Kepler_1610.jpg",
      tipo: "quote"
    },
    {
      titulo: "Niels Bohr",
      texto: "Todo lo que llamamos real está hecho de cosas que no pueden considerarse reales.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg",
      tipo: "quote"
    },
    {
      titulo: "Carl Sagan",
      texto: "En algún lugar, algo increíble está esperando ser descubierto.",
      imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Astronomer_Carl_Sagan_in_1987%2C_crop.jpg",
      tipo: "quote"
    },
    {
      titulo: "Richard Feynman",
      texto: "Si crees que entiendes la mecánica cuántica, es que no entiendes la mecánica cuántica.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Richard_Feynman_1959.jpg",
      tipo: "quote"
    },
    {
      titulo: "Albert Einstein",
      texto: "La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación abarca todo el mundo.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      tipo: "quote"
    },
    {
      titulo: "Marie Curie",
      texto: "Nada en la vida debe ser temido, solo debe ser comprendido. Ahora es el momento de comprender más, para que podamos temer menos.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
      tipo: "tip"
    },
    {
      titulo: "Paul Dirac",
      texto: "En la ciencia uno intenta decir a la gente, de una forma que todos puedan entender, algo que nadie sabía antes. En la poesía, es exactamente lo contrario.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Paul_Dirac%2C_1933.jpg/220px-Paul_Dirac%2C_1933.jpg",
      tipo: "quote"
    },
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
      texto: "Los orbitales atómicos describen distribuciones de probabilidad para encontrar un electrón; no son trayectorias planetarias alrededor del núcleo.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Números primos",
      texto: "Hay infinitos números primos. La demostración clásica de Euclides muestra que cualquier lista finita de primos puede ampliarse con un argumento de contradicción.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "El número π",
      texto: "π es irracional: su desarrollo decimal no termina ni se repite periódicamente. Además, es trascendental, por lo que no es raíz de ningún polinomio no nulo con coeficientes enteros.",
      imagen: "",
      tipo: "tip"
    },
    {
      titulo: "Los puentes de Königsberg",
      texto: "El problema de cruzar una vez cada uno de siete puentes inspiró a Euler a estudiar recorridos en grafos, una de las ideas fundacionales de la teoría de grafos.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Identidad de Euler",
      texto: "La igualdad e^(iπ) + 1 = 0 conecta cinco constantes fundamentales: e, i, π, 1 y 0.",
      imagen: "",
      tipo: "tip"
    },
    {
      titulo: "La luz del Sol",
      texto: "La luz solar tarda alrededor de 8 minutos y 20 segundos en llegar a la Tierra; por eso vemos el Sol como era unos minutos antes.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "GPS y relatividad",
      texto: "Los relojes de los satélites GPS requieren correcciones relativistas: la velocidad orbital y la gravedad distinta hacen que no transcurran al mismo ritmo que los relojes en la superficie.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "El fondo cósmico de microondas",
      texto: "El universo está lleno de una radiación fósil liberada cuando tenía unos 380 000 años; hoy se observa enfriada hasta cerca de 2,7 kelvin.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "La Luna se aleja",
      texto: "Mediciones con reflectores láser dejados en la Luna muestran que su distancia media a la Tierra aumenta unos 3,8 centímetros por año.",
      imagen: "",
      tipo: "tip"
    },
    {
      titulo: "El sonido necesita un medio",
      texto: "El sonido es una onda mecánica: se propaga mediante vibraciones de un medio material, así que no puede viajar por el vacío del espacio.",
      imagen: "",
      tipo: "info"
    },
    {
      titulo: "Espectro electromagnético",
      texto: "La luz visible es solo una pequeña franja del espectro electromagnético, que también incluye ondas de radio, microondas, infrarrojo, ultravioleta, rayos X y rayos gamma.",
      imagen: "",
      tipo: "info"
    }
  ];

  // 📌 1. SELECCIÓN ALEATORIA
  const item = contenidoAleatorio[Math.floor(Math.random() * contenidoAleatorio.length)];

  // 2. Inyectar en la Barra Lateral Derecha (Sidebar)
  const contenedorSidebar = document.querySelector(
    ".md-sidebar--secondary .sidebar-random-fact"
  );
  if (contenedorSidebar) {
    contenedorSidebar.innerHTML = `
      <div class="admonition ${item.tipo}" style="margin: 0; font-size: 0.78rem;">
        <p class="admonition-title" style="font-size: 0.82rem;">💡 ${item.titulo}</p>
        <div style="padding: 2px 0;">
          ${item.imagen ? `<img class="random-quote-image" src="${item.imagen}" alt="Retrato de ${item.titulo}" loading="lazy" onerror="this.remove()">` : ''}
          <p class="random-quote-text" style="margin: 0; font-style: italic;">"${item.texto}"</p>
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
          ${item.imagen ? `<img class="random-quote-image" src="${item.imagen}" alt="Retrato de ${item.titulo}" loading="lazy" onerror="this.remove()">` : ''}
          <p class="random-quote-text" style="margin: 0; font-style: italic;">"${item.texto}"</p>
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
