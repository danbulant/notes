# Ohmův zákon
$I = \frac{U}{R}$
$I$ = [Proud](Vzorníček.md#Proud%20I)
$U$ = [Napětí](./Vzorníček.md#Napětí%20U)
$R$ = [Odpor](./Vzorníček.md#Odpor%20R)

---
Ponorným vařičem prochází při napětí 230V proud 3.8A. Určete odpor vařiče. Proč musí být vařič vždy zcela ponořen do vody?

$I = 3.8A$
$U = 230V$
$I = \frac{U}{R}$
$3.8A  = \frac{230V}{R}$
$R = 230V * 3.8A = \underline{874 \ohm}$

Aby měl co největší odpor a nezkratoval.

---
Tři stejné rezistory o odporu $2 k\ohm$ jsou spojeny dvojím způsobem. Určete odpory obvodů.
![](Pasted%20image%2020220124093528.png)

a:
$R = R_1 + \frac{1}{\frac{1}{R_1} + \frac{1}{R_1}}$
$R = 2 + \frac{1}{\frac{1}{2} + \frac{1}{2}} k\ohm$
$R = 2 + \frac{1}{1} = 3 k\ohm$

b:
$R = \frac1{\frac1{R_1} + \frac1{R_1 + R_1}} = \frac1{\frac1{2} + \frac1{2 + 2}}$
$R = \frac1{\frac12 + \frac14} = \frac1{\frac24 + \frac14} =\frac1{\frac34} = \frac43 k\ohm$

---
Čtyři stejné rezistory o odporu $1k\ohm$ jsou spojeny dvojím způsobem. Dokažte, že celkový odpor obvodu bude stejný.
![](Pasted%20image%2020220124094831.png)

a:
$R = \frac1{\frac1R_1 + \frac1R_1} + \frac1{\frac1R_1 + \frac1R_1}$
$R = \frac1{\frac11 + \frac11} + \frac1{\frac11 + \frac11} = \frac1{2} k\ohm$

b:
$R = \frac1{\frac1{R_1 + R_1} + \frac1{R_1 + R_1}}$
$R = \frac1{\frac1{1+1} + \frac1{1+1}} = \frac1{\frac22} = \frac22 = 1k\ohm$

---
Čtyři stejné rezistory jsou spojeny dvojím způsobem. Určete, při kterém spojení má obvod větší celkový odpor.
![](Pasted%20image%2020220124095434.png)

$A \gt B$

a:
$$R = R_1 + R_1 + \frac1{\frac1R_1 + \frac1R_1} = 2R_1 + \frac1{\frac2R_1} = 2R_1 + \frac{R_1}2 = 2.5R_1$$

b:
$$R = R_1 + \frac1{\frac1R_1 + \frac1{R_1 + R_1}} = R_1 + \frac1{\frac{3}{2R_1}} = \frac{5R_1}{3}$$
