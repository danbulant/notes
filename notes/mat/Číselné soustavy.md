# Číselné soustavy
## Používané
- decimální / desítková
- hexadecimální / šestnáctková
- binární / dvojková

## Převádění mezi soustavama
- Rozdělíme číslo na jednotlivé cifry ($1 + 2 + 3$)
- Vynásobíme hodnotou zdrojové soustavou umocněnou na pořadí (index) cifry, počítá se od nuly ($1*10^2 2*10^1 3*10^0$) = ($100 + 20 + 3$)
- Sečteme výsledky ($100 + 20 + 3 = 123$) - hodnota čísla v desítkové soustavě
- Postupně budeme dělit a zbytek se použije jako hodnota ($123 / 16 = 7 zb. 11$ -> $7 / 16 = 0 zb 7$)
- Zápíšeme čísla od posledního ($11 = B; 7 = 7$ -> $7B$)