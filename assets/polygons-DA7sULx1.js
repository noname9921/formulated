var e=`# Polygons and Angles of Polygons

## Definition

A polygon is defined in Euclidean plane geometry as a closed, two-dimensional figure characterized by a finite number of straight line segments connected end-to-end. The term derives from the Greek words *poly*, meaning "many," and *gonia*, meaning "angle." For a shape to satisfy the rigorous definition of a polygon, it must satisfy three primary constraints: it must be closed, it must be formed by at least three straight line segments (called edges or sides), and these segments must meet only at their endpoints to form vertices.

A polygon $P$ with $n$ vertices $V_1, V_2, \\dots, V_n$ is defined by the set of line segments $S = \\{ \\overline{V_1V_2}, \\overline{V_2V_3}, \\dots, \\overline{V_nV_1} \\}$. If the edges do not cross each other, the polygon is classified as a simple polygon. If any pair of edges intersect at a point other than a shared vertex, the polygon is complex or self-intersecting. The interior of a simple polygon is the region enclosed by the boundary, and the sum of its internal angles is intrinsically tied to the number of vertices $n$.

## Key Terminology

To analyze polygons effectively, one must master the nomenclature associated with their structural components:

| Term | Definition |
| :--- | :--- |
| Vertex | The point where two adjacent sides of a polygon meet. |
| Side | A line segment that forms part of the polygon's boundary. |
| Interior Angle | The angle inside the polygon at each vertex, formed by two adjacent sides. |
| Exterior Angle | The angle formed by one side of a polygon and the extension of an adjacent side. |
| Diagonal | A line segment connecting two non-adjacent vertices. |
| Convex | A polygon where all interior angles are less than $180^\\circ$ and all diagonals lie within the interior. |
| Concave | A polygon that has at least one interior angle greater than $180^\\circ$ (a reflex angle). |
| Regular | A polygon that is both equilateral (all sides equal) and equiangular (all angles equal). |
| Apothem | The distance from the center of a regular polygon to the midpoint of one of its sides. |

## Purpose

The study of polygons and their angles serves as the foundational pillar for fields ranging from architecture and civil engineering to computer graphics and crystallography. By understanding the geometric constraints of polygons, architects can ensure structural stability in tiling (tessellation) and load-bearing designs.

In computational geometry, polygons are the primary primitives used to represent 3D objects. Every surface in a 3D environment, such as in video games or CAD software, is decomposed into a mesh of triangles or quadrilaterals. Calculations regarding the angles and areas of these polygons allow for the computation of lighting, shadows, and physical collisions. Furthermore, the mathematical relationship between $n$ and the sum of interior angles allows for the validation of geometric models, ensuring that closed shapes are mathematically consistent within a coordinate plane.

## Fundamental Properties

The most critical mathematical property of any simple $n$-gon is the sum of its interior angles, denoted as $S_i$. This value is derived from the fact that any $n$-gon can be partitioned into $n-2$ non-overlapping triangles by drawing diagonals from a single vertex to all other non-adjacent vertices. 

Since the sum of the interior angles of a triangle is exactly $180^\\circ$ (or $\\pi$ radians), the sum for an $n$-gon is given by the formula:
$$S_i = (n-2) \\times 180^\\circ$$

For the exterior angles of a convex polygon, a separate but equally fundamental property exists. When traversing the boundary of a convex polygon, the sum of the exterior angles—one at each vertex—always equals $360^\\circ$ ($2\\pi$ radians), regardless of the number of sides $n$. This is derived from the fact that the interior angle $\\alpha$ and its corresponding exterior angle $\\beta$ are supplementary:
$$\\alpha + \\beta = 180^\\circ$$
Summing these for all $n$ vertices gives:
$$\\sum_{i=1}^n \\alpha_i + \\sum_{i=1}^n \\beta_i = n \\times 180^\\circ$$
$$(n-2) \\times 180^\\circ + \\sum \\beta_i = n \\times 180^\\circ$$
$$\\sum \\beta_i = 180n - 360 - 180n = 360^\\circ$$

## Types & Variations

Polygons are classified primarily by the number of their sides ($n$) and their symmetry. The progression of named polygons begins at $n=3$ and continues theoretically toward infinity.

### Classification by Sides
*   **Triangle ($n=3$):** The most fundamental polygon; always convex.
*   **Quadrilateral ($n=4$):** Includes squares, rectangles, rhombi, and trapezoids.
*   **Pentagon ($n=5$):** Frequently seen in natural patterns and architecture.
*   **Hexagon ($n=6$):** Highly efficient for packing, as seen in beehives.
*   **Heptagon ($n=7$), Octagon ($n=8$), Nonagon ($n=9$), Decagon ($n=10$):** High-order polygons.

### Symmetry and Convexity
Beyond side count, the distinction between convex and concave shapes is vital. A convex polygon can be defined by the property that for any two points $A$ and $B$ within the polygon, the entire segment $\\overline{AB}$ lies within the polygon. Concave polygons contain at least one "dent" or reflex angle. Regular polygons, which possess maximum symmetry, allow for specialized formulas regarding their central angles, which are calculated as $\\frac{360^\\circ}{n}$.

## How to Solve

Solving problems involving polygons typically requires algebraic manipulation of the sum formulas.

### Finding Interior Angle Sums
If asked to find the sum of interior angles for a dodecagon ($n=12$):
$$S_i = (12-2) \\times 180^\\circ = 10 \\times 180^\\circ = 1800^\\circ$$

### Finding Individual Angles of Regular Polygons
For a regular polygon, each interior angle $A_i$ is identical. Therefore:
$$A_i = \\frac{(n-2) \\times 180^\\circ}{n}$$
For a regular hexagon ($n=6$):
$$A_i = \\frac{(6-2) \\times 180^\\circ}{6} = \\frac{720^\\circ}{6} = 120^\\circ$$

### Dealing with Unknown Angles
If a polygon has $n$ sides and $n-1$ known interior angles, let the sum be $S = (n-2)180^\\circ$. Let the known angles be $k_1, k_2, \\dots, k_{n-1}$. The unknown angle $x$ is:
$$x = S - \\sum_{j=1}^{n-1} k_j$$

### Tessellation Constraints
A set of polygons can only tessellate (tile) a plane without gaps if the interior angles meeting at a point sum exactly to $360^\\circ$. For regular polygons with $n$ sides, the interior angle is $\\theta = \\frac{(n-2)180}{n}$. To check if a regular $n$-gon can tile the plane, solve for $k$ (the number of polygons meeting at a vertex):
$$k \\times \\left( \\frac{(n-2)180}{n} \\right) = 360$$
Simplifying this reveals that only $n=3$ (equilateral triangle), $n=4$ (square), and $n=6$ (hexagon) are capable of forming regular tessellations of the plane.

## Summary

The study of polygons and their angles is central to geometry, providing the rules that govern the formation of all closed shapes in a plane. The key takeaways from this analysis are:
1. The sum of interior angles is universally governed by $(n-2)180^\\circ$.
2. The sum of exterior angles of any convex polygon is always $360^\\circ$.
3. Regular polygons exhibit high symmetry, allowing for simple calculations of individual interior angles and central angles.
4. The constraints imposed by these angles dictate the fundamental limitations of geometric constructions, such as which polygons can perfectly tile a flat surface. 

Mastering these relationships allows for the systematic resolution of complex spatial problems and provides the logical scaffolding for more advanced topics in topology and trigonometric analysis.`;export{e as default};