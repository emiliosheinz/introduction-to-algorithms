# 2.3-2

The test in line 1 of the MERGE-SORT procedure reads “if p ≥ r” rather than “if p ≠ r.” If MERGE-SORT is called with p > r, then the subarray A[p : r] is empty. Argue that as long as the initial call of MERGE-SORT(A, 1, n) has n ≥ 1, the test “if p ≠ r” suffices to ensure that no recursive call has p > r.
