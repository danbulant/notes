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