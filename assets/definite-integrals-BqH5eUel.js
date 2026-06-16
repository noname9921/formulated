var e=`# Definite Integrals

The definite integral is a foundational concept in mathematical analysis that extends the intuitive notion of summation to continuous processes. At its core, it represents the signed area between the graph of a function $f(x)$ and the $x$-axis over a specified interval $[a,b]$. Unlike the indefinite integral, which yields a family of functions, the definite integral evaluates to a specific real number, provided the function is integrable over the interval.

The historical development of this concept traces back to the method of exhaustion used by Archimedes to calculate areas of circles, eventually maturing into the rigorous definition provided by Bernhard Riemann in the 19th century. The definite integral serves as the bridge between differential and integral calculus, encapsulated by the Fundamental Theorem of Calculus.

## Key Terminology

Understanding the definite integral requires familiarity with several specific terms that define the structure of the operation:

| Term | Definition |
| :--- | :--- |
| Integrand | The function $f(x)$ being integrated. |
| Limits of Integration | The values $a$ (lower limit) and $b$ (upper limit) defining the interval. |
| Differential $dx$ | Indicates the variable of integration and the infinitesimal width of rectangles. |
| Partition | A set of points $\\{x_0, x_1, ..., x_n\\}$ that subdivide $[a,b]$. |
| Riemann Sum | An approximation of the area under a curve using rectangles. |
| Signed Area | Area where regions below the $x$-axis contribute negative values. |

The notation $\\int_{a}^{b} f(x) dx$ denotes the limit of a Riemann sum as the width of the sub-intervals approaches zero. Specifically, if we define a partition of $[a,b]$ into $n$ sub-intervals of width $\\Delta x_i$, the definite integral is defined as:
$$\\int_{a}^{b} f(x) dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x_i$$
where $x_i^*$ is any sample point in the $i$-th sub-interval.

## Purpose

The primary purpose of the definite integral is to accumulate quantities. While geometrically interpreted as area, its physical and analytical utility is far broader. In physics, if $v(t)$ represents the velocity of an object, the definite integral $\\int_{t_1}^{t_2} v(t) dt$ yields the total displacement of the object over the time interval $[t_1, t_2]$. In economics, it can represent total cost or revenue given a marginal rate.

Furthermore, definite integrals allow for the calculation of arc length, surface area, and the volume of solids of revolution. The concept is indispensable in engineering, where it is used to calculate centers of mass, moments of inertia, and work performed by variable forces. By discretizing a continuous process into infinitesimally small increments, we can model complex, dynamic systems with exactitude.

## Fundamental Properties

Definite integrals obey several algebraic properties that facilitate their calculation and manipulation. These properties derive directly from the linearity of the summation operator:

1. **Order of Limits:** Reversing the limits of integration negates the integral.
$$\\int_{a}^{b} f(x) dx = -\\int_{b}^{a} f(x) dx$$

2. **Zero Width Interval:** If the limits are identical, the integral is zero.
$$\\int_{a}^{a} f(x) dx = 0$$

3. **Additivity of Intervals:** The integral over a union of adjacent intervals is the sum of the integrals over each interval.
$$\\int_{a}^{c} f(x) dx = \\int_{a}^{b} f(x) dx + \\int_{b}^{c} f(x) dx$$

4. **Linearity:** The integral of a sum is the sum of the integrals, and constants can be factored out.
$$\\int_{a}^{b} (c_1f(x) + c_2g(x)) dx = c_1\\int_{a}^{b} f(x) dx + c_2\\int_{a}^{b} g(x) dx$$

5. **Comparison Property:** If $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then:
$$\\int_{a}^{b} f(x) dx \\leq \\int_{a}^{b} g(x) dx$$

The graph below plots $f(x) = x^2$ and $g(x) = x$, showing the area accumulated between the curves, which highlights the comparison property and interval analysis.

\`\`\`graph
x^2
x
\`\`\`

## Types & Variations

Definite integrals are classified based on the nature of the integrand and the domain of integration:

1. **Proper Integrals:** These are defined on a closed, bounded interval $[a,b]$ where the function $f(x)$ is bounded and continuous. These are the standard integrals addressed by the Riemann definition.

2. **Improper Integrals:** These occur in two scenarios:
   - Infinite intervals: At least one limit is $\\pm\\infty$. We evaluate these by taking the limit of a proper integral as the bound approaches infinity.
   - Discontinuous integrands: The function $f(x)$ has a vertical asymptote within the interval $[a,b]$. These require careful handling using limits around the singularity.

3. **Line Integrals:** These involve integrating a function along a curve $C$ in a plane or space. Instead of integrating with respect to $x$, we integrate with respect to the arc length parameter $s$.

4. **Multiple Integrals:** These extend the definite integral to higher dimensions, allowing for the calculation of volumes over regions in $\\mathbb{R}^n$ (double or triple integrals).

## How to Solve

The most efficient method for solving definite integrals is the Fundamental Theorem of Calculus (FTC), Part II. If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$ (such that $F'(x) = f(x)$), then:
$$\\int_{a}^{b} f(x) dx = F(b) - F(a)$$

### Step-by-Step Derivation Procedure

1. **Identify the Antiderivative:** Determine the indefinite integral $F(x) = \\int f(x) dx$. This requires knowledge of standard antiderivatives or techniques such as integration by parts or partial fractions.
2. **Apply Limits:** Evaluate the antiderivative $F(x)$ at the upper limit $b$ and lower limit $a$.
3. **Calculate Difference:** Subtract the result of the lower limit evaluation from the result of the upper limit evaluation.

**Example Calculation:**
Consider $\\int_{0}^{\\pi} \\sin(x) dx$.
1. The antiderivative of $\\sin(x)$ is $-\\cos(x)$.
2. Evaluate at bounds: $F(\\pi) = -\\cos(\\pi) = -(-1) = 1$.
3. Evaluate at bounds: $F(0) = -\\cos(0) = -(1) = -1$.
4. Result: $1 - (-1) = 2$.

For more complex scenarios where an explicit antiderivative is difficult to find, numerical methods such as the Trapezoidal Rule or Simpson's Rule are employed. These approximate the area by partitioning the interval into sub-intervals and approximating the curve with linear or quadratic segments.

The interactive graph below demonstrates the effect of changing the upper bound of integration, $b$, for the function $f(x) = \\sin(x)$. As you slide $b$, observe how the total "area" accumulates and oscillates.

\`\`\`interactivegraph
\\sin(x)
params: b=3.14
range: b=0:6.28
\`\`\`

This visualization allows you to see that as the parameter $b$ moves, the definite integral $\\int_{0}^{b} \\sin(x) dx$ captures the changing accumulation of the sine wave. Note that when the sine wave dips below the $x$-axis, the integral value decreases, demonstrating the concept of "signed area."

## Summary

The definite integral is a profound mathematical instrument that quantifies accumulation over continuous domains. By synthesizing the limit of Riemann sums with the power of the Fundamental Theorem of Calculus, mathematicians and scientists can derive precise values for quantities that are otherwise difficult to capture. Whether evaluating simple polynomials or complex improper integrals in higher dimensions, the methodology relies on the orderly application of rules concerning linearity, limit properties, and antiderivative analysis. Mastery of this topic provides the necessary background for advanced study in differential equations, vector calculus, and real analysis.`;export{e as default};