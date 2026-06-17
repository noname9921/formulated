var e=`# Properties and Classifications of Triangles

## Definition

A triangle is a fundamental polygon in Euclidean geometry characterized by having exactly three vertices and three sides. These sides are line segments that connect at points called vertices, forming three internal angles. By definition, the sum of these three internal angles in a planar (Euclidean) space is always equal to $\\pi$ radians or $180^\\circ$. Formally, if a triangle has vertices $A$, $B$, and $C$, it is denoted as $\\triangle ABC$. The sides opposite these vertices are typically labeled as $a$, $b$, and $c$, where side $a$ is opposite vertex $A$, side $b$ is opposite vertex $B$, and side $c$ is opposite vertex $C$. Triangles are the simplest possible polygons; any polygon with $n$ sides can be decomposed into $n-2$ triangles, making them the primitive building blocks of all polygonal shapes and computational geometry.

## Key Terminology

To understand the mechanics of triangles, one must master specific terminology that describes their internal structure and spatial relationships:

*   **Vertex:** The point where two sides of a triangle meet. Every triangle has three vertices.
*   **Side:** The line segment connecting two vertices. 
*   **Interior Angle:** The angle formed inside the triangle at each vertex. The sum of these is always $180^\\circ$.
*   **Exterior Angle:** The angle formed by one side of a triangle and the extension of an adjacent side. By the Exterior Angle Theorem, an exterior angle of a triangle is equal to the sum of the two opposite interior angles.
*   **Altitude:** A line segment through a vertex and perpendicular to the opposite side (or its extension). The point where all three altitudes intersect is known as the **orthocenter**.
*   **Median:** A line segment joining a vertex to the midpoint of the opposite side. The three medians of a triangle intersect at the **centroid**, which is the triangle's geometric center of mass.
*   **Angle Bisector:** A line segment that divides an interior angle into two congruent angles. The three angle bisectors intersect at the **incenter**, which is the center of the triangle's inscribed circle (incircle).
*   **Perpendicular Bisector:** A line that passes through the midpoint of a side at a $90^\\circ$ angle. The intersection of these lines is the **circumcenter**, the center of the circle that passes through all three vertices (circumcircle).

## Purpose

The study of triangles serves several critical purposes in mathematics, engineering, and the physical sciences. Primarily, triangles possess "structural rigidity." Unlike a square or a rhombus, which can be deformed into a parallelogram by applying force to the vertices, a triangle’s shape is fixed once the lengths of its three sides are determined. This principle, known as the SSS (Side-Side-Side) Congruence Postulate, makes the triangle the most stable geometric form, utilized extensively in architecture, bridge design, and aerospace engineering. 

Furthermore, triangles serve as the foundation for trigonometry. By defining ratios between sides based on interior angles (sine, cosine, and tangent), triangles allow for the calculation of distances and heights that cannot be measured directly. This application is foundational to surveying, global positioning systems (GPS), and computer graphics, where complex 3D meshes are composed entirely of millions of tiny triangular polygons to render surfaces.

## Fundamental Properties

Triangles are governed by a set of rigid mathematical laws. Understanding these is essential for solving problems involving geometric proofs or spatial analysis.

### Triangle Inequality Theorem
The Triangle Inequality Theorem states that the sum of the lengths of any two sides of a triangle must be strictly greater than the length of the third side. Mathematically, for sides $a, b, c$:
$a + b > c$
$a + c > b$
$b + c > a$
If the sum of two sides equals the third, the vertices are collinear, resulting in a "degenerate triangle," which is essentially a line segment with zero area.

### Area Calculation
The area $A$ of a triangle can be calculated using the base $b$ and height $h$:
$A = \\frac{1}{2} \\times b \\times h$
When side lengths are known but the height is not, Heron's Formula is employed. First, calculate the semi-perimeter $s$:
$s = \\frac{a + b + c}{2}$
Then, the area is:
$A = \\sqrt{s(s-a)(s-b)(s-c)}$

### Law of Sines and Law of Cosines
These laws relate the sides and angles of any triangle:
1. **Law of Sines:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
2. **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab \\cos C$
The Law of Cosines is a generalized form of the Pythagorean theorem ($a^2 + b^2 = c^2$), which only applies when $\\angle C = 90^\\circ$ (as $\\cos 90^\\circ = 0$).

## Types & Variations

Triangles are classified based on the properties of their sides and the magnitude of their internal angles.

| Classification Type | Sub-type | Defining Property |
| :--- | :--- | :--- |
| By Sides | Equilateral | All three sides are equal in length; all angles are $60^\\circ$. |
| By Sides | Isosceles | Exactly two sides are equal; the angles opposite those sides are equal. |
| By Sides | Scalene | All three sides have different lengths; all angles are distinct. |
| By Angles | Acute | All three internal angles are less than $90^\\circ$. |
| By Angles | Right | One angle is exactly $90^\\circ$. |
| By Angles | Obtuse | One angle is greater than $90^\\circ$. |

### Interdependency of Classifications
It is important to note that these classifications are not mutually exclusive. For instance, an equilateral triangle is by definition also an acute triangle. A right triangle can be either scalene or isosceles (if the two legs are of equal length).

## How to Solve

Solving a triangle involves finding the missing side lengths or internal angles when partial information is provided. This is usually framed as "solving for the remaining three parts" given three known parts.

### Step 1: Identify Known Information
Determine if you have:
*   SSS (Three sides)
*   SAS (Two sides and the included angle)
*   ASA (Two angles and the included side)
*   AAS (Two angles and a non-included side)
*   SSA (Two sides and a non-included angle — this is the "Ambiguous Case")

### Step 2: Select the Correct Tool
*   If you have a right triangle, use the Pythagorean theorem and basic trigonometric ratios ($\\sin \\theta = \\text{opposite}/\\text{hypotenuse}$, etc.).
*   For non-right triangles, use the Law of Sines if you have an angle and its opposite side.
*   Use the Law of Cosines if you have all three sides (to find an angle) or two sides and the included angle (to find the third side).

### Analytical Framework: The Ambiguous Case (SSA)
When given two sides and a non-included angle, it is possible that no triangle exists, one triangle exists, or two different triangles satisfy the conditions. 
1. If the given angle is obtuse, the side opposite the angle must be the longest. If it is not, no triangle exists.
2. If the given angle is acute, compare the length of the side opposite the angle ($a$) to the product of the adjacent side ($b$) and $\\sin(\\text{Angle } A)$.
   - If $a < b \\sin A$, no triangle exists.
   - If $a = b \\sin A$, exactly one right triangle exists.
   - If $b \\sin A < a < b$, two triangles exist.
   - If $a \\geq b$, exactly one triangle exists.

## Summary

Triangles are the fundamental components of geometry, acting as the bridge between simple arithmetic and complex trigonometric analysis. By mastering the classification of triangles by sides (equilateral, isosceles, scalene) and angles (acute, right, obtuse), one gains the ability to describe the physical world in terms of spatial relationships. The Triangle Inequality Theorem ensures structural consistency, while Heron's formula and the Laws of Sines and Cosines provide a robust computational framework for resolving unknown dimensions. Whether in the context of theoretical proofs or practical applications like structural engineering, the triangle remains the most efficient and versatile shape in the mathematical canon. Through rigorous application of these principles, any triangular configuration can be fully resolved, analyzed, and understood within a Cartesian coordinate system.`;export{e as default};