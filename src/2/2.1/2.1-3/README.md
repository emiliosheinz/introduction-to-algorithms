# 2.1-3

Rewrite the INSERTION-SORT procedure to sort into monotonically decreasing instead of monotonically increasing order.

The solution is in [insertion_sort.py](./insertion_sort.py).

The only change needed is to change the comparison operator in the `while` loop from `>` to `<`, that way the algorithm will sort the array in decreasing order.
