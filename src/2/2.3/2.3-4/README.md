# 2.3-4

Use mathematical induction to show that when n ≥ 2 is an exact power of 2, the solution of the recurrence 

$$
T(n) = \begin{cases}
    2 & \text{if } n = 2 \\
    2T\left(\frac{n}{2}\right) + n & \text{if } n > 2
\end{cases}
$$

is $T(n) = nlgn$.
