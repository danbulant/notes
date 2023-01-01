---
tags: [mat, mat/funkce]
---
# Logaritmus
- inverzní funkce pro [Exponenciální funkce](Exponenciální%20funkce.md).
Na kalkulačce je <kbd>log</kbd> $= log_{10}x$
<kbd>ln</kbd> $= log_ex$

$\log\frac{a}b=\log a - \log b$
$\log a^2=2\log a$


$$
\log_ab=x
$$
$$
a^x=b
$$
![](Pasted%20image%2020221122130441.png)
![](Pasted%20image%2020221122130451.png)
[Calculator Suite - GeoGebra](https://www.geogebra.org/calculator/buu77xnz)

$log_2x$ a $log_\frac12x$
$log_2x$ je roustoucí
![](Pasted%20image%2020221122133140.png)

$log_2x$ posunutý o 3 →
$log_2(x-3)$
jedničkový bod: $[4;0]$

$log_2x$ posunutý o 3 ←
$log_2(x+3)$
jedničkový bod: $[-2;0]$

$log_2x$ posunutý o 3 $\uparrow$ 
$log_2x+3$
jedničkový bod: $[1;3]$

$log_2x$ posunutý o 3 $\downarrow$
$log_2x-3$
jedničkový bod: $[1;-3]$

![](Pasted%20image%2020221123111325.png)
[Calculator Suite - GeoGebra](https://www.geogebra.org/calculator/rvbswpyq)

$log_2(x-5)+3$
5 →
3 $\uparrow$

Jedničkový bod: $[6;3]$

![](Pasted%20image%2020221123113129.png)

$log_2(-x)-4$

převrácená přes osu x
4 $\downarrow$

Jedničkový bod: $[1;-4]$

![](Pasted%20image%2020221123113224.png)

$log_{10}(x+3)-\frac12$

$log_{10}(x-3.5)$

$log_{10}(-x)+7$


## Počítání s logaritmy

### Určete r
$log_2r=4$
$2^4=r$
$r=16$

$log_3r=-2$
$3^{-2}=r$

$log_5r=\frac34$


### Určete v

$log_3\sqrt[3]3=v$

$3^v=\sqrt[3]3$
$3^v=3^\frac13$
$v=\frac13$

$log_{10}0.001=v$

$10^v=0.001$
$10^v=10^{-3}$
$v=-3$

$log_{0.25}16=v$
$log_{25}1=v$

### Určete a

$log_a25=2$
$a^2=25$
$a^2-25=0$
$(a-5)(a+5)=0$
$a=5$
$a\in\mathbb{R}^+-\{1\}$ tudíž $a\not=5$

$log_a81=4$

$a^4=81$
$a^4=3^4$
$a=3$

$log_a8=-3$

---

$l=log^3\sqrt{\frac{a}b}=\frac{\log a}3-\frac{\log b}3$
$l=\log^3\sqrt\frac{a}b=\log(\frac{a}b)^\frac13=\frac13\log\frac{a}b=\frac13(\log a - \log b)=\frac{\log a}3-\frac{\log b}3$

---

$4\log_63+5\log_62-\log_612=v$
$\log_63^4+\log_62^5-\log_612=v$
$log_6(\frac{3^4*2^5}{12})=v$
$\log_6(\frac{3^4*2^5}{3*4})=v$
$\log_6(\frac{3^3*2^5}{2^2})=v$
$\log_6(3^3*2^3)=v$
$\log_6(3^3*2^3)=v$
$\log_6(6^3)=v$
$v=3$

---

$\log_{10}20+\log_{10}50=v$
$log_{10}(20*50)=v$
$log_{10}(1000)=v$
$v=3$

---

$\log_550-\log_52=v$
$\log_5(50/2)=v$
$\log_5(25)=v$
$\log_5(5^2)=v$
$v=2$

---

$\log_37+\log_3\frac{81}7=v$
$\log_3(7*81/7)=v$
$\log_3(81)=v$
$log_3(9^2)=v$
$log_3({3^2}^2)=v$
$v=4$

---

$\log_28-4\log_22+\log_232=v$
$\log_28-\log_22^4+\log_232=v$
$\log_2(2^3*2^5/2^4)=v$
$\log_2(2^8/2^4)=v$
$\log_2(2^4)=v$
$v=4$

---

### Definiční obory
$y=\log(x+3)$

$x+3>0$
$x>-3$
$D=(-3, \infty)$

---
$y=\log_3(x^2+4x-5)$

$x^2+4x-5>0$

$x>1$

$D=(-\infty;-5)\cup(1; \infty)$

---

$y=\log_5(8-x)-\log_5(x+5)$

$8-x>0$
$x+5>0$

$-x>-8$
$x<8$

$x>-5$

$D=(-\infty;8)\cap(-5;\infty)$
$D=(-5;8)$

---

$y=\log_\frac35(4-x^2)$
$y=\log_3(4-x^2)/\log_5(4-x^2)$

$4-x^2>0$
$-x^2>-4$
$x^2<4$
$x^2<2^2$
$x<2$

$D=(\infty;2)$

---

$y=\log_7\sqrt{3+x}$

$3+x\le0$
$x\le-3$
$x\in\langle-3;\infty)$

$\log\sqrt{3+x}>0$

$\sqrt{3+x}=0 \Leftrightarrow 3+x=0$ 
                       $x=-3$

$D=(-3;\infty)$

---

$y=\frac1{\log x-1}$

$\log x$
$x\in\mathbb{R}^+$

$\log x-1\ne0$

$\log x -1=0$
$\log x=1$
$x=10$

$D=\mathbb{R}^+\backslash\{10\}$

---

$\log_7x+\frac{\log_7x^5}{\log_7x}=3$
$(\log_7x)^2+\log_7x^5=3\log_7x$
$(\log_7x)^2+5\log_7x=3\log_7x$

$x>0$ $x\ne1$
$x\in\mathbb{R}^+\backslash\{1\}$

$u=\log_7x$
$u^2+5u=3u$
$u^2+2u=0$
$u(u+2)=0$

$u=0$
$u=-2$

---

$(2\log_{16}x+1)^2=\log_{16}x+2$

$u=\log_{16}x$

$(2u+1)^2=u+2$
$4u^2+4u+1-u-2=0$
$4u^2+3u-1=0$
$D=25$
$u_1=1$
$u_2=\frac14$
$log_{16}x=\frac14$
$x=16^\frac14$

$x=\frac1{16}$
$x=2$
