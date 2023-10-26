# Modulární aritmetika

## Grupy

Grupa je označena jako operace $\cdot$, neznamená násobení

### Omezenost

$(\forall x \in M)(\forall y \in M)(x\cdot y\in M)$

Po operaci je výsledek stále uvnitř dané množiny.

### Asociativnost
$(\forall x\in M)(\forall y\in M)(\forall z\in M)(x\cdot y\cdot z=(x\cdot y)\cdot z=x\cdot(y\cdot z))$
Nezáleží na závorkách - ovšem neznamená že nezáleží na pořadí

### Existence neutrálního prvku
$$(\forall x \in M)(\exists n \in M)(x \cdot n=n \cdot x=x)$$

### Existence inverzního prvky
$$(\forall x\in M)(\exists i \in M)(x\cdot i=n)$$

---

## Příklady
Příkladem grupy je sčítání a modulo zároveň. Modulo je zbytek po celočíselném dělení.
$a+_6b=mod(a+b,6)$

$$3+_69+_610=3+3+4=4$$
$$35+_{14}33+_{14}17=35+_{14}33+_{14}17=85+_{14}=1$$
$$34+_{16}+38_{16}+_{16}42=2+6_{16}+_{16}10=2$$

---

## Inverze
Pro zjištění inverzního čísla lze použít Rozšířený Euklidův algoritmus

$5\in\mathbb{Z}_{131}$

|         | $\alpha$ | $\beta$ | q   |
| ------- | -------- | ------- | --- |
| $a=131$ | 1        | 0       |     |
| $b=5$ | 0        | 1       | 26  |
| 1       | 1        | -26     |     |

$5^{-1}=105$
$131-26=105$

---

$217 \in Z_{47}$ => $29$

|        | $\alpha$ | $\beta$ | q   |
| ------ | -------- | ------- | --- |
| $a=47$ | 1        | 0       |     |
| $b=29$ | 0        | 1       | 1   |
| 18     | 1        | -1      | 2   |
| 11     | -2       | 3       | 4   |
| 3      | 9        | -13     | 15  |
| 2      | -137     | 198     | 23  |
| 1      | 3160     | -4567        |     |

$29^{-1}=39$
spatne :)))

---

|         | $\alpha$ | $\beta$ | q   |
| ------- | -------- | ------- | --- |
| $a=299$ | 1        | 0       |     |
| $b=109$ | 0        | 1       | 2   |
| 81      | 1        | -2      | 3   |
| 56      | -3       | 7       | 5   |
| 19      | 16       | -37     | 15  |
| 14      | -243     | 562     | 21  |
| 5       |          |         |     |
