var e=`# Spherical Trigonometry Foundations

## Definition

Spherical trigonometry is the branch of geometry that deals with the relationships between the sides and angles of polygons (primarily triangles) formed by the intersection of three great circles on the surface of a sphere. Unlike planar trigonometry, which operates in a two-dimensional Euclidean space where the sum of angles in a triangle is always $\\pi$ radians ($180^\\circ$), spherical trigonometry operates on a curved manifold where the interior angles of a triangle are variable and dependent on the triangle's area relative to the sphere's surface. A spherical triangle is defined by three arcs of great circles, where each arc must be less than $\\pi$ in length.

## Key Terminology

To understand the mechanics of spherical geometry, one must master specific nomenclature:

| Term | Definition |
| :--- | :--- |
| Great Circle | The intersection of a sphere and a plane that passes through the center of the sphere. |
| Spherical Triangle | A figure formed on the surface of a sphere by three arcs of great circles. |
| Spherical Excess | The amount by which the sum of the angles of a spherical triangle exceeds $\\pi$ radians. |
| Pole | The points on the sphere surface equidistant from all points on a given great circle. |
| Spherical Distance | The shortest path between two points on a sphere, measured as the arc length of a great circle. |
| Antipodal Points | Two points that are diametrically opposite on the surface of a sphere. |

The sides of a spherical triangle are measured as angles subtended at the center of the sphere. If a sphere has radius $R$, the arc length $s$ of a side is given by $s = R\\theta$, where $\\theta$ is the angular measure of the side in radians.

## Purpose

The primary purpose of spherical trigonometry is to solve problems involving coordinates and navigation on a sphere. Because the Earth is approximately spherical, spherical trigonometry provides the mathematical foundation for cartography, celestial navigation, and global positioning systems. It allows observers to determine the "great-circle distance" between two geographical coordinates (latitude and longitude). 

Beyond navigation, it serves as a rigorous framework for astronomy. Astronomers use spherical coordinate systems—such as the equatorial or ecliptic coordinate systems—to map the positions of stars and planets. By applying the laws of spherical trigonometry, one can transform coordinates between different frames of reference or predict the rising and setting times of celestial objects.

## Fundamental Properties

The properties of spherical triangles deviate significantly from Euclidean geometry. The most critical divergence is the relationship between the area of the triangle and the sum of its internal angles. 

The sum of the angles $\\alpha, \\beta, \\gamma$ of a spherical triangle is always greater than $\\pi$ and less than $3\\pi$. The spherical excess $E$ is defined as:
$$E = \\alpha + \\beta + \\gamma - \\pi$$

The area $A$ of a spherical triangle on a sphere of radius $R$ is directly proportional to this excess:
$$A = R^2 E = R^2 (\\alpha + \\beta + \\gamma - \\pi)$$

This implies that there are no "similar" triangles in spherical geometry; if two triangles have the same angles, they must have the same area. Furthermore, the sides $a, b, c$ (expressed as angles) and the angles $A, B, C$ are governed by the Spherical Law of Cosines. For a triangle with sides $a, b, c$ opposite to angles $A, B, C$:
$$\\cos(a) = \\cos(b)\\cos(c) + \\sin(b)\\sin(c)\\cos(A)$$

There is also a dual Law of Cosines for angles:
$$\\cos(A) = -\\cos(B)\\cos(C) + \\sin(B)\\sin(C)\\cos(a)$$

These identities are essential for calculating unknown parameters given a subset of known triangle components.

## Types & Variations

Spherical triangles are categorized by their dimensions and properties. A "right spherical triangle" occurs when one of the angles is exactly $\\pi/2$ radians. These are the most common in practical applications because they simplify the Laws of Cosines into Napier's Rules of Circular Parts.

Another category is the "quadrantal triangle," which is a triangle where at least one side has an angular measure of $\\pi/2$. Additionally, there are polar triangles. If a triangle has vertices $A, B, C$, its polar triangle is formed by the poles of the sides $a, b, c$. This reciprocal relationship is powerful for deriving secondary identities.

To visualize how the properties of spherical arcs behave, consider the following graph showing the relationship between side length and cosine projection, which is fundamental to the Spherical Law of Cosines. The graph below plots $f(x) = \\cos(x)$, illustrating how the value of a spherical side (as an angle) maps to its projection.

\`\`\`graph
\\cos(x)
\`\`\`

For a deeper exploration of how the parameters of a trigonometric function oscillate within the constraints of a spherical arc, we use the interactive graph below. Observe how changes in frequency and phase shift affect the output.

\`\`\`interactivegraph
\\cos(ax + b)
params: a=1, b=0
range: a=0.5:2, b=-3:3
\`\`\`

## How to Solve

Solving a spherical triangle typically involves finding the three missing components (sides or angles) given three known components. This process is known as "solving the triangle."

### The Law of Sines
The ratio of the sine of a side to the sine of its opposite angle is constant for a given triangle:
$$\\frac{\\sin(a)}{\\sin(A)} = \\frac{\\sin(b)}{\\sin(B)} = \\frac{\\sin(c)}{\\sin(C)}$$

### Napier’s Rules
For a right spherical triangle where $C = \\pi/2$, Napier developed a mnemonic device using the five parts: $a, b, \\text{co-}A, \\text{co-}c, \\text{co-}B$. The rules state that the sine of any middle part is equal to the product of the cosines of the opposite parts, or the product of the tangents of the adjacent parts. This drastically reduces the algebraic load of computation.

### Computational Strategy
1. **Identify Given Data:** Determine if you have SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), or AAA (Angle-Angle-Angle).
2. **Select the Identity:**
   - If SSS is known: Use the Law of Cosines to solve for angles.
   - If SAS is known: Use the Law of Cosines for the missing side, then the Law of Sines.
   - If AAA is known: Use the polar triangle or the Law of Cosines for angles.
3. **Check for Ambiguity:** Unlike plane triangles, the solution to a spherical triangle is generally unique, but one must ensure the triangle satisfies the triangle inequality: the sum of any two sides must be greater than the third side, and the sum of all sides must be less than $2\\pi$.

## Summary

Spherical trigonometry is a foundational mathematical discipline that bridges the gap between planar geometry and the reality of non-Euclidean, curved surfaces. By defining triangles as intersections of great circles, we derive properties such as the spherical excess, the Law of Cosines, and the Law of Sines, which allow for the precise calculation of distances and angles on a globe. 

Key takeaways include:
- The sum of angles in a spherical triangle is always $>\\pi$.
- The area of the triangle is intrinsically linked to the spherical excess $E$.
- The Spherical Law of Cosines provides the primary mechanism for solving triangles when side lengths or angles are unknown.
- Practical application remains vital in navigation and astronomy, where the curvature of the Earth or the celestial sphere cannot be ignored.

Mastering these foundations allows for the translation of three-dimensional coordinate problems into solvable trigonometric identities, providing a robust toolset for any technical application requiring spatial awareness on a sphere.`;export{e as default};