---
tags: [har]
---
# Základní deska
Propojuje komponenty.

AT jen propojuje,
ATX obsahuje vlastní komponenty (zvukovou kartu, síťovou a podobně)

Propojení přes sběrnice.
Plošný spoj je nejčastěji laminátová deska ze skelné tkaniny sycená epoxidovou pryskyřicí, a níž jsou vytvořeny vodivé cesty z mědi (sběrnice)

## Severní můstek
Procesor, grafická karta
## Jižní můstek
IO, SATA...

## Beep codes
Značí chyby, pípá přes pípák

## Chipset
Vnitřní hodiny.
Taktovací signál pro CPU.
Udává takt procesoru, sběrnici i periférií.
řídí komunikaci na základní desce.

## Sběrnice
Soustava měděných obvodů.
vzájemně propojuje jednotlivé komponenty
propustnost ovlivňuje výkon

šířka - jeden bit = jeden vodič
rychlost - Hz

propustnost - bytes/s

### Typy
- systémová - CPU a chipset
- paměťová - CPU a RAM
- rozšiřující - PCI a PCIe 1x, 2x, 4x
- grafická - PCIe 16x

### Druhy
- řídící 
- nesdílená (vyhrazená pro určitý typ dat)
- sdílená (multiplex) - stejné adresové a datové vodiče pro přenos různých typů dat (nutnost režie, obvykle pomocí řadiče)

### Řadiče
- řídí přenos dat po sběrnicích
- periférie s vyšší prioritou má přednost

### Podle přenosu
- sériové
- pararelní

### Podle směru přenosu
- jednosměrné (simplex)
- obousměrné (half-duplex, full-duplex)

### Podle synchronizace
#### Synchronní
- čekají
- mají synchronizační kanál
- náročnější na výrobu, ale méně náročný na sběrnici
#### Asynchronní

### Multimastering
- provoz sběrnice může řídit některá z rozšiřujících karet
- karta vykonává část práce CPU
- výhodný režim když si data vyměňují dvě periferie

### Burst
- původně se data přenášela v krátkých blocích
- burst přenáší data ve skupinkách (burst mode na gunách)
- sdruží data směřující na stejnou adresu a přenese je najednou

### PCI
Peripheral Component Interconnect

- pararelní přenos dat (32 nebo 64 bitů u PCI-X)
- rychlost je 33MHz pro 32bit a 66 a 133MHz pro 64bit
- více nezávišlých PCI sběrnic na jednom počítači
- synchronní sběrnice
- nejvyšší teoretická propustnost 1066MB/s

### PCI-E
PIC Express
- náhrada starších standardů
- není sběrnice, jedná se o dvoubodové spoje
- data jsou přenášena bez adresy (adresace zařízení)
- seriálový přenos data
- full duplex (oběma směry najednou přes dva vodiče)
- verze jsou podle počtu linek (x1, x2, x4, x8, x16)
- nejvyšší teoretická propustnost verze 3.0 je 16GB/s (v každém směru)

## PC
### PC/AT
Advanced Technology
### PC/ATX
Advanced Technology eXtended
- aktuálně používaný (od roku 1995)
- od AT se liší napájením, nová napěťová větev 3.3V (a je napájen stále, ve standby mode)
- SW řízení napájení i spínání (možnost [WOL](WOL.md))
- změnily se rozměry a usporádání prakticky všech komponent počítače
- vysoký výkon napájecích zdroju
### PC/BTX
- slepá vývojová větev firmy Intel z roku 2004/2005
- byla lepší, ale neprosadila se