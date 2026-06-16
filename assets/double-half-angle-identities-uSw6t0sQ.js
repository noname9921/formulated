var e=`# Double-Angle and Half-Angle Identities

## Definition

Double-angle and half-angle identities are a subset of trigonometric identities that allow for the expression of trigonometric functions of a multiple or fraction of an angle in terms of the original angle. These identities serve as a bridge between the geometric properties of triangles and the algebraic manipulation of circular functions. 

A double-angle identity expresses functions like $\\sin(2\\theta)$, $\\cos(2\\theta)$, and $\\tan(2\\theta)$ in terms of $\\sin(\\theta)$, $\\cos(\\theta)$, and $\\tan(\\theta)$. Conversely, half-angle identities provide expressions for $\\sin(\\theta/2)$, $\\cos(\\theta/2)$, and $\\tan(\\theta/2)$ in terms of the original angle $\\theta$. These are mathematically derived from the sum and difference formulas for sine and cosine, specifically the addition theorem $f(\\alpha + \\beta) = f(\\alpha)f(\\beta) \\pm g(\\alpha)g(\\beta)$. 

## Key Terminology

- **Trigonometric Identity:** An equation involving trigonometric functions that is true for every value of the occurring variables for which the expressions are defined.
- **Angle Argument:** The input variable (often denoted as $\\theta$, $x$, or $\\phi$) to a trigonometric function.
- **Redundancy:** The property where a single expression can be represented in multiple forms (e.g., $\\cos(2\\theta)$ can be written as $\\cos^2(\\theta) - \\sin^2(\\theta)$, $2\\cos^2(\\theta) - 1$, or $1 - 2\\sin^2(\\theta)$).
- **Quadrant Determination:** The process of using the sign of a trigonometric function to determine which quadrant an angle lies in, which is essential for resolving the $\\pm$ ambiguity in half-angle identities.
- **Radical Expression:** The result of half-angle identities involving square roots, which necessitates careful consideration of the algebraic sign.

## Purpose

The primary utility of these identities is to simplify complex trigonometric expressions and integrals. In calculus, for instance, integrating functions such as $\\cos^2(\\theta)$ is difficult using standard power rules, but by applying the double-angle identity in reverse (the power-reduction identity), the function becomes $\\frac{1 + \\cos(2\\theta)}{2}$, which is easily integrated.

Furthermore, these identities allow for the exact calculation of trigonometric values for non-standard angles. If an angle is a fraction of a well-known angle (e.g., $15^\\circ$ as half of $30^\\circ$), half-angle identities permit the computation of exact values rather than relying on numerical approximations. In physics and engineering, these identities are fundamental in wave analysis, signal processing, and describing rotational motion, where frequency doubling is a standard phenomenon.

## Fundamental Properties

The derivation of double-angle identities relies on the sum formulas:
$\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$
$\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$

By setting $\\alpha = \\beta = \\theta$, we arrive at the double-angle formulas:
$\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)$
$\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)$

From the Pythagorean identity $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$, we derive the alternative forms of $\\cos(2\\theta)$:
1. Substitute $\\cos^2(\\theta) = 1 - \\sin^2(\\theta) \\implies \\cos(2\\theta) = 1 - 2\\sin^2(\\theta)$
2. Substitute $\\sin^2(\\theta) = 1 - \\cos^2(\\theta) \\implies \\cos(2\\theta) = 2\\cos^2(\\theta) - 1$

The half-angle identities are then derived by solving these expressions for $\\sin(\\theta)$ and $\\cos(\\theta)$ after replacing $\\theta$ with $\\alpha/2$. For example, solving $2\\cos^2(\\alpha/2) - 1 = \\cos(\\alpha)$ yields:
$\\cos(\\alpha/2) = \\pm\\sqrt{\\frac{1 + \\cos(\\alpha)}{2}}$

## Types & Variations

There are three primary categories of these identities, organized by the function type.

| Identity Type | Primary Form | Secondary Form |
| :--- | :--- | :--- |
| Sine Double-Angle | $\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)$ | N/A |
| Cosine Double-Angle | $\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)$ | $1 - 2\\sin^2(\\theta)$ or $2\\cos^2(\\theta) - 1$ |
| Tangent Double-Angle | $\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}$ | N/A |
| Sine Half-Angle | $\\sin(\\frac{\\theta}{2}) = \\pm\\sqrt{\\frac{1 - \\cos(\\theta)}{2}}$ | N/A |
| Cosine Half-Angle | $\\cos(\\frac{\\theta}{2}) = \\pm\\sqrt{\\frac{1 + \\cos(\\theta)}{2}}$ | N/A |
| Tangent Half-Angle | $\\tan(\\frac{\\theta}{2}) = \\frac{1 - \\cos(\\theta)}{\\sin(\\theta)}$ | $\\frac{\\sin(\\theta)}{1 + \\cos(\\theta)}$ |

The following interactive graph allows for the observation of how the frequency (controlled by $a$) affects the behavior of the sine wave. Note that $a=2$ corresponds to the double-angle transformation $\\sin(2x)$.

\`\`\`interactivegraph
\\sin(ax)
params: a=1
range: a=0.5:4
\`\`\`

The graph above plots $f(x) = \\sin(ax)$. When $a=2$, the function displays a double-angle frequency relative to the base case of $a=1$, showing twice as many oscillations within the same interval of $x$.

## How to Solve

Solving problems involving these identities requires a systematic approach, particularly when dealing with half-angles where the sign of the square root must be determined.

1. **Identify the Given:** Determine the value of the trigonometric function and the quadrant in which the angle resides.
2. **Select the Identity:** Choose the form of the identity that minimizes algebraic complexity. For $\\cos(2\\theta)$, if you only have $\\sin(\\theta)$, use the $1 - 2\\sin^2(\\theta)$ variant.
3. **Handle Signs (Half-Angle):** If you are calculating $\\sin(\\theta/2)$, check the quadrant of $\\theta/2$. If $\\theta$ is in the first quadrant ($0 < \\theta < 90^\\circ$), then $\\theta/2$ is in the first quadrant, and the result must be positive.
4. **Substitution:** Replace the variable with the known value and simplify the radical or expression.
5. **Rationalize:** In tangent identities, it is standard practice to rationalize the denominator if it contains a root.

Example: Calculate $\\cos(15^\\circ)$ using the half-angle identity $\\cos(\\theta/2) = \\sqrt{(1 + \\cos(\\theta))/2}$.
- Set $\\theta = 30^\\circ$, so $\\theta/2 = 15^\\circ$.
- $\\cos(15^\\circ) = \\sqrt{(1 + \\cos(30^\\circ))/2} = \\sqrt{(1 + \\sqrt{3}/2)/2}$.
- Simplify: $\\sqrt{(2 + \\sqrt{3})/4} = \\frac{\\sqrt{2 + \\sqrt{3}}}{2}$.

The following static graph plots the relationship $\\cos(2x) = 2\\cos^2(x) - 1$, showing how the squared term shifts and scales the oscillation.

\`\`\`graph
\\cos(2x)
2\\cos(x)^2 - 1
\`\`\`

The graph above shows the overlap of the function $f(x) = \\cos(2x)$ and $g(x) = 2\\cos^2(x) - 1$. The identity holds because the two curves are identical, confirming the algebraic equivalence of the double-angle form.

## Summary

Double-angle and half-angle identities are essential tools in the mathematician's repertoire. They allow for the reduction of complexity by transforming high-frequency arguments into lower-frequency products, or by expanding powers into linear terms. The double-angle formulas derive directly from sum identities and are vital for simplification, while half-angle formulas allow for the expansion of the "known" trigonometric values to include divisions of familiar angles. 

When working with these identities, the practitioner must pay close attention to the quadrant constraints inherent in the half-angle roots and the algebraic flexibility provided by the different versions of the cosine double-angle identity. Mastering these allows for the efficient solving of trigonometric equations, the integration of squared trigonometric functions in calculus, and the analysis of harmonic motion in physical systems. In essence, they represent the symmetry and recursive nature of trigonometry.`;export{e as default};