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
`(config)# enable secret XX` změní heslo do enabled módu na XX
`(config)# line console 0` na konfiguraci line
`(config-line)# password XX` nastavení hesla pro line/serial
`(config-line)# login` zapnutí přihlašování
`(config-line)# exit` zpět
`(config)# line vty 0 ?` nastavení vty, místo ? max číslo (otazník zobrazí počet); nastavení stejně jak u console
`(config)# service password-encryption` zapne šifrování hesel
`(config)# banner motd XYYX` X znak odděluje zprávu (nesmí se objevit jinde ve zprávě), YY je banner co se bude zobrazovat
`(config)# login block-for 120 attempts 2 within 30` fail2ban
`(config)# no ipdomain-lookup` vypne DNS lookup v user mode (ctrl+shift+6 zruší)
`(config)# security passwords min-length 10` nastaví minimální délku hesla
`(config)# exit`
`# copy running-config startup-config` uložení (running-config v paměti, startup-config)
(`write` nelze použít u CCNA testů)

---


`(config-line)# loggging synchronous` synchronní logy
`(config-line)# exec-timeout 60` idle timeout
`(config-line)# password XX` nastaví heslo pro vybraný terminal

pro CCNA1 PTSA se musí nastavit `console 0`, `vty 0 4` (@SSH), `aux 0`

### SSH

`(config)# ip domain-name XX` nastaví doménu na XX (potřeba pro SSH)
`(config)# crypto key generate rsa` vygeneruje SSH klíč (zapne SSH)
`(config)# ip ssh version 2`
`(config)# ip ssh time-out 120` timeout na 120 vteřin, fail2ban
`(config)# line vty 0 4` config pro virtual terminal type
`(config-line)# transport input ssh` vybere SSH pro toto VTY
`(config-line)# login local` přihlášování přes lokální uživatele
`(config)# username XX privilege 15 password YY` (privilege značí práva, 15 je nejvyšší)

## Switch
Informace vic [Switch](./Switch.md).
`(config)#interface FastEthernet 0/1` konfigurace linky 
`(config-if)#duplex auto` Zabrání kolizím
`(config-if)#speed auto` Automaticky vybere rychlost
`(config-if)#mdix auto` Automaticky detekuje typ kabelu a nastaví správně
`#show mac-address-table` Zobrazí tabulku MAC adres na porty

`(config)#interface vlan 1`
`(config-if)#ip address XX YY` XX ipv4 adresa, YY maska
`(config-if)#no shutdown`
`(config-if)#ip default-gateway XX` nastaví XX jako default gateway

## Router
`(config)#interface GigabitEthernet 0/0/0`
`(config-if)#speed auto` Automaticky vybere rychlost
`(config-if)#ip address 192.168.0.1` Nastaví IPv4 adresu
`(config-if)#ipv6 address 2001:db8:acad:1::1/64` Nastaví [IPv6](IPv6.md) adresu (GUA)
`(config-if)#ipv6 address fe80::1 link-local` LLA [[IPv6]] adresa (LLA)
`(config-if)#no shutdown` zapne port (router má defaultně porty vypnuté)
`(config)#ipv6 unicast-routing` zapne IPv6 unicast