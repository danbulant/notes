# DHCP
v `(config)#`

vytváří se pooly odkud se berou adresy
`ip dhcp pool Marketing`

→ `(dhcp-config)#`

Range: `(dhcp-config)# network 192.168.0.1 255.255.255.0` (`net IP MASK`)
Default gateway: `(dhcp-config)# default-router 192.168.0.1`
DNS: `(dhcp-config)# dns-server 1.1.1.1`

vynechat adresu (důležité pro default gateway): `(config)# ip dhcp excluded-address 192.168.0.1`

