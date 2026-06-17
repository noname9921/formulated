var e=`# The Riemann Integral: Upper and Lower Darboux Sums

The mathematical foundation of calculus rests heavily on the formalization of area under a curve. While the intuitive concept of an integral as "the area under a function" dates back to antiquity, the rigorous definition provided by Bernhard Riemann and Gaston Darboux transformed calculus into a precise analytical discipline. Darboux sums represent a critical intermediate step in defining the Riemann integral, providing a mechanism to measure the "approximation quality" of rectangles inscribed within or circumscribed about a function.

## Definition

Let $f:[a,b] \\to \\mathbb{R}$ be a bounded function defined on a closed interval $[a,b]$. A partition $P$ of $[a,b]$ is a finite set of points $\\{x_0, x_1, \\dots, x_n\\}$ such that $a = x_0 < x_1 < \\dots < x_n = b$. This partition divides the interval into $n$ sub-intervals $[x_{i-1}, x_i]$, each with width $\\Delta x_i = x_i - x_{i-1}$.

For each sub-interval, we define the infimum and supremum of $f$ as:
$m_i = \\inf\\{f(x) : x \\in [x_{i-1}, x_i]\\}$
$M_i = \\sup\\{f(x) : x \\in [x_{i-1}, x_i]\\}$

The Lower Darboux Sum $L(f, P)$ and the Upper Darboux Sum $U(f, P)$ are defined as:
$L(f, P) = \\sum_{i=1}^n m_i \\Delta x_i$
$U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i$

The Lower Darboux Integral is defined as the supremum of all lower sums over all possible partitions $P$:
$\\underline{\\int_a^b} f(x) dx = \\sup \\{L(f, P) : P \\text{ is a partition of } [a,b]\\}$

The Upper Darboux Integral is defined as the infimum of all upper sums over all possible partitions $P$:
$\\overline{\\int_a^b} f(x) dx = \\inf \\{U(f, P) : P \\text{ is a partition of } [a,b]\\}$

A function $f$ is Riemann integrable on $[a,b]$ if and only if these two values are equal, at which point the common value is the Riemann integral $\\int_a^b f(x) dx$.

## Key Terminology

- **Partition:** A finite ordered set of points that divides a closed interval into smaller, contiguous sub-intervals.
- **Refinement:** A partition $P^*$ is a refinement of $P$ if $P \\subseteq P^*$. Refinement adds more points to an existing partition, which generally makes the lower sum larger (or equal) and the upper sum smaller (or equal).
- **Boundedness:** A necessary condition for Darboux sums; a function is bounded if there exist constants $m$ and $M$ such that $m \\leq f(x) \\leq M$ for all $x \\in [a,b]$.
- **Darboux Integrable:** A synonym for Riemann integrable, highlighting that the function's upper and lower sums converge to the same value as the mesh size of the partition approaches zero.
- **Mesh Size:** The maximum width of any sub-interval in the partition, denoted $\\lambda(P) = \\max_i \\Delta x_i$.

## Purpose

The primary purpose of Darboux sums is to provide a rigorous analytical framework to bridge the gap between intuitive geometric area and algebraic summation. By using the infimum and supremum rather than arbitrary sample points (as used in Riemann sums), Darboux sums allow us to approach the area from strictly "below" and "above." 

This creates a "sandwich" effect. As we increase the number of points in our partition—refining the grid—the upper sums decrease toward the integral from above, and the lower sums increase toward the integral from below. If the function is sufficiently "well-behaved" (continuous or having only jump discontinuities), these two values are forced together until they meet at a unique real number. This eliminates the dependency on the specific choice of sample points $c_i$ found in standard Riemann sums, replacing them with a property inherent to the function's range within each interval.

## Fundamental Properties

1. **Ordering:** For any partition $P$, $L(f, P) \\leq U(f, P)$.
2. **Refinement Property:** If $P^*$ is a refinement of $P$, then $L(f, P) \\leq L(f, P^*)$ and $U(f, P^*) \\leq U(f, P)$. This confirms that adding more sub-intervals improves the approximation accuracy.
3. **Comparison of Partitions:** For any two partitions $P_1$ and $P_2$, $L(f, P_1) \\leq U(f, P_2)$. This is a crucial result demonstrating that every lower sum is bounded above by every upper sum.
4. **Integrability Criterion:** A function $f$ is Riemann integrable if and only if for every $\\epsilon > 0$, there exists a partition $P$ such that $U(f, P) - L(f, P) < \\epsilon$. This is often called the Riemann-Darboux criterion.

## Types & Variations

- **Uniform Partitions:** Where all $\\Delta x_i$ are equal to $(b-a)/n$. These are the most common in practical computation but are not strictly required for the existence of the integral.
- **Non-uniform Partitions:** Allow for varying interval widths, which is useful when dealing with functions that change rapidly in some regions and slowly in others (e.g., adaptive integration).
- **Extended Integrals:** These generalize Darboux sums to functions with singularities or unbounded domains (improper integrals), though technically they fall outside the standard Riemann framework.

To observe how changing the number of sub-intervals affects the approximation, consider the interactive graph below.

\`\`\`interactivegraph
x^2
params: n=5
range: n=1:20
\`\`\`
In this interactive visualization, the function $f(x) = x^2$ is plotted. The parameter $n$ allows you to observe how increasing the number of partitions provides a tighter approximation to the area, illustrating the convergence of Darboux sums as $n$ increases.

## How to Solve

To determine if a function is Riemann integrable using Darboux sums, follow this analytical procedure:

1. **Define the Range:** Identify the function $f(x)$ on $[a,b]$. Determine if $f$ is continuous or monotonic, as these properties simplify finding the infimum and supremum.
2. **Set the Partition:** Use a uniform partition $P_n$ where $\\Delta x = \\frac{b-a}{n}$. 
3. **Find $m_i$ and $M_i$:** For each interval $[x_{i-1}, x_i]$, calculate the minimum and maximum. If $f$ is monotonically increasing, $m_i = f(x_{i-1})$ and $M_i = f(x_i)$.
4. **Form the Sums:** Express $L(f, P_n)$ and $U(f, P_n)$ as functions of $n$. These usually result in geometric or power series.
5. **Evaluate the Limit:** Calculate the limits of the sums:
   $\\lim_{n \\to \\infty} L(f, P_n) = L$
   $\\lim_{n \\to \\infty} U(f, P_n) = U$
6. **Compare:** If $L = U$, the function is integrable, and the integral value is this common limit.

Example: For $f(x) = x$ on $[0, 1]$, using $n$ sub-intervals:
$x_i = i/n$, $\\Delta x = 1/n$.
$m_i = (i-1)/n$, $M_i = i/n$.
$L(f, P_n) = \\sum_{i=1}^n \\frac{i-1}{n} \\cdot \\frac{1}{n} = \\frac{1}{n^2} \\sum_{j=0}^{n-1} j = \\frac{1}{n^2} \\frac{(n-1)n}{2} = \\frac{n-1}{2n} = \\frac{1}{2} - \\frac{1}{2n}$.
$U(f, P_n) = \\sum_{i=1}^n \\frac{i}{n} \\cdot \\frac{1}{n} = \\frac{1}{n^2} \\frac{n(n+1)}{2} = \\frac{n+1}{2n} = \\frac{1}{2} + \\frac{1}{2n}$.
As $n \\to \\infty$, both converge to $1/2$. Thus, $\\int_0^1 x dx = 1/2$.

| Interval | Lower Bound ($m_i$) | Upper Bound ($M_i$) | Width ($\\Delta x$) |
| :--- | :--- | :--- | :--- |
| $[x_{i-1}, x_i]$ | $\\inf f(x)$ | $\\sup f(x)$ | $x_i - x_{i-1}$ |
| $[0, 1]$ | $0$ | $1$ | $1/n$ |
| $[1, 2]$ | $1$ | $2$ | $1/n$ |

The table above summarizes the fundamental components needed to construct the sums for any partition segment.

## Summary

Darboux sums provide the theoretical architecture upon which the Riemann integral is built. By utilizing the concepts of supremum and infimum, they bypass the ambiguity of sample point selection, offering a robust method to define area. The progression from $L(f, P)$ and $U(f, P)$ to the Riemann integral represents a pinnacle of 19th-century analysis, allowing mathematicians to rigorously handle continuous functions. The key takeaway is the convergence property: as the mesh size $\\lambda(P) \\to 0$, the gap between upper and lower sums vanishes for integrable functions, yielding the definite integral as the unique, well-defined limit. This framework remains the standard pedagogical gateway into more advanced topics like Lebesgue integration and measure theory.`;export{e as default};