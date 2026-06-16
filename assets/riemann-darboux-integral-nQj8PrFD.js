var e=`# The Riemann Integral: Upper and Lower Darboux Sums

The Darboux integral provides a rigorous framework for defining the Riemann integral. Developed by Gaston Darboux, this approach relies on the concepts of partitions, supremum, and infimum of function values over sub-intervals. By constructing upper and lower sums, we establish a sequence of approximations that converge to a unique value, provided the function is sufficiently well-behaved.

## Definition

Let $f: [a,b] \\to \\mathbb{R}$ be a bounded function on a closed interval $[a,b]$. A partition $P$ of $[a,b]$ is a finite set of points $\\{x_0, x_1, \\dots, x_n\\}$ such that $a = x_0 < x_1 < \\dots < x_n = b$. For each sub-interval $[x_{i-1}, x_i]$, let $M_i = \\sup\\{f(x) : x \\in [x_{i-1}, x_i]\\}$ and $m_i = \\inf\\{f(x) : x \\in [x_{i-1}, x_i]\\}$.

The upper Darboux sum $U(f, P)$ and lower Darboux sum $L(f, P)$ are defined as:
$$U(f,P) = \\sum_{i=1}^n M_i \\Delta x_i$$
$$L(f,P) = \\sum_{i=1}^n m_i \\Delta x_i$$
where $\\Delta x_i = x_i - x_{i-1}$. The upper Darboux integral is the infimum of $U(f,P)$ over all partitions $P$, denoted by $\\overline{\\int_a^b} f(x)dx$. The lower Darboux integral is the supremum of $L(f,P)$ over all partitions $P$, denoted by $\\underline{\\int_a^b} f(x)dx$. A function is Riemann integrable if and only if these two values are equal.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Partition | A set of points dividing the interval $[a,b]$ into smaller sub-intervals. |
| Supremum | The least upper bound of a set of values within a sub-interval. |
| Infimum | The greatest lower bound of a set of values within a sub-interval. |
| Refinement | A partition $P'$ is a refinement of $P$ if $P \\subseteq P'$, meaning $P'$ contains all points of $P$. |
| Darboux Integrable | A function whose upper and lower integrals are equal. |
| Riemann Sum | A summation approximating the area under a curve, dependent on choice of sample points $c_i \\in [x_{i-1}, x_i]$. |

## Purpose

The primary purpose of Darboux sums is to provide an analytical tool to test for Riemann integrability without the ambiguity of sample point selection inherent in standard Riemann sums. By focusing on the bounds (supremum and infimum), Darboux sums allow mathematicians to define the integral in terms of the "greatest possible" and "least possible" areas associated with a partition. This simplifies proofs of integrability, specifically by showing that as the mesh of the partition approaches zero, the gap between the upper and lower sums vanishes.

## Fundamental Properties

1. **Monotonicity of Sums:** If $P'$ is a refinement of $P$, then $L(f, P) \\leq L(f, P') \\leq U(f, P') \\leq U(f, P)$. This implies that adding points to a partition always tightens the approximation of the integral.
2. **Bounds:** For any partition $P$, $L(f, P) \\leq \\underline{\\int_a^b} f(x)dx \\leq \\overline{\\int_a^b} f(x)dx \\leq U(f, P)$.
3. **Integrability Criterion:** A function $f$ is Riemann integrable on $[a,b]$ if and only if for every $\\epsilon > 0$, there exists a partition $P$ such that $U(f, P) - L(f, P) < \\epsilon$.
4. **Linearity:** The integral operator is linear; given integrable functions $f$ and $g$, the integral of $cf + g$ is $c\\int f + \\int g$.

## Types & Variations

Darboux sums are essentially a specialized form of Riemann sums. While Riemann sums choose sample points $c_i$ arbitrarily within each sub-interval, Darboux sums force the choice to be the extreme values (the supremum and infimum). 

We can observe how partitions affect the approximation using the interactive graph below. By varying the number of intervals ($n$), one can see how the upper sums (red bars) and lower sums (blue bars) converge toward the area under the curve $f(x) = x^2$.

\`\`\`interactivegraph
x^2
params: n=5
range: n=2:50
\`\`\`

The user should observe that as $n$ increases, the "staircase" approximation becomes increasingly refined, effectively squeezing the difference between the upper and lower rectangles toward the actual value of the definite integral.

## How to Solve

To compute the Darboux integral for a continuous function such as $f(x) = x^2$ on $[0,1]$, follow these steps:

1. **Define a Partition:** Let $P_n$ be a uniform partition where $\\Delta x = \\frac{1}{n}$. The points are $x_i = \\frac{i}{n}$.
2. **Find Infimum and Supremum:** Since $f(x) = x^2$ is strictly increasing, $m_i = f(x_{i-1}) = (\\frac{i-1}{n})^2$ and $M_i = f(x_i) = (\\frac{i}{n})^2$.
3. **Formulate Sums:**
   - $L(f, P_n) = \\sum_{i=1}^n (\\frac{i-1}{n})^2 \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=0}^{n-1} i^2 = \\frac{1}{n^3} \\frac{(n-1)n(2n-1)}{6}$.
   - $U(f, P_n) = \\sum_{i=1}^n (\\frac{i}{n})^2 \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=1}^{n} i^2 = \\frac{1}{n^3} \\frac{n(n+1)(2n+1)}{6}$.
4. **Take the Limit:** Calculate $\\lim_{n \\to \\infty} L(f, P_n)$ and $\\lim_{n \\to \\infty} U(f, P_n)$. Both converge to $\\frac{1}{3}$.
5. **Conclusion:** Since both sums converge to the same limit, the function is Riemann integrable, and $\\int_0^1 x^2 dx = \\frac{1}{3}$.

For complex functions, if the function is not monotonic, one must determine the maximum and minimum of $f$ on each sub-interval using standard optimization techniques, such as identifying critical points via derivatives or examining boundary values of each sub-interval.

## Summary

Darboux sums transform the conceptual definition of the Riemann integral into a structured, analytical procedure. By utilizing the supremum and infimum of a function over sub-intervals, Darboux sums create an upper and lower envelope for the area under a curve. This method provides the mathematical foundation necessary to prove the existence of the integral for a wide range of functions, including those that are continuous or piecewise continuous. The transition from Darboux sums to the formal limit process allows for the rigorous calculation of integrals that underpin much of calculus and real analysis. Whether utilizing uniform partitions for simple polynomials or refining partitions for more complex, bounded functions, the Darboux approach remains an indispensable tool for understanding the behavior of integration as a limit of sums.`;export{e as default};