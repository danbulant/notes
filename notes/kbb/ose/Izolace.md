## VM
Virtuální počítače poskytují větší separaci než containery, ale i sami se rozdělují do více kategorií podle míry izolace a rychlosti.

### Emulace
Nejpomalejší ale nejvíc flexibilní režim - emuluje se i procesor samotný a jeho instrukce. Je to potřeba jestliže cílový guest systém nepoužívá stejnou CPU architekturu, nebo pro největší oddělení host systému.

### Full virtualization
Plná virtualizace, používá se sice hardware akcelerace, ale guest systém nemusí poznat že je virtualizován a nepotřebuje pro to nic speciálního.

### Paravirtualization
OS ví že existuje hypervizor a spolupracuje s ním pro vyšší výkon, například u sítě se nebude emulovat fyzické rozhraní ale jen nějaký vyšší level, klávesnice nebude emulovat USB a podobně.

## Containery
S containery jste se již setkali, v linuxu jsou implementovány pomocí spojení více druhů namespaců.
Mají vyšší rychlost oproti VM na úkor menší izolace a většího attack surface.
V rámci virtualizace se lze setkat s termínem OS-level virtualization, je tím myšleno to stejné.

### Filesystem
Izolace FS funguje za využití mount points. Základní nástroj na tuto izolaci je `chroot`, který spustí nový proces v složce tak, že proces vidí danou složku jako root (`/`). Samozřejmě, ten program musí být v té složce, aby se mohl sám načíst a spustit.
No a pro ten program jsou potřeba i různé knihovny a virtuální zařízení.
Na arch pro to máte script `arch-chroot`, nebo si ty zařízení můžete vytvořit sami přes `mount`:
- `mount -t proc /proc proc/`  - `-t` vybere typ když nejde rozpoznat, což je nutný když mountujete celou složku takto
- `mount -t sysfs /sys sys/`
- `mount --rbind /dev dev/` - `rbind` rbind přidá i sub-mounty, což se by default nedělá

Za zmínku ovšem stojí, že taková izolace není moc izolace, jelikož program pořád uvidí systémové zařízení, procesy atd, a může pořád přečíst existující soubory, jelikož v /dev bude přímo disk jako takový. Do toho sice může číst a zapisovat jen root (id 1), ale rootů na systému může být vícero, k tomu se dostaneme za chvilku.
Chroot se proto nepoužívá běžně na zabezpečení, ale spíše nějaký nástroj nad tím který spojuje více izolací, ale používá se na předejití zbytečným chybám, například instalace balíčků či jejich kompilace běžně používá chroot aby se systém nedostal do rozbitého stavu (v nové root složce se zkompiluje, nainstaluje a otestuje software a následně se zkopírují změnené soubory do hlavní root složky), nebo také pro opravu systému, například když nestartuje kernel, můžete nabootovat z flashky a přes chroot se přepnout do "normálního" systému a opravit jej.

### Network
Síť se izoluje do namespaců. Fyzické zařízení (wifi karta, síťová karta) se připojí do jednoho z namespaců, většinou toho defaultního, a pak se v nich dají tvořit i virtuální zařízení, které mají vlastní routing tabulky, firewall etc. Každý namespace má vlastní localhost, který je ale izolovaný od ostatních, takže poslouchání na lokální portu na localhost umožní připojení jen v rámci stejného namespace, na což můžete narazit u containerů běžně. Obecně, izolace umožňuje mít vícero věcí pod stejným názvem uvnitř různých namespace.

### CGroups
V tomto případě jde o dvě věci - o CGroups samotné, které umožňují omezit používané zdroje (RAM, CPU time etc), a o jejich izolaci, kdy program nemusí vidět všechny cgroups v systému.

### UTS
Unix time-sharing, tady znamenající sdílení vypočetního výkonu.
Ale ta hlavní věc u toho je že se díky tomu dá změnit hostname a doména systému pro určité programy.

### IPC
Izoluje komunikaci mezi programama, primárně rozdělí sdílenou paměť tak, že v různých namespace může být stejný jméno pro jinou část sdílené paměti.

### Uživatelé
Uživatele se dají též rozdělit, primárně aby container měl stejné, nebo naopak odlišné, user ID od systému.
Například může mít container root user id 0 ale kontrolovat oproti číslo 1001 když se bude přistupovat k systémovým souborům. Takže container může mít vlastní sadu uživatelů kteří budou mapovaní na jiné ID v systému.