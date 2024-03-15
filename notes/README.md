# README

Jednoduchý web na moje poznámky ze školy. SSPŠ kybernetická bezbečnost.

Repositář se zdrojáky je dostupný [zde](https://github.com/danbulant/notes).

Chyby? Překlepy? Opravte je v souborech (či přidejte nové informace) a vytvořte Pull Request.

## Formátování

Používá markdown v Obsidian. Používá YAML hlavičky s parsovatelnými daty. Složky jsou podle předmětů.

*asd*

## Activity

Podporováno pouze v Obsidian zobrazení.

```ActivityHistory
/
```

## Seznam učitelů
```dataviewjs
dv.table(["Jméno", "Zkratka", "Předmět", "Kabinet", "Email"], dv.pages("#učitelé").sort(u => u.name).map(u => ["[" + u.name + "](./" + encodeURI(u.file.path) + ")", u.shortName, u.class, u.kabinet, u.mail]))
```

## Látky
Jak a kde začít:
```dataviewjs
dv.table(["Předmět", "Popis"], dv.pages("#README").map(t => [
"[" + t.file.folder.toUpperCase() + "](" + t.file.path + ")", t.desc]))
```

## Testy a úkoly
```dataviewjs
function highlightDate(date) {
	if(!date) return date;
	const text = dv.date(date).toFormat("dd. MM. yyyy");
	if(DateTime.now() < dv.date(date) && dv.date(date).diff(DateTime.now(), "days").as("days") < 14) return `&nbsp;==${text}==`;
	return "&nbsp;" + text;
}

dv.table(["Předmět", "Datum", "Test"], dv.pages("#testy or #úkoly").map(t => [t.file.path.split("/")[0], highlightDate(t.file.day), t.file.link]))
```

## Prezentace
```dataviewjs
function highlightDate(date) {
	if(!date) return date;
	const text = dv.date(date).toFormat("dd. MM. yyyy");
	if(DateTime.now() < dv.date(date) && dv.date(date).diff(DateTime.now(), "days").as("days") < 7) return `&nbsp;==${text}==`;
	return "&nbsp;" + text;
}

dv.table(["Předmět", "Datum", "Téma"], dv.pages("#pdv or #prezentace").map(t => [t.file.path.split("/")[0], highlightDate(t.file.day), t.file.link]))
```