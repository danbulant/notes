# Posloupnost
Posloupnost je funkce $f$ s $Df=\mathbb{N}$

Je omezená tehdy když je omezená shora i zdola

Je omezená zdola $\Leftrightarrow\exists d\in\mathbb{R}:a_n\ge d\forall n\in\mathbb{N}$
Je omezená shora $\Leftrightarrow \exists h \in\mathbb{R}:a_n\le h\forall n\in\mathbb{N}$

Klesající posloupnost je omezená shora jelikož je v $\mathbb{N} \Rightarrow$  začíná na 0 (pro $a_n=n$) a jen klesá



## Zadání
- vzorcem pro n-tý člen
$a_n=2n+3$
1. člen: $a_1=5$
10. člen: $a_{10}=23$

$b\{3n-2\}_{n=1}^{\infty}$
3. člen: $b_3=7$
nekonečná posloupnost

$(c_n)_1^4=(2^n)_1^4$
$d_n:(2^n)_1^4$
konečná posloupnost

- výčtem prvků 
$a: 1,3,9,27…$
$a_n=3^{n-1}$
$a_n=(3^n)^{\infty}_0$

$54;-18;6;-2;\frac23;-\frac29\rightarrow\{\frac{54}{(-3)^{n-1}}\}^6_1$

$-1;8;-27;64;-125;216\rightarrow\{(-1)^nn^3\}_1^\infty$

- rekurentním vzorcem

Dává vztah mezi členy posloupnosti

$a_{n+1}=3a_n-2;a_4=5$

Musí být určen alespoň jeden prvek

$a_5=13$
$a_3=7/3$
$a_2=\frac{13}9$
$a_1=\frac{31}{27}$

$a_{n+1}=3a_n-2n+2a_{n-1};a_5=1;a_7=2$

$2=3a_6-2*6+2*1$
$2=3a_6-12+2=3a_6-10$
$12=3a_6$
$a_6=12/3=4$

$a_8=3a_7-2*7+2a_6$
$a_8=3*2-14+2*4$
$a_8=6-14+8=0$

$a_6=3a_5-2*5+2a_4$
$4=3-10+2a_4$
$4=-7+2a_4$
$11=2a_4$
$a_4=11/2$

$a_5=3a_4-2*4+2a_3$
$1=3*11/2-8+2a_3$
$1-33/2+8=2a_3$
$9-16.5=2a_3$
$-15/2=2a_3$
$a_3=-15/4$


$a_{n-1}=3n+2a_{n+1}-{a_n}$
$a_5=1;a_6=7$

$a_4=3*5+2*7-1$
$a_4=15+14-1=28$

$a_3=3*4+2*1-28$
$a_3=12+2-28=-14$

$a_2=3*3+2*28+14$
$a_2=9+56+14=79$

$a_5=3*6+2*a_7-7$
$1=18+2a_7-7=11+2a_7$
$-2a_7=10$
$a_7=-5$

$a_6=3*7+2*a_8+5$
$a_6=21+2a_8+5=26+2a_8$
$7=26+2a_8$
$2a_8=7-26=-19$
$a_8=-9.5$

---

Dokaž že posloupnost je nebo není monotónní; jak?

$a_n=\frac{n+1}n \rightarrow a_{n+1}=\frac{n+1+1}{n+1}$

$a_{n+1}-a_n=\frac{n+2}{n+1}-\frac{n+1}{n}=\frac{(n+2)n}{n(n+1)}-\frac{(n+1)n}{n(n+1)}$
$\frac{n^2+2n}{n(n+1)}-\frac{(n^2+n)}{n(n+1)}\lt0\forall n \in \mathbb{N}$
klesajici

$a_n=\frac{2n+1}{n+2}$
$a_{n+1}=\frac{2(n+1)+1}{n+1+2}$

$\frac{2n+1}{n+2}-\frac{2(n+1)+1}{n+1+2}$
$\frac{(2n+1)(n+1+2)}{(n+2)(n+1+2)}-\frac{(n+2)(2(n+1)+1)}{(n+2)(n+1+2)}$

$\frac{(2n+1)(n+3)-(n+2)(2(n+1)+1)}{(n+2)(n+3)}$

$\frac{2n^2+6n+n+3-(2n(n+1)+n+4(n+1)+2)}{(n+2)(n+3)}$

$\frac{2n^2+6n+n+3-(2n^2+2n+n+4n+4+2)}{(n+2)(n+3)}$

$\frac{2n^2+7n+3-(2n^2+7n+6)}{(n+2)(n+3)}$

$\frac{2n^2+7n+3-2n^2-7n-6}{(n+2)(n+3)}$

