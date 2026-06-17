var e=`# The Law of Cosines and Triangulation Applications

## Definition

The Law of Cosines, also known as the generalized Pythagorean theorem, is a fundamental principle in trigonometry that establishes a relationship between the lengths of the sides of a triangle and the cosine of one of its angles. While the Pythagorean theorem $a^2+b^2=c^2$ applies exclusively to right-angled triangles, the Law of Cosines provides a universal solution for any triangle, whether acute, obtuse, or right-angled. 

Mathematically, for a triangle with sides $a$, $b$, and $c$, and an angle $C$ opposite to side $c$, the Law of Cosines is defined as:
$$c^2=a^2+b^2-2ab\\cos(C)$$

This equation can be rearranged to solve for any side or any angle, provided sufficient information is available. Because the cosine of $90^{\\circ}$ is $0$, the formula naturally collapses into the Pythagorean theorem when the triangle is right-angled, demonstrating its role as a superior, more general framework for geometric analysis.

## Key Terminology

To utilize the Law of Cosines effectively, one must understand the specific nomenclature used in geometric proofs and triangulation:

| Term | Definition |
| :--- | :--- |
| Triangle Inequality | The principle that the sum of any two sides must be greater than the third side. |
| Side-Angle-Side (SAS) | A condition where two sides and the included angle are known, requiring the Law of Cosines. |
| Side-Side-Side (SSS) | A condition where three sides are known, requiring the Law of Cosines to find an angle. |
| Included Angle | The angle formed at the vertex where two sides of a triangle meet. |
| Triangulation | The process of determining the location of a point by forming triangles to it from known points. |
| Oblique Triangle | Any triangle that does not contain a right angle. |
| Vertex | The point at which two sides of a triangle intersect. |

## Purpose

The primary purpose of the Law of Cosines is to resolve triangles that are not right-angled. In surveying, navigation, and geodesy, we rarely encounter perfect right-angled configurations. By bridging the gap between side lengths and interior angles, the Law of Cosines acts as a bridge for complex spatial calculations.

In the context of triangulation, the Law of Cosines serves as the computational engine. If an observer is located at point $A$ and wishes to find the distance to an inaccessible landmark $C$, they can measure the distance to a secondary baseline point $B$, measure the distance $AB$, and measure the angle at $A$. The Law of Cosines then determines the length of side $AC$ without the surveyor ever having to traverse the terrain between $A$ and $C$. This methodology is foundational for GPS positioning, cellular network site optimization, and satellite orbital mechanics.

## Fundamental Properties

The Law of Cosines is derived from the properties of Euclidean geometry and the projection of lines. Consider a triangle with sides $a, b, c$ and an angle $C$. By dropping an altitude from vertex $B$ to side $a$, we create two right triangles. Using the Pythagorean theorem on these smaller triangles and substituting the trigonometric definition $\\cos(C) = \\text{adjacent}/\\text{hypotenuse}$, the identity $c^2=a^2+b^2-2ab\\cos(C)$ emerges algebraically.

Several critical properties define its utility:
1. **Duality:** It can solve for sides (given two sides and an angle) or angles (given three sides).
2. **Consistency:** When $C=90^{\\circ}$, $\\cos(90^{\\circ})=0$, yielding $c^2=a^2+b^2$.
3. **Obtuseness Sensitivity:** If $C > 90^{\\circ}$, then $\\cos(C)$ is negative, causing the term $-2ab\\cos(C)$ to become positive, which results in $c^2 > a^2+b^2$. This correctly identifies the side opposite an obtuse angle as the longest side.

The following interactive graph demonstrates how the length of side $c$ changes as the included angle $C$ is adjusted, keeping sides $a$ and $b$ constant.

\`\`\`interactivegraph
\\sqrt{a^2 + b^2 - 2*a*b*\\cos(x * \\pi / 180)}
params: a=5, b=5
range: a=1:10, b=1:10
\`\`\`

In the interactive graph above, the reader can observe how the length $c$ reacts to variations in the angle $x$ (in degrees). Note how the length reaches its maximum when $x=180^{\\circ}$ (a degenerate triangle) and its minimum when $x=0^{\\circ}$.

## Types & Variations

Depending on the known parameters, the Law of Cosines manifests in three standard variations. These allow for the rapid calculation of any unknown component of an oblique triangle:

1. **For side $a$:** $a^2=b^2+c^2-2bc\\cos(A)$
2. **For side $b$:** $b^2=a^2+c^2-2ac\\cos(B)$
3. **For side $c$:** $c^2=a^2+b^2-2ab\\cos(C)$

Additionally, when solving for an angle given three known sides (SSS condition), we isolate the cosine term:
$$\\cos(A) = \\frac{b^2+c^2-a^2}{2bc}$$
$$\\cos(B) = \\frac{a^2+c^2-b^2}{2ac}$$
$$\\cos(C) = \\frac{a^2+b^2-c^2}{2ab}$$

These inverse forms are essential in robotics, specifically in inverse kinematics, where the position of an arm joint must be determined based on the known lengths of the segments and the target coordinate.

## How to Solve

Solving a problem using the Law of Cosines requires a methodical approach. Follow these steps for reliable triangulation:

### Step 1: Identify the Knowns
Determine if the problem provides SAS (two sides and the included angle) or SSS (three sides). If the information given is ASA (two angles and one side) or AAS, the Law of Sines is more efficient. 

### Step 2: Select the Formula
If solving for a side, ensure the known angle is the one trapped between the two known sides. If solving for an angle, ensure you have all three side lengths.

### Step 3: Calculation and Order of Operations
When calculating $c^2=a^2+b^2-2ab\\cos(C)$, strictly follow the order of operations. Calculate the squares, calculate the cosine, perform the multiplication, and finally, subtract the product from the sum of the squares.

### Step 4: Verification
Always perform a sanity check using the Triangle Inequality. The resulting side must be shorter than the sum of the other two sides. 

**Example Case: Surveying a Gap**
Imagine a surveyor needs to find the distance across a pond.
- Point $A$ to Point $B = 50$ meters.
- Point $A$ to Point $C = 80$ meters.
- The angle $\\angle BAC = 60^{\\circ}$.

Calculation:
$$BC^2 = 50^2 + 80^2 - 2(50)(80)\\cos(60^{\\circ})$$
$$BC^2 = 2500 + 6400 - (8000)(0.5)$$
$$BC^2 = 8900 - 4000 = 4900$$
$$BC = \\sqrt{4900} = 70 \\text{ meters}$$

This approach is highly stable in computational applications because it relies on standard trigonometric functions available in every programming library.

## Summary

The Law of Cosines is a cornerstone of mathematical science, providing the flexibility required to solve triangles in non-Euclidean environments or non-right-angled contexts. By relating side lengths to the cosine of the included angle, it enables accurate measurement of inaccessible distances—a process known as triangulation.

Key takeaways include:
- The Law of Cosines is a generalization of the Pythagorean theorem.
- It is indispensable for SAS and SSS triangle conditions.
- It is the primary tool for distance estimation in surveying and navigation.
- The algebraic variations allow for the determination of both missing side lengths and interior angles.

Mastery of this law allows for the simplification of complex spatial problems, transforming them into manageable algebraic expressions. Whether one is calculating the trajectory of a projectile, the position of an object in a GPS coordinate system, or the geometry of a structural component, the Law of Cosines remains the most robust tool for the task. Its reliability across all triangle types ensures its status as a vital component of modern technical and scientific computation.`;export{e as default};