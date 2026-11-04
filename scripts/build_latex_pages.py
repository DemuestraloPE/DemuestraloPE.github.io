#!/usr/bin/env python3
"""Convert LaTeX sources referenced by lesson pages to embeddable HTML."""

import html
import os
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
SOURCE_ROOT = (DOCS / "clases_tex").resolve()
OUTPUT_ROOT = DOCS / "_latex_html"
START_MARKER = "<!-- LATEXML:START -->"
END_MARKER = "<!-- LATEXML:END -->"
INDEX_START_MARKER = "<!-- AUTO-INDEX:START -->"
INDEX_END_MARKER = "<!-- AUTO-INDEX:END -->"


def latex_source_from_frontmatter(markdown):
    text = markdown.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return None

    end = text.find("\n---", 4)
    if end < 0:
        raise ValueError(f"{markdown}: no se cerró el bloque YAML inicial.")

    frontmatter = text[4:end]
    match = re.search(
        r"""(?m)^latex_source:\s*(?:"([^"]*)"|'([^']*)'|([^#\s]+))\s*(?:#.*)?$""",
        frontmatter,
    )
    if match is None:
        return None
    return next(value for value in match.groups() if value is not None) or None


def title_from_markdown(markdown):
    text = markdown.read_text(encoding="utf-8")
    match = re.search(r"(?m)^#\s+(.+?)\s*#*\s*$", text)
    return match.group(1) if match else markdown.stem.replace("-", " ").title()


def ensure_source_is_in_class_directory(value, markdown):
    source = (SOURCE_ROOT / value).resolve()
    try:
        source.relative_to(SOURCE_ROOT)
    except ValueError as error:
        raise ValueError(
            f"{markdown}: latex_source debe apuntar dentro de docs/clases_tex/."
        ) from error
    if source.suffix.lower() != ".tex" or not source.is_file():
        raise FileNotFoundError(
            f"{markdown}: no se encontró el archivo LaTeX indicado: {source}"
        )
    return source


def generated_html_path(markdown):
    page_path = markdown.relative_to(DOCS).with_suffix("")
    return OUTPUT_ROOT / page_path / "index.html"


def embed_block(markdown, output_html):
    page_url_directory = markdown.with_suffix("")
    relative_url = os.path.relpath(output_html, page_url_directory).replace(os.sep, "/")
    relative_url = quote(relative_url, safe="/-_.~")
    title = html.escape(title_from_markdown(markdown), quote=True)
    return "\n".join(
        (
            START_MARKER,
            f"[Consultar la versión HTML de «{title}» convertida desde LaTeX]"
            f"({relative_url}){{ .md-button }}",
            END_MARKER,
        )
    )


def update_markdown_embed(markdown, block):
    update_managed_block(markdown, block, START_MARKER, END_MARKER)


def update_managed_block(markdown, block, start_marker, end_marker):
    text = markdown.read_text(encoding="utf-8")
    has_start = start_marker in text
    has_end = end_marker in text
    if has_start != has_end:
        raise ValueError(f"{markdown}: falta uno de los marcadores administrados.")

    if has_start:
        start = text.index(start_marker)
        end = text.index(end_marker, start) + len(end_marker)
        updated = text[:start] + block + text[end:]
    else:
        updated = text.rstrip() + "\n\n" + block + "\n"

    if updated != text:
        markdown.write_text(updated, encoding="utf-8")


def area_index_block(area_directory):
    rows = []
    for markdown in sorted(area_directory.rglob("*.md")):
        if markdown.name.lower() == "index.md":
            continue
        relative_path = markdown.relative_to(area_directory)
        subarea = relative_path.parent.as_posix()
        if subarea == ".":
            subarea = "General"
        else:
            subarea = subarea.replace("-", " ").title()
        topic = title_from_markdown(markdown)
        url = quote(relative_path.as_posix(), safe="/()!~-_")
        rows.append(f"| **{subarea}** | {topic} | [Abrir :octicons-arrow-right-24:]({url}) |")

    return "\n".join(
        (
            INDEX_START_MARKER,
            "| Subárea | Tema / clase | Enlace |",
            "| :--- | :--- | :--- |",
            *rows,
            INDEX_END_MARKER,
        )
    )


def update_area_indexes(root=DOCS):
    for area in ("matematica", "fisica"):
        area_directory = Path(root) / area
        index_page = area_directory / "index.md"
        if index_page.is_file():
            update_managed_block(
                index_page,
                area_index_block(area_directory),
                INDEX_START_MARKER,
                INDEX_END_MARKER,
            )


def convert_page(markdown, converter="latexmlc"):
    source_value = latex_source_from_frontmatter(markdown)
    if source_value is None:
        return False

    source = ensure_source_is_in_class_directory(source_value, markdown)
    output_html = generated_html_path(markdown)
    output_html.parent.mkdir(parents=True, exist_ok=True)
    command = [
        converter,
        "--format=html5",
        "--mathtex",
        f"--destination={output_html}",
        source.name,
    ]
    if any(source.parent.rglob("*.bib")):
        command.insert(1, "--bibtex")
    print(f"Convirtiendo {source.relative_to(ROOT)} -> {output_html.relative_to(DOCS)}")
    subprocess.run(command, cwd=source.parent, check=True)
    update_markdown_embed(markdown, embed_block(markdown, output_html))
    return True


def build_all(root=DOCS, converter="latexmlc"):
    pages = sorted(
        path
        for path in Path(root).rglob("*.md")
        if OUTPUT_ROOT not in path.parents
    )
    converted = 0
    for markdown in pages:
        if convert_page(markdown, converter=converter):
            converted += 1
    update_area_indexes(root)
    if converted == 0:
        print("No hay páginas Markdown con el campo latex_source.")
    else:
        print(f"Clases LaTeX convertidas: {converted}")
    return converted


if __name__ == "__main__":
    try:
        build_all()
    except (OSError, ValueError, subprocess.CalledProcessError) as error:
        print(f"Error al generar páginas LaTeXML: {error}", file=sys.stderr)
        raise SystemExit(1)
