var e=`# Sequences of Real Numbers and Convergence Criteria

A sequence of real numbers is one of the foundational building blocks of mathematical analysis. By transitioning from finite arithmetic to the study of infinite processes, mathematicians developed the rigor necessary to define calculus, topology, and functional analysis. This document explores the mechanics of real sequences, the formal definition of convergence, and the criteria used to determine the behavior of these infinite arrays.

## Definition

A sequence of real numbers is a function $f: \\mathbb{N} \\to \\mathbb{R}$, where $\\mathbb{N}$ is the set of natural numbers. We typically denote a sequence by $(a_n)_{n=1}^\\infty$ or simply $\\{a_n\\}$, where $a_n = f(n)$. The value $a_n$ is referred to as the $n$-th term of the sequence. Unlike a set, the order of terms in a sequence is strictly defined by the index $n$, and elements may repeat indefinitely.

Formally, a sequence $\\{a_n\\}$ converges to a real number $L$ if, for every $\\epsilon > 0$, there exists a natural number $N$ such that for all $n \\geq N$, the condition $|a_n - L| < \\epsilon$ holds. This is symbolized by $\\lim_{n \\to \\infty} a_n = L$. If no such $L$ exists, the sequence is said to diverge.

## Key Terminology

To analyze sequences, we must distinguish between several critical behaviors and properties:

| Term | Definition |
| :--- | :--- |
| **Limit** | The unique value $L$ that $a_n$ approaches as $n$ increases without bound. |
| **Boundedness** | A sequence is bounded if there exists $M \\in \\mathbb{R}$ such that $|a_n| \\leq M$ for all $n$. |
| **Monotonicity** | A sequence is monotonically increasing if $a_n \\leq a_{n+1}$ and decreasing if $a_n \\geq a_{n+1}$. |
| **Subsequence** | A sequence derived by deleting zero or more terms from the original, denoted by $\\{a_{n_k}\\}$ where $n_1 < n_2 < n_3 \\dots$. |
| **Cauchy Sequence** | A sequence where the terms become arbitrarily close to each other: $|a_n - a_m| < \\epsilon$ for sufficiently large $n, m$. |
| **Divergence to Infinity** | A sequence where for any $M > 0$, there exists $N$ such that $a_n > M$ for all $n > N$. |

## Purpose

The study of sequences is essential because they provide the bridge between discrete indices and continuous real numbers. The purpose of convergence criteria is to establish whether an infinite process has a "destination." Without convergence, we could not define the derivative of a function as a limit of difference quotients, nor could we define the integral as a limit of Riemann sums. Furthermore, understanding convergence allows for the analysis of infinite series, numerical approximation methods (such as the Newton-Raphson method), and the completeness of the real number system itself.

## Fundamental Properties

The behavior of convergent sequences is governed by the Limit Laws. If $\\lim_{n \\to \\infty} a_n = L$ and $\\lim_{n \\to \\infty} b_n = M$, then:

1. **Sum Rule:** $\\lim_{n \\to \\infty} (a_n + b_n) = L + M$.
2. **Product Rule:** $\\lim_{n \\to \\infty} (a_n \\cdot b_n) = L \\cdot M$.
3. **Quotient Rule:** $\\lim_{n \\to \\infty} (a_n / b_n) = L / M$, provided $M \\neq 0$ and $b_n \\neq 0$.
4. **Squeeze Theorem:** If $a_n \\leq c_n \\leq b_n$ for all $n > N$, and $\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} b_n = L$, then $\\lim_{n \\to \\infty} c_n = L$.
5. **Monotone Convergence Theorem:** If a sequence is monotonic and bounded, it must converge. This theorem is a cornerstone of real analysis because it does not require prior knowledge of the limit to prove existence.

## Types & Variations

Sequences can be categorized by their growth patterns and structural properties.

**1. Arithmetic Sequences:** Defined by $a_n = a_1 + (n-1)d$. These sequences converge only if the common difference $d=0$; otherwise, they diverge to $\\pm\\infty$.

**2. Geometric Sequences:** Defined by $a_n = ar^{n-1}$. Convergence depends strictly on the common ratio $r$:
- If $|r| < 1$, the sequence converges to $0$.
- If $r = 1$, the sequence converges to $a$.
- If $r = -1$ or $|r| > 1$, the sequence diverges (oscillates or grows boundlessly).

**3. Cauchy Sequences:** In the real numbers, a sequence converges if and only if it is a Cauchy sequence. This is a profound statement regarding the "completeness" of $\\mathbb{R}$. It implies that if the terms of a sequence eventually cluster together, they must be clustering around a real number, leaving no "gaps" in the number line.

**4. Alternating Sequences:** Sequences such as $a_n = (-1)^n / n$. These illustrate that even if a sequence does not have a monotonic trend, it can still converge through damped oscillation.

## How to Solve

Solving problems involving sequences often requires determining their limit or proving convergence. The following analytical framework is used by mathematicians:

### Identifying Limits
If a sequence is given by a function $f(n)$, we can often use L'Hôpital's Rule by treating $n$ as a continuous variable $x$. If $\\lim_{x \\to \\infty} f(x) = L$, then the sequence $\\lim_{n \\to \\infty} f(n)$ also equals $L$. Note that this only applies when the function is defined on the interval $[1, \\infty)$.

### Proving Convergence via the Monotone Convergence Theorem
This is often the most elegant path for recursively defined sequences (e.g., $a_{n+1} = \\sqrt{2 + a_n}$).
1. **Show Boundedness:** Use induction to show that $a_n$ is bounded (e.g., $a_n < 2$).
2. **Show Monotonicity:** Compare $a_{n+1}$ to $a_n$ to demonstrate that the sequence is non-decreasing.
3. **Invoke Theorem:** Since it is bounded and monotonic, a limit $L$ exists.
4. **Solve for $L$:** Replace $a_{n+1}$ and $a_n$ with $L$ in the recursive formula and solve the resulting algebraic equation.

### Using the Squeeze Theorem
When terms are complex, look for upper and lower bounds. For example, to find the limit of $a_n = \\frac{\\sin(n)}{n}$, observe that:
$$-1 \\leq \\sin(n) \\leq 1$$
Dividing by $n$ (for $n>0$):
$$-\\frac{1}{n} \\leq \\frac{\\sin(n)}{n} \\leq \\frac{1}{n}$$
Since $\\lim_{n \\to \\infty} (-1/n) = 0$ and $\\lim_{n \\to \\infty} (1/n) = 0$, it follows that $\\lim_{n \\to \\infty} \\frac{\\sin(n)}{n} = 0$.

## Summary

The study of sequences of real numbers is a rigorous endeavor that moves from intuitive notions of "getting closer to a value" to the precise epsilon-delta definitions required for higher mathematics. Key takeaways include:

- **Convergence** is determined by the behavior of the "tail" of the sequence, where terms reside within an arbitrary distance $\\epsilon$ from the limit $L$.
- **Completeness** of the real numbers is intimately linked to Cauchy sequences; every Cauchy sequence in $\\mathbb{R}$ converges to a point in $\\mathbb{R}$.
- **Monotonicity and Boundedness** serve as the most common tools for proving existence of limits when the value of the limit itself is difficult to identify algebraically.
- **Analytical tools** such as the Squeeze Theorem and L'Hôpital's Rule allow for the systematic evaluation of limits even in complex functional forms.

Mastery of these concepts is prerequisite for understanding the convergence of series, the properties of continuous functions, and the foundations of calculus. By framing infinite processes through the lens of sequences, we gain the ability to quantify growth, approximate irrational numbers, and define the behavior of mathematical systems as they evolve toward a stable state.`;export{e as default};