var e=`# Polygons and Angles of Polygons

## Definition
A polygon is a closed plane figure defined by a finite sequence of straight line segments joined endpoint to endpoint. The term originates from the Greek words "poly" (many) and "gonia" (angle). By definition, a polygon must satisfy two primary constraints: it must be a closed loop, and all its sides must be straight lines (linear). If any side is a curve or the figure is left open, it does not meet the geometric definition of a polygon.

The segments forming the boundary are referred to as the sides of the polygon, and the points where two sides meet are called vertices. The interior of the polygon is the space enclosed by these sides. In Euclidean geometry, polygons are generally assumed to be simple, meaning they do not intersect themselves. A polygon with $n$ sides is designated an $n$-gon.

## Key Terminology
To analyze polygons effectively, one must distinguish between various components and characteristics that define their structure:

- **Vertex:** The junction point where two adjacent sides of a polygon meet. A polygon with $n$ sides has exactly $n$ vertices.
- **Interior Angle:** The angle formed inside the polygon at each vertex by two adjacent sides.
- **Exterior Angle:** The angle formed by one side of a polygon and the extension of an adjacent side. For any vertex, the interior angle and exterior angle are supplementary, summing to $180^\\circ$.
- **Diagonal:** A line segment connecting two non-adjacent vertices. 
- **Convex Polygon:** A polygon where all interior angles are less than $180^\\circ$ and all diagonals lie entirely within the interior of the polygon.
- **Concave Polygon:** A polygon with at least one interior angle greater than $180^\\circ$ (a reflex angle), causing at least one diagonal to lie outside the figure.
- **Regular Polygon:** A polygon that is both equilateral (all sides equal in length) and equiangular (all interior angles equal in measure).

## Purpose
The study of polygons serves as the foundation for trigonometry, architecture, computer graphics, and spatial analysis. By understanding the angular relationships within polygons, mathematicians and engineers can calculate areas, determine structural stability in engineering, and optimize spatial packing. 

Historically, the study of polygons allowed ancient civilizations to approximate the value of $\\pi$ by inscribing and circumscribing polygons within circles (the method of exhaustion used by Archimedes). In modern applications, such as computer-aided design (CAD) and game development, complex surfaces are decomposed into millions of tiny triangles—a process known as triangulation—to render three-dimensional models. Mastering the properties of polygons provides the mathematical basis for these computational abstractions.

## Fundamental Properties
The most critical property of any convex $n$-gon is the relationship between its number of sides and the sum of its internal angles. 

### Sum of Interior Angles
Any convex polygon with $n$ sides can be divided into $n-2$ triangles by drawing all possible diagonals from a single vertex. Since the sum of the interior angles of a triangle is $180^\\circ$, the sum of the interior angles of an $n$-gon is given by the formula:
$$S_i = (n-2) \\times 180^\\circ$$
This formula holds for all convex polygons, regardless of whether they are regular or irregular.

### Sum of Exterior Angles
A remarkable property of convex polygons is that the sum of the exterior angles, taking one at each vertex, is always constant, regardless of the number of sides. By considering the sum of all interior and exterior angle pairs ($n \\times 180^\\circ$) and subtracting the sum of the interior angles ($(n-2) \\times 180^\\circ$), we arrive at:
$$S_e = n \\times 180^\\circ - (n-2) \\times 180^\\circ = 360^\\circ$$
Thus, for any convex polygon, the sum of exterior angles is $360^\\circ$.

### Individual Interior and Exterior Angles (Regular Polygons)
For a regular $n$-gon, all interior angles are congruent, and all exterior angles are congruent.
- Interior angle measure: $A_i = \\frac{(n-2) \\times 180^\\circ}{n}$
- Exterior angle measure: $A_e = \\frac{360^\\circ}{n}$

## Types & Variations
Polygons are categorized based on their properties, side counts, and symmetry.

| Name | Number of Sides ($n$) | Interior Angle Sum |
| :--- | :--- | :--- |
| Triangle | 3 | $180^\\circ$ |
| Quadrilateral | 4 | $360^\\circ$ |
| Pentagon | 5 | $540^\\circ$ |
| Hexagon | 6 | $720^\\circ$ |
| Heptagon | 7 | $900^\\circ$ |
| Octagon | 8 | $1080^\\circ$ |
| Nonagon | 9 | $1260^\\circ$ |
| Decagon | 10 | $1440^\\circ$ |

Beyond the basic classification by side count, polygons are classified by their constraints:
1. **Equilateral Polygons:** All sides have the same length. Note that equilateral polygons are not necessarily regular (e.g., a rhombus is equilateral but not equiangular).
2. **Equiangular Polygons:** All interior angles are equal. A rectangle is an equiangular quadrilateral but not necessarily equilateral.
3. **Cyclic Polygons:** Polygons whose vertices all lie on a single circle (the circumcircle).
4. **Tangential Polygons:** Polygons whose sides are all tangent to a single circle (the incircle).

## How to Solve
Solving problems involving polygons requires systematic application of the geometric theorems derived above.

### Step 1: Identify the Unknowns
Determine whether the problem asks for the number of sides $n$, the sum of angles, or the measure of a single angle.

### Step 2: Apply the Relevant Formula
- If given the sum of interior angles, solve $S = (n-2) \\times 180$ for $n$.
- If given a single interior angle of a regular polygon, use $\\theta = \\frac{(n-2) \\times 180}{n}$. 
- Alternatively, use the exterior angle: solve $180 - \\theta = \\frac{360}{n}$. This is often algebraically simpler.

### Step 3: Example Calculation
Problem: How many sides does a regular polygon have if each interior angle is $144^\\circ$?
1. Calculate the exterior angle: $180^\\circ - 144^\\circ = 36^\\circ$.
2. Use the exterior angle formula: $36^\\circ = \\frac{360^\\circ}{n}$.
3. Solve for $n$: $n = \\frac{360}{36} = 10$.
4. Conclusion: The polygon is a regular decagon.

### Analytical Framework for Complex Polygons
For concave or irregular polygons where interior angles are missing, we use the "Sum Property." If a polygon has $n$ sides, the sum of all interior angles must be $(n-2) \\times 180^\\circ$. By summing the known angles and subtracting this from the total sum, the unknown angle can be found.

For coordinate geometry applications, the area of a non-self-intersecting polygon with vertices $(x_1, y_1), (x_2, y_2), ..., (x_n, y_n)$ is calculated using the Shoelace Formula:
$$Area = \\frac{1}{2} | \\sum_{i=1}^{n-1} (x_i y_{i+1} - x_{i+1} y_i) + (x_n y_1 - x_1 y_n) |$$
This demonstrates that polygons are not merely shapes but mathematical sets defined by vertex vectors.

## Summary
Polygons serve as the fundamental building blocks of geometry. By defining a polygon through the number of sides $n$, we unlock a deterministic set of properties governing interior and exterior angles. The sum of interior angles, $S = (n-2) \\times 180^\\circ$, provides a reliable constraint for verifying geometric models, while the fixed exterior angle sum of $360^\\circ$ offers a shortcut for analyzing regular polygons. 

The distinction between convex and concave shapes, as well as the transition from equilateral to equiangular and finally to regular forms, highlights the interplay between symmetry and geometric constraints. As demonstrated, these principles are not limited to theoretical proofs but are essential for solving practical problems in fields ranging from simple surveying to complex architectural drafting and computational modeling. Proficiency in these definitions and formulas allows for the deconstruction of any plane figure into its foundational components, enabling precise calculation and structural understanding.`;export{e as default};