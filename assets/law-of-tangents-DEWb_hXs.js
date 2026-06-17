var e=`# The Law of Tangents and Mollweide's Formulas

## Definition

In the domain of plane trigonometry, the Law of Tangents and Mollweide's Formulas serve as robust instruments for verifying the consistency of triangle dimensions. The Law of Tangents is a theorem that establishes a specific ratio between the sum and difference of two sides of a triangle and the sum and difference of the tangents of the corresponding opposite angles. For a triangle with sides $a, b, c$ and corresponding opposite angles $A, B, C$, the Law of Tangents is stated as:

$$\\frac{a-b}{a+b} = \\frac{\\tan(\\frac{A-B}{2})}{\\tan(\\frac{A+B}{2})}$$

Mollweide's Formulas, formulated by Karl Mollweide in 1808, provide two secondary sets of identities that relate all six parts of a triangle (three sides and three angles) without requiring the intermediate step of calculating the circumradius. These formulas act as a powerful "check" on the validity of solutions derived from the Law of Sines or the Law of Cosines. The two primary Mollweide equations are:

$$\\frac{a+b}{c} = \\frac{\\cos(\\frac{A-B}{2})}{\\sin(\\frac{C}{2})}$$

$$\\frac{a-b}{c} = \\frac{\\sin(\\frac{A-B}{2})}{\\cos(\\frac{C}{2})}$$

## Key Terminology

To comprehend these relationships, one must define the constituent parts of the triangle:

| Term | Definition |
| :--- | :--- |
| Side $a, b, c$ | The lengths of the three edges of the triangle. |
| Angle $A, B, C$ | The interior angles opposite to sides $a, b, c$ respectively. |
| Half-Sum Angle | The arithmetic mean of two angles, e.g., $(A+B)/2$. |
| Half-Difference Angle | The difference of two angles divided by two, e.g., $(A-B)/2$. |
| Circumradius $R$ | The radius of the circle passing through all three vertices of the triangle. |
| Tangent Identity | The ratio of the sine of an angle to its cosine, $\\tan(x) = \\sin(x)/\\cos(x)$. |

## Purpose

The primary utility of these formulas lies in error detection and the numerical solution of triangles. In historical contexts, before the advent of computational calculators, these formulas were preferred for solving "Side-Angle-Side" (SAS) or "Side-Side-Angle" (SSA) scenarios because they were highly resistant to rounding errors when evaluated via logarithmic tables. 

Today, their purpose has evolved into a pedagogical and technical verification tool. If a student solves a triangle and the resulting values fail to satisfy Mollweide's Formulas, it is a mathematical certainty that the original solution is flawed. Because the equations involve all sides and all angles of the triangle, they serve as a holistic validation mechanism. Furthermore, in theoretical trigonometry, they provide an elegant bridge between additive properties of sides and multiplicative or angular properties of the triangle, simplifying complex proofs in non-Euclidean geometry.

## Fundamental Properties

The Law of Tangents and Mollweide's Formulas are derived from the Law of Sines and the Prosthaphaeresis formulas. The fundamental property shared by these identities is the principle of symmetry. In a triangle, if one swaps sides $a$ and $b$ and angles $A$ and $B$, the formulas remain invariant in truth, though the sign may invert in the difference-based identities.

A critical property of Mollweide's formulas is their independence from the circumradius $R$. While the Law of Sines ($a/\\sin A = 2R$) necessitates the existence of an external circumcircle for derivation, Mollweide’s equations collapse this dependence. This property makes them "closed-system" identities. They are particularly useful because they allow for the determination of the third angle $C$ or the third side $c$ if two sides and their included angle are known, without needing to perform square root operations required by the Law of Cosines.

The interactive nature of these parameters can be observed by considering the behavior of the tangent function as a triangle approaches degeneracy (a flat line). As $A+B$ approaches $180^\\circ$ (or $\\pi$ radians), $\\tan((A+B)/2)$ approaches infinity, signifying the limit where the triangle transforms into a line segment.

\`\`\`interactivegraph
\\tan((x - b) / 2) / \\tan((x + b) / 2)
params: b=1
range: x=0:3
\`\`\`

In the graph above, we explore the ratio of the tangents as a function of the angle difference $x$ relative to a fixed parameter $b$. This visualizes how sensitive the Law of Tangents is to variations in the angles of the triangle.

## Types & Variations

There are several variations depending on which sides are selected. The Law of Tangents can be cyclically permuted:

1. $\\frac{a-b}{a+b} = \\frac{\\tan(\\frac{A-B}{2})}{\\tan(\\frac{A+B}{2})}$
2. $\\frac{b-c}{b+c} = \\frac{\\tan(\\frac{B-C}{2})}{\\tan(\\frac{B+C}{2})}$
3. $\\frac{c-a}{c+a} = \\frac{\\tan(\\frac{C-A}{2})}{\\tan(\\frac{C+A}{2})}$

Mollweide’s Formulas can also be adapted to utilize the semi-perimeter $s = (a+b+c)/2$ and the inradius $r$ or circumradius $R$, though the forms provided in the definition section are the standard canonical representations. Another variation involves using the Law of Tangents to solve for unknown angles when all three sides are known (the SSS case). By rearranging the formula to solve for $(A-B)/2$, one obtains:

$$\\frac{A-B}{2} = \\arctan\\left( \\frac{a-b}{a+b} \\tan\\left(\\frac{A+B}{2}\\right) \\right)$$

Given that $A+B = 180^\\circ - C$, the entire right side becomes calculable from the known sides and the known angle $C$.

## How to Solve

Solving a triangle using these methods requires a systematic approach. Consider a triangle where sides $a$ and $b$ and included angle $C$ are known.

1. **Calculate the Angle Sum:** Determine $(A+B)/2$. Since $A+B+C = 180^\\circ$, then $(A+B)/2 = 90^\\circ - C/2$.
2. **Apply Law of Tangents:** Substitute knowns into $\\tan((A-B)/2) = [(a-b)/(a+b)] \\cdot \\tan((A+B)/2)$.
3. **Isolate the Difference:** Solve for $(A-B)/2$ by taking the arctangent of the result.
4. **System of Equations:** You now have two equations with two variables:
   - $(A+B)/2 = \\text{Value}_1$
   - $(A-B)/2 = \\text{Value}_2$
   - Add them to find $A$.
   - Subtract them to find $B$.
5. **Verify with Mollweide:** Once $A, B,$ and $C$ are found, apply the Mollweide formula $\\frac{a+b}{c} = \\frac{\\cos((A-B)/2)}{\\sin(C/2)}$ to calculate the final side $c$ or to verify the consistency of the sides.

If the values are consistent, the difference between the left-hand side and right-hand side of the Mollweide equation should be negligible (within floating-point precision limits).

## Summary

The Law of Tangents and Mollweide's Formulas are elegant relics of classical trigonometry that remain fundamentally important in applied mathematics. The Law of Tangents provides a specialized method for finding missing angles in SAS problems, while Mollweide’s Formulas offer a rigorous, symmetric validation of the entire triangle geometry. By relying on half-angle identities and the relationships between sum and difference ratios, these formulas avoid the potential for error inherent in more complex square-root-dependent calculations. Mastery of these identities enables a deeper understanding of the internal consistency required for Euclidean triangles and provides a reliable framework for solving complex trigonometric systems with algebraic precision.`;export{e as default};