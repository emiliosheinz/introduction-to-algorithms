# 2.1-5

Consider the problem of adding two n-bit binary integers a and b, stored in two n-element arrays A[0 : n – 1] and B[0 : n – 1], where each element is either 0 or 1, $\sum_{i = 0}^{n - 1} A[i] \times 2^i$, and $\sum_{i = 0}^{n - 1} B[i] \times 2^i$. The sum $c = a + b$ of the two integers should be stored in binary form in an (n + 1)-element array C[0 : n], where $c = \sum_{i=0}^{n} C[i] \times 2^i$. Write a procedure ADD-BINARY-INTEGERS that takes as input arrays A and B, along with the length n, and returns array C holding the sum.

## Solution

Solution code can be found in [add-binary-integers.py](./add-binary-integers.py)
