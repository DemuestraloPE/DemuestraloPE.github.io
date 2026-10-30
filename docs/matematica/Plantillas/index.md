# Plantillas

Modelos reutilizables para preparar clases, temas, teoremas y demostraciones.
Adapta o elimina las secciones que no necesite cada contenido.

- [Tema o clase](PlantillaTema.md): estructura general para una unidad o subtema.
- [Teorema y demostración](PlantillaDemostracion.md): enunciado, hipótesis y prueba.

## Publicar una clase en LaTeX

Desde la raíz del repositorio, ejecuta:

```bash
python scripts/new_topic.py matematica "Calculo de Variable Real" "Regla de la cadena"
```

Usa `fisica` para Física y el nombre exacto de una subárea que ya exista. El comando
crea la página Markdown a partir de esta plantilla, prepara `docs/clases_tex/<slug>/main.tex`,
agrega el tema a la navegación de la subárea y deja enlazado el PDF que producirá
el workflow. Puedes cambiar el nombre de `main.tex` o añadir imágenes y otros
recursos dentro de esa carpeta.

Después, revisa y completa la página y el archivo LaTeX, y sube los cambios a
GitHub. Al combinar los cambios en `main`, el workflow compila los PDF y publica
el sitio. No hace falta editar a mano el índice `.pages` ni escribir el enlace
del PDF.

Para consultar los argumentos disponibles:

```bash
python scripts/new_topic.py --help
```
