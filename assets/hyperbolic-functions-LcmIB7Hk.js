var e=`# Introduction to Hyperbolic Functions

Hyperbolic functions are a set of mathematical functions that are analogues to the standard trigonometric functions. While circular trigonometric functions are related to the unit circle $x^2 + y^2 = 1$, hyperbolic functions are associated with the unit hyperbola defined by the equation $x^2 - y^2 = 1$. These functions are essential in various fields of physics, engineering, and advanced calculus, particularly in scenarios involving potential theory, relativity, and catenary geometry.

## Definition

The primary hyperbolic functions, hyperbolic sine and hyperbolic cosine, are defined in terms of the exponential function $e^x$. Given that the exponential function is defined for all real numbers, the domain of hyperbolic functions is the set of all real numbers $\\mathbb{R}$.

The hyperbolic sine is defined as:
$$\\sinh(x) = \\frac{e^x - e^{-x}}{2}$$

The hyperbolic cosine is defined as:
$$\\cosh(x) = \\frac{e^x + e^{-x}}{2}$$

From these two foundational definitions, we can derive the remaining hyperbolic functions, analogous to the standard trigonometric identities:

The hyperbolic tangent:
$$\\tanh(x) = \\frac{\\sinh(x)}{\\cosh(x)} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$$

The hyperbolic cotangent (for $x \\neq 0$):
$$\\coth(x) = \\frac{\\cosh(x)}{\\sinh(x)} = \\frac{e^x + e^{-x}}{e^x - e^{-x}}$$

The hyperbolic secant:
$$\\text{sech}(x) = \\frac{1}{\\cosh(x)} = \\frac{2}{e^x + e^{-x}}$$

The hyperbolic cosecant (for $x \\neq 0$):
$$\\text{csch}(x) = \\frac{1}{\\sinh(x)} = \\frac{2}{e^x - e^{-x}}$$

## Key Terminology

To navigate the study of these functions, several terms must be understood within their functional context:

1. **Parity**: $\\sinh(x)$ is an odd function, meaning $\\sinh(-x) = -\\sinh(x)$. Conversely, $\\cosh(x)$ is an even function, satisfying $\\cosh(-x) = \\cosh(x)$.
2. **Catenary**: This term refers to the shape assumed by a free-hanging chain or cable supported at its ends under its own weight. The mathematical description of this curve is a scaled version of $\\cosh(x)$.
3. **Hyperbolic Angle**: In the geometry of the hyperbola, the parameter $t$ in the coordinates $(\\cosh(t), \\sinh(t))$ represents an area-based parameter rather than a rotation angle in the circular sense.
4. **Asymptote**: The function $\\tanh(x)$ approaches horizontal asymptotes at $y=1$ and $y=-1$ as $x$ approaches positive and negative infinity, respectively.
5. **Inverse Hyperbolic Functions**: These are the inverses of the hyperbolic functions, often denoted with the prefix "ars" (area) or "inv" (e.g., $\\text{arsinh}(x)$). They are logarithmic in nature because the defining equations involve $e^x$.

## Purpose

The purpose of hyperbolic functions is twofold: providing an analytical framework for growth-based phenomena and solving differential equations. In physics, these functions appear frequently when solving the Laplace equation in cylindrical or spherical coordinate systems. For instance, the velocity of a particle undergoing constant acceleration in special relativity is related to the $\\tanh$ function.

Furthermore, hyperbolic functions allow for the expression of complex trigonometric functions through Euler’s formula. Because $e^{ix} = \\cos(x) + i\\sin(x)$, it follows that:
$$\\cosh(ix) = \\cos(x)$$
$$\\sinh(ix) = i\\sin(x)$$

This deep relationship links circular motion and exponential decay or growth, providing a unified approach to analyzing oscillatory and non-oscillatory systems.

## Fundamental Properties

Hyperbolic functions satisfy identities that are strikingly similar to circular trigonometric identities, though they often differ by a sign.

### The Fundamental Identity
Whereas the identity for circular functions is $\\cos^2(x) + \\sin^2(x) = 1$, the fundamental hyperbolic identity is:
$$\\cosh^2(x) - \\sinh^2(x) = 1$$

### Addition Formulas
These formulas follow rules similar to their trigonometric counterparts:
$$\\sinh(x + y) = \\sinh(x)\\cosh(y) + \\cosh(x)\\sinh(y)$$
$$\\cosh(x + y) = \\cosh(x)\\cosh(y) + \\sinh(x)\\sinh(y)$$

### Differentiation and Integration
The calculus of hyperbolic functions is elegant because their derivatives are cyclic or identical:
$$\\frac{d}{dx}\\sinh(x) = \\cosh(x)$$
$$\\frac{d}{dx}\\cosh(x) = \\sinh(x)$$

This makes them highly useful in solving differential equations, particularly those of the form $y'' - y = 0$, where the solutions are $y = A\\cosh(x) + B\\sinh(x)$.

### Comparative Properties Table

| Function | Parity | Derivative | Range |
| :--- | :--- | :--- | :--- |
| $\\sinh(x)$ | Odd | $\\cosh(x)$ | $(-\\infty, \\infty)$ |
| $\\cosh(x)$ | Even | $\\sinh(x)$ | $[1, \\infty)$ |
| $\\tanh(x)$ | Odd | $\\text{sech}^2(x)$ | $(-1, 1)$ |
| $\\text{sech}(x)$ | Even | $-\\text{sech}(x)\\tanh(x)$ | $(0, 1]$ |

## Types & Variations

Hyperbolic functions can be viewed through the lens of their transformations. By scaling the variables, we observe how the functions grow or contract.

\`\`\`interactivegraph
\\cosh(ax)
params: a=1
range: a=0.5:2
\`\`\`

The graph above demonstrates the function $f(x) = \\cosh(ax)$. As the parameter $a$ increases, the curvature at the vertex $(0, 1)$ becomes more pronounced, representing a tighter "catenary" curve.

Similarly, we can investigate the transition of the hyperbolic tangent, which serves as a common activation function in machine learning due to its smooth mapping of real numbers into a bounded output interval.

\`\`\`interactivegraph
\\tanh(ax)
params: a=1
range: a=0.1:3
\`\`\`

Here, the parameter $a$ controls the "steepness" of the transition. As $a$ increases, the transition from $-1$ to $1$ becomes sharper, approaching a step function in the limit.

## How to Solve

Solving problems involving hyperbolic functions typically involves either simplifying expressions using exponential definitions or applying inverse functions to isolate a variable.

### Example 1: Simplifying an Identity
To prove $\\text{sech}^2(x) = 1 - \\tanh^2(x)$, we start with the fundamental identity:
$$\\cosh^2(x) - \\sinh^2(x) = 1$$
Divide the entire equation by $\\cosh^2(x)$:
$$\\frac{\\cosh^2(x)}{\\cosh^2(x)} - \\frac{\\sinh^2(x)}{\\cosh^2(x)} = \\frac{1}{\\cosh^2(x)}$$
$$1 - \\tanh^2(x) = \\text{sech}^2(x)$$

### Example 2: Solving an Equation
Consider the equation $\\sinh(x) = 3$. To solve for $x$, use the definition of the inverse hyperbolic sine:
$$x = \\text{arsinh}(3)$$
Using the logarithmic form $\\text{arsinh}(x) = \\ln(x + \\sqrt{x^2 + 1})$:
$$x = \\ln(3 + \\sqrt{3^2 + 1}) = \\ln(3 + \\sqrt{10})$$
This results in $x \\approx 1.818$.

### Analytical Framework for Integration
When integrating hyperbolic functions, the cycle of derivatives simplifies the process. For example:
$$\\int \\tanh(x) dx = \\int \\frac{\\sinh(x)}{\\cosh(x)} dx$$
Using $u$-substitution with $u = \\cosh(x)$, then $du = \\sinh(x) dx$:
$$\\int \\frac{1}{u} du = \\ln|u| + C = \\ln|\\cosh(x)| + C$$

## Summary

Hyperbolic functions are fundamental tools in mathematics, effectively bridging the gap between algebraic expressions of growth (exponentials) and geometric properties of curves. They are defined by the exponential function, which imparts a unique symmetry and ease of differentiation that distinguishes them from circular trigonometry. Their primary utility lies in their ability to model natural phenomena, such as catenaries in engineering and relativistic effects in physics, while serving as essential components in the study of differential equations and complex analysis. By mastering these functions, one gains a robust vocabulary for describing systems where growth, decay, and bounded transition are central to the underlying dynamics.`;export{e as default};