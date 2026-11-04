---
title: Atomo de Hidrogeno
latex_source: "Atomo de Hidrogeno/AtomoDeHidrogeno.tex"
---

# Atomo de Hidrogeno

Escribe aquí una breve descripción o los prerrequisitos de la clase.

El átomo de hidrógeno consiste en un protón de masa M y carga +e, y un electrón de masa m_{e} y carga -e. Como M\gg m_{e}, el sistema se reduce a una sola partícula de masa reducida \mu=\frac{m_{e}M}{m_{e}+M}\approx m_{e} moviéndose bajo la acción de un potencial central de Coulomb:

V(r)=-\frac{e^{2}}{4\pi\epsilon_{0}r}	
1.1. Ecuación de Schrödinger Independiente del TiempoLa ecuación de Schrödinger en tres dimensiones para la función de onda \Psi(\vec{r}) es:

-\frac{\hbar^{2}}{2\mu}\nabla^{2}\Psi(\vec{r})+V(r)\Psi(\vec{r})=E\Psi(\vec{r})	
Dado que el potencial posee simetría esférica (V(\vec{r})=V(r)), expresamos el operador Laplaciano \nabla^{2} en coordenadas esféricas (r,\theta,\phi):

\nabla^{2}=\frac{1}{r^{2}}\frac{\partial}{\partial r}\left(r^{2}\frac{\partial% }{\partial r}\right)+\frac{1}{r^{2}\sin\theta}\frac{\partial}{\partial\theta}% \left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{r^{2}\sin^{2}% \theta}\frac{\partial^{2}}{\partial\phi^{2}}	
1.2. Separación de VariablesProponemos una solución de variables separables dividida en una parte radial y una parte angular:

\Psi(r,\theta,\phi)=R(r)Y(\theta,\phi)	
Sustituyendo \Psi(r,\theta,\phi) en la ecuación de Schrödinger y dividiendo entre R(r)Y(\theta,\phi):

\frac{1}{R}\frac{d}{dr}\left(r^{2}\frac{dR}{dr}\right)+\frac{2\mu r^{2}}{\hbar% ^{2}}\left(E-V(r)\right)=-\frac{1}{Y}\left[\frac{1}{\sin\theta}\frac{\partial}% {\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac% {1}{\sin^{2}\theta}\frac{\partial^{2}Y}{\partial\phi^{2}}\right]	
Puesto que el lado izquierdo depende únicamente de r y el lado derecho únicamente de (\theta,\phi), ambos lados deben ser iguales a una constante de separación, la cual se denota por conveniencia como l(l+1):Ecuación Angular:

\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{% \partial Y}{\partial\theta}\right)+\frac{1}{\sin^{2}\theta}\frac{\partial^{2}Y% }{\partial\phi^{2}}=-l(l+1)Y(\theta,\phi)	
Ecuación Radial:

\frac{1}{r^{2}}\frac{d}{dr}\left(r^{2}\frac{dR}{dr}\right)+\left[\frac{2\mu}{% \hbar^{2}}\left(E+\frac{e^{2}}{4\pi\epsilon_{0}r}\right)-\frac{l(l+1)}{r^{2}}% \right]R(r)=0	
1.3. Solución de la Ecuación Angular: Armónicos Esféricos Y_{l}^{m}(\theta,\phi)Separamos nuevamente la función angular: Y(\theta,\phi)=\Theta(\theta)\Phi(\phi).

\frac{\sin\theta}{\Theta}\frac{d}{d\theta}\left(\sin\theta\frac{d\Theta}{d% \theta}\right)+l(l+1)\sin^{2}\theta=-\frac{1}{\Phi}\frac{d^{2}\Phi}{d\phi^{2}}% =m^{2}	
donde m^{2} es una segunda constante de separación.Ecuación Azimutal (\Phi):

\frac{d^{2}\Phi}{d\phi^{2}}+m^{2}\Phi=0\implies\Phi(\phi)=e^{im\phi}	
Para que la función de onda sea univaluada en el espacio físico (\Phi(\phi+2\pi)=\Phi(\phi)), exigimos e^{i2\pi m}=1, lo que impone:

m\in\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}	
Ecuación Polar (\Theta):Haciendo el cambio x=\cos\theta, la ecuación para \Theta(x) se convierte en la Ecuación Asociada de Legendre:

