var e=`# Differential Geometry: Curvature of Curves and Surfaces

Differential geometry is the branch of mathematics that employs techniques from calculus, linear algebra, and multilinear algebra to study problems in geometry. At its core, the study of curvature serves as the primary language for describing how geometric objects deviate from being flat, straight, or planar. By analyzing the local properties of curves and surfaces, we can quantify intrinsic shape characteristics that remain invariant under rigid motions.

## Definition

Curvature is a quantitative measure of how much a geometric object deviates from a straight line (for curves) or a flat plane (for surfaces). 

For a parameterized curve $\\alpha(t) = (x(t), y(t), z(t))$, the curvature $\\kappa$ is defined as the magnitude of the rate of change of the unit tangent vector $\\mathbf{T}$ with respect to the arc length parameter $s$. Specifically:
$$\\kappa = \\left\\| \\frac{d\\mathbf{T}}{ds} \\right\\| = \\left\\| \\alpha''(s) \\right\\|$$
Where $\\mathbf{T}(s) = \\alpha'(s)$. In the context of surfaces, the description becomes richer. For a surface $S \\subset \\mathbb{R}^3$, the curvature is typically categorized into Gaussian curvature $K$ and mean curvature $H$. These are derived from the shape operator (or Weingarten map), which describes how the normal vector changes across the surface. Specifically, if $k_1$ and $k_2$ are the principal curvatures (the eigenvalues of the shape operator), then:
$$K = k_1 k_2$$
$$H = \\frac{k_1 + k_2}{2}$$

## Key Terminology

To understand curvature, one must master the underlying geometric vocabulary:

| Term | Definition |
| :--- | :--- |
| Frenet-Serret Frame | An orthonormal basis $(\\mathbf{T, N, B})$ representing tangent, normal, and binormal vectors. |
| Arc Length Parameterization | A curve $\\alpha(s)$ such that $\\|\\alpha'(s)\\| = 1$ for all $s$. |
| First Fundamental Form | A quadratic form representing the metric properties (distances and angles) on a surface. |
| Second Fundamental Form | A quadratic form representing the extrinsic curvature of a surface in $\\mathbb{R}^3$. |
| Principal Curvatures | The maximum and minimum values of the normal curvature at a point on a surface. |
| Gaussian Curvature | The product of principal curvatures, an intrinsic property of a surface. |
| Mean Curvature | The average of principal curvatures, related to the surface area variation. |
| Weingarten Map | A linear operator $L_p: T_pS \\to T_pS$ defined by the derivative of the Gauss map. |

## Purpose

The study of curvature is not merely theoretical; it provides the fundamental framework for modern physics and engineering. In general relativity, Einstein’s field equations describe gravity as the curvature of spacetime. In computer graphics, curvature analysis is essential for mesh smoothing, feature detection, and surface reconstruction.

By quantifying curvature, mathematicians can classify surfaces. For example, the Theorema Egregium (Gauss's "Remarkable Theorem") proves that Gaussian curvature is an intrinsic property, meaning it can be determined by measurements within the surface itself without reference to the surrounding 3D space. This realization led directly to the development of non-Euclidean geometries, which underpin our understanding of the universe's topology.

## Fundamental Properties

Curvature properties allow us to distinguish between types of points on a surface based on the sign of the Gaussian curvature $K$:

1. **Elliptic Points ($K > 0$):** At these points, the surface locally lies on one side of the tangent plane (e.g., the points on a sphere). The principal curvatures have the same sign.
2. **Hyperbolic Points ($K < 0$):** The surface is saddle-shaped, crossing the tangent plane (e.g., the center of a hyperboloid). Principal curvatures have opposite signs.
3. **Parabolic Points ($K = 0$):** At least one principal curvature is zero (e.g., points on a cylinder).
4. **Flat Points ($k_1 = k_2 = 0$):** The curvature is zero in all directions, as seen on a plane.

The following interactive graph demonstrates how the curvature of a basic quadratic function changes as we manipulate its coefficient. Observe how higher values of the parameter increase the "tightness" of the turn, which is directly proportional to curvature.

\`\`\`interactivegraph
ax^2
params: a=1
range: a=-5:5
\`\`\`

The graph above plots the function $f(x) = ax^2$. By varying $a$, we see that as $a$ increases, the parabola becomes sharper at the vertex, indicating a higher local curvature.

## Types & Variations

### 1. Curvature of Plane Curves
For a planar curve given by $y = f(x)$, the curvature is expressed as:
$$\\kappa(x) = \\frac{|f''(x)|}{(1 + f'(x)^2)^{3/2}}$$
This formula shows that as the second derivative grows, curvature increases, but the denominator acts as a normalizing factor for the slope of the curve.

### 2. Normal Curvature
Given a unit normal vector $\\mathbf{n}$ to a surface and a tangent vector $\\mathbf{v}$, the normal curvature $\\kappa_n$ in the direction of $\\mathbf{v}$ is:
$$\\kappa_n = II(\\mathbf{v}, \\mathbf{v})$$
where $II$ is the second fundamental form. This measures the curvature of the intersection of the surface with the plane spanned by $\\mathbf{n}$ and $\\mathbf{v}$.

### 3. Geodesic Curvature
This measures the deviation of a curve from being a geodesic (the "straightest" possible path on a surface). A curve is a geodesic if its geodesic curvature is zero everywhere.

## How to Solve

Calculating curvature for complex surfaces requires a systematic approach involving the First and Second Fundamental Forms.

**Step 1: Parametrization**
Define the surface as a vector-valued function $\\mathbf{r}(u, v)$.

**Step 2: Calculate Tangent Vectors**
Compute the partial derivatives:
$$\\mathbf{r}_u = \\frac{\\partial \\mathbf{r}}{\\partial u}, \\quad \\mathbf{r}_v = \\frac{\\partial \\mathbf{r}}{\\partial v}$$

**Step 3: Compute Fundamental Form Coefficients**
The first fundamental form coefficients are $E = \\mathbf{r}_u \\cdot \\mathbf{r}_u$, $F = \\mathbf{r}_u \\cdot \\mathbf{r}_v$, and $G = \\mathbf{r}_v \\cdot \\mathbf{r}_v$.
The second fundamental form coefficients involve the unit normal $\\mathbf{n} = \\frac{\\mathbf{r}_u \\times \\mathbf{r}_v}{\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|}$:
$$L = \\mathbf{r}_{uu} \\cdot \\mathbf{n}, \\quad M = \\mathbf{r}_{uv} \\cdot \\mathbf{n}, \\quad N = \\mathbf{r}_{vv} \\cdot \\mathbf{n}$$

**Step 4: Solve for $K$ and $H$**
Gaussian curvature is the ratio of the determinants of the two forms:
$$K = \\frac{LN - M^2}{EG - F^2}$$
Mean curvature is given by:
$$H = \\frac{EN + GL - 2FM}{2(EG - F^2)}$$

The static graph below represents two standard curves with varying constant curvatures. The blue line represents a circle (constant curvature), and the red line represents a parabola (varying curvature).

\`\`\`graph
\\sqrt{1-x^2}
-\\sqrt{1-x^2}
x^2
\`\`\`

## Summary

Curvature is the definitive metric for spatial complexity in differential geometry. For curves, curvature captures the rate at which a tangent vector rotates along the path. For surfaces, the interaction between the shape operator and the fundamental forms provides a deep, intrinsic understanding of the geometry. Gaussian curvature, being invariant under isometric transformations, represents the most fundamental descriptor of surface topology. By applying the Frenet-Serret frame for curves and the Weingarten map for surfaces, mathematicians and engineers can precisely model, analyze, and manipulate the shapes of the world around us. Mastering these calculations is the essential entry point into advanced fields such as general relativity, architecture, and high-performance engineering design.`;export{e as default};