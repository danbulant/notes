# Osobnosti
```dataviewjs
dv.table(["Jméno", "Předmět", "Popis"], dv.pages("#osobnosti").sort(u => u.name).map(u => ["[" + u.file.name + "](./" + encodeURI(u.file.path) + ")", u.tags[0], u.desc]))
```