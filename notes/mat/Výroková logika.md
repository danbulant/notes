# Výroková logika
**Výrok** je sdělení, u něhož má smysl otázka, zda je či není pravdivé.

## Konjukce
- Konjukce libovolných výroků $a, b$ je výrok, který vznikne jejich spojením spojkou **a** (nebo **a zároveň**, někdy **i**), zapisujeme $a \wedge b$ a čteme **$a$ a zároveň $b$.**
- Konjukce je pravdivá pouze, když jsou pravdivé oba výroky $a, b$.

## Disjunkce
- Disjunkce libovolných výroků $a, b$ je výrok, který vznikne jejich spojením spojkou nebo. Píšeme $a \vee b$ čteme $a$ **nebo** $b$.
- Disjukne je pravdivá když alespoň jeden z výroků je pravdivý.

## Tabulka pravdivostních hodnot
| $a$ | $b$ | $a \wedge b$ | $a \vee b$ | $a \Rightarrow b$ |
| --- | --- | ------------ | ---------- | ------ |
| 1   | 1   | 1            | 1          | 1      |
| 1   | 0   | 0            | 1          | 0      |
| 0   | 1   | 0            | 1          | 1      |
| 0   | 0   | 0            | 0          | 1      |

## Implikace
Implikace libovolných prvků $a$, $b$ je výrok, který vznikne jejich spojením slovním obratem **jestliže, pak**, píšeme $a \Rightarrow b$, a čteme **jestliže** $a$, **pak** $b$.
### Obrácená implikace
$a \Rightarrow b$ -> $b \Rightarrow a$
není ekvivalentní
### Obměnná implikace
$a \Rightarrow b$ -> $\neg b \Rightarrow \neg a$
je ekvivalentní
## Příklad
$(a \wedge b) \Rightarrow a$ je pravdivý vždy. Nazývá se **tautologie**.