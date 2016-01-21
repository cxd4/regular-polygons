cc -Os -S -o ./main.s ./main.c -Wall -pedantic -ansi
as -o ./main.o ./main.s
cc -s -o ./poly ./main.o
