#!/usr/bin/env python3
"""Refresh the automatic lesson catalogs for each subject area."""

import re
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
START_MARKER = "<!-- AUTO-INDEX:START -->"
END_MARKER = "<!-- AUTO-INDEX:END -->"


def title_from_markdown(markdown):
    text = markdown.read_text(encoding="utf-8")
    match = re.search(r"(?m)^#\s+(.+?)\s*#*\s*$", text)
    return match.group(1) if match else markdown.stem.replace("-", " ").title()


def area_index_block(area_directory):
    rows = []
    for markdown in sorted(area_directory.rglob("*.md")):
        if markdown.name.lower() == "index.md":
            continue
        relative_path = markdown.relative_to(area_directory)
        subarea = relative_path.parent.as_posix()
        subarea = "General" if subarea == "." else subarea.replace("-", " ").title()
        topic = title_from_markdown(markdown)
        url = quote(relative_path.as_posix(), safe="/()!~-_")
        rows.append(f"| **{subarea}** | {topic} | [Abrir :octicons-arrow-right-24:]({url}) |")

    return "\n".join(
        (
            START_MARKER,
            "| Subárea | Tema / clase | Enlace |",
            "| :--- | :--- | :--- |",
            *rows,
            END_MARKER,
        )
    )


def update_area_indexes(root=DOCS):
    for area in ("matematica", "fisica"):
        area_directory = Path(root) / area
        index_page = area_directory / "index.md"
        if not index_page.is_file():
            continue

        text = index_page.read_text(encoding="utf-8")
        start = text.find(START_MARKER)
        end = text.find(END_MARKER, start + len(START_MARKER))
        if start < 0 or end < 0:
            raise ValueError(f"{index_page}: faltan los marcadores del índice automático.")

        end += len(END_MARKER)
        updated = text[:start] + area_index_block(area_directory) + text[end:]
        if updated != text:
            index_page.write_text(updated, encoding="utf-8")


if __name__ == "__main__":
    try:
        update_area_indexes()
    except (OSError, ValueError) as error:
        print(f"Error al actualizar los índices: {error}", file=sys.stderr)
        raise SystemExit(1)
