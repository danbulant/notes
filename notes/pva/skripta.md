# skripta

## REST
*Representation state transfer*; Styl HTTP API

Hlavním nápadem bylo navrhnout styl API který zvládne zpracovat "web scale" služby. Byla proto udělaná separace klienta a serveru, odstranil se *state* (stav) a bylo nadefinováno jednotné rozhraní.

Styl hojně využívá možností HTTP, používá se většina jeho možností - slovesa (`PUT {:http}`, `GET {:http}`, `POST {:HTTP}`, `DELETE {:http}` atd), hlavičky i kódy odpovědí.

 Například požadavek může vypadat takto:

 ```http
GET / HTTP/1.1
Accept: */*
Host: example.com
User-Agent: Náš agent
```

```http
HTTP/1.1 200 OK
X-Powered-By: My API/1.0
Content-type: application/json; charset=utf-8

{"name": "My API", "version": "1.0"}
```

API by měla splňovat následující podmínky:

| Podmínka | Popisek |
| --- | --- |
| **Separace klient-server** | Omezit co nejvíce přímé závislosti mezi klientem a serverem - klient by neměl muset znát přesný software který běží na serveru a naopak. |
| **Absence state** | Server si neukládá věci přímo do připojení ale všechny informace potřebné k odpovědi dostane v rámci požadavku. |
| **Vrstvená architektura** | Nezáleží, zda-li se mezi klienta a server přidá proxy server, ať už reverzní či na straně klienta. |
| **Jednotné rozhraní** | Klient nemusí znát přesné vlastnosti serveru, například seznam uživatelů, na jaké adrese získat zprávy nebo, a to hlavně, jak upravit resource na který již mám odkaz. |

### Implementace

Pro splnění podmínek je třeba, aby API vracelo správnou hlavičku `Content-type`, používalo správné slovesa, nemělo state, používalo odkazy a nezáleželo na serveru/proxy.

Z těch věcí je asi nejsložitější nemít state.

Místo aby si server ukládal state, například pomocí PHP funkce `<?session_start(){:php}`, ale vymyslí se nějaký jiný způsob, mimo autentizaci lze použít cookies přímo, kolem autentizace lze využít JWT.
Tím totiž jde jednoduše zajistit že může server běžet víckrát a balancovat požadavky mezi vícero instancí pro větší výkon.
State neznamená že se neukládá na server nic - klient upravuje resources, a ty se ukládají, znamenaje že třeba upraví svůj profil či napíše zprávu. Ale neukládá se zda-li je přihlášený a podobně.

Je nutné používat správně `Content-type`, aby šlo správně rozparzovat obsah. Tudíž aby se nepoužíval nestandardizovaný formát kde by mohlo u čísel záležet na pořadí bajtů, jelikož to se může mezi serverama lišit, a tím porušit jedno ze zásad REST. A to opět kvůli škálovatelnosti, aby jste nebyli omezení na jeden specifický systém.

Původně REST také vyžadovalo používání odkazů všude, ale to je v dnešní době spíše rarita.

Jednotné rozhraní znamená že klient nemusí "odhadovat" jak se upraví resource, ale místo toho mu stačí na adresu odkud resource získal poslat `POST {:http}` či `PATCH {:http}` request.

### Ukázka

Víme že seznam užívatelů získáme na `/users`:
```http
GET /users HTTP/1.1
```
```http
HTTP/1.1 200 OK
Content-type: application/json

[
  {
    "name": "John Doe",
    "uri": "/users/1"
  }
]
```

Vidíme seznam uživatelů - jeden tu dokonce i je. A vidíme odkaz na kterým se nachází.

```http
GET /users/1 HTTP/1.1
```
```http
HTTP/1.1 200 OK
Content-type: application/json


{
  "name": "John Doe",
  "age": 25,
  "id": "1",
  "messages": "/users/1/messages"
}
```

Tady už máme informací více, vidíme že mu je 25 let a další odkaz, tentokrát na zprávy.
Teda, 25 mu není, tak ho upravíme pomocí `PATCH {:http}` requestu.

