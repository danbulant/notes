# RIP
Sdílí routes s jiným routerem

`Router(config)#router rip`
`Router(config-router)#version 2` - je nutné mít dobrou verzi
`Router(config-router)#network X.X.X.X` - nastaví že se `X.X.X.X` bude redistribuovat přes RIP
`Router(config-router)#redistribute static` - nastaví že se budou redistribuovat všechny statické route.
`Router(config-router)#neighbor X.X.X.X` - nastaví že se mají sdílet do `X.X.X.X` 

V `#show ip route` (`(config)#do show ip route` a pod.) se zobrazí přes `R` route co dostal.