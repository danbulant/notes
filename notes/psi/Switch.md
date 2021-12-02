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

## Forward
Nastaví jak má posílat framy dál.
Fast forward posílá hned, ale může posílat chyby.
Fragment free posílá po první 64 bytech, takže má menší chybovot.
Ten třetí posílá až když má celé framy v paměti, neposílá chyby a šetří tím bandwidth, ale zase zvyšuje latency.

## Duplex
Full-duplex nebo half-duplex, pokud nejsou na obou stranách linek stejné tak jsou kolize.

## Auto MDIX
Detekuje křížový či přímý kabel a automaticky nastaví.