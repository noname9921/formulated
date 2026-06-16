var e=`# Area and Riemann Sums

## Definition

The problem of determining the area beneath a curve is a foundational challenge in mathematics that bridges the gap between geometry and calculus. A Riemann sum provides a rigorous method for approximating the area under a function $f(x)$ over a closed interval $[a, b]$ by dividing the region into a finite collection of simpler geometric shapes—typically rectangles.

Formally, let $f$ be a function defined on the interval $[a, b]$. We partition the interval into $n$ subintervals by choosing a set of points $x_0, x_1, \\dots, x_n$ such that $a = x_0 < x_1 < \\dots < x_n = b$. The width of each subinterval $i$ is denoted by $\\Delta x_i = x_i - x_{i-1}$. Within each subinterval $[x_{i-1}, x_i]$, we select a sample point $x_i^*$. The Riemann sum $S$ is defined as the summation:
$$S = \\sum_{i=1}^{n} f(x_i^*) \\Delta x_i$$
As the number of subintervals $n$ approaches infinity and the width of the largest subinterval approaches zero, the Riemann sum converges to the definite integral, representing the exact area between the function and the x-axis, provided the function is integrable.

## Key Terminology

To analyze these sums effectively, one must understand several technical terms that define the architecture of the approximation:

| Term | Definition |
| :--- | :--- |
| Partition | A set of points dividing $[a, b]$ into smaller subintervals. |
| Subinterval Width | The distance $\\Delta x = \\frac{b-a}{n}$ in a uniform partition. |
| Sample Point | The specific $x$-coordinate $x_i^*$ used to determine the rectangle's height. |
| Left Riemann Sum | Uses the left endpoint of each subinterval: $x_i^* = x_{i-1}$. |
| Right Riemann Sum | Uses the right endpoint of each subinterval: $x_i^* = x_i$. |
| Midpoint Rule | Uses the center of each subinterval: $x_i^* = \\frac{x_{i-1}+x_i}{2}$. |
| Definite Integral | The limit of the Riemann sum as $n \\to \\infty$, written as $\\int_a^b f(x)dx$. |
| Norm of Partition | The width of the largest subinterval, denoted by $\\|P\\|$. |

## Purpose

The primary purpose of Riemann sums is to formalize the concept of integration. Historically, mathematicians like Archimedes used the "method of exhaustion" to find areas of circles and parabolas, which was a precursor to modern integration. Riemann sums extend this by allowing us to calculate the accumulation of quantities, even when the rate of change is non-constant.

Beyond mere area, Riemann sums are the computational engine for physics and engineering. They allow for the calculation of:
1. Work done by a variable force.
2. The center of mass of non-uniform objects.
3. Fluid pressure against a dam wall.
4. Total accumulated population or volume over time or space.

Essentially, whenever a total quantity is composed of infinitely many infinitesimal parts, the Riemann sum is the mathematical tool required to bridge the discrete summation of parts to the continuous totality of the whole.

## Fundamental Properties

The behavior of Riemann sums is governed by several core properties that ensure the stability and convergence of the integral:

1. **Additivity over the Interval:** The integral of a function over $[a, c]$ is the sum of the integral over $[a, b]$ and $[b, c]$.
   $$\\int_a^c f(x)dx = \\int_a^b f(x)dx + \\int_b^c f(x)dx$$
2. **Linearity:** The integral of a sum of functions is the sum of the integrals, and constant multiples can be pulled out of the sum.
   $$\\int_a^b [cf(x) + g(x)]dx = c\\int_a^b f(x)dx + \\int_a^b g(x)dx$$
3. **Monotonicity:** If $f(x) \\leq g(x)$ for all $x$ in $[a, b]$, then the Riemann sum of $f$ is less than or equal to the Riemann sum of $g$, implying $\\int_a^b f(x)dx \\leq \\int_a^b g(x)dx$.
4. **Convergence:** For a function to be Riemann integrable, it must be bounded and have a set of discontinuities with measure zero (Lebesgue's criterion).

## Types & Variations

Different choices of $x_i^*$ yield different approximation behaviors. The following interactive graph allows for the observation of how changing the number of subintervals $n$ affects the precision of the approximation for the function $f(x) = x^2$.

\`\`\`interactivegraph
x^2
params: n=4
range: n=1:20
\`\`\`

In the interactive graph above, adjusting the slider $n$ illustrates the visual convergence of rectangles toward the actual curve of $f(x) = x^2$. As $n$ increases, the error between the sum of the rectangles and the true area under the parabola decreases significantly.

### Major Variations:
- **Left/Right Sums:** These provide bounds if the function is monotonic. If $f$ is increasing, the left sum is an under-approximation, and the right sum is an over-approximation.
- **Trapezoidal Rule:** Instead of rectangles, this uses trapezoids to connect $f(x_{i-1})$ and $f(x_i)$. It is more accurate than left or right sums because it accounts for the slope of the function within the subinterval.
- **Simpson's Rule:** This uses parabolic arcs to approximate the function over subintervals, providing an extremely high degree of accuracy for smooth functions.

## How to Solve

To calculate a Riemann sum manually, follow these rigorous steps:

1. **Define the Interval and $n$:** Identify the bounds $a$ and $b$ and the number of rectangles $n$.
2. **Calculate $\\Delta x$:** Use the formula $\\Delta x = \\frac{b-a}{n}$.
3. **Identify Sample Points:** 
   - For a **Right Riemann Sum**, $x_i = a + i \\Delta x$.
   - For a **Left Riemann Sum**, $x_i = a + (i-1) \\Delta x$.
4. **Evaluate the Function:** Calculate $f(x_i)$ for each $i$.
5. **Summation:** Calculate the product $f(x_i) \\Delta x$ for each $i$ and add them together.

### Illustrative Example
Consider calculating the Right Riemann Sum for $f(x) = x^2$ on the interval $[0, 2]$ with $n = 4$.
- $\\Delta x = (2 - 0) / 4 = 0.5$.
- Sample points $x_i$ are $0.5, 1.0, 1.5, 2.0$.
- Evaluate $f(x_i)$: $f(0.5)=0.25, f(1.0)=1.0, f(1.5)=2.25, f(2.0)=4.0$.
- Multiply by $\\Delta x$: $0.25(0.5) + 1.0(0.5) + 2.25(0.5) + 4.0(0.5) = 0.125 + 0.5 + 1.125 + 2.0 = 3.75$.

The exact value using the Fundamental Theorem of Calculus is $\\int_0^2 x^2 dx = [\\frac{1}{3}x^3]_0^2 = 8/3 \\approx 2.66$. Our sum $3.75$ serves as an upper bound because $x^2$ is increasing.

## Summary

The study of Riemann sums is the study of how to transition from discrete finite approximations to continuous infinite exactness. By partitioning intervals and systematically choosing heights for approximating rectangles, we can quantify the area beneath any well-behaved function. This process of summation, when taken to the limit, defines the definite integral, which is the cornerstone of integral calculus. Whether employing basic left-endpoint sums or advanced techniques like Simpson's Rule, the underlying logic remains consistent: the whole is the accumulation of its constituent, simplified parts. Mastery of Riemann sums allows for the precise calculation of real-world quantities, forming the essential bridge between geometry and the physics of change.`;export{e as default};