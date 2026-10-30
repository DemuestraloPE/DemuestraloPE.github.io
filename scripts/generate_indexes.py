import os
from urllib.parse import quote
import mkdocs_gen_files

sections = {
    "matematica": ("📐 Matemáticas", "Catálogo automático de temas y teoremas en Matemáticas:"),
    "fisica": ("⚛️ Física", "Catálogo automático de temas y teoremas en Física:")
}

for folder, (title, description) in sections.items():
    docs_folder = os.path.join("docs", folder)
    if not os.path.exists(docs_folder):
        continue

    index_path = f"{folder}/temas.md"
    
    with mkdocs_gen_files.open(index_path, "w") as f:
        print(f"# {title}\n", file=f)
        print(f"{description}\n", file=f)
        print("---", file=f)
        print("| Subárea | Tema / Teorema | Enlace |", file=f)
        print("| :--- | :--- | :--- |", file=f)

        for root, dirs, files in os.walk(docs_folder):
            for file in sorted(files):
                if file.endswith(".md") and file != "index.md":
                    # Obtener la subcarpeta (ej. calculo-diferencial)
                    rel_dir = os.path.relpath(root, docs_folder)
                    subarea = rel_dir.replace("-", " ").title() if rel_dir != "." else "General"
                    
                    # Formatear el nombre del tema a partir del nombre del archivo
                    topic_name = os.path.splitext(file)[0].replace("-", " ").replace("_", " ").title()
                    
                    # Construir la ruta relativa
                    rel_path = os.path.relpath(os.path.join(root, file), docs_folder)
                    
                    encoded_path = quote(rel_path.replace(os.sep, "/"), safe="/()")
                    print(f"| **{subarea}** | {topic_name} | [{topic_name} :octicons-arrow-right-24:]({encoded_path}) |", file=f)
