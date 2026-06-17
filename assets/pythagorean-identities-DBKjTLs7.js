var e=`# The Fundamental Pythagorean Identities

The Pythagorean identities represent the cornerstone of trigonometric analysis, establishing a profound link between the geometry of a right-angled triangle and the algebraic structure of circular functions. These identities are not merely formulas to be memorized; they are deep mathematical truths that describe the conservation of distance in Euclidean space, manifesting as the unit circle.

## Definition

The Fundamental Pythagorean Identities are a set of three specific equations relating the squares of trigonometric functions. They are derived directly from the Pythagorean theorem, which states that for a right-angled triangle with legs $a$ and $b$ and hypotenuse $c$, the relationship $a^2+b^2=c^2$ holds. In the context of the unit circle, where the radius $r=1$, the coordinates of any point on the circle are given by $(\\cos(\\theta), \\sin(\\theta))$. Consequently, the distance formula yields the primary identity:

$$\\sin^2(\\theta)+\\cos^2(\\theta)=1$$

From this primary equation, two additional identities are derived by dividing the entire expression by $\\cos^2(\\theta)$ and $\\sin^2(\\theta)$ respectively:

$$1+\\tan^2(\\theta)=\\sec^2(\\theta)$$
$$1+\\cot^2(\\theta)=\\csc^2(\\theta)$$

These identities hold for all values of $\\theta$ for which the functions involved are defined. They define the intrinsic relationship between trigonometric ratios across the entire domain of real numbers.

## Key Terminology

To fully comprehend these identities, one must define the operational terms involved:

*   **Sine ($\\sin$):** The ratio of the length of the side opposite the angle to the hypotenuse in a right triangle.
*   **Cosine ($\\cos$):** The ratio of the length of the side adjacent to the angle to the hypotenuse.
*   **Tangent ($\\tan$):** The ratio of the opposite side to the adjacent side, defined as $\\frac{\\sin(\\theta)}{\\cos(\\theta)}$.
*   **Secant ($\\sec$):** The reciprocal of the cosine function, defined as $\\frac{1}{\\cos(\\theta)}$.
*   **Cosecant ($\\csc$):** The reciprocal of the sine function, defined as $\\frac{1}{\\sin(\\theta)}$.
*   **Cotangent ($\\cot$):** The reciprocal of the tangent function, defined as $\\frac{\\cos(\\theta)}{\\sin(\\theta)}$.
*   **Unit Circle:** A circle with a radius of one centered at the origin $(0,0)$ on the Cartesian plane.
*   **Trigonometric Identity:** An equation involving trigonometric functions that is true for every value of the variable for which the expressions are defined.

## Purpose

The primary purpose of the Pythagorean identities is to facilitate the simplification of complex trigonometric expressions and to solve equations where variables are interlinked. In calculus, these identities are indispensable for performing trigonometric substitutions—a technique used to resolve complex integrals—and for differentiating or integrating powers of trigonometric functions.

Furthermore, they serve as a bridge between geometry and algebra. By allowing the substitution of one trigonometric function for another, they reduce the number of unknown variables in a system. This is crucial in physics, particularly in wave mechanics, oscillations, and alternating current circuits, where sinusoidal signals must be combined or transformed into forms that are easier to analyze. Without these identities, describing the motion of rotating vectors or the projection of circular motion onto a linear axis would be computationally prohibitive.

## Fundamental Properties

The identities exhibit several critical properties that define their behavior and utility:

1.  **Consistency across Quadrants:** Because the squares of the sine and cosine functions are always non-negative, the sum $\\sin^2(\\theta)+\\cos^2(\\theta)$ remains equal to $1$ regardless of the sign of the individual components in any of the four quadrants.
2.  **Domain Restrictions:** While $\\sin^2(\\theta)+\\cos^2(\\theta)=1$ is defined for all real $\\theta$, the secondary identities have domain restrictions. For $\\tan^2(\\theta)$ and $\\sec^2(\\theta)$, $\\theta \\neq \\frac{\\pi}{2} + k\\pi$ because $\\cos(\\theta)$ cannot be zero. For $\\cot^2(\\theta)$ and $\\csc^2(\\theta)$, $\\theta \\neq k\\pi$ because $\\sin(\\theta)$ cannot be zero.
3.  **Degree of Power:** These identities relate the second powers of functions, making them useful in power-reduction formulas, which are essential for reducing the complexity of higher-order trigonometric exponents.
4.  **Cyclical Symmetry:** The identities reflect the underlying rotational symmetry of the circle, where any point $(x,y)$ satisfies $x^2+y^2=1$.

The following table summarizes the primary relationships derived from these identities:

| Identity | Derived from | Domain Restriction |
| :--- | :--- | :--- |
| $\\sin^2(\\theta)+\\cos^2(\\theta)=1$ | $a^2+b^2=c^2$ | None |
| $1+\\tan^2(\\theta)=\\sec^2(\\theta)$ | Divide by $\\cos^2(\\theta)$ | $\\theta \\neq \\frac{\\pi}{2}+k\\pi$ |
| $1+\\cot^2(\\theta)=\\csc^2(\\theta)$ | Divide by $\\sin^2(\\theta)$ | $\\theta \\neq k\\pi$ |

## Types & Variations

Variations of these identities arise when we solve for a specific function within the identity. For instance, rearranging $\\sin^2(\\theta)+\\cos^2(\\theta)=1$ allows us to express one function in terms of the other, often incorporating the square root of the remainder:

*   $\\sin^2(\\theta) = 1 - \\cos^2(\\theta)$
*   $\\cos^2(\\theta) = 1 - \\sin^2(\\theta)$

These variations are vital when dealing with quadratic trigonometric equations. By replacing one function, such as $\\cos^2(\\theta)$, with $1-\\sin^2(\\theta)$, one transforms a mixed-function equation into a single-variable quadratic equation in terms of sine, which can then be solved using standard algebraic techniques like factoring or the quadratic formula.

The identities also extend into the complex plane via Euler’s formula, $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$. While these fundamental identities were developed in the context of real geometry, they remain valid when extended to complex arguments, forming the basis for analyzing complex exponential oscillations.

The graph below plots $f(x) = \\sin^2(x) + \\cos^2(x)$, illustrating that the sum remains a constant line at $1$, regardless of the input $x$.

\`\`\`graph
1
\`\`\`

## How to Solve

Solving problems involving Pythagorean identities requires a systematic approach. The goal is typically to reduce an expression to a single term or to prove that two sides of an equation are equivalent.

### Step-by-Step Methodology:

1.  **Identify the target:** Determine if you need to convert all terms to a single trigonometric function or simplify to a constant.
2.  **Substitution:** Replace complex expressions with their simpler equivalents using the three fundamental identities. For example, if you see $\\tan^2(\\theta)$, try replacing it with $\\sec^2(\\theta) - 1$ if the equation contains other secant terms.
3.  **Factoring and Algebra:** Utilize standard algebraic tools such as the difference of squares $(a^2-b^2) = (a-b)(a+b)$. For instance, $1 - \\sin^2(\\theta)$ can be factored into $(1-\\sin(\\theta))(1+\\sin(\\theta))$.
4.  **Reciprocal Conversion:** If the expression contains mixed functions, express all terms in terms of sine and cosine. This often reveals hidden cancellations.
5.  **Verification:** Always check for division by zero errors. If you multiply by $\\sin(\\theta)$ or $\\cos(\\theta)$ during your solving process, you must ensure you have not introduced extraneous roots where the original function was undefined.

### Example Problem:
Simplify the expression: $\\frac{\\tan^2(\\theta)}{\\sec^2(\\theta)-1}$

**Solution:**
1. From the identity $1+\\tan^2(\\theta)=\\sec^2(\\theta)$, we know that $\\tan^2(\\theta) = \\sec^2(\\theta)-1$.
2. Substitute this into the denominator: $\\frac{\\tan^2(\\theta)}{\\tan^2(\\theta)}$.
3. Simplify the fraction to $1$, provided that $\\tan^2(\\theta) \\neq 0$ and the expressions are defined (i.e., $\\cos(\\theta) \\neq 0$).

This interactive graph allows for the observation of how $\\tan(ax)$ and $\\sec(ax)$ behave in relation to the identity $1+\\tan^2(ax)=\\sec^2(ax)$.

\`\`\`interactivegraph
\\tan^2(ax) + 1
params: a=1
range: a=0.1:5
\`\`\`

By adjusting the parameter $a$, one can see how the frequency of the tangent oscillations increases, while the identity $1+\\tan^2(ax) = \\sec^2(ax)$ remains geometrically preserved at every point.

## Summary

The Fundamental Pythagorean Identities are more than just algebraic rules; they are the analytical manifestations of the Pythagorean theorem within the domain of circular functions. By relating the squares of sine and cosine to unity, and establishing subsequent relationships for tangent-secant and cotangent-cosecant pairs, these identities provide the necessary tools for simplification, solving complex equations, and performing advanced calculus.

A deep understanding of these identities involves recognizing them in their various algebraic forms, being aware of their domain restrictions, and knowing when to apply them to reduce the complexity of trigonometric expressions. Whether in engineering, physics, or pure mathematics, these identities serve as the primary bridge between the static geometry of triangles and the dynamic, oscillating nature of trigonometric waves.`;export{e as default};