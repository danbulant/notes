---
tags:
  - mat
---
# Příklady 1
---
Třída 1.K odjížděla na lyžařský kurs do Krkonoš, na který byly, jako povinné vybavení, předepsány běžecké a sjezdové lyže. Škola nabídla žákům možnost zapůjčení obou druhů lyží ze školního skladu. Alespoň jeden druh lyží si vypůjčilo celkem 14 studentů. Běžky si vypůjčilo o 5 studentů více, než bylo studentů, kteří se vypůjčili sjezdovky. Pouze jeden druh lyží si vypůjčilo o 4 studenty více, než bylo studentů, kteří si vypůjčili oba druhy lyží. Studentů, kteří si vypůjčili pouze běžky, bylo o 3 méně, než studentů, kteří měli vlastní vybavení a nemuseli si vypůjčit nic. Kolik studentů se zúčastnilo lyžařského kurzu?
$$a+b+c=14$$
$$c+b-5 = a+b$$
$$a+c-4=b$$
$$c+3=d$$
$$c-5+c-5+c-4+c=14$$
$$4c-14=14$$
$$4c=28$$
$$c=7$$
$$d=10$$
$$a=c-5=2$$
$$b=5$$
Odpověď: <u>24</u>

---
Písemná práce z matematiky, které se zúčastnilo 35 studentů, obsahovala tři úlohy. Dva studenti vyřešili jenom první úlohu a tři studenti jenom druhou úlohu. První a druhou úlohu vyřešilo 16 studentů, druhou a třetí 14 studentů. Všechny úlohy vyřešilo 10 studentů, první nebo třetí 31 studentů a 3 studenti nevyřešili ani první ani druhou úlohu. Kolik stůdentů vyřešilo: a) aspoň dvě úlohy, b) aspoň jednu úlohu?

---
Z 825 oslovených osob 380 uvedlo, že používá počítač doma nebo v zaměstnání. Počet osob, které používají počítač doma, je dvakrát větší než počet těch, kteří používají počítač doma i v zaměstnání, a je o 40 menší než počet těch, kteří používají počítač pouze v zaměstnání. Kolik oslovených osob používá počítač:
a) pouze v zaměstnání?	b) doma?	c) nepoužívá počítač vůbec?

a -> pouze zaměstnání
b -> doma
c -> nepoužívá
d -> doma i v zaměstnání
$$c = 825-380 = 445$$
$$b = 2d = a - 40$$
$$d = b/2 = a/2 - 20$$
$$a = b + 40 = d*2 + 20$$
$$380 = a + b$$
$$b = (380 - 40) / 2 = 340 / 2 = 170$$
$$a = 170 + 40 = 210$$
$$d = b/2 = 170/2 = 85$$

---
Jedničku z matematiky má na vysvědčení celkem 9 studentů. Jedničku z fyziky má na vysvědčení celkem 10 studentů. Jedničku z matematiky, nebo z fyziky má na vysvědčení 16 studentů. Jedničku z matematiky má třikrát více studentů, než je studentů, kteří mají jedničku z obou předmětů. Celkem je ve třídě 18 studentů, kteří nemají jedničku z matematiky ani z fyziky. Kolik studentů má jedničku z obou předmětů? Kolik je ve třídě celkem studentů, za předpokladu, že všichni byli klasifikování z matematiky i fyziky? Vennův diagram zakreslete.

---
$$
(\frac{5a+4}a-3):\frac{a+2}{7a^2}
$$
$$
\frac{5a+4}a : \frac{a+2}{7a^2} = \frac{5a+4}a * \frac{7a^2}{a+2} = \frac{(5a+4)7a^2}{a^2 + 2}
$$
$$
\frac{5a+4}a - \frac{a+2}{7a^2} = \frac{7a^2(5a+4) - (a+2)}{7a^2} = \frac{35a^3 + 28a^2 - a - 2}{7a^2}
$$

----

Součet čísla $x$ a jeho druhé mocniny je $3.75$. Vypočítejte číslo $x$.
$x+x^2=3.75$
$x^2+x-3.75=0$
$4x^2+4x-15$
$D=b^2-4ac$
$D=4^2-4*4*(-15)=16+240=256$
$\sqrt{D}=16$
$x=\frac{b\pm\sqrt{D}}{2a}$
$x_1=\frac{4-16}{2*4}$
$x_1=-\frac52$
$x_2=\frac{4+16}{2*4}=\frac32$

---

Součet čísla $x$ a jeho převrácené hodnoty je $4.25$. Vypočítejte číslo $x$.

$x+\frac1x=4.25$
$x^2+x=4.25x$
$x^2-3.25x+0=0$
$D=b^2-4ac$
$D=(-3.25)^2-4*1*0$
$D=(-3.25)^2$
$\sqrt{D}=3.25$

$x=\frac{-b\pm\sqrt{D}}{2a}$
$x_1=\frac{3.25+3.25}{2}=0$
$x_2=\frac{3.25-3.25}{2}=-\frac{13}4$

---

Součet čísel $x$ a $y$ je $\frac76$ a jejich součin je $\frac13$. Vypočítejte čísla $x$, $y$.

$x+y=\frac76$
$x*y=\frac13$

