var e=`# Differential Geometry: Curvature of Curves and Surfaces

Differential geometry is the branch of mathematics that uses the techniques of calculus, linear algebra, and multilinear algebra to study problems in geometry. At its core, it investigates the local properties of curves and surfaces, focusing on the concept of "curvature"—a quantitative measure of how much a geometric object deviates from being a straight line or a flat plane.

## Definition

In the context of differential geometry, curvature is a formal measure of the "bending" or "twisting" of a geometric entity.

For a plane curve defined by a smooth parametrization $\\alpha(s)$, where $s$ is the arc-length parameter, the curvature $\\kappa$ is defined as the magnitude of the rate of change of the unit tangent vector $T(s)$ with respect to arc length:
$$\\kappa(s) = \\|T'(s)\\| = \\|\\alpha''(s)\\|$$
Intuitively, $\\kappa$ tells us how quickly the tangent vector rotates as we move along the curve. If the curve is a straight line, $\\alpha''(s) = 0$ and $\\kappa = 0$. If the curve is a circle of radius $R$, the curvature is constant at $\\kappa = 1/R$.

For surfaces, the definition becomes more complex because a surface can bend in different directions simultaneously. We describe surface curvature using the Principal Curvatures $k_1$ and $k_2$, which are the maximum and minimum values of the normal curvature at a point $p$. From these, we derive two primary measures:
1. **Gaussian Curvature ($K$):** The product of the principal curvatures, $K = k_1 k_2$.
2. **Mean Curvature ($H$):** The arithmetic mean of the principal curvatures, $H = \\frac{1}{2}(k_1 + k_2)$.

## Key Terminology

To understand curvature, one must master the language of differential manifolds and vector calculus:

| Term | Definition |
| :--- | :--- |
| **Arc-Length Parameter ($s$)** | A parametrization of a curve such that the velocity vector always has unit length, i.e., $\\|\\alpha'(s)\\| = 1$. |
| **Frenet-Serret Frame** | An orthonormal basis $\\{T, N, B\\}$ (tangent, normal, binormal) used to describe the local geometric behavior of a space curve. |
| **First Fundamental Form** | A quadratic form $I = E du^2 + 2F dudv + G dv^2$ that allows us to calculate lengths and angles on a surface. |
| **Second Fundamental Form** | A quadratic form $II = L du^2 + 2M dudv + N dv^2$ that describes how the surface bends in the ambient 3D space. |
| **Principal Curvatures** | The eigenvalues of the Shape Operator (or Weingarten Map), representing the extrema of the normal curvature. |
| **Geodesic** | A curve on a surface that represents the shortest path between two points, having zero geodesic curvature. |

## Purpose

The study of curvature is not merely an abstract exercise; it provides the fundamental vocabulary for describing the physical universe. In Einstein’s General Relativity, gravity is not viewed as a force but as the curvature of spacetime. In computer graphics, surface curvature is essential for lighting, shading, and mesh simplification. In structural engineering, the mean curvature of membranes is related to surface tension and stability.

By calculating curvature, we can distinguish between locally isometric surfaces (like a plane and a cylinder) and surfaces that are intrinsically different (like a plane and a sphere). The Gauss-Bonnet Theorem, a crowning achievement in this field, connects local curvature to the global topology (Euler characteristic) of a surface, proving that the integral of Gaussian curvature over a closed surface depends only on the number of "holes" in the shape.

## Fundamental Properties

Curvature possesses several properties that define its mathematical behavior:

1. **Invariance under Isometry:** The Gaussian curvature $K$ is an intrinsic property. This means if you bend a sheet of paper without stretching or tearing it, the Gaussian curvature at any point remains unchanged (it stays 0).
2. **Dimension Dependence:** Curvature for curves is a vector or scalar defined in one dimension. For surfaces, curvature is a property of the local tangent plane mapping to the normal vector space.
3. **The Relationship between $H$ and $K$:** For any surface, the principal curvatures are the roots of the quadratic equation $\\lambda^2 - 2H\\lambda + K = 0$.
4. **Sign Convention:** Gaussian curvature is positive for spheres (both principal curvatures bend the same way), negative for saddle shapes (principal curvatures bend in opposite directions), and zero for developable surfaces like cylinders or cones.

## Types & Variations

Curvature manifests in several distinct variations depending on the object and the geometric lens applied:

### Curvature of Curves
- **Curvature ($\\kappa$):** Measures the deviation from a straight line.
- **Torsion ($\\tau$):** Measures the deviation from being a planar curve. For a curve in $\\mathbb{R}^3$, the Frenet-Serret formulas define how the frame $\\{T, N, B\\}$ rotates: $T' = \\kappa N$, $N' = -\\kappa T + \\tau B$, and $B' = -\\tau N$.

### Curvature of Surfaces
- **Normal Curvature ($k_n$):** The curvature of a curve formed by the intersection of the surface and a plane containing the surface normal vector.
- **Gaussian Curvature ($K$):** Intrinsic measure, $K = \\frac{LN-M^2}{EG-F^2}$.
- **Mean Curvature ($H$):** Extrinsic measure, sensitive to how the surface is embedded in 3D space. Surfaces with $H=0$ everywhere are known as Minimal Surfaces (e.g., soap films).

The following interactive graph allows you to explore how changing the frequency of a curve affects its perceived bending. 

\`\`\`interactivegraph
\\sin(ax)
params: a=1
range: a=0.1:5
\`\`\`

The graph above plots the function $f(x) = \\sin(ax)$. Note how the parameter $a$ influences the frequency, which in turn directly increases the local curvature of the peaks and valleys of the sine wave.

## How to Solve

To determine the curvature of a given object, one follows a rigorous analytical framework.

### Step 1: Parameterization
Define your curve as $\\alpha(t) = (x(t), y(t), z(t))$ or your surface as $\\sigma(u, v) = (x(u, v), y(u, v), z(u, v))$.

### Step 2: Calculate Coefficients
For a curve $\\alpha(t)$, the curvature formula is:
$$\\kappa = \\frac{\\|\\alpha'(t) \\times \\alpha''(t)\\|}{\\|\\alpha'(t)\\|^3}$$
This is often easier than reparameterizing by arc length $s$.

For a surface $\\sigma(u, v)$, compute the coefficients of the First Fundamental Form ($E, F, G$) and Second Fundamental Form ($L, M, N$):
- $E = \\sigma_u \\cdot \\sigma_u$, $F = \\sigma_u \\cdot \\sigma_v$, $G = \\sigma_v \\cdot \\sigma_v$
- $L = \\sigma_{uu} \\cdot n$, $M = \\sigma_{uv} \\cdot n$, $N = \\sigma_{vv} \\cdot n$
where $n = \\frac{\\sigma_u \\times \\sigma_v}{\\|\\sigma_u \\times \\sigma_v\\|}$ is the unit normal vector.

### Step 3: Compute $K$ and $H$
Once the coefficients are found:
$$K = \\frac{LN - M^2}{EG - F^2}$$
$$H = \\frac{EN + GL - 2FM}{2(EG - F^2)}$$

### Example Calculation
Consider a circle of radius $R$ parameterized by $\\alpha(t) = (R\\cos(t), R\\sin(t))$.
1. $\\alpha'(t) = (-R\\sin(t), R\\cos(t))$
2. $\\alpha''(t) = (-R\\cos(t), -R\\sin(t))$
3. $\\|\\alpha'(t)\\| = \\sqrt{R^2\\sin^2(t) + R^2\\cos^2(t)} = R$
4. $\\alpha'(t) \\times \\alpha''(t) = R^2(\\sin^2(t) + \\cos^2(t)) = R^2$ (as a scalar magnitude in 2D)
5. $\\kappa = \\frac{R^2}{R^3} = \\frac{1}{R}$.

## Summary

Differential geometry transforms our intuitive notion of "bending" into a precise mathematical framework. By quantifying curvature via $\\kappa$ for curves, and $K$ and $H$ for surfaces, we gain the ability to analyze complex shapes through the First and Second Fundamental Forms. The distinction between intrinsic curvature (Gaussian) and extrinsic curvature (Mean) provides deep insights into the rigidity and deformation of surfaces. Whether solving for the path of a particle or the shape of a minimal surface, these tools remain the cornerstone of modern geometric analysis.`;export{e as default};