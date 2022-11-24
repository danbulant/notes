# DHCP

jde jak na switch tak na router. Na větších sítích se použije Radius a pod.

`ip dhcp excluded-address {low-address} [high-address]`
`(config)#ip dhcp pool {pool-name}`

`(dhcp-config)#`
`network {network-number} [mask| / prefix-length]`
`default-router {address} [address2..8]`
`dns-server {address} [address2..8]`
`domain-name {domain}`
`lease {days [hours [minutes]] | infinite}`
`netbios-name-server {address} [address2..8]`

V podstatě jenom network a default-router je třeba.

## Příklad

![](Pasted%20image%2020221124183300.png)

## Klient

`(config-if)# ip address dhcp`
