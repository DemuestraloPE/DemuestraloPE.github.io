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
\mathbf{\frac{d^2 w(\xi)}{d\xi^2} - 2\xi \frac{dw(\xi)}{d\xi} + \underbrace{(2\mathcal{E} - 1)}_{-2a} w(\xi) = 0}
$$

**NOTA:** Claramente se pudo obtener directamente este resultado pero es interesante observar como surgen los polinomios de hermite de la ecuación hipergeométrica confluente (Ec. de Kummer).

Con esto concluimos que la solución general del oscilador armónico cuántico es muy parecida a la ecuación de los **Polinomios de Hermite** $H_n(\xi)$. Solo si $2\mathcal{E} - 1=-2 a=2n$ con $n$ un numero entero positivo, a rigor falta demostrar la discretización de este termino para que la solución de la función de valores cercanos al origen $w(\xi)$ es efectivamente dada por dichos polinomios.

Para demostrarlo supondremos la solución de $w(\xi)$ en forma de una serie de potencias en forma del metodo de Frobenious.

---

### **Proponemos la solución de Frobenius en la forma general:**

$$w(\xi) = \sum_{k=0}^{\infty} c_k \xi^{k+s} \quad (c_0 \neq 0)$$

Sustituyendo $w(\xi)$, $w'(\xi)$ y $w''(\xi)$ en la ecuación diferencial:

$$\frac{d^2 w}{d\xi^2} - 2\xi \frac{dw}{d\xi} -4aw = 0$$

$$\sum_{k=0}^{\infty} (k+s)(k+s-1)c_k \xi^{k+s-2} - 2\sum_{k=0}^{\infty} (k+s)c_k \xi^{k+s} -4a \sum_{k=0}^{\infty} c_k \xi^{k+s} = 0$$

$$\sum_{k=-2}^{\infty} (k+s+2)(k+s+1)c_{k+2} \xi^{k+s} + \sum_{k=0}^{\infty} [-2(k+s)c_k \xi^{k+s} -4a c_k \xi^{k+s}] = 0$$

$$ (s)(s-1)c_{0} \xi^{s-2} + (s+1)(s)c_{1} \xi^{s-1} + \sum_{k=0}^{\infty} [(k+s+2)(k+s+1)c_{k+2} \xi^{k+s}-2(k+s)c_k \xi^{k+s} -4a c_k \xi^{k+s}] = 0$$

Para obtener la serie necesitamos eliminar los términos sobrantes
$$\Rightarrow (s)(s-1)c_{0} \xi^{s-2} + (s+1)(s)c_{1} \xi^{s-1}=0 \rightarrow s=0$$

$$ \forall k \geq 0, \qquad (k+2)(k+1)c_{k+2} \xi^{k}-2k c_k \xi^{k} -4a c_k \xi^{k} = 0$$

---


Como se exige que $c_0 \neq 0$ para definir el inicio de la serie, obtenemos la **ecuación indicial**:

$$s(s - 1) = 0 \implies \mathbf{s_1 = 1} \quad \text{y} \quad \mathbf{s_2 = 0}$$

*(Las raíces difieren por un entero, $\Delta s = 1 - 0 = 1$, lo que en la teoría general de Frobenius indica que las soluciones generan directamente funciones con paridad definida, impar y par).*

---

### **3. Evaluando la Potencia $\xi^{s-1}$ ($k = 1$)**

Para la potencia inmediatamente siguiente ($\xi^{s-1}$):

$$(1+s)s \, c_1 = 0$$

* **Para la primera raíz $s_1 = 1$:**

$$(1+1)(1) \, c_1 = 0 \implies 2 c_1 = 0 \implies \mathbf{c_1 = 0}$$



El método de Frobenius anula automáticamente el coeficiente $c_1$. La solución construida con $s_1 = 1$ es una **serie puramente impar**:

$$f_1(\xi) = c_0 \xi^1 + c_2 \xi^3 + c_4 \xi^5 + \dots$$


