---
title: Átomo de hidrógeno
---

# Átomo de hidrógeno

## Modelo físico

El átomo de hidrógeno consta de un protón, de masa \(M\) y carga \(+e\), y un
electrón, de masa \(m_e\) y carga \(-e\). El movimiento relativo se describe
mediante una partícula de masa reducida

$$
\mu=\frac{m_eM}{m_e+M}\approx m_e
$$

en el potencial de Coulomb

$$
V(r)=-\frac{e^2}{4\pi\epsilon_0r}.
$$

## Ecuación de Schrödinger y separación de variables

La ecuación independiente del tiempo es

$$
-\frac{\hbar^2}{2\mu}\nabla^2\Psi(\vec r)+V(r)\Psi(\vec r)=E\Psi(\vec r).
$$

Como el potencial depende solo de la distancia al núcleo, usamos coordenadas
esféricas:

$$
\nabla^2=
\frac{1}{r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)
+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}.
$$

Buscamos una solución separable \(\Psi(r,\theta,\phi)=R(r)Y(\theta,\phi)\).
La ecuación angular queda

$$
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2Y}{\partial\phi^2}
=-l(l+1)Y,
$$

y la ecuación radial es

$$
\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\left[
\frac{2\mu}{\hbar^2}\left(E+\frac{e^2}{4\pi\epsilon_0r}\right)
-\frac{l(l+1)}{r^2}
\right]R=0.
$$

### Números cuánticos angulares

Separamos de nuevo \(Y(\theta,\phi)=\Theta(\theta)\Phi(\phi)\). La parte
azimutal satisface

$$
\frac{d^2\Phi}{d\phi^2}+m^2\Phi=0,
\qquad
\Phi(\phi)=e^{im\phi}.
$$

La condición de univaluación \(\Phi(\phi+2\pi)=\Phi(\phi)\) exige
\(m\in\mathbb Z\). La solución polar es una función asociada de Legendre; la
regularidad en los polos requiere

$$
l\in\mathbb N_0,
\qquad
|m|\leq l.
$$

Las soluciones angulares son los armónicos esféricos. Con una convención usual
para las funciones asociadas de Legendre,

$$
Y_l^m(\theta,\phi)=
(-1)^m
\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}\,
P_l^m(\cos\theta)e^{im\phi}.
$$

## Solución radial y niveles de energía

Con el cambio \(u(r)=rR(r)\), la ecuación radial toma la forma

$$
-\frac{\hbar^2}{2\mu}\frac{d^2u}{dr^2}
+\left[
-\frac{e^2}{4\pi\epsilon_0r}
+\frac{\hbar^2l(l+1)}{2\mu r^2}
\right]u=Eu.
$$

Para estados ligados, \(E<0\). Definimos

$$
\kappa=\frac{\sqrt{-2\mu E}}{\hbar},
\qquad
\rho=2\kappa r,
\qquad
\rho_0=\frac{\mu e^2}{2\pi\epsilon_0\hbar^2\kappa}.
$$

La ecuación en la variable adimensional \(\rho\) es

$$
\frac{d^2u}{d\rho^2}
+\left[
\frac{\rho_0}{\rho}-\frac14-\frac{l(l+1)}{\rho^2}
\right]u=0.
$$

La solución regular y normalizable se escribe
\(u(\rho)=\rho^{l+1}e^{-\rho/2}v(\rho)\). La función \(v\) satisface

$$
\rho\frac{d^2v}{d\rho^2}
+(2l+2-\rho)\frac{dv}{d\rho}
+(\rho_0-l-1)v=0.
$$

Para que la serie asociada termine en un polinomio, debe cumplirse
\(\rho_0=n\), con \(n=n_r+l+1\) y \(n=1,2,3,\ldots\). De esta condición se
obtienen los niveles de energía

$$
E_n=-\frac{\mu e^4}{32\pi^2\epsilon_0^2\hbar^2}\frac{1}{n^2}
\approx-\frac{13.6\ \text{eV}}{n^2}.
$$

El radio de Bohr es

$$
a_0=\frac{4\pi\epsilon_0\hbar^2}{\mu e^2}
\approx 0.529\ \text{\AA}.
$$

La función radial normalizada puede expresarse con los polinomios asociados de
Laguerre:

$$
R_{nl}(r)=
\left(\frac{2}{na_0}\right)^{3/2}
\sqrt{\frac{(n-l-1)!}{2n(n+l)!}}\,
e^{-r/(na_0)}
\left(\frac{2r}{na_0}\right)^l
L_{n-l-1}^{2l+1}\left(\frac{2r}{na_0}\right).
$$

Por tanto, la función de onda espacial es
\(\Psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_l^m(\theta,\phi)\).

## Momento angular orbital

En mecánica clásica, \(\vec L=\vec r\times\vec p\). Al sustituir el momento por
su operador \(\hat{\vec p}=-i\hbar\nabla\), obtenemos

$$
\hat{\vec L}=\hat{\vec r}\times\hat{\vec p}
=-i\hbar(\vec r\times\nabla).
$$

Sus componentes satisfacen el álgebra de conmutación

$$
[\hat L_i,\hat L_j]=i\hbar\epsilon_{ijk}\hat L_k,
\qquad
[\hat L^2,\hat L_i]=0.
$$

En coordenadas esféricas,

$$
\hat L_z=-i\hbar\frac{\partial}{\partial\phi},
$$

$$
\hat L^2=-\hbar^2\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
\right].
$$

Así, el Hamiltoniano central puede escribirse como

$$
\hat H=
-\frac{\hbar^2}{2\mu r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)
+\frac{\hat L^2}{2\mu r^2}
+V(r).
$$

Los armónicos esféricos son funciones propias simultáneas de \(\hat L^2\) y
\(\hat L_z\):

$$
\hat L^2Y_l^m=\hbar^2l(l+1)Y_l^m,
\qquad
\hat L_zY_l^m=\hbar mY_l^m.
$$

## Espín del electrón

El momento angular orbital no explica por sí solo todos los resultados
experimentales, como la estructura fina y el efecto Zeeman anómalo. El electrón
posee además un momento angular intrínseco: el espín. Para el electrón,
\(s=\frac12\), con proyecciones \(m_s=\pm\frac12\).

Los estados de espín se representan con dos componentes:

$$
|\uparrow\rangle=
\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|\downarrow\rangle=
\begin{pmatrix}0\\1\end{pmatrix}.
$$

Los operadores de espín se relacionan con las matrices de Pauli mediante
\(\hat{\vec S}=\frac{\hbar}{2}\vec\sigma\):

$$
\hat S_x=\frac{\hbar}{2}
\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\hat S_y=\frac{\hbar}{2}
\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\hat S_z=\frac{\hbar}{2}
\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

También satisfacen relaciones de conmutación de momento angular:

$$
[\hat S_i,\hat S_j]=i\hbar\epsilon_{ijk}\hat S_k.
$$

## Momento angular total

El espacio de estados que incluye el espín es
\(\mathcal H=L^2(\mathbb R^3)\otimes\mathbb C^2\). El momento angular total se
define como

$$
\hat{\vec J}=\hat{\vec L}+\hat{\vec S}.
$$

En la teoría de Dirac, las partes orbital y de espín no se conservan
individualmente, mientras que el momento angular total sí se conserva:

$$
[\hat H,\hat{\vec L}]\neq0,
\qquad
[\hat H,\hat{\vec S}]\neq0,
\qquad
[\hat H,\hat{\vec J}]=0.
$$

## Referencias

- [Añade aquí los libros y las páginas consultadas.]
