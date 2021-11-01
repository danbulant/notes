---
tags:
  - mat
  - mat/množiny
---
# Množiny
Množina je souhrn nějakých předmětů (prvků množiny).
- $x \in A$ - $x$ je prvkem množiny $a$
- $x \notin A$ - $x$ nenní prvkem množiny $a$
[[Číselné obory]]
Prázdná množina nemá žádný prvek, píčeme $C = \varnothing$ nebo jen $\varnothing$, nebo prázdnou množinu $\{\}$

## Průnik množin
$\cap$

$$
A \cap B = \{\forall x \in M : x \in A \wedge x \in B\}
$$
- $\wedge$ - a zároveň
- $\forall$ - pro všechny

## Podmnožina
$\subseteq$
$$
A \subseteq B \Leftrightarrow \forall x \in A : x \in B
$$
Množina A je podmnožinou množiny B právě tehdy, když pro všechna x ležící v A platí že x je prvkem množiny B.

## Sjednocení množin
$\cup$
$$
A \cup B = \{\forall x \in M: x \in A \wedge x \in B\}
$$
Sjednocení množin A, B je množina všech prvků které patří alespoň do jedné z množin A, B.
## Doplněk množiny
$a'$
$$
A' = \{ \forall x \in M: x \notin A \}
$$
Doplnění množiny o prvky které nejsou v původní množině.
## Rozdíl množin
$a-b$
$$
A-B = \{ \forall x \in A \wedge x \notin B\}
$$
Všechny prvky množiny A které nejsou v množině B.

## Příklady
$$
A \cap (B \cup C) = { \forall x \in M : x \in A \wedge (x \in B \wedge x \in C)}
$$
$$
(A \cap B) \cup (B \cap C) \cup (A \cap C) - A \cap (B \cap C)
$$