* **Para la segunda raíz $s_2 = 0$:**

$$(0+1)(0) \, c_1 = 0 \implies 0 \cdot c_1 = 0$$

Aquí $c_1$ queda completamente indeterminado (puede elegirse $c_1 = 0$ para obtener la **serie puramente par** $f_2(\xi) = c_0 + c_2 \xi^2 + c_4 \xi^4 + \dots$).

---

### **4. Relación de Recurrencia General para $s$**

Homogenizando potencias para $k \ge 0$ ($k \to k+2$ en la segunda derivada):

$$(k+s+2)(k+s+1) c_{k+2} - \left[ 2(k+s) - (2\mathcal{E} - 1) \right] c_k = 0$$

$$\mathbf{c_{k+2} = \frac{2(k+s) - (2\mathcal{E} - 1)}{(k+s+1)(k+s+2)} c_k}$$

---

### **5. ¿Cómo demuestra esto que $(2\mathcal{E} - 1)$ es un Entero Discreto?**

Analicemos cómo la condición de anulación del término $c_{k+2}$ en un grado finito $k = N$ fija la cuantización para cada raíz $s$:

#### **Caso A: Soluciones Impares ($s = 1$, con $c_1 = 0$)**

Sustituyendo $s = 1$ en la recurrencia:

$$c_{k+2} = \frac{2(k+1) - (2\mathcal{E} - 1)}{(k+2)(k+3)} c_k$$

Para que la serie impar no sea infinita y no diverja como $e^{\xi^2}$ al infinito, debe existir un paso de truncamiento $k = N$ (donde $N = 0, 2, 4, \dots$):

$$2(N+1) - (2\mathcal{E} - 1) = 0 \implies 2\mathcal{E} - 1 = 2(N+1)$$

Llamando al grado impar total del polinomio $n = N + 1$ (donde $n = 1, 3, 5, \dots$):

$$2\mathcal{E} - 1 = 2n \implies \mathbf{2\mathcal{E} - 1 \in \{2, 6, 10, \dots\}}$$

---

#### **Caso B: Soluciones Pares ($s = 0$, seleccionando $c_1 = 0$)**

Sustituyendo $s = 0$ en la recurrencia:

$$c_{k+2} = \frac{2k - (2\mathcal{E} - 1)}{(k+1)(k+2)} c_k$$

Para truncar la serie par en el término $k = N$ (donde $N = 0, 2, 4, \dots$):

$$2N - (2\mathcal{E} - 1) = 0 \implies 2\mathcal{E} - 1 = 2N$$

Llamando al grado par total del polinomio $n = N$ (donde $n = 0, 2, 4, \dots$):

$$2\mathcal{E} - 1 = 2n \implies \mathbf{2\mathcal{E} - 1 \in \{0, 4, 8, \dots\}}$$

---

### **Resultado Unificado**

Combinando ambos casos (par $n=0,2,4\dots$ e impar $n=1,3,5\dots$), el parámetro $2\mathcal{E} - 1$ queda forzado a tomar **únicamente valores enteros pares no negativos**:

$$2\mathcal{E} - 1 = 2n \quad \text{con } n \in \{0, 1, 2, 3, \dots\}$$

Despejando $\mathcal{E} = \frac{E}{\hbar\omega}$:

$$2\mathcal{E} = 2n + 1 \implies \mathcal{E} = n + \frac{1}{2} \implies \mathbf{E_n = \left(n + \frac{1}{2}\right)\hbar\omega}$$

En resumen, la condición indicial $s_1=1 \implies c_1=0$ desacopla mecánicamente las series par e impar. Al quedar una única rama independiente por cada raíz $s$, se exige que el factor $2(k+s) - (2\mathcal{E}-1)$ sea cero para algún $k$, lo que impone de manera directa e inevitable la discreción de $2\mathcal{E}-1$.

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