Odečteno ve špatném pořadí! Proto obrácené znaménko
$a_{n+1}-a_n$

$\frac{3}{(n+2)(n+3)}>0\forall n\in\mathbb{N}$


---

$\{n(-1)^n\}^\infty_1$

Přímý důkaz:
$a_n=n(-1)^n$

$a_{n+1}=(n+1)(-1)^{n+1}$

$(n+1)(-1)^{n+1}-n(-1)^n$

$(n+1)(-1)(-1)^n-n(-1)^n$

$(-1)^n[-n-1-n]$

$\pm$ vlevo
$-$ vpravo

Sporem:

$a_1=-1$
$a_2=2$
$a_3=-3$

Není monotóní - sporem jsme dokázali neplatnost podmínek pro monotónost

---

Je monotónní posloupnost?

$\{\sin n\pi\}_1^\infty$

Je konstantní
$\sin n\pi=0\forall n\in\mathbb{N}$

![[Posloupnost 2024-09-26 13.01.57.excalidraw]]

Je omezená

---

$\{\frac{2n+3}{3n+1}\}_1^\infty$

$\frac{2n+3}{3n+1}-\frac{2(n+1)+3}{3(n+1)+1}\lessgtr0$

$\frac{2n+3}{3n+1}-\frac{2n+2+3}{3n+3+1}\lessgtr0$

$\frac{2n+3}{3n+1}-\frac{2n+5}{3n+4}\lessgtr0$

$\frac{(2n+3)(3n+4)}{(3n+1)(3n+4)}-\frac{(2n+5)(3n+1)}{(3n+4)(3n+1)}\lessgtr0$

$\frac{6n^2+9n+8n+12}{9n^2+3n+12n}-\frac{6n^2+15n+2n+5}{9n^2+3n+12n}\lessgtr0$

$\frac{7}{9n^2+15n}\lessgtr0$

dole je kladné $\frac++$

$7>0$

je klesající $a_n>a_{n+1}$
je omezená shora

je omezená zdola, bude vždy kladné $2n+3>0;3n+1>0\Rightarrow + a +$ 

---

$a_n=\frac{3n}5-a_{n+1}+2a_{n+2};a_2=3;a_4=7$

$a_2=\frac{3*2}5-a_3+2a_4$
$3=\frac65-a_3+2*7$
$a_3=\frac65+14-3$
$a_3=\frac65+11$
$a_3=\frac15+12$

$a_1=\frac{3n}5-a_2+2*a_3$
$a_1=\frac{3n}5-3+2*(\frac15+12)$
$a_1=\frac35-3+\frac25+24$
$a_1=22$

$a_3=\frac{3n}5-a_4+2a_5$
$\frac15+12=\frac95-7+2a_5$
$2a_5=\frac15+12-\frac95+7$
$2a_5=19-\frac85$
$2a_5=18-\frac35$ 
$a_5=9-\frac3{10}$
$a_5=8+\frac7{10}$

$a_{n+2}=a_n-n+4;a_3=1;a_2=2$

$a_3=a_1-1+4$
$1=a_1-1+4$
$a_1=-2$

$a_4=a_2-2+4$
$a_4=2-2+4$ 
$a_4=4$

$a_5=a_3-3+4$
$a_5=1-3+4$
$a_5=2$


---

Přepis na rekurentní

$\{\frac{2n-1}3\}^\infty_1$

$a_n-a_{n+1}=\frac{2n-1}3-\frac{2(n+1)-1}3$
$a_n-a_{n+1}=\frac{2n-1}3-\frac{2n+1}3$
$a_n-a_{n+1}=\frac{2n-1-2n-1}3=-\frac{2}3$

$a_{n+1}=a_n+\frac23$


---

Je omezená?

$\{2^n\}^\infty_1$

je roustoucí
=> je omezená zdola

$2^{n+1}-2^n=2*2^n-2^n=2^n>0$

## Funkce
### Vlastnosti
#### Monotónost
- Rostoucí $\forall n:a_n<a_{n-1}; a_{n+1}-a_n>0$
- Nerostoucí $a_{n+1}-a_n\le0$
- Klesající $\forall n:a_n>a_{n-1};a_{n+1}-a_n<0$
- Neklesající $a_{n+1}-a_n\ge0$
#### Prostota
- Prostá - neopakují se hodnoty, dá se sestavit inverzní funkce
#### Parita
- sudá - souměrná podle osy Y; $f(x)=f(-x)$
- lichá - středově souměrné; $f(x)=-f(-x)$
#### Omezenost
- omezená shora i zdola
