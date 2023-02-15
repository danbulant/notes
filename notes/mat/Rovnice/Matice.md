---
tags: [mat, mat/rovnice ]
---
# Matice
Slouží k řešení [Soustavy rovnic](Soustavy%20rovnic.md).

Například:
$a_{11}x+a_{12}y+a_{13}z=b_1$
$a_{21}x+a_{22}y+a_{23}z=b_2$
$a_{31}x+a_{32}y+a_{33}z=b_3$

| $a_{11}$ | $a_{12}$ | $a_{13}$ |
| -------- | -------- | -------- |
| $a_{21}$ | $a_{22}$ | $a_{23}$ |
| $a_{31}$ | $a_{32}$ | $a_{33}$ |

## Rozšířená rovnice
| $a_{11}$ | $a_{12}$ | $a_{13}$ | $b_1$ |
| -------- | -------- | -------- | ----- |
| $a_{21}$ | $a_{22}$ | $a_{23}$ | $b_2$ |
| $a_{31}$ | $a_{32}$ | $a_{33}$ | $b_3$ |

- Když je hodnost rozšířené rovnice větší než hodnost matice, rovnice nemá řešení.

## Nulový řádek
Řádek který má samé nuly
Nepočítá se.
## Hodnost
Počet nenulových řádků v matici.
## Determinant
U matice se sečtou násobky diagonal (xyz..) a odečtou násobky opačných diagonál (...zyx).
Pokud je hodnota 0, je rovnice singulární (nekonečně mnoho řešení, nebo žádné)

---

$3x-3y-z=1$
$x+y+z=1$
$x-3y-2z=1$

$det A = -2$
$det A_x = -4$
$det A_y=-6$
$det A_z=8$

$x=\frac{det A_x}{det A}=\frac{-4}{-2}=8$
$y=\frac{det A_y}{det A}=\frac{-6}{-2}=3$
$z=\frac{det A_z}{det A}=\frac{8}{-2}=-4$

---

$2a-3b+c-d=4$
$a+3b+2c+3d=2$
$a+b-2c+d=4$
$-a+2b-3c+2d=2$

$det A=-44$
$det A_a=-76$
$det A_b=44$
$det A_c=36$
$det A_d=-72$

$a=\frac{19}{11}$
$b=-1$
$c=-\frac9{11}$
$d=\frac{18}{11}$


---

$2x-3y=1$
$-4x+7y=1$

$4x-6y=2$
$-4x+7y=1$

$y=3$

$-4x+7*3=1$
$-4x+21=1$
$-4x=-20$
$x=5$

---

$x(x-3)(x+2)=0$

$x^3-3x^2+2x^2-6x=0$
$x^3-1x^2-6x=0$
$x_1=0$
$x_2 = 3$
$x_3=2$

$K=[0;3;2]$

---

$(x+3)(x^2-3)=0$

$x+3=0$
$x_1=-3$
$x^2-3=0$
$x_2=\sqrt{3}$

$K=[-3;\sqrt{3}]$

---

$\frac{x^2-5}{x+\sqrt{5}}=0$
$x^2-5=0$
$x_1=\sqrt{5}$
$x_2=-\sqrt5$
$[x\neq-\sqrt5]$

$K=[\sqrt5]$

---

$\frac{x^2-25}{x-5}=3$
$x^2-25=3x-15$
$x^2-3x-10=0$
$[x\neq5]$
$D=9-4*1*(-10)=49$
$x_1=\frac{3+7}2=5$
$x_2=\frac{3-7}2=-2$
$K=[-2]$

---

$(3x+5)(2-2x)\ge 0$

$3x+5\ge0$ => $x\ge-\frac53$
$3-2x\ge0$ =>$x\le\frac32$
$3x+5\le0$ => $x\le-\frac53$
$3-2x\le0$ =>$x\ge\frac32$

$x\in\lt-\frac53;\frac32\gt$
$K=\{-\frac53\le x\le\frac32\}$

---
$(2x-3)(3+2x)\le0$

$2x-3\le0$
$3+2x\ge0$
$2x-3\ge0$
$3+2x\le0$

$x\in\lt\frac32;\frac32\gt$
$K=\{-\frac32\le x \le \frac32\}$
