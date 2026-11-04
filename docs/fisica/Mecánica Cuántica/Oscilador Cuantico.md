# Oscilador Armónico Cuántico

!!! info "Información del documento"
    - **Área:** Física, Mecánica Cuantica
    - **Autoría:** Campaña Vergara Jackson
    - **Última actualización:** 31/10/26
    - **Estado:** [✏ Borrador]

## Prerrequisitos

- [Añade aquí los conceptos previos y enlaza las páginas existentes.]

## Resumen
Uno de los sistemas físicos de mayor interés teórico, el oscilador armónico, cuya energia potencial es $V=\frac{1}{2}m\omega^2 x^2$. Para simplificar el tratamiento nos restringimos al caso unidimensional, que carece de degeneración (el oscilador armónico en más de una dimensión es un problema degenerado que, para su tratamiento cabal, requiere en la teoría clásica de la teoría del momento angular, la que habremos de desarrollar mas adelante). 

El oscilador armónico suministra importante información acerca de las vibraciones atómicas en las moléculas y los sólidos dado que aparece cuando potenciales más o menos complicados se aproximan en la región de un mínimo con curvas parabólicas. Por lo tanto, se trata esencialmente de la teoría de oscilaciones poco energéticas en torno a un mínimo de potencial, situación que se da con frecuencia con átomos, moléculas, etc. Además, el empleo frecuente del análisis de Fourier para estudiar sistemas complejos en términos de osciladores elementales hace del oscilador armónico uno de los problemas más importantes de la física teórica, sin considerar su interés metodológico debido al hecho de poseer solución exacta bajo la ecuación de schrodinger:
$$ \frac{-\hbar^2}{2m} \frac{d^2}{dx^2} \Psi + \frac{1}{2}m\omega^2 x^2 \Psi = E \Psi$$

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

**NOTA:** Claramente se pudo obtener directamente este resultado pero es interesante observar como surgen los polinomios de hermite de la ecuación hipergeométrica confluente (Ec. de Kummer).

Con esto concluimos que la solución general del oscilador armónico cuántico es muy parecida a la ecuación de los **Polinomios de Hermite** $H_n(\xi)$. Solo si $2\mathcal{E} - 1=2n$ con $n$ un numero entero positivo, a rigor falta demostrar la discretización de este termino para que la solución de la función de valores cercanos al origen $w(\xi)$ es efectivamente dada por dichos polinomios.

Para demostrarlo supondremos la solución de $w(\xi)$ en forma de una serie de potencias en forma del metodo de Frobenious.

---

### **Proponemos la solución de Frobenius en la forma general:**

Proponemos la solución en serie de potencias en la forma general de Frobenius para $w(\xi)$:

$$w(\xi) = \sum_{k=0}^{\infty} c_k \xi^{k+s} \quad (c_0 \neq 0)$$

Sustituyendo $w(\xi)$, $w'(\xi)$ y $w''(\xi)$ en la ecuación diferencial de Hermite:

$$\frac{d^2 w}{d\xi^2} - 2\xi \frac{dw}{d\xi} + (2\mathcal{E} - 1)w = 0$$

$$\sum_{k=0}^{\infty} (k+s)(k+s-1)c_k \xi^{k+s-2} - 2\sum_{k=0}^{\infty} (k+s)c_k \xi^{k+s} + (2\mathcal{E} - 1)\sum_{k=0}^{\infty} c_k \xi^{k+s} = 0$$

$$\sum_{k=-2}^{\infty} (k+s+2)(k+s+1)c_{k+2} \xi^{k+s} + \sum_{k=0}^{\infty} [-2(k+s)c_k + (2\mathcal{E} - 1) c_k]\xi^{k+s} = 0$$

$$\underbrace{(s)(s-1)c_{0} \xi^{s-2} + (s+1)(s)c_{1} \xi^{s-1}}_{términos \quad sobrantes \quad =0} + \sum_{k=0}^{\infty} [(k+s+2)(k+s+1)c_{k+2} -2(k+s)c_k + (2\mathcal{E} - 1) c_k ]\xi^{k+s} = 0$$

Para eliminar los términos sobrantes tomamos $s=0$, con ello la serie queda limpia y obtenemos la **relación de recurrencia** para $k \ge 0$.

$$(k+2)(k+1)c_{k+2} -2(k)c_k + (2\mathcal{E} - 1) c_k =0$$

$$c_{k+2} = \frac{2k - (2\mathcal{E} - 1)}{(k+1)(k+2)} c_k$$

Como el salto en los subíndices es de $k \to k+2$, la paridad queda **completamente desacoplada**:

* Los coeficientes pares ($c_0, c_2, c_4, \dots$) dependen **únicamente de $c_0$**.

* Los coeficientes impares ($c_1, c_3, c_5, \dots$) dependen **únicamente de $c_1$**.

---

