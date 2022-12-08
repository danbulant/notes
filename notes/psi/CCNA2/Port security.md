# Port security
`encapsulation dot1q` - router on a stick, použije router na routování vlan, funguje jako trunk
`(config-if-range)# switchport port-security maximum 1` nastaví maximum adres na 1.
`switchport port-security violation restrict` omezí počet portů (ignoruje zařízení nad povolený limit).
`switchport port-security aging time 60` nastaví délku omezení při porušení pravidla na 60 minut.
`show port-security interface fastEthernet 0/1` zobrazí status port security.