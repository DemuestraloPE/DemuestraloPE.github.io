# Plantillas

Modelos reutilizables para preparar clases, temas, teoremas y demostraciones.
Adapta o elimina las secciones que no necesite cada contenido.

- [Tema o clase](PlantillaTema.md): estructura general para una unidad o subtema.
- [Teorema y demostración](PlantillaDemostracion.md): enunciado, hipótesis y prueba.
- [Página para una clase](PlantillaClaseLaTeX.md): estructura didáctica en Markdown,
  con una fuente LaTeX opcional guardada en el repositorio.

## Flujo para publicar una clase

1. Crea una carpeta para la clase dentro de `docs/clases_tex/`, con el archivo
   principal `.tex` y sus recursos. La carpeta sirve para conservar la fuente;
   no se convierte ni se publica automáticamente en el sitio.
2. Copia `PlantillaClaseLaTeX.md` a la carpeta del curso correspondiente bajo
   `docs/fisica/` o `docs/matematica/` y edita allí la presentación en Markdown.
   Escribe las ecuaciones con los delimitadores `$...$` o `$$...$$`.
3. Si quieres ofrecer el PDF de la clase, guárdalo bajo `docs/assets/pdf/` y
   enlázalo desde la página Markdown. Las imágenes que deban aparecer en el
   sitio también deben guardarse bajo `docs/` (por ejemplo,
   `docs/assets/images/`). Los recursos dentro de `docs/clases_tex/` son solo
   archivos fuente y no se publican.
4. GitHub Actions valida y despliega la página Markdown al combinar los cambios
   en `main`.

No hace falta editar archivos de configuración de navegación ni índices para
registrar la clase. La página Markdown aparece en la navegación automática y el
índice del área se actualiza durante la construcción del sitio.
