var e=`# Change of Variables and the Jacobian

The transition from single-variable calculus to multivariate calculus introduces the necessity of integrating over regions that are not easily described by standard Cartesian coordinates. When dealing with complex domains, a simple change of variables often makes an intractable integral solvable. The Jacobian serves as the essential scaling factor in this process, ensuring that the volume elements are correctly adjusted when moving between coordinate systems.

## Definition

In the context of multivariable integration, a change of variables is a transformation $T$ that maps a region $S$ in the $uv$-plane to a region $R$ in the $xy$-plane. Specifically, if we have a transformation defined by $x=g(u,v)$ and $y=h(u,v)$, the Jacobian matrix $J$ is the matrix of all first-order partial derivatives of the transformation. The Jacobian determinant, denoted as $|J|$ or $\\frac{\\partial(x,y)}{\\partial(u,v)}$, is given by the determinant of this matrix:

$$|J| = \\det\\begin{pmatrix}\\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v}\\end{pmatrix} = \\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v} - \\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u}$$

When integrating a function $f(x,y)$ over a region $R$, the change of variables formula is:

$$\\iint_R f(x,y) dA = \\iint_S f(g(u,v),h(u,v)) \\left| \\frac{\\partial(x,y)}{\\partial(u,v)} \\right| du dv$$

The absolute value of the Jacobian determinant acts as a local magnification factor, representing the ratio of the area element $dx dy$ to the area element $du dv$ under the transformation.

## Key Terminology

- **Diffeomorphism:** A differentiable mapping between manifolds that is a bijection and has a differentiable inverse. For change of variables to be valid, the transformation must generally be a diffeomorphism on the interior of the regions.
- **Transformation:** A mapping $T: S \\to R$ that reparameterizes the coordinate system.
- **Coordinate System:** A system of representing points in space (e.g., Cartesian, Polar, Cylindrical, Spherical).
- **Differential Area/Volume Element:** The infinitesimal unit of measure ($dA = dx dy$ or $dV = dx dy dz$) which changes in scale during a coordinate transformation.
- **Singularity:** Points where the Jacobian determinant is zero. At these points, the transformation fails to be invertible, often indicating that the transformation "collapses" a dimension.

## Purpose

The primary purpose of the change of variables and the Jacobian is to simplify integration over non-rectangular regions or to simplify complex integrands. In many physical systems, variables are naturally linked through circular or radial symmetry. For instance, evaluating an integral of the form $\\iint e^{-(x^2+y^2)} dA$ over the entire plane is nearly impossible in Cartesian coordinates. By switching to polar coordinates, where $x=r\\cos\\theta$ and $y=r\\sin\\theta$, the term $x^2+y^2$ becomes $r^2$, and the Jacobian $|J| = r$ simplifies the expression into a standard exponential integral.

The Jacobian is indispensable because it accounts for the "stretching" or "shrinking" of the differential space. Without the Jacobian, the equality between the two integrals would not hold, as the differential areas in different coordinate systems do not correspond one-to-one without a scaling factor.

## Fundamental Properties

The Jacobian possesses several mathematical properties that make it robust for calculus:

1. **Invertibility:** If $|J| \\neq 0$, the Inverse Function Theorem guarantees that the transformation is locally invertible.
2. **Chain Rule for Jacobians:** If we have a sequence of transformations $T_1$ and $T_2$, the Jacobian of the composition $T_2 \\circ T_1$ is the product of their respective Jacobians: $\\frac{\\partial(x,y)}{\\partial(u,v)} = \\frac{\\partial(x,y)}{\\partial(s,t)} \\cdot \\frac{\\partial(s,t)}{\\partial(u,v)}$.
3. **Orientation:** The sign of the Jacobian determinant indicates whether the transformation preserves or reverses the orientation of the region. Integration uses the absolute value because the area element itself is inherently non-negative.
4. **Dimension Independence:** The concept generalizes to $n$ dimensions. For a transformation $x_i = f_i(u_1, \\dots, u_n)$, the Jacobian is the determinant of the $n \\times n$ matrix of partial derivatives.

## Types & Variations

Transformations vary based on the geometry of the integration region. Below are common coordinate systems that utilize the Jacobian:

| Coordinate System | Transformation Equations | Jacobian Determinant |
| :--- | :--- | :--- |
| Polar | $x=r\\cos\\theta, y=r\\sin\\theta$ | $r$ |
| Cylindrical | $x=r\\cos\\theta, y=r\\sin\\theta, z=z$ | $r$ |
| Spherical | $x=\\rho\\sin\\phi\\cos\\theta, y=\\rho\\sin\\phi\\sin\\theta, z=\\rho\\cos\\phi$ | $\\rho^2\\sin\\phi$ |
| Elliptical | $x=ar\\cos\\theta, y=br\\sin\\theta$ | $abr$ |

The interactive graph below demonstrates the effect of scaling parameters on a simple linear transformation. The user can adjust $a$ and $b$ to see how the stretching of the grid affects the relative area, providing intuition for the constant Jacobian of linear maps.

\`\`\`interactivegraph
a*x + b
params: a=1, b=0
range: a=0.5:2, b=-1:1
\`\`\`

The graph above plots the linear function $f(x) = ax + b$. By varying $a$, we observe how the transformation scales the slope of the line, analogous to how the Jacobian scales the differential volume element. A value of $a > 1$ represents a stretching transformation, while $0 < a < 1$ represents a contraction.

## How to Solve

To perform a change of variables in a multivariable integral, follow this rigorous procedural framework:

1. **Analyze the Region ($R$):** Identify the boundaries of the integration region. If the boundary equations look like $f(x,y) = k$, consider setting $u = f(x,y)$.
2. **Define the Transformation:** Write down the mapping $x=g(u,v)$ and $y=h(u,v)$ that relates the new variables to the old ones. Often, you may need to solve for $x$ and $y$ in terms of $u$ and $v$.
3. **Calculate the Jacobian:** Compute the matrix of partial derivatives $\\frac{\\partial(x,y)}{\\partial(u,v)}$ and its determinant. Remember to take the absolute value $|J|$.
4. **Determine the New Region ($S$):** Map the boundaries of $R$ into the $uv$-plane to define the new limits of integration. This often simplifies a curved boundary in $xy$ into a straight line in $uv$.
5. **Substitute:** Rewrite the integrand $f(x,y)$ as $f(g(u,v), h(u,v))$ and multiply by the Jacobian.
6. **Integrate:** Solve the resulting integral $\\iint_S f(u,v) |J| du dv$.

Example: Integrate $f(x,y) = x+y$ over the region bounded by $x-y=0, x-y=2, x+y=0, x+y=3$.
- Let $u = x-y$ and $v = x+y$. 
- The region becomes $0 \\leq u \\leq 2$ and $0 \\leq v \\leq 3$.
- Solve for $x$ and $y$: $x = \\frac{u+v}{2}, y = \\frac{v-u}{2}$.
- The Jacobian is:
$$\\det\\begin{pmatrix}1/2 & 1/2 \\\\ -1/2 & 1/2\\end{pmatrix} = \\frac{1}{4} - (-\\frac{1}{4}) = \\frac{1}{2}$$
- The integral becomes $\\int_0^3 \\int_0^2 v (\\frac{1}{2}) du dv = \\frac{1}{2} \\int_0^3 2v dv = [\\frac{v^2}{2}]_0^3 = 4.5$.

## Summary

The change of variables is one of the most powerful tools in analysis, allowing the translation of difficult integrals into more manageable domains. The Jacobian determinant is the linchpin of this process, providing the necessary correction factor for the differential area or volume element. By understanding the geometric interpretation of the Jacobian—as a local scaling factor that accounts for coordinate distortion—one gains the ability to solve advanced problems in physics, engineering, and statistics. Whether transitioning between simple polar coordinates or complex manifold mappings, the Jacobian ensures mathematical consistency across coordinate systems.`;export{e as default};