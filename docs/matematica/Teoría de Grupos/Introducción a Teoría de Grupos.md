# [Nombre del tema]

!!! info "Información del documento"
    - **Área:** [Matemáticas o Física]
    - **Autoría:** [Nombre]
    - **Última actualización:** [Fecha]
    - **Estado:** [Borrador / En revisión / Verificado]

## Resumen

[Describe en pocas líneas qué estudia este tema y por qué es importante.]

## Objetivos de aprendizaje

- [Objetivo 1]
- [Objetivo 2]

## Prerrequisitos

- [Añade aquí los conceptos previos y enlaza las páginas existentes.]

## Conceptos fundamentales

## Definiciones

[Incluye las definiciones necesarias.]


# Introducción a la Teoría de Grupos

En mecánica clásica, la **simetría** de un sistema físico conduce directamente a **leyes de conservación**. La conservación del momento angular es una consecuencia directa de la simetría rotacional, lo que significa la **invariancia** bajo rotaciones espaciales. En el primer tercio del siglo XX, Wigner y otros investigadores comprendieron que la invariancia era un concepto clave para entender los nuevos fenómenos cuánticos y para desarrollar teorías adecuadas. 

Así, en mecánica cuántica, el concepto de momento angular y espín se ha vuelto aún más central. Sus generalizaciones, como el **isospín** en física nuclear y la **simetría de sabor** en física de partículas, son herramientas indispensables para construir y resolver teorías. Además, las generalizaciones del concepto de **invariancia de gauge** de la electrodinámica clásica a la simetría de isospín conducen a la teoría de gauge electrodébil.

En cada uno de estos casos, el conjunto de operaciones de simetría forma un **grupo**. La teoría de grupos es la herramienta matemática para tratar invariantes y simetrías; aporta unificación y formalización a principios tales como:
* Reflexiones espaciales (paridad)
* Momento angular
* Geometría

En geometría, el papel fundamental de la teoría de grupos fue reconocido hace más de un siglo por los matemáticos (por ejemplo, el *Programa de Erlangen* de Felix Klein). En la geometría euclidiana, la distancia entre dos puntos, el producto escalar de dos vectores o la métrica no cambian bajo rotaciones o traslaciones. Estas simetrías son características de esta geometría. En la relatividad especial, la métrica (o el producto escalar de cuadrivectores) difiere de la geometría euclidiana en que ya no es definida positiva y es invariante bajo transformaciones de Lorentz.

Para un cristal, el grupo de simetría contiene solo un número finito de rotaciones en valores discretos de ángulos o reflexiones. La teoría de tales **grupos discretos o finitos**, desarrollada originalmente como una rama de la matemática pura, es hoy una herramienta útil para la cristalografía y la física de la materia condensada. 

Cuando las rotaciones dependen de ángulos que varían continuamente (como los ángulos de Euler), los grupos de rotación tienen un número infinito de elementos. Tales **grupos continuos (o de Lie)** son fundamentales en la física moderna, al igual que el uso de formas diferenciales aplicadas a las ecuaciones de Maxwell.

---

## Definición de un Grupo

Un grupo $G$ se define como un conjunto de objetos u operaciones (rotaciones, transformaciones, etc.), llamados los **elementos de $G$**, que pueden combinarse o "multiplicarse" para formar un producto bien definido en $G$, denotado por $*$, el cual satisface las siguientes cuatro condiciones:

1. **Clausura:** Si $a$ y $b$ son dos elementos cualesquiera de $G$, entonces el producto $a * b$ también es un elemento de $G$, donde $b$ actúa antes que $a$; es decir, $(a, b) \rightarrow a * b$ asocia (o mapea) un elemento $a * b \in G$ con el par $(a, b)$ de elementos de $G$. Esta propiedad se conoce como *" $G$ es cerrado bajo la multiplicación de sus propios elementos"*.
2. **Asociatividad:** Esta multiplicación es asociativa:
   $$ (a * b) * c = a * (b * c) $$
