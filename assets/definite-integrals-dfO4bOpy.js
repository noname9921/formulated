var e=`# Definite Integrals

The definite integral is a foundational concept in mathematical analysis, representing the accumulation of quantities, such as areas under curves, volumes of solids, and the net displacement of moving objects. Unlike the indefinite integral, which identifies a family of antiderivatives, the definite integral produces a specific scalar value, assuming the function is integrable over a closed interval $[a,b]$.

## Definition

A definite integral of a function $f(x)$ over the interval $[a,b]$ is defined as the limit of a Riemann sum as the width of the sub-intervals approaches zero. Let $f$ be a continuous function on $[a,b]$. We partition the interval $[a,b]$ into $n$ sub-intervals of width $\\Delta x_i = x_i - x_{i-1}$, where $a = x_0 < x_1 < \\dots < x_n = b$. Choosing a sample point $x_i^*$ in each sub-interval $[x_{i-1}, x_i]$, the Riemann sum is given by:

$$S_n = \\sum_{i=1}^{n}f(x_i^*)\\Delta x_i$$

If the limit of this sum exists as $n \\to \\infty$ and the maximum width $\\max(\\Delta x_i) \\to 0$, we define the definite integral as:

$$\\int_{a}^{b}f(x)dx = \\lim_{n \\to \\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x_i$$

In this notation, the symbol $\\int$ represents the integral, $a$ and $b$ are the lower and upper limits of integration, $f(x)$ is the integrand, and $dx$ denotes the variable of integration.

## Key Terminology

Understanding the anatomy of the definite integral requires familiarity with specific nomenclature:

| Term | Description |
| :--- | :--- |
| Integrand | The function $f(x)$ being integrated. |
| Limits of Integration | The values $a$ and $b$ defining the boundary of the domain. |
| Variable of Integration | The differential $dx$ indicating the variable relative to which the summation occurs. |
| Riemann Sum | An approximation of the area under a curve using finite rectangles. |
| Antiderivative | A function $F(x)$ such that $F'(x) = f(x)$. |
| Fundamental Theorem of Calculus | The bridge connecting differential and integral calculus. |

## Purpose

The primary purpose of the definite integral is to quantify total accumulation. Geometrically, if $f(x) \\geq 0$ on $[a,b]$, the definite integral represents the area bounded by the curve $f(x)$, the $x$-axis, and the vertical lines $x=a$ and $x=b$. 

Physics applications are equally significant. For instance, if $v(t)$ represents the velocity of an object at time $t$, the definite integral of velocity from $t_1$ to $t_2$ yields the displacement of the object:

$$\\Delta s = \\int_{t_1}^{t_2}v(t)dt$$

Beyond basic geometry and kinematics, definite integrals are used to calculate the mass of objects with variable density, the work done by a variable force, the center of mass of irregular shapes, and the length of curves (arc length).

## Fundamental Properties

The definite integral possesses several algebraic and analytic properties that facilitate calculation and theoretical manipulation:

1. **Additivity of the Interval:** For any $c$ between $a$ and $b$:
$$\\int_{a}^{b}f(x)dx = \\int_{a}^{c}f(x)dx + \\int_{c}^{b}f(x)dx$$

2. **Linearity:** For constants $k_1$ and $k_2$:
$$\\int_{a}^{b}(k_1f(x) + k_2g(x))dx = k_1\\int_{a}^{b}f(x)dx + k_2\\int_{a}^{b}g(x)dx$$

3. **Reversal of Limits:** Swapping the limits of integration negates the integral:
$$\\int_{a}^{b}f(x)dx = -\\int_{b}^{a}f(x)dx$$

4. **Zero Interval:** If the limits are equal, the integral vanishes:
$$\\int_{a}^{a}f(x)dx = 0$$

5. **Comparison Property:** If $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then:
$$\\int_{a}^{b}f(x)dx \\leq \\int_{a}^{b}g(x)dx$$

## Types & Variations

Definite integrals are classified based on the nature of the integrand and the limits of integration.

### Improper Integrals
When the interval is infinite or the integrand contains an infinite discontinuity, the integral is termed "improper." For example, an integral over an infinite interval is calculated as:
$$\\int_{a}^{\\infty}f(x)dx = \\lim_{b \\to \\infty}\\int_{a}^{b}f(x)dx$$

### Line and Multiple Integrals
While a standard definite integral occurs over a 1D interval, line integrals generalize this to paths in multidimensional space, and multiple integrals (double, triple) generalize it to regions in the plane or 3D space:
$$\\iint_{R}f(x,y)dA$$

### Numerical Integration
When an antiderivative $F(x)$ cannot be expressed in elementary terms (e.g., $\\int e^{-x^2}dx$), one must use numerical methods like the Trapezoidal Rule or Simpson's Rule. These methods approximate the area by replacing the curve with linear or quadratic segments.

## How to Solve

The most efficient method for solving a definite integral is the **Fundamental Theorem of Calculus (Part II)**. It states that if $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$, then:

$$\\int_{a}^{b}f(x)dx = F(b) - F(a)$$

### Step-by-Step Methodology
1. **Find the Antiderivative:** Identify $F(x)$ such that $F'(x) = f(x)$. Use techniques like substitution, integration by parts, or partial fraction decomposition.
2. **Apply Limits:** Evaluate the function $F(x)$ at the upper limit $b$ and lower limit $a$.
3. **Subtract:** Calculate the difference $F(b) - F(a)$.

### Example: Quadratic Area
Consider the area under $f(x) = x^2$ from $0$ to $2$.
1. Antiderivative: $F(x) = \\frac{1}{3}x^3 + C$.
2. Evaluation: $F(2) = \\frac{1}{3}(2)^3 = \\frac{8}{3}$ and $F(0) = \\frac{1}{3}(0)^3 = 0$.
3. Result: $\\frac{8}{3} - 0 = \\frac{8}{3} \\approx 2.667$.

### Parameter Sensitivity
The following interactive graph demonstrates how changing the limits of integration affects the accumulated area for a specific function. By adjusting $a$ and $b$, one can observe how the area shifts sign or magnitude.

\`\`\`interactivegraph
\\sin(x)
params: a=0, b=3.14
range: a=0:6, b=0:6
\`\`\`

In the interactive graph above, the function $f(x) = \\sin(x)$ is plotted. The integral represents the net area between the curve and the $x$-axis from $x=a$ to $x=b$. Note that because the sine function oscillates, areas below the $x$-axis contribute negatively to the definite integral.

## Summary

The definite integral is an essential mathematical tool for modeling change and accumulation. By defining the integral through Riemann sums, mathematicians established a rigorous framework that links the discrete sum of infinitesimal rectangles to the continuous nature of functions. Through the Fundamental Theorem of Calculus, the process of calculating these accumulations is simplified into the evaluation of antiderivatives at boundary points. Properties such as linearity and interval additivity provide the algebraic flexibility required for complex problem-solving in physics, engineering, and statistics. Whether computed exactly via the Fundamental Theorem or approximated via numerical techniques, the definite integral remains the cornerstone of modern analytic mathematics.`;export{e as default};