```http
PATCH /users/1 HTTP/1.1
Content-type: application/json

{
  "age": 26
}
```
```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "name": "John Doe",
  "age": 25,
  "id": "1",
  "messages": "/users/1/messages"
}
```

A hotovo.
Tady bych akorát dodal pár věcí k ukázce:
Je tu malý nezvyk v tom že většina API nevrací celé odkazy a místo toho se více spoléha na čtení dokumentace či odhadu kam se podívat dále (v `/users` je id 1, nejspíš bude k dispozici jako `/users/1`). Nejčastěji jsou vidět v `Location` hlavičce (redirect) či odkaz v chybě na dokumentaci.
Další bodem je že requesty jsou repetetivní - nemáte jak získat věk uživatele "John Doe" v jednom požadavku, musíte jich udělat víc, a musíte počkat na odpověď, takže se sčítá roundtrip delay ("ping"), což může zpomalit načítání webu.
A nakonec spíš už jen takový "fun fact" - v REST nikde není psáno co přesně se má používat jako formát na přenos, nemusí to být JSON, může to být XML, nebo i například HTML, takže HTML stránka která používá dobré formátovaní může být validní REST API.

## GraphQL
*Graph Query Language*

GraphQL je řešení Facebooku (dnes Meta) na problém ohledně počtu požadavků, jejich času, a kolik dat se (zbytečně) přenese.

REST API vyžaduje spolupráci a plánování, aby vracelo ty data které jsou potřeba pro chod stránky ale aby nevracel data co nejsou, jelikož ne každý má rychlý internet, zvláště mobilní telefony. A u nich může být na datech i velká prodleva, která REST API též moc nepomáhá. A tak Facebook pro jejich mobilní aplikaci vymyslel GraphQL.

GraphQL pracuje, podle názvu, nad grafy, a snaží se zmenšit počet požadavků, odpovědí a jejich objemy. Typickým problémem je že potřebujeme A, ale pro to potřebujeme znát B (například ID A), a tak musíme než se pošle dotaz na B, než dostaneme odpověď s B, zpracujeme ji, a použijeme ji na dotaz pro A a nakonec odpověď s A. A mezitím jsme dostali zbytečné informaci jako součást B.

Tomuto problému (požadavek na B vyžaduje požadavek na A a tak na něj musíme počkat) se mimochodem říká N+1 problém. I když ani GraphQL se ho úplně nezbavuje ale spíš se "hodí" na backend, ale tam se to dá lépe řešit.

### Implementace

Tenhle protokol vyměňuje menší odpovědí za větší požadavky a menší HTTP semantiku. Implementace většinou probíhá za pomocí různých knihoven, ale některé moderní databáze (či poskytovatelé databází) poskytují GraphQL přímo.
Tyto knihovny mohou přepisovat GraphQL na požadavky do databáze, nebo fungují jen jako abstrakce a ptají se vašeho kódu jak postupně všechno získat.

### Ukázka

Typický požadavek na data vypadá takto:
```http
POST / HTTP/1.1
Content-Type: application/json

{
  "query": "query { Media(id: 105778, format: MANGA) { id title { english } } }"
}
```

GraphQL nepoužívá rozdílné hlavičky, slovesa a ani url, většinou celý graphql žije na `POST /{:http}` či třeba `POST /graphql{:http}`.

Proto se většinou řeší jen samotný graphql tělo:
```graphql
query {
  Media(id: 105778, format: MANGA) {
    id
    title { english }
  }
}
```

A odpověď
```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "data": {
    "Media": {
      "id": 105778,
      "title": {
        "english": "Chainsaw Man"
      }
    }
  }
}
```

Zde je vidět že dostaneme data ve stejném formátu v jakém si o ně řekneme, a také že můžeme získávat pod vlastnosti (anglickou verzi uvnitř titulku), a že můžeme používat argumenty (id a formát v našem případě). Tyto argumenty lze použít i uvnitř objektů, například chceme-li získat i seznam postav, můžeme použít následující query:

