---
tags: [mat, mat/funkce]
---
# Exponenciální funkce
Exponenciální funkce o základu $a$ je funkce $y=a^x$, kde $a\in\mathbb{R}^+-\{1\}$

## Vtip
přijde matematik a objedná si pivo.
přijde další matematik a objedná si půlku piva..
| matematik. č. | část piva                         |
| ------------- | --------------------------------- |
| 0             | 1                                 |
| 1             | $\frac12$                         |
| 2             | $\frac14$                         |
| 3             | $\frac18$                         |
| x             | $y=\frac1{2x}=2^{-x}=(\frac12)^x$ |
| -1            | 2                                 |
| -3            | 8                                 |
| $\frac12$     | $\sqrt\frac12$                    |

## Vlastnosti
- $x\in\mathbb{R}$
- exponenciála (typ grafu)
- $D=\mathbb{R}$
- $H=(0;\infty)=\mathbb{R}^+$
- je prostá (na celém $D$)
- extrémy nemá
- je omezena zdole 
- není sudá ani lichá
- graf prochází (v základním tvaru) $[0;1]$

$f: y=a^x$

Rozšířený tvar:
$f: y=a^{x-n}+m$

$n$ udává posun doprava ($+n$ pro posun doleva o $n$).
$m$ udává posun nahoru ($-m$ pro posun dolů o $m$).
 
a nesmí být $\lt0;=0;=1$

pro $a < 1$, graf klesá
pro $a > 1$, graf roste

## Převody
$\frac{x^p}{x^q}=x^{p-q}$
$x^p*x^q=x^{p+q}$
$(x^a)^b=(x^b)^a=x^a*b$
$x^{-p}=\frac1{x^p}$
$(\frac{x}y)^p=(\frac{y}x)^{-p}$
$\sqrt[a]{x^b}=x^{\frac{b}a}=\sqrt[a]x^b$
$x^0=1;\space [x\ne0]$
$x^py^p=(xy)^p$

## Příklady
![](Pasted%20image%2020221005111551.png)

graf $\frac12^x$
![](Pasted%20image%2020221004142221.png)

---

S použitím grafů exp.fcí porovnejte (doplněny znaménka (ne)rovnosti):

a) $1.5^p > 1.5^r$

$p > r$

b) $(\frac37)^{6.24}<1$

c) $(\frac85)^{2\pi} > (\frac85)^{0.5\pi}$

---

### Řešte rovnice pro $x\in\mathbb{R}$

$(\frac13)^{x-4}=(\frac13)^{19x+2}$

$x-4=19x+2$
$-6=18x$
$x=-\frac13$

$K=\{\frac13\}$

---

$15^3*15^{x2}=15^{-x}$

$15^{3+2x}=15^{-x}$
$3+2x=-x$
$x=-1$

$K=\{-1\}$

---

$\frac{6.8^{x^2}}{6.8^3}=6.8^{-2}$

$6.8^{x^2-3}=6.8^{-2}$
$x^2-3=-2$
$x^2-1=0$
$(x-1)(x+1)=0$

$K=\{-1;1\}$

---

$13^{2+x}=(\frac1{13})^x$

$13^{2+x}=13^{-x}$
$2+x=-x$
$-2x=2$
$x=-1$

$K=\{-1\}$

---

$25^x=5^2*5^3:5^5$
$25^x=5^{2+3-5}$

$25^x=5^5:5^5$
$25^x=5^0$
$x=0$

$K=\{0\}$

---

$\sqrt{3}^5=3^{2x-1}$

$3^{\frac52}=3^{2x-1}$
$\frac52=2x-1$
$\frac72=2x$
$x=\frac74$

---

$8^{x+3}=1$

$8^{x+3}=8^0$
$x+3=0$
$x=-3$

$K=\{-3\}$

---

$2^{x+1}3^{x+1}=6$
$6^{x+1}=6^1$
$x+1=1$
$x=0$

$K=\{0\}$

----

$\frac{27^x3^2\sqrt3}{g^x}=1$

---

$\sqrt[5]{(\frac43)^{1-x}}=(\frac34)^{x+3}$

