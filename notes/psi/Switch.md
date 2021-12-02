---
tags: [psi]
---
# Switch
Rámec obsahuje MAC adresu odesílatele a příjemce.
Přeposílá rámce mezi více počítači.

## MAC Tabulka
Ukládá mapu MAC adres a portů.
Když se počítač přesune mezi porty, smaže předchozí záznam.
Když nemá cílovou adresu v tabulce, pošle všem (flooding).
Na jednom portu může být více adres (například další switch).