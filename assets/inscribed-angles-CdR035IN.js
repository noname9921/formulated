var e=`# Inscribed Angles and Cyclic Quadrilaterals

## Definition

An inscribed angle is an angle formed by two chords in a circle that have a common endpoint on the circle. The common endpoint is known as the vertex of the angle, while the other two endpoints define an arc of the circle known as the intercepted arc. Mathematically, if a circle has a center $O$ and points $A$, $B$, and $C$ lie on its circumference, the angle $\\angle ABC$ is an inscribed angle intercepting the arc $AC$.

A cyclic quadrilateral, also known as an inscribed quadrilateral, is a polygon with four sides whose vertices all lie on a single circle. The circle upon which these vertices lie is called the circumcircle or circumscribed circle of the quadrilateral. The condition that all four vertices must lie on the same circle imposes strict geometric constraints on the internal angles of the quadrilateral, which are central to Euclidean geometry.

## Key Terminology

To analyze these shapes, one must be familiar with the following technical terms:

| Term | Definition |
|---|---|
| Chord | A line segment whose endpoints both lie on the circle. |
| Arc | A portion of the circumference of a circle. |
| Intercepted Arc | The part of the circle that lies in the interior of an inscribed angle. |
| Central Angle | An angle whose vertex is the center of the circle, subtending an arc. |
| Circumcircle | The unique circle passing through all vertices of a cyclic quadrilateral. |
| Opposite Angles | Angles of a quadrilateral that do not share a common side. |
| Cyclic Points | A set of points that lie on the same circle. |

## Purpose

The study of inscribed angles and cyclic quadrilaterals is essential for understanding the symmetry and structural integrity of circular geometry. Inscribed angles provide the foundational bridge between circular arcs and angular measurement. Without the Inscribed Angle Theorem, it would be impossible to relate the degree measure of an arc to the angles formed by chords within the circle.

Cyclic quadrilaterals serve a broader purpose in both theoretical and applied mathematics. In engineering, they define stable configurations for circular frameworks. In pure mathematics, they are the basis for Ptolemy’s Theorem, which relates the sides and diagonals of these quadrilaterals, providing a powerful tool for calculating lengths in geometric proofs. Furthermore, these shapes appear frequently in coordinate geometry, where determining if four points are concyclic is a fundamental task for spatial analysis.

## Fundamental Properties

### The Inscribed Angle Theorem
The most critical property in this field is the Inscribed Angle Theorem, which states that the measure of an inscribed angle is exactly half the measure of its intercepted arc. If $\\theta$ is the measure of the inscribed angle and $\\alpha$ is the measure of the central angle subtending the same arc, then:
$$\\theta = \\frac{1}{2}\\alpha$$
Equivalently, if $m(arc)$ is the measure of the intercepted arc, then $\\theta = \\frac{1}{2}m(arc)$.

### Properties of Cyclic Quadrilaterals
1. **Supplementary Opposite Angles**: The sum of the opposite angles in a cyclic quadrilateral is always $180^\\circ$. If the vertices are $A, B, C, D$ in order, then $\\angle A + \\angle C = 180^\\circ$ and $\\angle B + \\angle D = 180^\\circ$.
2. **Exterior Angle Theorem**: The exterior angle formed by extending one side of a cyclic quadrilateral is equal to the interior opposite angle.
3. **Ptolemy's Theorem**: For a cyclic quadrilateral with sides $a, b, c, d$ and diagonals $p$ and $q$, the product of the diagonals is equal to the sum of the products of the opposite sides:
$$pq = ac + bd$$

## Types & Variations

There are several variations of these geometric configurations based on the positioning of the chords and the vertices.

### Inscribed Angles
- **Angles intercepting a semicircle**: Any inscribed angle that intercepts a diameter of the circle is always a right angle ($90^\\circ$). This is a direct corollary of the Inscribed Angle Theorem, as a semicircle measures $180^\\circ$.
- **Angles subtending the same arc**: Any two inscribed angles that subtend the same arc are congruent. This property is crucial for proving that certain points lie on a circle, a technique known as the "Converse of the Inscribed Angle Theorem."

### Cyclic Quadrilaterals
- **Cyclic Trapezoids**: An isosceles trapezoid is always cyclic. Because the non-parallel sides are equal, the base angles are equal, which forces the opposite angles to sum to $180^\\circ$.
- **Cyclic Rectangles**: Every rectangle is cyclic because the diagonals are equal and bisect each other, serving as diameters of the circumcircle.
- **Cyclic Kites**: A kite is cyclic if and only if it has two opposite right angles.

## How to Solve

To solve problems involving inscribed angles and cyclic quadrilaterals, one should follow a systematic analytical framework.

### Step 1: Identify the Circle and Chords
Always locate the center of the circle if provided. If not, look for points that appear to be equidistant from a common center. Identify which angles are inscribed and which arcs they intercept.

### Step 2: Apply the Inscribed Angle Theorem
Whenever you encounter an angle $\\angle ABC$ with $A, B, C$ on the circle, immediately relate it to the measure of arc $AC$. If the center is $O$, identify the central angle $\\angle AOC$ and remember that $\\angle ABC = \\frac{1}{2}\\angle AOC$.

### Step 3: Check for Concyclic Points
If you are asked to prove a quadrilateral is cyclic, verify one of the following:
- Are the opposite angles supplementary?
- Are the exterior angles equal to the opposite interior angles?
- Do two vertices subtend the same angle at the other two vertices? (i.e., if $\\angle ADB = \\angle ACB$, then $A, B, C, D$ must lie on a circle).

### Step 4: Utilize Ptolemy's Theorem
For problems involving side lengths or diagonal lengths in a known cyclic quadrilateral, set up the equation $pq = ac + bd$. This is often the fastest way to solve for a missing side when three sides and both diagonals are known.

### Analytical Example
Consider a circle where points $A, B, C, D$ form a cyclic quadrilateral. Suppose $\\angle ABC = 110^\\circ$. By the property of supplementary opposite angles, $\\angle ADC = 180^\\circ - 110^\\circ = 70^\\circ$. If you are further told that chord $AD = CD$, then $\\triangle ADC$ is an isosceles triangle, allowing you to calculate the base angles $\\angle DAC$ and $\\angle DCA$ using the remaining sum of $180^\\circ - 70^\\circ = 110^\\circ$. Each base angle would be $55^\\circ$.

## Summary

Inscribed angles and cyclic quadrilaterals represent the intersection of angular measurement and rigid polygon geometry within circular boundaries. The Inscribed Angle Theorem acts as the primary tool for translating arc measures into angular values, while the property of supplementary opposite angles provides the defining characteristic of cyclic quadrilaterals. Through the application of these theorems, particularly Ptolemy’s identity, complex problems involving lengths and angles can be reduced to algebraic expressions. Mastery of these concepts allows for the rigorous analysis of circular structures, ensuring accuracy in both theoretical geometric proofs and practical applications where circular symmetry is a requirement. By understanding that cyclic quadrilaterals are constrained by their circumcircle, one can effectively navigate the relationships between side lengths, diagonals, and interior angles.`;export{e as default};