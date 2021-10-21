---
desc: Matematika
tags:
  - mat/README
  - README
---
# Matematika
```dataviewjs
dv.table(["Téma", "Klíčová slova"], dv.pages('"mat"').filter(t => !t.tags.includes("README") && !t.tableIgnored).map(t => ["[[" + t.file.name + "]]", t.file.etags.join(", ")]))
```