var e=`# Sequences and Convergence

## Definition

A sequence is formally defined as a function whose domain is the set of natural numbers $\\mathbb{N}$ (or a subset thereof, such as $\\mathbb{Z}^+$) and whose codomain is a set $X$, typically the real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$. We denote a sequence as a list of terms $\\{a_n\\}_{n=1}^{\\infty}$, where $a_n$ represents the value of the function at the index $n$. Unlike a set, the order of terms in a sequence is strictly defined by the index $n$.

Convergence is a property describing the long-term behavior of a sequence. A sequence $\\{a_n\\}$ converges to a limit $L \\in \\mathbb{R}$ if, for every $\\epsilon > 0$, there exists a positive integer $N$ such that for all $n > N$, $|a_n - L| < \\epsilon$. This definition, known as the $(\\epsilon, N)$-definition of a limit, formalizes the intuitive notion that as $n$ grows arbitrarily large, the terms $a_n$ become arbitrarily close to $L$. If no such $L$ exists, the sequence is said to diverge.

## Key Terminology

To understand sequences and convergence, one must master the foundational vocabulary used in real analysis:

| Term | Definition |
| :--- | :--- |
| Index ($n$) | The position of an element in the sequence, usually starting at $1$ or $0$. |
| Term ($a_n$) | The specific value assigned to the index $n$. |
| Limit ($L$) | The target value that the sequence approaches as $n \\to \\infty$. |
| $\\epsilon$ (Epsilon) | A measure of the "closeness" or tolerance required for convergence. |
| $N$ (Threshold) | The point in the index after which all terms remain within the $\\epsilon$-neighborhood. |
| Monotonicity | A sequence is monotonic if it is either non-decreasing ($a_n \\le a_{n+1}$) or non-increasing ($a_n \\ge a_{n+1}$). |
| Boundedness | A sequence is bounded if there exist $M, m$ such that $m \\le a_n \\le M$ for all $n$. |
| Subsequence | A sequence derived from another by deleting zero or more terms while maintaining original order. |

## Purpose

The study of sequences and convergence serves as the bedrock of calculus and mathematical analysis. Without the rigorous definition of convergence, concepts such as the derivative, the integral, and the summation of infinite series would lack a formal basis. 

Sequences allow mathematicians to approximate values that cannot be computed through finite arithmetic. For example, the number $e$ is defined as the limit of the sequence $a_n = (1 + 1/n)^n$. Similarly, sequences are essential in numerical analysis, where algorithms generate successive approximations of roots or integrals, converging toward the true analytical value. By understanding how sequences behave, we can predict the stability of systems, the accuracy of computational models, and the behavior of functions as they approach singular points.

## Fundamental Properties

The behavior of sequences is governed by several rigorous theorems. A critical result is the Monotone Convergence Theorem, which states that if a sequence is both monotonic and bounded, it must converge. This theorem is non-constructive; it guarantees the existence of a limit without necessarily identifying its value.

Another essential property is the Algebraic Limit Theorem. If $\\lim_{n \\to \\infty} a_n = A$ and $\\lim_{n \\to \\infty} b_n = B$, then:
1. $\\lim_{n \\to \\infty} (a_n \\pm b_n) = A \\pm B$
2. $\\lim_{n \\to \\infty} (c \\cdot a_n) = c \\cdot A$
3. $\\lim_{n \\to \\infty} (a_n \\cdot b_n) = A \\cdot B$
4. $\\lim_{n \\to \\infty} (\\frac{a_n}{b_n}) = \\frac{A}{B}$, provided $B \\neq 0$ and $b_n \\neq 0$ for all $n$.

The Squeeze Theorem provides another powerful tool: if $a_n \\le b_n \\le c_n$ for all $n > N$, and $\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} c_n = L$, then it must be that $\\lim_{n \\to \\infty} b_n = L$. This is particularly useful for sequences containing bounded oscillatory terms, such as $\\frac{\\sin(n)}{n}$.

## Types & Variations

Sequences can be classified by their growth patterns and structural properties:

1. **Arithmetic Sequences:** Terms are formed by adding a constant difference $d$. The general term is $a_n = a_1 + (n-1)d$. These diverge unless $d=0$.
2. **Geometric Sequences:** Terms are formed by multiplying by a common ratio $r$. The general term is $a_n = a_1 \\cdot r^{n-1}$. These converge to $0$ if $|r| < 1$, to $a_1$ if $r=1$, and diverge otherwise.
3. **Cauchy Sequences:** A sequence $\\{a_n\\}$ is Cauchy if for every $\\epsilon > 0$, there exists an $N$ such that for all $m, n > N$, $|a_n - a_m| < \\epsilon$. In the real numbers, a sequence is Cauchy if and only if it converges. This property is crucial in defining the completeness of the real number system.
4. **Divergent Sequences:** These do not approach a finite limit. Some diverge to infinity ($a_n \\to \\infty$), while others exhibit oscillatory divergence (e.g., $a_n = (-1)^n$).

The following static graph illustrates the concept of a limit for a function $f(x) = \\frac{1}{x} + 2$, which mirrors the behavior of the sequence $a_n = \\frac{1}{n} + 2$. As $x \\to \\infty$, $f(x)$ approaches $2$.

\`\`\`graph
1/x + 2
\`\`\`

## How to Solve

Analyzing the convergence of a sequence $\\{a_n\\}$ typically involves a multi-step analytical process:

**1. Testing for Limit Candidates:**
Use limit laws to calculate $\\lim_{n \\to \\infty} a_n$. Replace $n$ with a continuous variable $x$ and apply L'Hôpital's Rule if the expression takes an indeterminate form such as $\\frac{\\infty}{\\infty}$ or $\\frac{0}{0}$.

**2. Applying the Monotone Convergence Theorem:**
If a direct limit calculation is difficult, verify if the sequence is monotonic (by checking the sign of $a_{n+1} - a_n$ or the ratio $a_{n+1}/a_n$) and bounded (by induction). If both are true, the limit is guaranteed to exist.

**3. The Squeeze Theorem:**
If the sequence contains oscillating components (like $\\cos(n)$ or $\\sin(n)$), bound the sequence between two others that share a common limit. For instance, to prove $\\lim_{n \\to \\infty} \\frac{\\cos(n)}{n} = 0$, note that $-\\frac{1}{n} \\le \\frac{\\cos(n)}{n} \\le \\frac{1}{n}$. Since both boundary sequences approach $0$, the middle sequence must also converge to $0$.

**4. The $(\\epsilon, N)$ Proof:**
For formal rigor, identify $N$ in terms of $\\epsilon$. Set up the inequality $|a_n - L| < \\epsilon$ and solve for $n$ to express the threshold $N$ as a function of $\\epsilon$. This proves that for any arbitrarily small distance $\\epsilon$, we can always find a term $N$ beyond which all terms are closer to the limit than $\\epsilon$.

**5. Cauchy Criterion:**
If the limit $L$ is unknown, demonstrate that the sequence is Cauchy. Showing that $|a_{n+k} - a_n| < \\epsilon$ for large $n$ and any $k > 0$ establishes convergence without needing to identify the value of the limit itself.

## Summary

Sequences and convergence provide the mathematical language to describe infinite processes. By transitioning from finite calculations to the limit of infinite terms, we gain the ability to characterize functions, solve complex equations, and establish the theoretical foundations of analysis. Whether utilizing the formal $(\\epsilon, N)$ approach, relying on the Monotone Convergence Theorem, or applying the Squeeze Theorem, the study of sequences remains an essential discipline for predicting the behavior of mathematical systems. The completeness of the real numbers, expressed through Cauchy sequences, ensures that these limit processes behave predictably, forming the cornerstone of modern mathematics. Understanding these principles is not merely an academic exercise; it is the fundamental mechanism through which we bridge the gap between discrete steps and continuous reality.`;export{e as default};