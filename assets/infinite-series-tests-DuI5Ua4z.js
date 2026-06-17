var e=`# Infinite Series and Convergence Tests

## Definition

An infinite series is the sum of the terms of an infinite sequence. Formally, given a sequence of real numbers $\\{a_n\\}_{n=1}^{\\infty}$, an infinite series is represented by the summation notation:

$$\\sum_{n=1}^{\\infty}a_n = a_1 + a_2 + a_3 + \\dots$$

To make sense of the sum of infinitely many terms, we define the $k$-th partial sum $S_k$ as the finite sum of the first $k$ terms:

$$S_k = \\sum_{n=1}^{k}a_n$$

The infinite series converges to a limit $S$ if the sequence of partial sums $\\{S_k\\}$ converges to $S$ as $k \\to \\infty$. That is:

$$\\lim_{k \\to \\infty} S_k = S$$

If the limit of the partial sums does not exist or is infinite, the series is said to diverge. The study of infinite series is central to mathematical analysis, serving as the foundation for power series representations of transcendental functions, differential equations, and complex analysis.

## Key Terminology

Understanding the vocabulary of series is essential for rigorous analysis.

| Term | Definition |
|:---|:---|
| Partial Sum | The sum of the first $k$ terms of a series. |
| Remainder | The difference $R_k = S - S_k$, representing the error after $k$ terms. |
| Convergence | A state where $\\lim_{k \\to \\infty} S_k$ exists as a finite number. |
| Divergence | A state where the series fails to converge to a finite number. |
| Absolute Convergence | A series $\\sum a_n$ converges absolutely if $\\sum |a_n|$ converges. |
| Conditional Convergence | A series converges, but the series of absolute values diverges. |
| Term Test | A necessary condition stating $\\lim_{n \\to \\infty} a_n$ must be 0 for a series to converge. |

## Purpose

Infinite series provide the mechanism to extend algebraic operations to functions that cannot be expressed via finite polynomials. By expressing a function as an infinite series (such as a Taylor or Maclaurin series), we can approximate values, integrate functions that lack elementary antiderivatives, and solve differential equations.

In computational mathematics, infinite series are vital for precision. For example, the transcendental numbers $e$ and $\\pi$ are defined through series expansions. Similarly, computers utilize partial sums of series to evaluate trigonometric and exponential functions, stopping once the remainder $R_k$ falls below a specified machine epsilon.

## Fundamental Properties

The linearity of summation allows for the manipulation of convergent series using algebraic properties analogous to those of finite sums.

1. **Addition/Subtraction:** If $\\sum a_n = A$ and $\\sum b_n = B$, then $\\sum (a_n \\pm b_n) = A \\pm B$.
2. **Scalar Multiplication:** For any constant $c$, $\\sum c a_n = c \\sum a_n$.
3. **Tail Invariance:** The convergence or divergence of a series is not affected by adding or removing a finite number of terms. Only the sum value changes.

A critical property is that absolute convergence implies convergence. If $\\sum |a_n|$ converges, then $\\sum a_n$ must also converge. This is a powerful tool, as it allows us to analyze the behavior of alternating or mixed-sign series by examining their positive-term counterparts.

## Types & Variations

Several standard forms of series appear frequently in analysis:

### Geometric Series
A series of the form $\\sum_{n=0}^{\\infty} ar^n$. It converges if and only if $|r| < 1$, with a sum $S = \\frac{a}{1-r}$. If $|r| \\ge 1$, the series diverges.

### $p$-Series
A series of the form $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$. This series converges if $p > 1$ and diverges if $p \\le 1$. The case $p=1$ is the Harmonic Series, which is a famous example of a series whose terms approach zero but whose partial sums grow logarithmically toward infinity.

### Alternating Series
A series of the form $\\sum_{n=1}^{\\infty} (-1)^n a_n$ where $a_n > 0$. The Alternating Series Test (Leibniz's Theorem) states that if $a_n$ is monotonically decreasing and $\\lim_{n \\to \\infty} a_n = 0$, the series converges.

## How to Solve

Determining the convergence of a series involves selecting the appropriate test based on the structure of $a_n$.

### 1. Divergence Test (nth Term Test)
If $\\lim_{n \\to \\infty} a_n \\neq 0$, the series must diverge. Note that if $\\lim_{n \\to \\infty} a_n = 0$, the test is inconclusive.

### 2. Integral Test
If $f(n) = a_n$ where $f(x)$ is continuous, positive, and decreasing for $x \\ge 1$, then $\\sum a_n$ converges if and only if the improper integral $\\int_{1}^{\\infty} f(x) dx$ converges.

### 3. Comparison Tests
*   **Direct Comparison:** If $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. If $0 \\le b_n \\le a_n$ and $\\sum b_n$ diverges, then $\\sum a_n$ diverges.
*   **Limit Comparison:** If $a_n, b_n > 0$ and $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L$ where $0 < L < \\infty$, then $\\sum a_n$ and $\\sum b_n$ share the same convergence behavior.

### 4. Ratio and Root Tests
*   **Ratio Test:** Let $L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$. If $L < 1$, the series converges absolutely. If $L > 1$, it diverges. If $L = 1$, the test is inconclusive.
*   **Root Test:** Let $L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$. The conditions for convergence and divergence are identical to the Ratio Test.

### Illustrative Framework: Exploring Growth Rates
To understand how these tests interact with different growth rates, consider a general series $\\sum \\frac{1}{n^p}$. Using the integral test, we derive:
$$\\int_{1}^{\\infty} x^{-p} dx = \\left[ \\frac{x^{-p+1}}{-p+1} \\right]_{1}^{\\infty}$$
As $x \\to \\infty$, if $p > 1$, the term approaches zero, confirming convergence. If $p < 1$, the term grows, confirming divergence. This derivation explains the "threshold" behavior of $p$-series.

## Summary

The study of infinite series is defined by the tension between the individual terms of a sequence and the collective behavior of their partial sums. 

Key takeaways include:
- The Divergence Test serves as a first-line "screening" tool to identify obvious divergent series where terms do not approach zero.
- The Ratio and Root tests are the most effective instruments for power series, where factorials or exponential terms dominate the growth rate of $a_n$.
- Comparison tests allow us to map unknown, complex series onto well-understood "benchmarks" like geometric or $p$-series.
- Absolute convergence is a stronger requirement than convergence, providing a pathway to analyze alternating or oscillating signs by collapsing them into positive-term series.

Infinite series are not merely abstract sums; they are the analytical engine of calculus. Whether approximating $\\pi$, solving the heat equation via Fourier series, or modeling physical systems, the rigorous application of convergence tests remains the primary method for verifying the validity of these mathematical representations. Mastery of these techniques enables the transition from finite arithmetic to the infinite realms of analysis and beyond.`;export{e as default};