$x_1=y_2=\frac23$
$x_2=y_1=\frac12$

---

Dvojciferné číslo má ciferný součet $7$, když vyměníme navzájem jeho cifry, vznikne číslo o $27$ větší než bylo původní číslo. Vypočítejte původní číslo.

```sh
#!/bin/fish
for i in 16 25 34 43 52 61 70;
	if [ (math $i + 27) = (echo $i | rev) ];
		echo $i;
	end;
end
```

25

---

Jestliže napíšeme před dvojciferné číslo číslici $3$, dostaneme číslo třináctkrát větší, než bylo číslo původní. Určete původní číslo.

```sh
#!/bin/fish
for i in (seq 10 99);
	if [ (math 13 \* $i) = 3$i ];
		echo $i;
	end;
end
```

25


---

$(x+3)^2=9-x^2$
$x^2+2x3+9=9-x^2$
$x^2+6x=-x^2$
$2x^2+6x+0=0$

$D=b^2-4ac$
$D=6^2-0$
$\sqrt{D}=6$

$x=\frac{b\pm\sqrt{D}}{2a}$
$x_1=\frac{6+6}{2*2}$
$x_1=3$

---

$\frac{-26x+14}{4x-2}\ge0$
$-26x+14\ge0$
$-26x\ge-14$
$26x\le14$
$x\le\frac{14}{26}$
$x\le\frac{7}{13}$

---

$(x+2)^2=x^2+40$
$x^2+2x2+2^2=x^2+40$
$x^2+4x+4=x^2+40$
$x^2+4x-36=x^2$
$4x-36=0$
$4x=36$
$x=9$

---

Pokud se obě strany zvětší o $2 cm$, obsah se zvětší o $34cm^2$.
Jestliže stranu A zmenšíme o $1 cm$, a stranu B zvětšíme o 1 cm, zmenší se o $6cm^2$.
Jaký je obvod

$(x+2)(y+2)=xy+34$
$(x-1)(y+1)=xy-6$

$xy+2y+2x=xy+34$
$xy+x-y=xy-6$

$2y+2x=34$; Obvod
$x-y=-6$

---

Maturity

A+C = 37
B+C = 35
D = 30
C = 12


---

Trojciferný číslo má součet cifer 22. Když vyměníme první a třetí cifru, dostaneme číslo o 297 větší než bylo původní číslo. A když vyměním u původního čísla třetí a druhou cifru, dostaneme číslo o 18 větší než původní.

$x+y+z=22$
$x+10y+100z=100x+10y+z+297$
$100x+y+10z=100x+10y+z+18$

$x=6$
$y=7$
$z=9$

---

Rozdíl čísla x a jeho druhé odmocniny je -0.24.
$x - \sqrt{x}=-0.24$
$-\sqrt{x}=-0.24-x$
$x=(0.24+x)^2$
$x=0.0576+2x0.24+x^2$
$x=0.0576+0.48x+x^2$
$x^2+0.52+0.0576=0$
$D=b^2-4ac$
$D=0.52^2-4*1*0.0576$
$D=0.2704-0.2304$
$D=0.04$
$\sqrt{D}=0.2$
$x=\frac{-b^2\pm\sqrt{D}}{2a}$
$x=\frac{-0.52\pm0.2}2$
$x_1=\frac{-0.32}2=-0.16$
$x_2=\frac{-0.72}2=-0.36$

---

Součet x a jeho druhé odmocniny $3.75$

$x+\sqrt{x}=3.75$
$\sqrt{x}=3.75-x$
$x=14.0625-2x3.75+x^2$
$x=14.0625-7.5x+x^2$
$14.0625-8.5x+x^2=0$

---

Aleš, Bohouš a Ctibor vykonají společně práci za 6 hodin.
Aleš ji vykoná za 15h
Bohouš za 18h
Za jak dlouho ji udělá Bohouš s Ctiborem.

---

(hlavolamikon 60; str 94)
Kód k trezoru tvoří sekvence čísel 1,2,3,4,5,6, přičemž každé číslo se použije právě jednou. První dvě čísla kódu tvoří dvojciferné číslo, které když vynasobíme třetí číslicí kódu, dostaneme trojciferné číslo, které tvoří druhou polovinu kódu. Jaký je kód?

543162

---

(hlavolamikon 61G; str 94)
Haně a Daně je dohromady 52 let. Haně je třikrát tolik let, než bylo Daně, když bylo Haně dvakrát tolik, než je Daně dnes. Kolik let jim je?

$H+D=52$

$H=36$
$D=16$

---

Robot Emil se pohybuje po čtvercové síti s šedými překážkami následujícím způsobem
- pokud je před Emilem volno, postoupí o jedno políčko.
- pokud je před ním políčko, otočí se o $90\degree$. Pokud je volno, posune se, jinak se zastaví
| 0             | 0   | 0   | 0   |
| ------------- | --- | --- | --- |
| 0             | 1   | 0   | 0   |
| $\rightarrow$ | 0   | 1   | 0   |
| 0             | 0   | 1   | 0   |

Robot Emil stojí na čtverci A2 ve směru šipky. Na kterém čtverci se roboot zastaví.