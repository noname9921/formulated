var e=`# Right Triangles and the Pythagorean Theorem

## Definition

A right triangle is a fundamental geometric figure defined as a polygon with three sides and three vertices, characterized by the inclusion of exactly one right angle. A right angle is an interior angle that measures exactly $90^\\circ$ or $\\pi/2$ radians. The side opposite the right angle is known as the hypotenuse, which is strictly the longest side of the triangle. The two sides that form the right angle are referred to as the legs or catheti.

The Pythagorean Theorem establishes a critical relationship between the lengths of the sides of a right triangle. If the legs are denoted as $a$ and $b$, and the hypotenuse is denoted as $c$, the theorem states that the sum of the squares of the lengths of the legs is equal to the square of the length of the hypotenuse. This is expressed mathematically as:
$$a^2+b^2=c^2$$
This relationship holds true in Euclidean geometry, which is the study of plane and solid figures on the basis of axioms and theorems.

## Key Terminology

To analyze right triangles effectively, one must be familiar with the following nomenclature:

| Term | Definition |
|---|---|
| Hypotenuse | The side opposite the right angle; always the longest side. |
| Cathetus (Leg) | Either of the two sides that form the right angle. |
| Pythagorean Triple | A set of three positive integers $(a,b,c)$ that satisfy $a^2+b^2=c^2$. |
| Euclidean Distance | The straight-line distance between two points $(x_1,y_1)$ and $(x_2,y_2)$, derived from the theorem as $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. |
| Altitude | A line segment through a vertex and perpendicular to the opposite side. |
| Projection | The segment of the hypotenuse created by the altitude drawn from the right angle to the hypotenuse. |

## Purpose

The Pythagorean Theorem serves as the bedrock for modern trigonometry, surveying, architecture, and physics. Its primary purpose is to allow for the calculation of unknown side lengths or distances within a two-dimensional plane. Without this theorem, the quantification of spatial relationships between coordinates would be significantly more complex.

In advanced mathematics, the theorem generalizes into the distance formula in higher-dimensional Euclidean spaces ($n$-dimensions). Furthermore, it provides the foundation for the trigonometric identity $\\sin^2(\\theta)+\\cos^2(\\theta)=1$. This identity arises by observing a right triangle inscribed in a unit circle, where the hypotenuse has a length of $1$. By applying the theorem, we define the relationship between the sine and cosine of an angle $\\theta$, linking algebra to circular functions.

## Fundamental Properties

The geometry of a right triangle is dictated by several invariant properties:

1. **Area Calculation:** The area $A$ of a right triangle is uniquely simple to calculate because the legs serve as both the base and the altitude. Thus, $A=\\frac{1}{2}ab$.
2. **Similarity:** If an altitude is drawn from the vertex of the right angle to the hypotenuse, it divides the original triangle into two smaller triangles that are both similar to the original triangle and to each other.
3. **Geometric Mean Theorem:** The altitude $h$ to the hypotenuse $c$ creates two segments $p$ and $q$ on the hypotenuse. The altitude is the geometric mean of these segments, such that $h^2=pq$. Furthermore, each leg is the geometric mean of the hypotenuse and the adjacent segment: $a^2=cq$ and $b^2=cp$.
4. **Circumcircle:** The midpoint of the hypotenuse of any right triangle is the center of the triangle's circumcircle. The distance from this midpoint to any of the three vertices is equal to half the length of the hypotenuse.

## Types & Variations

Right triangles are categorized based on their symmetry and internal angles.

### Isosceles Right Triangle
An isosceles right triangle features two legs of equal length ($a=b$). Consequently, the non-right angles are both exactly $45^\\circ$. The hypotenuse length is always $a\\sqrt{2}$. This is a specific case of the $45-45-90$ triangle.

### Scalene Right Triangle
A scalene right triangle has three sides of different lengths. A common sub-class is the $30-60-90$ triangle, where the side lengths are in the ratio $1:\\sqrt{3}:2$. These triangles appear frequently in trigonometry and the study of hexagonal structures.

### The Interactive Nature of the Theorem
The relationship between sides is not merely static; one can visualize how varying the legs $a$ and $b$ forces the hypotenuse $c$ to adjust to satisfy the constraint $c=\\sqrt{a^2+b^2}$.

\`\`\`interactivegraph
\\sqrt{a^2 + x^2}
params: a=3
range: a=1:10
\`\`\`

The graph above visualizes the hypotenuse $c$ as a function of one variable leg $x$, assuming the other leg $a$ is a constant. As $x$ increases, the growth of the hypotenuse follows a hyperbolic path, demonstrating that the hypotenuse must always be greater than or equal to any individual leg.

## How to Solve

Solving problems involving right triangles typically follows a standardized analytical procedure.

### Step 1: Identify Knowns and Unknowns
Determine which side is the hypotenuse ($c$) and which are the legs ($a, b$). If the triangle is rotated, locate the $90^\\circ$ symbol; the side not touching that angle is $c$.

### Step 2: Formulate the Equation
Apply the Pythagorean Theorem: $a^2+b^2=c^2$. If $c$ is missing, calculate the square root of the sum of the squares of the legs. If a leg is missing, rearrange to $a=\\sqrt{c^2-b^2}$.

### Step 3: Verify with Triples
Check if the values form a Pythagorean triple. Common sets include:
- $(3,4,5)$
- $(5,12,13)$
- $(8,15,17)$
- $(7,24,25)$

Multiplying these sets by any integer $k$ also produces a valid right triangle $(3k,4k,5k)$.

### Step 4: Trigonometric Context
If side lengths are unknown but an angle is provided, use the definitions of trigonometric ratios:
- $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}$
- $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$
- $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$

By combining these definitions with the Pythagorean theorem, one can solve for any missing component of a right triangle given only one side and one acute angle.

## Summary

The Pythagorean Theorem is the cornerstone of classical geometry and a vital tool in modern analytical practice. By establishing the rigid $a^2+b^2=c^2$ relationship, it provides a bridge between the physical world of distances and the abstract world of algebraic squares. From the simple property of area calculation to the complex requirements of vector calculus and coordinate geometry, the right triangle remains the most efficient lens through which we interpret spatial dimensions. Mastery of this theorem requires not just the ability to calculate side lengths, but an understanding of the underlying geometric constraints that force right triangles to behave with consistent, predictable harmony. Whether calculating the distance between pixels on a screen or the trajectory of an orbital body, the principles discussed herein remain essential.`;export{e as default};