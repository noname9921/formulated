var e=`# Spherical Trigonometry Foundations

Spherical trigonometry is the branch of spherical geometry that deals with the relationships between the sides and angles of polygons (especially triangles) defined by a number of intersecting great circles on the surface of a sphere. Unlike planar trigonometry, which operates in a two-dimensional Euclidean space where the sum of angles in a triangle is always $\\pi$ radians ($180^\\circ$), spherical trigonometry operates on a curved surface where the geometry is inherently non-Euclidean.

## Definition

A spherical triangle is defined as a figure formed on the surface of a sphere by the intersection of three great circles. A great circle is the intersection of a sphere with a plane that passes through the center point of the sphere. Because these planes pass through the center, the great circle represents the shortest distance between any two points on the sphere—a concept known as a geodesic.

In a spherical triangle, the sides are arcs of great circles, and the angles are the dihedral angles between the planes defining those great circles. If the sphere has radius $R$, the length of a side $a$ is related to the central angle $\\alpha$ (measured in radians) subtended at the center of the sphere by the relationship $s=R\\alpha$. In standard spherical trigonometry, we often work with the unit sphere where $R=1$, so the arc length is numerically equal to the angle subtended at the center.

## Key Terminology

To analyze these triangles effectively, one must master the standard nomenclature of the field:

| Term | Definition |
| :--- | :--- |
| Great Circle | A circle on the surface of a sphere whose center coincides with the center of the sphere. |
| Spherical Triangle | A region on a sphere bounded by three arcs of great circles. |
| Polar Triangle | A triangle where the vertices are the poles of the sides of the original triangle. |
| Spherical Excess | The amount by which the sum of the angles of a spherical triangle exceeds $\\pi$ radians, denoted as $E = A + B + C - \\pi$. |
| Dihedral Angle | The angle between two intersecting planes, which corresponds to the angle at the vertex of a spherical triangle. |
| Lunes | The area contained between two great circles, analogous to a wedge or a spherical sector. |

The relationship between the spherical excess and the area of a triangle is a fundamental result known as Girard's Theorem. Given a sphere of radius $R$, the area $S$ of a spherical triangle with angles $A, B, C$ (in radians) is given by $S = R^2(A+B+C-\\pi)$. This highlights the direct link between curvature and geometry.

## Purpose

The primary purpose of spherical trigonometry is to solve problems involving navigation, astronomy, and geodesy. Because the Earth is approximately a sphere, Euclidean geometry fails for long-distance navigation. Mariners and pilots use these principles to calculate the "great circle route," which is the shortest path between two geographic points.

In astronomy, spherical trigonometry is indispensable for defining coordinate systems such as the equatorial coordinate system (right ascension and declination) and the horizontal coordinate system (altitude and azimuth). By converting between these systems using spherical triangles, astronomers can predict the precise position of stars and planets relative to an observer's location on the rotating Earth.

## Fundamental Properties

Spherical triangles possess properties that depart significantly from their planar counterparts. These are best understood by analyzing the Law of Cosines and the Law of Sines for spherical triangles.

### The Spherical Law of Cosines
For a spherical triangle with sides $a, b, c$ and corresponding opposite angles $A, B, C$, the Law of Cosines is expressed as:
$$\\cos(a) = \\cos(b)\\cos(c) + \\sin(b)\\sin(c)\\cos(A)$$
This formula allows one to determine a side length if the other two sides and the included angle are known. Notably, as the sphere's radius approaches infinity, the triangle becomes "flat," and this formula converges to the Euclidean Law of Cosines ($a^2 = b^2 + c^2 - 2bc \\cos A$) through the Taylor series expansion of trigonometric functions.

### The Spherical Law of Sines
The relationship between sides and angles is given by:
$$\\frac{\\sin(a)}{\\sin(A)} = \\frac{\\sin(b)}{\\sin(B)} = \\frac{\\sin(c)}{\\sin(C)}$$
Unlike the planar version, the side lengths here are expressed as angular distances, meaning they are bounded between $0$ and $\\pi$.

### Geometric Constraints
1. Each side of a spherical triangle must be less than $\\pi$ (a full great circle is $2\\pi$).
2. The sum of the angles is always greater than $\\pi$ and less than $3\\pi$.
3. Any single side must be smaller than the sum of the other two sides, and larger than the absolute difference of the other two.

## Types & Variations

Spherical triangles can be categorized based on their properties and the nature of the great circles forming them:

1. **Right-Angled Spherical Triangles:** Triangles containing at least one angle of $\\pi/2$. Napier's Rules are often used to solve these efficiently.
2. **Quadrantal Triangles:** Triangles where one side has a length of $\\pi/2$.
3. **Equilateral Spherical Triangles:** All three sides (and consequently all three angles) are equal.
4. **Isosceles Spherical Triangles:** Two sides and two angles are equal.
5. **Oblique Spherical Triangles:** Triangles where no angle is $\\pi/2$. These are generally solved using the Law of Cosines and the Law of Sines in tandem, or by using the half-angle formulas.

The variation in behavior can be modeled by how the spherical excess $E$ affects the triangle's shape. As the area of the triangle increases relative to the total surface area of the sphere, the sum of the angles moves further away from $180^\\circ$.

## How to Solve

Solving a spherical triangle involves finding all three sides ($a, b, c$) and all three angles ($A, B, C$) given a subset of these values. The following methodology provides a standard analytical framework:

### Case 1: Given Three Sides (SSS)
To find the angles, use the rearranged Law of Cosines:
$$\\cos(A) = \\frac{\\cos(a) - \\cos(b)\\cos(c)}{\\sin(b)\\sin(c)}$$
By computing this for all three vertices, the angles are uniquely determined.

### Case 2: Given Two Sides and the Included Angle (SAS)
To find the third side $a$, apply the Law of Cosines directly:
$$a = \\arccos(\\cos(b)\\cos(c) + \\sin(b)\\sin(c)\\cos(A))$$
Once $a$ is found, use the Law of Sines to find the remaining angles $B$ and $C$.

### Case 3: Given Two Angles and the Included Side (ASA)
This is the dual of Case 2. Use the Supplemental Law of Cosines:
$$\\cos(A) = -\\cos(B)\\cos(C) + \\sin(B)\\sin(C)\\cos(a)$$

### Case 4: Right Spherical Triangles
When one angle (say $C$) is $\\pi/2$, Napier’s Rules provide a mnemonic to remember the relations. Arrange the five parts of the triangle ($a, b, \\text{co-}A, \\text{co-}c, \\text{co-}B$) in a circle. The sine of any part is equal to the product of the cosines of the opposite parts, or the product of the tangents of the adjacent parts.

The following graph plots $f(x) = \\sin(x)$ and $g(x) = \\cos(x)$ on the interval $[0, \\pi]$, which helps visualize the range of values for sides and angles in spherical geometry.

\`\`\`graph
\\sin(x)
\\cos(x)
\`\`\`

The graph above plots the fundamental trigonometric functions used in the laws of spherical trigonometry. Note that within the range $[0, \\pi]$, $\\sin(x)$ is always non-negative, which aligns with the physical reality of side lengths and angles in spherical triangles, whereas $\\cos(x)$ can be negative, reflecting the obtuse nature of certain spherical angles or side configurations.

## Summary

Spherical trigonometry serves as the mathematical foundation for navigating the surface of a sphere. By replacing Euclidean assumptions with the geometry of great circles, we enable precise calculations for planetary scale systems. The field relies on the non-Euclidean properties of spherical excess and the specific laws of sines and cosines tailored for spherical surfaces. 

Key takeaways for the practitioner include:
- The sum of angles $A+B+C > \\pi$.
- All computations involve $R=1$ (or normalization) to treat sides as angular measures.
- Calculations must account for the dual nature of these triangles (polar triangles).
- Modern applications extend beyond simple navigation into global positioning systems (GPS), satellite orbital mechanics, and large-scale cartographic projections where the curvature of the Earth cannot be ignored.

Mastery of this subject requires an intuitive grasp of how the curvature of space forces a departure from the Pythagorean theorem, necessitating the use of the Spherical Law of Cosines to bridge the gap between planar logic and the reality of a curved surface. Whether solving for the distance between cities or the orientation of a telescope, the principles remain consistent and rigorous.`;export{e as default};