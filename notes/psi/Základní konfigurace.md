---
tags: [psi]
---
# Základní konfigurace
## Sdílené
Módy:
- `>` user mode
- `#` root mode
- `(config)#` editing config
- `(config-line)#` editing line

`> enable` na změnu na root mode
`# cofigure terminal` na konfiguraci terminálu
`(config)# hostname XX` změna hostname zařízení na XX
`(config)# line console 0` na konfiguraci line
`(config-line)# password XX` nastavení hesla
`(config-line)# login` potvrzení
`(config-line)# exit` zpět
`(config)# line vty 0 ?` nastavení vty, místo ? max číslo (otazník zobrazí počet); nastavení stejně jak u console
`(config)# service password-encryption` zapne šifrování hesel
`(config)# no ipdomain-lookup` vypne DNS lookup v user mode (ctrl+6 zruší)
`(config)# exit`
`# copy running-config startup-config` uložení (running-config v paměti, startup-config)

## Switch
Informace vic [Switch](./Switch.md).
`(config)#interface FastEthernet 0/1` konfigurace linky 
`(config-if)#duplex auto` Zabrání kolizím
`(config-if)#speed auto` Automaticky vybere rychlost
`(config-if)#mdix auto` Automaticky detekuje typ kabelu a nastaví správně
`#show mac-address-table` Zobrazí tabulku MAC adres na porty

## Router
`(config)#interface GigabitEthernet 0/0/0`
`(config-if)#speed auto` Automaticky vybere rychlost
`(config-if)#ip address 192.168.0.1` Nastaví IP adresuc