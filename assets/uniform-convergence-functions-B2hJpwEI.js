var e=`# Sequences and Series of Functions: Pointwise vs Uniform Convergence

The transition from the calculus of individual functions to the analysis of sequences and series of functions constitutes a fundamental bridge between elementary analysis and the rigors of functional analysis. In sequences of numbers, we study the limit of a single value. In sequences of functions, we study the limit of an entire mapping, where the "closeness" of the functions is governed by the topology of the function space itself.

## Definition

Let $I \\subseteq \\mathbb{R}$ be an interval and let $(f_n)_{n=1}^{\\infty}$ be a sequence of functions where each $f_n: I \\to \\mathbb{R}$.

Pointwise convergence is defined as follows: The sequence $(f_n)$ converges pointwise to a function $f: I \\to \\mathbb{R}$ on $I$ if for every $x \\in I$ and every $\\epsilon > 0$, there exists an integer $N(x, \\epsilon)$ such that for all $n \\geq N(x, \\epsilon)$, $|f_n(x) - f(x)| < \\epsilon$. Essentially, for each specific point $x$, the values $f_n(x)$ form a convergent sequence of real numbers.

Uniform convergence is a stronger condition: The sequence $(f_n)$ converges uniformly to $f$ on $I$ if for every $\\epsilon > 0$, there exists an integer $N(\\epsilon)$ such that for all $n \\geq N(\\epsilon)$ and for all $x \\in I$, $|f_n(x) - f(x)| < \\epsilon$. The critical distinction is that the choice of $N$ depends only on $\\epsilon$ and is independent of $x$. This represents a global "closeness" of the functions $f_n$ to the limit function $f$.

A series of functions $\\sum_{n=1}^{\\infty} f_n(x)$ converges pointwise (or uniformly) to $S(x)$ if the sequence of partial sums $S_N(x) = \\sum_{n=1}^{N} f_n(x)$ converges pointwise (or uniformly) to $S(x)$.

## Key Terminology

- **Limit Function:** The function $f$ to which the sequence $(f_n)$ converges.
- **Domain of Convergence:** The subset of the domain where the sequence or series converges.
- **Uniform Norm (Supremum Norm):** Denoted as $||f_n - f||_{\\infty} = \\sup_{x \\in I} |f_n(x) - f(x)|$. Uniform convergence is equivalent to stating that $||f_n - f||_{\\infty} \\to 0$ as $n \\to \\infty$.
- **Cauchy Criterion:** A sequence $(f_n)$ is uniformly Cauchy if for every $\\epsilon > 0$, there exists $N$ such that for all $m, n > N$ and for all $x \\in I$, $|f_n(x) - f_m(x)| < \\epsilon$.
- **Weierstrass M-Test:** A sufficient condition for uniform convergence of a series $\\sum f_n(x)$, stating that if there exists a sequence of constants $M_n$ such that $|f_n(x)| \\leq M_n$ for all $x \\in I$ and $\\sum M_n$ converges, then the series $\\sum f_n(x)$ converges uniformly on $I$.

## Purpose

The primary purpose of distinguishing between these types of convergence lies in the preservation of analytical properties. Pointwise convergence is often "too weak" to guarantee that properties such as continuity, integrability, or differentiability are inherited by the limit function.

If $f_n \\to f$ uniformly and each $f_n$ is continuous, then $f$ is continuous. If the convergence were merely pointwise, this might fail, as illustrated by the sequence $f_n(x) = x^n$ on $[0, 1]$, which converges to a discontinuous function. Uniform convergence also allows for the exchange of limits, such as $\\lim_{n \\to \\infty} \\int f_n = \\int \\lim_{n \\to \\infty} f_n$, and enables term-by-term integration and differentiation under specific conditions.

## Fundamental Properties

1. **Continuity Preservation:** If $(f_n)$ is a sequence of continuous functions converging uniformly to $f$ on $I$, then $f$ is continuous on $I$.
2. **Integration:** If $(f_n)$ converges uniformly to $f$ on $[a, b]$ and each $f_n$ is Riemann integrable, then $f$ is integrable and $\\lim_{n \\to \\infty} \\int_a^b f_n(x) dx = \\int_a^b f(x) dx$.
3. **Differentiation:** Uniform convergence of $f_n$ is insufficient to guarantee that $f_n'$ converges to $f'$. Rather, if $(f_n)$ converges pointwise to $f$ and $(f_n')$ converges uniformly to some $g$, then $f$ is differentiable and $f' = g$.
4. **Cauchy Completeness:** The space of bounded functions $B(I)$ with the supremum norm is a complete metric space, meaning every uniformly Cauchy sequence converges to a function in that space.

## Types & Variations

Convergence behaviors can be categorized by how the sequence interacts with the supremum of the error.

| Type | Dependence of $N$ | Uniformity | Preservation of Continuity |
| :--- | :--- | :--- | :--- |
| Pointwise | $N(x, \\epsilon)$ | No | No |
| Uniform | $N(\\epsilon)$ | Yes | Yes |
| Locally Uniform | $N(\\epsilon, K)$ for compact $K \\subset I$ | Yes (on compact sets) | Yes (on compact sets) |

The following interactive graph explores the sequence $f_n(x) = \\frac{x^n}{1+x^n}$ on the interval $[0, 2]$. By varying $n$, one can observe how the function develops a sharp transition near $x=1$, demonstrating the difference between pointwise and uniform behavior.

\`\`\`interactivegraph
\\frac{x^n}{1+x^n}
params: n=1
range: n=1:20
\`\`\`

The graph above illustrates the sequence $f_n(x) = \\frac{x^n}{1+x^n}$. As $n$ increases, for $x < 1$, the function approaches $0$, and for $x > 1$, it approaches $1$. At $x=1$, $f_n(1) = 1/2$. The limit function is $0$ for $0 \\leq x < 1$ and $1$ for $x > 1$ (with a jump at $x=1$). Because the limit is discontinuous, the convergence cannot be uniform on any interval containing $1$.

## How to Solve

To determine whether a sequence of functions $(f_n)$ converges uniformly to $f$ on an interval $I$, follow this analytical framework:

1. **Find the Pointwise Limit:** Determine $f(x) = \\lim_{n \\to \\infty} f_n(x)$ for each $x \\in I$.
2. **Examine the Supremum:** Calculate $M_n = \\sup_{x \\in I} |f_n(x) - f(x)|$.
   - This usually involves standard calculus techniques: find the derivative of $g_n(x) = |f_n(x) - f(x)|$, set it to zero, and evaluate $g_n$ at the critical points and boundary points of $I$.
3. **Apply the Limit Test:**
   - If $\\lim_{n \\to \\infty} M_n = 0$, then the convergence is uniform.
   - If $\\lim_{n \\to \\infty} M_n \\neq 0$ or the limit does not exist, the convergence is not uniform.
4. **Check for Necessary Conditions:** If $f_n$ are continuous and the limit function $f$ is discontinuous, conclude immediately that the convergence is not uniform.

Example: Consider $f_n(x) = \\frac{\\sin(nx)}{n}$ for $x \\in \\mathbb{R}$.
Step 1: Pointwise, $|f_n(x)| \\leq \\frac{1}{n} \\to 0$. Thus $f(x) = 0$.
Step 2: $M_n = \\sup | \\frac{\\sin(nx)}{n} - 0 | = \\frac{1}{n} \\sup |\\sin(nx)| = \\frac{1}{n}$.
Step 3: $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$. The convergence is uniform.

## Summary

The distinction between pointwise and uniform convergence is central to mathematical analysis. Pointwise convergence describes the behavior of a sequence at individual coordinates, but it often fails to preserve the structural characteristics of the functions involved, such as continuity and integrability. Uniform convergence, by requiring the convergence rate to be independent of the domain variable, provides the necessary strength to move limits inside integral and summation signs, thereby preserving the essential analytical properties of the constituent functions. Mastering these concepts is essential for understanding Fourier series, power series, and the foundation of function spaces.`;export{e as default};