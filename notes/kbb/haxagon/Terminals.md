---
tags: [kbb]
---
# Terminals
## Escape codes
Used for things like colors and moving the cursor. They can set background color, foreground color and move cursor to any position. To delete text, you can move cursor backwards, replace with space and move it backwards again.
## TTY
Terminals (virtual or physical) create a TTY to interact with the shell. They provide their size (can be queries using `tput cols` for width and `tput rows` for height) and other metadata.
Applications can check if a file descriptor is a tty.
When piping output (either to other command or to file), the file descriptors no longer belong to a tty. That can be used to not output colors when piping to other commands or files, for example.
## Changing shell
To change shell, `chsh` command can be used with the requested shell.