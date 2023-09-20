# Modulární aritmetika

## Grupy

### Omezenost

### Existence neutrálního prvku
$$(\forall x \in M)(\exists n \in M)(x \cdot n=n \cdot x=x)$$

### Existence inverzního prvky
$$(\forall x\in M)(\exists i \in M)(x\cdot i=n)$$

---

## Příklady
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
| $b=131$ | 0        | 1       | 26  |
| 1       | 1        | -26     |     |

$5^{-1}105$
