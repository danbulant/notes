# vasek
 
## Vysvětlení základních pojmů
DOM (Document Object Model) je reprezentace HTML a na stránce funguje jakožto taková "API" jak přistupovat k 
jednotlivým elementům v rámci třeba javascriptu.
SPA - Spa je jednostránková aplikace kdy změny stránky jsou prováděné na tom stejném HTML a neotevírá se další při zobrazení třeba menu
MPA - MPA je více stránková aplikace kdy změny stránky jsou prováděné formou více stránek jakožto třeba index.html je home a menu.html je druhá stránka pro menu

## Historie Webů:
Úplným základem webů byla vlastně prázdná statická HTML stránka která třeba říkala něco jakožto "ahoj světe".
Vzhledem k tomu že ale statické stránky vám toho moc neřekli, přišla vlna PHP kdy pomocí integrace PHP s HTML jste mohli dostat třeba zobrazení času
Dalším velkým krokem byla vlna AJAXu která představovala spojení Javascriptu a XML/HTML kdy javascript přímo asynchronně upravoval DOM.
Velkým krokem v postupu webů byl začátek Node a to že se backend webu mohl najednou psát ve stejném jazyce jako frontend.
V tomhle období se začínaly vyskytovat už i větší CSS frameworky ze kterých pak vychází JS frameworky (Knockout, Backbone, Angular)

Problém v tomto bodě vývoje byl, že manipulace DOMu vyžadovala celé přestavění DOMu a tudíž stránky nebyly responzivní.
Dalším problémem byla "nelidská" syntaxe.

## Modernější frameworky

### REACT
React ze začátku vyřešil problémy se syntaxí malinko lidštější (i když na dnešní dobu ne :D) syntaxí.
Představil komponenty a přišel s reaktivními proměnnými.
Další bod který React následně řešil byla ona pomalá manipulace s DOMem
V Reactu to řešení bylo (a je) formou vytvoření virtuálního DOMu alongside hlavního (browser) DOMu kdy více změn se prvně porovná v tom virtuálním DOMu
a vezme se ta nejjednodušší možnost jak zmanipulovat hlavní DOM co nejjednodušeji: Příkladem je třeba že potřebujete změnit innerhtml spanu 2x za sebou, tak se provede jen ta poslední změna v realném DOMu
Jenomže i react postupně dohonila měnící se doba a tak řešení i virtual DOMem narazilo na značný performance hit oproti novějšším frameworkům co kompilují vše přímo pro JS.
Za zmínku stojí celkový rewrite Reactu v roce 2017 který zlepšil tak nějak vše.
Taktež stojí za zmínění mitigace tzv. "Waterfall of sequential blocking network requests" v Reactu skrze Suspense
Tento problém stojí na tom, že než můžete něco renderovat uživateli tak se musí dokončit celý fetch třeba nějaké knihovny.
Suspense toto řeší tak, že Začnete fetchovat a už rovnou renderovat to co už je stáhnuté.
Taktéž se v této době zjistilo že kompilovat knihovny v browseru uživatele je pomalé a tak vzniklo mnoho pre-compilled knihoven.

Proč používat React ? 
idk xd
Má široké využití ve firmách
Velká podpora komunitou protože je tu už dlouho

### Nová vlna frameworků (SPA first):

Svelte 
Vue 
SolidJS

### Svelte

Svelte řeší problém pomalé manipulace browser DOMu tak, že je přímo vše kompilováno do javascriptu (priklad na replu: https://svelte.dev/repl/hello-world?version=4.2.8)
Má taky příjemnější syntaxi a je prakticky ve všem rychlejší.

### Vue 

Vue využívá stejnou technolohii jakožto React až na to že inteligentněji re-rendruje jen specifické komponenty virtual DOMu a né celý

### Solid

Solid je basically vue legit nemám ponětí jaký je jiný rozdíl než syntaxe xd


### Znovu oživení toho co je to SPA
- Single page App
- Jedna stránka která se mění
- AJAX

#### Problémy SPA
u SPA musí uživatel načítat framework a pakliže se nestáhne javascript tak prakticky není stránka
Velkým problémem u SPA je, že velikost stahovaného JS se strašně rozlézá a už pro příklad na instagramu stahujete 12MB javascriptu takže load times au.

### Znovu oživení co je to MPA
- Opak SPA xddd
- Multi Page App
- Několik stránek
- Minimum JS

#### MPA výhody
Mpa nepotřebuje načíst celý framework a díky HTML first přístupu funguje prakticky i bez JS. Taky nestahujete 12 MB JSka xd
SPA výhody specific use case
V MPA je třeba problém vytvořit animace mezi stránkami i když nějaké barebones pokusy už jsou.
V MPA se nedá udělat konstantní přehrávaní média při překlikáváním ze stránky na stránku.
