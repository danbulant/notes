# EtherChannel

- propojení switchů přes několik linek (drátů), zvýší spolehlivost a rychlost
- musí být stejná rychlost, technologie, vlan
- až 8 linek
- nelze mixovat rychlosti ani technologie (Fast Ethernet a Gigabit nejde mixovat, ani ostatní)
- defaultně [Spanning Tree Protocol](Spanning%20Tree%20Protocol.md) vypne kabel, musí se proto nastavit EtherChannel. 
- konfiguruje se přes jeden interface, zařídí jednotnou konfiguraci mezi více fyzickýma interface.

## PAgP

- zajišťuje automatické nastavení rychlosti, STP a kontroluje že linka funguje.
- posílá pakety každých 30 vteřin
- cisco proprietární

### Mode

- **on** - manuální nastavení EtherChannel 
- **Desirable** - Automatické nastavení přes PAgP
- **Auto** - Automatické nastavení přes PAgP, ale nezačne komunikaci (druhý switch musí být na **Desirable**)
![](Pasted%20image%2020221124181111.png)

## LACP

Standardizovaná verze PAgP, v rámci IEEE 802.3ad.

## Konfigurace

### Setup
`s1(config)# interface range FastEthernet 0/1 - 2`
`s1(config-if-range)# channel-group 1 mode active`

### Info
`#show etherchannel summary`
`#show run | begin interface port-channel`
![](Pasted%20image%2020221124181810.png)
## Značení
![](Pasted%20image%2020221124180130.png)