(1-x^{2})\frac{d^{2}\Theta}{dx^{2}}-2x\frac{d\Theta}{dx}+\left[l(l+1)-\frac{m^% {2}}{1-x^{2}}\right]\Theta=0	
Para evitar soluciones divergentes en los polos (x=\pm 1), la serie infinita de resolución debe truncarse a un polinomio. Esto exige que:

l\in\mathbb{N}_{0}=\{0,1,2,3,\dots\}\quad\text{y}\quad|{}m|{}\leq l	
Las soluciones normalizadas son los Armónicos Esféricos:

Y_{l}^{m}(\theta,\phi)=(-1)^{m}\sqrt{\frac{(2l+1)}{4\pi}\frac{(l-m)!}{(l+m)!}}% P_{l}^{m}(\cos\theta)e^{im\phi}	
1.4. Solución de la Ecuación Radial y Niveles de EnergíaPara simplificar la ecuación radial, hacemos el cambio de variable u(r)=rR(r):

-\frac{\hbar^{2}}{2\mu}\frac{d^{2}u}{dr^{2}}+\left[-\frac{e^{2}}{4\pi\epsilon_% {0}r}+\frac{\hbar^{2}l(l+1)}{2\mu r^{2}}\right]u(r)=Eu(r)	
Definimos las variables adimensionales:

\kappa=\frac{\sqrt{-2\mu E}}{\hbar}\quad(E<0\text{paraestadosligados}),\quad% \rho=2\kappa r,\quad\rho_{0}=\frac{\mu e^{2}}{2\pi\epsilon_{0}\hbar^{2}\kappa}	
Reescribiendo en términos de \rho:

\frac{d^{2}u}{d\rho^{2}}+\left[\frac{\rho_{0}}{\rho}-\frac{1}{4}-\frac{l(l+1)}% {\rho^{2}}\right]u=0	
Analizamos los comportamientos límite:Cuando \rho\to\infty: \frac{d^{2}u}{d\rho^{2}}-\frac{1}{4}u\approx 0\implies u(\rho)\sim e^{-\rho/2}.Cuando \rho\to 0: \frac{d^{2}u}{d\rho^{2}}-\frac{l(l+1)}{\rho^{2}}u\approx 0\implies u(\rho)\sim% \rho^{l+1}.Proponemos la solución general:

u(\rho)=\rho^{l+1}e^{-\rho/2}v(\rho)	
Sustituyendo u(\rho), la función v(\rho) satisface la Ecuación Diferencial Asociada de Laguerre:

\rho\frac{d^{2}v}{d\rho^{2}}+(2l+2-\rho)\frac{dv}{d\rho}+(\rho_{0}-l-1)v=0	
Para que la función v(\rho) no divergiese como una exponencial para \rho grande, la serie debe truncarse en un polinomio de grado n_{r}. Esto exige que:

\rho_{0}=n\quad\text{donde}n=n_{r}+l+1\in\{1,2,3,\dots\}	
El número n es el número cuántico principal. Despejando la energía E a partir de la definición de \rho_{0}:

E_{n}=-\frac{\mu e^{4}}{32\pi^{2}\epsilon_{0}^{2}\hbar^{2}}\frac{1}{n^{2}}=-% \frac{E_{1}}{n^{2}}\approx-\frac{13.6\text{eV}}{n^{2}}	
La función de onda completa del átomo de hidrógeno queda determinada por tres números cuánticos (n,l,m):

\Psi_{nlm}(r,\theta,\phi)=\sqrt{\left(\frac{2}{na_{0}}\right)^{3}\frac{(n-l-1)% !}{2n[(n+l)!]^{3}}}e^{-r/na_{0}}\left(\frac{2r}{na_{0}}\right)^{l}L_{n-l-1}^{2% l+1}\left(\frac{2r}{na_{0}}\right)Y_{l}^{m}(\theta,\phi)	
donde a_{0}=\frac{4\pi\epsilon_{0}\hbar^{2}}{\mu e^{2}}\approx 0.529\text{\AA} es el radio de Bohr.2. Aparición del Operador Momento Angular Orbital (\hat{\vec{L}})En la mecánica cuántica, el operador de momento angular orbital se deriva por analogía con la mecánica clásica (\vec{L}=\vec{r}\times\vec{p}) sustituyendo el momento lineal por su operador \hat{\vec{p}}=-i\hbar\nabla:

