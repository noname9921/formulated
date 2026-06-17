var e=`# Triple Integrals in Cylindrical and Spherical Coordinates

## Definition

Triple integrals serve as the multidimensional extension of the definite integral, allowing for the calculation of volumes, masses, and centers of gravity of three-dimensional regions in space. While Cartesian coordinates $(x, y, z)$ are intuitive for rectangular domains, they often become mathematically cumbersome when dealing with regions that exhibit rotational or radial symmetry.

To address this, we utilize coordinate transformations. A triple integral over a region $E$ of a function $f(x, y, z)$ is represented as:
$$
\\iiint_E f(x, y, z) \\, dV
$$
In cylindrical coordinates, we map points from $(x, y, z)$ to $(r, \\theta, z)$, where $x=r\\cos(\\theta)$, $y=r\\sin(\\theta)$, and $z=z$. The volume element transforms into $dV = r \\, dz \\, dr \\, d\\theta$.

In spherical coordinates, we map points to $(\\rho, \\phi, \\theta)$, where $x=\\rho\\sin(\\phi)\\cos(\\theta)$, $y=\\rho\\sin(\\phi)\\sin(\\theta)$, and $z=\\rho\\cos(\\phi)$. Here, $\\rho$ represents the radial distance from the origin, $\\phi$ is the polar angle from the positive $z$-axis, and $\\theta$ is the azimuthal angle in the $xy$-plane. The volume element becomes $dV = \\rho^2\\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$.

## Key Terminology

The following terms are essential for mastering coordinate transformations in triple integration:

| Term | Definition | Coordinate Context |
| :--- | :--- | :--- |
| Cylindrical Radius ($r$) | The distance from the $z$-axis to a point in the $xy$-plane. | $r \\ge 0$ |
| Azimuthal Angle ($\\theta$) | The angle in the $xy$-plane measured from the positive $x$-axis. | $0 \\le \\theta \\le 2\\pi$ |
| Spherical Radius ($\\rho$) | The direct distance from the origin $(0,0,0)$ to the point. | $\\rho \\ge 0$ |
| Polar Angle ($\\phi$) | The angle between the positive $z$-axis and the radial vector $\\rho$. | $0 \\le \\phi \\le \\pi$ |
| Jacobian Determinant | The scale factor of the volume transformation between coordinate systems. | $r$ or $\\rho^2\\sin(\\phi)$ |

## Purpose

The primary motivation for employing cylindrical and spherical coordinate systems is the simplification of the boundaries of integration. In Cartesian coordinates, a sphere defined by $x^2+y^2+z^2=a^2$ requires complex square root expressions for the limits of integration, leading to difficult trigonometric substitutions.

By switching to spherical coordinates, the sphere is defined simply as $\\rho = a$, and the limits of integration become constant: $0 \\le \\rho \\le a$, $0 \\le \\phi \\le \\pi$, and $0 \\le \\theta \\le 2\\pi$. This transformation effectively decouples variables that would otherwise be intertwined, turning a multi-step integration process into a series of manageable single-variable integrals.

Cylindrical coordinates are similarly powerful for regions like cylinders or paraboloids. If an object possesses axial symmetry about the $z$-axis, expressing it in $(r, \\theta, z)$ often results in at least one limit being constant, which drastically reduces the likelihood of algebraic errors during evaluation.

## Fundamental Properties

### Jacobian Transformation
The Jacobian of a coordinate transformation $T: (u, v, w) \\to (x, y, z)$ is given by the determinant of the partial derivative matrix:
$$
J = \\det \\frac{\\partial(x, y, z)}{\\partial(u, v, w)}
$$
For cylindrical coordinates:
$$
\\frac{\\partial(x, y, z)}{\\partial(r, \\theta, z)} = \\begin{vmatrix} \\cos(\\theta) & -r\\sin(\\theta) & 0 \\\\ \\sin(\\theta) & r\\cos(\\theta) & 0 \\\\ 0 & 0 & 1 \\end{vmatrix} = r
$$
For spherical coordinates:
$$
\\frac{\\partial(x, y, z)}{\\partial(\\rho, \\phi, \\theta)} = \\begin{vmatrix} \\sin(\\phi)\\cos(\\theta) & \\rho\\cos(\\phi)\\cos(\\theta) & -\\rho\\sin(\\phi)\\sin(\\theta) \\\\ \\sin(\\phi)\\sin(\\theta) & \\rho\\cos(\\phi)\\sin(\\theta) & \\rho\\sin(\\phi)\\cos(\\theta) \\\\ \\cos(\\phi) & -\\rho\\sin(\\phi) & 0 \\end{vmatrix} = \\rho^2\\sin(\\phi)
$$

### Linearity
Like standard Riemann integrals, triple integrals are linear. Given constants $c_1$ and $c_2$:
$$
\\iiint_E (c_1f + c_2g) \\, dV = c_1\\iiint_E f \\, dV + c_2\\iiint_E g \\, dV
$$
This allows for the decomposition of complex integrands into simpler components.

## Types & Variations

### Cylindrical Variation
Cylindrical coordinates are best used when the region $E$ can be described by a projection $D$ onto the $xy$-plane, where $D$ is most easily defined using polar coordinates. If the height of the region is bounded by two surfaces $z = u_1(r, \\theta)$ and $z = u_2(r, \\theta)$, the integral is:
$$
\\int_{\\theta_1}^{\\theta_2} \\int_{r_1(\\theta)}^{r_2(\\theta)} \\int_{u_1(r, \\theta)}^{u_2(r, \\theta)} f(r, \\theta, z) r \\, dz \\, dr \\, d\\theta
$$

### Spherical Variation
Spherical coordinates are preferred for regions possessing "radial symmetry" centered at the origin, such as spheres, cones, or sectors of spheres. A generic integral takes the form:
$$
\\int_{\\theta_1}^{\\theta_2} \\int_{\\phi_1}^{\\phi_2} \\int_{\\rho_1(\\phi, \\theta)}^{\\rho_2(\\phi, \\theta)} f(\\rho, \\phi, \\theta) \\rho^2\\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta
$$

## How to Solve

To solve a triple integral efficiently, follow this methodical framework:

1. **Analyze the Region ($E$):** Identify the geometry of the solid. Look for boundaries involving $x^2+y^2$ (suggests cylindrical) or $x^2+y^2+z^2$ (suggests spherical).
2. **Select Coordinate System:** 
   - Choose cylindrical if the region is symmetric about the $z$-axis and defined primarily by $r$ and $z$ relationships.
   - Choose spherical if the region is defined by distances from the origin (e.g., spheres or cones).
3. **Convert the Integrand:** Substitute $x, y, z$ with the chosen coordinate functions. Do not forget the Jacobian factor ($r$ or $\\rho^2\\sin(\\phi)$).
4. **Determine Limits of Integration:** Express the boundaries in terms of the new coordinates.
   - For cylindrical: $r$ usually depends on $\\theta$; $z$ usually depends on $r$ and $\\theta$.
   - For spherical: $\\rho$ usually depends on $\\phi$ and $\\theta$; $\\phi$ and $\\theta$ are typically constant angular ranges.
5. **Compute:** Evaluate the innermost integral first, treating outer variables as constants, then proceed outward.

### Example Walkthrough
Consider finding the volume of a sphere of radius $a$. In spherical coordinates, the limits are constant: $0 \\le \\rho \\le a$, $0 \\le \\phi \\le \\pi$, and $0 \\le \\theta \\le 2\\pi$. The integral is:
$$
V = \\int_0^{2\\pi} \\int_0^{\\pi} \\int_0^{a} \\rho^2\\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta
$$
Evaluating the $\\rho$ integral: $\\int_0^a \\rho^2 \\, d\\rho = \\frac{1}{3}a^3$.
Next, the $\\phi$ integral: $\\int_0^{\\pi} \\sin(\\phi) \\, d\\phi = [-\\cos(\\phi)]_0^{\\pi} = 2$.
Finally, the $\\theta$ integral: $\\int_0^{2\\pi} d\\theta = 2\\pi$.
Multiplying these gives $\\frac{1}{3}a^3 \\cdot 2 \\cdot 2\\pi = \\frac{4}{3}\\pi a^3$, which is the correct volume formula.

## Summary

Triple integrals in non-Cartesian coordinates represent a crucial toolset for multivariable calculus. By leveraging the geometric nature of the region $E$ through Cylindrical or Spherical transformations, one can convert difficult algebraic problems into straightforward analytical ones. The inclusion of the Jacobian $r$ or $\\rho^2\\sin(\\phi)$ is the critical "price" paid for the simplification of the domain boundaries. Success in this topic relies on the ability to visualize spatial regions, recognize the appropriate coordinate system based on the structure of the integrand and the region, and perform the successive integration steps with meticulous attention to the coordinate-specific differential elements. Mastery of these methods enables the computation of mass, moment of inertia, and potential energy in complex physical systems that would be intractable using standard Cartesian methods.`;export{e as default};