# Oscilador Armónico Cuántico

!!! info "Información del documento"
    - **Área:** Física, Mecánica Cuantica
    - **Autoría:** Campaña Vergara Jackson
    - **Última actualización:** 31/10/26
    - **Estado:** [✏ Borrador]

## Prerrequisitos

- [Añade aquí los conceptos previos y enlaza las páginas existentes.]

## Resumen
Uno de los sistemas físicos de mayor interés teórico, el oscilador armónico, cuya energia potencial es $V=\frac{1}{2}k x^2$. Para simplificar el tratamiento nos restringimos al caso unidimensional, que carece de degeneración (el oscilador armónico en más de una dimensión es un problema degenerado que, para su tratamiento cabal, requiere en la teoría clásica de la teoría del momento angular, la que habremos de desarrollar mas adelante). 

El oscilador armónico suministra importante información acerca de las vibraciones atómicas en las moléculas y los sólidos dado que aparece cuando potenciales más o menos complicados se aproximan en la región de un mínimo con curvas parabólicas. Por lo tanto, se trata esencialmente de la teoría de oscilaciones poco energéticas en torno a un mínimo de potencial, situación que se da con frecuencia con átomos, moléculas, etc. Además, el empleo frecuente del análisis de Fourier para estudiar sistemas complejos en términos de osciladores elementales hace del oscilador armónico uno de los problemas más importantes de la física teórica, sin considerar su interés metodológico debido al hecho de poseer solución exacta bajo la ecuación de schrodinger:
\[ \frac{-\hbar^2}{2m} \frac{d^2}{dx^2} \Psi + \frac{1}{2} \Psi = E \Psi\]

![Aplicación del Oscilador Cuántico en un Potencial Irregular](../../assets/images/Class_OsciCuantico_PotMin.png)
Imagen hecha con **figurelabs**

??? Conceptos fundamentales
    A primera vista, la elección de un potencial proporcional a la posición al cuadrado, $V(x) = \frac{1}{2}m\omega^2 x^2$, evoca directamente al resorte clásico de la ley de Hooke. Sin embargo, su relevancia en física cuántica vamucho más allá de un simple resorte. En la naturaleza, cualquier sistema cuántico cerca de un punto de equilibrio estable (como los átomos vibrando dentro de una molécula o en una red cristalina) puede aproximarse mediante un potencial parabólico al truncar su expansión en serie de Taylor a segundo orden.

Este modelo surge de preguntarse que pasa si la energía potencial es parabólica, y dense cuenta de lo interesante del asunto, dado que el operador energía cinética $\hat{T}=-(\hbar/2m)\nabla^2$ en mecánica clásica es estrictamente positivo 

---

### Definiciones

Ecuación de Schrodinger: $\frac{-\hbar^2}{2m} \nabla^2 \Psi + V(\vec{r}) \Psi = E \Psi$

---

# Solución del Oscilador Armónico Cuántico

El Hamiltoniano del oscilador armónico en una dimensión (1D) está dado por:

$$
\left( -\frac{\hbar^2}{2m} \frac{d^2}{dx^2} + \frac{1}{2}m\omega^2 x^2 \right) \psi(x) = E \psi(x)
$$

Reordenando para aislar la derivada de mayor orden:

$$
\frac{d^2\psi(x)}{dx^2} - \frac{m^2\omega^2}{\hbar^2} x^2 \psi(x) + \frac{2mE}{\hbar^2} \psi(x) = 0
$$

Definimos las constantes físicas estándar con dimensiones apropiadas:

* $a^2 = \frac{m\omega}{\hbar} \implies a^4 = \frac{m^2\omega^2}{\hbar^2}$
* $k^2 = \frac{2mE}{\hbar^2}$

Obtenemos la ecuación diferencial reestructurada:

$$
\mathbf{\frac{d^2\psi(x)}{dx^2} - a^4 x^2 \psi(x) + k^2 \psi(x) = 0}
$$

---

### Cambio de Variable Hacia la Ecuación Confluente

