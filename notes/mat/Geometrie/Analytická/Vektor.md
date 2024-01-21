# Vektor
(Nenulový)
Množina všech [orientovaných úseček](Orientovaná%20úsečka.md) které mají stejnou velikost a směr.

Značení: $\vec{u}$, $\vec{AB}$

> [!SENTENCE]
> Mějme vektor $\vec{u}$ určený orientovanou úsečkou $AB$, kde $A=[x_A;y_A;z_A]$ a $B=[x_B;y_B;z_B]$
> Pak souřadnice vektoru $\vec{u}$ jsou čísla $x_u=x_B-x_A$, $y_u=y_B-y_A$ a $z_A=z_B-z_A$


$\vec{AB}=B-A$
$\vec{BA}=A-B$

![[Vektor 2023-12-15 11.10.30.excalidraw]]
$\textcolor{red}{A-K=D-M=M-C=K-B}$
$\textcolor{green}{B-K=M-D=C-M=K-A}$
$\textcolor{purple}{C-K=M-A}$
$\textcolor{brown}{L-K=M-N}$
$\textcolor{darkred}{M-K=D-A=C-B}$
$\textcolor{cyan}{N-K=M-L}$
$\textcolor{yellow}{D-K=M-B}$

## Sčítání
![[Posunutí o vektor 2023-12-15 11.33.14.excalidraw]]

$(\vec{u}=C-B;\vec{v}=B-A)\Rightarrow \vec{u}+\vec{v}=C-A$
→ $\vec{u}+\vec{v}=C-B+B-A=C-A$


## Odčítání

> [!SENTENCE]
> Odečítat vektor znamená přičítat opačný vektor

$\vec{u}-\vec{v}=\vec{u}+(-\vec{v})$

## Násobení

> [!SENTENCE]
> Násobek nenulového vektoru $\vec{u}=B-A$ číslem $k\in\mathbb{R}$ je vektor $k\vec{u}=C-A$ kde $|AC|=k|AB|$ a $C\in\stackrel{\leftrightarrow}{AB}$

Pokud $k > 0$, $C\in\stackrel{\rightarrow}{AB}$ 
Pokud $k<0$, $C\in\stackrel{\leftarrow}{AB}$
Pokud $k=0$,$\vec{u}=\vec0$,$C=A$

## Lineární kombinace
vektorů $\vec{u}$,$\vec{v}$ a $\vec{w}$ je vektor
$p\vec{u}+q\vec{v}+r\vec{w}$, kde $p,q,r\in\mathbb{R}$

## Lineárně nezávislé vektory
Vektor není lineární kombinací jiných dvou vektorů.
Pokud tedy nesedí lineární kombinace, jde o případ $\vec{u},\vec{b},\vec{a}$ nejsou lineárně závislé

## Délka vektoru

$\sqrt{a^2+b^2+c^2}$

$|\vec{KL}|=?$
$K=[\frac52;-7;3]$
$L=[\frac32;1;4]$
$\vec{KL}=L-K=(-1;8;1)$
$|\vec{KL}|=|(-1;8;1)|=\sqrt{(-1)^2+8^2+1^2}=\sqrt{66}$



---

## Příklad

$A=[1;3;7]$
$B=[-1;1;2]$
$\vec{u}=\vec{AB}=B-A$

$x_u=x_B-x_A=-1-1=-2$
$y_u=y_B-y_A=1-3=-2$
$z_u=z_B-z_A=2-7=-5$
$\vec{u}=[-2;-2;5]$

---

$\vec{u}=(1;-3;2)$
$\vec{v}=(2;1;1)$
$\vec{u}+\vec{v}=(3;-2;3)$
$\vec{u}-\vec{v}=(-1;-4;1)$

----

prav 6 uhelnik $ABCDEF, \vec{u}=C-A,\vec{v}=B-D,\vec{w}=F-B$
$\vec{u}+\vec{v}+\vec{w}=$

![[Vektor 2023-12-15 12.16.27.excalidraw]]

$\vec{v}+\vec{w}=\vec{DF}$
$\vec{DF}=\vec{CA}$
$\vec{DF}+\vec{AC}=\vec0$

---

$\vec{u}=2(3;-1;1)+2(1;2;5)$
$\vec{u}=(6;-2;2)+(2;4;10)$
$\vec{u}=(8;2;12)$

---

a)
$\vec{u}=(-2;4;-6)$
$\vec{a}=(1;3;-2)$ $\vec{b}=(2;1;1)$

$\vec{u}=p\vec{a}+q\vec{b}|\exist p,q\in\mathbb{R}$?

$x:-2=p1+q2$
$-2=p+2q$
$y:4=p3+q1$
$4=3p+q$
$r:-6=p(-2)+q1$
$-6=-2p+q$

$-2=p+2q$
$p=-2-2q$
$4=3p+q$
$4=3(-2-2q)+q$
$4=-6-6q+q$
$4=-6-5q$
$10=-5q$
$q=-2$

$p=-2-2q$
$p=-2-2(-2)$
$p=-2+4=2$

$-6=-2p+q$
$-6=-2(2)-2$
$-6=-4-2$ 

b)
$\vec{u}=(1;1;2)$
$\vec{a}=(-1;0;1)$ $\vec{b}=(2;2;3)$

$\vec{u}=p\vec{a}+q\vec{b}|\exist p,q\in\mathbb{R}$?

$x:1=-1p+2q$
$y:1=0+2q$
$z:2=1p+3q$

$q=\frac12$
$1=-p+2q$
$1=-p+2*\frac12$
$1=-p+1$
$p=0$

$2=1*0+3*\frac12$
$2=\frac32$ neni

---

$S_p=(4\pi r^2)/2$
$S_k=\sqrt{r^2+v^2}$
$S_k=\sqrt{r^2+(6r)^2}=\sqrt{r^2+36r^2}=\sqrt{37r^2}=r\sqrt{37}$
$S_p:S_k=2\pi r^2:r\sqrt{37}=2\pi r:\sqrt{37}$
