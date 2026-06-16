var e=`# Right Triangles and the Pythagorean Theorem

## Definition

A right triangle is a fundamental geometric polygon characterized by having exactly one interior angle measuring $90^\\circ$, known as a right angle. The sides of a right triangle possess unique nomenclature: the two sides that form the right angle are referred to as the legs (or catheti), while the side opposite the right angle is termed the hypotenuse.

The Pythagorean theorem serves as the foundational relationship between the side lengths of any right triangle in Euclidean space. It states that the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the two legs. If the lengths of the two legs are denoted as $a$ and $b$, and the length of the hypotenuse is denoted as $c$, the theorem is expressed by the algebraic equation:
$$a^2+b^2=c^2$$

This theorem holds strictly in flat (Euclidean) geometry. In non-Euclidean geometries, such as spherical or hyperbolic space, this relationship does not hold, which underscores the theorem's inherent reliance on the parallel postulate.

## Key Terminology

To analyze right triangles effectively, one must understand the following technical terms:

* **Hypotenuse:** The longest side of a right triangle, situated directly across from the right angle. It represents the chord of the circle if the triangle were inscribed in one.
* **Legs (Catheti):** The two sides adjacent to the right angle. In trigonometric contexts, they may be labeled relative to a specific interior angle as the "opposite" or "adjacent" side.
* **Pythagorean Triple:** A set of three positive integers $(a, b, c)$ that satisfy the equation $a^2+b^2=c^2$. Common examples include $(3, 4, 5)$ and $(5, 12, 13)$.
* **Euclidean Metric:** The distance function defined as $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, which is essentially a coordinate-geometry application of the Pythagorean theorem.
* **Angle of Elevation/Depression:** Geometric angles used in applications where the hypotenuse represents a line of sight and the legs represent horizontal and vertical displacements.

## Purpose

The Pythagorean theorem is not merely a geometric curiosity; it is a primary tool for quantification in physics, engineering, and architecture. Its core purpose is to provide a reliable method to determine the unknown length of one side of a right triangle when the lengths of the other two sides are known.

Furthermore, the theorem serves as a fundamental building block for the distance formula in coordinate geometry. By defining the distance between two points in a Cartesian plane as the hypotenuse of a right triangle formed by the difference in their $x$ and $y$ coordinates, the theorem allows us to calculate lengths in multidimensional space. In calculus and vector analysis, this principle extends to the Pythagorean identity in trigonometry: $\\sin^2(\\theta)+\\cos^2(\\theta)=1$. This relationship is essentially the Pythagorean theorem applied to a unit circle, where the radius (the hypotenuse) is 1.

## Fundamental Properties

The properties of a right triangle are governed by the interaction between its interior angles and side ratios. Because the sum of the interior angles of any triangle is $180^\\circ$, and one angle is fixed at $90^\\circ$, the remaining two angles must sum to exactly $90^\\circ$, making them complementary.

The theorem leads directly to the derivation of the distance formula in a two-dimensional Cartesian plane. If points $P_1=(x_1, y_1)$ and $P_2=(x_2, y_2)$ are connected, the horizontal distance is $\\Delta x=|x_2-x_1|$ and the vertical distance is $\\Delta y=|y_2-y_1|$. The Euclidean distance $d$ is:
$$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
This is the direct manifestation of $a^2+b^2=c^2$.

The graph below plots $f(x)=\\sqrt{c^2-x^2}$ for $c=5$. This represents the set of all possible leg lengths $(x, f(x))$ that maintain a constant hypotenuse length of 5. As $x$ (one leg) increases, $f(x)$ (the other leg) must decrease to maintain the geometric integrity of the right triangle.

\`\`\`graph
\\sqrt{25-x^2}
-\\sqrt{25-x^2}
\`\`\`

## Types & Variations

Right triangles are generally categorized by the relationship between their legs and their angles:

1. **Isosceles Right Triangle:** A special case where the two legs are of equal length ($a=b$). Consequently, the non-right angles are each $45^\\circ$. The side ratios are $1:1:\\sqrt{2}$. The hypotenuse $c$ is given by $c=a\\sqrt{2}$.
2. **$30-60-90$ Triangle:** A triangle with interior angles of $30^\\circ, 60^\\circ,$ and $90^\\circ$. The side lengths follow a strict ratio of $1:\\sqrt{3}:2$. If the shortest leg is $x$, the longer leg is $x\\sqrt{3}$ and the hypotenuse is $2x$.
3. **General Right Triangles:** Triangles where the side lengths are arbitrary, provided they satisfy the theorem.

We can explore the variability of a right triangle's leg lengths using an interactive graph. By adjusting the legs $a$ and $b$, we observe how the hypotenuse $c$ responds to maintain the condition $c=\\sqrt{a^2+b^2}$.

\`\`\`interactivegraph
\\sqrt{a^2+b^2}
params: a=3, b=4
range: a=1:10, b=1:10
\`\`\`

## How to Solve

Solving problems involving right triangles requires a systematic approach. The methodology depends on the variables provided.

### Scenario 1: Finding the Hypotenuse
If two legs $a$ and $b$ are provided, follow these steps:
1. Square the length of leg $a$: $a^2$.
2. Square the length of leg $b$: $b^2$.
3. Sum the results: $S = a^2+b^2$.
4. Calculate the square root of the sum: $c = \\sqrt{S}$.

### Scenario 2: Finding a Missing Leg
If the hypotenuse $c$ and one leg $a$ are provided, follow these steps:
1. Square the length of the hypotenuse: $c^2$.
2. Square the length of the known leg: $a^2$.
3. Subtract the square of the leg from the square of the hypotenuse: $b^2 = c^2-a^2$.
4. Calculate the square root: $b = \\sqrt{c^2-a^2}$.

### Algebraic Verification
To determine if three given lengths $(x, y, z)$ form a right triangle, one must verify the identity. It is critical to identify the largest value as the candidate for the hypotenuse ($z$). If $x^2+y^2=z^2$, the set forms a right triangle. If $x^2+y^2>z^2$, the triangle is acute. If $x^2+y^2<z^2$, the triangle is obtuse.

| Triangle Side Set | $a^2+b^2$ | $c^2$ | Result |
| :--- | :--- | :--- | :--- |
| (3, 4, 5) | $9+16=25$ | 25 | Right |
| (5, 12, 13) | $25+144=169$ | 169 | Right |
| (6, 8, 11) | $36+64=100$ | 121 | Obtuse |
| (7, 24, 25) | $49+576=625$ | 625 | Right |

## Summary

The Pythagorean theorem remains one of the most significant achievements in the history of mathematics. It provides a simple yet profound connection between the arithmetic of squares and the geometry of space. By defining the relationship between the legs and the hypotenuse of a right triangle, we unlock the ability to measure distances that are otherwise unreachable, map coordinates on a plane, and understand the trigonometric functions that describe waves, oscillations, and rotations.

Whether dealing with integers in Pythagorean triples or real numbers in complex architectural designs, the formula $a^2+b^2=c^2$ serves as the definitive test for right-angled relationships. Its universality across Euclidean space ensures that it remains the bedrock upon which higher-order mathematics, including trigonometry and analytical geometry, is constructed. Understanding this theorem is not merely about solving for a missing variable; it is about grasping the spatial logic that allows for the precise measurement and interpretation of the physical world.`;export{e as default};