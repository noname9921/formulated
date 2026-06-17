var e=`# Non-Euclidean Geometries: Spherical and Hyperbolic

## Definition

Non-Euclidean geometry refers to any formal system of geometry that rejects or replaces the fifth postulate of Euclid’s *Elements*. Euclid’s fifth postulate, often called the Parallel Postulate, states that given a line and a point not on that line, there exists exactly one line passing through the point that is parallel to the given line. In the 19th century, mathematicians discovered that alternative geometries could be constructed by modifying this assumption.

These geometries are categorized by their curvature, denoted by the Gaussian curvature $K$. Euclidean geometry is characterized by $K=0$, implying a "flat" plane. Spherical geometry, or elliptic geometry, describes surfaces with constant positive curvature ($K>0$), such as the surface of a sphere. Hyperbolic geometry, or Lobachevskian geometry, describes surfaces with constant negative curvature ($K<0$), such as a saddle or pseudosphere. By deviating from the parallel postulate, these systems allow for non-intuitive properties regarding triangles, polygons, and the nature of space itself.

## Key Terminology

To understand non-Euclidean systems, one must grasp several foundational terms:

| Term | Definition |
| :--- | :--- |
| Geodesic | The shortest path between two points on a curved surface; the analogue of a straight line. |
| Gaussian Curvature | A measure of local curvature at a point on a surface; $K = \\kappa_1 \\kappa_2$ where $\\kappa$ are principal curvatures. |
| Parallel Postulate | The assumption that unique parallels exist; negated in non-Euclidean frameworks. |
| Angle Sum | The sum of interior angles of a triangle; $\\pi$ radians in Euclidean, $>\\pi$ in spherical, and $<\\pi$ in hyperbolic. |
| Pseudosphere | A surface of constant negative curvature, often used to visualize hyperbolic geometry locally. |
| Parallelism | In spherical geometry, no lines are parallel; in hyperbolic, infinitely many parallels exist through a single point. |

## Purpose

The study of non-Euclidean geometry is not merely an abstract mathematical exercise; it provided the essential language for modern physics and topology. The primary purpose of these geometries is to describe the behavior of lines and shapes on curved manifolds, which is the baseline requirement for General Relativity. Einstein’s theory posits that gravity is the manifestation of the curvature of spacetime, which follows the principles of non-Euclidean geometry rather than Euclidean space.

Beyond physics, these geometries allow mathematicians to resolve long-standing paradoxes involving parallel lines and to explore the limits of logical consistency. By proving that non-Euclidean geometries are internally consistent—provided that Euclidean geometry is consistent—mathematicians solidified the independence of the parallel postulate from the other four, solving a problem that had persisted since antiquity. Furthermore, they serve as the theoretical bedrock for fields like map projection, aeronautical navigation, and the analysis of complex surfaces in differential geometry.

## Fundamental Properties

The divergence of these geometries from the Euclidean model can be seen most clearly through their divergence from the parallel postulate. In Euclidean space, the sum of angles of a triangle is always exactly $\\pi$ radians ($180^\\circ$).

In spherical geometry, lines (great circles) always intersect. Consequently, there are no parallel lines. A triangle formed by three great circles on a sphere will always have an angle sum greater than $\\pi$. If a triangle has vertices at the North Pole and two points on the equator, and the vertices are separated by $\\pi/2$ radians, the sum of the angles is $3\\pi/2$. The area of such a triangle is proportional to its "spherical excess," defined as $E = (\\alpha + \\beta + \\gamma) - \\pi$.

In hyperbolic geometry, the behavior is mirrored but opposite. Given a line $L$ and a point $P$ not on $L$, there exist at least two—and in fact, infinitely many—lines through $P$ that never intersect $L$. The angle sum of a triangle is always less than $\\pi$. The "angular defect" is defined as $\\delta = \\pi - (\\alpha + \\beta + \\gamma)$, and the area of the triangle is proportional to this defect, given by $Area = R^2 \\delta$, where $R$ is the characteristic radius associated with the curvature.

## Types & Variations

Non-Euclidean geometries are generally categorized by the sign of their curvature.

### Spherical Geometry
This geometry is modeled on the surface of a sphere. The geodesics are great circles—circles whose center coincides with the center of the sphere. This geometry is finite but unbounded; one can travel in a straight line forever without reaching an edge, yet the total area is finite.

### Hyperbolic Geometry
This geometry is often visualized using models like the Poincaré disk or the half-plane model. It is characterized by exponential growth in circumference and area relative to the radius. While Euclidean geometry involves linear expansion, hyperbolic geometry expands space much faster as one moves away from an origin point.

### Elliptic vs. Spherical
Strictly speaking, elliptic geometry is a variant of spherical geometry where antipodal points are identified as the same point. This ensures that any two lines intersect at exactly one point, satisfying a more rigorous version of the parallel postulate’s negation.

The following static graph plots the growth of the circumference of a circle as a function of its radius $x$ under different geometries. Note that while Euclidean circumference is $2\\pi x$, spherical growth is slower ($2\\pi \\sin(x)$), and hyperbolic growth is faster ($2\\pi \\sinh(x)$).

\`\`\`graph
2 * 3.14159 * sin(x)
2 * 3.14159 * x
2 * 3.14159 * (exp(x) - exp(-x)) / 2
\`\`\`

In the plot above, the middle line represents the Euclidean case ($2\\pi x$), the bottom curve represents the spherical growth ($2\\pi \\sin(x)$), and the top curve represents the hyperbolic growth ($2\\pi \\sinh(x)$), showing the exponential divergence of space in hyperbolic geometry.

## How to Solve

Solving problems in non-Euclidean geometry requires moving away from Cartesian coordinate systems and adopting metric tensors or specific projections.

### Analytical Framework for Spherical Geometry
To solve for distances on a sphere of radius $R$, one uses spherical trigonometry. The Law of Cosines for sides is:
$$\\cos(c/R) = \\cos(a/R)\\cos(b/R) + \\sin(a/R)\\sin(b/R)\\cos(C)$$
Where $a, b, c$ are the arc lengths of the sides, and $C$ is the angle between sides $a$ and $b$. To calculate the area of a spherical triangle, use the Girard theorem:
$$Area = R^2(\\alpha + \\beta + \\gamma - \\pi)$$

### Analytical Framework for Hyperbolic Geometry
In the Poincaré disk model, the distance $d$ between two points $u$ and $v$ in the unit disk is given by the formula:
$$d(u,v) = 2 \\operatorname{arctanh} \\left( \\frac{|u-v|}{|1-u\\bar{v}|} \\right)$$
This formula accounts for the "stretching" of the geometry as one approaches the boundary of the disk. Because the metric is non-uniform, calculus on these surfaces requires the use of the metric tensor $g_{ij}$, where the distance element $ds^2$ is defined by the specific curvature. For a constant curvature $K = -1/k^2$, the area of a hyperbolic triangle is:
$$Area = k^2(\\pi - (\\alpha + \\beta + \\gamma))$$

### Parameter Interaction
Using an interactive approach to view the transition between these geometries, we consider the curvature $K$ as a parameter. By setting $K=0$, we recover the Euclidean plane. By varying $K$ through positive and negative values, we can simulate the transformation of a geodesic.

\`\`\`interactivegraph
sin(k * x) / k
params: k=0.1
range: k=-2:2
\`\`\`

In this interactive graph, the parameter $k$ represents the square root of the absolute value of the curvature. As $k$ approaches 0, the function $\\frac{\\sin(kx)}{k}$ approaches $x$ (the Euclidean line). When $k$ is positive, the function displays the oscillating behavior of spherical geodesics; when $k$ is negative, it represents the hyperbolic behavior (using the complex definition where $\\sin(ix) = i\\sinh(x)$).

## Summary

Non-Euclidean geometry marks the departure from the assumption that the world is inherently flat. By replacing the Parallel Postulate, we unlock the mathematics of curved surfaces. Spherical geometry, with its positive curvature, governs finite spaces where parallel lines are impossible. Hyperbolic geometry, with its negative curvature, governs spaces where space expands exponentially, allowing for infinitely many parallels.

The transition from Euclidean to non-Euclidean frameworks is bridged by the concept of Gaussian curvature. Through the use of trigonometric laws adapted for spheres and the metric-based distances of hyperbolic disks, we can map and measure these non-standard spaces. These geometries provide the essential foundation for understanding the macro-structure of the universe, the geometry of general relativity, and the complex topological surfaces required in advanced scientific research. By viewing Euclidean geometry as merely a specific case where $K=0$, we gain a broader, more accurate perspective on the nature of mathematical space.`;export{e as default};