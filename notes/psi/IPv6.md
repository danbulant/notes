---
tags: [psi]
---
# IPv6
128bitová adresace

## Zápis
hexadecimálně, po 4 znacích (2 byte), odděleno `:`. Jednou se může použít `::`, které doplní zbývající místa 0. 0 na začátku se dají vynechat.

`f::1` = `000f:0000:0000:0000:0000:0000:0000:0001`

## GUA
Globally unique address
`/64` vždy

48 bitů **Global Routing Prefix**, 16 bitů **Subnet ID**, 64 bitů **Interface ID**

## LLA
Link local address
`fe80::/10` 

Z pravidla má poslední 4 části stejné (druhých 64bitů) jako GUA.

```
IPv6 Address. . . . . . . . . . . : 2001:db8:acad:1:fc99:47ff:fe75:cee0
Link-local IPv6 Address . . . . . : fe80::fc99:47ff:fe75:cee0
Default Gateway . . . . . . . . . : fe80::1
```

## Multicast
`ff00::/8` prefix
`ff02::1` všichni klienti
`ff02::2` všechny routery

## Cisco

`show ipv6 interface` případně kratší verze `show ipv6 interface brief`
`show ipv6 route` pro routovací tabulku