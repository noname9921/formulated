var e=`# Euclidean Axioms, Points, Lines, and Planes

## Definition

Euclidean geometry is a mathematical system attributed to the Alexandrian Greek mathematician Euclid, which he described in his textbook, the *Elements*. This system is built upon a set of core principles known as axioms or postulates, which serve as the foundation for all deductive reasoning within the discipline. At the heart of this framework lie three undefined primitive concepts: the point, the line, and the plane.

In formal Euclidean geometry, these three concepts are "undefined" because they cannot be defined using simpler geometric terms without descending into circular logic. A point is conceptually treated as an entity with position but no dimension—it has no length, width, or height. A line is considered a one-dimensional extension of points, infinite in both directions, possessing length but no thickness. A plane is a two-dimensional surface that extends infinitely in all directions, defined by its length and width, yet possessing no depth. Through the interplay of these three entities, Euclid established the structure of space, defining how they relate, intersect, and form the basis for complex geometric constructions.

## Key Terminology

To analyze the relationships between points, lines, and planes, one must master specific vocabulary that defines how these elements interact.

| Term | Definition | Dimensionality |
| :--- | :--- | :--- |
| Point | A location in space with zero dimensions. | 0 |
| Line | A set of points extending infinitely in two directions. | 1 |
| Plane | A flat surface extending infinitely in two dimensions. | 2 |
| Collinear | Points lying on the same single line. | N/A |
| Coplanar | Points or lines lying within the same single plane. | N/A |
| Intersection | The set of points common to two or more figures. | Varies |
| Postulate | A self-evident truth accepted without formal proof. | N/A |
| Theorem | A statement proven to be true based on axioms. | N/A |

The concept of "incidence" is critical here. Incidence describes the relationship between these elements; for example, a line is incident to a plane if every point on the line lies within that plane. Similarly, two distinct planes may have an intersection that forms a line, a core principle in understanding the spatial configuration of 3D Euclidean space.

## Purpose

The primary purpose of the Euclidean axiomatic system is to provide a rigorous, logical framework for describing the physical world and the properties of shape, size, and relative position. By establishing a minimal set of five postulates, Euclid demonstrated that the entire universe of classical geometry could be derived through deductive reasoning.

These axioms serve three distinct functions:
1. **Consistency:** By defining the behavior of points, lines, and planes, the system ensures that mathematical conclusions remain consistent across different proofs.
2. **Predictability:** They allow for the calculation of unknown values (such as distances and angles) based on known constraints, enabling structural engineering, architecture, and navigation.
3. **Abstraction:** They allow for the reduction of complex physical problems into simplified geometric representations. For example, a truss in structural engineering can be analyzed as a series of connected line segments within a plane, where the joints are points.

## Fundamental Properties

Euclidean geometry is anchored by five specific postulates. While the first four are relatively concise, the fifth—the Parallel Postulate—has historically been the most significant, as its rejection led to the discovery of non-Euclidean geometries.

1. **The Straight Line Postulate:** A straight line segment can be drawn joining any two points. Mathematically, for any two distinct points $A$ and $B$, there exists exactly one line $L$ such that $A \\in L$ and $B \\in L$.
2. **The Extension Postulate:** Any straight line segment can be extended indefinitely in a straight line.
3. **The Circle Postulate:** Given any straight line segment, a circle can be drawn having the segment as radius and one endpoint as the center. This establishes the existence of distance and measurement.
4. **The Right Angle Postulate:** All right angles are congruent. This defines the basis for measurement and the concept of perpendicularity.
5. **The Parallel Postulate:** If a line segment intersects two straight lines forming two interior angles on the same side that sum to less than two right angles, then the two lines, if extended indefinitely, will meet on that side. 

These properties imply that space is "flat." In a Euclidean plane, the sum of the interior angles of any triangle is always exactly $\\pi$ radians ($180^\\circ$). This is expressed by the sum of angles $\\alpha + \\beta + \\gamma = 180^\\circ$. If the space were curved (as in hyperbolic or spherical geometry), this property would fail.

## Types & Variations

Euclidean objects are categorized based on their orientation and constraints within a coordinate system. We define these using linear equations in $\\mathbb{R}^3$.

**Points:** Represented as an ordered triple $(x, y, z)$.

**Lines:** In three-dimensional space, a line is often defined by a point $P_0(x_0, y_0, z_0)$ and a direction vector $\\mathbf{v} = \\langle a, b, c \\rangle$. The parametric equation is given by:
$$x = x_0 + at$$
$$y = y_0 + bt$$
$$z = z_0 + ct$$
Where $t \\in \\mathbb{R}$.

**Planes:** A plane is defined by a point $P_0$ and a normal vector $\\mathbf{n} = \\langle A, B, C \\rangle$ that is perpendicular to the plane. The equation for the plane is:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$

These equations allow us to determine if lines are parallel, intersecting, or skew. Skew lines are a unique variation in 3D Euclidean space: they are lines that do not intersect and are not parallel, a phenomenon that cannot occur in a single two-dimensional plane.

## How to Solve

Solving problems involving Euclidean axioms usually requires translating geometric descriptions into algebraic equations or logical proofs.

### Analytical Method for Intersection
To find the intersection of two lines, set their parametric equations equal to each other. Given line $L_1$ with parameter $t$ and $L_2$ with parameter $s$, solve the system:
$$x_0 + at = x_1 + ds$$
$$y_0 + bt = y_1 + es$$
$$z_0 + ct = z_1 + fs$$

If a solution $(t, s)$ exists, the lines intersect at the point determined by substituting $t$ into $L_1$. If no solution exists, the lines are either parallel (if their direction vectors are proportional) or skew.

### Distance Between a Point and a Plane
To calculate the shortest distance $D$ from a point $P_1(x_1, y_1, z_1)$ to a plane $Ax + By + Cz + D_0 = 0$, we use the distance formula:
$$D = \\frac{|Ax_1 + By_1 + Cz_1 + D_0|}{\\sqrt{A^2 + B^2 + C^2}}$$

This formula is derived from the projection of the vector from a point on the plane to $P_1$ onto the normal vector of the plane. This represents a fundamental application of Euclidean axioms where the "shortest path" is defined by the line segment perpendicular to the plane, satisfying the definition of distance as a measurable quantity derived from the postulates.

Consider the behavior of linear functions as simple representations of lines. The graph below plots $f(x) = mx + b$, illustrating how the slope $m$ and intercept $b$ define a line on a 2D plane.

\`\`\`graph
0.5*x + 1
-1.5*x - 2
2*x + 0
\`\`\`

To further understand how parameters change the position of a line within a plane, use the interactive graph below. Observe how the slope $a$ dictates the steepness and the intercept $b$ shifts the line vertically, demonstrating how lines are fixed in a Euclidean coordinate system.

\`\`\`interactivegraph
ax + b
params: a=1, b=0
range: a=-5:5, b=-5:5
\`\`\`

## Summary

The Euclidean axiomatic system provides the bedrock for understanding space through points, lines, and planes. By treating points as positions, lines as one-dimensional paths, and planes as two-dimensional surfaces, we create a consistent environment where distances, intersections, and angles can be calculated with precision.

The power of this system lies in its limited set of initial assumptions. From the five postulates, we derive the entire field of geometry, including the properties of polygons, the nature of parallel lines, and the relationships between three-dimensional solids. While non-Euclidean geometries have expanded our understanding of curved spaces, Euclidean geometry remains the most practical and intuitive tool for describing the macroscopic world. Whether calculating the shortest flight path between cities on a localized flat map or designing the structural integrity of a building, the definitions and theorems derived from Euclid's work remain essential to modern science and engineering. Through the rigorous application of these axioms, we transform abstract spatial concepts into concrete mathematical truths.`;export{e as default};