Aplicando la transformación $y = a^2 x^2$:

$$
\frac{dy}{dx} = 2a^2 x = 2a y^{1/2} \implies \frac{df}{dx} = \frac{dy}{dx}\frac{df}{dy} = 2a y^{1/2} \frac{df}{dy}
$$

Calculando la segunda derivada:

$$
\frac{d^2 f}{dx^2} = 2a y^{1/2} \frac{d}{dy}\left(2a y^{1/2} \frac{df}{dy}\right) = 4a^2 y \frac{d^2 f}{dy^2} + 2a^2 \frac{df}{dy}
$$

Sustituyendo en la ecuación diferencial principal:

$$
\left( 4a^2 y \frac{d^2\psi}{dy^2} + 2a^2 \frac{d\psi}{dy} \right) - a^4 \left(\frac{y}{a^2}\right)\psi + k^2 \psi = 0
$$

Dividiendo toda la ecuación entre $4a^2$:

$$
y \frac{d^2\psi}{dy^2} + \frac{1}{2} \frac{d\psi}{dy} + \left( \frac{k^2}{4a^2} - \frac{y}{4} \right) \psi(y) = 0
$$

Definimos el parámetro adimensional de energía $\mathcal{E}$:

$$
\mathcal{E} \equiv \frac{k^2}{2a^2} = \frac{\frac{2mE}{\hbar^2}}{2\frac{m\omega}{\hbar}} = \mathbf{\frac{E}{\hbar\omega}}
$$

Sustituyendo $\frac{k^2}{4a^2} = \frac{\mathcal{E}}{2}$, obtenemos la ecuación intermedia:

$$
\mathbf{y \frac{d^2\psi(y)}{dy^2} + \frac{1}{2} \frac{d\psi(y)}{dy} + \left( \frac{\mathcal{E}}{2} - \frac{y}{4} \right) \psi(y) = 0} \quad (*)
$$

---

### Comportamiento Asintótico $e^{-y/2}$ (Ecuación de Kummer)

Para grandes valores de $y$, la ecuación dominante toma la forma:

$$
\lim_{y \to \infty} \left[ \frac{d^2\psi(y)}{dy^2} + \frac{1}{2y} \frac{d\psi(y)}{dy} + \left( \frac{\mathcal{E}}{2y} - \frac{1}{4} \right) \psi(y) \right] = 0 \implies \frac{d^2\psi(y)}{dy^2} - \frac{1}{4} \psi(y) = 0
$$

Esto sugiere una solución asintótica de la forma $\psi(y) = e^{-y/2} w(y)$ para valores grandes de $y$, recordando que $y = x^2 \geq 0$. Con esta propuesta, acoplamos dicho comportamiento asintótico a una función propuesta $w(y)$ que dictará el comportamiento de la solución en regiones cercanas al origen. 

Calculamos las derivadas de $\psi(y) = e^{-y/2} w(y)$:

