# Plantillas

Modelos reutilizables para preparar clases, temas, teoremas y demostraciones.
Adapta o elimina las secciones que no necesite cada contenido.

- [Tema o clase](PlantillaTema.md): estructura general para una unidad o subtema.
- [Teorema y demostración](PlantillaDemostracion.md): enunciado, hipótesis y prueba.
- [Página para una clase en LaTeX](PlantillaClaseLaTeX.md): enlaza una fuente `.tex`
  a la sección del curso que se mostrará en el sitio.

## Flujo para publicar una clase en LaTeX

1. Crea una carpeta para la clase dentro de `docs/clases_tex/`, con el archivo
   principal `main.tex` (o cualquier nombre terminado en `.tex`). Añade allí
   las imágenes, archivos `.bib` y demás recursos de la clase.
2. Copia `PlantillaClaseLaTeX.md` a la carpeta del curso correspondiente bajo
   `docs/fisica/` o `docs/matematica/`. Cambia el título y el campo
   `latex_source`; su ruta es relativa a `docs/clases_tex/`.
3. Al abrir un pull request, GitHub Actions convierte cada página que declara
   `latex_source` con LaTeXML, valida el sitio y genera un artefacto descargable.
   Al combinar los cambios en `main`, se despliega la web.

No hace falta editar archivos de configuración de navegación ni índices para
registrar la clase. La página `.md` aparece en la navegación automática y el
catálogo se agrega a la tabla de `index.md` del área durante la construcción
del sitio. El archivo `.md` sirve para ubicar la clase en el curso, añadir una
descripción breve y enlazar su fuente; el cuerpo de la lección se mantiene en
LaTeX.

### Recursos, imágenes y estructura

- Los recursos no se suben automáticamente: añádelos al repositorio junto a la
  clase, por ejemplo `docs/clases_tex/mi-clase/images/figura.png`, y usa
  `\graphicspath{{images/}}` en el preámbulo si corresponde. LaTeXML incluirá
  las figuras procesadas en el HTML publicado. Si la clase usa una bibliografía
  BibTeX, añade también sus archivos `.bib` dentro de esa carpeta.
- `\section`, `\subsection` y `\subsubsection` se convierten en encabezados
  HTML; los entornos y comandos LaTeX reconocidos por LaTeXML se convierten a
  sus equivalentes web. No se crean automáticamente elementos propios de
  Markdown, como admoniciones o listas de tareas.
- El sitio publica HTML, no PDF, como salida predeterminada. Se excluyen las
  fuentes de `docs/clases_tex/` de los archivos publicados; siguen versionadas
  en el repositorio. LaTeXML no implementa todos los paquetes de TeX, así que
  las clases nuevas deben comprobarse en el resultado del workflow.

Para probar la conversión localmente, instala LaTeXML y ejecuta:

```bash
python scripts/build_latex_pages.py
```
