var e=`# Double Integrals in Polar Coordinates

## Definition

A double integral in polar coordinates is a mathematical technique used to evaluate the double integral of a function $f(x, y)$ over a region $R$ in the Cartesian plane by transforming the coordinate system into the polar system $(r, \\theta)$. In the Cartesian system, a double integral is represented as $\\iint_R f(x, y) \\, dA$, where the differential area element is $dA = dx \\, dy$. When transitioning to polar coordinates, we define $x = r \\cos(\\theta)$ and $y = r \\sin(\\theta)$. 

Under this transformation, the region $R$ is expressed in terms of the radial distance $r$ and the angular displacement $\\theta$. The differential area element $dA$ undergoes a transformation derived from the Jacobian of the coordinate mapping. Specifically, $dA = r \\, dr \\, d\\theta$. Thus, the double integral becomes:

$$
\\iint_R f(r \\cos(\\theta), r \\sin(\\theta)) \\, r \\, dr \\, d\\theta
$$

This method is particularly effective for regions with circular symmetry or functions involving terms like $x^2 + y^2$, which simplifies to $r^2$ in polar form.

## Key Terminology

To master double integrals in polar coordinates, one must be familiar with the following fundamental terms and concepts:

| Term | Definition |
| :--- | :--- |
| Polar Coordinates | A 2D coordinate system where each point is determined by distance $r$ from the origin and angle $\\theta$ from the positive x-axis. |
| Jacobian | The determinant of the matrix of partial derivatives representing the transformation from one coordinate system to another. |
| Area Element ($dA$) | The infinitesimal area patch in a double integral. In polar, it is scaled by $r$. |
| Radial Interval | The bounds of integration for the variable $r$, typically denoted as $h_1(\\theta) \\le r \\le h_2(\\theta)$. |
| Angular Interval | The bounds of integration for the variable $\\theta$, typically denoted as $\\alpha \\le \\theta \\le \\beta$. |
| Polar Rectangle | A region defined by constant bounds: $a \\le r \\le b$ and $\\alpha \\le \\theta \\le \\beta$. |
| Origin (Pole) | The point $(0,0)$ in Cartesian coordinates, serving as the center of the polar coordinate system. |

## Purpose

The primary purpose of converting double integrals to polar coordinates is to simplify the calculation of volumes, surface areas, and mass distributions for regions that do not align well with the rectangular grid of the Cartesian system. 

In Cartesian coordinates, evaluating $\\iint_R f(x, y) \\, dx \\, dy$ over a circular disk $x^2 + y^2 \\le a^2$ requires complex algebraic expressions involving square roots (e.g., $y = \\pm\\sqrt{a^2 - x^2}$), which often lead to difficult trigonometric substitutions. By switching to polar coordinates, the boundary of the circle simply becomes $r = a$, and the angular component ranges from $0$ to $2\\pi$. This transformation turns challenging transcendental integrands into manageable power functions or simple trigonometric forms.

Furthermore, physical problems involving central forces or rotational symmetry are naturally described in polar coordinates. Gravitational potential, fluid rotation, and electric field distributions often exhibit radial dependencies that become trivial when integrated using the $r \\, dr \\, d\\theta$ area element.

## Fundamental Properties

The transition to polar coordinates relies on the Jacobian of the transformation. Given the transformation equations $x = r \\cos(\\theta)$ and $y = r \\sin(\\theta)$, we construct the Jacobian matrix $J$:

$$
J = \\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\begin{vmatrix} \\frac{\\partial x}{\\partial r} & \\frac{\\partial x}{\\partial \\theta} \\\\ \\frac{\\partial y}{\\partial r} & \\frac{\\partial y}{\\partial \\theta} \\end{vmatrix} = \\begin{vmatrix} \\cos(\\theta) & -r \\sin(\\theta) \\\\ \\sin(\\theta) & r \\cos(\\theta) \\end{vmatrix}
$$

Calculating the determinant:
$$
\\det(J) = (\\cos(\\theta))(r \\cos(\\theta)) - (-r \\sin(\\theta))(\\sin(\\theta)) = r(\\cos^2(\\theta) + \\sin^2(\\theta)) = r
$$

This property confirms that the area element $dA$ in polar coordinates must include the factor $r$. Without this "stretching" factor, the integral would not correctly account for the increasing size of polar patches as $r$ increases. 

Additionally, the integral is additive and linear. If a region $R$ can be partitioned into $R_1$ and $R_2$, the integral over $R$ is the sum of integrals over $R_1$ and $R_2$. For constant functions $f(r, \\theta) = c$, the integral computes the area of the region $R$ multiplied by $c$, where the area $A$ is given by $\\int_{\\alpha}^{\\beta} \\int_{h_1(\\theta)}^{h_2(\\theta)} r \\, dr \\, d\\theta$.

## Types & Variations

There are several variations of regions typically encountered when using polar integration:

1. **Circular Sectors:** Regions defined by constant angular bounds $\\alpha \\le \\theta \\le \\beta$ and constant radial bounds $r_1 \\le r \\le r_2$.
2. **General Polar Regions:** Regions where the radial boundary depends on the angle, $r = h(\\theta)$. This is common for shapes like cardioids ($r = a(1 + \\cos(\\theta))$) or rose curves ($r = a \\sin(n\\theta)$).
3. **Improper Integrals in Polar Form:** Cases where the region is unbounded, such as the integral over the entire plane $\\mathbb{R}^2$. A famous application is evaluating the Gaussian integral $\\int_{-\\infty}^{\\infty} e^{-x^2} dx$ by considering $\\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)} dA$.
4. **Shifted Regions:** Regions where the symmetry is not centered at the origin, requiring a shift in coordinates (e.g., $x = a + r \\cos(\\theta)$). While possible, these often complicate the Jacobian and are generally avoided unless necessary.

## How to Solve

Solving a double integral using polar coordinates follows a structured process:

**Step 1: Sketch the Region**
Visualize the region $R$ in the $xy$-plane. Identify its boundaries and determine if the region exhibits circular or radial symmetry. If the boundary contains equations like $x^2 + y^2 = C$, polar coordinates are likely optimal.

**Step 2: Convert Boundaries**
Express the Cartesian boundaries in terms of $r$ and $\\theta$.
- For a circle $x^2 + y^2 = a^2$, the boundary is $r = a$.
- For a line $x = a$, the boundary is $r \\cos(\\theta) = a$, or $r = a \\sec(\\theta)$.
- For a region between two circles, use $r_1 \\le r \\le r_2$.

**Step 3: Define Limits of Integration**
Set up the bounds for $r$ and $\\theta$.
- If $r$ depends on $\\theta$, the inner integral is $dr$ with bounds $h_1(\\theta)$ to $h_2(\\theta)$.
- The outer integral is $d\\theta$ with constant bounds $\\alpha$ to $\\beta$.

**Step 4: Substitute and Adjust the Integrand**
Replace $x$ with $r \\cos(\\theta)$ and $y$ with $r \\sin(\\theta)$ within the function $f(x, y)$. Ensure the integrand is multiplied by the Jacobian $r$.

**Step 5: Evaluate**
Perform the integration. The inner integral with respect to $r$ is often simplified by the extra $r$ from the Jacobian, allowing for $u$-substitution if the integrand is of the form $f(r^2)r$.

### Example Calculation
Consider the volume under the surface $f(x, y) = \\sqrt{x^2 + y^2}$ over the disk $D$ of radius $2$.
1. Region: $0 \\le \\theta \\le 2\\pi$, $0 \\le r \\le 2$.
2. Integrand: $\\sqrt{r^2} = r$.
3. Integral: $\\int_{0}^{2\\pi} \\int_{0}^{2} (r) \\cdot r \\, dr \\, d\\theta = \\int_{0}^{2\\pi} \\int_{0}^{2} r^2 \\, dr \\, d\\theta$.
4. Result: $\\int_{0}^{2\\pi} [\\frac{r^3}{3}]_0^2 \\, d\\theta = \\int_{0}^{2\\pi} \\frac{8}{3} \\, d\\theta = \\frac{16\\pi}{3}$.

The interactive nature of polar coordinates allows us to view how changing the radial limit $R_{max}$ affects the total volume.

\`\`\`interactivegraph
(1/3)*pi*x^3
params: x=2
range: x=0:5
\`\`\`
The graph above illustrates the volume of a cone with height equal to the radius, plotted as $V(R) = \\frac{1}{3}\\pi R^3$. As you adjust the slider for $R$, you see the cubic growth of the volume calculation relative to the radius of the circular domain.

## Summary

Double integrals in polar coordinates provide a powerful framework for addressing problems where the Cartesian coordinate system is ill-suited. By applying the transformation $x = r \\cos(\\theta)$ and $y = r \\sin(\\theta)$, and incorporating the Jacobian differential area element $r \\, dr \\, d\\theta$, we can reduce highly complex integrals into straightforward computations. The core of this technique lies in identifying regions with circular symmetry and leveraging the simplification of $x^2 + y^2$ into $r^2$. Mastery of this topic enables the efficient calculation of moments of inertia, centers of mass, and volumes of solid objects, serving as a cornerstone for advanced calculus and physical applications in engineering and science.`;export{e as default};