$$
\psi' = e^{-y/2} \left( w' - \frac{1}{2}w \right) \qquad \psi'' = e^{-y/2} \left( w'' - w' + \frac{1}{4}w \right)
$$

Sustituyendo en la ecuación intermedia $(*)$ y simplificando el factor común $e^{-y/2}$:

$$
y \left( w'' - w' + \frac{1}{4}w \right) + \frac{1}{2} \left( w' - \frac{1}{2}w \right) + \left( \frac{\mathcal{E}}{2} - \frac{y}{4} \right) w = 0
$$

Desarrollando los términos:

$$
y w'' - y w' + \frac{y}{4}w + \frac{1}{2} w' - \frac{1}{4}w + \frac{\mathcal{E}}{2}w - \frac{y}{4}w = 0
$$

$$
y w'' + \left(\frac{1}{2} - y\right) w' - \left( \frac{1}{4} - \frac{\mathcal{E}}{2} \right) w = 0
$$

Llegamos exactamente a la **Ecuación Hipergeométrica Confluente (de Kummer)**:

$$
\mathbf{y \frac{d^2 w(y)}{dy^2} + (b - y) \frac{dw(y)}{dy} - a \, w(y) = 0}
$$

La cual es capaz de entregar una solución basada en polinomios especiales según los parámetros $a$ y $b$ involucrados en el problema. Es una forma generalizada desde la cual se obtiene la solución mediante los Polinomios de Hermite, donde:

$$
b = \frac{1}{2}, \qquad a = \frac{1}{4} - \frac{\mathcal{E}}{2} = \mathbf{\frac{1}{4} - \frac{E}{2\hbar\omega}}
$$

---

### Transformación a la Variable Espacial $\xi = \sqrt{y}$ (Ecuación de Hermite)

Si en lugar de $y$ empleamos la coordenada espacial adimensional $\xi = ax = \sqrt{\frac{m\omega}{\hbar}} x$:

$$
\frac{d\xi}{dy} = \frac{1}{2}y^{-1/2} \implies \frac{df}{dy} = \frac{1}{2\xi} \frac{df}{d\xi}
$$

Calculando las derivadas correspondientes:

$$
\frac{dw}{dy} = \frac{1}{2\xi}\frac{dw}{d\xi} \qquad \frac{d^2w}{dy^2} = \frac{1}{2\xi}\frac{d}{d\xi}\left(\frac{1}{2\xi}\frac{dw}{d\xi}\right) = \frac{1}{2\xi}\left(-\frac{1}{2\xi^2}\frac{dw}{d\xi} + \frac{1}{2\xi}\frac{d^2w}{d\xi^2}\right)
$$

Expresando la ecuación de Kummer en términos de la variable espacial $\xi$:

$$
-\frac{1}{4\xi}\frac{dw}{d\xi} + \frac{1}{4}\frac{d^2w}{d\xi^2} + \frac{1}{4\xi}\frac{dw}{d\xi} - \frac{\xi}{2}\frac{dw}{d\xi} - \left(\frac{1}{4} - \frac{\mathcal{E}}{2}\right) w(\xi) = 0
$$

Simplificando los términos, obtenemos la **Ecuación Diferencial de Hermite**:

$$
\mathbf{\frac{d^2 w(\xi)}{d\xi^2} - 2\xi \frac{dw(\xi)}{d\xi} + (2\mathcal{E} - 1) w(\xi) = 0}
$$

Con esto concluimos que la solución general del oscilador armónico cuántico está dada en términos de los **Polinomios de Hermite** $H_n(\xi)$.

## 📄 Visor de las Notas de Clase y Demostraciones

<div style="width: 100%; height: 800px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
  <object
    data="../../../assets/pdf/Clase_OsciladorArmonico1D.pdf#toolbar=1&navpanes=0&scrollbar=1"
    type="application/pdf"
    width="100%"
    height="100%">
    <p>Tu navegador no soporta la vista previa. <a href="../../../assets/pdf/Clase_OsciladorArmonico1D.pdf">Descargar PDF</a></p>
  </object>
</div>

---

## Desarrollo en tres niveles de rigor

=== "1. Intuición"
    [Explica la idea con palabras, ejemplos o diagramas.]

=== "2. Desarrollo estándar"
    [Presenta el desarrollo habitual para un curso universitario.]

=== "3. Fundamentación rigurosa"
    [Expón las hipótesis, definiciones formales y demostraciones completas.]

### Resultados principales

[Enuncia los teoremas, leyes o relaciones importantes.]

## Ejemplos y aplicaciones

[Añade ejemplos resueltos y aplicaciones.]

## Ejercicios

1. [Enunciado del ejercicio]

## Referencias

- [Añade aquí libros, artículos o recursos consultados.]

## 📥 Recursos de la Clase

[📥 Descargar PDF de la Clase](../../../assets/pdf/Osc_Cuantico_1D.pdf){ .md-button .md-button--primary }

[📦 Descargar Código Fuente TeX (.zip)](../../../clases_zip/Osc_Cuantico_1D.zip){ .md-button }
