var e=`# Sequences and Series of Functions: Pointwise vs Uniform Convergence

The study of sequences and series of functions constitutes a fundamental bridge between basic calculus and functional analysis. While sequences of real numbers converge to a single value, sequences of functions converge to a "limit function." The nature of this convergence depends heavily on how the distance between the functions is measured, leading to the distinct, yet deeply related, concepts of pointwise and uniform convergence.

## Definition

Let $\\{f_n\\}$ be a sequence of functions defined on a set $D \\subseteq \\mathbb{R}$ with values in $\\mathbb{R}$. We say that $\\{f_n\\}$ converges pointwise to a function $f: D \\to \\mathbb{R}$ if for every $x \\in D$ and for every $\\epsilon > 0$, there exists an integer $N = N(\\epsilon, x)$ such that:
$$|f_n(x) - f(x)| < \\epsilon \\quad \\text{for all } n \\geq N$$
In this definition, the choice of $N$ may depend on both the tolerance $\\epsilon$ and the specific point $x$.

Conversely, we say that $\\{f_n\\}$ converges uniformly to $f$ on $D$ if for every $\\epsilon > 0$, there exists an integer $N = N(\\epsilon)$ such that:
$$|f_n(x) - f(x)| < \\epsilon \\quad \\text{for all } n \\geq N \\text{ and for all } x \\in D$$
Crucially, in uniform convergence, $N$ depends only on $\\epsilon$ and is independent of $x$. This implies that the entire function $f_n$ must eventually lie within an "$\\epsilon$-tube" around the limit function $f$.

## Key Terminology

To navigate the analysis of function sequences, one must master several specific terms:

* **Limit Function ($f$):** The function toward which the sequence $f_n$ tends.
* **Supremum Norm ($\\| \\cdot \\|_\\infty$):** Defined on the space of bounded functions as $\\|g\\|_\\infty = \\sup_{x \\in D} |g(x)|$. Uniform convergence is equivalent to $\\|f_n - f\\|_\\infty \\to 0$ as $n \\to \\infty$.
* **Cauchy Criterion for Uniform Convergence:** A sequence $\\{f_n\\}$ converges uniformly if and only if for every $\\epsilon > 0$, there exists $N$ such that for all $n, m \\geq N$ and all $x \\in D$, $|f_n(x) - f_m(x)| < \\epsilon$.
* **Pointwise Boundedness:** A sequence is pointwise bounded if for every $x$, there exists $M_x$ such that $|f_n(x)| \\leq M_x$ for all $n$.
* **Uniform Boundedness:** A sequence is uniformly bounded if there exists a single $M$ such that $|f_n(x)| \\leq M$ for all $n$ and all $x \\in D$.

## Purpose

The primary motivation for distinguishing between these two types of convergence is the preservation of analytical properties. Pointwise convergence is often "too weak" to preserve continuity, integrability, or differentiability. For instance, a sequence of continuous functions converging pointwise to a limit function does not guarantee that the limit function is continuous. Uniform convergence, however, is a strong enough condition to ensure that the limit process commutes with operations like integration and, under certain conditions, differentiation.

Consider the classic example where $f_n(x) = x^n$ on $[0, 1]$. Pointwise, this converges to a discontinuous function: $0$ for $x \\in [0, 1)$ and $1$ for $x = 1$. The failure of uniform convergence explains why the continuity of $x^n$ is lost in the limit.

## Fundamental Properties

The differences between pointwise and uniform convergence manifest in the behavior of the limit functions:

| Property | Pointwise Convergence | Uniform Convergence |
| :--- | :--- | :--- |
| **Continuity** | Limit may be discontinuous | Limit of continuous functions is continuous |
| **Integrability** | $\\int \\lim f_n \\neq \\lim \\int f_n$ (usually) | $\\lim \\int_a^b f_n(x) dx = \\int_a^b \\lim f_n(x) dx$ |
| **Differentiability** | $\\frac{d}{dx} \\lim f_n \\neq \\lim \\frac{d}{dx} f_n$ | Requires uniform convergence of $f_n'$ |
| **Algebraic Dependence** | $N$ depends on $\\epsilon$ and $x$ | $N$ depends only on $\\epsilon$ |

The Weierstrass M-test is a powerful tool for series of functions $\\sum f_n(x)$. If $|f_n(x)| \\leq M_n$ for all $x \\in D$, and $\\sum M_n$ converges, then the series $\\sum f_n(x)$ converges uniformly and absolutely on $D$.

## Types & Variations

We explore the behavior of sequences through interactive dynamics. Consider $f_n(x) = \\frac{nx}{1 + n^2x^2}$. This sequence converges pointwise to $0$ for all $x$. However, the maximum value of $f_n(x)$ occurs at $x = 1/n$, where $f_n(1/n) = 1/2$. Because the "peak" does not shrink to zero, the convergence is not uniform.

\`\`\`interactivegraph
\\frac{nx}{1 + n^2x^2}
params: n=1
range: n=1:50
\`\`\`
In the graph above, observe how the peak moves toward the origin and maintains a constant height of $0.5$ as $n$ increases. This visual "hump" confirms the lack of uniform convergence on any interval containing $0$.

Another category involves function series, such as the power series $\\sum a_n x^n$. Within the radius of convergence $R$, power series converge uniformly on any compact sub-interval $[ -r, r ]$ where $r < R$, which is a foundational result for the analyticity of functions.

## How to Solve

To determine the nature of convergence for a sequence $\\{f_n\\}$:

1. **Find the pointwise limit $f(x)$:** Fix $x$ and evaluate the limit of the sequence of real numbers $a_n = f_n(x)$.
2. **Examine the Uniformity:** Calculate $M_n = \\sup_{x \\in D} |f_n(x) - f(x)|$.
   - If $\\lim_{n \\to \\infty} M_n = 0$, the convergence is uniform.
   - If $\\lim_{n \\to \\infty} M_n \\neq 0$ or the supremum does not exist (is infinity), the convergence is not uniform.
3. **Use the Cauchy Criterion:** If finding the supremum is analytically difficult, check if $|f_n(x) - f_m(x)|$ can be bounded independently of $x$ for large $n, m$.
4. **Counter-example Check:** Look for "spikes" or moving peaks. If $f_n(x)$ has a maximum that stays away from $0$ as $n \\to \\infty$, convergence is likely not uniform.
5. **Dini's Theorem (for special cases):** If $D$ is compact, $f_n$ is a monotonic sequence of continuous functions, and $f_n \\to f$ pointwise where $f$ is continuous, then the convergence is uniform.

## Summary

The distinction between pointwise and uniform convergence is the threshold between basic convergence and the rigorous requirements of analysis. While pointwise convergence captures the behavior of individual points, uniform convergence forces the entire function to approach its limit globally. 

Uniform convergence is essential for the valid interchange of limit operations. When a sequence converges uniformly, we gain the ability to integrate term-by-term and expect the limit function to inherit the regularity (continuity) of its predecessors. Failing to distinguish between these two modes of convergence is a common source of errors in calculus and differential equations, particularly when dealing with infinite series or asymptotic expansions. Understanding the supremum norm and the dependence of $N$ on $x$ remains the primary tool for verifying convergence in analytical contexts.`;export{e as default};