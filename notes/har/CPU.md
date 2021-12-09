---
tags:
  - har
---
# CPU
Základní úlohou mikroprocesoru je pracovat podle pokynů určitého programu nebo hardwaru v počítači či jiném podobném zařízení (tablet, smart phone...)

Využívá různě složitých programových instrukcí, které jsou zpracovány na základě jednoduchých logický operací.

Je mozkem počítače, kvalita CPU zásadně ovlivňuje výkon celého počítače.

## Sekce CPU
Hlavní část procesoru je jeho jádro (integrovaný obvod)

Toto jádro je připevněno na základnu procesoru (plošný spoj) s piny.

Jádro CPU je ukryto v pouzdře (kov, keramické sloučeniny), které odvádí zbytkové teplo a také poskytuje ochranu jemným obvodům jádra.

### Arithmetic-logic unit - ALU
Jedna ze základních komponent procesoru, ve které se provádějí všechny aritmetické a logické výpočty.
### Floating-point unit - FPU
Matematický koprocesor určený na vykonávání operací s čísly s pohyblivou řadovou čárku.
### Graphic processing unit - GPU
Většina moderních procesorů má v sobě základní grafickou výpočetní jednotku dostačující pro běžnou práci a multimédia.
### řadič - CPU controller
Elektronická řídící jednotka, realizovaná sekvenčním obvodem, která řídí činnost všech částí počítače.
### registry
Malá úložitě dat umístěná v mikroprocesoru, jejichž obsah lze načíst mnohem rychleji, než data uložená kdekoliv jinde v počítači.
### vyrovnávací paměť - Cache
Je vlastně jakýmsi překladištěm dat mezi rychlejším a pomalejším zařízením v počítači a slouží jako dočasná paměť.

## Funkce
- procesor přečte ze vstupního registru posloupnost 1 a 0 (bitů)
- dekóduje tento řetězec na instrukci
- tuto instrukci nalezne v instrukční sadě a provede
- výsledek uloží do registru výstupního

## Parametry
- vnitřní frekvence
- počet fyz. jader
- šířka datové sběrnice
- typ použité instrukční řady (CISC vs RISC)
- kapacita a typ použití vyrovnávací paměti
- kapacita a typ použitých registrů
- patice (socket), podpora konkrétních čipových sad na základní desce
- podpora konkrétních modulů operační paměti
- výrobce...

## Instrukční sada
- Vnitřní programové vybavení procesoru
- strojový kód se přepíše na mikroinstrukce, které jsou přímo spustitelné

### CISCI
Complete instruction set of computer

Komplexní program, složitější adresování, více instrukcí

méně zatěžuje sběrnice, posílá méně dat.

### RISC
Redukovaná sada, snaha o co nejrychlejší běh procesoru místo aby měl co nejvíce instrukcí. Většina instrukcí se provádí během jednoho strojového cyklu.

Novější než CISC.

## Typy

### CPU
Hlavní procesor
### GPU
Grafika
### MCU
![Micro Controller Unit](./Micro%20Controller%20Unit.md)
### APU
**Accelerated Processing Unit**
CPU + GPU v jednom obalu; většina moderní "CPU".
### DSP
**Digital Signal Processor**
### NPU
**Network Processor Unit**