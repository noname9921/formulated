var e=`## Definition

A quadrilateral is defined in Euclidean geometry as a polygon possessing exactly four sides (or edges) and four vertices (or corners). The term is derived from the Latin words "quadri," meaning four, and "latus," meaning side. By definition, a quadrilateral is a closed two-dimensional shape formed by the intersection of four line segments, where the endpoints of each segment meet at a vertex. For a figure to qualify as a simple quadrilateral, the sides must not cross each other, and all four vertices must lie in the same plane. The sum of the interior angles of any simple quadrilateral is always $360^\\circ$ or $2\\pi$ radians, a result that follows from the triangulation of the shape into two triangles, each having an interior angle sum of $180^\\circ$.

## Key Terminology

To analyze quadrilaterals with precision, one must define several geometric primitives and relationships:

*   **Vertices:** The four points where the sides of the quadrilateral intersect, typically denoted as $A, B, C,$ and $D$.
*   **Sides:** The four line segments connecting the vertices, denoted as $AB, BC, CD,$ and $DA$.
*   **Diagonals:** The two line segments that connect non-adjacent vertices, denoted as $AC$ and $BD$.
*   **Interior Angles:** The angles formed at the vertices inside the quadrilateral, denoted as $\\alpha, \\beta, \\gamma,$ and $\\delta$.
*   **Convexity:** A quadrilateral is convex if both diagonals lie entirely within the figure and all interior angles are less than $180^\\circ$. Conversely, a concave quadrilateral contains at least one reflex angle ($>180^\\circ$) and one diagonal lying outside the figure.
*   **Parallelism:** Two sides are parallel if they lie on lines that maintain a constant distance and never intersect.
*   **Perpendicularity:** Two sides or diagonals are perpendicular if they intersect at a $90^\\circ$ angle.

## Purpose

The study of quadrilaterals is fundamental to structural engineering, architecture, computer graphics, and theoretical mathematics. In engineering, quadrilaterals are the basis for truss design, where the rigidity of triangles and the stability of rectangular frames are utilized to distribute loads. In computer graphics, particularly in 3D modeling and rendering, quadrilaterals (often referred to as "quads") are the preferred primitive for polygon meshes because they facilitate smoother subdivision surfaces and predictable texture mapping compared to triangles. Theoretically, quadrilaterals serve as a bridge between simple polygons and complex multi-sided shapes, providing a playground for the exploration of symmetry, transformation matrices, and tiling properties.

## Fundamental Properties

All simple, convex quadrilaterals adhere to a set of universal properties governed by Euclidean axioms.

The angle sum property is given by:
$$\\sum_{i=1}^{4} \\theta_i = (4-2) \\times 180^\\circ = 360^\\circ$$

The area of a general quadrilateral can be calculated using the coordinates of its vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3),$ and $(x_4, y_4)$ via the Surveyor's Formula (or Shoelace Formula):
$$Area = \\frac{1}{2} |(x_1y_2 + x_2y_3 + x_3y_4 + x_4y_1) - (y_1x_2 + y_2x_3 + y_3x_4 + y_4x_1)|$$

Bretschneider's Formula provides a method to calculate the area of any general convex quadrilateral given the four sides $a, b, c, d$ and the sum of two opposite angles $\\alpha$ and $\\gamma$:
$$Area = \\sqrt{(s-a)(s-b)(s-c)(s-d) - abcd \\cdot \\cos^2\\left(\\frac{\\alpha+\\gamma}{2}\\right)}$$
where $s$ is the semi-perimeter $s = \\frac{a+b+c+d}{2}$. If the quadrilateral is cyclic, $\\alpha+\\gamma = 180^\\circ$, and the formula simplifies to Brahmagupta's Formula:
$$Area = \\sqrt{(s-a)(s-b)(s-c)(s-d)}$$

## Types & Variations

Quadrilaterals are categorized based on their symmetry, parallelism of sides, and equality of internal components.

| Type | Parallel Sides | Equal Sides | Symmetry/Properties |
| :--- | :--- | :--- | :--- |
| **Trapezoid** | At least one pair | Varies | Base angles equal if isosceles |
| **Parallelogram** | Two pairs | Opposite pairs | Diagonals bisect each other |
| **Rectangle** | Two pairs | Opposite pairs | Four right angles |
| **Rhombus** | Two pairs | All four sides | Diagonals perpendicular bisectors |
| **Square** | Two pairs | All four sides | Four right angles, diagonals equal |
| **Kite** | Zero pairs | Two adjacent pairs | One diagonal is a perpendicular bisector |

### Detailed Analysis of Variations
1. **Parallelogram:** A quadrilateral where opposite sides are parallel. By corollary, opposite angles are equal, and consecutive angles are supplementary ($180^\\circ$).
2. **Rectangle:** A parallelogram with four right angles. The diagonals are equal in length and bisect each other.
3. **Rhombus:** A parallelogram with all sides equal in length. The diagonals are perpendicular and bisect the interior angles.
4. **Square:** A special case of both the rectangle and the rhombus, inheriting all their properties. It is the most symmetrical quadrilateral.
5. **Kite:** A quadrilateral with two distinct pairs of adjacent equal-length sides. Unlike a parallelogram, the diagonals intersect at $90^\\circ$, and only one diagonal bisects the other.
6. **Trapezoid (or Trapezium in British English):** A quadrilateral with at least one pair of parallel sides. If the non-parallel sides are equal, it is an isosceles trapezoid.

## How to Solve

Solving problems involving quadrilaterals generally requires a systematic approach based on identifying the specific subclass of the polygon.

### Analytical Framework
1. **Classification:** Determine the shape type based on given constraints (e.g., "Do diagonals bisect each other?" or "Are all angles $90^\\circ$?").
2. **Coordinate Geometry:** If vertices are provided in a Cartesian plane, use the distance formula $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ to determine side lengths, and slopes $m = \\frac{y_2-y_1}{x_2-x_1}$ to check for parallelism ($m_1=m_2$) or perpendicularity ($m_1 \\cdot m_2 = -1$).
3. **Vector Analysis:** Define sides as vectors $\\vec{AB}, \\vec{BC}, \\vec{CD},$ and $\\vec{DA}$. Use the dot product to find angles between sides:
$$\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}$$
4. **Partitioning:** For complex area problems, decompose the quadrilateral into two triangles by drawing a diagonal. Calculate the area of each triangle using the base-height formula $Area = \\frac{1}{2}bh$ or Heron’s formula if only side lengths are known.
5. **Varignon’s Theorem Application:** Recognize that the figure formed by connecting the midpoints of any quadrilateral is always a parallelogram (the Varignon parallelogram). Its area is exactly half the area of the original quadrilateral.

### Example Derivation: Area of a Rhombus
Given diagonals $d_1$ and $d_2$, the rhombus can be divided into four congruent right-angled triangles with legs $\\frac{d_1}{2}$ and $\\frac{d_2}{2}$. The area of one such triangle is:
$$Area_{tri} = \\frac{1}{2} \\cdot \\frac{d_1}{2} \\cdot \\frac{d_2}{2} = \\frac{d_1 d_2}{8}$$
Since there are four such triangles:
$$Area_{total} = 4 \\times \\left(\\frac{d_1 d_2}{8}\\right) = \\frac{d_1 d_2}{2}$$
This derivation confirms that the area of a rhombus is half the product of its diagonals.

## Summary

Quadrilaterals represent the most complex polygon that maintains a consistent interior angle sum of $360^\\circ$ and acts as a fundamental building block for higher-dimensional geometry. From the highly symmetric square to the general, irregular convex quadrilateral, these shapes are defined by the interplay between their vertices, sides, and diagonals. By utilizing the properties of parallelism, perpendicularity, and interior angle relationships, one can effectively categorize and solve for unknown metrics such as area, perimeter, and missing angular values. Whether through the application of Brahmagupta’s theorem for cyclic quadrilaterals or the coordinate-based Shoelace formula, the mathematical framework governing these four-sided polygons is robust, providing the necessary tools for architectural precision and computational geometry. Mastery of these properties allows for the transition from basic polygon analysis to more advanced studies in tessellation, structural stability, and vector space dynamics.`;export{e as default};