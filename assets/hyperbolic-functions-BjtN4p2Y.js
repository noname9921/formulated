var e=`# Introduction to Hyperbolic Functions

Hyperbolic functions are a set of mathematical functions that are analogues of the ordinary trigonometric (circular) functions. While trigonometric functions relate to the geometry of the unit circle, hyperbolic functions relate to the geometry of the unit hyperbola. These functions play a vital role in physics, engineering, and calculus, particularly in scenarios involving wave propagation, potential theory, and special relativity.

## Definition

The primary hyperbolic functions are the hyperbolic sine ($\\sinh$) and the hyperbolic cosine ($\\cosh$). Unlike trigonometric functions which are defined by circles, these are defined by the exponential function $e^x$. The fundamental definitions are:

The hyperbolic sine is defined as:
$$\\sinh(x) = \\frac{e^x - e^{-x}}{2}$$

The hyperbolic cosine is defined as:
$$\\cosh(x) = \\frac{e^x + e^{-x}}{2}$$

From these, we derive other hyperbolic functions in analogy to trigonometry:

The hyperbolic tangent ($\\tanh$) is defined as:
$$\\tanh(x) = \\frac{\\sinh(x)}{\\cosh(x)} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$$

The hyperbolic cotangent ($\\coth$), hyperbolic secant ($\\text{sech}$), and hyperbolic cosecant ($\\text{csch}$) are defined as the reciprocals of the first three:
$$\\coth(x) = \\frac{1}{\\tanh(x)} = \\frac{e^x + e^{-x}}{e^x - e^{-x}}$$
$$\\text{sech}(x) = \\frac{1}{\\cosh(x)} = \\frac{2}{e^x + e^{-x}}$$
$$\\text{csch}(x) = \\frac{1}{\\sinh(x)} = \\frac{2}{e^x - e^{-x}}$$

## Key Terminology

To master this subject, one must understand several technical terms that distinguish hyperbolic behavior from periodic behavior:

1. **Hyperbola Geometry:** The functions are named "hyperbolic" because they parameterize the unit hyperbola defined by $x^2 - y^2 = 1$. Just as $(\\cos t, \\sin t)$ traces a circle, $(\\cosh t, \\sinh t)$ traces the right branch of a hyperbola.
2. **Exponential Growth:** Unlike the oscillating nature of circular functions, $\\cosh(x)$ and $\\sinh(x)$ grow exponentially as $x$ increases, reflecting the nature of $e^x$.
3. **Parity:** A function is even if $f(-x) = f(x)$ and odd if $f(-x) = -f(x)$. Here, $\\cosh(x)$ is an even function, while $\\sinh(x)$ is an odd function.
4. **Asymptotes:** The function $\\tanh(x)$ approaches $1$ as $x \\to \\infty$ and $-1$ as $x \\to -\\infty$, identifying $y = \\pm 1$ as horizontal asymptotes.
5. **Inverse Functions:** Often called area hyperbolic functions (e.g., $\\text{arsinh}$), these represent the inverse relationship, often expressed using natural logarithms.

## Purpose

The purpose of hyperbolic functions is twofold: they provide a simplified mathematical framework for solving differential equations and offer a natural language for systems involving exponential decay or growth.

In physical science, the catenary curve—the shape a hanging chain takes under its own weight—is modeled specifically by the hyperbolic cosine function. In relativity, the Lorentz transformation is essentially a rotation in four-dimensional spacetime, but the "angle" of rotation is replaced by a rapidity, and the trigonometric rotation matrix is replaced by one involving hyperbolic functions. This mapping ensures that the interval in Minkowski space remains invariant.

Furthermore, these functions bridge the gap between complex analysis and real-valued calculus. Through Euler's formula, $e^{ix} = \\cos x + i \\sin x$, we can see that:
$$\\sinh(x) = -i \\sin(ix)$$
$$\\cosh(x) = \\cos(ix)$$
This relationship allows mathematicians to translate complex oscillating problems into real-valued exponential problems, simplifying analytical derivations in electrostatics and heat transfer.

## Fundamental Properties

Hyperbolic functions satisfy a set of identities that mirror trigonometric identities, albeit with slight variations in sign. The most significant is the hyperbolic identity related to the unit hyperbola:

$$\\cosh^2(x) - \\sinh^2(x) = 1$$

Other useful identities include:
1. Addition Formulas:
   $$\\sinh(x + y) = \\sinh(x)\\cosh(y) + \\cosh(x)\\sinh(y)$$
   $$\\cosh(x + y) = \\cosh(x)\\cosh(y) + \\sinh(x)\\sinh(y)$$
2. Double Angle Formulas:
   $$\\sinh(2x) = 2\\sinh(x)\\cosh(x)$$
   $$\\cosh(2x) = \\cosh^2(x) + \\sinh^2(x)$$
3. Derivatives:
   $$\\frac{d}{dx} \\sinh(x) = \\cosh(x)$$
   $$\\frac{d}{dx} \\cosh(x) = \\sinh(x)$$
   $$\\frac{d}{dx} \\tanh(x) = \\text{sech}^2(x)$$

The derivatives are particularly elegant because they do not involve the sign changes encountered in circular trigonometry (e.g., the derivative of $\\sin x$ is $\\cos x$, but the derivative of $\\cos x$ is $-\\sin x$). This consistency makes them highly desirable in integration and differential equation solving.

| Function | Parity | Domain | Range | Asymptote |
| :--- | :--- | :--- | :--- | :--- |
| $\\sinh(x)$ | Odd | $(-\\infty, \\infty)$ | $(-\\infty, \\infty)$ | None |
| $\\cosh(x)$ | Even | $(-\\infty, \\infty)$ | $[1, \\infty)$ | None |
| $\\tanh(x)$ | Odd | $(-\\infty, \\infty)$ | $(-1, 1)$ | $y=\\pm 1$ |
| $\\text{sech}(x)$ | Even | $(-\\infty, \\infty)$ | $(0, 1]$ | $y=0$ |

## Types & Variations

The exploration of these functions often requires understanding how they transform under scaling. Using an interactive graph, one can observe how the parameter $a$ affects the steepness of the growth or the "flatness" of the hyperbolic curve.

\`\`\`interactivegraph
\\sinh(ax)
\\cosh(ax)
params: a=1
range: a=0.1:2
\`\`\`

The graph above shows the fundamental shapes of $\\sinh(ax)$ and $\\cosh(ax)$. As $a$ increases, the growth rate of the functions accelerates, reflecting how the hyperbolic curve becomes more "pointed" at the origin and steeper as $x$ moves away from zero.

We can also consider variations such as $\\tanh(ax)$, which represent sigmoidal transitions. These are frequently used in neural networks as activation functions because they provide a smooth, differentiable transition between two output states.

## How to Solve

Solving problems involving hyperbolic functions typically involves three distinct strategies: algebraic manipulation, logarithmic substitution, and differential calculus.

### Algebraic Manipulation
When faced with an identity such as $\\cosh(x) + \\sinh(x) = e^x$, you can simplify complex expressions by converting them into their exponential definitions. For instance, to solve $\\cosh(x) = 2$, we write:
$$\\frac{e^x + e^{-x}}{2} = 2$$
$$e^x + e^{-x} = 4$$
Multiply by $e^x$ to form a quadratic:
$$(e^x)^2 - 4(e^x) + 1 = 0$$
Using the quadratic formula for $u = e^x$:
$$u = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = 2 \\pm \\sqrt{3}$$
Taking the natural logarithm:
$$x = \\ln(2 \\pm \\sqrt{3})$$

### Inverse Representation
The inverse hyperbolic functions are defined in terms of logarithms. For example:
$$\\text{arsinh}(x) = \\ln(x + \\sqrt{x^2 + 1})$$
This identity is useful when solving integrals of the form $\\int \\frac{1}{\\sqrt{x^2+1}} dx$. Recognizing the structure of the inverse hyperbolic function saves significant time during calculus examinations.

### Calculus Applications
In differential equations, hyperbolic functions often appear as solutions to linear homogeneous equations with constant coefficients, such as:
$$y'' - k^2y = 0$$
The general solution is $y(x) = A\\cosh(kx) + B\\sinh(kx)$. Unlike the $y'' + k^2y = 0$ case (which yields $A\\cos(kx) + B\\sin(kx)$), the hyperbolic solution reflects unstable or exponential behavior, essential for understanding systems that diverge rather than oscillate.

## Summary

Hyperbolic functions are fundamental mathematical tools that extend the concepts of trigonometry into the realm of exponential growth and non-periodic geometry. Defined by the properties of $e^x$, they provide a clean, consistent set of rules for differentiation and integration that mirror circular functions while uniquely describing natural phenomena like catenary curves, relativity, and signal processing.

Their utility lies in the fact that they are essentially exponential components organized into geometric relationships. Whether one is calculating the trajectory of a hanging cable or working within the constraints of special relativity, the hyperbolic functions $\\sinh, \\cosh$, and $\\tanh$ provide the necessary bridge between algebraic expression and physical reality. Mastery of these functions requires moving beyond memorization of identities and toward an understanding of their deep relationship with the exponential function and the unit hyperbola. By leveraging their logarithmic inverses and predictable derivative structures, one can navigate complex problems in physics and engineering with greater efficiency.`;export{e as default};