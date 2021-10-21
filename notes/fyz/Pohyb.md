---
tags:
  - fyz
  - fyz/pohyb
---
# Pohyb
## Mechanický
Když se těleso pohybuje vzájemně k jinému tělesu.
## Hmotný bod
Model tělesa, při němž se hmostnost tělesa zachovává, ale jeho rozměry se zanedbávají.
## Trajektorie
množina všech poloh kterými projde hmotný bod.

## Vzorečky

$$ v = \frac{s}{t} $$
$$ s = v * t $$
$$ t = \frac{s}{t} $$

## Příklady
SU2.7 -> $\frac{3}{4}$ doby $90km/h$, $\frac{1}{4}$ doby $50km/h$; průměr?
$$
v_p = \frac{v_1+t_1+v_2+t_2}{F_1+t_2} = \frac{90+\frac{3}{4}+50*\frac{1}{4}}{\frac{3}{4}t+\frac{1}{4}t} \frac{km}{h} = \frac{(45*\frac{3}{2} + \frac{25}{2})t}{t} \frac{km}{h} = \frac{45*3}{2} + \frac{25}{2} \frac{km}{h} = \frac{160}{2} \frac{km}{h} = 80 \frac{km}{h}
$$
$$
v_p = \frac{3}{4} * 90 \frac{km}{h} + \frac{1}{4} * 50 \frac{km}{h} = 80 \frac{km}{h}
$$

SU2.8 -> $\frac{3}{4}$ vzdálenosti $90km/h$, $\frac{1}{4}$ doby $50km/h$; průměr?
$$
v_p = \frac{s_1 + s_2}{t_1 + t_2} = \frac{\frac{3}{4}s + \frac{1}{4}s}{\frac{s_1}{v_1} + \frac{s_2}{v_2}} = \frac{s}{\frac{\frac{3}{4}s}{90} + \frac{\frac{1}{4}s}{50}} \frac{km}{h} = \frac{s}{\frac{50\frac{3}{4}s}{4500} + \frac{90\frac{1}{4}s}{4500}} \frac{km}{h} = \frac{s}{\frac{141s}{4500}} \frac{km}{h} = \frac{s}{s(\frac{\frac{3}{4}}{90} + \frac{\frac{1}{4}}{50})} \frac{km}{h} = \frac{90*50*4}{50*3 + 90*1} \frac{km}{h} = 75 \frac{km}{h}
$$

Plán
- Původní plán byl ujet $30 km$ za $30 min$. Prvních $20 min$ jel rychlostí $30 \frac{km}{h}$. Jakou rychlostí musí jet zbývající čas aby to stihl?
$$ s = 30km $$
$$ t = 30min $$
$$ t_1 = 20min = \frac{1}{3}h $$
$$ v_1 = 30\frac{km}{h} $$
$$ t_2 = 10min = \frac{1}{6}h $$
$$ v_2 = (s - t_1 * v_1) / t_2 = (30km - \frac{1}{3} * 30 \frac{km}{h}) / \frac{1}{6}h = (30km - 10) / \frac{1}{6} = 20 / \frac{1}{6} = 20 * 6 = 120 \frac{km}{h}$$
- Musí jet rychlostí $120 \frac{km}{h}$ aby to stihl.