3. **Elemento Identidad (Unidad):** Existe un elemento unidad $1 \in G$ tal que:
   $$ 1 * a = a * 1 = a \quad \forall a \in G $$
   El elemento unidad es único ($1 = 1' * 1 = 1'$).
4. **Elemento Inverso:** Existe un inverso (o recíproco) de cada elemento $a \in G$, denotado por $a^{-1}$, tal que:
   $$ a * a^{-1} = a^{-1} * a = 1 $$
   El inverso es único: Si $a^{-1}$ y $a'^{-1}$ son ambos inversos de $a$, entonces:
   $$ a'^{-1} = a'^{-1} * (a * a^{-1}) = (a'^{-1} * a) * a^{-1} = a^{-1} $$

> **Nota de notación:** Dado que escribir el símbolo $*$ para la multiplicación resulta tedioso, es costumbre omitirlo. En lo sucesivo se escribe simplemente $ab$ en lugar de $a * b$.

---

### Conceptos Clave de Grupos

* **Subgrupo:** Si un subconjunto $G'$ de $G$ es cerrado bajo la multiplicación, es un grupo en sí mismo y se denomina **subgrupo** de $G$. El elemento unidad de $G$ siempre forma un subgrupo de $G$.
* **Subgrupo Invariante (Normal):** Si $g g' g^{-1}$ es un elemento de $G'$ para cualquier $g \in G$ y $g' \in G'$, entonces $G'$ se llama un **subgrupo invariante** (o normal) de $G$. El subgrupo formado únicamente por la unidad es siempre invariante. Si los elementos del grupo son matrices cuadradas, entonces $g g' g^{-1}$ corresponde a una transformación de similitud.
* **Grupo Abeliano:** Si $ab = ba$ para todos los elementos $a, b \in G$, el grupo se denomina **abeliano** (es decir, el orden de los productos no importa). La multiplicación conmutativa a menudo se denota con un signo $+$. Un ejemplo son los espacios vectoriales cuyo elemento unidad es el vector nulo y $-a$ es el inverso de $a$.

---

## Homomorfismo e Isomorfismo

Puede existir una correspondencia entre los elementos de dos grupos: uno a uno (biunívoca), dos a uno, o muchos a uno. 

* **Homomorfismo:** Si esta correspondencia preserva la multiplicación del grupo, decimos que los dos grupos son **homomórficos**. Una correspondencia homomórfica fundamental en física es la que existe entre el grupo de rotaciones $SO(3)$ y el grupo unitario $SU(2)$.
* **Isomorfismo:** Si la correspondencia es uno a uno (biyectiva) y preserva la multiplicación del grupo, entonces los grupos son **isomórficos**.

> **Representación de un Grupo:** Si un grupo $G$ es homomórfico a un grupo de matrices $G'$, entonces $G'$ se llama una **representación** de $G$. Si $G$ y $G'$ son isomórficos, la representación se denomina **fiel** (*faithful*). Las representaciones de un grupo no son únicas.

## Referencias Bibliográficas 
- Métodos Matemáticos para Físicos (Arfken & Weber)Fragmento de códigoArfken, G. B., & Weber, H. J. (2005). Mathematical Methods for Physicists (6.ª ed.). Elsevier Academic Press.

### Resultados principales

[Enuncia los teoremas, leyes o relaciones importantes.]

## Desarrollo en tres niveles de rigor

=== "1. Intuición"
    [Explica la idea con palabras, ejemplos o diagramas.]

=== "2. Desarrollo estándar"
    [Presenta el desarrollo habitual para un curso universitario.]

## Ejemplos y aplicaciones

[Añade ejemplos resueltos y aplicaciones.]

## Ejercicios

1. [Enunciado del ejercicio]

## Referencias

- [Añade aquí libros, artículos o recursos consultados.]
