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

## Důkaz mat. indukcí

Dokážeme, že hypotéza platí pro $n = 1$, a poté že platí pro $n=k+1$ pokud platí pro $n=k$. Poté platí pro celou posloupnost.

Příklady:

Dokažte větu:
$\forall n\in\mathbb{N}$ je součet prvních $n$ členů posloupnosti $\{n^2\}^\infty_1$ roven $\frac{n(n+1)(2n+1)}6$

$n=1 \Rightarrow \frac{1(1+1)(2*1+1)}6=\frac{1*2*3}6=1$

Předpokládáme, že platí: $n=k$

$n=k$
$1^2+2^2+…+k^2$
$\frac{k(k+1)(2k+1)}6$

$n=k+1$
$\frac{(k+1)((k+1)+1)(2(k+1)+1)}6$
$1^2+2^2+…+k^2+(k+1)^2$
$\frac{(k+1)(k+2)(2k+3)}6$
$\frac{2k^3+3k^2+6k+2k^2+3k+4k+6}6$

$\frac{k(k+1)(2k+1)}6+(k+1)^2=\frac{(k+1)(k+2)(2k+3)}6$

$k(k+1)(2k+1)+6(k+1)^2=(k+1)(k+2)(2k+3)/k+1\ne0$

$k(2k+1)+6(k+1)=(k+2)(2k+3)$

$2k^2+k+6k+6=2k^2+3k+4k+6$
$2k^2+7k+6=2k^2+7k+6$

Ekvivalence, tudíž platí věta pro celou posloupnost

---

$6|(3n^2+6n+12)(n+1)n$

Dělitelnost 3 → všude 3 v tom jednom tvaru
Dělitelnost 2 → $(n+1)n$ protože v řadě se střídá sudé liché číslo

$6|(n^3+11n)$

$n=1$
$6|(1^3+11)$
$6|12$ platí

$n=k$
$6|(k^3+11k)$ pokud platí

$n=k+1$
$6|(k+1)^3+11(k+1)$

$k^3+3k^2+3k+1+11k+11$
$(k^3+11k)+(3k^2+3k+12)$

$6|k^3+11k$ platí (předpoklad)

$6|3k^2+3k+12$
$2|k^2+k$

$2|k(k+1)$

12 je dělitelné 6, proto se odebrala
3+3+12 je dělitelné 3
$k(k+1)$ jsou vynásobené sudé a liché čísla (dvě po sobě jdoucí budou liché a sudé nebo naopak), budou dělitelné 2

Dokažte
$\forall n\in\mathbb{N}$
$\sum\frac1{n(n+1)}=1-\frac1{n+1}$

$n=1$

$\frac1{1(1+1)}=1-\frac1{1+1}$ 
$\frac12=1-\frac12$

platí dáno

$n=k$
$\frac{1}{k(k+1)}=1-\frac1{k+1}$

$n=k+1$

$\frac1{(k+1)(k+2)}=1-\frac1{k+2}$

$\frac1{k^2+3k+2}=1-\frac1{k+2}$ 

$1=(k^2+3k+2)-\frac{k^2+3k+2}{k+2}$

$1=(k^2+3k+2)-\frac{(k+1)(k+2)}{k+2}$
$1=(k^2+3k+2)-(k+1)$
$1=k^2+3k+2-k-1$
$1=k^2+2k+1$
$k^2=-2k$


$\forall n\in\mathbb{N}:n<2^n$

$n=1$
$1<2$

$n=k$
$k<2^k$
platí (dáno)

$n=k+1$
$k+1<2^{k+1}$



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


---

## Aritmetická posloupnost

$3;1;-1;-3;-5;$ … diference $d=-2$ 
$-1;-\frac12;0;\frac12;1;\frac32$ … $d=\frac12$
$2;-4;8;-16$ … neni AP

$AP\Leftrightarrow \exists d\in\mathbb{R};\forall n\in\mathbb{N}:a_{n+1}=a_n+d$


Jsou monotónní
$d>0$ roste
$d<0$ klesá
$d=0$ konst





$a_n=2n-4$ => $d=2$
$a_n=n^2$ neni
$a_n=3^{n+1}=3*3^n$ neni



---

součet všech sudých trojciferných přirozených čísel
$100+102+…..+998$

$AP: a_1=100;a_n=998;d=2$

$S_n=\frac{n}2(a_1+a_n)$
$n=?;n=449$
$a_n=a_1+(n-1)d$
$998=100+(n-1)d$
$n=450$


---

