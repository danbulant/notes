---
tags: [psi]
aliases: [IP address, IP adresa, IP adresy]
---
# Adresace
Přes IP adresy

Zapisují se pomocí oktet oddělené tečkou (0.255.0.255)
## Maska
značí se /bity, kde bity je počet bitů který se němení v lokální síti.
Obvykle /24 nebo /16

Dá se též zapsat jako oktet (/24 je 255.255.255.0).

## Broadcast
Speciální adresa kde všechny bity neovlivněné maskou jsou 1.
192.168.0.0/24 -> 192.168.0.255
192.168.0.0/16 -> 192.168.255.255

## Použitelné adresy
První adresa má jeden bit na jedničku (192.168.0.1).
Poslední adresa má všechny bity **kromě jednoho** (jinak by byla kolize s broadcast) na jedničku (192.168.0.254)

## Třídy

### A
Privátní adresy, především pro lokální a firemní účely (např. VPN)

10.0.0.0/8 (10.0.0.1 -> 10.255.255.255)
### B
172.18.0.0/12 (172.18.0.1 -> 172.31.255.255)

### C
Lokální adresy

192.168.0.0/16 (192.168.0.1 -> 192.168.255.255)