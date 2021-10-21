---
tags:
  - har/cpu
  - har/cpu/alu
  - har/cpu/fpu
  - har/cpu/gpu
  - har/cpu/controller
  - har/cpu/registers
  - har/cpu/cache
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