var e=`# Sum and Difference Identities

Trigonometric sum and difference identities are a foundational pillar of analytical trigonometry and mathematical physics. These identities provide the mathematical machinery necessary to decompose complex, compound-angle trigonometric expressions into simpler components involving single variables. By establishing the relationship between the trigonometric values of sum or difference of two angles and the values of the individual angles, these identities allow for the simplification of wave equations, signal processing algorithms, and the formal derivation of calculus-based proofs.

## Definition

The sum and difference identities are a set of trigonometric equations that express the trigonometric functions of the sum $(\\alpha + \\beta)$ or the difference $(\\alpha - \\beta)$ of two angles in terms of the trigonometric functions of the individual angles $\\alpha$ and $\\beta$. These identities apply to the sine, cosine, and tangent functions. They are derived from the geometric properties of the unit circle and rotation matrices, effectively bridging the gap between static angles and dynamic rotational transformations.

## Key Terminology

- **Compound Angle:** An angle expressed as the result of an arithmetic operation between two simpler angles, such as $\\alpha + \\beta$ or $\\alpha - \\beta$.
- **Trigonometric Ratio:** The values produced by functions such as $\\sin(\\theta)$, $\\cos(\\theta)$, and $\\tan(\\theta)$, representing the relationship between side lengths in right triangles or coordinates on the unit circle.
- **Identity:** An equation that is true for all possible values of the variables within the domain of the expression.
- **Unit Circle:** A circle with a radius of $1$ centered at the origin $(0,0)$ in the Cartesian plane, used to define trigonometric functions for all real numbers.
- **Rotation Matrix:** A transformation matrix used to perform a rotation in Euclidean space, often utilized in the formal derivation of these identities.

## Purpose

The primary purpose of sum and difference identities is to resolve complex trigonometric expressions that cannot be evaluated using standard reference angles (like $30^\\circ$, $45^\\circ$, or $60^\\circ$). For instance, calculating $\\sin(75^\\circ)$ manually is non-trivial; however, by recognizing $75^\\circ$ as $45^\\circ + 30^\\circ$, the identity allows us to evaluate the expression as $\\sin(45^\\circ)\\cos(30^\\circ) + \\cos(45^\\circ)\\sin(30^\\circ)$.

Beyond manual calculation, these identities serve three critical functions:
1. **Analytical Simplification:** They allow for the reduction of expressions in engineering, such as combining two waves of the same frequency but different phases.
2. **Derivation of Advanced Identities:** They serve as the starting point for deriving double-angle, half-angle, and product-to-sum identities.
3. **Calculus Application:** They are essential in the definition of the derivative for trigonometric functions, where the limit definition of a derivative relies on expanding terms like $\\sin(x + h)$.

## Fundamental Properties

The identities for sine, cosine, and tangent are governed by specific algebraic signs. Note that for cosine, the sign in the result is the opposite of the sign in the argument.

### Cosine Identities
The sum identity for cosine is:
$$\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$$
The difference identity for cosine is:
$$\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)$$

### Sine Identities
The sum identity for sine preserves the sign:
$$\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$$
The difference identity for sine is:
$$\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)$$

### Tangent Identities
Derived from the sine and cosine identities, the tangent identities are:
$$\\tan(\\alpha + \\beta) = \\frac{\\tan(\\alpha) + \\tan(\\beta)}{1 - \\tan(\\alpha)\\tan(\\beta)}$$
$$\\tan(\\alpha - \\beta) = \\frac{\\tan(\\alpha) - \\tan(\\beta)}{1 + \\tan(\\alpha)\\tan(\\beta)}$$

## Types & Variations

Variations of these identities arise when one angle is a specific reference value, such as $\\frac{\\pi}{2}$ or $\\pi$. These are often called co-function identities.

| Identity Type | Expression |
| :--- | :--- |
| Cosine Sum | $\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$ |
| Cosine Difference | $\\cos(\\alpha - \\beta) = \\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)$ |
| Sine Sum | $\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$ |
| Sine Difference | $\\sin(\\alpha - \\beta) = \\sin(\\alpha)\\cos(\\beta) - \\cos(\\alpha)\\sin(\\beta)$ |
| Tangent Sum | $\\tan(\\alpha + \\beta) = (\\tan(\\alpha) + \\tan(\\beta)) / (1 - \\tan(\\alpha)\\tan(\\beta))$ |
| Tangent Difference | $\\tan(\\alpha - \\beta) = (\\tan(\\alpha) - \\tan(\\beta)) / (1 + \\tan(\\alpha)\\tan(\\beta))$ |

To observe how these identities behave dynamically, we use an interactive graph to visualize how a shift in an angle influences the periodic behavior of a sine function. The interactive graph below plots $f(x) = \\sin(x + \\phi)$, where $\\phi$ is an adjustable phase shift. This demonstrates the impact of a sum identity on the horizontal displacement of a waveform.

\`\`\`interactivegraph
\\sin(x + b)
params: b=0
range: b=-3:3
\`\`\`

In the graph above, adjusting $b$ illustrates the horizontal shift of the sine wave. When $b$ is positive, the wave shifts left; when $b$ is negative, it shifts right. This is an application of the identity $\\sin(x + \\beta) = \\sin(x)\\cos(\\beta) + \\cos(x)\\sin(\\beta)$, where $\\sin(\\beta)$ and $\\cos(\\beta)$ act as scaling factors for the composite wave.

## How to Solve

Solving problems involving these identities generally follows a structured approach.

### Step 1: Decomposition
Identify if the target angle can be expressed as a sum or difference of known reference angles (e.g., $15^\\circ = 45^\\circ - 30^\\circ$ or $105^\\circ = 60^\\circ + 45^\\circ$).

### Step 2: Selection
Select the correct identity based on the function (sine, cosine, tangent) and the operation (sum or difference). Ensure the signs are handled correctly (e.g., remember that $\\cos(\\alpha + \\beta)$ involves subtraction).

### Step 3: Substitution
Substitute the exact values of the individual trigonometric functions into the expanded formula. For instance, $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}$ and $\\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}$.

### Step 4: Algebraic Simplification
Combine terms, find common denominators, and rationalize the expression if necessary to arrive at the final exact value.

### Illustrative Example
Calculate $\\cos(75^\\circ)$ exactly.
1. Decompose: $75^\\circ = 45^\\circ + 30^\\circ$.
2. Select: $\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$.
3. Substitute: $\\cos(45^\\circ + 30^\\circ) = \\cos(45^\\circ)\\cos(30^\\circ) - \\sin(45^\\circ)\\sin(30^\\circ)$.
4. Evaluate: $(\\frac{\\sqrt{2}}{2})(\\frac{\\sqrt{3}}{2}) - (\\frac{\\sqrt{2}}{2})(\\frac{1}{2}) = \\frac{\\sqrt{6}}{4} - \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.

## Summary

Sum and difference identities represent the core logic of trigonometric transformation. By providing the tools to expand compound angles, they enable the reduction of complex problems into manageable, solvable components. From the manual calculation of exact trigonometric values for non-standard angles to the complex analysis of wave interference and phase shifts in engineering, these identities are indispensable. Mastery of these identities requires both the memorization of the six primary formulas and the ability to recognize their structural patterns within broader algebraic expressions. Whether one is working in a pure mathematical context or applying these principles to physical systems, the sum and difference identities remain an essential bridge between basic trigonometric ratios and advanced harmonic analysis.`;export{e as default};