$a_1=-10;d=4.5$
$71=-10+(n-1)4.5$
$81=(n-1)4.5$
$51=4.5n-4.5$
$55.5=4.5n$
$45+10.5=4.5n$
neni - $10.5/4.5\not\in\mathbb{Z_0}$ $n$ by nebylo celé a tudíž by nebylo na posloupnosti

$100=-10+(n-1)4.5$
$110=4.5n-4.5$
$105.5=4.5n$
$90+15.5=4.5n$
znova to stejné, není

---

## Geometrická posloupnost

$$GP\Leftrightarrow \exists a \in\mathbb{R};\forall n \in \mathbb{N}: a_{n+1}=a_n*q$$
$q\ne0;a_1\ne0$

$a_n=a_1*q^{n-1}$
$a_r=a_sq^{r-s}$
$s_n=a_1\frac{q^n-1}{q-1};q\ne1$
$s_n=na_1;q=1$
$$\sum_{n=1}^{1}a_nq=s_n$$

---

$GP:a_1=6;a_2=24$
$q=\frac{24}6=4$
$a_5=6*q^3=6*4^4=6*256=1536$
$a_8=6*q^7=98304$

$GP$
$a_1-a_3=-1.5$
$a_2+a_1=1.5$
$a_1=1.5-a_2$
$a_2+1.5-a_3=-1.5$
$a_2-a_3=3$

$a_2=a_1q$

$a_1-a_1q^2=-1.5$ 
$a_1q+a_1=1.5$

$a_1(q+1)=1.5/:(q+1)\ne0$
$a_1=\frac{1.5}{q+1}$
$\frac{1.5}{q+1}(1-q^2)=-1.5$ 


$a_1-a_1q^2=-1.5$
$a_1q+a_1=1.5$
$a_1(q+1)=1.5\rightarrow a_1=\frac{1.5}{q+1}$

$\frac{1.5}{q+1}-\frac{1.5}{q+1}q^2=-1.5$
$1.5-1.5q^2=-1.5(q+1)$
$1-q^2=-q-1$
$(1-q)(1+q)=-(q+1)$
$1-q=-1$
$q=2$

$a_1=\frac{1.5}{a+q}=\frac{1.5}{2+1}=\frac12$
$s_5=\frac12*\frac{2^5-1}{2-1}=\frac{31}2$

---

$a_1+a_3=5$
$a_2+a_4=10$

$a_1+a_1q^2=5$
$a_1q+a_1q^3=10$

$a_1(1+q^2)=5$
$a_1q(1+q^2)=10$

$a_1=\frac5{1+q^2}$

$\frac5{1+q^2}q(1+q^2)=10$ 

$5q(1+q^2)=10(1+q^2)$
$5q=10$
$q=2$

$a_1=\frac5{1+q^2}$
$a_1=\frac5{1+4}=1$

---

![[Pasted image 20241022070908.png]]

$\{5^{2n+3}*3^{n+1}\}^\infty_1$

$a_n=5^{2n+3}*3^{n+1}$
$a_{n+1}=5^{2(n+1)+3}*3^{n+1+1}$

$a_{n+1}=a_n*q$
$q=\frac{a_n+1}{a_n}$

$$q=\frac{5^{2(n+1)+3}*3^{n+1+1}}{5^{2n+3}*3^{n+1}}$$
$$q=\frac{5^{2n+3}*3^{n+1}*5^2*3}{5^{2n+3}*3^{n+1}}$$
$$q=5^2*3=25*3=75$$

je

---

![[Pasted image 20241022073250.png]]

$a_n=\frac{235}8$
$a_3=6$
$d=\frac{14}8$

$a_1=6-2d=6-\frac{28}8=6-3\frac48=2.5$

$a_n=\frac{235}8=2.5+nd=2.5+n\frac{14}8$
$a_n=\frac{215}8=nd=n\frac{14}8$
$215=14n$
$n=\frac{215}14$
$n\not\in\mathbb{N}$

---

![[Pasted image 20241024132348.png]]

$a_1=3$
$d=3$

$a_{130}=131*3=393$
$S_n=\frac{n}2(a_1+a_n)$

$S_{130}=\frac{130}2(3+393)=65*396=25740$

---

![[Pasted image 20241024140155.png]]

$S=?$
$V=64cm^3$
$V=a_1*a_1q*a_1q^2=a_1^3q^3=64$

$a_1+a_2+a_3=84cm$

$a_1+a_1q+a_1q^2=84$
$a_1(1+q+q^2)=84$

$4S_3=4a_1\frac{q^3-1}{q-1}=84$

---


