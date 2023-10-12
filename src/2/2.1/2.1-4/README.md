# 2.1-4

Consider the searching problem:

**Input:** A sequence of n numbers〈a1, a2, … , an〉stored in array A[1 : n] and a value x.

**Output:** An index i such that x equals A[i] or the special value NIL if x does not appear in A. Write pseudocode for linear search, which scans through the array from beginning to end, looking for x. Using a loop invariant, prove that your algorithm is correct. Make sure that your loop invariant fulfills the three necessary properties.

## Solution

```python
def linear_search(A, x):
    for i in range(len(A)):
        if A[i] == x:
            return i
    return None
```

**Loop invariant:** At the start of each iteration of the `for` loop the subarray `A[0 : i - 1]` does not contain the value `x`.

**Initialization:** Prior to the first iteration of the loop, the subarray is empty, so it does not contain the value `x`.

**Maintenance:** On each interaction we check if the array contains the value `x` at index `i`. If it does, we return `i`, otherwise we continue to the next iteration. In either case, the subarray `A[0 : i - 1]` does not contain the value `x`.

**Termination:** The loop terminates when
- We have reached index `i` such as `A[i] == x`;
- We have reached the end of the array, and the value `x` is not in the array.

In either case, our algorithm does exactly what was required, which means the algorithm is correct.