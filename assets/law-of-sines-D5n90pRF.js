var e=`# The Law of Sines and the Ambiguous Case (SSA)

## Definition

The Law of Sines is a fundamental trigonometric theorem that establishes a proportional relationship between the side lengths of a triangle and the sines of their corresponding opposite angles. For any triangle with side lengths $a$, $b$, and $c$, and interior angles $A$, $B$, and $C$ opposite to those sides respectively, the Law of Sines states:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Equivalently, this can be written as:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

The "Ambiguous Case," technically referred to as the Side-Side-Angle (SSA) condition, occurs when we are provided with the lengths of two sides and the measure of a non-included angle. Unlike the Side-Angle-Side (SAS) or Angle-Side-Angle (ASA) conditions, which define a unique triangle, the SSA configuration does not guarantee a singular result. Depending on the relative lengths of the sides and the nature of the given angle (acute or obtuse), the information provided may result in zero, one, or two possible triangles. This phenomenon arises because the sine function is not injective on the interval $(0, \\pi)$, meaning $\\sin(\\theta) = \\sin(180^\\circ - \\theta)$.

## Key Terminology

- **SSA (Side-Side-Angle):** A set of conditions where two sides and a non-included angle are known. This is insufficient to guarantee congruence.
- **Included Angle:** The angle formed by the intersection of two specific sides. In SSA, the angle provided is not the one enclosed by the two given sides.
- **Opposite Side:** The side length located directly across from a given angle.
- **Adjacent Side:** The side length that forms one of the rays of the given angle.
- **Acute Triangle:** A triangle where all interior angles are less than $90^\\circ$.
- **Obtuse Triangle:** A triangle containing one angle greater than $90^\\circ$.
- **Height of a Triangle ($h$):** In the context of solving a triangle with side $b$ and angle $A$, $h = b \\sin A$. This value acts as the threshold for determining the existence of triangles in the SSA case.

## Purpose

The Law of Sines is essential for "solving" triangles, which means determining the values of all three sides and all three angles. While the Law of Cosines can solve triangles where the included angle is known (SAS) or all sides are known (SSS), it fails to provide a shortcut for the SSA case, requiring a quadratic approach instead.

The purpose of studying the Ambiguous Case is to develop a rigorous geometric and algebraic intuition regarding the constraints of planar geometry. It forces the practitioner to account for the geometry of the "swinging side"—the side opposite the given angle which can potentially intersect the third side at zero, one, or two points. Understanding this case is critical in fields such as surveying, navigation, and computer graphics, where coordinate reconstruction must account for all mathematically valid configurations.

## Fundamental Properties

The behavior of the SSA case is governed by the comparison between the opposite side $a$, the adjacent side $b$, and the altitude $h$ of the triangle formed by $b$ and angle $A$.

### Case 1: Angle $A$ is Acute ($A < 90^\\circ$)
1. **$a < h$:** No triangle exists. The side $a$ is too short to reach the base.
2. **$a = h$:** Exactly one right triangle exists.
3. **$h < a < b$:** Two distinct triangles exist (The Ambiguous Case).
4. **$a \\ge b$:** Exactly one triangle exists.

### Case 2: Angle $A$ is Obtuse ($A \\ge 90^\\circ$)
1. **$a \\le b$:** No triangle exists. The side $a$ cannot form a triangle with $b$ because the side opposite an obtuse angle must be the longest side.
2. **$a > b$:** Exactly one triangle exists.

The following table summarizes these conditions for an acute angle $A$:

| Condition | Geometric Outcome | Number of Solutions |
| :--- | :--- | :--- |
| $a < b \\sin A$ | No intersection | 0 |
| $a = b \\sin A$ | Tangent intersection | 1 (Right Triangle) |
| $b \\sin A < a < b$ | Two intersections | 2 |
| $a \\ge b$ | Single intersection | 1 |

To visualize the relationship between the side $a$ and the height $h$, consider the function $f(x) = h$ where $h$ is constant relative to $x$. Since the height of the triangle $h = b \\sin A$ is a fixed value once $A$ and $b$ are set, we can observe the variation of side $a$.

\`\`\`interactivegraph
\\sin(A) * b
params: A=0.785, b=5
range: A=0.1:1.5, b=1:10
\`\`\`

The graph above shows the height $h = b \\sin A$. By adjusting the slider for $A$ (in radians) and $b$, you can see how the threshold for $a$ changes. When the side $a$ is less than this value, no triangle can be formed.

## Types & Variations

There are two primary variations of the SSA case depending on the input angle:

### 1. The Acute SSA Case
This is the most complex variation. Because $\\sin(180^\\circ - \\theta) = \\sin(\\theta)$, the Law of Sines calculation $\\sin B = \\frac{b \\sin A}{a}$ yields an angle $B_1$. However, there exists a secondary potential angle $B_2 = 180^\\circ - B_1$. We must check if $A + B_2 < 180^\\circ$. If this inequality holds, the second triangle is valid.

### 2. The Obtuse SSA Case
This is significantly more constrained. If angle $A \\ge 90^\\circ$, then $A$ is already the largest angle in the triangle. By the geometric property that the largest side must be opposite the largest angle, we require $a > b$. If $a \\le b$, the triangle is physically impossible. This simplifies the decision-making process, as there is never a "second" triangle possible when the given angle is obtuse.

## How to Solve

To solve for the missing elements in an SSA triangle, follow these systematic steps:

1. **Calculate the Height ($h$):** Determine $h = b \\sin A$.
2. **Identify the Given Values:** Note $a$, $b$, and $A$.
3. **Compare $a$ and $h$:**
   - If $a < h$, conclude that no triangle exists.
   - If $a = h$, identify it as a right triangle. Solve using basic trigonometry.
   - If $a \\ge h$, proceed to use the Law of Sines to find $\\sin B = \\frac{b \\sin A}{a}$.
4. **Determine $B$:**
   - Find $B_1 = \\arcsin(\\frac{b \\sin A}{a})$.
   - If $a < b$, a second angle $B_2 = 180^\\circ - B_1$ exists.
5. **Validate $B_2$:**
   - Check if $A + B_2 < 180^\\circ$.
   - If valid, calculate $C_2 = 180^\\circ - (A + B_2)$ and $c_2 = \\frac{a \\sin C_2}{\\sin A}$.
6. **Finalize Solution:** List all determined sides and angles for each valid triangle.

Example: Consider a triangle where $A = 30^\\circ$, $a = 7$, and $b = 10$.
- $h = 10 \\sin(30^\\circ) = 5$.
- Since $5 < 7 < 10$, we are in the ambiguous case ($h < a < b$).
- $\\sin B = \\frac{10 \\sin 30^\\circ}{7} \\approx 0.7143$.
- $B_1 \\approx 45.6^\\circ$ and $B_2 \\approx 134.4^\\circ$.
- Triangle 1: $C_1 = 180^\\circ - (30^\\circ + 45.6^\\circ) = 104.4^\\circ$.
- Triangle 2: $C_2 = 180^\\circ - (30^\\circ + 134.4^\\circ) = 15.6^\\circ$.
- Calculate $c_1$ and $c_2$ using the Law of Sines for each case.

## Summary

The Law of Sines provides an elegant mechanism for solving triangles, but the SSA condition serves as a rigorous reminder of the geometric constraints underlying trigonometry. The ambiguous case is not a flaw in the Law of Sines, but rather a reflection of the reality that two sides and a non-included angle do not uniquely define a triangle. By calculating the altitude $h = b \\sin A$ and comparing it against the side $a$, practitioners can reliably navigate the possibility of zero, one, or two solutions. Mastering this logic is fundamental for any student or professional working with non-right triangles, ensuring that all valid configurations are identified and that physically impossible solutions are discarded. Always remember to check the sum of interior angles ($180^\\circ$) when evaluating the existence of the potential second triangle, as this is the most common point of failure in geometric analysis.`;export{e as default};