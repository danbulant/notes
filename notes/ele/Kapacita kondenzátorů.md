---
tags: [ele]
---
# Kapacita kondenzátorů
## Permitivita
```
  | +
-----
   dielektrikum
------
  | -
```

## Dielektrikum
Dipoly se otáčí od plusu k mínusu.
Slouží jako izolat ze začátku, po nahromaděním náboje začne protýkat proud.


## Výpočet
1. $C=\frac{Q}{U}$; Q = [elektrický náboj](./Náboj,%20proud,%20napětí%20a%20odpor.md#Náboj%20-%20Q) (C), U = [elektrické napětí](./Náboj,%20proud,%20napětí%20a%20odpor.md#Napětí%20-%20U) (V)
2. $C = \epsilon * S/I$ S = plocha desek kondenzátoru (elektrod) ($m^2$), I = tloušťka dielektrika (vzdálenost elektrod)($m$)

### Permitivita dielektrika ε
$[\epsilon] = F/m$ Farad/metr
$\epsilon = \epsilon_r * \epsilon_0$
$\epsilon_r$ = relativní permitivita (bez jednotek)

## Příklady
1.  Vypočtěte kapacitu svitkového kondenzátoru s dielektrikem, jehož relativní permitivita je $144*10^3$. Plocha elektrod je $677 cm^2$ a tloušťka dielektrika je $788 \micro m$. 

$C = ?$
$\epsilon_r = 144*10^3$
$S = 677cm^2 = 6.77 * 10^{-2} m^2$
$I = 788\micro m = 7.88 * 10^{-3} m$
$\epsilon = \epsilon_r * \epsilon_0 = 144*10^3*8854*10^{-12} F/M = 1274976 * 10^{-9} F/M$
$C = \epsilon * S/I = 1274976 * 10^{-9} * 6.77 * 10^{-2} * 7.88 * 10^{-3} = 68016909.6576 * 10^{-14} F$

2.  Vypočtěte náboj na elektrodách kondenzátoru, jehož kapacita je $355 nF$, plocha elektrod je $455 cm^2$ a je na něm napětí $800 V$. 

$Q = ?$
$C = 355nF = 355 * 10^{-9} F$
$U = 800V$
$S = 455cm^2 = 455 * 10^{-2}m^2$
$C = \frac{Q}{U} = 355 * 10^{-9}F = \frac{Q}{800}$
$Q = \frac{800 * 355 * 10^{-9}}1 = 2.84 * 10^{-4}C$

3.  Vypočtěte napětí na kondenzátoru o kapacitě $2.2 nF$, na jehož elektrodách je náboj $7.88 C$. 

$U = ?$
$C = 2.2nF = 2.2 * 10^{-9}F$
$Q = 7.88C$
$U = \frac{Q}{C} = \frac{7.88}{2.2*10^{-9}} = 3.5\overline{81} * 10^{9}V$

4.  Vypočtěte hodnotu kapacity, kterou je nutno připojit paralelně ke kondenzátoru o kapacitě $118 pF$, aby výsledná kapacita byla $0.455 nF$. 

$C_1 = ?$
$C_2 = 118pF= 118 * 10^{-12}F$
$C = 0.455nF = 455 * 10^{-12}F$
$C = C_1 + C_2 = C_1 + 118 * 10^{-6}F$
$C_1 = C - C_2 = 455 * 10^{-12} - 118 * 10^{-12} = 337 * 10^{-12}F$

5. Vypočtěte kapacitu sériově zapojených kondenzátorů o kapacitách $566 \micro F$ a $45 \micro F$.

$C = \frac1{\frac1{C_1} + \frac1{C_2}}$
$C_1 = 566\micro F$
$C_2 = 45 \micro F$
$C = \frac1{\frac1{566} + \frac1{45}} = \frac1{\frac{45}{25470} + \frac{566}{25470}} = \frac1{\frac{611}{25470}} = 41.68 \micro F$
