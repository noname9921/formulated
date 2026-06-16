var e=`# Infinite Series and Convergence Tests

## Definition

An infinite series is the sum of the terms of an infinite sequence. Formally, given a sequence of real numbers $\\{a_n\\}_{n=1}^{\\infty} = a_1, a_2, a_3, \\dots$, the infinite series is denoted by the expression:
$$\\sum_{n=1}^{\\infty}a_n = a_1 + a_2 + a_3 + \\dots$$
The core challenge in analyzing an infinite series is that a sum with infinitely many terms is not immediately well-defined in the standard arithmetic sense. Instead, we define the series through the limit of its partial sums. Let $S_k$ be the $k$-th partial sum defined as:
$$S_k = \\sum_{n=1}^{k}a_n = a_1 + a_2 + \\dots + a_k$$
An infinite series is said to converge if the sequence of its partial sums $\\{S_k\\}$ approaches a finite limit $S$. In this case, we write:
$$\\lim_{k \\to \\infty} S_k = S$$
If the limit does not exist (i.e., it equals $\\pm \\infty$ or oscillates), the series is said to diverge. The distinction between convergence and divergence is fundamental to mathematical analysis, as it determines whether an infinite process can be assigned a finite numerical value.

## Key Terminology

To navigate the study of infinite series, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Sequence | An ordered list of numbers $a_1, a_2, \\dots$ |
| Partial Sum | The sum of the first $n$ terms of a series, $S_n = \\sum_{i=1}^n a_i$ |
| Convergence | A state where $\\lim_{n \\to \\infty} S_n = L$ for some finite $L$ |
| Divergence | A state where the limit of partial sums does not exist or is infinite |
| Remainder | The difference $R_n = S - S_n$ between the total sum and the $n$-th partial sum |
| Absolute Convergence | The state where $\\sum |a_n|$ converges |
| Conditional Convergence | The state where $\\sum a_n$ converges, but $\\sum |a_n|$ diverges |

Understanding these terms allows for the classification of series behavior, which is essential for determining the validity of operations like term-by-term integration or differentiation.

## Purpose

The study of infinite series is not merely an abstract exercise; it serves as the backbone for modern computational mathematics. Infinite series are the primary tool used by calculators and computers to approximate transcendental functions such as $e^x$, $\\sin(x)$, and $\\ln(x)$. Because a computer cannot perform infinitely many operations, it calculates a finite number of terms of a Taylor series to approximate these functions to high precision.

Furthermore, infinite series arise naturally in the study of differential equations and Fourier analysis. By representing functions as infinite sums of simpler components (such as polynomials or trigonometric functions), mathematicians can break complex systems down into manageable parts. Without the convergence tests developed by mathematicians like Cauchy, d'Alembert, and Gauss, it would be impossible to verify that these approximations remain stable and accurate as the number of terms increases.

## Fundamental Properties

Infinite series behave like finite sums under specific conditions. Linearity is the most significant property: if $\\sum a_n = A$ and $\\sum b_n = B$ are convergent series, then:
1. $\\sum (a_n + b_n) = A + B$
2. $\\sum (ca_n) = cA$ for any constant $c$

However, one must be cautious with infinite series. Unlike finite sums, the associative and commutative properties do not always hold. For instance, rearranging the terms of a conditionally convergent series can lead to a completely different sum, a phenomenon known as the Riemann Rearrangement Theorem.

Additionally, the $n$-th term test for divergence provides a necessary condition for convergence. If a series $\\sum a_n$ converges, then the limit of the individual terms must be zero:
$$\\lim_{n \\to \\infty} a_n = 0$$
Note that this is not a sufficient condition; for example, the harmonic series $\\sum \\frac{1}{n}$ has terms that approach zero, yet the series diverges.

## Types & Variations

There are several archetypal series that serve as benchmarks for convergence testing.

### Geometric Series
A geometric series takes the form $\\sum_{n=0}^{\\infty} ar^n$. It converges if and only if $|r| < 1$, and its sum is given by:
$$S = \\frac{a}{1 - r}$$
If $|r| \\geq 1$, the terms do not shrink rapidly enough, causing the series to diverge.

### p-Series
The p-series is defined as $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$. This series converges if $p > 1$ and diverges if $p \\leq 1$. This is perhaps the most useful tool for comparison tests.

### Alternating Series
An alternating series is of the form $\\sum (-1)^n b_n$ where $b_n > 0$. The Alternating Series Test states that if $\\{b_n\\}$ is a monotonically decreasing sequence and $\\lim_{n \\to \\infty} b_n = 0$, then the alternating series converges.

## How to Solve

Determining the convergence or divergence of a general series requires a systematic approach using specific convergence tests.

### 1. The Integral Test
If $f(x)$ is a positive, continuous, and decreasing function on $[1, \\infty)$ such that $f(n) = a_n$, then the series $\\sum a_n$ and the integral $\\int_1^{\\infty} f(x) dx$ either both converge or both diverge. This effectively links the convergence of a series to the convergence of an improper integral.

### 2. The Comparison Test
If $0 \\leq a_n \\leq b_n$ for all $n$, and $\\sum b_n$ converges, then $\\sum a_n$ must also converge. Conversely, if $a_n \\geq b_n \\geq 0$ and $\\sum b_n$ diverges, then $\\sum a_n$ diverges. This is highly effective when comparing complex expressions to known p-series or geometric series.

### 3. The Limit Comparison Test
This is often more practical than the direct comparison test. Given two series $\\sum a_n$ and $\\sum b_n$ with positive terms, compute:
$$L = \\lim_{n \\to \\infty} \\frac{a_n}{b_n}$$
If $0 < L < \\infty$, then both series converge or both diverge.

### 4. The Ratio Test
For a series $\\sum a_n$, let $L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$. 
- If $L < 1$, the series converges absolutely.
- If $L > 1$, the series diverges.
- If $L = 1$, the test is inconclusive (the series may converge or diverge).
This test is particularly powerful for series involving factorials or exponential components.

### 5. The Root Test
Similar to the ratio test, calculate $L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$. The criteria for $L < 1$, $L > 1$, and $L = 1$ are identical to those of the ratio test. This is best applied when the general term $a_n$ is raised to the power of $n$.

## Summary

The study of infinite series is a pillar of calculus that bridges the gap between finite arithmetic and the infinitesimal nature of real analysis. Convergence tests act as the analytical toolkit required to evaluate the behavior of series where direct summation is impossible. 

The strategy for solving these problems always begins with the $n$-th term test. If the terms do not approach zero, the series diverges immediately. If they do, one must assess the nature of the series. Does it have factorials? Use the Ratio Test. Is it a rational function of $n$? Use the Limit Comparison Test with a p-series. Does it alternate? Use the Alternating Series Test. Mastery of these tests enables the evaluation of complex power series, which are essential for defining functions and solving differential equations in fields ranging from physics to financial engineering. By understanding both the theoretical limits and the practical constraints of these series, we gain the ability to model the infinite using finite, computable representations.`;export{e as default};