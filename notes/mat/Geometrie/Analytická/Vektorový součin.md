# Vektorový součin

> [!SENTENCE]
> Vektorovým součinem vektorů $\vec{u}$ a $\vec{v}$ je vektor $\vec{w}$, pro který platí, že:
> 1. $\vec{w}\perp\vec{u}$ a $\vec{w}\perp\vec{v}$
> 2. $\vec{u}$,$\vec{v}$ a $\vec{w}$ tvoří pravotočivou bázi (stejně jako u KSS)
> 3. jeho velikost je rovina kterou vektoru $\vec{u}$ a $\vec{v}$ zadávají


![[Vektorový součin 2024-01-05 12.05.56.excalidraw]]

$\vec{w}=|\vec{u}||\vec{v}|\sin\delta=S\square$

## Značení
$\vec{u}\times\vec{v}=-\vec{v}\times\vec{u}$ - **záleží na pořadí**

## Počítání
$\vec{u}=(x_u;y_u;z_u)$
$\vec{v}=(x_v;y_v;z_v)$


|                        | y     | z   | x   | y   |
| ---------------------- | ----- | --- | --- | --- |
| $\vec{u}$              | $y_u$ | $z_u$    | $x_u$    | $y_u$    |
| $\vec{v}$              | $y_v$      | $z_v$    | $x_v$    | $y_v$    |
| $\vec{u}\times\vec{v}$ | $y_uz_v-y_vz_u$      | $z_ux_v-z_vx_u$    | $x_uy_v-x_vy_u$    |     |

![[Vektorový součin 2024-01-05 12.19.14.excalidraw]]

---

## Příklad

$\vec{a}=(1;3;-1)$
$\vec{b}=(2;4;5)$
$\vec{a}\times\vec{b}=(3*5-4(-1);-1*2-5*1;1*4-2*3)=(19;-7;-2)$

---

$A=[1;3;1]$
$B=[3;-1;1]$
$C=[1;4;-1]$
$S_{\triangle ABC}=?$
$\vec{BA}=(1-3;3+1;1-1)=(-2;4;0)$
$\vec{BC}=(1-3;4+1;-1-1)=(-2;5;-2)$
$\vec{BA}\times\vec{BC}=(4(-2)-5*0;0(-2)-(-2)(-2);-2*5-(-2)4)=(-8;-4;-2)$
$|\vec{BA}\times\vec{BC}|=\sqrt{8^2+4^2+2^2}=\sqrt{64+16+4}=\sqrt{84}$