=== "2. Desarrollo estándar"
    [Presenta el desarrollo habitual para un curso universitario.]

=== "Divergencia sin Truncamiento"
    [Explica la idea con palabras, ejemplos o diagramas.]

Para que la función de onda $\psi(\xi) = w(\xi) e^{-\xi^2/2}$ represente un estado físico válido, debe pertenecer al espacio de Hilbert $L^2(\mathbb{R})$, lo que exige que su norma sea finita: $\|\psi\|^2 < \infty$. A continuación se demuestra que si la serie $w(\xi)$ no se trunca en un polinomio, esta integral diverge estrictamente a $+\infty$.

### Comportamiento Asintótico de los Coeficientes

Partimos de la relación de recurrencia exacta para la rama par (o impar):

$$c_{2m+2} = \frac{4m - (2\mathcal{E} - 1)}{(2m+1)(2m+2)} c_{2m}$$

Si la serie no se trunca, el numerador nunca es cero. Existe un entero $M \in \mathbb{N}$ suficientemente grande tal que para todo $m \ge M$, se cumple $4m - (2\mathcal{E} - 1) > 0$. Como el denominador siempre es positivo, a partir de $M$ todos los coeficientes mantienen el mismo signo. Asumiremos $c_{2M} > 0$.

Analizamos el cociente de coeficientes para $m \ge M$:

$$\frac{c_{2m+2}}{c_{2m}} = \frac{4m - (2\mathcal{E} - 1)}{4m^2 + 6m + 2}$$

Para $m$ grande, el término dominante en el numerador es $4m$ y en el denominador es $4m^2$, por lo que el cociente decae como $1/m$. Formalmente, siempre es posible elegir un índice $K \ge M$ y una constante estricta $\gamma > 0$ tal que para todo $m \ge K$:

$$\frac{c_{2m+2}}{c_{2m}} \ge \frac{\gamma}{m+1}$$

Para hallar el valor de un coeficiente avanzado $c_{2N}$ (con $N > K$), multiplicamos todos los cocientes intermedios desde $m = K$ hasta $N-1$. Esto forma un producto telescópico donde los términos intermedios se cancelan:

$$\frac{c_{2N}}{c_{2K}} = \left( \frac{c_{2K+2}}{c_{2K}} \right) \left( \frac{c_{2K+4}}{c_{2K+2}} \right) \dots \left( \frac{c_{2N}}{c_{2N-2}} \right)$$

Aplicando nuestra desigualdad a cada factor:

$$\frac{c_{2N}}{c_{2K}} \ge \left( \frac{\gamma}{K+1} \right) \left( \frac{\gamma}{K+2} \right) \dots \left( \frac{\gamma}{N} \right) = \frac{\gamma^{N-K} \, K!}{N!}$$

Despejando $c_{2N}$ y agrupando todas las constantes que no dependen de $N$ en una única constante global $A = c_{2K} \gamma^{-K} K! > 0$, obtenemos la cota inferior estricta:

$$c_{2N} \ge A \frac{\gamma^N}{N!} \quad \text{para todo } N \ge K$$
*(Para simplificar la notación en la integral posterior, podemos reabsorber $\gamma$ en un cambio de escala o asumir el caso límite donde comparamos directamente, por lo que escribiremos genéricamente $c_{2m} \ge \frac{A}{m!}$).*

---

### Acotación Inferior de la Función $w(\xi)$ frente al Polinomio

Sabiendo que $c_{2m} \ge \frac{A}{m!}$, dividimos la función $w(\xi)$ en dos partes: el tramo finito inicial y la cola infinita.

$$w(\xi) = \underbrace{\sum_{m=0}^{K-1} c_{2m} \xi^{2m}}_{\text{Polinomio finito } P(\xi)} + \underbrace{\sum_{m=K}^{\infty} c_{2m} \xi^{2m}}_{\text{Cola infinita}}$$

Aplicamos la cota a la cola infinita:

$$\sum_{m=K}^{\infty} c_{2m} \xi^{2m} \ge A \sum_{m=K}^{\infty} \frac{(\xi^2)^m}{m!}$$

Reconocemos que esta suma es casi la serie de Taylor de la función exponencial, solo le faltan los primeros $K$ términos:

$$A \sum_{m=K}^{\infty} \frac{(\xi^2)^m}{m!} = A \left( e^{\xi^2} - \sum_{m=0}^{K-1} \frac{\xi^{2m}}{m!} \right)$$

Sustituyendo esto en la función original $w(\xi)$:

$$w(\xi) \ge P(\xi) + A e^{\xi^2} - A \sum_{m=0}^{K-1} \frac{\xi^{2m}}{m!}$$

