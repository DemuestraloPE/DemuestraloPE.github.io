# Métodos aproximados (no Degenerado)

!!! info "Información del documento"
    - **Área:** Física
    - **Autoría:** [Nombre]
    - **Última actualización:** [Fecha]
    - **Estado:** [Borrador]

## Resumen

[Describe en pocas líneas qué estudia este tema y por qué es importante.]

## Objetivos de aprendizaje

- [Objetivo 1]
- [Objetivo 2]

## Conceptos Previos

$$\rightarrow \hat{H} = \hat{H}_0 + \hat{H}'$$

$$\langle \text{Conocido} \,|\, \hat{H}_0 \,|\, \text{Conocido} \rangle \quad \Rightarrow \quad \hat{H}_0 |n^{(0)}\rangle = E_n^{(0)} |n^{(0)}\rangle$$

$$\rightarrow \hat{H}_0 \gg \hat{H}' \quad \rightarrow \quad \hat{H}' |n^{(0)}\rangle = E_n^{(1)} |n^{(0)}\rangle$$

Las soluciones de $\hat{H}$ pueden ser expresadas por las de $\hat{H}_0$, pero serán una aproximación y serán tomadas con diferentes grados de precisión.

→ Se puede tomar como $\hat{H}_0$ estado inicial

→ $\hat{H}'$ pequeña perturbación a $\hat{H}_0$, recordando que $\hat{H}$ es el objetivo en realidad

*(→ Hamiltoniano conocido)*

$$\rightarrow \hat{H}(\lambda) = \hat{H}_0 + \lambda \hat{H}' \,, \quad 0 \leq \lambda \leq 1$$

Cambio de parámetro continuo con $\lambda$ desde $\hat{H}_0$ hasta donde buscamos $\hat{H}$, asimismo sus valores y vectores propios van variando de igual forma entre el sistema conocido ($\hat{H}_0$) y el deseado $\hat{H}$.

$$\lim_{\lambda \to 0} E_n(\lambda) = E_n^{(0)}$$

Con ello podemos plantear una expansión en series de potencias.

# Perturbation Theory Notes (handwritten)

**Auxiliares**

$$E_n(\lambda) = \sum_{q=0}^{\infty} E_n^{(q)}\,\lambda^q \qquad , \qquad |n(\lambda)\rangle = \sum_{q=0}^{\infty} |n^{(q)}\rangle\,\lambda^q$$

$$\Rightarrow \quad E_n(1) = E_n = \sum_{q=0}^{\infty} E_n^{(q)} \qquad , \qquad |n(1)\rangle = |n\rangle = \sum_{q=0}^{\infty} |n^{(q)}\rangle$$

**Reales**

- $\leadsto$ $|n^{(q)}\rangle$ pueden ser representados en la base de los $|m^{(0)}\rangle$ por ser una base completa

$$\leadsto \quad |n^{(q)}\rangle = \sum_{m} c_{mn}^{(q)}\,|m^{(0)}\rangle \quad \Rightarrow \quad c_{mn}^{(q)} = \langle m^{(0)} | n^{(q)}\rangle$$

Reemplazando en $\hat{H}(\lambda)\,|n(\lambda)\rangle = E_n(\lambda)\,|n(\lambda)\rangle$ :

