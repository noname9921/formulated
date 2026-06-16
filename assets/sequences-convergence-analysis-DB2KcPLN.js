var e=`# Sequences of Real Numbers and Convergence Criteria

A sequence of real numbers is a fundamental concept in mathematical analysis, providing the bedrock upon which the theory of limits, continuity, and integration is built. At its core, a sequence is an ordered list of real numbers, effectively functioning as a map from the set of natural numbers to the real line.

## Definition

Formally, a sequence of real numbers is a function $f: \\mathbb{N} \\to \\mathbb{R}$, where $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ denotes the set of natural numbers. We typically denote the value of the function at $n$ as $a_n$, and the entire sequence is represented as $(a_n)_{n=1}^\\infty$ or simply $\\{a_n\\}$.

A sequence converges to a limit $L \\in \\mathbb{R}$ if for every $\\epsilon > 0$, there exists a natural number $N$ such that for all $n > N$, the inequality $|a_n - L| < \\epsilon$ holds. This is written as $\\lim_{n \\to \\infty} a_n = L$. If no such $L$ exists, the sequence is said to diverge.

## Key Terminology

To understand sequences deeply, one must master the nomenclature that describes their behavior:

1. **Bounded Sequence:** A sequence $(a_n)$ is bounded if there exists a real number $M > 0$ such that $|a_n| \\le M$ for all $n \\in \\mathbb{N}$.
2. **Monotone Sequence:** A sequence is monotonically increasing if $a_{n+1} \\ge a_n$ for all $n$, and monotonically decreasing if $a_{n+1} \\le a_n$ for all $n$.
3. **Subsequence:** Given a sequence $(a_n)$, a subsequence is formed by selecting a subset of elements indexed by a strictly increasing sequence of natural numbers $(n_k)$, denoted as $(a_{n_k})$.
4. **Cauchy Sequence:** A sequence is Cauchy if for every $\\epsilon > 0$, there exists an $N \\in \\mathbb{N}$ such that for all $m, n > N$, $|a_m - a_n| < \\epsilon$. In the field of real numbers, a sequence is convergent if and only if it is a Cauchy sequence (the completeness property).
5. **Limit Superior and Limit Inferior:** These are defined as $\\limsup_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} (\\sup \\{a_k : k \\ge n\\})$ and $\\liminf_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} (\\inf \\{a_k : k \\ge n\\})$, respectively.

## Purpose

The study of sequences provides the analytical machinery necessary for defining the real number system and the calculus of continuous functions. Without the rigorous definition of convergence, we could not define the derivative as a limit of difference quotients, nor the Riemann integral as a limit of Cauchy sums.

In computer science and numerical analysis, sequences are utilized to approximate irrational numbers and solutions to transcendental equations. Iterative algorithms, such as Newton's method for finding roots, generate sequences of approximations that must converge to the true value for the algorithm to be useful.

## Fundamental Properties

The behavior of convergent sequences is governed by several vital algebraic and topological properties:

| Property | Description |
| :--- | :--- |
| **Uniqueness** | If a sequence converges, its limit is unique. |
| **Linearity** | If $a_n \\to A$ and $b_n \\to B$, then $ca_n + db_n \\to cA + dB$. |
| **Product Rule** | If $a_n \\to A$ and $b_n \\to B$, then $a_n b_n \\to AB$. |
| **Quotient Rule** | If $a_n \\to A$ and $b_n \\to B$ ($B \\neq 0$), then $a_n/b_n \\to A/B$. |
| **Squeeze Theorem** | If $b_n \\le a_n \\le c_n$ and $b_n, c_n \\to L$, then $a_n \\to L$. |

The **Monotone Convergence Theorem** is arguably the most important result in this area: any sequence that is both bounded and monotonic must converge. This theorem is essential because it guarantees the existence of a limit without requiring us to calculate the limit value explicitly.

## Types & Variations

Sequences can be categorized based on their growth rates and limiting behaviors:

1. **Null Sequences:** Sequences where the limit is zero, such as $a_n = 1/n^p$ for $p > 0$.
2. **Geometric Sequences:** Defined by $a_n = ar^{n-1}$. These converge to 0 if $|r| < 1$, converge to $a$ if $r=1$, and diverge otherwise.
3. **Alternating Sequences:** Sequences like $a_n = (-1)^n/n$, which oscillate but converge to zero.
4. **Divergent Sequences:** This includes sequences that tend to $\\pm\\infty$ (like $a_n = n^2$) or oscillate infinitely without approaching a single value (like $a_n = \\sin(n)$).

Below is a table illustrating the convergence behavior of various sequence types:

| Sequence Expression | Convergence | Limit |
| :--- | :--- | :--- |
| $1/n$ | Convergent | 0 |
| $(-1)^n$ | Divergent | None |
| $n/(n+1)$ | Convergent | 1 |
| $1 + (1/n)^n$ | Convergent | 1 |
| $2^n$ | Divergent | $\\infty$ |

## How to Solve

Solving problems involving sequences requires a systematic approach. When asked to determine if a sequence converges or to find its limit, one should follow these analytical steps:

1. **Test for Boundedness and Monotonicity:** If the sequence is monotonic, check for boundedness. If both hold, convergence is guaranteed by the Monotone Convergence Theorem.
2. **Algebraic Manipulation:** For rational functions of $n$, divide the numerator and denominator by the highest power of $n$ present in the denominator. This often reveals the limit immediately.
3. **Apply the Squeeze Theorem:** If a sequence involves trigonometric functions or terms that are hard to isolate, try to bound the term $a_n$ between two sequences $b_n$ and $c_n$ that share the same limit.
4. **Use Taylor Series Expansions:** For sequences involving exponentials or logarithms, expressing the terms as Taylor series can simplify the limit calculation as $n \\to \\infty$.
5. **Cauchy Criterion:** If showing convergence directly is difficult, showing that $|a_m - a_n| < \\epsilon$ for sufficiently large $m, n$ is a powerful alternative.
6. **Logarithmic Transformation:** For sequences of the form $(a_n)^{b_n}$, evaluate $\\lim_{n \\to \\infty} \\exp(b_n \\ln(a_n))$ to bring the exponent into a multiplication, which is often easier to handle with L'Hôpital's Rule.

### Illustrative Example: The limit of $(1+1/n)^n$

To analyze the sequence $a_n = (1 + 1/n)^n$, we examine the logarithm:
$\\ln(a_n) = n \\ln(1 + 1/n)$.
Using the Taylor expansion $\\ln(1+x) = x - x^2/2 + O(x^3)$, we substitute $x = 1/n$:
$\\ln(a_n) = n(1/n - 1/(2n^2) + O(1/n^3)) = 1 - 1/(2n) + O(1/n^2)$.
Taking the exponential, $a_n = e^{1 - 1/(2n) + O(1/n^2)} \\to e^1 = e$.
This sequence converges to the mathematical constant $e$.

## Summary

The study of sequences of real numbers is foundational to all of mathematical analysis. By understanding the formal definitions of convergence—specifically the $\\epsilon-N$ definition—students gain the ability to rigorously define the behavior of mathematical systems. The interaction between bounded, monotonic, and Cauchy sequences provides a comprehensive framework for determining the limit of any well-behaved numerical progression. Mastery of these concepts, coupled with techniques like the Squeeze Theorem and Taylor series approximation, enables the resolution of complex limit problems and underpins the formal rigor required in higher-level mathematics and physics.`;export{e as default};