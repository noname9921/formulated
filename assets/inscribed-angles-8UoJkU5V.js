var e=`# Inscribed Angles and Cyclic Quadrilaterals

## Definition

An inscribed angle is an angle formed by two chords in a circle that have a common endpoint on the circle. The common endpoint is known as the vertex of the angle, while the other two endpoints define an intercepted arc. A circle is said to circumscribe a polygon if all vertices of the polygon lie on the circle's circumference. A polygon whose vertices all lie on a single circle is called a cyclic polygon. Consequently, a cyclic quadrilateral is a four-sided polygon whose vertices all lie on the circumference of a single circle, often referred to as a concyclic quadrilateral.

The study of these geometric entities relies heavily on the relationship between the measure of central angles and inscribed angles. If an inscribed angle intercepts an arc, the measure of that angle is exactly half the measure of the central angle that intercepts the same arc. This foundational principle dictates the behavior of angular relationships within circles.

## Key Terminology

Understanding the vocabulary of circular geometry is essential for the manipulation of inscribed angles and cyclic quadrilaterals:

| Term | Definition |
| :--- | :--- |
| Chord | A line segment whose endpoints both lie on the circle. |
| Arc | A portion of the circumference of a circle. |
| Central Angle | An angle whose vertex is the center of the circle. |
| Inscribed Angle | An angle with its vertex on the circle and sides as chords. |
| Intercepted Arc | The part of the circle that lies in the interior of an angle. |
| Cyclic Quadrilateral | A quadrilateral whose four vertices are concyclic. |
| Supplementary Angles | Two angles whose measures sum to $180^\\circ$ or $\\pi$ radians. |
| Circumcircle | The unique circle passing through all vertices of a polygon. |

## Purpose

The primary purpose of studying inscribed angles and cyclic quadrilaterals is to provide a rigorous framework for solving complex problems in Euclidean geometry and trigonometry. These concepts allow mathematicians and engineers to relate distances, angles, and areas within confined circular spaces.

Inscribed angles provide the link between circular arcs and angular measure, which is vital in navigation, mechanical design (such as gear ratios and circular linkages), and architectural planning. Cyclic quadrilaterals are particularly significant because they possess unique properties that do not apply to general quadrilaterals, such as Ptolemy’s Theorem, which relates the products of the diagonals to the sums of the products of opposite sides. By identifying a cyclic quadrilateral, one can immediately invoke theorems regarding angle sums and side lengths, simplifying what would otherwise be intractable geometric proofs.

## Fundamental Properties

### The Inscribed Angle Theorem
The Inscribed Angle Theorem states that the measure of an inscribed angle is half the measure of its intercepted arc. If $\\theta$ is the measure of the inscribed angle and $S$ is the measure of the central angle subtending the same arc, then $\\theta = \\frac{1}{2}S$. A corollary to this theorem is that inscribed angles that intercept the same arc are congruent, regardless of where their vertices are positioned on the major arc. Furthermore, an angle inscribed in a semicircle is always a right angle, as it intercepts an arc of $180^\\circ$.

### Properties of Cyclic Quadrilaterals
A quadrilateral is cyclic if and only if its opposite angles are supplementary. If a quadrilateral $ABCD$ is cyclic, then:
$$\\angle A + \\angle C = 180^\\circ$$
$$\\angle B + \\angle D = 180^\\circ$$

This property is derived directly from the Inscribed Angle Theorem. Each angle of the quadrilateral is an inscribed angle subtending an arc; the two opposite angles subtend the two arcs that together make up the full circle ($360^\\circ$). Since the inscribed angle is half the measure of its intercepted arc, the sum of two opposite inscribed angles is half of $360^\\circ$, which is $180^\\circ$.

### Ptolemy’s Theorem
For a cyclic quadrilateral with sides $a, b, c, d$ and diagonals $p$ and $q$, Ptolemy’s Theorem states that the product of the diagonals is equal to the sum of the products of the opposite sides:
$$pq = ac + bd$$

This elegant identity provides a powerful tool for calculating diagonal lengths when side lengths are known, or for proving that a quadrilateral is cyclic if the relationship holds.

## Types & Variations

Cyclic quadrilaterals can be categorized based on their symmetry and side properties, though they all share the fundamental cyclic condition.

1. **Cyclic Trapezoids:** If an isosceles trapezoid is cyclic, it satisfies the supplementary angle condition. Because the base angles of an isosceles trapezoid are equal, the opposite angles must also be supplementary, fulfilling the cyclic criteria automatically.
2. **Cyclic Rectangles:** Every rectangle is cyclic. Since the interior angles of a rectangle are $90^\\circ$, opposite angles sum to $180^\\circ$. The circumcircle of a rectangle has a diameter equal to the length of the rectangle's diagonal.
3. **Cyclic Kites:** A kite is cyclic if and only if it has two opposite right angles. If a kite has two angles of $90^\\circ$ at opposite vertices, the remaining two angles must sum to $180^\\circ$, making it cyclic.

The following interactive graph allows for the observation of how moving a vertex $D$ along the circumference of a circle affects the interior angles of a cyclic quadrilateral $ABCD$. Note how the angles $\\angle B$ and $\\angle D$ remain supplementary as $D$ moves.

\`\`\`interactivegraph
\\sin(ax) + b
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

In the context of the above, consider a simplified model where the x-axis represents the path of a point on the circle. The expression $\\sin(ax) + b$ demonstrates the periodic nature of points distributed along a curve, similar to how vertices are spaced along a circumcircle. By adjusting $a$ and $b$, one can observe how the transformation of coordinates mimics the shifting of points on a circular arc.

## How to Solve

Solving problems involving cyclic quadrilaterals requires a systematic approach, often involving the identification of congruent angles and the application of trigonometric laws.

### Step 1: Identifying Cyclic Properties
Examine the given figure for evidence of concyclic vertices. If you are given a circle with points on its boundary, start by identifying intercepted arcs. If you are given a quadrilateral, check for the supplementary angle property: if the sum of opposite angles equals $180^\\circ$, the quadrilateral is cyclic.

### Step 2: Applying the Inscribed Angle Theorem
Once the circular nature is confirmed, identify all angles subtending the same arc. These angles are congruent. This is a common strategy in competition geometry:
1. Locate an arc.
2. Find all inscribed angles that terminate at the endpoints of this arc.
3. Mark these angles as equal in your diagram.

### Step 3: Utilizing Ptolemy’s Theorem
If the problem involves diagonal lengths, list the sides as $a, b, c, d$ and diagonals as $p, q$. Set up the equation $pq = ac + bd$. This is particularly useful when three sides are given, or when looking to establish a ratio between diagonals.

### Step 4: Applying Law of Cosines
In non-right-angled scenarios, utilize the Law of Cosines within the triangles formed by the diagonals. For a cyclic quadrilateral, if $\\angle B = \\theta$, then $\\angle D = 180^\\circ - \\theta$. Since $\\cos(180^\\circ - \\theta) = -\\cos(\\theta)$, the Law of Cosines on triangles $ABC$ and $ADC$ yields:
$$AC^2 = a^2 + b^2 - 2ab\\cos(\\theta)$$
$$AC^2 = c^2 + d^2 - 2cd\\cos(180^\\circ - \\theta) = c^2 + d^2 + 2cd\\cos(\\theta)$$

Equating these two expressions allows for the solution of missing side lengths or angles without needing the circumradius directly.

## Summary

The study of inscribed angles and cyclic quadrilaterals represents a cornerstone of classical geometry. The Inscribed Angle Theorem provides the bridge between the arc measure and angular position, while the properties of cyclic quadrilaterals—specifically the supplementary nature of opposite angles—provide the constraints necessary to solve for unknown variables in complex polygons. 

Key takeaways include:
- Inscribed angles subtending the same arc are always congruent.
- An angle inscribed in a semicircle is a right angle.
- A quadrilateral is cyclic if and only if opposite angles sum to $180^\\circ$.
- Ptolemy’s Theorem defines the relationship between the diagonals and sides of any cyclic quadrilateral.

By mastering these relationships, one gains the ability to deconstruct complex geometric configurations into manageable, solvable components. Whether through the application of trigonometric laws like the Law of Cosines or the direct use of circle theorems, these principles remain essential for both theoretical mathematics and practical applications in engineering and design. The consistency of these theorems ensures that once the cyclic property is identified, the underlying geometry of the shape is fully determined by the interactions between its vertices and the circle that contains them.`;export{e as default};