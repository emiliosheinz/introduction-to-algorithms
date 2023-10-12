# 2.1 Insertion Sort

## Loop Invariant

Loop invariants are an important concept in computer programming and algorithm design, particularly in the context of loops or iterations. A loop invariant is a condition or property that holds true for each iteration of a loop. It is a logical assertion that remains unchanged before, during, and after each iteration of the loop.

When designing or analyzing algorithms with loops, loop invariants serve two main purposes:

1. Correctness Verification: Loop invariants are used to verify the correctness of the loop. A loop is considered correct if it satisfies three properties: initialization (the invariant is true before the loop starts), maintenance (if the invariant is true before an iteration, it remains true after the iteration), and termination (the loop terminates after a finite number of iterations).

2. Understanding and Debugging: Loop invariants also help programmers and developers better understand the algorithm's behavior during each iteration. By identifying the properties that remain constant throughout the loop, it becomes easier to reason about what the loop is doing and whether it is functioning as intended.

Here's a step-by-step explanation of how loop invariants work:

1. Initialization: Before the loop starts, the invariant must be true. It represents the condition that holds at the beginning of the loop.

2. Maintenance: During each iteration of the loop, the invariant must be preserved. In other words, if the invariant is true at the beginning of an iteration, it must also be true at the end of that iteration.

3. Termination: When the loop terminates, the invariant, together with the loop termination condition, should help establish the correctness of the loop. It should ensure that the desired result or condition is achieved.

Let's consider a simple example to illustrate loop invariants. Suppose we want to find the sum of the first N positive integers using a loop:

```python
def sum_of_integers(N):
    sum = 0
    for i in range(1, N + 1):
        sum += i
    return sum
```

The loop invariant in this case could be: "At the end of each iteration, 'sum' contains the sum of the first 'i' positive integers." Now, let's check the three properties:

1. Initialization: Before the loop starts (i.e., when i = 1), the sum is initialized to 0, and the invariant holds true because the sum of the first 0 positive integers is indeed 0.

2. Maintenance: Assuming the invariant is true at the beginning of an iteration (let's say for some i = k), the sum would contain the sum of the first 'k' positive integers. After executing one more iteration (i.e., when i = k + 1), the invariant remains true because the sum will now contain the sum of the first 'k + 1' positive integers.

3. Termination: When the loop terminates (i.e., when i = N + 1), the invariant, along with the loop termination condition (i <= N), ensures that the sum contains the sum of the first 'N' positive integers.

By using loop invariants, you can confidently reason about the correctness of your loops and ensure that they behave as expected.