$(\frac43)^{\frac{1-x}5}=(\frac43)^{-x+3}$
$\frac{1-x}5=-x-3$
$1-x=-5x-15$
$1=-4x-15$
$16=-4x$
$x=-4$

$K=\{-4\}$

---

$0.4^{2x}*2.5=(\frac25)^{x+4}$

$(\frac25)^{2x}\frac52=(\frac25)^{x+4}$
$(\frac25)^{2x}(\frac25)^{-1}=(\frac25)^{x+4}$
$(\frac25)^{2x-1}=(\frac25)^{x+4}$
$2x-1=x+4$
$x=5$
$K=\{5\}$

---

$36=\frac{6^{x-5}}{\sqrt6}$
$6^2=\frac{6^{x-5}}{6^{\frac12}}$
$6^2=6^{x-5-\frac12}$
$2=x-5-\frac12$
$x=\frac{15}2$
$K=\{\frac{15}2\}$

---

$\frac{\sqrt[3]7}{49^{x-2}}=343^x*\frac17$
$\frac{7^{\frac13}}{7^{2*(x-2)}}=7^{3x}*7^{-1}$
$7^{\frac13-2x+4}=7^{3x-1}$
$\frac13-2x+4=3x-1$
$\frac13+5=5x$
$1+15=15x$
$16=15x$
$x=\frac{16}{15}$

---

$2^x=32-2^x$
$2^x=2^5-2^x$
$2^x+2^x=2^5$
$(2*2)^x=2^5$
$2^x=2^4$
$x=4$

---

$5^{x+2}2-5^{x+1}=45$
$5^x5^22-5^{x+1}=9*5 /:5$
$5^x5*2-5^x=9$
$10*5^x-5^x=9$
$9*5^x=9$
$5^x=1$
$x=0$

---

$6^{x-1}=5+6^{x-2}$
$6^x*6^{-1}=5+6^x*6^{-2}$
$6^x6^{-1}-6^x6^{-2}=5$

$6^x=t$
$t*6^{-1}=5+t*6^{-2}$
$\frac{t}6 = 5+\frac{t}{36}/*36$
$6t=180+t$
$6t-t=180$
$5t=180$
$t=36$
$6^x=36$
$x=2$

$\frac{6^x}6-\frac{6^x}{36}=5 /*36$
$6*6^x-6^x=180$
$5*6^x=180/:5$
$6^x=36$
$x=2$

---

$5^x-5^x*5=500$
$-4*5^x=500$
$5^x=-125$
$5^x=(-5)^3$

nemá řešení

---

$5^{2x}+3*5^x=10$
$5^x*5^x+3*5^x=2*5$
$(5^x)^2-3*5^x=10$
$c^2-3c=10$
$c^2-3c-10=0$
$(c-5)(c+1)=0$

$c=5$
$5^x=5$
$x=1$

$c=-2$
$5^x=-2$
druhá větev nemá řešení 

$K=\{1\}$

---

$121^x=22+9*11^x$
$11^{2x}=22+9*11^x$
$(11^x)^2-9*11^x=22$
$t=11^x$
$t^2-9t=22$


---

$3^{x+2}+9^{x+1}=810$
$3^x3^2+9^x9=9^2*10$
$3*9^x+9*9^x-9^2*10=0$
$12*9^x=9^2*10/2$
$6*9^x=9^2*5$
$6*9^x=3^2*9*5$
$2*9^x-3*9*5=0$
$2*9^x-15*9=0$
$2*9^x-135=0$


---

$2^{4x}-50-2^{2x}=896$
$2^{4x}-2^{2x}=946$
$2^{4x-2x}=946$
$2^{2x}=946$
$2^x=a$
$a^4-50-a^2=896$
bikvadratická rovnice

$2^{4x}-50*2^x=896$
$b^2-50b-896=0$
$b^2-50b-946=0$

$b=2^{2x}$

$D=2500+4*896=6084$
$\sqrt{D}=78$
$b_{12}=\frac{50\pm78}2$
$b_1=64$
$b_2\not=-14$

$2^{2x}=64$
$2x=6$
$x=3$

$K=\{3\}$

---

$128=2^x$
$2^x=2^7$
$x=7$

