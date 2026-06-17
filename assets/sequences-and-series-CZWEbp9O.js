var e=`# Sequences & Series

## Definition

A sequence is an ordered list of numbers, objects, or mathematical entities that follow a specific pattern or rule. Formally, a sequence is a function $f: \\mathbb{N} \\to \\mathbb{R}$, where the domain is the set of natural numbers (or a subset thereof) and the codomain is the set of real numbers. We typically denote a sequence as $\\{a_n\\}_{n=1}^{\\infty}$, where $a_n$ represents the $n$-th term of the sequence.

A series, conversely, is the indicated sum of the terms of a sequence. If we have a sequence $\\{a_n\\}$, the corresponding series is denoted by the expression $S_k = \\sum_{n=1}^{k} a_n$. When a series extends infinitely, it is expressed as $\\sum_{n=1}^{\\infty} a_n$, which is defined as the limit of the sequence of partial sums $S_k$ as $k$ approaches infinity.

## Key Terminology

To analyze sequences and series, one must master the standard nomenclature that defines their structure and behavior:

| Term | Definition |
|:---|:---|
| Term ($a_n$) | The individual element at position $n$ in a sequence. |
| Partial Sum ($S_k$) | The sum of the first $k$ terms: $S_k = a_1 + a_2 + ... + a_k$. |
| Common Difference ($d$) | The constant value added to consecutive terms in an arithmetic sequence. |
| Common Ratio ($r$) | The constant factor multiplied to consecutive terms in a geometric sequence. |
| Convergence | A state where the sequence terms or partial sums approach a specific finite value $L$. |
| Divergence | A state where the sequence terms or partial sums do not approach a finite limit. |
| Monotonicity | A property indicating a sequence is non-increasing or non-decreasing for all $n$. |
| Boundedness | A condition where there exist real numbers $M$ and $m$ such that $m \\leq a_n \\leq M$ for all $n$. |

## Purpose

Sequences and series are indispensable tools in mathematics and applied sciences. Their primary utility lies in approximating complex functions and modeling iterative processes.

In calculus, Taylor and Maclaurin series allow us to represent transcendental functions like $e^x$, $\\sin(x)$, and $\\ln(1+x)$ as infinite polynomials, which are computationally efficient for machines to evaluate. In finance, series are used to calculate the future value of annuities, mortgages, and compound interest models. In computer science, sequences model the complexity of algorithms through recursive relations, while in physics, they describe wave propagation and vibrational states in quantized systems.

## Fundamental Properties

The behavior of sequences and series is governed by rigorous analytical properties. For sequences, the concept of a limit is paramount. A sequence $\\{a_n\\}$ converges to a limit $L$ if for every $\\epsilon > 0$, there exists an integer $N$ such that for all $n > N$, $|a_n - L| < \\epsilon$.

For series, the divergence test is the most fundamental diagnostic: if $\\lim_{n \\to \\infty} a_n \\neq 0$, then the series $\\sum a_n$ must diverge. However, $a_n \\to 0$ is a necessary but not sufficient condition for convergence (e.g., the harmonic series $\\sum \\frac{1}{n}$ diverges despite $a_n \\to 0$).

Convergence tests serve as the backbone of series analysis:
1. **Geometric Series Test**: $\\sum ar^n$ converges if and only if $|r| < 1$.
2. **Integral Test**: If $f(x)$ is positive, continuous, and decreasing, then $\\sum f(n)$ and $\\int_{1}^{\\infty} f(x) dx$ share the same convergence behavior.
3. **Comparison Test**: If $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges.
4. **Ratio Test**: If $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L$, the series converges if $L < 1$ and diverges if $L > 1$.

## Types & Variations

### Arithmetic Sequences
An arithmetic sequence is defined by the recursive formula $a_n = a_{n-1} + d$. The explicit formula is $a_n = a_1 + (n-1)d$. The sum of the first $n$ terms is given by $S_n = \\frac{n}{2}(a_1 + a_n)$.

### Geometric Sequences
A geometric sequence is defined by $a_n = a_1 \\cdot r^{n-1}$. The sum of a finite geometric series is $S_n = \\frac{a_1(1-r^n)}{1-r}$ for $r \\neq 1$. For an infinite geometric series with $|r| < 1$, the sum converges to $S = \\frac{a_1}{1-r}$.

### Power Series
A power series is a series of the form $\\sum_{n=0}^{\\infty} c_n(x-a)^n$. These are central to calculus as they represent functions as polynomials. The "radius of convergence" $R$ determines the interval within which the series converges to the function it represents.

### Alternating Series
An alternating series is of the form $\\sum (-1)^n a_n$, where $a_n > 0$. The Alternating Series Test (Leibniz's Theorem) states that if $a_n$ is monotonically decreasing and $\\lim_{n \\to \\infty} a_n = 0$, then the series converges.

## How to Solve

Solving problems involving sequences and series requires a systematic approach.

1. **Identification**: Determine if the sequence is arithmetic, geometric, or neither. If it is neither, look for patterns such as factorials ($n!$) or combinations.
2. **Testing for Convergence**: 
   - If the terms do not approach zero, immediately declare divergence using the $n$-th term test.
   - If the terms involve powers like $n^n$ or $n!$, apply the Ratio Test.
   - If the series resembles a $p$-series ($\\sum \\frac{1}{n^p}$), use the $p$-series test: it converges if $p > 1$ and diverges if $p \\leq 1$.
3. **Summation**: 
   - For finite arithmetic/geometric series, use the standard summation formulas.
   - For infinite convergent series, check if it fits the geometric form $\\frac{a}{1-r}$ or if it is a telescoping series, where terms cancel out when written in partial form.
4. **Telescoping Series**: If the general term can be expressed as a difference $b_n - b_{n+1}$, the partial sum $S_N = \\sum_{n=1}^N (b_n - b_{n+1})$ simplifies to $b_1 - b_{N+1}$. Taking the limit as $N \\to \\infty$ gives the sum $b_1 - \\lim_{N \\to \\infty} b_{N+1}$.

To observe the behavior of a power series transformation, consider the general form $f(x) = \\sum_{n=0}^{k} (x-a)^n$. Using the interactive graph below, we can explore how shifting the center $a$ affects the translation of the function curve along the $x$-axis.

\`\`\`interactivegraph
(x-a)^2
params: a=0
range: a=-3:3
\`\`\`

The graph above visualizes the function $f(x) = (x-a)^2$. By adjusting the parameter $a$, one can observe the horizontal shift of the parabola, demonstrating how the choice of $a$ in a series centered at $a$ effectively translates the function's domain of approximation.

## Summary

Sequences and series form the analytical foundation for understanding change and accumulation. A sequence provides an ordered progression of values, while a series aggregates these values to yield a total. Mastery of these topics requires distinguishing between divergence and convergence, utilizing tests like the Ratio and Integral tests, and applying standard formulas for arithmetic and geometric progressions. Whether through the lens of pure mathematics or practical applications in engineering and finance, sequences and series provide the essential language for handling infinite processes and functional approximations in the modern scientific world.`;export{e as default};