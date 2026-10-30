#!/usr/bin/env python3
"""Create a topic page and matching LaTeX workspace."""

import argparse
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import quote

PROJECT_ROOT = Path(__file__).resolve().parents[1]
LATEX_TEMPLATE = r"""\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx}
\usepackage{hyperref}

\title{TITULO}
\author{AUTORIA}
\date{\today}

\begin{document}
\maketitle

\section{Introducción}
Presenta el problema, la motivación y los objetivos de esta clase.

\section{Desarrollo}
Escribe aquí la explicación y las demostraciones.

\section{Ejemplos}
Incluye ejemplos resueltos paso a paso.

\section{Conclusiones}
Resume las ideas principales y señala preguntas abiertas.

\end{document}
"""


def slugify(value):
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii").lower()
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_value).strip("-")
    if not slug:
        raise ValueError("El título debe contener letras o números.")
    return slug


def create_topic(root, subject, category, title, slug=None):
    root = Path(root)
    if subject not in {"matematica", "fisica"}:
        raise ValueError("El área debe ser 'matematica' o 'fisica'.")
    if category in {"", ".", ".."} or Path(category).name != category:
        raise ValueError("La subárea debe ser el nombre de una carpeta existente.")

    subject_dir = root / "docs" / subject
    category_dir = subject_dir / category
    nav_file = category_dir / ".pages"
    if not category_dir.is_dir() or not nav_file.is_file():
        raise ValueError(
            "La subárea debe existir y contener un archivo .pages de navegación."
        )

    slug = slugify(slug or title)
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
        raise ValueError("El slug solo puede contener letras ASCII, números y guiones.")

    page_path = category_dir / f"{slug}.md"
    latex_dir = root / "docs" / "clases_tex" / slug
    nav_text = nav_file.read_text(encoding="utf-8")
    nav_entry = f'  - "{slug}.md"'
    if page_path.exists() or latex_dir.exists():
        raise FileExistsError(f"Ya existe una página o clase con el slug '{slug}'.")
    if nav_entry in nav_text or f"  - {slug}.md" in nav_text:
        raise FileExistsError(f"El tema '{slug}' ya está registrado en la navegación.")
    if not re.search(r"(?m)^nav:[ \t]*$", nav_text):
        raise ValueError(f"No se encontró una sección 'nav:' válida en {nav_file}.")

    template_path = root / "docs" / "matematica" / "Plantillas" / "PlantillaTema.md"
    template = template_path.read_text(encoding="utf-8")
    relative_pdf = Path("..") / ".." / "assets" / "pdf" / f"{slug}.pdf"
    pdf_link = quote(relative_pdf.as_posix(), safe="/()")
    page = template.replace("# [Nombre del tema]", f"# {title}")
    page = (
        page.rstrip()
        + "\n\n## Material descargable\n\n"
        + f"[Descargar la clase en PDF]({pdf_link}) (se genera al publicar).\n"
    )

    nav_match = re.search(r"(?m)^nav:[ \t]*$", nav_text)
    if nav_match is None:
        raise ValueError(f"No se encontró una sección 'nav:' válida en {nav_file}.")
    nav_tail = nav_text[nav_match.end() :]
    index_match = re.search(
        r"(?m)^[ \t]*-[ \t]*['\"]?index\.md['\"]?[ \t]*$",
        nav_tail,
    )
    if index_match:
        insert_at = nav_match.end() + index_match.end()
        nav_text = nav_text[:insert_at] + "\n" + nav_entry + nav_text[insert_at:]
    else:
        nav_text = nav_text[: nav_match.end()] + "\n" + nav_entry + nav_text[nav_match.end() :]

    page_path.parent.mkdir(parents=True, exist_ok=True)
    latex_dir.mkdir(parents=True, exist_ok=False)
    page_path.write_text(page, encoding="utf-8")
    (latex_dir / "main.tex").write_text(
        LATEX_TEMPLATE.replace("TITULO", title).replace("AUTORIA", "Tu nombre"),
        encoding="utf-8",
    )
    nav_file.write_text(nav_text, encoding="utf-8")
    return page_path, latex_dir / "main.tex"


def main():
    parser = argparse.ArgumentParser(
        description="Crea una página de tema y su proyecto LaTeX."
    )
    parser.add_argument("area", choices=("matematica", "fisica"))
    parser.add_argument("subarea", help="Nombre exacto de la carpeta de la subárea")
    parser.add_argument("titulo", help="Título del nuevo tema")
    parser.add_argument("--slug", help="Identificador URL; por defecto se deriva del título")
    args = parser.parse_args()

    try:
        page_path, tex_path = create_topic(
            PROJECT_ROOT, args.area, args.subarea, args.titulo, args.slug
        )
    except (FileExistsError, ValueError, OSError) as error:
        print(f"Error: {error}", file=sys.stderr)
        return 1

    print(f"Página creada: {page_path.relative_to(PROJECT_ROOT)}")
    print(f"Clase LaTeX creada: {tex_path.relative_to(PROJECT_ROOT)}")
    print("Completa ambos archivos y publica los cambios en main para generar el PDF.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
