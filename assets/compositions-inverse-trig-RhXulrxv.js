var e=`# Evaluating Compositions of Trigonometric and Inverse Functions

Evaluating compositions of trigonometric and inverse trigonometric functions represents a core intersection of algebra and trigonometry. It requires a rigorous understanding of function domains, codomains (ranges), and the constraints placed on trigonometric functions to make them invertible. These compositions appear frequently in calculus, differential equations, and engineering, particularly when solving for unknown angles in geometric systems.

## Definition

A composition of functions involves applying one function to the result of another. In the context of trigonometry, we generally encounter two primary forms of composition:

1. **Trigonometric functions of inverse trigonometric functions:** These take the form $f(g(x))$, where $f$ is a trigonometric function (e.g., $\\sin$) and $g$ is an inverse trigonometric function (e.g., $\\arcsin$). An example is $\\cos(\\arcsin(x))$.
2. **Inverse trigonometric functions of trigonometric functions:** These take the form $g(f(x))$, where $g$ is an inverse trigonometric function and $f$ is a trigonometric function. An example is $\\arcsin(\\sin(x))$.

The evaluation depends heavily on whether the input $x$ lies within the restricted domain that defines the inverse function. Because trigonometric functions are periodic and thus not one-to-one over their entire domain, the inverse functions are defined only over specific intervals where the original function is monotonic and bijective.

## Key Terminology

To evaluate these expressions, one must master the following definitions:

* **Domain Restriction:** Since functions like $\\sin(x)$ are periodic, they fail the horizontal line test. To create an inverse, we restrict the domain of $\\sin(x)$ to $[-\\pi/2, \\pi/2]$.
* **Principal Value:** The output of an inverse trigonometric function is called the principal value. It is the unique angle within the restricted domain that satisfies the trigonometric equation.
* **Bijectivity:** A function is bijective if it is both injective (one-to-one) and surjective (onto). Inverse trigonometric functions exist only when we treat the original functions as restricted bijections.
* **Composition:** The mathematical operation of nesting functions, denoted as $(f \\circ g)(x) = f(g(x))$.

| Function | Inverse Function | Restricted Domain of Original | Range of Inverse |
| :--- | :--- | :--- | :--- |
| $\\sin(x)$ | $\\arcsin(x)$ | $[-\\pi/2, \\pi/2]$ | $[-\\pi/2, \\pi/2]$ |
| $\\cos(x)$ | $\\arccos(x)$ | $[0, \\pi]$ | $[0, \\pi]$ |
| $\\tan(x)$ | $\\arctan(x)$ | $(-\\pi/2, \\pi/2)$ | $(-\\pi/2, \\pi/2)$ |

## Purpose

The primary purpose of evaluating these compositions is to simplify complex algebraic expressions into forms that are easier to integrate, differentiate, or graph. In physics and engineering, one often encounters situations where a side length of a right triangle is expressed as a trigonometric function of an angle, which is itself an inverse trigonometric function of a ratio of other sides. 

For instance, in projectile motion or rotational dynamics, we often need to simplify $\\sin(\\arccos(x))$ to obtain an algebraic expression. This allows us to remove the transcendental functions entirely, resulting in simple polynomials or square roots. This process is essential in calculus when performing trigonometric substitutions to solve integrals.

## Fundamental Properties

The evaluation of compositions relies on the identity properties of inverse functions. For any function $f$ and its inverse $f^{-1}$:

1. $f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$.
2. $f^{-1}(f(x)) = x$ for all $x$ in the restricted domain of $f$.

However, outside these restricted domains, the equality $f^{-1}(f(x)) = x$ does not hold. For example, $\\arcsin(\\sin(2\\pi)) = 0$, not $2\\pi$. Understanding the periodic nature of trigonometric functions is required to handle cases where $x$ falls outside the principal range.

The following interactive graph allows for the observation of how the composition $\\arcsin(\\sin(x))$ behaves. Note that while it equals $x$ on the interval $[-\\pi/2, \\pi/2]$, it repeats as a saw-tooth wave elsewhere.

\`\`\`interactivegraph
\\arcsin(\\sin(a*x))
params: a=1
range: a=-3:3
\`\`\`

The graph above plots the function $f(x) = \\arcsin(\\sin(ax))$. As the parameter $a$ varies, one can observe the frequency of the composition changing, illustrating that while the output is linear near the origin, it is periodic and bounded between $-\\pi/2$ and $\\pi/2$.

## Types & Variations

### Type I: Trigonometric of Inverse Trigonometric
These are typically evaluated using right-triangle geometry. If we need to evaluate $\\cos(\\arcsin(x))$, we let $\\theta = \\arcsin(x)$. This implies $\\sin(\\theta) = x$. By the Pythagorean identity, $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$, so $\\cos(\\theta) = \\sqrt{1 - x^2}$. Thus, $\\cos(\\arcsin(x)) = \\sqrt{1 - x^2}$.

### Type II: Inverse Trigonometric of Trigonometric
These require careful attention to the interval. 
- If $x \\in [-\\pi/2, \\pi/2]$, then $\\arcsin(\\sin(x)) = x$.
- If $x$ is outside this range, one must use the periodicity and symmetry properties (e.g., $\\sin(x) = \\sin(\\pi - x)$) to shift $x$ back into the principal interval.

### Type III: Mixed Compositions
These involve different functions, such as $\\tan(\\arcsin(x))$. Using the same triangle logic: if $\\sin(\\theta) = x/1$, then the opposite side is $x$ and the hypotenuse is $1$. The adjacent side is $\\sqrt{1 - x^2}$. Therefore, $\\tan(\\theta) = \\text{opposite} / \\text{adjacent} = x / \\sqrt{1 - x^2}$.

## How to Solve

Evaluating these compositions systematically involves these steps:

1. **Identify the inner function:** Assign a variable, typically $\\theta$, to the inner expression. E.g., let $\\theta = \\arctan(x/y)$.
2. **Translate to a triangle:** If the inner function is an inverse trigonometric function, draw a right triangle where $\\theta$ is an acute angle. Assign the sides based on the ratio given (SOH-CAH-TOA).
3. **Calculate the missing side:** Use the Pythagorean theorem ($a^2 + b^2 = c^2$) to find the length of the third side.
4. **Evaluate the outer function:** Use the definitions of the trigonometric functions on this triangle to find the final value in terms of $x$.
5. **Check for domain constraints:** If the outer function is an inverse trigonometric function, ensure the resulting value is within the principal range (e.g., $[-\\pi/2, \\pi/2]$ for $\\arcsin$).

Consider the evaluation of $\\sin(2\\arccos(x))$:
1. Let $\\theta = \\arccos(x)$, which means $\\cos(\\theta) = x$.
2. This creates a triangle with adjacent side $x$ and hypotenuse $1$. The opposite side is $\\sqrt{1 - x^2}$.
3. Use the double angle identity: $\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)$.
4. Substitute the known values: $\\sin(\\theta) = \\sqrt{1 - x^2}$ and $\\cos(\\theta) = x$.
5. The result is $2x\\sqrt{1 - x^2}$.

The following static graph plots $f(x) = \\sin(2\\arccos(x))$, illustrating the algebraic result over the domain $x \\in [-1, 1]$.

\`\`\`graph
\\sin(2*\\arccos(x))
\`\`\`

## Summary

Evaluating compositions of trigonometric and inverse trigonometric functions is a fundamental skill that bridges geometry and algebraic analysis. By recognizing that inverse trigonometric functions map ratios back to angles and trigonometric functions map angles back to ratios, we can effectively navigate these compositions. 

Key takeaways include:
- Use geometric interpretation (right triangles) to simplify expressions of the form $\\text{Trig}(\\text{InvTrig}(x))$.
- Use domain interval analysis to simplify expressions of the form $\\text{InvTrig}(\\text{Trig}(x))$.
- Always verify the principal range for inverse trigonometric outputs.
- Apply standard trigonometric identities (double angle, Pythagorean, sum-to-product) when dealing with complex compositions.

Mastery of these concepts allows for the efficient simplification of expressions that appear throughout advanced mathematics, particularly in the study of calculus and complex analysis, where the interplay between periodic functions and their restricted inverses is frequent and necessary for reaching closed-form solutions.`;export{e as default};