var e=`# Double-Angle and Half-Angle Identities

## Definition

Double-angle and half-angle identities represent a specialized class of trigonometric formulas derived from the sum and difference formulas. These identities provide a mechanism to express trigonometric functions of $2\\theta$ (double angle) or $\\theta/2$ (half angle) in terms of the original angle $\\theta$. By leveraging the symmetry of the unit circle and the periodic nature of sine, cosine, and tangent, these identities allow for the simplification of complex trigonometric expressions and the integration or differentiation of higher-degree power functions.

Mathematically, a double-angle identity expresses the value of a function at $2\\theta$ as a polynomial or ratio involving $\\sin\\theta$ and $\\cos\\theta$. Conversely, half-angle identities allow for the determination of the trigonometric value of $\\theta/2$ by utilizing the square root of expressions involving $\\cos\\theta$. These identities are essential in calculus, physics, and engineering, particularly when simplifying waves, oscillatory motion, and rotating vectors.

## Key Terminology

To understand these identities, one must be familiar with several fundamental concepts:

* **Trigonometric Argument:** The variable or expression inside the trigonometric function, such as $\\theta$ in $\\sin(\\theta)$ or $2\\theta$ in $\\sin(2\\theta)$.
* **Sum/Difference Formulas:** The foundational identities from which double-angle and half-angle identities are derived:
    * $\\sin(A+B) = \\sin(A)\\cos(B) + \\cos(A)\\sin(B)$
    * $\\cos(A+B) = \\cos(A)\\cos(B) - \\sin(A)\\sin(B)$
* **Pythagorean Identity:** The relationship $\\sin^2\\theta + \\cos^2\\theta = 1$, which is frequently employed to convert between sine and cosine forms within the identities.
* **Periodicity:** The characteristic of trigonometric functions where values repeat at regular intervals, which informs the valid ranges of the resulting identities.
* **Radical Expression:** The use of $\\pm\\sqrt{\\dots}$ in half-angle identities, necessitated by the square of the function in power-reduction variations.

## Purpose

The primary purpose of double-angle and half-angle identities is to reduce the degree of an argument or a function. In trigonometry, dealing with $2\\theta$ or $\\theta/2$ can complicate algebraic manipulation. These identities allow mathematicians to:

1. **Solve Equations:** Transform equations containing multiple angles into equations containing a single, unified angle, making them solvable via standard factoring or quadratic formula techniques.
2. **Simplification:** Reduce high-power expressions (like $\\sin^4\\theta$) into linear terms of multiple angles (like $\\cos(4\\theta)$), which is critical for performing integration in calculus.
3. **Exact Value Determination:** Calculate the exact trigonometric values for angles not found in standard unit circle tables (e.g., $15^\\circ$ is half of $30^\\circ$, $22.5^\\circ$ is half of $45^\\circ$).
4. **Modeling Physical Phenomena:** Analyze harmonic motion, wave interference, and alternating current circuits where the input frequency may be modulated.

## Fundamental Properties

The derivations of these identities are rooted in the substitution of $A=B$ into the sum formulas. For instance, letting $A=B=\\theta$ in the sum formula $\\sin(A+B)$ yields:
$$ \\sin(2\\theta) = \\sin(\\theta+\\theta) = \\sin\\theta\\cos\\theta + \\cos\\theta\\sin\\theta = 2\\sin\\theta\\cos\\theta $$

Similarly, for the cosine function:
$$ \\cos(2\\theta) = \\cos(\\theta+\\theta) = \\cos\\theta\\cos\\theta - \\sin\\theta\\sin\\theta = \\cos^2\\theta - \\sin^2\\theta $$

Using the Pythagorean identity $\\cos^2\\theta = 1 - \\sin^2\\theta$ or $\\sin^2\\theta = 1 - \\cos^2\\theta$, the cosine double-angle identity can be rewritten in two additional, highly useful forms:
1. $\\cos(2\\theta) = 2\\cos^2\\theta - 1$
2. $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$

These identities demonstrate that the square of a trigonometric function is fundamentally linked to a double-angle cosine term, forming the basis for power-reduction identities.

## Types & Variations

There are three primary categories of these identities: double-angle, half-angle, and power-reduction.

### Double-Angle Identities
| Function | Identity |
| :--- | :--- |
| $\\sin(2\\theta)$ | $2\\sin\\theta\\cos\\theta$ |
| $\\cos(2\\theta)$ | $\\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ |
| $\\tan(2\\theta)$ | $\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$ |

### Half-Angle Identities
The half-angle identities are derived by solving the cosine double-angle variations for $\\sin\\theta$ and $\\cos\\theta$. For example, $1 - 2\\sin^2(\\theta/2) = \\cos\\theta \\implies \\sin^2(\\theta/2) = \\frac{1-\\cos\\theta}{2}$.

| Function | Identity |
| :--- | :--- |
| $\\sin(\\theta/2)$ | $\\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}$ |
| $\\cos(\\theta/2)$ | $\\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}$ |
| $\\tan(\\theta/2)$ | $\\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}$ |

### Power-Reduction Identities
These are simply rearrangements of the double-angle formulas used to lower the exponent of the function:
* $\\sin^2\\theta = \\frac{1-\\cos(2\\theta)}{2}$
* $\\cos^2\\theta = \\frac{1+\\cos(2\\theta)}{2}$
* $\\tan^2\\theta = \\frac{1-\\cos(2\\theta)}{1+\\cos(2\\theta)}$

The following interactive graph allows for the observation of how the double-angle transformation alters the frequency of the cosine wave.

\`\`\`interactivegraph
\\cos(ax)
params: a=1
range: a=0.5:4
\`\`\`
In the graph above, the parameter $a$ represents the multiplier of the angle. When $a=2$, we see the behavior of $\\cos(2\\theta)$, which completes two full cycles in the space where $\\cos(\\theta)$ would complete only one. Observe how the peaks and troughs shift as $a$ increases, demonstrating the increased frequency resulting from the double-angle transformation.

## How to Solve

Solving problems involving these identities usually requires a systematic approach to variable substitution and algebraic manipulation.

### Step 1: Analyze the Argument
Identify the goal of the expression. If you have $\\sin(2x)$, you must decide if it is more beneficial to expand it into $2\\sin x \\cos x$ (to match other terms involving $x$) or keep it as is. If you are integrating, power-reduction is almost always preferred.

### Step 2: Harmonize the Angles
If an equation contains both $\\cos(2x)$ and $\\sin(x)$, use the identity $\\cos(2x) = 1 - 2\\sin^2x$ to rewrite the entire equation in terms of $\\sin(x)$. This effectively transforms a trigonometric equation into a polynomial-like equation (e.g., $2\\sin^2x - \\sin x - 1 = 0$), which can be solved via factoring.

### Step 3: Manage Signs in Half-Angles
When calculating $\\sin(\\theta/2)$ or $\\cos(\\theta/2)$, the $\\pm$ sign depends on the quadrant in which the angle $\\theta/2$ resides. For example, if $\\theta = 300^\\circ$, then $\\theta/2 = 150^\\circ$. Since $150^\\circ$ is in the second quadrant, the sine result must be positive, while the cosine result must be negative.

### Step 4: Verification
Always verify the result. For complex identities, plugging in a simple value for $\\theta$ (e.g., $\\theta = \\pi/4$) into both sides of the derived expression is a robust way to confirm algebraic correctness before proceeding with more complex analysis.

Example Application: Solve $\\cos(2\\theta) + \\sin\\theta = 0$.
1. Substitute $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$.
2. Result: $1 - 2\\sin^2\\theta + \\sin\\theta = 0$.
3. Rearrange: $2\\sin^2\\theta - \\sin\\theta - 1 = 0$.
4. Factor: $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.
5. Solve: $\\sin\\theta = -1/2$ or $\\sin\\theta = 1$.
6. Evaluate $\\theta$: $\\theta = 210^\\circ, 330^\\circ, 90^\\circ$ (within $[0, 360^\\circ)$).

## Summary

Double-angle and half-angle identities are cornerstone tools in trigonometry, serving as the bridge between multiple-angle expressions and base-angle variables. By transforming $2\\theta$ and $\\theta/2$ into expressions of $\\sin\\theta$ and $\\cos\\theta$, mathematicians can simplify complex products, solve non-linear trigonometric equations, and evaluate exact values for obscure angles. 

Key takeaways include:
- **Consistency:** The identities are derived directly from the sum formulas for sine and cosine.
- **Flexibility:** Cosine double-angle identities offer three distinct forms, allowing for surgical precision when choosing how to rewrite an expression (favoring either sine, cosine, or both).
- **Utility:** Power-reduction identities are essential for calculus, particularly for evaluating integrals of $\\sin^n x$ and $\\cos^n x$.
- **Precision:** The use of half-angle identities requires careful attention to quadrant placement to ensure the correct positive or negative sign is applied.

By mastering these identities, one gains the ability to manipulate the structure of trigonometric functions, a skill that is indispensable in any field requiring the modeling of waves, rotational dynamics, or periodic data.`;export{e as default};