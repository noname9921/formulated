var e=`# Non-Euclidean Geometries: Spherical and Hyperbolic

## Definition

Non-Euclidean geometry refers to any formal axiomatic system that rejects the Parallel Postulate of Euclidean geometry. Euclid's fifth postulate—the "Parallel Postulate"—states that given a line and a point not on that line, there exists exactly one line through the point that never intersects the original line. By modifying or rejecting this postulate, mathematicians developed two consistent, alternative geometric frameworks: Spherical geometry (Elliptic) and Hyperbolic geometry.

In Spherical geometry, the curvature is positive, and there are no parallel lines; every pair of "great circles" intersects at two points. In Hyperbolic geometry, the curvature is negative, and there exist infinitely many lines through a given point that do not intersect a given line. These geometries are not merely theoretical abstractions; they describe the curvature of manifolds and provide the foundation for modern physics, particularly General Relativity.

## Key Terminology

To understand non-Euclidean spaces, one must grasp the following core concepts:

- **Curvature ($K$):** A measure of how much a surface deviates from being flat. In Euclidean geometry, $K=0$. In Spherical geometry, $K>0$. In Hyperbolic geometry, $K<0$.
- **Geodesic:** The generalization of a "straight line" to curved surfaces. It represents the shortest path between two points on a manifold.
- **Parallel Postulate:** The assumption that for any line $L$ and point $P$ not on $L$, there is exactly one line $L'$ passing through $P$ that is parallel to $L$.
- **Gaussian Curvature:** A product of principal curvatures at a point on a surface. It determines the local shape of the geometry.
- **Metric Tensor ($g_{ij}$):** A mathematical object that defines how distances and angles are measured in a coordinate system.
- **Hyperbolic Plane:** A surface with constant negative Gaussian curvature, often modeled using the Poincaré disk or the half-plane model.
- **Spherical Plane:** The surface of a sphere, where lines are segments of great circles.

## Purpose

The study of non-Euclidean geometry originated from attempts to prove the Parallel Postulate as a theorem derived from the other four Euclidean axioms. When mathematicians like Bolyai, Lobachevsky, and Riemann realized that the negation of the postulate produced internally consistent systems, it revolutionized mathematics.

The primary purpose of exploring these geometries is to understand the nature of space itself. Without non-Euclidean geometry, the development of the Theory of General Relativity would have been impossible, as gravity is modeled as the curvature of spacetime. Furthermore, these geometries are essential for:

1. **Cartography:** Mapping the Earth's spherical surface onto a two-dimensional plane.
2. **Cosmology:** Investigating the global curvature of the universe.
3. **Computer Graphics:** Creating complex, non-Euclidean visual effects.
4. **Topology:** Classifying the shapes and properties of various manifolds.

## Fundamental Properties

The divergence from Euclidean properties is drastic and systematic. The behavior of triangles and parallel lines serves as the diagnostic tool for identifying the underlying geometry of a space.

| Property | Euclidean | Spherical | Hyperbolic |
| :--- | :--- | :--- | :--- |
| Curvature ($K$) | $0$ | $>0$ | $<0$ |
| Parallel Lines | One | Zero | Infinitely Many |
| Angle Sum of Triangle | $180^\\circ$ | $>180^\\circ$ | $<180^\\circ$ |
| Circumference ($C$) | $2\\pi r$ | $<2\\pi r$ | $>2\\pi r$ |
| Area of Triangle | $bh/2$ | Proportional to excess | Proportional to defect |

In a Spherical geometry, the sum of angles in a triangle is $\\pi + Area \\times K$. Because $K$ is positive, the sum is always greater than $\\pi$ ($180^\\circ$). Conversely, in a Hyperbolic space, the sum of angles is $\\pi - Area \\times |K|$, meaning the sum is always less than $\\pi$.

## Types & Variations

### 1. Spherical Geometry
Spherical geometry operates on the surface of a sphere. The "lines" are great circles (circles whose center is the center of the sphere). Because all great circles intersect, there is no concept of "parallel" in the Euclidean sense.
- **Triangle Inequality:** The sum of the angles of a triangle increases as the triangle size increases.
- **Metric:** The distance between points $(\\phi_1, \\theta_1)$ and $(\\phi_2, \\theta_2)$ on a unit sphere is given by the central angle $\\sigma = \\arccos(\\sin \\phi_1 \\sin \\phi_2 + \\cos \\phi_1 \\cos \\phi_2 \\cos(\\theta_1 - \\theta_2))$.

### 2. Hyperbolic Geometry
Hyperbolic geometry is often visualized via the Poincaré disk model. Here, the "plane" is represented by the interior of the unit disk in the complex plane. 
- **Distance:** Distances are defined such that they grow infinitely as one approaches the boundary of the disk, effectively making the space "infinite" within a finite area.
- **Variation:** There are several models for Hyperbolic space: the Beltrami-Klein model, the Poincaré half-plane model, and the hyperboloid model. Each preserves different features (angles vs. geodesics).

The graph below represents the behavior of the distance metric in a 1D cross-section of these spaces. The static graph plots $f(x) = \\tan(x)$ to demonstrate how values grow toward an asymptote, similar to how hyperbolic distance behaves as it approaches the boundary of a disk.

\`\`\`graph
\\tan(x)
\`\`\`

For users exploring the impact of the curvature parameter $k$ on distance growth, the following interactive graph allows for the exploration of the function $f(x) = \\sinh(kx)$. Note that in hyperbolic geometry, lengths often follow exponential or hyperbolic functions rather than linear ones.

\`\`\`interactivegraph
\\sinh(kx)
params: k=1
range: k=0.1:2.0
\`\`\`

## How to Solve

Solving problems in non-Euclidean geometry requires replacing standard Euclidean trigonometric and algebraic formulas with their non-Euclidean counterparts.

### Spherical Trigonometry
When dealing with spherical triangles, the Law of Cosines is modified. For a triangle with sides $a, b, c$ and angles $A, B, C$ on a unit sphere:
$$\\cos(c) = \\cos(a)\\cos(b) + \\sin(a)\\sin(b)\\cos(C)$$
This equation allows for the calculation of sides if angles are known, or vice versa, provided the radius of the sphere is accounted for if the sphere is not a unit sphere.

### Hyperbolic Calculations
In Hyperbolic geometry, trigonometry takes the form of hyperbolic functions. For a right-angled triangle in the hyperbolic plane with sides $a, b, c$ (where $c$ is the hypotenuse):
$$\\cosh(c) = \\cosh(a)\\cosh(b)$$
This formula replaces the Pythagorean theorem $c^2 = a^2 + b^2$. To solve for unknown sides, one utilizes the natural logarithm definitions of inverse hyperbolic functions:
$$\\text{arcosh}(x) = \\ln(x + \\sqrt{x^2 - 1})$$

### Analytical Framework
To determine the curvature of a general surface and solve for local geometry:
1. Define the Metric Tensor $g_{ij}$ based on the coordinate system.
2. Calculate the Christoffel symbols $\\Gamma^k_{ij} = \\frac{1}{2}g^{kl}(\\partial_j g_{li} + \\partial_i g_{lj} - \\partial_l g_{ij})$.
3. Compute the Riemann Curvature Tensor $R^l_{ijk}$.
4. Use the Ricci scalar $R$ to identify if the space is locally Spherical ($R>0$), Flat ($R=0$), or Hyperbolic ($R<0$).

## Summary

Non-Euclidean geometries redefine the fundamental assumptions of spatial relationships. Spherical geometry, with its positive curvature, governs the physics of closed systems and celestial bodies. Hyperbolic geometry, with its negative curvature, describes systems where space "flares out," providing the mathematical scaffolding for complex manifolds and deep-space modeling.

The departure from the Euclidean Parallel Postulate leads to a rigorous mathematical architecture where the sum of angles in a triangle and the nature of distance are no longer constant, but functions of the space's intrinsic curvature. By utilizing spherical trigonometry and hyperbolic metric tensors, mathematicians and physicists can describe the diverse topologies of the universe, proving that the straightest path is not always a line in the Euclidean sense, but a geodesic tailored to the curvature of the environment.`;export{e as default};