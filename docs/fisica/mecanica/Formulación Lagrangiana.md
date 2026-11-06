# Mecánica Clásica

## Ligaduras

- **Holónomas**: Todo vínculo gobernado por la naturaleza de la ecuación. Se pueden expresar de la forma:
  $$f(\vec{r}_1, \vec{r}_2, \dots, \vec{r}_n, t) = 0$$
- **No Holónomas**: Si no se pueden expresar de la forma anterior.

Por la dependencia del tiempo:
- **Esclerónomas (Rígidas)**: No dependen explícitamente del tiempo. 
  *(Ej: $x^2 + y^2 + z^2 - R^2 = 0$)*
- **Reónomas (Móviles)**: Dependen explícitamente del tiempo. 
  *(Ej: $x^2 + z^2 - 5y^2 t = 0$)*

---

### Dificultades introducidas por las ligaduras
1. Las coordenadas ya no son independientes, al estar relacionadas por las ecuaciones de ligadura; así que no todas las ecuaciones de movimiento serán independientes.
2. A priori, no se conocen las fuerzas de ligadura, así que también son incógnitas.

**Resolución mediante Coordenadas Generalizadas:**
Para un sistema de $N$ partículas, corresponden $3N$ coordenadas. Si las ligaduras son holónomas, existen $k$ ecuaciones de la forma $f(\vec{r}_1, \dots, \vec{r}_N, t) = 0$. Entonces nos quedan $3N - k$ grados de libertad independientes que se pueden transformar en un conjunto de coordenadas generalizadas:
$$q_1, q_2, \dots, q_{3N-k}, t$$

*(Si no son holónomas, no existe una manera general de abordar estos problemas para eliminar las fuerzas de ligadura directamente).*

---

## Principio de D'Alembert y Ecuaciones de Lagrange

Si el sistema está en equilibrio, la fuerza neta sobre cada partícula es $\vec{F}_i = 0$:
$$\Rightarrow \vec{F}_i \cdot \delta \vec{r}_i = 0 \quad \Rightarrow \quad \sum_i \vec{F}_i \cdot \delta \vec{r}_i = 0 \quad \dots (A)$$

Además, siendo $\vec{F}_i^{(a)}$ la fuerza aplicada (conocida) y $\vec{f}_i$ la fuerza de ligadura:
$$\vec{F}_i = \vec{F}_i^{(a)} + \vec{f}_i$$

Reemplazando en (A):
$$\sum_i \vec{F}_i^{(a)} \cdot \delta \vec{r}_i + \sum_i \vec{f}_i \cdot \delta \vec{r}_i = 0$$

Si consideramos que el trabajo virtual de las fuerzas de ligadura es nulo ($\sum_i \vec{f}_i \cdot \delta \vec{r}_i = 0$), queda:
$$\sum_i \vec{F}_i^{(a)} \cdot \delta \vec{r}_i = 0$$

### Principio de D'Alembert (Dinámico)
Usando la segunda ley de Newton $\vec{F}_i = \dot{\vec{p}}_i \Rightarrow \vec{F}_i - \dot{\vec{p}}_i = 0$:
$$\Rightarrow \sum_i (\vec{F}_i - \dot{\vec{p}}_i) \cdot \delta \vec{r}_i = 0$$
$$\Rightarrow \sum_i (\vec{F}_i^{(a)} - \dot{\vec{p}}_i) \cdot \delta \vec{r}_i = 0 \quad \dots (A)$$

Transformación a coordenadas generalizadas:
$$\vec{r}_i = \vec{r}_i(q_1, \dots, q_n, t) \quad \rightarrow \quad d\vec{r}_i = \sum_k \frac{\partial \vec{r}_i}{\partial q_k} dq_k + \frac{\partial \vec{r}_i}{\partial t} dt$$
$$\vec{v}_i \equiv \frac{d\vec{r}_i}{dt} = \sum_k \frac{\partial \vec{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \vec{r}_i}{\partial t} \quad \text{(Cambio real)}$$
$$\delta \vec{r}_i = \sum_j \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j \quad \text{(Cambio virtual)}$$

Analizando el término de las fuerzas aplicadas:
$$\sum_i \vec{F}_i^{(a)} \cdot \delta \vec{r}_i = \sum_{i,j} \vec{F}_i^{(a)} \cdot \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j = \sum_j Q_j \delta q_j$$
Donde $Q_j \rightarrow$ Componente de la Fuerza Generalizada.

Analizando el término inercial y expresándolo en función de la Energía Cinética ($T$):
$$\sum_i \dot{\vec{p}}_i \cdot \delta \vec{r}_i = \sum_j \left[ \frac{d}{dt}\left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial T}{\partial q_j} \right] \delta q_j$$

Reemplazando ambos en (A):
$$\sum_j \left( Q_j - \left[ \frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial T}{\partial q_j} \right] \right) \delta q_j = 0$$

Si las fuerzas provienen de un potencial escalar $V$ ($F_i = -\nabla_i V$):
$$Q_j = \sum_i \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} = \sum_i (-\nabla_i V) \cdot \frac{\partial \vec{r}_i}{\partial q_j} = -\frac{\partial V}{\partial q_j}$$

$$\Rightarrow \sum_j \left( -\frac{\partial V}{\partial q_j} + \frac{\partial T}{\partial q_j} - \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_j}\right) \right) \delta q_j = 0$$

Definiendo el Lagrangiano $L = T - V$, y recordando que $\frac{\partial V}{\partial \dot{q}_j} = 0$:
$$\Rightarrow \sum_j \left( \frac{\partial (T - V)}{\partial q_j} - \frac{d}{dt} \left(\frac{\partial (T - V)}{\partial \dot{q}_j}\right) \right) \delta q_j = 0$$

Dado que los $\delta q_j$ son independientes:
$$\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_j} \right) - \frac{\partial L}{\partial q_j} = 0$$
