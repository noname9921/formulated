var e=`# Triple Integrals in Rectangular Coordinates

## Definition

The triple integral is the extension of the definite integral to three-dimensional space. In rectangular coordinates, also known as Cartesian coordinates, we define the integral of a function $f(x,y,z)$ over a three-dimensional region $E$ in $\\mathbb{R}^3$. Formally, if $E$ is a bounded region, the triple integral is denoted by:

$$\\iiint_E f(x,y,z) \\, dV$$

Where $dV = dx\\,dy\\,dz$ (or any permutation of these differentials). If the function $f(x,y,z) = 1$, the triple integral represents the volume of the region $E$. If $f(x,y,z)$ represents a density function $\\rho(x,y,z)$, the triple integral computes the total mass of the object occupying the region $E$.

To formally define the integral via Riemann sums, we partition the region $E$ into $n$ sub-boxes with dimensions $\\Delta x_i, \\Delta y_i, \\Delta z_i$. The volume of each sub-box is $\\Delta V_i = \\Delta x_i \\Delta y_i \\Delta z_i$. We choose a sample point $(x_i^*, y_i^*, z_i^*)$ within each sub-box. The triple integral is the limit of the Riemann sum as the maximum diagonal length of the sub-boxes approaches zero:

$$\\iiint_E f(x,y,z) \\, dV = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*, y_i^*, z_i^*) \\Delta V_i$$

## Key Terminology

Understanding the vocabulary of multi-variable calculus is essential for mastering triple integration.

| Term | Definition |
| :--- | :--- |
| **Region of Integration ($E$)** | The solid subset of $\\mathbb{R}^3$ over which we integrate the function. |
| **Differential Volume ($dV$)** | An infinitesimal element of volume, represented as $dx\\,dy\\,dz$ in rectangular coordinates. |
| **Iterated Integral** | The representation of a triple integral as three nested single integrals, allowing for sequential evaluation. |
| **Boundaries** | The surfaces or planes defined by equations (e.g., $z=x^2+y^2$) that enclose the region $E$. |
| **Limits of Integration** | The algebraic constraints (constant or functional) placed on the variables of integration. |
| **Density Function** | A scalar field $\\rho(x,y,z)$ representing mass per unit volume at any given point. |

## Purpose

Triple integrals serve a variety of critical functions in engineering, physics, and advanced mathematics. Primarily, they provide a framework for calculating quantities that vary across a spatial domain. 

1. **Volume Calculation:** By setting $f(x,y,z)=1$, we calculate the volume of complex irregular solids defined by surface boundaries.
2. **Mass and Center of Mass:** Given a non-uniform density distribution, the triple integral of the density function yields the total mass. Furthermore, the first moments about the coordinate planes allow for the determination of the center of mass $(\\bar{x}, \\bar{y}, \\bar{z})$.
3. **Flux and Field Theory:** Triple integrals are fundamental in the Divergence Theorem, which relates the volume integral of the divergence of a vector field to the surface integral of the flux through the boundary of that volume.
4. **Probability:** In multivariate statistics, the triple integral of a joint probability density function over a specific domain gives the probability that a random variable falls within that domain.

## Fundamental Properties

The triple integral inherits the linear properties of single and double integrals. These properties simplify the evaluation of complex expressions.

1. **Linearity:** For any constants $a$ and $b$, and integrable functions $f$ and $g$:
$$\\iiint_E [a f(x,y,z) + b g(x,y,z)] \\, dV = a \\iiint_E f(x,y,z) \\, dV + b \\iiint_E g(x,y,z) \\, dV$$

2. **Additivity:** If the region $E$ can be partitioned into two sub-regions $E_1$ and $E_2$ such that their intersection has zero volume:
$$\\iiint_{E_1 \\cup E_2} f(x,y,z) \\, dV = \\iiint_{E_1} f(x,y,z) \\, dV + \\iiint_{E_2} f(x,y,z) \\, dV$$

3. **Comparison:** If $f(x,y,z) \\leq g(x,y,z)$ for all points in $E$, then:
$$\\iiint_E f(x,y,z) \\, dV \\leq \\iiint_E g(x,y,z) \\, dV$$

4. **Absolute Value:** The inequality holds for the absolute value of the function:
$$\\left| \\iiint_E f(x,y,z) \\, dV \\right| \\leq \\iiint_E |f(x,y,z)| \\, dV$$

## Types & Variations

Depending on the geometry of the region $E$, triple integrals are categorized by the nature of their limits.

### Type I Regions
A region $E$ is of Type I if it is bounded by two surfaces that are functions of $x$ and $y$. Specifically:
$$E = \\{ (x,y,z) \\mid (x,y) \\in D, u_1(x,y) \\leq z \\leq u_2(x,y) \\}$$
Here, $D$ is the projection of $E$ onto the $xy$-plane. The integral becomes:
$$\\int_a^b \\int_{g_1(x)}^{g_2(x)} \\int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z) \\, dz\\,dy\\,dx$$

### Type II Regions
A region $E$ is of Type II if it is bounded by surfaces that are functions of $y$ and $z$:
$$E = \\{ (x,y,z) \\mid (y,z) \\in D, u_1(y,z) \\leq x \\leq u_2(y,z) \\}$$
The integral is evaluated by integrating with respect to $x$ first.

### Type III Regions
A region $E$ is of Type III if it is bounded by surfaces that are functions of $x$ and $z$:
$$E = \\{ (x,y,z) \\mid (x,z) \\in D, u_1(x,z) \\leq y \\leq u_2(x,z) \\}$$
The integral is evaluated by integrating with respect to $y$ first.

## How to Solve

Solving a triple integral in rectangular coordinates follows a systematic algorithmic approach.

### Step 1: Visualization and Projection
Sketch the region $E$ to understand its boundaries. Determine the projection of the solid onto one of the coordinate planes (usually the $xy$-plane). This projection $D$ determines the limits for the outer two integrals.

### Step 2: Set the Order of Integration
Decide which variable to integrate first. If the region has surfaces defined as $z = f(x,y)$, it is natural to integrate with respect to $z$ first. The limits for $z$ will be the lower and upper surface functions.

### Step 3: Define the Limits
Express the boundaries of $D$ as functions of the remaining two variables. For example, if $D$ is a region in the $xy$-plane, define its boundaries $y_1(x)$ and $y_2(x)$, and the constant bounds $x_1$ and $x_2$.

### Step 4: Iterated Evaluation
Apply Fubini's Theorem to write the triple integral as an iterated integral. Perform the integration from the innermost layer to the outermost layer, treating variables of outer integrals as constants during the inner evaluations.

#### Illustrative Example
Consider the volume of a region $E$ bounded by the plane $z=1-x-y$ and the coordinate planes $x=0, y=0, z=0$.

1. **Inner Integral ($z$):** Since $0 \\leq z \\leq 1-x-y$:
$$\\int_0^{1-x-y} dz = 1-x-y$$
2. **Middle Integral ($y$):** The projection $D$ is the triangle in the $xy$-plane bounded by $x+y=1$, $x=0$, and $y=0$. Thus $0 \\leq y \\leq 1-x$:
$$\\int_0^{1-x} (1-x-y) \\, dy = [(1-x)y - \\frac{1}{2}y^2]_0^{1-x} = (1-x)^2 - \\frac{1}{2}(1-x)^2 = \\frac{1}{2}(1-x)^2$$
3. **Outer Integral ($x$):** The range for $x$ is $0 \\leq x \\leq 1$:
$$\\int_0^1 \\frac{1}{2}(1-x)^2 \\, dx = [-\\frac{1}{6}(1-x)^3]_0^1 = 0 - (-\\frac{1}{6}) = \\frac{1}{6}$$

The following graph illustrates the boundary function $f(x) = 1-x$ that defines the edge of the triangle in the $xy$-plane for a fixed $z=0$ slice of a hypothetical solid:

\`\`\`graph
1-x
\`\`\`

## Summary

Triple integrals in rectangular coordinates provide the mathematical machinery to analyze functions defined over three-dimensional regions. By breaking down a volume into infinitesimal cubic elements $dV = dx\\,dy\\,dz$, we reduce complex multi-dimensional problems into a sequence of three nested single-variable integrals.

The process requires careful identification of the geometric boundaries of the region. By applying Fubini's Theorem, one can determine the appropriate order of integration that simplifies the evaluation of the boundaries. Whether calculating the volume of a prism, the mass of a non-homogeneous body, or determining the center of gravity, the triple integral remains a cornerstone of multivariable calculus. Proficiency in this topic necessitates a strong grasp of coordinate geometry, the ability to visualize regions in $\\mathbb{R}^3$, and meticulous execution of iterated integration steps. While rectangular coordinates are often the most intuitive starting point, they serve as the foundation for understanding how coordinate transformations (such as cylindrical or spherical) can be used to further simplify problems involving rotational symmetry.`;export{e as default};