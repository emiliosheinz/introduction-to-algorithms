# 2.3-3

State a loop invariant for the while loop of lines 12–18 of the MERGE procedure. Show how to use it, along with the while loops of lines 20–23 and 24–27, to prove that the MERGE procedure is correct.

## Solution

### Loop invariant

At the start of each iteration of the `while` loop of lines 12–18, the subarray `A[p..k-1]` contains the `p-k` smallest elements of `L[1..nL+1]` and `R[1..nR+1]` in sorted order. Given that the loop will only terminate when one of the subarrays is exhausted, the remaining elements of the other subarray will be the `k-p` largest elements of the two subarrays and will be copied to A with one of the two `for` loops of lines 20–23 or 24–27 (depending on which subarray is exhausted).