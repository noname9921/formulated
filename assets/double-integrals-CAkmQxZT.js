var e=`# Double Integrals over Rectangular and General Regions

## Definition

A double integral is the extension of the definite integral of a single-variable function to functions of two variables. Given a function $f(x,y)$ defined on a closed region $R$ in the $xy$-plane, the double integral of $f$ over $R$ is denoted by:

$$\\iint_R f(x,y) \\, dA$$

This integral represents the limit of a Riemann sum as the number of sub-rectangles approaches infinity and their dimensions approach zero. Specifically, if we partition the region $R$ into $n$ sub-rectangles $R_{ij}$ with area $\\Delta A_{ij} = \\Delta x_i \\Delta y_j$, the double integral is defined as:

$$\\iint_R f(x,y) \\, dA = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*, y_i^*) \\Delta A_{ij}$$

where $(x_i^*, y_i^*)$ is any sample point within the $i$-th sub-rectangle. If $f(x,y) \\geq 0$ throughout the region $R$, the double integral physically interprets as the volume of the solid lying above the region $R$ and below the surface defined by $z = f(x,y)$.

## Key Terminology

To master double integrals, one must be familiar with the following core terms:

| Term | Definition |
| :--- | :--- |
| Integrand | The function $f(x,y)$ being integrated. |
| Region of Integration ($R$) | The set of points in the $xy$-plane over which the integration occurs. |
| Differential Area Element ($dA$) | Represented as $dxdy$ or $dydx$ in Cartesian coordinates, or $r \\, dr \\, d\\theta$ in polar coordinates. |
| Iterated Integral | A method of evaluating a double integral by performing two successive single-variable integrations. |
| Type I Region | A region bounded by two functions of $x$: $a \\leq x \\leq b$ and $g_1(x) \\leq y \\leq g_2(x)$. |
| Type II Region | A region bounded by two functions of $y$: $c \\leq y \\leq d$ and $h_1(y) \\leq x \\leq h_2(y)$. |
| Fubini's Theorem | The theorem allowing the evaluation of double integrals as iterated integrals provided the function is continuous. |

## Purpose

The double integral serves several critical functions in mathematics, physics, and engineering. Historically, it emerged from the need to generalize the concept of area (a single integral) to the calculation of volume and the accumulation of quantities over two-dimensional spaces. 

1. **Volume Calculation:** The most direct application is finding the volume between a surface $z = f(x,y)$ and a base region $R$ in the $xy$-plane.
2. **Mass and Center of Mass:** If $\\rho(x,y)$ represents the mass density per unit area at a point $(x,y)$, the total mass $M$ of a lamina is $M = \\iint_R \\rho(x,y) \\, dA$.
3. **Probability:** In statistics, a joint probability density function $f(x,y)$ allows the calculation of the probability that a random variable falls within a region $R$ via the double integral $\\iint_R f(x,y) \\, dxdy$.
4. **Surface Area:** Double integrals are used to compute the area of a non-planar surface defined by $z = f(x,y)$ using the formula $\\iint_R \\sqrt{1 + (\\frac{\\partial z}{\\partial x})^2 + (\\frac{\\partial z}{\\partial y})^2} \\, dA$.

## Fundamental Properties

The double integral behaves linearly and satisfies additive properties analogous to single-variable calculus:

1. **Linearity:** For any constants $a$ and $b$, and integrable functions $f$ and $g$:
$$\\iint_R [af(x,y) + bg(x,y)] \\, dA = a\\iint_R f(x,y) \\, dA + b\\iint_R g(x,y) \\, dA$$

2. **Additivity:** If the region $R$ can be partitioned into two non-overlapping sub-regions $R_1$ and $R_2$ such that $R = R_1 \\cup R_2$, then:
$$\\iint_R f(x,y) \\, dA = \\iint_{R_1} f(x,y) \\, dA + \\iint_{R_2} f(x,y) \\, dA$$

3. **Comparison:** If $f(x,y) \\geq g(x,y)$ for all points $(x,y)$ in $R$, then:
$$\\iint_R f(x,y) \\, dA \\geq \\iint_R g(x,y) \\, dA$$

4. **Constant Property:** If $c$ is a constant, then $\\iint_R c \\, dA = c \\cdot \\text{Area}(R)$.

## Types & Variations

### Integration over Rectangular Regions
When $R$ is a rectangle defined by $[a, b] \\times [c, d]$, the boundaries are constants. Fubini's Theorem states that for a continuous function on a rectangle $R$:
$$\\iint_R f(x,y) \\, dA = \\int_a^b \\int_c^d f(x,y) \\, dy \\, dx = \\int_c^d \\int_a^b f(x,y) \\, dx \\, dy$$
This symmetry allows for the selection of the order of integration that simplifies the algebraic manipulation of the inner integral.

### Integration over General Regions
General regions are not bounded by constants but by curves. These are categorized into Type I and Type II.
- **Type I:** The region is bounded by $x$ between $a$ and $b$, and $y$ between two curves $g_1(x)$ and $g_2(x)$. The integral is:
$$\\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy \\, dx$$
- **Type II:** The region is bounded by $y$ between $c$ and $d$, and $x$ between two curves $h_1(y)$ and $h_2(y)$. The integral is:
$$\\int_c^d \\int_{h_1(y)}^{h_2(y)} f(x,y) \\, dx \\, dy$$

### Changing Coordinate Systems
Often, a problem is difficult in Cartesian coordinates $(x,y)$ but simplifies significantly in polar coordinates $(r, \\theta)$. The substitution $x = r \\cos \\theta$ and $y = r \\sin \\theta$ transforms the differential area element $dA$ into $r \\, dr \\, d\\theta$. The integral becomes:
$$\\iint_R f(x,y) \\, dA = \\iint_D f(r \\cos \\theta, r \\sin \\theta) r \\, dr \\, d\\theta$$
The inclusion of the Jacobian factor $r$ is essential for valid transformation.

## How to Solve

Solving a double integral typically involves a systematic four-step procedure:

**Step 1: Sketch the Region**
Always draw the boundaries of the region $R$. Visualizing the region is necessary to determine whether it is Type I, Type II, or whether a change of coordinates (like polar) is appropriate.

**Step 2: Set the Limits of Integration**
Based on the region type, define the inner and outer limits. For Type I, the inner integral is $dy$ and limits are functions of $x$. For Type II, the inner integral is $dx$ and limits are functions of $y$.

**Step 3: Evaluate the Inner Integral**
Integrate the integrand with respect to the inner variable, treating the outer variable as a constant. This yields an expression in terms of the outer variable.

**Step 4: Evaluate the Outer Integral**
Integrate the resulting expression with respect to the outer variable over the constant limits provided for that variable.

### Illustrative Example
Consider the integral of $f(x,y) = x+y$ over the triangular region $R$ bounded by $y=0$, $x=1$, and $y=x$.
1. Express $R$ as Type I: $0 \\leq x \\leq 1$ and $0 \\leq y \\leq x$.
2. The integral becomes:
$$\\int_0^1 \\int_0^x (x+y) \\, dy \\, dx$$
3. Inner integral:
$$\\int_0^x (x+y) \\, dy = [xy + \\frac{1}{2}y^2]_0^x = x^2 + \\frac{1}{2}x^2 = \\frac{3}{2}x^2$$
4. Outer integral:
$$\\int_0^1 \\frac{3}{2}x^2 \\, dx = [\\frac{1}{2}x^3]_0^1 = \\frac{1}{2}$$

## Summary

Double integration is a cornerstone of multivariable calculus, providing the mathematical framework to aggregate values across two-dimensional domains. By utilizing Fubini's Theorem, complex spatial problems are reduced to manageable iterated single-variable integrals. Whether working over fixed rectangular domains or complex, variable-bounded regions, the process relies on clearly identifying the limits of integration and applying the appropriate coordinate system. Through properties such as linearity and additivity, the double integral remains a versatile tool for calculating volumes, masses, and other physical properties in diverse scientific fields. The transition from Riemann sums to iterated integrals exemplifies the elegance of calculus in bridging the gap between discrete approximation and continuous exactness.`;export{e as default};