```graphql
query {
  Media(id: 105778, format: MANGA) {
    id
    title { english }
    characters(perPage: 2) {
      edges {
        id
        role
        node {
          name { full }
          gender
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "Media": {
      "characters": {
        "edges": [{
          "id": 160503,
          "role": "MAIN",
          "node": {
            "gender": "Male",
            "name": { "full": "Denji" }
          }
        }, {
          "id": 170364,
          "role": "MAIN",
          "node": {
            "gender": "Female",
            "name": { "full": "Power" }
          }
        }]
      }
    }
  }
}
```

Aktualizace obsahu probíhá přes mutace (místo query), a může vracet data stejně jako query.
```graphql
mutation {
  startWatching(id: 105778) { title { english } }
}
```

```json
{
  "data": {
    "startWatching": {
      "title": { "english": "Chainsaw Man" }
    }
  }
}
```

## Porovnání

REST je starší metodika psaní API, designovaná pro škálu serverů s tím, že se více věcí nechává na klientech (state), ale díky tomu se může lépe škálovat servery a cachovat odpovědi.
Další výhoda je že REST má konzistentní vytížení, je-li dobře napsaný, jelikož všechny dotazy na `/users` budou dělat přibližně stejně dotazů na databázi a podobně.
Též má více předvídatelné zabezpečením, a to jak oprávnění tak i DOS zábranám.
Jelikož každý resource má vlastní URL, dá se dané URL cachovat pro zmenšení vytížení serveru, či omezit počet požadavků na dané URL (například pokud seznam uživatelů databázi vytěžuje více než seznam zpráv).

GraphQL vyžaduje méně požadavků jelikož nenačítá data zbytečně, může i zmenšit vytížení databáze pro určité požadavky, a zmenšuje objem odpovědí, čímž zrychluje načítání, obzvláště na pomalejších připojení. Je také větší oddělení FE a BE týmů, jelikož se nemusí domlouvat které data přesně potřebují určité stránky, a místo toho si stránka přímo řekne jen o ty data co potřebuje.

### Zabezpečení

GraphQL obecně se zabezpečením nepomáhá moc, jelikož neopravuje časté chyby v REST a naopak přidává další, většinou formou menších zřejmostí, tipicky týkající se zatížení či opakování úprav.

Jedna ukázka se týká rate-limitu, pokud uděláte rate limit na proxy a máte mutaci na přidání like, viz níže, tak nemusí nutně být omezený počet mutací.

```graphql
mutation {
  addLike(id: 1)
}
```

Protože každá mutace může být víckrát, jen Vás to musí napadnout.

```graphql
mutation {
  addLike(id: 1)
  addLike(id: 1)
  addLike(id: 1)
}
```

A když už vyřešíme mutace, tak nastane čas na vytížení serveru.
Všemi oblíbená rekurze:

```graphql
query {
  Media(id: 105778, format: MANGA) {
    characters {
      nodes {
        media {
          nodes {
            characters {
              nodes {
                media {
                  nodes {
                    characters {
                      nodes {
                        name { full }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Tento request na reálným serveru trval asi 20s. Dál jsem to nepokoušel :)

Tak se nastaví limit na rekurzy, a máme klasickou loopu:
```graphql
query {
  one: Media(id: 105778, format: MANGA) {
    characters { nodes { name { full } } }
  }
  two: Media(id: 105778, format: MANGA) {
    characters { nodes { name { full } } }
  }
  five: Media(id: 105778, format: MANGA) {
    characters { nodes { name { full } } }
  }
}
```

## Uživatelé

Přehled:

| REST | GraphQL |
| --- | --- |
| Facebook | Facebook |
| Paypal | Paypal |
| Github | Github |
| Twitter | Twitter |
| Google | Airbnb |
| Apple | Atlassian |
| Discord | Anilist |
| Microsoft | Shopify |

Facebook, Paypal a Twitter používají GraphQL, ale pouze pro jejich aplikace či interní použití pro větší flexibilitu, ale nedávají ji k veřejnému použití - na to mají REST API.
Veřejně to dává dostupně ze seznamu Anilist, Atlassian a Shopify.
Vyjímku tvoří Github, který asi snad jako jediný nabízí jak klasické REST API tak GraphQL API.

Pokud se chcete řídit trendy, doporučuji veřejné REST API a interní GraphQL :). Anebo rovnou interně gRPC všude a trička "Protobuf Moving Co.".
