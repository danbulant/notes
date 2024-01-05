# Odchylka vektorů
 
Def: Mějme vektory $\vec{u}$ a $\vec{v}$ se spol. poč. bodem. Pak jejich odchylka $\varphi$ je velikost konvexního úhlu, který svýrají.

Platí: $\varphi\in\lt0\degree;180\degree\gt$
$\vec{u}\vec{v}=|\vec{u}||\vec{v}|\cos\varphi$
$|\vec{u}|=4$
$|\vec{v}|=5$
$\varphi=\frac\pi3$
$\vec{u}\vec{v}=|\vec{u}||\vec{v}|\cos\varphi=4*5*\cos\frac\pi3$ 

![[Odchylka vektorů 2024-01-04 11.38.19.excalidraw]]

$A=[0;1]$
$B=[3;0]$
$C=[1;3]$

$\alpha$…odchylka $\vec{AB}$ a $\vec{AC}$

$\vec{AB}=B-A=(3;-1)$ $|\vec{AB}|=\sqrt{9+1}=\sqrt{10}$
$\vec{AC}=C-A=(1;2)$ $|\vec{AC}|=\sqrt{1+4}=\sqrt5$
$\vec{AB}\vec{AC}=3*1+(-1)2=1$

$\cos\alpha=\frac{\vec{AB}\vec{AC}}{|\vec{AB}||\vec{AC}|}=\frac1{\sqrt{10}\sqrt5}$
$\alpha=\cos^{-1}(\frac1{\sqrt{50}})\dot=81\degree 52'$

$\beta$...odchylka $\vec{BA}$ a $\vec{BC}$
$\vec{BA}=(-3;1)$ $|\vec{BA}|=\sqrt{(-3)^2+1^2}=\sqrt{10}$
$\vec{BC}=C-B=(-2;3)$ $|\vec{BC}|=\sqrt{(-2)^2+3^2}=\sqrt{13}$
$\vec{BA}*\vec{BC}=(-2)(-3)+1*3=6+3=9$
$\cos\beta=\frac{\vec{BA}*\vec{BC}}{|\vec{BA||\vec{BC}|}}=\frac9{\sqrt{10}\sqrt{13}}$
$\beta=\cos^{-1}\frac9{\sqrt{130}}=37\degree52'$

$\gamma=180-\alpha-\beta=60\degree16'$

![[Odchylka vektorů 2024-01-05 11.16.48.excalidraw]]

$\vec{u}\vec{v}=|\vec{u}||\vec{v}|\cos\gamma$
$\gamma=90\degree$: $\vec{u}\vec{v}=| |*| |*\cos{90}\degree=0$
$\cos90\degree=0$
$\vec{u}=(x_u;y_u)$
$\vec{v}\perp\vec{u}$: $\vec{v}=(-y_u;x_u)$
$\vec{w}\perp\vec{u}$: $\vec{w}=(y_u;-x_u)$

> [!SENTENCE]
> $\vec{v}\perp\vec{u}\Leftrightarrow\vec{v}\vec{u}=0$
> $\vec{v}\vec{u}=(-y_u;x_u)(x_u;y_u)=-y_ux_u+x_uy_u=0$
> $\vec{w}\perp\vec{u}\Leftrightarrow\vec{w}\vec{u}=0$
> $\vec{w}\vec{u}=(y_u;-x_u)(x_u;y_u)=y_ux_u+(-x_u)y_u=0$

$\vec{u}=(1;-1)$
$\vec{u'}=(1;1)$
$\vec{u''}=(-1;-1)$
$\vec{v}=(\sqrt2;-3)$
$\vec{v'}=(3;\sqrt2)$
$\vec{v''}=(-3;-\sqrt2)$
$\vec{w}=(-2;-5)$
$\vec{w'}=(-5;2)$
$\vec{w''}=(5;-2)$
