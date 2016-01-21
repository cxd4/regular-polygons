#include <stdlib.h>
#include <stdio.h>

#include <limits.h>

int main(int argc, char* argv[])
{
    long total;
    register long n;

    if (argc < 2) {
        fprintf(stderr, "%s [depth]\n", argv[0]);
        return 1;
    }
    n = strtol(argv[1], NULL, 0);

    if (n < 3 || n >= LONG_MAX) {
        fprintf(stderr, "Cannot have %li sides in a polygon.\n", n);
        return 1;
    }
    total = 180*n - 360;

    printf(
        "Interior angles sum up to %li degrees.  (Each angle is %g degrees.)\n",
        total, (double)total / n
    );
    return 0;
}
