var e=`# Properties and Classifications of Triangles

## Definition

A triangle is a fundamental polygon in Euclidean geometry, defined as a closed, two-dimensional figure consisting of three vertices, three line segments (known as sides), and three interior angles. The segments connect the vertices such that the endpoints of each segment are vertices of the triangle. Formally, given three non-collinear points $A$, $B$, and $C$ in a plane, the triangle $\\triangle ABC$ is the union of the line segments $AB$, $BC$, and $CA$. The non-collinearity of these points is a mandatory condition; if the points were collinear, the resulting figure would be a degenerate triangle with an area of zero, effectively collapsing into a single line segment.

## Key Terminology

To analyze triangles with precision, several terms must be defined:
- **Vertices:** The points where two sides of a triangle meet, denoted as $A$, $B$, and $C$.
- **Sides:** The line segments $a$, $b$, and $c$ opposite to vertices $A$, $B$, and $C$ respectively.
- **Interior Angles:** The angles formed between two sides at each vertex, typically denoted as $\\alpha$, $\\beta$, and $\\gamma$ (or $\\angle A$, $\\angle B$, $\\angle C$).
- **Altitude:** A line segment through a vertex and perpendicular to (i.e., forming a right angle with) the opposite side (the base).
- **Median:** A line segment joining a vertex to the midpoint of the opposite side.
- **Angle Bisector:** A ray that divides an interior angle into two equal parts.
- **Perpendicular Bisector:** A line that passes through the midpoint of a side and is perpendicular to that side.
- **Circumcenter:** The intersection point of the three perpendicular bisectors of the sides of a triangle.
- **Incenter:** The intersection point of the three interior angle bisectors.

## Purpose

The study of triangles serves as the cornerstone of trigonometry and structural engineering. Because any polygon with $n$ sides can be decomposed into $n-2$ triangles, understanding the properties of the triangle allows for the analysis of more complex geometric shapes. Triangles are unique among polygons for their inherent rigidity; while a square can be deformed into a rhombus, a triangle’s shape is fixed once its side lengths are determined (as governed by the Side-Side-Side congruence postulate). This structural stability is utilized in architecture, bridge design, and truss construction to distribute loads effectively. Furthermore, the trigonometric relationships within triangles—such as the sine, cosine, and tangent functions—underpin modern physics, navigation, and digital signal processing.

## Fundamental Properties

The geometry of triangles is governed by several universal laws that apply regardless of the triangle's specific type.

### The Triangle Angle Sum Theorem
The sum of the interior angles of a triangle in Euclidean space is always exactly $180^\\circ$ (or $\\pi$ radians). If $\\angle A$, $\\angle B$, and $\\angle C$ are the interior angles, then:
$$\\alpha + \\beta + \\gamma = 180^\\circ$$
This can be proven by drawing a line parallel to one side of the triangle through the opposite vertex. By the alternate interior angle theorem, the angles around the vertex sum to $180^\\circ$.

### The Triangle Inequality Theorem
For any triangle with side lengths $a$, $b$, and $c$, the sum of the lengths of any two sides must be strictly greater than the length of the third side. This is expressed as:
$$a + b > c$$
$$a + c > b$$
$$b + c > a$$
If the sum of two sides equals the third, the triangle is degenerate. If it is less, the segments cannot meet to form a closed loop.

### The Pythagorean Theorem
In a right-angled triangle where $c$ is the hypotenuse (the side opposite the $90^\\circ$ angle) and $a$ and $b$ are the other two sides (legs), the relationship is:
$$a^2 + b^2 = c^2$$
This relationship is a specific case of the Law of Cosines: $c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)$, where $\\gamma = 90^\\circ$ and $\\cos(90^\\circ) = 0$.

### Area Calculation
The area $K$ of a triangle can be calculated using the base $b$ and height $h$:
$$K = \\frac{1}{2}bh$$
Alternatively, if the lengths of all sides are known, Heron's Formula is utilized:
$$K = \\sqrt{s(s-a)(s-b)(s-c)}$$
where $s$ is the semi-perimeter, defined as $s = \\frac{a+b+c}{2}$.

## Types & Variations

Triangles are categorized based on two primary criteria: side lengths and interior angles.

| Classification Type | Subtype | Defining Property |
| :--- | :--- | :--- |
| By Sides | Equilateral | All three sides are of equal length. |
| By Sides | Isosceles | Exactly two sides are of equal length. |
| By Sides | Scalene | All three sides have different lengths. |
| By Angles | Acute | All three angles are less than $90^\\circ$. |
| By Angles | Right | One angle is exactly $90^\\circ$. |
| By Angles | Obtuse | One angle is greater than $90^\\circ$. |

### Equilateral Triangles
Equilateral triangles are highly symmetric. All interior angles are $60^\\circ$. Their area can be simplified to:
$$K = \\frac{\\sqrt{3}}{4}a^2$$

### Isosceles Triangles
In an isosceles triangle, the angles opposite the equal sides are also equal. If $a=b$, then $\\alpha = \\beta$. This property is often used in geometric proofs involving reflectional symmetry.

### Right Triangles
The right triangle is the foundation of trigonometry. Using the side $x$ and a height defined by a function, we can model relationships. The graph below displays a standard parabolic curve that represents the boundary of a region; in geometric problems, such functions often define the vertices or area limits.

\`\`\`graph
x^2
\`\`\`

The function $f(x) = x^2$ is plotted above. In a triangle context, if $x$ represented the base and $x^2$ the height, the area $K(x) = \\frac{1}{2}(x)(x^2) = \\frac{1}{2}x^3$ would represent a cubic growth in area.

## How to Solve

Solving a triangle involves determining the unknown sides and angles given a partial set of information. We utilize specific laws depending on the available data:

### Law of Sines
Used when two angles and a side (AAS or ASA) or two sides and a non-included angle (SSA) are known:
$$\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma}$$

### Law of Cosines
Used when two sides and the included angle (SAS) or all three sides (SSS) are known:
$$c^2 = a^2 + b^2 - 2ab \\cos \\gamma$$
$$a^2 = b^2 + c^2 - 2bc \\cos \\alpha$$
$$b^2 = a^2 + c^2 - 2ac \\cos \\beta$$

### Step-by-Step Derivation Example: Solving SSS
1. Given sides $a=5$, $b=7$, $c=8$.
2. Calculate the largest angle (opposite the largest side, $c$) using the Law of Cosines:
   $$8^2 = 5^2 + 7^2 - 2(5)(7) \\cos \\gamma$$
   $$64 = 25 + 49 - 70 \\cos \\gamma$$
   $$64 = 74 - 70 \\cos \\gamma$$
   $$-10 = -70 \\cos \\gamma \\implies \\cos \\gamma = \\frac{1}{7}$$
   $$\\gamma = \\arccos\\left(\\frac{1}{7}\\right) \\approx 81.79^\\circ$$
3. Use the Law of Sines to find $\\alpha$:
   $$\\frac{5}{\\sin \\alpha} = \\frac{8}{\\sin 81.79^\\circ}$$
   $$\\sin \\alpha = \\frac{5 \\sin 81.79^\\circ}{8} \\approx 0.618$$
   $$\\alpha \\approx 38.21^\\circ$$
4. Calculate $\\beta$ via the sum theorem: $\\beta = 180^\\circ - (81.79^\\circ + 38.21^\\circ) = 60^\\circ$.

## Summary

Triangles are the simplest polygons, yet they possess a rich set of properties that enable the measurement of the physical world. By classifying triangles through side lengths and interior angles, mathematicians can apply tools like the Law of Sines and the Law of Cosines to solve for unknown dimensions. The stability and predictability of these shapes make them essential for everything from theoretical geometry to practical engineering. Whether analyzing an acute, right, or obtuse triangle, the fundamental constraints—the angle sum of $180^\\circ$ and the triangle inequality—ensure consistent behavior across all Euclidean spaces. Through the consistent application of trigonometry and algebraic derivation, the geometric properties of the triangle remain the most reliable framework for spatial analysis.`;export{e as default};