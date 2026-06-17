var e=`# Change of Variables and the Jacobian

The transition between coordinate systems is a fundamental operation in multivariate calculus, physics, and engineering. When performing multidimensional integration, the geometry of the domain often complicates the evaluation of the integrand. The change of variables formula acts as the higher-dimensional analogue to $u$-substitution in single-variable calculus, allowing for the transformation of complex regions into simpler, more manageable domains. At the heart of this transformation lies the Jacobian matrix and its determinant, which quantify the local distortion of space caused by the coordinate shift.

## Definition

Let $D$ be a region in the $uv$-plane, and let $R$ be a region in the $xy$-plane. Suppose we have a transformation $T: D \\to R$ defined by the functions $x=g(u,v)$ and $y=h(u,v)$. If the transformation is a $C^1$ diffeomorphism (meaning it is continuously differentiable, injective, and possesses a non-zero Jacobian), the integral of a function $f(x,y)$ over region $R$ is given by:

$$\\iint_R f(x,y)\\,dA = \\iint_D f(g(u,v), h(u,v)) \\left| \\frac{\\partial(x,y)}{\\partial(u,v)} \\right| \\,du\\,dv$$

The term $\\left| \\frac{\\partial(x,y)}{\\partial(u,v)} \\right|$ is the absolute value of the Jacobian determinant, often written as $J(u,v)$. The Jacobian matrix itself is defined as:

$$J = \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{pmatrix}$$

The determinant, $\\det(J)$, represents the scaling factor by which the transformation $T$ stretches or compresses the infinitesimal area element $dA = dx\\,dy$ into the area element $du\\,dv$.

## Key Terminology

*   **Diffeomorphism:** A differentiable mapping that has a differentiable inverse. This ensures the change of variables is one-to-one and preserves the structure of the domain.
*   **Jacobian Matrix:** A matrix containing all first-order partial derivatives of a vector-valued function. It provides the best linear approximation of the transformation at a specific point.
*   **Jacobian Determinant:** The scalar resulting from the determinant of the Jacobian matrix. It measures the factor by which the transformation changes the local volume (or area).
*   **Coordinate Transformation:** A mapping $T$ from a set of "natural" coordinates $(u,v)$ to the standard Cartesian coordinates $(x,y)$.
*   **Singularity:** A point where the Jacobian determinant is zero. At such points, the transformation fails to be invertible, and the mapping collapses the dimension of the region.

## Purpose

The primary motivation for changing variables is to simplify the limits of integration or the integrand itself. In Cartesian coordinates, integrating over circular, elliptical, or polar-symmetric regions often results in complicated square roots or transcendental functions that are analytically intractable.

By transforming to a coordinate system that aligns with the boundaries of the region $R$, the limits of the double integral become constants. For example, moving from Cartesian to polar coordinates is a specific application where $x=r\\cos\\theta$ and $y=r\\sin\\theta$. The transformation maps a circular disk in $xy$-space to a rectangle in $r\\theta$-space. Without the Jacobian $r$, the integral would fail to account for the stretching of the coordinate grid as one moves away from the origin.

## Fundamental Properties

1.  **Multiplicative Property:** If we have a sequence of transformations $T_1$ and $T_2$, the Jacobian of the composition $T_2 \\circ T_1$ is the product of the Jacobians: $J_{T_2 \\circ T_1} = J_{T_2} \\cdot J_{T_1}$.
2.  **Inverse Jacobian:** If the transformation $T$ has an inverse $T^{-1}$, the Jacobian of the inverse is the reciprocal of the original Jacobian: $\\frac{\\partial(u,v)}{\\partial(x,y)} = \\left( \\frac{\\partial(x,y)}{\\partial(u,v)} \\right)^{-1}$.
3.  **Local Volume Expansion:** The Jacobian determinant represents the local ratio of the volume in the transformed space to the original space. If $|J| > 1$, the transformation expands the space locally; if $|J| < 1$, it contracts it.
4.  **Orientation:** The sign of the Jacobian determinant indicates whether the transformation preserves or reverses the orientation of the coordinates. Since we integrate over regions (areas/volumes), we always use the absolute value.

## Types & Variations

### Polar Coordinates
The transformation is $x=r\\cos\\theta, y=r\\sin\\theta$.
The Jacobian is:
$$\\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} = r(\\cos^2\\theta + \\sin^2\\theta) = r$$
Thus, $dA = r\\,dr\\,d\\theta$.

### Cylindrical Coordinates
Used for systems with rotational symmetry about the $z$-axis ($x=r\\cos\\theta, y=r\\sin\\theta, z=z$). The Jacobian determinant is $r$.

### Spherical Coordinates
Used for spherical symmetry ($x=\\rho\\sin\\phi\\cos\\theta, y=\\rho\\sin\\phi\\sin\\theta, z=\\rho\\cos\\phi$). The Jacobian determinant is $\\rho^2\\sin\\phi$.

### General Linear Transformations
For a linear system $X = AU$ where $A$ is a constant matrix, the Jacobian is simply $\\det(A)$. This shows that linear transformations scale area or volume by a constant factor across the entire domain.

The following interactive graph demonstrates a linear transformation where parameters $a$ and $b$ scale the input function $f(x)=x$.

\`\`\`interactivegraph
a*x + b
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

In this graph, $a$ acts as the Jacobian scaling factor for the transformation $T(x) = ax+b$. Note how changing $a$ alters the slope of the line, reflecting the stretching or shrinking of the space in one dimension.

## How to Solve

To perform a change of variables in a double integral, follow these structured steps:

| Step | Action | Description |
| :--- | :--- | :--- |
| 1 | Define $T$ | Identify the transformation equations $x=g(u,v)$ and $y=h(u,v)$. |
| 2 | Calculate $J$ | Compute the partial derivatives and find the determinant $\\det(J)$. |
| 3 | Map the Region | Determine the bounds of the new region $D$ in the $uv$-plane. |
| 4 | Substitute | Replace $x$ and $y$ in $f(x,y)$ with their $uv$ equivalents. |
| 5 | Integrate | Set up the integral $\\iint_D f(g,h) |J| \\,du\\,dv$ and evaluate. |

### Worked Example
Evaluate $\\iint_R (x+y) \\,dA$ where $R$ is the region bounded by $x-y=0, x-y=1, x+2y=0, x+2y=2$.
1. Let $u = x-y$ and $v = x+2y$.
2. Solve for $x$ and $y$: $u=x-y \\implies x=u+y$. Substitute into $v$: $v = u+y+2y \\implies v=u+3y \\implies y = (v-u)/3$. Then $x = u + (v-u)/3 = (2u+v)/3$.
3. Compute the Jacobian $J = \\frac{\\partial(x,y)}{\\partial(u,v)} = \\det \\begin{pmatrix} 2/3 & 1/3 \\\\ -1/3 & 1/3 \\end{pmatrix} = (2/9) - (-1/9) = 3/9 = 1/3$.
4. The integral becomes $\\int_0^1 \\int_0^2 (u) |1/3| \\,dv\\,du = (1/3) \\int_0^1 u [v]_0^2 \\,du = (1/3) \\int_0^1 2u \\,du = (1/3) \\cdot 1 = 1/3$.

## Summary

The Jacobian is an indispensable tool in higher mathematics, bridging the gap between coordinate systems and providing the necessary scaling factor for integration. By treating transformations as geometric mappings, the Jacobian allows us to compute integrals over irregular regions by mapping them onto rectangles or boxes. Whether dealing with standard spherical systems in physics or complex coordinate systems in fluid dynamics, the principles of the Jacobian remain consistent: identify the transformation, calculate the distortion of the infinitesimal area element, and re-parameterize the integral to leverage simpler boundaries. Mastery of this concept is essential for any practitioner working with multivariate calculus or vector analysis.`;export{e as default};