\hat{\vec{L}}=\hat{\vec{r}}\times\hat{\vec{p}}=-i\hbar(\vec{r}\times\nabla)	
2.1. Componentes y Álgebra de ConmutaciónEn componentes cartesianas:

\hat{L}_{x}=y\hat{p}_{z}-z\hat{p}_{y}=-i\hbar\left(y\frac{\partial}{\partial z% }-z\frac{\partial}{\partial y}\right)	
\hat{L}_{y}=z\hat{p}_{x}-x\hat{p}_{z}=-i\hbar\left(z\frac{\partial}{\partial x% }-x\frac{\partial}{\partial z}\right)	
\hat{L}_{z}=x\hat{p}_{y}-y\hat{p}_{x}=-i\hbar\left(x\frac{\partial}{\partial y% }-y\frac{\partial}{\partial x}\right)	
A partir de las relaciones de conmutación fundamentales [x_{i},p_{j}]=i\hbar\delta_{ij}, se demuestra la álgebra de Lie del grupo de rotaciones SO(3):

[\hat{L}_{i},\hat{L}_{j}]=i\hbar\epsilon_{ijk}\hat{L}_{k}	
Como las componentes de \hat{\vec{L}} no conmutan entre sí, no se pueden medir simultáneamente. Sin embargo, el operador del cuadrado del momento angular total \hat{L}^{2}=\hat{L}_{x}^{2}+\hat{L}_{y}^{2}+\hat{L}_{z}^{2} sí conmuta con cualquiera de las componentes:

[\hat{L}^{2},\hat{L}_{i}]=0	
2.2. Conexión con el Hamiltoniano del HidrógenoEn coordenadas esféricas, el operador \hat{L}_{z} y el operador \hat{L}^{2} toman la forma:

\hat{L}_{z}=-i\hbar\frac{\partial}{\partial\phi}	
\hat{L}^{2}=-\hbar^{2}\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta% }\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{\sin^{2}% \theta}\frac{\partial^{2}}{\partial\phi^{2}}\right]	
Note que el operador \hat{L}^{2} es idéntico a la parte angular del Laplaciano. Por lo tanto, el Laplaciano se escribe como:

\nabla^{2}=\frac{1}{r^{2}}\frac{\partial}{\partial r}\left(r^{2}\frac{\partial% }{\partial r}\right)-\frac{\hat{L}^{2}}{\hbar^{2}r^{2}}	
Y el Hamiltoniano del átomo de hidrógeno reaparece como:

H=\frac{\hat{p}_{r}^{2}}{2\mu}+\frac{\hat{L}^{2}}{2\mu r^{2}}+V(r)	
Las ecuaciones de valores propios del momento angular son satisfechas automáticamente por los armónicos esféricos obteniéndose en la solución angular:

\hat{L}^{2}Y_{l}^{m}(\theta,\phi)=\hbar^{2}l(l+1)Y_{l}^{m}(\theta,\phi)	
\hat{L}_{z}Y_{l}^{m}(\theta,\phi)=\hbar mY_{l}^{m}(\theta,\phi)	
3. Aparición del Operador de Espín (\hat{\vec{S}})3.1. La Necesidad Física del EspínA pesar del éxito de la solución de Schrödinger para el hidrógeno, experimentos como el de Stern-Gerlach (1922) y el análisis del efecto Zeeman anómalo revelaron que las líneas espectrales del hidrógeno se desdoblaban en un número par de sub-niveles (p. ej., un estado s con l=0 se dividía en 2).Dado que el número de proyecciones espaciales de \hat{L}_{z} es siempre impar (2l+1), el momento angular orbital \hat{\vec{L}} resulta insuficiente para explicar la totalidad de los grados de libertad.En 1925, Uhlenbeck y Goudsmit postularon que el electrón posee un momento angular intrínseco llamado Espín (\hat{\vec{S}}).3.2. Origen Algebraico: ¿Por qué S=1/2?Si derivamos la teoría de momentos angulares usando únicamente el álgebra formal [\hat{J}_{i},\hat{J}_{j}]=i\hbar\epsilon_{ijk}\hat{J}_{k} mediante operadores de escalera \hat{J}_{\pm}=\hat{J}_{x}\pm i\hat{J}_{y} (idéntico al método del oscilador armónico), la matemática impone que los valores propios del momento angular total j pueden tomar valores:

