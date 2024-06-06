# Kombinace variace permutace
Permutace - $n!$
Variace - $V_k(n)=\frac{n!}{(n-k)!}$ - k členná variace z n prvků
Kombinace - $K(n;k)=\binom nk=\frac{V_k(n)}{k!}=\frac{n!}{k!(n-k)!}$ - k členná kombinace z n prvků (nezáleží na pořadí)

$$(A+B)^n=\sum^n_{k=0}\binom nk A^{n-k}B^k$$

$$(m+x)^5=\sum^5_{k=0}\binom 5km^{5-k}x^k$$
$$(x-n)^6=\sum^6_{k=0}\binom6kx^{6-k}n^k*(-(k\%2 * 2-1))$$
$$(x-n)^6=\sum^6_{k=0}\binom6kx^{6-k}(-n)^k$$


---

kombinace - studentská rada vybraná ze studentů kde jsou si všichni rovni mezi sebou
variace - studentská rada ze studentů kde je každý v jiné oblasti
permutace - sezení ve třídě

---

Vlastnosti kombinačních čísel

$\binom nn=1$
$\binom n1=\frac{n!}{(n-1)!}=n$
$\binom n0=\frac{n!}{(n-1)!}=n$
$\binom n{n-1}=\frac{n!}{(n-(n-1))!(n-1!)}=n$
$\binom nk=\binom n{n-k}$
$\binom nk+\binom n{k+1}=\binom {n+1}{k+1}$

---

K účasti na volejbalovém turnaji se přihlásilo 6 družstev. Každý s každým: $\binom 6 2=\frac{6!}{4!2}=\frac{6*5}2=15$

Určete, kolik přímek je v rovině dáno 10 body, jestliže
žádné 3 z nich neleží v rovinně: $\binom{10}2=\frac{10!}{8!2}$
právě 4 z nich leží v přímce: $\binom{10}2-\binom42+1=\frac{10!}{8!2!}-\frac{4!}{2!2!}+1$

Určete, kolika způsoby může 15 kluků a 10 holek utvořit taneční pár
$15*10$

Ze 7 mužů a 4 žen máme vybrat 6 člennou skupinu, v níž jsou alespoň 3 ženy.

$\binom43*\binom73+\binom44*\binom72=\frac{4!}{3!}*\frac{7!}{3!4!}+1*\frac{7!}{2!5!}=4*\frac{7!}{3!4!}+1*\frac{7*6}2$

Ve třídě je 19 kluků a 12 holek. Kolika způsoby z nich lze sestavit 3člennou skupinu, v níž jsou

jen kluci $\binom{19}3=\frac{19!}{3!16!}$
jen holky $\binom{12}3=\frac{12!}{3!9!}$
dva kluci a jedna holka $\binom{19}2*\binom{12}1=\frac{19!}{2!17!}*12$


$n!=\prod\limits_{i=1}^ni$
$\prod\limits_{i=1}^4{i*2}=(1*2)*(2*2)*(3*2)*(4*2)$

$\sum\limits_{i=1}^ni=1+2+3$

---

Zvětší-li se počet prvků o 2, zvětší se počet variací 2. třídy z těchto prvků vytvořených o 26. Kolik je prvků?

$\frac{(x+2)!}{x!}-\frac{x!}{(x-2)!}=26$
$(x+2)(x+1)-(x)(x-1)=26$
$x^2+x+2x-x^2+x+2=26$
$4x=24$
$x=6$

---

$\binom86 + \binom87 + \binom72 + \binom73=\binom97+\binom83=\frac{9!}{7!2!}+\frac{8!}{3!5!}=\frac{8*9}2+8*7=4*9+8*7=92$
---

Kolik různých slov je možné vytvořit přemisťováním písmen slova KAJAK

$5!/2!/2!=5*3*2=30$

Kolik různých čtyřmístných čísel je možné vytvořit z cifer čísla 1211.

$4!/3!=4$

Kolik různých slov je možné vytvořit přemisťováním písmen slova ANNAPURNA
$9!/3!/3!=9*8*7*6*5*4/2*3=3*8*7*6*5*2=10080$
