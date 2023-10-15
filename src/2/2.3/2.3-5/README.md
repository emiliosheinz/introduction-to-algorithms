# 2.3-5

You can also think of insertion sort as a recursive algorithm. In order to sort A[1 : n], recursively sort the subarray A[1 : n – 1] and then insert A[n] into the sorted subarray A[1 : n – 1]. Write pseudocode for this recursive version of insertion sort. Give a recurrence for its worst-case running time.

## Solution

```
recursiveInsertionSort(a, n) {
  if (n >= a.size) return a

  const key = a[n]
  let i = n - 1

  while i >= 0 and a[i] > key {
    a[i + 1] = a[i]
    i = i - 1
  }

  a[i + 1] = key
  recursiveInsertionSort(a, n + 1)
}
```
**Recurrence:**

$$
T(n) = \begin{cases}
    \Theta(1) & \text{if } n = 1 \\
    T\left(n - 1\right) + \Theta(n) & \text{if } n > 1
\end{cases}
$$

This means that the worst-case running time of the recursive version of insertion sort is $\Theta(n^2)$. Each element (n) needs to be shifted to the right position in the sorted subarray (n).

You also can find the TypeScript implementation of the pseudocode above in [./recursive-insertion-sort.ts](./recursive-insertion-sort.ts).