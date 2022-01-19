---
tags: [har]
---
# Pipelining
Zřetězené zpracování instrukcí

- instrukce je rozdělena na fáze
- 4 až 5 fází (kroků)

Např:
1. výběr instrukce - instruction fetch IF
2. dekódování - instruction decode ID
3. výběr operandů - execute EX
4. čtení/zápis paměti - memory access MEM
5. zápis výsledku - writeback WB

- použití více fází se ukázalo být na škodu a od architektury procesorů Core se jejich počet začal opět snižovat

## Sekvenční
Jedna instrukce po druhé
## Skalární
Efektivnější rozložení, když se dekóduje jedna už se vybírá další
## Superskalární
Dvě a více funkčních jednotek provádí pipelining.
Dvě instrukce se vybírají, pak se dvě dekódují a zároveň další dvě vybírají.
## Hyper pipelining
až dvě desítky fází v jedné pipeline
- problém s datovými závislostmi, což částečně může řešit hyper threading

## Nevýhody
- Jedna instrukce potřebuje data, která jsou výsledkem instrukce předchozí
- instrukce nezná adresu paměti odkud má přečíst
- delší pipeline znamená více datových i adresových závislostí
- vznikají prázdná místa (bublinky), což zapříčiňuje snížení výkonu