j\in\left\{0,\frac{1}{2},1,\frac{3}{2},2,\dots\right\}	
Limitación de \hat{\vec{L}}: El momento angular orbital está amarrado al espacio continuo \mathbb{R}^{3}. Exigir que la función de onda espacial sea univaluada (\Phi(\phi+2\pi)=\Phi(\phi)) descarta las soluciones semi-enteras y fuerza a que l sea entero.Naturaleza de \hat{\vec{S}}: El espín no depende de coordenadas espaciales (r,\theta,\phi). Pertenece a un espacio vectorial discreto e interno (\mathbb{C}^{2} para el electrón). Al no estar sujeto a la condición de univaluación en el espacio real, adopta la representación fundamental de dimensión 2 del grupo SU(2), correspondiente a s=1/2.3.3. Formalización Matricial (Matrices de Pauli)Para s=1/2, los valores propios de \hat{S}^{2} y \hat{S}_{z} son:

\hat{S}^{2}|{}\chi\rangle=\hbar^{2}s(s+1)|{}\chi\rangle=\frac{3}{4}\hbar^{2}|{% }\chi\rangle	
\hat{S}_{z}|{}\chi\rangle=m_{s}\hbar|{}\chi\rangle\quad\text{con}m_{s}\in\left% \{+\frac{1}{2},-\frac{1}{2}\right\}	
El espacio de estados de espín se representa por vectores columna de dos componentes (espinores de Pauli):

|{}\uparrow\rangle=\pmatrix{1}\\ 0\quad(m_{s}=+1/2),\qquad|{}\downarrow\rangle=\pmatrix{0}\\ 1\quad(m_{s}=-1/2)	
Los operadores de espín se relacionan con las Matrices de Pauli \vec{\sigma} mediante \hat{\vec{S}}=\frac{\hbar}{2}\vec{\sigma}:

\hat{S}_{x}=\frac{\hbar}{2}\pmatrix{0}&1\\ 10,\quad\hat{S}_{y}=\frac{\hbar}{2}\pmatrix{0}&-i\\ i0,\quad\hat{S}_{z}=\frac{\hbar}{2}\pmatrix{1}&0\\ 0-1	
Satisfaciendo el álgebra idéntica a la del momento angular:

[\hat{S}_{i},\hat{S}_{j}]=i\hbar\epsilon_{ijk}\hat{S}_{k}	
3.4. Unificación: Momento Angular Total (\hat{\vec{J}}) y Ecuación de DiracLa función de onda completa del electrón en el hidrógeno se convierte en un espinor de dos componentes en el espacio de Hilbert \mathcal{H}=L^{2}(\mathbb{R}^{3})\otimes\mathbb{C}^{2}:

\Psi_{nlm_{l}m_{s}}(r,\theta,\phi)=\psi_{nlm_{l}}(r,\theta,\phi)\otimes\chi_{m% _{s}}=\pmatrix{\psi}_{nlm_{l}}\,a\\ \psi_{nlm_{l}}\,b	
Al incluir la mecánica cuántica relativista (Ecuación de Dirac), el Hamiltoniano de un fermión libre H=c\vec{\alpha}\cdot\vec{p}+\beta m_{e}c^{2} demuestra que el momento angular orbital \hat{\vec{L}} y el espín \hat{\vec{S}} no se conservan por separado:

[H,\hat{\vec{L}}]\neq 0\quad\text{y}\quad[H,\hat{\vec{S}}]\neq 0	
Sin embargo, el Momento Angular Total definido como:

\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}}	
sí conmuta estrictamente con el Hamiltoniano relativista:

[H,\hat{\vec{J}}]=0	
Esto demuestra que el operador de espín \hat{\vec{S}} no es una hipótesis ad-hoc, sino una exigencia fundamental de la invariancia relativista ante rotaciones en el universo.

<!-- LATEXML:START -->
<!-- LATEXML:END -->