$$\left[\hat{H}_0 + \lambda\,\hat{H}'\right]|n^{(q)}\rangle\,\lambda^q = \left(E_n^{(q)}\,\lambda^q\right)\left(|n^{(q)}\rangle\,\lambda^q\right)$$

La cual es una serie de potencias:

$$\underbrace{\sum_{q=0}^{\infty} \lambda^q\, \hat{H}_0\,|n^{(q)}\rangle}_{q \to N} + \underbrace{\sum_{q=0}^{\infty} \lambda^{q+1}\, \hat{H}'\,|n^{(q)}\rangle}_{q \to N-1} - \sum_{i=0}^{\infty}\sum_{q=0}^{\infty} \lambda^{i+q}\, E_n^{(i)}\,|n^{(q)}\rangle = 0$$

$$\leadsto\ q \to N-i,\ i>0 \ \Rightarrow\ N \geq i \qquad \leadsto\ 0 \ \text{si}\ i > N$$

$$\sum_{q=0}^{N} \lambda^q\left[\hat{H}_0\,|n^{(q)}\rangle + \hat{H}'\,|n^{(q-1)}\rangle - \sum_{i=0}^{N} E_n^{(i)}\,|n^{(q-i)}\rangle\right] = 0 \qquad 
(|n^{(-1)}\rangle = 0)$$

$$q: \{0, 1, 2, \dots, \infty\} \qquad i: \{0, 1, 2, \dots, \infty\}$$

---

**N=0** $\Rightarrow \hat{H}_0|n^{(0)}\rangle + \hat{H}'|n^{(-1)}\rangle - E_n^{(0)}|n^{(0)}\rangle = 0$

$$\Rightarrow \hat{H}_0|n^{(0)}\rangle = E_n^{(0)}|n^{(0)}\rangle$$

**N=1** $\Rightarrow \hat{H}_0|n^{(1)}\rangle + \hat{H}'|n^{(0)}\rangle - E_n^{(0)}|n^{(1)}\rangle - E_n^{(1)}|n^{(0)}\rangle = 0$

$$\left(\hat{H}_0 - E_n^{(0)}\right)|n^{(1)}\rangle + \left(\hat{H}' - E_n^{(1)}\right)|n^{(0)}\rangle = 0$$

**N=2** $\Rightarrow \hat{H}_0|n^{(2)}\rangle + \hat{H}'|n^{(1)}\rangle - \left(E_n^{(0)}|n^{(2)}\rangle + E_n^{(1)}|n^{(1)}\rangle + E_n^{(2)}|n^{(0)}\rangle\right) = 0$

$$\left(\hat{H}_0 - E_n^{(0)}\right)|n^{(2)}\rangle + \left(\hat{H}' - E_n^{(1)}\right)|n^{(1)}\rangle - E_n^{(2)}|n^{(0)}\rangle = 0$$

---

**Perturbaciones de niveles sin degeneración.**

Si no hay degeneración $\Rightarrow \hat{H}_0|m^{(0)}\rangle = E_m^{(0)}|m^{(0)}\rangle$ ✓

$$q = 1 \Rightarrow \left[\hat{H}_0 - E_n^{(0)}\right]|n^{(1)}\rangle + \left[\hat{H}' - E_n^{(1)}\right]|n^{(0)}\rangle = 0$$

- Ec. No homogénea para $|n^{(1)}\rangle$

$$\Rightarrow \left[\hat{H}_0 - E_n^{(0)}\right]\underbrace{|n^{(1)}\rangle}_{\sum_m c_{mn}^{(1)}|m^{(0)}\rangle} = |A\rangle = \sum_m A_m|m^{(0)}\rangle$$

$$\Rightarrow \sum_{m} \left\{ c_{mn}^{(1)} \left[\hat{H}_0 - E_n^{(0)}\right] - A_m \right\}|m^{(0)}\rangle = 0$$

$$\Rightarrow \sum_m \left\{ c_{mn}^{(1)}\left(E_m^{(0)} - E_n^{(0)}\right) - A_m \right\}|m^{(0)}\rangle = 0$$

$$\Rightarrow\; c_{m'n}^{(1)}\,(E_{m'}^{(0)}-E_n^{(0)})-A_{m'} = 0$$

Si $m'=n \;\Rightarrow\; A_n = 0$

$$\Rightarrow\; |n^{(1)}\rangle = \sum_{m'\neq n} c_{m'n}^{(1)}\,|m'^{(0)}\rangle = \sum_{m'\neq n} \langle m'^{(0)}|n^{(1)}\rangle\,|m'^{(0)}\rangle$$

Proyectando con $\langle m'^{(0)}|$ en la ecuación de orden 1:

$$\Rightarrow\; \langle m'^{(0)}|\left(\hat{H}_0 - E_n^{(0)}\right)|n^{(1)}\rangle + \langle m'^{(0)}|\left(\hat{H}' - E_n^{(1)}\right)|n^{(0)}\rangle = 0$$

$$\Rightarrow\; (E_{m'}^{(0)}-E_n^{(0)})\,c_{m'n}^{(1)} + \langle m'^{(0)}|\hat{H}'|n^{(0)}\rangle - E_n^{(1)}\langle m'^{(0)}|n^{(0)}\rangle = 0$$

Si $m'=n \;\Rightarrow\; \langle n^{(0)}|\hat{H}'|n^{(0)}\rangle = E_n^{(1)}$

Si $m'\neq n \;\Rightarrow\; (E_{m'}^{(0)}-E_n^{(0)})\,c_{m'n}^{(1)} + \langle m'^{(0)}|\hat{H}'|n^{(0)}\rangle = 0$

$$\Rightarrow\; c_{m'n}^{(1)} = \frac{\langle m'^{(0)}|\hat{H}'|n^{(0)}\rangle}{E_n^{(0)} - E_{m'}^{(0)}} \;\Rightarrow\; |n^{(1)}\rangle = \sum_{m'\neq n} \frac{\langle m'^{(0)}|\hat{H}'|n^{(0)}\rangle}{E_n^{(0)} - E_{m'}^{(0)}}\,|m'^{(0)}\rangle$$

$$E_n^{(1)} = \langle n^{(0)}|\hat{H}'|n^{(0)}\rangle$$

$\langle M^{(1)} \rangle = 0$

---

$\otimes \quad \left[\hat{H}_0 - E_n^{(0)}\right]|n^{(1)}\rangle + \left[\hat{H}' - E_n^{(1)}\right]|n^{(0)}\rangle = \sum_{l \neq n} E_n^{(1)}|n^{(1)}\rangle$

$\rightsquigarrow \langle m^{(0)}|\hat{H}_0 = \mathcal{E}_m \langle m^{(0)}|$

$\rightsquigarrow$ No degenerado $\rightarrow E_n^{(0)} = \mathcal{E}_n$ del no perturbado

$\rightsquigarrow (\mathcal{E}_m - \mathcal{E}_n)\, c_{mn}^{(1)} + \langle m^{(0)}|\hat{H}'|n^{(0)}\rangle - \sum_{l \neq n} E_n^{(1)} \langle m^{(0)}|n^{(1)}\rangle = 0$

**Si $m = n$** $\Rightarrow \langle n^{(0)}|\hat{H}'|n^{(0)}\rangle - \sum_{l \neq n}^{n-1} E_n^{(1)} \langle n^{(0)}|n^{(1)}\rangle = E_n^{(1)}$

$\rightsquigarrow$

**Si $m \neq n$** $\Rightarrow (\mathcal{E}_m - \mathcal{E}_n)\, c_{mn}^{(1)} = -\langle m^{(0)}|\hat{H}'|n^{(0)}\rangle + \sum_{l \neq n} E_n^{(1)} \langle m^{(0)}|n^{(1)}\rangle$

$\Rightarrow c_{mn}^{(1)}|m^{(0)}\rangle = |n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)}|\hat{H}'|n^{(0)}\rangle - \sum_{l \neq n} E_n^{(1)} \langle m^{(0)}|n^{(1)}\rangle}{\mathcal{E}_n - \mathcal{E}_m}\, |m^{(0)}\rangle$

---

$E_n^{(0)} = \mathcal{E}_n \quad , \quad |n^{(0)}\rangle = |n^{(0)}\rangle$

$E_n^{(1)} = \langle n^{(0)}|\hat{H}'|n^{(0)}\rangle \quad , \quad |n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)}|\hat{H}'|n^{(0)}\rangle}{\mathcal{E}_n - \mathcal{E}_m}\, |m^{(0)}\rangle$
