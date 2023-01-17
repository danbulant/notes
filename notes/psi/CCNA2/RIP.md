# RIP
Sdílí routes s jiným routerem
[IP Routing: RIP Configuration Guide, Cisco IOS Release 15M&T - Configuring Routing Information Protocol [Cisco IOS 15.4M&T] - Cisco](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_rip/configuration/15-mt/irr-15-mt-book/irr-cfg-info-prot.html)

`Router(config)#router rip`
`Router(config-router)#version 2` - je nutné mít dobrou verzi
`Router(config-router)#network X.X.X.X` - nastaví že se `X.X.X.X` bude redistribuovat přes RIP
`Router(config-router)#redistribute static` - nastaví že se budou redistribuovat všechny statické route.
`Router(config-router)#neighbor X.X.X.X` - nastaví že se mají sdílet do `X.X.X.X` 

V `#show ip route` (`(config)#do show ip route` a pod.) se zobrazí přes `R` route co dostal.