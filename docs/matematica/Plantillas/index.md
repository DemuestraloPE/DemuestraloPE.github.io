# Plantillas

Modelos reutilizables para preparar clases, temas, teoremas y demostraciones.
Adapta o elimina las secciones que no necesite cada contenido.

- [Tema o clase](PlantillaTema.md): estructura general para una unidad o subtema.
- [Teorema y demostración](PlantillaDemostracion.md): enunciado, hipótesis y prueba.

## Publicar una clase en LaTeX

1. Crea una carpeta en `docs/clases_tex/` y coloca allí el archivo `.tex` y sus
   imágenes o recursos locales.
2. Sube los cambios a `main`. El workflow compila un PDF en `docs/assets/pdf/`
   usando el nombre de la carpeta.
3. Para que la clase también aparezca como tema navegable, crea o edita una página
   Markdown en la subárea correspondiente y enlaza allí el PDF.

La compilación del PDF ya está automatizada; por ahora, crear la página del tema y
enlazar el PDF sigue siendo un paso manual.
