# 2.1-2

**Consider the procedure SUM-ARRAY on the facing page. It computes the sum of the n numbers in array A[1 : n]. State a loop invariant for this procedure, and use its initialization, maintenance, and termination properties to show that the SUM-ARRAY procedure returns the sum of the numbers in A[1 : n].**

```
SUM-ARRAY(A, n)
  sum = 0
  for i = 1 to n
    sum = sum + A[i]
  return sum
```

**Loop Invariant:** At the end of each iteration, `sum` contains the sum of the first `i` numbers.

**Initialization:** Before the loop starts, `sum` is initialized with value `0`, and the invariant holds true because the sum of the first `0` numbers is indeed `0`.

**Maintenance:** Assuming the invariant is true at the beginning of an iteration, `sum` would contain the sum of the first `k` numbers. After executing one more iteration, the invariant remains true because `sum` will now contain the sum of the first `k + 1` numbers.

**Termination:** When the loop terminates, the invariant, along with the loop termination condition, ensures that `sum` contains the sum of the first `n` numbers.
