# Parametricke vyjadreni primky
 
## Způsoby zadání přímky

- 2 body
- bodem a vektorem

> [!NOTE]
> Rovnice $X=A+t\vec{u},t\in\mathbb{R}$ se nazává **parametrické vyjádření přímky** určené bodem $A$ a vektorem $\vec{u}$. Vektor $\vec{u}$ se nazývá **směrový vektor** této přímky.

Rozepisujeme do souřadnic: $A=\{x_a;y_a\}$ $\vec{u}=(x_u;y_u)$ $X=[x;y]$

$X=A+t\vec{u}$
$x=x_A+txu$ $t\in\mathbb{R}$
$y=y_A+tyu$

## Normálový vektor

> [!NOTE]
> Vektor který je kolmý ke směru vektoru přímky se nazývá **normálový vektor**.

### Obecná rovnice přímky

$ax+by+c=0$
$(a,b,c\in\mathbb{R});ab\not=0$

### Příklady
Napište par. vyj. přímky $p$ dané:

1. bodem $C=[-1;3]$ a vektorem $\vec{u}=(0;4)$

$X=C+t\vec{u}$
$x=-1+0t$
$y=3+4t$

2. body $K=[3;-2]$ a $L=[0;5]$

$\vec{KL}=L-K=[0;5]-[3;-2]=(-3;7)$

$X=K+t\vec{KL}$
$x=3-3t$
$y=-2+7t$

Najděte souřadnice alespoň 3 bodů, které leží na přímce $p$ (viz předchozí, mimo K a L)

$X_1=[3-3t;-2+7t]=[6;-9]$ ($t=-1$)
$X_2=[3-3t;-2+7t]=$ ($t=2$)

Napište směrový vektor přímky
**1**
$x=11t$
$y=5$
$t\in\mathbb{R}$
$\vec{s_a}=(11;0)$

**2**
$x=1-2t$
$y=6+8t$
$t\in\mathbb{R}$
$\vec{s_b}=(-2;8)$

Napište souřadnice nějakého vektoru $\vec{u}$, který je kolmý k přímce
**1** a

$\vec{s_{a2}}=(0;11)$

**2** b

$\vec{s_{b2}}=(8;2)$
prohodí se pořadí a u jednoho se změní znaménko

Jsou zadané vektory směrové u přímky $\over{\leftrightarrow}{AB}$?

$A=[1;3]$
$B=[-1;5]$
$\vec{s}=\vec{AB}=B-A=(-2;2)$

$v_1=(1;2)$ ne
$v_2=(3;-3)$ ano ($*\frac{-2}3$)
$v_3=(1;-1)$ ano ($*-2$)
$v_4=(2;2)$ ne
$v_5=(2;-2)$ ano ($*-1$)

---

Napište obecnou rovnici přímky $m$, $m=\overleftrightarrow{AB}$
$A=[1;3]$
$B=[-2;1]$

Směrový vektor $\vec{s_m}=\vec{AB}=B-A=(-3;-2)$
$\vec{n_m}=(-2;3)$
$ax+by+c=0$
$-2x+3y+c=0$

pomocí bodu ($A$ nebo $B$) získáme $C$
$A\in m:$
$x=1$
$y=3$

$-2*1+3*3+c-0$
$c=-7$

Obecná rovnice:
$m: -2x+3y-7=0$

---

$A=[-1;5]$
$\vec{n}=(1;3)$

$k:A\in k;\vec{n}$ .. norm vektor

$ax+by+c=0$
$1x+3y+c=0$
$-1+15+c=0$
$14+c=0$
$c=-14$

$x=+3y-14=0$

----

Které přímky jsou $\parallel$, které totožné a které různoběžné?

j: $2x+3y-4=0$
k: $x-y+3=0$
l: $-2x+2y+6=0$
m: $-x-\frac32y+2=0$

j: normal $\vec{j}=(2;3)$
k: normal $\vec{k}=(1;-1)$
l: normal $\vec{l}=(-2;2)$
m: normal $\vec{m}=(-1;-\frac32)$

$m=j*(-\frac12) \Rightarrow j \parallel m$
$l=k*(-2)\Rightarrow l\parallel k$

$-4*(-2)=2\Rightarrow j=m$
absolutní člen (třetí; $c$) má stejný vztah jako vektor

----

$R=[2;3]$
p: $x-3y+2=0$

$r:..?$
$R\in r$
$r\parallel p$

$\vec{n_p}=(1;-3)=\vec{n_r}$

$x-3y+2=..$
$2-3*3+2=-5$
r: $x-3y+7=0$

----

$A=[1;3]$
p: $2x+y-1=0$

$2x+y-5=0$

---

$A=[-1;2]$
p: $-x+3y-7=0$

jiz stejne

---

$3x+5y-1=0$
$-2x+3y+1=0$

ruznobezne

$3x+5y-1=0$
$-2x+3y+1=0$

$3x=1-5y$
$x=\frac{1-5y}3$

$-2(\frac{1-5y}3)+3y+1=0$

$10y+9y-2+3=0$
$19y+1=0$
$y=\frac1{19}$

$3x+5*\frac1{19}-1=0$
$x=\frac8{19}$

$R=[\frac8{19};-\frac1{19}]$

---

$x=3-2t$
$y=-1+t$
pro $t\in\mathbb{R}$
$\vec{s_k}=(-2;1)$
směrový vektor

l: $4x-y+5=0$
$\vec{n_l}=(4;-1)$
normálový vektor

převod normál na směrový
$\vec{s_l}=(1;4)$

$\vec{s_k}=(-2;1)$
různoběžné (neexistuje $p\in\mathbb{R}\backslash\{0\}:\vec{s_k}=p\vec{s_l}\Rightarrow k \times l$)

společný bod:
$k\cap l:4(3-2t)-(-1+t)+5=0$
doplnilo se $x$ a $y$ z $k$ do rovnice v $l$
$z\in k\cap l$

$12-8t+1-t+5=0$
$t=2$

$x=3-2t=3-2*2=-1$
$y=-1+t=-1+2=1$
$z=[-1;1]$

---

c: $x=3-3s$
$y=3+s$
pro $s\in\mathbb{R}$

$\vec{s_c}=(-3;1)$

d: $x=1+12t$
$y=2-4t$
pro $t\in\mathbb{R}$
$\vec{s_d}=(12;-4)$

$k=-4$
$\vec{s_d}=-4*\vec{s_c}$

$c\parallel d$

$č\in c;č=[3;3] \Leftarrow [3-3s;3+s];s=0$
$č\in d?$

d..
$3=1+12t$
$3=2-4t$
$2=12t$
$1=-4t$
$t=\frac2{12}=\frac16$
$t=-\frac14$
$č\not\in d$

nejsou stejné jsou ale pararelné

---

p: $2x-y+1=0$
q: $3x+0y+2=0$

$\vec{n_p}=(2;-1)$
$\vec{n_q}=(3;0)$

$p\times q$

$c\in p \cap q$

$6x-3y+3=0$
$-6x-4=0$

$-3y-1=0$
$3y=1$
$y=\frac13$

$2x-\frac13+1=0$
$2x+\frac23=0$
$2x=-\frac23$

$x=-\frac13$

$c=[-\frac13;\frac13]$

---

