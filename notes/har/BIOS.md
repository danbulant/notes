---
tags: [HAR]
---
# BIOS
Basic input output system
Základní program
Rozpoznává a aktivuje komunikaci veškerého HW
testuje funkčnost PC - [[#POST]]
zavádí operační systém ze spouštěcího oddílu disku

> **BIOS** ([anglicky](https://cs.wikipedia.org/wiki/Angli%C4%8Dtina "Angličtina") _Basic Input-Output System_) implementuje základní [vstupně](https://cs.wikipedia.org/wiki/Vstupn%C3%AD_za%C5%99%C3%ADzen%C3%AD "Vstupní zařízení")–[výstupní](https://cs.wikipedia.org/wiki/V%C3%BDstupn%C3%AD_za%C5%99%C3%ADzen%C3%AD "Výstupní zařízení") funkce pro počítače [IBM PC kompatibilní](https://cs.wikipedia.org/wiki/IBM_PC_kompatibiln%C3%AD "IBM PC kompatibilní") a představuje vlastně [firmware](https://cs.wikipedia.org/wiki/Firmware "Firmware") pro [osobní počítače](https://cs.wikipedia.org/wiki/Osobn%C3%AD_po%C4%8D%C3%ADta%C4%8D "Osobní počítač"). Až do příchodu Windows 8 se BIOS používal při startu počítače pro inicializaci a konfiguraci připojených [hardwarových](https://cs.wikipedia.org/wiki/Hardware "Hardware") zařízení a následnému spuštění operačního systému, kterému je pak předáno další řízení počítače. V novějších počítačích (zhruba od druhé dekády 21. století) je postupně nahrazován systémem [UEFI](#UEFI).

## MBR
Master boot record.
Partition table na disku (rozdělení na části disků, umožňuje více file systému a další rozdělení)
## POST
Power on self test
Beep Code

## 3 vrstvy
### První vrstva
Flash ROM, dříve EEP ROM
musí být hned dostupná po startu.
detekuje HW
### Druhá vrstva
CMOS čip, ukládá set nastavení BIOS a čas.
### Třetí vrstva
Ovladače jádra OS
Jsou uloženy v základní desce, rozšiřující kartách, v pamětech, v procesoru
zavádějí se v průběhu spouštění systému.

# UEFI
Novější verze BIOSu.
Unified Extensible Firmware Interface

> **Unified Extensible Firmware Interface** (**UEFI**, v překladu _jednotné rozšiřitelné firmwarové rozhraní_) je specifikace, která definuje softwarové [rozhraní](https://cs.wikipedia.org/wiki/Rozhran%C3%AD "Rozhraní") mezi [operačním systémem](https://cs.wikipedia.org/wiki/Opera%C4%8Dn%C3%AD_syst%C3%A9m "Operační systém") a [firmwarem](https://cs.wikipedia.org/wiki/Firmware "Firmware") použitého [hardwaru](https://cs.wikipedia.org/wiki/Hardware "Hardware"). UEFI je určeno jako významně vylepšená náhrada zastaralého firmwarového rozhraní [BIOS](https://cs.wikipedia.org/wiki/BIOS "BIOS"), které se používalo během celé historie [IBM PC kompatibilních](https://cs.wikipedia.org/wiki/IBM_PC_kompatibiln%C3%AD "IBM PC kompatibilní") [osobních počítačů](https://cs.wikipedia.org/wiki/Osobn%C3%AD_po%C4%8D%C3%ADta%C4%8D "Osobní počítač").[[1]](https://cs.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#cite_note-1) Specifikace UEFI je spravována aliancí [Unified EFI Forum](https://cs.wikipedia.org/w/index.php?title=Unified_EFI_Forum&action=edit&redlink=1 "Unified EFI Forum (stránka neexistuje)"), avšak původně byla vyvinuta společností [Intel](https://cs.wikipedia.org/wiki/Intel "Intel") pod kratším názvem EFI.

### Secure boot
Ověřuje klíče před spuštěním, zabrání modifikacím boot loaderu.
Od Microsoftu.
### GPT
Umí disky víc jak 2TB.
Partition table na disku.
