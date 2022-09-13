---
Date: 2022-03-02
tags: [mat, mat/funkce]
---
# Příklady

## Určete definiční obory funkcí
---
$f_1: y = x^3 - x^2 + 1$
$D_{f_1} = \mathbb{R}$

---
$f_2:y=\frac1{6-4x}$
$D_{f_2} = \mathbb{R} - \{1.5\}$

---
$f_3:y=\frac1{4x^2-9}$
$D_{f_3} = \mathbb{R} - \{1.5\}$

---
$f_4: y = \frac{\sqrt{4-2x}}3$
$D_{f_4} = (-\infty; 2\rangle$

---
$f_5:y=\sqrt{x-2}+\frac1x$
$D_{f_5}=\langle2;\infty) - \{0\}$

---
$f_6:y=\frac{\sqrt{x+3}}{\sqrt{x+7}}$
$D_{f_6} = \langle-3;\infty) - \{-7\}$

---
$f_7:y=\sqrt\frac{x+3}{x+7}$
$D_{f_7} = \langle-3;\infty)$

---
## Rozhodněte, zda číslo $d$ náleží $H(f_i)$
---
$d=7$
$f_1:y=3x-4$
$f_1^{-1}: x=\frac{y+4}3$
$D_{f_1^{-1}}=\mathbb{R}$
$H_{f_1}=\mathbb{R}$
$7\in\mathbb{R}$
✔️

---
$d=5$
$f_2:y=-5$
$H_{f_2} = \{-5\}$
$5 \not\in \{-5\}$
❌

---
$d=0$
$f_3:y=\frac1{x+3}$
$f_3^{-1} : x=\frac1y-3$
$D_{f_3^{-1}} = \mathbb{R} - \{0\}$
$0\not\in\mathbb{R}-\{0\}$
❌

---
$d=-4$
$f_4:y=\frac{x+1}{x-2}$
$f_4^{-1}:2=\frac1y$
$y = \frac{x+1}{x-2}$
$y(x-2)=x+1$
$y(x-2)-x=1$
$x-2=\frac{(1+x)}y$


---
$d=\frac12$
$f_5:y=\frac1{x^2-1}$
$f_5^{-1}: x=\sqrt{\frac1y+1}$
$D_{f_5^{-1}} = H_{F_5} = (-1;\infty)$
$\frac12 \in (-1; \infty)$
✔️

---

## Určete číslo $b\in\mathbb{R}$ za předpokladu, že:

---
graf funkce $f:y=6x+b$, prochází bodem $A[0;4]$
$f(0) = 4$
$6*0 + b = 4$
$b = 4$

---
graf funkce $f:y=\frac32x+b$, prochází bodem $A[-2;9]$
$f(-2) = 9$
$\frac32*(-2)+b=9$
$-3+b=9$
$b=12$

---

## Určete číslo $a\in\mathbb{R}$ za předpokladu, že:

---
graf funkce $f:y=ax+2$, prochází bodem $A[-2;6]$
$f(-2) = 6$
$-2a+2=6$
$-2a=4$
$-a=2$
$a=-2$

---
graf funkce $f:y=ax-2$, prochází bodem $A[1;2]$
$f(1)=2$
$1a-2=2$
$a=4$


---
$$
-5-2x=4x+7
$$
$$
x=-2
$$
---
$$
8000+100x=10000+80x
$$
$$
x=100
$$


---
$$x + \frac2x - 1 = \frac{x + 6}{x + 2}$$
$$x(x+2) + 4 - (x+2) = x + 6 \space | *(x+2)$$
$[x\neq-2]$
$$x^2+2x+4-x-2=x+6$$
$$x^2+x+2=x+6$$
$$x^2+x-4=x$$
$$x^2-4=0$$
$$2 = x$$

	
---

$$\frac{x+2}{x-1}=\frac{x+6}{x+2} \space | *(x-1)(x+2)$$
$[x\neq1]; [x\neq-2]$
$$(x+2)^2 = (x+6)(x-1)$$
$$x^2+4x+4=x^2+5x-6$$
$$4x+4=5x-6$$
$$x=10$$

---

$$\frac{2x+1}{x-3}=\frac{4x+2}{2x-1} \space | *(x-3)(2x-1)$$
$[x\neq3]; [x\neq\frac12]$
$$(2x+1)(2x-1)=(4x+2)(x-3)$$
$$4x^2-1=4x^2-10x-6 \space|-4x^2$$
$$-1=10x-6 \space |+6$$
$$5=10x\space|:10$$
$$x=0.5$$
$$K=\{-\frac12\}$$

---

$$\frac{x+3}{x-2}=4+\frac5{x-2} \space | *(x-2)$$
$[x\neq2]$
$$x+3=4(x-2)+5$$
$$x+3=4x-3 \space |-x$$
$$3=3x-3 \space |+3$$
$$6=3x \space | :3$$
$$x=2$$
$$K=\{\emptyset\}$$
```ad-sentence
Výsledné x nemá řešení, protože podmínka zakáže výslednou hodnotu (x nesmí být 2, ale x vyšlo 2)
```

