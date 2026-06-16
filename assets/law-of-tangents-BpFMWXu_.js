var e=`# The Law of Tangents and Mollweide's Formulas

## Definition

In trigonometry, the Law of Tangents and Mollweide's formulas represent a sophisticated class of identities that relate the sides and angles of any triangle. Unlike the Law of Sines or the Law of Cosines, which are primary tools for basic triangulation, these identities provide high-precision verification mechanisms. 

The Law of Tangents states that for any triangle with sides $a, b, c$ and corresponding opposite angles $A, B, C$, the ratio of the difference of two sides to their sum is equal to the ratio of the tangent of half the difference of the opposite angles to the tangent of half their sum. It is expressed as:
$$\\frac{a-b}{a+b}=\\frac{\\tan(\\frac{A-B}{2})}{\\tan(\\frac{A+B}{2})}$$

Mollweide's formulas, named after the German mathematician Karl Mollweide, are a pair of trigonometric identities that relate all parts of a triangle (three sides and three angles). These formulas are notably more symmetric and comprehensive than the Law of Tangents. They are given by:
$$\\frac{a+b}{c}=\\frac{\\cos(\\frac{A-B}{2})}{\\sin(\\frac{C}{2})}$$
$$\\frac{a-b}{c}=\\frac{\\sin(\\frac{A-B}{2})}{\\cos(\\frac{C}{2})}$$

## Key Terminology

To navigate these formulas, one must be familiar with the following triangle components:
* **Sides ($a, b, c$):** The linear lengths of the segments forming the triangle.
* **Angles ($A, B, C$):** The internal angles subtended by the sides $a, b, c$ respectively.
* **Semi-perimeter ($s$):** Half the sum of the triangle sides, calculated as $s=\\frac{a+b+c}{2}$, which is integral to the derivation of many identity variations.
* **Inradius ($r$):** The radius of the inscribed circle of a triangle.
* **Circumradius ($R$):** The radius of the circumscribed circle that passes through all three vertices of the triangle.
* **Half-angle formulas:** Trigonometric expressions involving $\\frac{A}{2}$, $\\frac{B}{2}$, or $\\frac{C}{2}$, which often arise when simplifying complex triangle relationships.

## Purpose

The primary utility of the Law of Tangents and Mollweide's formulas is twofold: pedagogical derivation and practical computational checking.

Historically, before the advent of electronic calculators and high-speed computers, these formulas were essential for solving "oblique" triangles—triangles where no angle is $90^\\circ$. They allowed navigators and surveyors to check the internal consistency of their measurements. If a surveyor calculated side lengths $a, b, c$ and angles $A, B, C$, checking these against Mollweide’s equations served as a robust error-correction mechanism. If the identities did not hold, the measurements were discarded.

Today, these formulas remain vital in coordinate geometry and computer graphics, where high-precision verification of vertex positions is required. Furthermore, they bridge the gap between simple Law of Sines applications and complex spherical trigonometry, acting as a rigorous test for numerical solvers.

## Fundamental Properties

The power of these identities lies in their relationship to the circumradius $R$. By using the Law of Sines, we know that $a=2R\\sin A$, $b=2R\\sin B$, and $c=2R\\sin C$. Substituting these into the Law of Tangents transforms the equation into a pure trigonometric statement:
$$\\frac{2R\\sin A - 2R\\sin B}{2R\\sin A + 2R\\sin B} = \\frac{\\sin A - \\sin B}{\\sin A + \\sin B}$$
Using the product-to-sum identities $\\sin A - \\sin B = 2\\sin(\\frac{A-B}{2})\\cos(\\frac{A+B}{2})$ and $\\sin A + \\sin B = 2\\cos(\\frac{A-B}{2})\\sin(\\frac{A+B}{2})$, the expression simplifies perfectly to the Law of Tangents.

Mollweide's formulas possess the unique property of involving all six components of the triangle. Because $A+B+C=180^\\circ$, we know $\\sin(\\frac{C}{2}) = \\sin(90^\\circ - \\frac{A+B}{2}) = \\cos(\\frac{A+B}{2})$. This allows for a deep interweaving of the sum and difference components of the triangle. The symmetry of these formulas is their most elegant trait, ensuring that no side or angle is privileged over another in the equation structure.

## Types & Variations

There are several ways to express these relationships depending on the known variables. The Law of Tangents is often presented in a cyclic form to cover all pairs of sides:

| Identity | Variant Formula |
| :--- | :--- |
| Law of Tangents (a,b) | $\\frac{a-b}{a+b}=\\tan(\\frac{A-B}{2})/\\tan(\\frac{A+B}{2})$ |
| Law of Tangents (b,c) | $\\frac{b-c}{b+c}=\\tan(\\frac{B-C}{2})/\\tan(\\frac{B+C}{2})$ |
| Law of Tangents (c,a) | $\\frac{c-a}{c+a}=\\tan(\\frac{C-A}{2})/\\tan(\\frac{C+A}{2})$ |

Mollweide's formulas can also be modified using the semi-perimeter $s$. For instance, one can express the sides in terms of the inradius and angles, leading to complex but highly stable computational forms. Another variation is the use of Napier's Analogies, which are effectively the Law of Tangents generalized to spherical triangles. When a triangle is on a sphere, the sides $a, b, c$ represent arc lengths, and the formulas adapt to account for the curvature of the surface.

To visualize the periodic nature of the tangent component in the Law of Tangents, we can plot the ratio function. The graph below plots $f(x) = \\tan(x)$, which represents the foundational behavior of the tangent terms in the law, showing the vertical asymptotes at odd multiples of $\\pi/2$.

\`\`\`graph
\\tan(x)
\`\`\`

## How to Solve

Solving a problem using these formulas typically follows a standardized workflow. Suppose you are given two sides $a$ and $b$ and the included angle $C$. Since $A+B=180^\\circ - C$, the term $\\frac{A+B}{2}$ is known.

1. **Calculate the sum and difference of the sides:** Determine $a+b$ and $a-b$.
2. **Calculate the sum of the angles:** Find $S = \\frac{A+B}{2} = 90^\\circ - \\frac{C}{2}$.
3. **Solve for the difference of the angles:** Rearrange the Law of Tangents:
   $$\\tan(\\frac{A-B}{2}) = \\frac{a-b}{a+b} \\cdot \\tan(\\frac{A+B}{2})$$
   Take the arctangent of the result to find $\\frac{A-B}{2}$.
4. **Isolate individual angles:** With the sum $\\frac{A+B}{2}$ and the difference $\\frac{A-B}{2}$ known, simple algebra ($A = \\text{sum} + \\text{diff}$ and $B = \\text{sum} - \\text{diff}$) yields the individual values for $A$ and $B$.
5. **Verification:** Use Mollweide's formulas to verify the result. Plug your calculated $A, B, C$ and $a, b, c$ into:
   $$\\frac{a+b}{c} = \\frac{\\cos(\\frac{A-B}{2})}{\\sin(\\frac{C}{2})}$$
   If the left and right sides match within a reasonable margin of rounding error, the solution is verified.

The following interactive graph allows for the adjustment of the parameters $a$ and $b$ (representing side ratios) to observe how the difference in angle $\\Delta = A-B$ shifts relative to the tangent of the sum.

\`\`\`interactivegraph
\\tan(a \\cdot x + b)
params: a=1, b=0
range: a=0.5:2, b=-1:1
\`\`\`

In the interactive graph above, the parameter $a$ represents the scaling factor derived from the side ratio $\\frac{a-b}{a+b}$, while $b$ represents the phase shift related to the sum of the angles. Note how varying $a$ alters the "steepness" of the tangent function, illustrating why the Law of Tangents is highly sensitive for determining angles when the ratio of sides is near unity.

## Summary

The Law of Tangents and Mollweide's formulas serve as the "gold standard" for internal triangle verification. The Law of Tangents provides a direct path to finding unknown angles when two sides and the included angle are given, effectively bypassing the Law of Cosines which can be numerically unstable in certain floating-point implementations. Mollweide’s formulas offer a global check that involves all components of the triangle simultaneously.

Together, these tools ensure that trigonometry remains a precise discipline. By leveraging the symmetries of sine and cosine and the periodics of the tangent function, these identities demonstrate the deep, inherent connectivity within Euclidean geometry. Mastery of these formulas not only aids in solving static geometry problems but also provides a deeper understanding of how angular relationships are governed by the linear ratios of the sides that define them. Whether applied to ancient land surveys or modern high-precision rendering, they remain cornerstones of mathematical accuracy.`;export{e as default};