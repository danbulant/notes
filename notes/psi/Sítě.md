---
desc: Počítačové sítě
tags:
  - psi
  - README
---
# Sítě
```dataviewjs
dv.table(["Téma", "Popis", "Klíčová slova"], dv.pages('"psi"').filter(t => !t.tags.includes("README") && !t.tableIgnored).map(t => ["[[" + t.file.name + "]]", t.desc, t.file.etags.join(", ")]))
```