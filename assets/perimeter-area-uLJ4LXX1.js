var e=`# Perimeter and Area of Planar Figures

## Definition

In Euclidean geometry, a planar figure is a two-dimensional geometric object defined within a flat, infinite plane. The "perimeter" and "area" represent the two fundamental quantitative descriptors of these figures. The perimeter, denoted by the symbol $P$, is defined as the total length of the continuous boundary enclosing a closed planar figure. It is a linear measurement representing the path length required to traverse the entire outer edge of the shape. Mathematically, for a polygon with $n$ sides of lengths $s_1, s_2, \\dots, s_n$, the perimeter is calculated as the sum $P = \\sum_{i=1}^{n} s_i$.

Area, denoted by the symbol $A$, is a scalar quantity expressing the extent of a two-dimensional surface enclosed within the perimeter. It is measured in square units, representing the number of unit squares that can fit within the boundary of the figure. Unlike the perimeter, which is a one-dimensional measure of boundary length, the area is an integral property of the interior of the shape. For a region $R$ in the Cartesian plane $\\mathbb{R}^2$, the area is defined by the double integral $\\iint_R dA$.

## Key Terminology

To analyze planar figures effectively, one must understand several technical terms that categorize these objects and their properties:

| Term | Definition | Dimensionality |
| :--- | :--- | :--- |
| Polygon | A closed planar figure bounded by a finite number of straight line segments. | 2D |
| Vertex | The point where two edges of a polygon or sides of an angle meet. | 0D |
| Regular Polygon | A polygon that is both equilateral (all sides equal) and equiangular (all angles equal). | 2D |
| Convexity | A property where any line segment connecting two points inside the figure remains entirely within the figure. | Property |
| Apothem | The distance from the center of a regular polygon to the midpoint of one of its sides. | 1D |
| Transcendental | Relating to curves like the circle, where dimensions involve the irrational constant $\\pi$. | Property |
| Radian | The standard unit of angular measure, defined as the angle subtended at the center of a circle by an arc equal in length to the radius. | Scalar |

## Purpose

The calculation of perimeter and area serves as the bedrock for various scientific, engineering, and architectural disciplines. At its most fundamental level, the purpose of these calculations is to quantify spatial resources. In construction, the perimeter determines the quantity of fencing or molding required, while the area dictates the amount of flooring, paint, or thermal insulation needed for a surface.

From a theoretical perspective, the study of perimeter and area leads to the **isoperimetric inequality**, which states that for a given perimeter $P$, the geometric figure with the maximum possible area $A$ is a circle. This theorem bridges the gap between geometry and variational calculus, showing that symmetry is often the most efficient state for physical systems. Furthermore, these measures allow for the comparison of different shapes; by normalizing either the perimeter or the area, one can derive shape factors that determine the efficiency of heat dissipation, aerodynamic drag, or structural load distribution in mechanical engineering.

## Fundamental Properties

Planar figures adhere to several axiomatic properties that govern their behavior:

1. **Additivity:** If a figure $F$ is partitioned into two non-overlapping figures $F_1$ and $F_2$, then $Area(F) = Area(F_1) + Area(F_2)$. The perimeter, however, is not additive in the same way, as internal boundaries are subtracted from the sum of the perimeters of the sub-figures.
2. **Invariance under Rigid Motion:** The area and perimeter of a figure are invariant under translation, rotation, and reflection. If a shape is moved or flipped, its quantitative spatial properties remain constant.
3. **Scaling Law:** If a planar figure is scaled by a factor of $k$, its perimeter increases by $k$ (linear growth), while its area increases by $k^2$ (quadratic growth). This is a result of the fundamental dimensional analysis: $P \\propto L^1$ and $A \\propto L^2$.
4. **Jordan Curve Theorem:** Every simple closed curve divides the plane into exactly two regions: an interior (bounded) region and an exterior (unbounded) region. The perimeter is the length of this Jordan curve, and the area is the measure of the interior region.

## Types & Variations

Planar figures are categorized primarily by the nature of their boundaries—whether they consist of discrete linear segments (polygons) or continuous, curved lines (curvilinear figures).

### Polygons
Polygons are classified by their number of sides $n$. For any polygon, the perimeter is the sum of the side lengths. For a triangle with sides $a, b, c$, $P = a+b+c$. For a regular $n$-gon with side length $s$, $P = ns$. The area of a regular $n$-gon can be derived using the apothem $a$: $A = \\frac{1}{2}Pa$.

### Circles and Ellipses
Circles are defined as the locus of points equidistant from a center. The perimeter (circumference) is $P = 2\\pi r$, and the area is $A = \\pi r^2$. Ellipses are generalizations of circles with two foci. The area of an ellipse with semi-axes $a$ and $b$ is $A = \\pi ab$. However, the perimeter of an ellipse does not have a simple algebraic expression and requires an incomplete elliptic integral of the second kind: $P = 4aE(k)$, where $k$ is the eccentricity.

### Composite Figures
Composite figures are formed by the union or subtraction of elementary shapes. For example, a "frame" shape (a large rectangle with a smaller rectangle removed) has a total area equal to $A_{large} - A_{small}$, while the perimeter is the sum of all boundaries, including the internal void.

The following graph illustrates how the area of a square changes with respect to its side length $x$, following the quadratic function $f(x) = x^2$. This demonstrates the non-linear relationship between linear dimensions and planar coverage.

\`\`\`graph
x^2
\`\`\`

## How to Solve

Solving for the perimeter and area of complex planar figures requires a systematic, algorithmic approach.

### Step 1: Decomposition
If the figure is complex, decompose it into simpler, identifiable primitives such as triangles, rectangles, or sectors of circles. Use vertical or horizontal lines to slice the shape into manageable segments.

### Step 2: Identification of Constraints
List all known dimensions. Identify missing variables by using geometric relationships (e.g., the Pythagorean theorem $a^2 + b^2 = c^2$ for right triangles, or trigonometric ratios for arbitrary polygons).

### Step 3: Application of Formulas
Apply the relevant area and perimeter formulas. For general triangles, Heron's formula is invaluable when only side lengths are known: $A = \\sqrt{s(s-a)(s-b)(s-c)}$, where $s$ is the semi-perimeter $s = (a+b+c)/2$.

### Step 4: Verification via Calculus (Optional)
For figures bounded by functions $f(x)$ and $g(x)$ between $x=a$ and $x=b$, the area is given by the definite integral:
$$A = \\int_{a}^{b} |f(x) - g(x)| dx$$
Similarly, the arc length $L$ of a function $f(x)$ on $[a, b]$ is given by:
$$L = \\int_{a}^{b} \\sqrt{1 + [f'(x)]^2} dx$$
This analytical method allows for the calculation of perimeter and area for non-polygonal shapes where standard Euclidean formulas are insufficient.

The following interactive graph allows for the observation of how a rectangular area $A$ behaves when the length $x$ varies, while the width is held by a parameter $w$. This simulates the process of optimizing area under a constraint.

\`\`\`interactivegraph
w*x
params: w=1
range: w=1:10
\`\`\`

## Summary

The study of perimeter and area provides the mathematical framework for understanding the spatial properties of two-dimensional objects. Perimeter, defined as the total boundary length, and area, the measure of interior space, are linked through dimensional analysis and integral calculus. While simple polygons allow for straightforward summation and multiplication, complex curvilinear shapes necessitate the use of calculus to determine precise bounds. 

From the basic Euclidean axioms to the sophisticated elliptic integrals required for elliptical perimeters, these concepts are essential for the physical sciences. The scaling laws $P \\propto L^1$ and $A \\propto L^2$ demonstrate the rapid growth of space as dimensions increase, a principle that governs everything from the design of industrial components to the biological efficiency of cells. By mastering the decomposition of figures and the application of integral calculus, one can solve for the geometry of any closed planar system.`;export{e as default};