# 2.1-3

Rewrite the INSERTION-SORT procedure to sort into monotonically decreasing instead of monotonically increasing order.

## Solution

The solution code can be found in [desc-insertion-sort.ts](./desc-insertion-sort.ts).

The only change needed is to change the comparison operator in the `while` loop from `>` to `<`, that way the algorithm will sort the array in decreasing order.
