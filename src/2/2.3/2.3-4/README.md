# 2.3-4

Use mathematical induction to show that when n ≥ 2 is an exact power of 2, the solution of the recurrence 

$$
T(n) = \begin{cases}
    2 & \text{if } n = 2 \\
    2T\left(\frac{n}{2}\right) + n & \text{if } n > 2
\end{cases}
$$

is $T(n) = nlgn$.

## Solution

### Base case

When $n=2, T(2)=2=2lg2$. So, the solution holds for the base case.

### Inductive step
Let’s assume that there exists a _k_, greater than 1, such that $T(2^k)=2^k lg(2^k)$. We need to sho that the formula hold for $k + 1$ too, i.e $T(2^{k+1})=2^{k+1} lg(2^{k+1})$.

$$
\begin{align}
T(2^{k+1}) &= 2T\left(\frac{2^{k+1}}{2}\right) + 2^{k+1} \\
&= 2T(2^k) + 2 * 2^k \\
&= 2 * 2^k lg 2^k + 2* 2^k \\
&= 2 * 2^k * (lg 2^k + 1) \\
&= 2^{k+1} * (lg 2^k + lg2) \\
&= 2^{k+1} lg2^{k+1}\\
\end{align}
$$

So, the formula holds for $k + 1$ too.

Since both the base case and the inductive step hold, by mathematical induction, the formula holds for all $n ≥ 2$ that are an exact power of 2.

**Important rules:**

- $lg2 = 1$
- $\frac{2^{k+1}}{2} = 2k$ because $\frac{x^a}{x^b} = x^{a - b}$
- ${2 * 2^k = 2^{k+1}}$ because $a^b * a^c = a^{b+c}$
- The logarithm of a product can be expressed as the sum of the logarithms of the individual factors. Therefore, you can rewrite $lg(2^k) + lg(2)$ as $lg(2^k * 2)$. Now, $2^k * 2$ is equal to $2^(k+1)$, so you can further simplify it as follows: $lg(2^k * 2) = lg(2^(k+1))$

**Reference:** https://atekihcan.github.io/CLRS/02/E02.03-03/
