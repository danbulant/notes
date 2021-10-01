# Pohyb
## Mechanický
Když se těleso pohybuje vzájemně k jinému tělesu.
## Hmotný bod
Model tělesa, při němž se hmostnost tělesa zachovává, ale jeho rozměry se zanedbávají.
## Trajektorie
množina všech poloh kterými projde hmotný bod.


## Příklady
SU2.7 -> $\frac{3}{4}$ doby $90km/h$, $\frac{1}{4}$ doby $50km/h$; průměr?
$$
V_p = \frac{V_1+t_1+V_2+t_2}{F_1+t_2} = \frac{90+\frac{3}{4}+50*\frac{1}{4}}{\frac{3}{4}t+\frac{1}{4}t} \frac{km}{h} = \frac{(45*\frac{3}{2} + \frac{25}{2})t}{t} \frac{km}{h} = \frac{45*3}{2} + \frac{25}{2} \frac{km}{h} = \frac{160}{2} \frac{km}{h} = 80 \frac{km}{h}
$$
$$
V_p = \frac{3}{4} * 90 \frac{km}{h} + \frac{1}{4} * 50 \frac{km}{h} = 80 \frac{km}{h}
$$

SU2.8 -> $\frac{3}{4}$ vzdálenosti $90km/4$, $\frac{1}{4}$ doby $50km/h$; průměr?
$$
V_p = \frac{s_1 + s_2}{t_1 + t_2} = \frac{\frac{3}{4}s + \frac{1}{4}s}{\frac{s_1}{v_1} + \frac{s_2}{v_2}} = \frac{s}{\frac{\frac{3}{4}s}{90} + \frac{\frac{1}{4}s}{50}} \frac{km}{h} = \frac{s}{\frac{50\frac{3}{4}s}{4500} + \frac{90\frac{1}{4}s}{4500}} \frac{km}{h} = \frac{s}{\frac{141s}{4500}} \frac{km}{h} = \frac{s}{s(\frac{\frac{3}{4}}{90} + \frac{\frac{1}{4}}{50})} \frac{km}{h} = \frac{90*50*4}{50*3 + 90*1} \frac{km}{h} = 75 \frac{km}{h}
$$