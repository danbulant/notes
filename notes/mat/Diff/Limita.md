# Limita

$$\lim_{x\rightarrow\infty}\frac1x=0$$
$$\lim_{x\rightarrow0}\frac{\sin x}x=1$$


## Spojité funkce

když $$f(a)=\lim_{x\rightarrow a}(x)$$funkce je spojitá

$$\lim_{x\rightarrow2}(x^2-3)=1$$
![[Limita 2024-12-05 13.56.12.excalidraw]]
$x^2=4$, dosadí se

$$\lim_{x\rightarrow2}\frac{3x+4}{x^2+1}=\frac{10}5=2$$

$$\lim_{x\rightarrow\frac\pi6}\sin x=\frac12$$

## Nespojité funkce

$$\lim_{x\rightarrow0}=\frac{3x^2-x}x$$
nelze dosadit, funkce je v bodě nespojitá 

Jedna možnost, rozdělit limity (upravou se zbavit /x)

$$\lim_{x\rightarrow0}(\frac{3x^2}x-\frac{x}x)=\lim_{x\rightarrow0}(3x-1)=-1$$


$$\lim_{x\rightarrow-1}\frac{x^2+4x+30}{x^3+1}=\lim_{x\rightarrow-1}\frac{(x+1)(x+3)}{(x+1)(x^2-x+1)}=\lim_{x\rightarrow-1}\frac{x+3}{x^2-x+1}=\frac23$$ 

---


$$\lim_{x\rightarrow7}\frac{2-\sqrt{x-3}}{(x^2-49)}=\lim_{x\rightarrow7}\frac{2-\sqrt{x-3}}{(x+7)(x-7)}$$
$$\lim_{x\rightarrow7}\frac{(2-\sqrt{x-3})(2+\sqrt{x-3})}{(x-7)(x+7)(x+\sqrt{x-3})}$$
$$\lim_{x\rightarrow7}\frac{4-(x-3)}{(x-7)(x+7)(x+\sqrt{x-3})}=\lim_{x\rightarrow7}\frac{-(x-7)}{(x-7)(x+7)(x+\sqrt{x-3})}$$
$$\lim_{x\rightarrow7}\frac{-1}{(x+7)(x+\sqrt{x-3})}$$
$$\frac{-1}{14*(7+2)}=\frac{-1}{14*9}$$


---

$$\lim_{x\rightarrow0}\frac{1-\cos2x}{x^2}$$

$\cos2x=\cos^2x-\sin^2x$
$\cos^2y=\sin^2y=1$

$$\lim_{x\rightarrow0}\frac{1-\cos^2x+\sin^2x}{x^2}$$
$$\lim_{x\rightarrow0}\frac{2*\sin^2x}{x^2}$$

$$\lim_{x\rightarrow0}\frac{2*\sin x*\sin x}{x*x}$$

$2$

---

$\lim_{x\rightarrow+\infty}(4x^3-x^2+x+2)=$
pro $\infty$ a $-\infty$
$\lim_{x\rightarrow\infty}x^2(4x-1)+x+2=$

pro $\infty\rightarrow\infty(\infty-1)+\infty+2=\infty$
pro $-\infty\rightarrow\infty(-\infty)-\infty+2=-\infty$

---

$$\lim_{x\rightarrow\infty}(-4x^3-x^2+x+2)$$
$$\lim_{x\rightarrow\infty}x^3(-4-\frac1x+\frac1{x^2}+\frac2{x^3})$$
$$=-\infty$$

$\frac1x$ a dalsi se blizi nule a “zmizi”

---

$$\lim_{x\rightarrow\infty}\frac{2x^3-x^2+5}{x^2+x-2}$$

----

$$\lim_{x\rightarrow\infty}\frac{\sqrt x-6x}{3x+1}$$
$$\lim_{x\rightarrow\infty}\frac{\sqrt x-6x}{3x+1}\frac{\sqrt x+6x}{\sqrt x+6x}=\lim_{x\rightarrow\infty}\frac{x-36x^2}{3x\sqrt x+18x^2+\sqrt x+6x}$$
$$\lim_{x\rightarrow\infty}\frac{(\frac1x-36)x^2}{x^2(\frac3{\sqrt x}+18+\frac1{x\sqrt x}+\frac6x)}$$

---

$$\lim_{x\rightarrow-4}\frac{x^2-16}{x+4}$$
$$\lim_{x\rightarrow-4}\frac{(x+4)(x-4)}{x+4}$$
$$\lim_{x\rightarrow-4}x-4=-8$$

---

![[Limita 2024-12-12 13.00.01.excalidraw]]