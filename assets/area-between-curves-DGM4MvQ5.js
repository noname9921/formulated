var e=`# Applications of Integrals: Area Between Curves

The calculation of the area between two curves represents a foundational application of the definite integral in calculus. Building upon the concept of the area under a curve—which is defined as the integral of a single function $f(x)$ above the $x$-axis—this extension allows for the quantification of regions bounded by any two continuous functions, regardless of their position relative to the horizontal axis.

## Definition

The area $A$ of a region bounded by two continuous functions $f(x)$ and $g(x)$ on an interval $[a,b]$, where $f(x) \\geq g(x)$ for all $x$ in the interval, is defined as the limit of a Riemann sum of rectangles. Geometrically, we partition the interval into $n$ sub-intervals of width $\\Delta x$. In each sub-interval, the height of the representative rectangle is given by the vertical distance between the "upper" function and the "lower" function, specifically $f(x_i^*) - g(x_i^*)$. As $n$ approaches infinity, the sum of these rectangular areas converges to the definite integral:

$$A = \\int_{a}^{b} [f(x) - g(x)] dx$$

This definition effectively computes the "net" vertical span between the functions, integrating the vertical differential element $dA = [f(x) - g(x)] dx$ over the domain from $a$ to $b$.

## Key Terminology

*   **Upper Function:** The curve that maintains a greater or equal $y$-value relative to the other function over the specified interval.
*   **Lower Function:** The curve that maintains a lesser or equal $y$-value relative to the other function over the specified interval.
*   **Bounds of Integration:** The values $a$ and $b$ representing the vertical lines $x=a$ and $x=b$ that enclose the region. These are often the points of intersection where $f(x) = g(x)$.
*   **Vertical Representative Strip:** An infinitesimal rectangle of height $h = f(x) - g(x)$ and width $dx$ used to visualize the integral.
*   **Horizontal Representative Strip:** An infinitesimal rectangle used when integrating with respect to $y$, with height $dy$ and length determined by the distance between two functions $x=w(y)$ and $x=v(y)$.
*   **Absolute Area:** A scalar value representing the total spatial extent, always non-negative, achieved by integrating the absolute difference $|f(x) - g(x)|$.

## Purpose

The primary purpose of calculating the area between curves is to extend the utility of the integral beyond simple area-under-a-curve problems. In physics, this is used to calculate the displacement between two velocity-time curves or the work done by a variable force. In economics, it is used to measure consumer surplus or the Gini coefficient, which quantifies income inequality by measuring the area between the line of perfect equality and the Lorenz curve. Essentially, it allows mathematicians and scientists to determine the accumulated difference between two dynamic systems.

## Fundamental Properties

The computation of the area between curves relies on the linearity and additivity properties of the definite integral.

1. **Non-negativity:** Since the area is defined as the magnitude of a geometric region, $A \\geq 0$. This is ensured by always subtracting the lower function from the upper function. If the functions cross, one must split the integral:
   $$A = \\int_{a}^{c} [f(x) - g(x)] dx + \\int_{c}^{b} [g(x) - f(x)] dx$$
   where $c$ is the intersection point.
2. **Linearity:** The integral of the difference is the difference of the integrals, provided both integrals exist:
   $$\\int_{a}^{b} [f(x) - g(x)] dx = \\int_{a}^{b} f(x) dx - \\int_{a}^{b} g(x) dx$$
3. **Invariance under Translation:** The area between two curves is invariant if both curves are shifted vertically by the same constant $C$. If $f_1(x) = f(x) + C$ and $g_1(x) = g(x) + C$, then $f_1(x) - g_1(x) = f(x) - g(x)$, leaving the integral unchanged.

## Types & Variations

There are two primary configurations for calculating area, categorized by the variable of integration.

### Type I: Integration with respect to $x$
Used when functions are expressed as $y = f(x)$ and $y = g(x)$. The representative strips are vertical.
| Feature | Description |
| :--- | :--- |
| Variable | $x$ |
| Strip Orientation | Vertical |
| Thickness | $dx$ |
| Height | $f(x) - g(x)$ |

### Type II: Integration with respect to $y$
Used when functions are expressed as $x = w(y)$ and $x = v(y)$. This is essential when the region is bounded by curves that do not pass the vertical line test or when horizontal strips are more efficient. The representative strips are horizontal.

| Feature | Description |
| :--- | :--- |
| Variable | $y$ |
| Strip Orientation | Horizontal |
| Thickness | $dy$ |
| Length | $w(y) - v(y)$ |

## How to Solve

To compute the area between two curves $f(x)$ and $g(x)$, follow this systematic approach:

1. **Identify Intersections:** Solve the equation $f(x) = g(x)$ for $x$. These solutions define the limits of integration $a$ and $b$. If the problem specifies a closed interval $[a,b]$, use those values.
2. **Determine Relative Positions:** Test a value in the interval $(a,b)$ to determine which function is greater. Alternatively, observe the curves' behavior. If $f(x) > g(x)$ on the interval, $f(x)$ is the upper function.
3. **Set up the Integral:** Write the definite integral:
   $$A = \\int_{a}^{b} [\\text{upper} - \\text{lower}] dx$$
4. **Evaluate:** Apply the Fundamental Theorem of Calculus to compute the numerical value of the integral.

### Example Derivation
Consider the area bounded by $y = x^2$ and $y = 2x - x^2$.
1. **Intersections:** Set $x^2 = 2x - x^2$, leading to $2x^2 - 2x = 0$. Factoring gives $2x(x - 1) = 0$, so $x=0$ and $x=1$.
2. **Determine Order:** For $x=0.5$, $x^2 = 0.25$ and $2x - x^2 = 2(0.5) - 0.25 = 0.75$. Thus, $2x - x^2$ is the upper function.
3. **Integral:**
   $$A = \\int_{0}^{1} [(2x - x^2) - x^2] dx = \\int_{0}^{1} (2x - 2x^2) dx$$
4. **Computation:**
   $$A = [x^2 - \\frac{2}{3}x^3]_{0}^{1} = (1 - \\frac{2}{3}) - (0) = \\frac{1}{3}$$

The following graph illustrates the curves $f(x) = x^2$ and $g(x) = 2x - x^2$, showing the region trapped between them from $x=0$ to $x=1$.

\`\`\`graph
x^2
2x - x^2
\`\`\`

## Summary

The area between curves is an elegant synthesis of geometry and calculus. By approximating complex regions with an infinite sum of infinitesimal rectangles, we reduce the problem of measuring irregular, curved spaces to a standard evaluation of definite integrals. Whether integrating vertically with respect to $x$ or horizontally with respect to $y$, the fundamental requirement remains the accurate identification of boundary functions and their relative positions. Mastery of this technique provides the analytical capability to model spatial distributions, statistical disparities, and physical displacements, reinforcing the integral's role as the primary tool for measuring accumulation in continuous systems. The transition from area under a curve to area between curves signifies a shift toward relative comparisons, a perspective that is central to advanced mathematics and engineering.`;export{e as default};