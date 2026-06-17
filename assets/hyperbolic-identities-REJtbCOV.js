var e=`# Hyperbolic Identities and Inverse Hyperbolic Forms

## Definition

Hyperbolic functions are a family of mathematical functions that are the hyperbolic analogs of the standard trigonometric functions. While circular trigonometric functions are related to the coordinates of points on a unit circle $x^2 + y^2 = 1$, hyperbolic functions are related to the coordinates of points on a unit hyperbola $x^2 - y^2 = 1$. The fundamental hyperbolic functions are the hyperbolic sine ($\\sinh$) and the hyperbolic cosine ($\\cosh$), defined using the natural exponential function $e^x$.

For any real or complex number $z$, the primary definitions are:
$$\\sinh(z) = \\frac{e^z - e^{-z}}{2}$$
$$\\cosh(z) = \\frac{e^z + e^{-z}}{2}$$

From these, we derive other hyperbolic functions, such as the hyperbolic tangent:
$$\\tanh(z) = \\frac{\\sinh(z)}{\\cosh(z)} = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$$

Inverse hyperbolic functions (often denoted as $\\text{arsinh}$, $\\text{arcosh}$, etc.) are the inverse mappings of these functions. Since the functions are defined via exponential forms, their inverses can be expressed using logarithmic forms. For example, $y = \\sinh(x)$ implies $x = \\text{arsinh}(y)$, which leads to:
$$\\text{arsinh}(z) = \\ln(z + \\sqrt{z^2 + 1})$$

## Key Terminology

To master hyperbolic calculus, one must be familiar with specific terms:

* **Exponential Basis:** The foundational definition of hyperbolic functions via $e^x$ and $e^{-x}$.
* **Hyperbolic Identity:** Algebraic relationships between hyperbolic functions, such as $\\cosh^2(x) - \\sinh^2(x) = 1$.
* **Area Functions:** The inverse hyperbolic functions are often called "area" functions (e.g., $\\text{arsinh}$ stands for area hyperbolic sine) because the result of $\\text{arsinh}(x)$ represents twice the area of a hyperbolic sector.
* **Domain and Range:** The intervals of definition for the functions. For instance, $\\text{arcosh}(x)$ is restricted to $x \\ge 1$ to maintain a one-to-one mapping.
* **Asymptotic Behavior:** The trend of hyperbolic functions as $x \\to \\infty$ or $x \\to -\\infty$, where they approach exponential curves.

## Purpose

The primary purpose of hyperbolic functions is to simplify the analysis of systems involving exponential growth and decay, as well as problems in geometry and physics that involve hyperbolic structures.

1. **Geometry:** They parameterize the hyperbola $x^2 - y^2 = 1$.
2. **Physics:** They appear naturally in special relativity (rapidity), the shape of a hanging cable (catenary curve), and the solution to wave equations in non-Euclidean spaces.
3. **Integration:** Many integrals of the form $\\int \\frac{dx}{\\sqrt{x^2+a^2}}$ or $\\int \\frac{dx}{a^2-x^2}$ are most efficiently solved using hyperbolic substitutions, as these functions behave predictably under differentiation and integration.
4. **Complex Analysis:** Hyperbolic functions provide a bridge between circular trigonometry and complex exponentials via Euler's formula, where $\\sin(iz) = i\\sinh(z)$.

## Fundamental Properties

Hyperbolic functions satisfy identities that mirror circular trigonometric identities, albeit with slight variations in sign, primarily due to the identity $\\cosh^2(x) - \\sinh^2(x) = 1$.

| Identity Name | Formula |
| :--- | :--- |
| Pythagorean Identity | $\\cosh^2(x) - \\sinh^2(x) = 1$ |
| Ratio Identity | $\\tanh(x) = \\frac{\\sinh(x)}{\\cosh(x)}$ |
| Reciprocal Identity | $\\text{sech}^2(x) = 1 - \\tanh^2(x)$ |
| Parity (Sine) | $\\sinh(-x) = -\\sinh(x)$ |
| Parity (Cosine) | $\\cosh(-x) = \\cosh(x)$ |
| Addition (Sine) | $\\sinh(x+y) = \\sinh(x)\\cosh(y) + \\cosh(x)\\sinh(y)$ |
| Addition (Cosine) | $\\cosh(x+y) = \\cosh(x)\\cosh(y) + \\sinh(x)\\sinh(y)$ |

These properties enable the simplification of complex expressions in calculus, particularly when dealing with integrals that result in logarithmic or radical forms.

## Types & Variations

Hyperbolic functions are classified into two primary groups: the fundamental hyperbolic functions and their inverse counterparts.

### Fundamental Functions
The six core functions are:
1. $\\sinh(x)$: Hyperbolic sine
2. $\\cosh(x)$: Hyperbolic cosine
3. $\\tanh(x)$: Hyperbolic tangent
4. $\\text{csch}(x) = 1/\\sinh(x)$: Hyperbolic cosecant
5. $\\text{sech}(x) = 1/\\cosh(x)$: Hyperbolic secant
6. $\\text{coth}(x) = 1/\\tanh(x)$: Hyperbolic cotangent

### Inverse Functions
The inverse functions are logarithmic in nature:
1. $\\text{arsinh}(x) = \\ln(x + \\sqrt{x^2 + 1})$
2. $\\text{arcosh}(x) = \\ln(x + \\sqrt{x^2 - 1})$ for $x \\ge 1$
3. $\\text{artanh}(x) = \\frac{1}{2}\\ln(\\frac{1+x}{1-x})$ for $|x| < 1$

The following interactive graph demonstrates how the hyperbolic cosine function behaves under a vertical stretch/compression transformation $f(x) = a \\cosh(x)$. Note how the parameter $a$ shifts the y-intercept of the catenary.

\`\`\`interactivegraph
a * \\cosh(x)
params: a=1
range: a=0.5:5
\`\`\`

The graph above shows the function $f(x) = a \\cosh(x)$. As $a$ increases, the "steepness" of the curves increases, and the vertex at $(0, a)$ moves further away from the x-axis.

## How to Solve

Solving problems involving hyperbolic identities typically requires a three-step analytical framework:

### 1. Algebraic Substitution
When faced with an integral such as $\\int \\frac{1}{\\sqrt{x^2+a^2}}dx$, the standard approach is to use the substitution $x = a \\sinh(u)$. This implies $dx = a \\cosh(u) du$.
Substituting into the integral:
$$\\int \\frac{a \\cosh(u)}{\\sqrt{a^2 \\sinh^2(u) + a^2}} du = \\int \\frac{a \\cosh(u)}{a \\cosh(u)} du = \\int du = u + C$$
Finally, back-substitute $u = \\text{arsinh}(x/a)$.

### 2. Differential Equation Reduction
Hyperbolic functions arise naturally in second-order linear differential equations of the form $y'' - y = 0$. The general solution is $y = c_1 \\sinh(x) + c_2 \\cosh(x)$. When solving initial value problems, apply the conditions $y(0)$ and $y'(0)$ to determine the constants $c_1$ and $c_2$.

### 3. Identity Verification
To verify if an identity holds, always convert the hyperbolic terms into their exponential definitions ($e^x$ and $e^{-x}$). Expand both sides of the equation and demonstrate they equate to the same algebraic expression.

Example: Verify $\\cosh^2(x) - \\sinh^2(x) = 1$.
$$(\\frac{e^x + e^{-x}}{2})^2 - (\\frac{e^x - e^{-x}}{2})^2$$
$$\\frac{e^{2x} + 2 + e^{-2x}}{4} - \\frac{e^{2x} - 2 + e^{-2x}}{4}$$
$$\\frac{e^{2x} - e^{2x} + 2 - (-2) + e^{-2x} - e^{-2x}}{4} = \\frac{4}{4} = 1$$

## Summary

Hyperbolic identities and their inverse forms constitute a critical segment of mathematical analysis. By leveraging the connection between exponential growth and hyperbolic geometry, mathematicians can resolve complex integration challenges and describe physical phenomena that circular trigonometry cannot address.

The core of the subject lies in the definition of $\\sinh(x)$ and $\\cosh(x)$ via exponentials, leading to a system of identities that mirror the familiar Pythagorean and addition formulas. Mastery requires consistent practice in converting between hyperbolic notation and logarithmic/exponential forms, as well as applying substitution techniques in calculus. Whether one is calculating the trajectory of a falling cable, solving complex differential equations, or performing non-standard integration, these functions serve as an elegant and powerful tool in the analytical toolkit.`;export{e as default};