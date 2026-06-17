var e=`# Circles: Chords, Tangents, and Secants

## Definition

A circle is defined as the locus of all points in a two-dimensional plane that maintain a constant distance, known as the radius $r$, from a fixed central point, the center $O$. Mathematically, in a Cartesian coordinate system with center $(h,k)$, the circle is expressed by the equation $(x-h)^2 + (y-k)^2 = r^2$.

Within this geometric framework, three primary line-related entities interact with the circle's boundary: the chord, the secant, and the tangent. 
1. A **chord** is a line segment whose endpoints both lie on the circle.
2. A **secant** is a line that intersects a circle at exactly two distinct points. It can be viewed as the extension of a chord indefinitely in both directions.
3. A **tangent** is a line that touches a circle at exactly one point, known as the point of tangency. At this specific point, the tangent line is perpendicular to the radius drawn to that point.

## Key Terminology

To analyze the relationship between these components, one must master the following vocabulary:

| Term | Definition |
| :--- | :--- |
| Circumference | The total distance around the boundary of the circle. |
| Radius | The segment connecting the center to any point on the edge. |
| Diameter | A special chord passing through the center; it is the longest chord. |
| Point of Tangency | The unique intersection point of a tangent line and the circle. |
| Intercepted Arc | The portion of the circle trapped between two points on the circle. |
| Secant Segment | The part of a secant line that lies between an external point and the circle. |
| Chordal Distance | The perpendicular distance from the center of the circle to a chord. |

## Purpose

The study of chords, tangents, and secants is fundamental to Euclidean geometry, structural engineering, and optics. These elements provide the mathematical basis for calculating distances, angles, and power-of-a-point relationships. 

Engineers utilize these properties to design gears, circular tracks, and bridges, where the stress distribution often depends on the intersection points of structural members acting as secants or chords. Furthermore, in theoretical mathematics, these concepts are essential for proofs involving cyclic quadrilaterals and inscribed angles, forming the bedrock for trigonometry and coordinate geometry.

## Fundamental Properties

The relationships between these elements are governed by strict theorems that allow for the calculation of unknown lengths and angles.

### Properties of Chords
1. **Perpendicular Bisector Theorem:** A radius or diameter that is perpendicular to a chord also bisects that chord. This is derived from the properties of isosceles triangles formed by the two radii and the chord.
2. **Equidistant Chords:** Two chords are congruent if and only if they are equidistant from the center.
3. **Chord-Chord Power Theorem:** If two chords $AB$ and $CD$ intersect at a point $P$ inside the circle, then the products of the segments of the chords are equal: $AP \\cdot PB = CP \\cdot PD$.

### Properties of Tangents
1. **Perpendicularity:** A tangent line is always perpendicular to the radius at the point of tangency. If a line is perpendicular to a radius at its endpoint on the circle, that line is tangent to the circle.
2. **Tangent Segment Theorem:** If two tangent segments are drawn to a circle from the same external point, they are congruent.

### Properties of Secants and Power of a Point
The power of a point $P$ relative to a circle is defined by the products of the segments created by the secants passing through $P$.
1. **Secant-Secant Theorem:** If two secants $PAB$ and $PCD$ originate from an external point $P$, then $PA \\cdot PB = PC \\cdot PD$.
2. **Tangent-Secant Theorem:** If a tangent $PT$ and a secant $PAB$ intersect at an external point $P$, then $PT^2 = PA \\cdot PB$.

## Types & Variations

Circles can interact with lines in ways that define the classification of these segments based on the number of intersection points. We can visualize the movement of a line relative to a circle by considering the distance $d$ from the center to the line.

The following table summarizes the relationship between distance $d$ and radius $r$:

| Relationship | Distance Condition | Number of Intersections |
| :--- | :--- | :--- |
| Tangent | $d = r$ | One |
| Secant | $d < r$ | Two |
| Exterior Line | $d > r$ | Zero |

### Analytical Geometry Variation
Consider a circle $x^2 + y^2 = r^2$. A line $y = mx + c$ acts as a tangent if the quadratic equation formed by substitution results in a discriminant of zero ($D = 0$). This occurs specifically when $c^2 = r^2(1 + m^2)$. This is a critical variation used in optimization problems where one seeks to find the line that touches a circular boundary at a precise gradient.

## How to Solve

Solving problems involving circles requires a systematic approach, often involving the Pythagorean theorem or the properties of similar triangles.

### Example 1: Finding the length of a chord
Given a circle of radius $10$ cm and a chord located $6$ cm from the center, find the length of the chord.
1. Draw a radius from the center to one endpoint of the chord.
2. The radius, the distance to the chord ($6$ cm), and half of the chord ($x$) form a right-angled triangle.
3. Apply the Pythagorean theorem: $6^2 + x^2 = 10^2$.
4. $36 + x^2 = 100 \\implies x^2 = 64 \\implies x = 8$.
5. The full chord length is $2x = 16$ cm.

### Example 2: The Tangent-Secant problem
Given an external point $P$, a tangent $PT = 6$, and a secant passing through $P$ intersecting the circle at $A$ and $B$. If $PA = 3$, find the length of the entire secant segment $PB$.
1. Use the Tangent-Secant Theorem: $PT^2 = PA \\cdot PB$.
2. $6^2 = 3 \\cdot PB$.
3. $36 = 3 \\cdot PB$.
4. $PB = 12$.

### Analytical Framework for Power of a Point
When dealing with complex geometries, define the point $P$ at $(x_0, y_0)$ and the circle equation $f(x, y) = (x-h)^2 + (y-k)^2 - r^2 = 0$. The power of point $P$ is equivalent to $f(x_0, y_0)$. This scalar value provides the product of segments for any secant line passing through $P$, simplifying the derivation of intersection lengths without needing the explicit coordinates of the intersection points.

## Summary

The study of chords, tangents, and secants transitions from simple geometric observation to rigorous algebraic analysis. By understanding that a tangent is the limiting case of a secant (as the two intersection points converge), one gains a deeper intuition for calculus-based approaches to geometry.

Chords define internal partitioning and are sensitive to radial distance. Tangents define boundaries and require perpendicularity, serving as essential tools in finding optimal paths in circular systems. Secants bridge the interior and exterior, governed by the elegant multiplicative symmetry expressed in the Power of a Point theorems. Mastery of these concepts is not merely an exercise in memorizing theorems, but a requirement for applying coordinate geometry to real-world modeling, from planetary orbital mechanics to the structural integrity of mechanical components. As verified by the Pythagorean theorem and the properties of similar triangles, these relationships remain consistent, providing a reliable mathematical foundation for spatial reasoning.`;export{e as default};