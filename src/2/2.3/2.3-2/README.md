# 2.3-2

The test in line 1 of the MERGE-SORT procedure reads “if p ≥ r” rather than “if p == r.” If MERGE-SORT is called with p > r, then the subarray A[p : r] is empty. Argue that as long as the initial call of MERGE-SORT(A, 1, n) has n ≥ 1, the test “if p == r” suffices to ensure that no recursive call has p > r.

## Solution

Since the function is recursively called every-time p increases and the first time it is called with n >= 1 it means that as soon as p reaches the limit it will early return and stop the recursion. In other words, changing the code from `p ≥ r` to `p == r` is semantically the same because as soon as p reaches r, the subarray A[p:r] is empty and the function will return. Therefore, no recursive call will have `p > r`.