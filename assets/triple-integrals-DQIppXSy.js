var e=`# Triple Integrals in Rectangular Coordinates

## Definition

A triple integral is the natural extension of the single integral (area under a curve) and the double integral (volume under a surface) to three-dimensional space. In rectangular coordinates, we consider a function $f(x,y,z)$ defined over a bounded region $E$ in $\\mathbb{R}^3$. The triple integral is defined as the limit of a Riemann sum as the dimensions of the sub-regions approach zero.

Mathematically, let $E$ be a closed, bounded solid in $\\mathbb{R}^3$. We partition $E$ into $n$ smaller rectangular boxes $B_k = \\Delta x_k \\times \\Delta y_k \\times \\Delta z_k$ that fit entirely within $E$. The triple integral of $f$ over $E$ is given by:

$$\\iiint_E f(x,y,z) \\, dV = \\lim_{n \\to \\infty} \\sum_{k=1}^n f(x_k^*, y_k^*, z_k^*) \\Delta V_k$$

where $\\Delta V_k = \\Delta x_k \\Delta y_k \\Delta z_k$, and $(x_k^*, y_k^*, z_k^*)$ is any point within the $k$-th sub-box. When we evaluate this in rectangular coordinates, $dV$ is replaced by $dx\\,dy\\,dz$ (or any permutation thereof). This represents the summation of the function's values scaled by an infinitesimal volume element across the entirety of the three-dimensional domain.

## Key Terminology

*   **Region of Integration ($E$):** The solid volume in three-dimensional space over which the integral is computed.
*   **Integrand ($f(x,y,z)$):** The scalar-valued function defined at every point within $E$. If $f(x,y,z) = 1$, the integral computes the volume of the region.
*   **Volume Element ($dV$):** In rectangular coordinates, this is $dx\\,dy\\,dz$. It represents the differential volume of an infinitesimal rectangular prism.
*   **Limits of Integration:** The boundaries of the variables $x$, $y$, and $z$. In rectangular coordinates, these are defined by the surfaces enclosing the region $E$.
*   **Type I, II, and III Regions:** Categorizations of solids based on the order of integration. A Type I region is bounded by two surfaces in $z$, projected onto a region $D$ in the $xy$-plane.
*   **Iterated Integral:** The process of evaluating the triple integral as a sequence of three single integrals, effectively peeling back the dimensions one by one.

## Purpose

The primary utility of triple integrals lies in their ability to compute properties of three-dimensional objects that have non-uniform densities or varying physical characteristics. While double integrals measure volumes or planar mass distributions, triple integrals allow for the calculation of:

1.  **Total Mass:** If $f(x,y,z) = \\rho(x,y,z)$ represents the density of an object at a point, then the triple integral gives the total mass $M$ of the object.
2.  **Volume:** Setting $f(x,y,z) = 1$ yields the total volume of the solid $E$.
3.  **Center of Mass:** Calculating the first moments ($M_{yz}, M_{xz}, M_{xy}$) using weighted triple integrals allows for the determination of the geometric center or center of mass ($\\bar{x}, \\bar{y}, \\bar{z}$).
4.  **Moments of Inertia:** These are crucial in physics and engineering for calculating an object's resistance to rotational acceleration.
5.  **Average Value:** The average value of a function $f$ over a solid $E$ is defined as $\\frac{1}{V(E)} \\iiint_E f(x,y,z) \\, dV$, where $V(E)$ is the volume of the region.

## Fundamental Properties

Triple integrals adhere to the standard rules of linear operators, consistent with lower-dimensional integration:

*   **Linearity:** For any constants $a$ and $b$ and integrable functions $f$ and $g$:
    $$\\iiint_E [a f(x,y,z) + b g(x,y,z)] \\, dV = a \\iiint_E f(x,y,z) \\, dV + b \\iiint_E g(x,y,z) \\, dV$$
*   **Additivity:** If the region $E$ can be partitioned into two sub-regions $E_1$ and $E_2$ such that their intersection has zero volume:
    $$\\iiint_E f(x,y,z) \\, dV = \\iiint_{E_1} f(x,y,z) \\, dV + \\iiint_{E_2} f(x,y,z) \\, dV$$
*   **Monotonicity (Comparison Property):** If $f(x,y,z) \\leq g(x,y,z)$ for all points in $E$, then:
    $$\\iiint_E f(x,y,z) \\, dV \\leq \\iiint_E g(x,y,z) \\, dV$$
*   **Absolute Value Inequality:**
    $$\\left| \\iiint_E f(x,y,z) \\, dV \\right| \\leq \\iiint_E |f(x,y,z)| \\, dV$$

## Types & Variations

In rectangular coordinates, the primary variation involves the order of integration. According to **Fubini's Theorem**, if $f$ is continuous on a rectangular box $B = [a,b] \\times [c,d] \\times [r,s]$, the triple integral can be computed as an iterated integral in any of the $3! = 6$ possible orders:

| Order | Iterated Integral Form |
| :--- | :--- |
| $dz\\,dy\\,dx$ | $\\int_a^b \\int_c^d \\int_r^s f(x,y,z) \\, dz\\,dy\\,dx$ |
| $dz\\,dx\\,dy$ | $\\int_c^d \\int_a^b \\int_r^s f(x,y,z) \\, dz\\,dx\\,dy$ |
| $dy\\,dz\\,dx$ | $\\int_a^b \\int_r^s \\int_c^d f(x,y,z) \\, dy\\,dz\\,dx$ |
| $dy\\,dx\\,dz$ | $\\int_r^s \\int_a^b \\int_c^d f(x,y,z) \\, dy\\,dx\\,dz$ |
| $dx\\,dz\\,dy$ | $\\int_c^d \\int_r^s \\int_a^b f(x,y,z) \\, dx\\,dz\\,dy$ |
| $dx\\,dy\\,dz$ | $\\int_r^s \\int_c^d \\int_a^b f(x,y,z) \\, dx\\,dy\\,dz$ |

For more complex, non-rectangular regions (Type I, II, and III), the limits of integration for the inner integrals become functions of the outer variables. For example, in a Type I region $E = \\{ (x,y,z) : (x,y) \\in D, g_1(x,y) \\leq z \\leq g_2(x,y) \\}$, the integral becomes:
$$\\iiint_E f(x,y,z) \\, dV = \\iint_D \\left[ \\int_{g_1(x,y)}^{g_2(x,y)} f(x,y,z) \\, dz \\right] dA$$

## How to Solve

Solving triple integrals requires a systematic approach to defining the boundaries and choosing an efficient order of integration.

1.  **Visualize the Region ($E$):** Sketch the solid in 3D space. Identify the bounding surfaces (planes, cylinders, paraboloids, etc.).
2.  **Determine the Limits:**
    *   Choose an order of integration (e.g., $dz\\,dy\\,dx$).
    *   Find the limits for the first variable (usually $z$) by looking at the "bottom" and "top" surfaces of the region.
    *   Project the solid onto the plane of the remaining two variables (e.g., $xy$-plane) to define the region $D$.
    *   Determine the bounds for the second and third variables using the projection $D$.
3.  **Set Up the Iterated Integral:** Write the integral using the determined limits. Ensure the differential terms match the variable bounds.
4.  **Evaluate Inside-Out:** Evaluate the innermost integral first, treating the other two variables as constants. Then, evaluate the second integral, and finally the outermost integral.
5.  **Sanity Check:** Consider the physical nature of the problem. If calculating a volume or mass, the result must be positive. If the integrand is symmetric about an axis and the region is also symmetric, consider if the integral might evaluate to zero or be easily simplified.

As an example of solving such a problem, imagine calculating the mass of a solid bounded by the planes $x=0, x=1, y=0, y=1, z=0$, and $z=1-x-y$, with a constant density of $\\rho = 1$. The setup would be:
$$\\int_0^1 \\int_0^{1-x} \\int_0^{1-x-y} 1 \\, dz\\,dy\\,dx$$
Evaluating the inner integral gives $1-x-y$. Evaluating the middle integral $\\int_0^{1-x} (1-x-y) dy$ yields $\\frac{(1-x)^2}{2}$. The final integral $\\int_0^1 \\frac{(1-x)^2}{2} dx$ results in $\\frac{1}{6}$.

To illustrate the nature of the functions involved in these integrals, consider the cross-sectional area of a region bounded by $f(x) = x^2$ and $g(x) = \\sqrt{x}$. The graph below depicts these two functions, which are often used to define the projection $D$ of a 3D region into the $xy$-plane.

\`\`\`graph
x^2
\\sqrt{x}
\`\`\`

The graph above plots $f(x) = x^2$ and $g(x) = \\sqrt{x}$, showing their intersection at $(0,0)$ and $(1,1)$, a common step in defining the integration boundaries for $x$ and $y$ when solving a triple integral over a 3D solid.

## Summary

Triple integrals in rectangular coordinates provide the mathematical framework necessary for analyzing scalar fields over 3D volumes. By decomposing a complex solid into infinitesimal rectangular elements $dV = dx\\,dy\\,dz$, we can apply the fundamental theorem of calculus iteratively to solve for physical quantities like mass, moment of inertia, and center of gravity. Mastery of this subject requires not only the ability to compute iterated integrals but also the skill of geometrically describing solid regions via functional boundaries. Fubini's theorem grants us the flexibility to select an order of integration that simplifies the algebraic workload, making this tool indispensable in the physical sciences and engineering. The transition from 1D, 2D, to 3D integration marks the threshold where mathematics begins to accurately model the bulk properties of the physical world.`;export{e as default};