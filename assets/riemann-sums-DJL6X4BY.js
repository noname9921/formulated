var e=`# Area and Riemann Sums

## Definition

The problem of determining the area beneath a curve is one of the foundational challenges of calculus. A Riemann sum provides a method for approximating the total area under a curve on a graph by dividing the area into a finite number of simpler geometric shapes, typically rectangles. Named after the German mathematician Bernhard Riemann, the Riemann sum represents the summation of the areas of these individual rectangles.

Formally, if we have a function $f(x)$ defined on a closed interval $[a,b]$, a partition $P$ of the interval consists of points $x_0, x_1, \\dots, x_n$ such that $a = x_0 < x_1 < \\dots < x_n = b$. Let $\\Delta x_i = x_i - x_{i-1}$ be the width of the $i$-th sub-interval. By choosing a sample point $x_i^* \\in [x_{i-1}, x_i]$, we define the Riemann sum $S$ as:

$$S = \\sum_{i=1}^{n} f(x_i^*) \\Delta x_i$$

As the number of sub-intervals $n$ approaches infinity and the maximum width of the sub-intervals approaches zero, the Riemann sum converges to the definite integral of the function over the interval $[a,b]$. This limit, if it exists, is defined as the area under the curve:

$$\\int_{a}^{b} f(x) dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x_i$$

## Key Terminology

To navigate the theory of Riemann sums, one must become familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Partition | A set of points that divides a closed interval $[a,b]$ into smaller sub-intervals. |
| Sub-interval | An interval $[x_{i-1}, x_i]$ derived from a partition of $[a,b]$. |
| Mesh Size | The length of the largest sub-interval in a partition, often denoted by $||P||$. |
| Sample Point | A value $x_i^*$ chosen within the $i$-th sub-interval used to determine the height of a rectangle. |
| Left Riemann Sum | A sum where $x_i^*$ is chosen as the left endpoint of each sub-interval. |
| Right Riemann Sum | A sum where $x_i^*$ is chosen as the right endpoint of each sub-interval. |
| Midpoint Rule | A sum where $x_i^*$ is chosen as the midpoint of each sub-interval. |
| Definite Integral | The limit of a Riemann sum as the number of sub-intervals approaches infinity. |

## Purpose

The primary purpose of Riemann sums is to bridge the gap between discrete summation and continuous integration. Before the development of the Fundamental Theorem of Calculus, mathematicians required a robust method to quantify the area of irregular shapes bounded by functions. Riemann sums offer a constructive approach to this, allowing us to approximate area with arbitrary precision.

Beyond geometry, Riemann sums are essential for calculating physical quantities that are defined as the accumulation of varying rates. For instance, if $v(t)$ represents the velocity of an object at time $t$, the Riemann sum of $v(t)$ over an interval $[t_0, t_1]$ provides the total displacement. This relationship extends to mass, work, center of mass, and probability density functions, making the Riemann sum a universal tool for engineering and physical sciences.

## Fundamental Properties

The behavior of Riemann sums is governed by several core mathematical properties that ensure consistency and convergence:

1. **Additivity over Intervals:** For any $c \\in (a,b)$, the integral is the sum of integrals over $[a,c]$ and $[c,b]$. This property follows directly from the summation properties of Riemann sums.
2. **Linearity:** If $f(x)$ and $g(x)$ are integrable functions and $c$ is a constant, then the integral of $(cf(x) + g(x))$ is equal to $c \\int f(x) dx + \\int g(x) dx$. This mirrors the linearity of the underlying summation: $\\sum (c f(x_i^*) + g(x_i^*)) \\Delta x_i = c \\sum f(x_i^*) \\Delta x_i + \\sum g(x_i^*) \\Delta x_i$.
3. **Monotonicity:** If $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then the Riemann sum for $f$ will be less than or equal to the Riemann sum for $g$ for any given partition, meaning $\\int_a^b f(x) dx \\leq \\int_a^b g(x) dx$.
4. **Convergence:** A function is said to be Riemann integrable if the limit of the Riemann sum exists and is independent of the choice of partition and the choice of sample points $x_i^*$. Continuous functions and monotonic functions on a closed interval are always Riemann integrable.

\`\`\`interactivegraph
f(x) = x^2 / k
params: k=1
range: k=1:5
\`\`\`

The interactive graph above plots the function $f(x) = \\frac{x^2}{k}$. By adjusting the parameter $k$, one can observe how the "steepness" of the parabola changes. In the context of Riemann sums, changing $k$ shifts the total area under the curve on a fixed interval $[a,b]$. As $k$ increases, the area decreases, illustrating how functions respond to scaling transformations in the context of integration.

## Types & Variations

Depending on how the sample point $x_i^*$ is selected, different types of Riemann sums are utilized for estimation:

### Left Riemann Sum
The height of each rectangle is determined by the function value at the left endpoint: $f(x_{i-1})$. This sum is an underestimate for increasing functions and an overestimate for decreasing functions.

### Right Riemann Sum
The height is determined by the function value at the right endpoint: $f(x_i)$. Conversely to the left sum, this provides an overestimate for increasing functions and an underestimate for decreasing functions.

### Midpoint Riemann Sum
The height is determined by the midpoint of the interval: $f(\\frac{x_{i-1} + x_i}{2})$. This method is generally more accurate than either left or right sums because the function's overestimation and underestimation on either side of the midpoint tend to cancel out.

### Trapezoidal Rule
While strictly not a Riemann sum in its purest definition, the Trapezoidal Rule averages the left and right Riemann sums. It uses the area of a trapezoid $A_i = \\frac{f(x_{i-1}) + f(x_i)}{2} \\Delta x_i$ to estimate the area. This provides a higher order of accuracy for non-linear functions compared to simple rectangular approximations.

## How to Solve

To calculate an area using a Riemann sum manually, one should follow this structured process:

1. **Define the Interval and Sub-intervals:** Identify the interval $[a,b]$ and decide on the number of sub-intervals $n$. Calculate the uniform width $\\Delta x = \\frac{b-a}{n}$.
2. **Determine the Sample Points:** Based on the type of Riemann sum (Left, Right, or Midpoint), define the values of $x_i^*$. For uniform partitions, $x_i = a + i \\Delta x$.
3. **Calculate Function Values:** Evaluate $f(x_i^*)$ for each $i=1$ to $n$.
4. **Sum the Areas:** Multiply each function value by $\\Delta x$ and compute the summation.

**Example Calculation:**
Estimate the area under $f(x) = x^2$ on the interval $[0,2]$ using a Right Riemann sum with $n=4$.

- $\\Delta x = \\frac{2-0}{4} = 0.5$.
- The partition points are $\\{0, 0.5, 1.0, 1.5, 2.0\\}$.
- The right endpoints are $\\{0.5, 1.0, 1.5, 2.0\\}$.
- $S = 0.5 \\cdot [f(0.5) + f(1.0) + f(1.5) + f(2.0)]$.
- $S = 0.5 \\cdot [0.25 + 1.0 + 2.25 + 4.0] = 0.5 \\cdot 7.5 = 3.75$.

The exact value of the integral is $\\int_0^2 x^2 dx = [\\frac{1}{3}x^3]_0^2 = \\frac{8}{3} \\approx 2.667$. The difference between the estimate ($3.75$) and the actual value ($2.667$) demonstrates the error associated with choosing a finite $n$.

\`\`\`graph
x^2
\`\`\`

The static graph above illustrates the function $f(x) = x^2$. When computing Riemann sums for this parabola, the rectangles' tops will lie above the curve for a right sum, confirming why our calculated $3.75$ is an overestimate of the true integral $2.667$.

## Summary

Riemann sums serve as the essential numerical foundation for integration. By partitioning a domain into sub-intervals and approximating the area of these sub-sections with rectangles, we establish a rigorous framework to define the area under any integrable curve. The accuracy of this approximation is tied directly to the mesh size and the number of rectangles utilized. As $n \\to \\infty$, the discrete nature of the Riemann sum transitions into the continuous, precise tool known as the definite integral. Understanding the trade-offs between left, right, and midpoint approximations is critical for numerical analysis, as these methods form the basis for computer-assisted integration and real-world engineering modeling. The process of calculating Riemann sums not only reinforces the conceptual understanding of area but also provides the mechanism for solving problems where symbolic integration may be difficult or impossible.`;export{e as default};