**El argumento de dominancia asintótica (Detalle Omitido):**  
Agrupemos los términos polinómicos en un solo polinomio $Q(\xi) = P(\xi) - A \sum_{m=0}^{K-1} \frac{\xi^{2m}}{m!}$. 
Sabemos por el Teorema de L'Hôpital que la función exponencial $e^{\xi^2}$ crece asintóticamente mucho más rápido que *cualquier* polinomio finito $Q(\xi)$. Por tanto, el cociente $|Q(\xi)| / e^{\xi^2} \to 0$ cuando $\xi \to \infty$. 

Esto garantiza que existe un punto en el espacio $\xi_0 > 0$ a partir del cual el término $A e^{\xi^2}$ es tan inmensamente superior al polinomio $Q(\xi)$ que lo absorbe holgadamente, permitiéndonos asegurar que para todo $|\xi| > \xi_0$:

$$w(\xi) \ge \frac{A}{2} e^{\xi^2}$$

---

### Criterio de Integrabilidad para la Norma en $L^2(\mathbb{R})$

Ahora evaluamos la condición física de normalización calculando la norma al cuadrado $\|\psi\|^2$.

$$\|\psi\|^2 = \int_{-\infty}^{\infty} [w(\xi)]^2 e^{-\xi^2} d\xi$$

Dado que el integrando es estrictamente positivo, la integral sobre todo el dominio real es mayor que la integral evaluada únicamente en las "colas" del espacio (para $|\xi| > \xi_0$):

$$\|\psi\|^2 \ge \int_{|\xi| > \xi_0} [w(\xi)]^2 e^{-\xi^2} d\xi$$

**Sustitución de la cota inferior:**  
Reemplazamos $w(\xi)$ por la desigualdad estricta $\frac{A}{2} e^{\xi^2}$ que demostramos para esa región:

$$\|\psi\|^2 \ge \int_{|\xi| > \xi_0} \left( \frac{A}{2} e^{\xi^2} \right)^2 e^{-\xi^2} d\xi$$

Elevamos al cuadrado y operamos los exponentes:

$$\|\psi\|^2 \ge \frac{A^2}{4} \int_{|\xi| > \xi_0} e^{2\xi^2} e^{-\xi^2} d\xi = \frac{A^2}{4} \int_{|\xi| > \xi_0} e^{+\xi^2} d\xi$$

**Conclusión del límite de divergencia:**  
Para cualquier número real $\xi$, se cumple que $e^{+\xi^2} \ge 1$. Sustituyendo esto en la integral:

$$\|\psi\|^2 \ge \frac{A^2}{4} \int_{|\xi| > \xi_0} 1 \, d\xi = \frac{A^2}{4} \times (\infty) = +\infty$$

La integral diverge irremisiblemente a infinito. Esto demuestra matemáticamente que **la única forma de que la función de onda sea físicamente admisible (cuadrado integrable) es impedir la existencia de la cola infinita**, forzando al numerador de la recurrencia a ser cero en algún punto: $2N - (2\mathcal{E} - 1) = 0$.

## Cuantización Inevitable de $(2\mathcal{E} - 1)$

Para evitar que la serie $w(\xi)$ sea infinita y diverja asintóticamente como $e^{\xi^2}$ (lo que destruiría la normalizabilidad de la función de onda total $\psi(\xi) = w(\xi)e^{-\xi^2/2}$), la serie debe **truncarse** en un polinomio de grado finito $N$.

Esto requiere que el numerador de la recurrencia sea cero para un índice entero $k = N$:

$$2N - (2\mathcal{E} - 1) = 0 \implies 2\mathcal{E} - 1 = 2N \quad \text{con } N \in \{0, 1, 2, 3, \dots\}$$

Llamando $n = N$ al grado del Polinomio de Hermite $H_n(\xi)$:

$$2\mathcal{E} - 1 = 2n$$

Despejando la energía adimensional $\mathcal{E} = \frac{E}{\hbar\omega}$:

$$2\mathcal{E} = 2n + 1 \implies \mathcal{E} = n + \frac{1}{2}$$

### Resultado Final de la Energía

$$\mathbf{E_n = \left(n + \frac{1}{2}\right)\hbar\omega \quad (n = 0, 1, 2, \dots)}$$

---

## Conclusión

El uso directo de $s = 0$ demuestra que no es estrictamente necesario separar $s = 1$ y $s = 0$ como dos casos independientes. La estructura del salto $k+2$ en la recurrencia de $s = 0$ separa naturalmente a la función $w(\xi)$ en sus componentes par e impar, y la exigencia física de normalizabilidad fuerza a que $2\mathcal{E}-1$ sea un entero par no negativo, cuantizando la energía de forma automática.

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

## Referencias

- [Añade aquí libros, artículos o recursos consultados.]

## 📥 Recursos de la Clase

[📥 Descargar PDF de la Clase](../../../assets/pdf/Osc_Cuantico_1D.pdf){ .md-button .md-button--primary }

[📦 Descargar Código Fuente TeX (.zip)](../../../clases_zip/Osc_Cuantico_1D.zip){ .md-button }
