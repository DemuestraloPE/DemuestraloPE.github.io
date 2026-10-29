# ⚛️ [Nombre del Teorema / Tema Científico]

!!! info "Información del Documento y Estado"
    * **Autor principal:** [Nombre del Colaborador / Estudiante]
    * **Contacto:** [jscampanav@unitru.edu.pe](mailto:jscampanav@unitru.edu.pe) | [:fontawesome-brands-github: GitHub](https://github.com/tu_usuario)
    * **Área / Curso:** [Ej. Mecánica Cuántica II / Análisis Funcional]
    * **Última actualización:** 29 de Octubre, 2026
    * **Estado:** 🟢 Completo & Verificado en LaTeX

---

## 📌 Prerrequisitos y Badges
- :material-check-circle: Operadores Hermíticos y Espacios de Hilbert ($\mathcal{H}$)
- :material-check-circle: Ecuaciones Diferenciales en Derivadas Parciales (EDP)
- **Atajos útiles:** Presiona ++ctrl+p++ para imprimir / exportar en PDF o ++ctrl+f++ para buscar en la clase.

---

## 📋 Estructura General del Tema

??? abstract "💡 Resumen Ejecutivo (Clic para desplegar)"
    Escribe aquí una breve síntesis de 2 o 3 líneas con el resultado principal. Esta caja aparece colapsada por defecto para no saturar la lectura inicial del estudiante.

???+ note "📐 Definición Formal del Sistema"
    Esta caja aparece desplegada por defecto (`???+`). Ideal para presentar el enunciado oficial o axioma clave.

---

## 🧮 Desarrollo en Tres Niveles de Rigor

=== "1. Intuición y Visualización"
    ### Visión Cualitativa y Física
    Explicación geométrica o física intuitiva sin saturar con álgebra avanzada.
    
    $$\hat{H} \vert{}\psi\rangle = E \vert{}\psi\rangle$$
    
    > **Interpretación gráfica:**  
    > Visualización del pozo de potencial cuántico.
    > ![Esquema Intuitivo](../../assets/images/ejemplo_diagrama.png)

=== "2. Rigor Físico Universitario"
    ### Demostración Estándar
    Desarrollo paso a paso como se aborda en las asignaturas de la carrera.
    
    Partimos del operador Hamiltoniano de una partícula libre:
    
    $$-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$$
    
    **Paso 1:** Aplicando las condiciones de continuidad en la frontera $x = 0$ y $x = L$...

=== "3. Fundamentación Axiomática"
    ### Marco Formal (Análisis Real y Geometría)
    Demostración rigurosa avanzada mediante teoría de operadores en espacios de Banach o variedades.
    
    $$\int_{M} d\omega = \int_{\partial M} \omega$$

---

## 🧪 Espacio de Trabajo Interactiva: Hojas Sueltas (Arrastrables)

Mantén presionado el encabezado de cualquier tarjeta para moverla por la pantalla y comparar ecuaciones, datos o simulaciones en paralelo.

<!-- ESTILOS Y COMPORTAMIENTO MÓVIL Y DESKTOP -->
<style>
  .drag-workspace {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px 0;
  }
  .drag-card {
    touch-action: none;
    user-select: none;
    background: var(--md-sidebar-bg-color, #1e1e2e);
    border: 2px solid var(--md-accent-fg-color, #00e676);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    cursor: grab;
    z-index: 10;
    width: 100%; /* Ancho por defecto en Móviles */
    max-width: 450px;
  }
  .drag-card:active {
    cursor: grabbing;
    z-index: 100;
  }
  .drag-card-header {
    background: rgba(124, 77, 255, 0.15);
    margin: -15px -15px 12px -15px;
    padding: 10px 15px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid var(--md-accent-fg-color);
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Ajuste responsivo para PCs y Laptops */
  @media (min-width: 768px) {
    .drag-card {
      width: 420px;
    }
  }
</style>

<div class="drag-workspace">

  <!-- HOJA 1: TABLA DE DATOS / PROPIEDADES -->
  <div class="drag-card">
    <div class="drag-card-header">
      <span>📊 Hoja 1: Valores Propios</span>
      <span style="font-size: 0.75rem; opacity: 0.7;">🖐️ Arrástrame</span>
    </div>
    
    | Estado ($n$) | Energía ($E_n$) | Degeneración |
    | :---: | :---: | :---: |
    | 0 | $\frac{1}{2}\hbar\omega$ | 1 |
    | 1 | $\frac{3}{2}\hbar\omega$ | 1 |
    | 2 | $\frac{5}{2}\hbar\omega$ | 1 |
  </div>

  <!-- HOJA 2: SIMULACIÓN EN CÓDIGO -->
  <div class="drag-card">
    <div class="drag-card-header">
      <span>🐍 Hoja 2: Código de Simulación</span>
      <span style="font-size: 0.75rem; opacity: 0.7;">🖐️ Arrástrame</span>
    </div>

```python linenums="1"
import numpy as np

def energia_cuantica(n, hbar_omega=1.0):
    """Calcula la energía del oscilador armónico"""
    return (n + 0.5) * hbar_omega

niveles = [energia_cuantica(n) for n in range(3)]
print(f"Niveles de Energía: {niveles}")
