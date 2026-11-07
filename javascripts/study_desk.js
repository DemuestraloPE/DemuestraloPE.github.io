(() => {
  const storageKey = "demuestralope.study-desk.v1";
  const cards = [];
  let pendingSelection = "";
  let returnFocus = null;

  const readCards = () => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
      if (!Array.isArray(saved)) {
        throw new Error("El formato guardado no es una lista.");
      }

      return saved.filter((card) => {
        if (
          !card ||
          typeof card.id !== "string" ||
          typeof card.title !== "string" ||
          typeof card.href !== "string" ||
          typeof card.text !== "string" ||
          (card.kind !== "page" && card.kind !== "selection")
        ) {
          return false;
        }

        try {
          return new URL(card.href, window.location.href).origin === window.location.origin;
        } catch {
          return false;
        }
      });
    } catch (error) {
      console.error("No se pudo leer la mesa de estudio.", error);
      setStatus("No se pudieron leer las fichas guardadas en este navegador.");
      return [];
    }
  };

  const writeCards = () => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(cards));
      return true;
    } catch (error) {
      console.error("No se pudo guardar la mesa de estudio.", error);
      status.textContent =
        "No se pudo guardar. Revisa el espacio disponible del navegador.";
      return false;
    }
  };

  const titleForPage = () =>
    document.querySelector(".md-content__inner h1")?.textContent.trim() ||
    document.title;

  const makeCard = (kind, text = "") => ({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    kind,
    title: titleForPage(),
    href: window.location.href,
    text,
    savedAt: new Date().toISOString(),
  });

  const setStatus = (message) => {
    status.textContent = message;
  };

  const save = (card) => {
    cards.unshift(card);
    if (!writeCards()) {
      cards.shift();
      return;
    }
    renderCards();
    setStatus(
      card.kind === "page"
        ? "Página guardada en esta mesa."
        : "Fragmento guardado en esta mesa."
    );
  };

  const createAction = (label, action, className = "") => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `study-desk__action ${className}`.trim();
    button.textContent = label;
    button.addEventListener("click", action);
    return button;
  };

  const renderCards = () => {
    list.replaceChildren();

    if (cards.length === 0) {
      const empty = document.createElement("p");
      empty.className = "study-desk__empty";
      empty.textContent =
        "Guarda una página completa o selecciona una idea importante para tenerla a mano mientras estudias.";
      list.append(empty);
      return;
    }

    cards.forEach((card) => {
      const article = document.createElement("article");
      article.className = "study-desk__card";

      const heading = document.createElement("div");
      heading.className = "study-desk__card-heading";

      const source = document.createElement("a");
      source.className = "study-desk__source";
      source.href = card.href;
      source.textContent = card.title;
      source.title = "Abrir esta página";
      heading.append(source);

      const actions = document.createElement("div");
      actions.className = "study-desk__card-actions";
      if (card.kind === "selection") {
        actions.append(
          createAction("Copiar", async () => {
            try {
              await navigator.clipboard.writeText(card.text);
              setStatus("Fragmento copiado.");
            } catch (error) {
              console.error("No se pudo copiar el fragmento.", error);
              setStatus("No se pudo copiar; selecciona el texto y cópialo.");
            }
          })
        );
      }
      actions.append(
        createAction("Quitar", () => {
          const index = cards.findIndex((item) => item.id === card.id);
          if (index < 0) return;
          const [removed] = cards.splice(index, 1);
          if (!writeCards()) {
            cards.splice(index, 0, removed);
            return;
          }
          renderCards();
          setStatus("Ficha quitada de la mesa.");
        }, "study-desk__action--quiet")
      );
      heading.append(actions);
      article.append(heading);

      if (card.kind === "selection") {
        const excerpt = document.createElement("blockquote");
        excerpt.className = "study-desk__excerpt";
        excerpt.textContent = card.text;
        article.append(excerpt);
      } else {
        const note = document.createElement("p");
        note.className = "study-desk__page-note";
        note.textContent = "Página guardada";
        article.append(note);
      }

      list.append(article);
    });
  };

  const button = document.createElement("button");
  button.type = "button";
  button.className = "study-desk__toggle";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "study-desk-panel");
  button.textContent = "Mi mesa";

  const panel = document.createElement("section");
  panel.id = "study-desk-panel";
  panel.className = "study-desk";
  panel.hidden = true;
  panel.setAttribute("aria-label", "Mesa de estudio");

  const header = document.createElement("header");
  header.className = "study-desk__header";
  const title = document.createElement("h2");
  title.textContent = "Mesa de estudio";
  const closeButton = createAction("Cerrar", () => setOpen(false));
  closeButton.setAttribute("aria-label", "Cerrar la mesa de estudio");
  header.append(title, closeButton);

  const description = document.createElement("p");
  description.className = "study-desk__description";
  description.textContent =
    "Tus fichas se guardan solo en este navegador. Las selecciones se conservan con el enlace de origen.";

  const controls = document.createElement("div");
  controls.className = "study-desk__controls";
  const saveSelectionButton = createAction("Guardar selección");
  saveSelectionButton.disabled = true;
  saveSelectionButton.addEventListener("click", () => {
    if (!pendingSelection) return;
    save(makeCard("selection", pendingSelection));
  });
  controls.append(
    saveSelectionButton,
    createAction("Guardar esta página", () => save(makeCard("page")))
  );

  const status = document.createElement("p");
  status.className = "study-desk__status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");

  const list = document.createElement("div");
  list.className = "study-desk__list";
  panel.append(header, description, controls, status, list);

  const setOpen = (open) => {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    if (open) {
      returnFocus = document.activeElement;
      closeButton.focus();
    } else if (returnFocus instanceof HTMLElement) {
      returnFocus.focus();
    }
  };

  button.addEventListener("click", () => setOpen(panel.hidden));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection()?.toString().trim() || "";
    const content = window.getSelection()?.anchorNode?.parentElement?.closest(
      ".md-content__inner"
    );
    if (selection && content) pendingSelection = selection;
    saveSelectionButton.disabled = !pendingSelection;
  });

  cards.push(...readCards());
  renderCards();
  document.body.append(button, panel);
})();
