# Data
Důležitá data:
```dataviewjs
dv.table(["Datum", "Název", "Popis"], dv.pages("#dej").filter(t => t.file.day).map(t => [t.file.day, t.file.name, t.desc]))
```

^806fb9
