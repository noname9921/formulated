var e=`# Sum and Difference Identities

Trigonometric identities serve as the bedrock of periodic analysis, signal processing, and geometric modeling. Among the most versatile of these tools are the sum and difference identities, which allow mathematicians and engineers to decompose complex trigonometric expressions into simpler components. These identities provide exact values for trigonometric functions of angles that are not standard multiples of $\\pi/6$ or $\\pi/4$, and they are essential for simplifying expressions in calculus, such as finding derivatives and integrals of products of functions.

## Definition

Sum and difference identities are mathematical equalities that define the trigonometric functions of the sum or difference of two angles, $\\alpha$ and $\\beta$, in terms of the individual trigonometric functions of $\\alpha$ and $\\beta$. By utilizing the geometry of the unit circle or the properties of rotation matrices, these identities establish fixed relationships that hold for all real numbers $\\alpha$ and $\\beta$. They allow for the expansion of functions like $\\sin(\\alpha \\pm \\beta)$ and $\\cos(\\alpha \\pm \\beta)$ into linear combinations of the sine and cosine of the individual arguments.

## Key Terminology

* **Argument:** The input value or expression passed to a trigonometric function, typically represented as $\\theta$, $\\alpha$, or $\\beta$.
* **Unit Circle:** A circle with a radius of $1$ centered at the origin $(0,0)$ in the Cartesian plane, used to define trigonometric functions for all real numbers.
* **Identity:** An equation that is true for all values of the variables for which the expressions are defined.
* **Phase Shift:** A horizontal displacement of a trigonometric function, often represented by an angle $\\phi$ within the argument $\\sin(x + \\phi)$.
* **Linear Combination:** An expression constructed by multiplying a set of terms by constants and adding them together, such as $A\\sin(x) + B\\cos(x)$.

## Purpose

The primary purpose of sum and difference identities is to resolve trigonometric expressions that cannot be evaluated directly through standard geometric definitions. By transforming composite angles into combinations of simpler, fundamental angles, these identities facilitate several technical processes:

1. **Exact Evaluation:** They allow for the exact calculation of trigonometric values for angles like $15^\\circ$ or $75^\\circ$ by expressing them as $(45^\\circ - 30^\\circ)$ or $(45^\\circ + 30^\\circ)$.
2. **Signal Analysis:** In electrical engineering, they are used to combine waves of the same frequency but different phases into a single signal.
3. **Simplification:** They provide a systematic method to simplify complex trigonometric expressions, which is a prerequisite for performing symbolic integration or solving differential equations.
4. **Verification:** They act as a validation tool for proving more advanced identities, such as double-angle or power-reduction formulas.

## Fundamental Properties

The sum and difference identities for sine and cosine are derived from the coordinates of points on a unit circle. For any two angles $\\alpha$ and $\\beta$, the fundamental identities are:

**Sine Sum and Difference Identities:**
$$\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$$
$$\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)$$

**Cosine Sum and Difference Identities:**
$$\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$$
$$\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)$$

**Tangent Sum and Difference Identities:**
$$\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}$$
$$\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}$$

The cosine sum identity is particularly elegant because it arises directly from the dot product of two unit vectors rotated by $\\alpha$ and $\\beta$ from the positive x-axis. Since the dot product of $\\vec{u} = (\\cos \\alpha, \\sin \\alpha)$ and $\\vec{v} = (\\cos \\beta, \\sin \\beta)$ is equal to $\\cos(\\alpha - \\beta)$, the expansion naturally follows.

## Types & Variations

These identities can be adapted to observe the behavior of composite functions, such as the superposition of two waves. When a function is given in the form $f(x) = A\\sin(x) + B\\cos(x)$, it can be rewritten as a single phase-shifted sine wave $R\\sin(x + \\phi)$. This is a common application of the sine sum identity in physics.

The following interactive graph allows for the visualization of how varying parameters within an argument affects the horizontal position and amplitude of the resultant wave. The expression plotted is $f(x) = \\sin(ax + b)$, where $a$ influences the frequency and $b$ influences the phase shift.

\`\`\`interactivegraph
\\sin(ax + b)
params: a=1, b=0
range: a=-3:3, b=-3:3
\`\`\`

In the graph above, users can observe the transformation of the sine wave. When $b$ is non-zero, the identity $\\sin(ax+b) = \\sin(ax)\\cos(b) + \\cos(ax)\\sin(b)$ explains the resulting combination of the sine and cosine components.

Additionally, the identities can be summarized in tabular form for quick reference:

| Identity | Expression |
| :--- | :--- |
| $\\sin(\\alpha + \\beta)$ | $\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ |
| $\\sin(\\alpha - \\beta)$ | $\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$ |
| $\\cos(\\alpha + \\beta)$ | $\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ |
| $\\cos(\\alpha - \\beta)$ | $\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$ |
| $\\tan(\\alpha + \\beta)$ | $\\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$ |
| $\\tan(\\alpha - \\beta)$ | $\\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$ |

## How to Solve

To solve problems involving sum and difference identities, follow these systematic steps:

1. **Identify the Target Argument:** If you are asked to evaluate a function at an unfamiliar angle, break it down into the sum or difference of known values (e.g., $75^\\circ = 45^\\circ + 30^\\circ$).
2. **Select the Appropriate Identity:** Based on the function (sine, cosine, or tangent) and the operation (sum or difference), select the corresponding formula from the list above.
3. **Substitute Known Values:** Insert the exact values of the individual trigonometric functions into the formula. For standard angles, utilize the known values such as $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}$, $\\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}$, etc.
4. **Simplify Algebraically:** Perform the multiplication and addition/subtraction. Rationalize the denominator if necessary to reach the standard final form.

**Example Calculation:**
To evaluate $\\cos(15^\\circ)$, we write $15^\\circ = 45^\\circ - 30^\\circ$:
$$\\cos(45^\\circ - 30^\\circ) = \\cos(45^\\circ)\\cos(30^\\circ) + \\sin(45^\\circ)\\sin(30^\\circ)$$
Substitute the exact values:
$$\\cos(15^\\circ) = \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$$
$$\\cos(15^\\circ) = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$

This approach demonstrates the power of the identities in achieving precision that calculator approximations cannot provide.

The following static graph plots $f(x) = \\sin(x)$ and $g(x) = \\cos(x)$ to provide a visual reminder of the fundamental oscillations that define these identities.

\`\`\`graph
\\sin(x)
\\cos(x)
\`\`\`

The graph above shows the periodic nature of both functions. Note that $\\sin(x)$ is simply $\\cos(x)$ shifted by $\\pi/2$. This relationship can be verified using the difference identity: $\\cos(x - \\pi/2) = \\cos(x)\\cos(\\pi/2) + \\sin(x)\\sin(\\pi/2) = \\cos(x)(0) + \\sin(x)(1) = \\sin(x)$.

## Summary

Sum and difference identities represent a fundamental component of trigonometric fluency. By enabling the decomposition of complex arguments into identifiable segments, they bridge the gap between basic geometric definitions and advanced analytical applications. Whether evaluating specific angles, simplifying algebraic expressions in calculus, or synthesizing wave functions in engineering, these identities provide the necessary rigor to transform inputs into solvable formats. Mastering these identities requires a solid grasp of the unit circle, algebraic manipulation, and the ability to recognize when a specific identity will reduce the complexity of a given trigonometric problem. As seen throughout this document, the structural symmetry of these formulas—particularly the sign inversion in the cosine sum identity—makes them highly reliable for both theoretical derivation and practical computation.`;export{e as default};