---

$$\frac{x+4}{x+5}=2-\frac1{x+5} \space | *(x+5)$$
$[x\neq-5]$
$$x+4=2(x+5)-1$$
$$x+4=2x+9 \space | -x$$
$$4=x+9 \space | -9$$
$$x=-5$$
$$K=\{\emptyset\}$$

---

$$\frac{x-2}{x+3}=2-\frac5{x+3} \space | * (x+3)$$
$[x\neq-3]$
$$x-2=2(x+3)-5$$
$$x-2=2x+1 | -x-1$$
$$x=-3$$
$$K=\{\emptyset\}$$
---

$$\frac{x+8}{x+3}=1+\frac5{x+3} \space | *(x+3)$$
$[x\neq-3]$
$$x+8=1(x+3)+5$$
$$x+8=x+8 \space | -8$$
$$0x=0$$
$$K=\{\mathbb{R} - \{-3\}\}$$

---

$$\frac{x+2}{x+5} = 1-\frac3{x+5} \space | * (x+5)$$
$[x\neq-5]$
$$x+2=x+2 \space | -2-x$$
$$0x=0$$
$$K=\{\mathbb{R}-\{-5\}\}$$

---

$$\frac{x-3}{x+2}=1-\frac6{x+2} \space | *(x+2)$$
$[x\neq-2]$
$$x-3=x-4 \space | -x+4$$
$$1=0x$$
$$K=\{\emptyset\}$$

---

$$\frac{2x-4}{x-2}=1-\frac2{x-2} \space | *(x-2)$$
$[x\neq2]$
$$2x-4=x-4 | +4$$
$$2x=x \space |-x$$
$$x=0$$
$$K={0}$$

---

$$\frac{x+3}5 = x$$
$$\frac{x+3}5-x=0$$
$$x+3-5x=0$$
$$-4x+3=0$$
$$4x=3$$
$$x=\frac34$$
---
$$7(1-x)-4(x-8)=(2-x)11$$
$$7-7x-4x+32=22-11x$$
$$-11x+39=22-11x$$
$$39\neq22$$

---

$$\frac{3+2x}2-\frac76=5x-\frac{12x-1}3$$
$$9+6x-7=30x-24x+2$$
$$6x+2=6x+2$$
$$2=2$$
---

$$x-6=\frac{7x-3}3-\frac{3(x+2)}4$$
$$12x-72=28x-12-9x-18$$
$$12x-72=27x-30$$
$$-72=7x-30$$
$$-42=4x$$
$$x=-6$$
---
$$a(a-1)+3=(a+2)(a-2)$$
$$aa-a+3=aa-4$$
$$-a+3=-4$$
$$a=7$$
---
$$x-(3x-(4x-(3x-1)-1)+3)=-5$$
$$x-3x-3+4x-1-3x+1=-5$$
$$-x-3=-5$$
$$x=2$$
---
$$x-3(x-5(x-4))=10(x-3)$$
$$x-3x+15x-60=10x-30$$
$$13x-60=10x-30$$
$$3x-60=-30$$
$$x=10$$
---
$$3-\frac32(\frac{5x}6-2)=(1\frac12)x-\frac12(\frac12x-9.5)$$
$$3-\frac{15*6x}{2}+\frac62=1.5x-\frac{x}4+\frac{9.5}2$$
$$12-30*6x+12=6x-x+19$$
$$\frac1{37}=x$$
🤷

---
$$\frac6{x-5}+1=\frac{2x-4}{x-5}$$
$$6+x-5=2x-4$$
$$x=5$$
nemůže být

---
$$\frac{2x+5}{x+2}+\frac1{2+x}=3$$
$$2x+5+1=3x+6$$
$$2x+6=3x+6$$
$$x=0$$
---
$$\frac{2x+4}{3x-1}=\frac25-\frac{x+5}{1-3x}$$
$$\frac{2x+4}{3x-1}=\frac25+\frac{x+5}{3x-1}$$
$$2x+4=\frac{2(3x-1)}5 +x+5$$
$$x=\frac{6x-2}5+1$$
$$x=-3$$
---
$$\frac{x+7}{x-5}+\frac{x+5}{x-7}=2$$
$$(x+7)(x-7)+(x+5)(x-5)=2(x-5)(x-7)$$
$$x^2-7^2+x^2-5^2=2(x^2-7x-5x+35)$$
$$2x^2-7^2-5^2=2x^2-14x-10x+70$$
$$2x^2-49-25=2x^2-24x+70$$
$$2x^2-74=2x^2-24x+70$$

$$24x=144$$
$$x=6$$
---
$$\frac{17}{x+1}-\frac5{x^2+x}=\frac6x$$
$$\frac{17}{x+1}-\frac5{x(x+1)}=\frac6x \space | :x(x+1)$$
$$17x-5=6(x+1)$$
$$17x-5=6x+6 |+5$$
$$11x=11$$
$$x=1$$
