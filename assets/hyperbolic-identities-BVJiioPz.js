var e=`# Hyperbolic Identities and Inverse Hyperbolic Forms

Hyperbolic functions are a set of mathematical functions that are analogues of the ordinary trigonometric functions. While trigonometric functions are related to the circle defined by $x^2+y^2=1$, hyperbolic functions are related to the hyperbola defined by $x^2-y^2=1$. These functions are essential in fields ranging from physics—such as the study of catenary curves and special relativity—to engineering and complex analysis.

## Definition

Hyperbolic functions are defined using the exponential function $e^x$. The two primary functions are the hyperbolic sine ($\\sinh$) and the hyperbolic cosine ($\\cosh$). They are defined as:

$$\\sinh(x)=\\frac{e^x-e^{-x}}{2}$$

$$\\cosh(x)=\\frac{e^x+e^{-x}}{2}$$

From these fundamental definitions, the other hyperbolic functions are derived by analogy to their trigonometric counterparts:

$$\\tanh(x)=\\frac{\\sinh(x)}{\\cosh(x)}=\\frac{e^x-e^{-x}}{e^x+e^{-x}}$$

$$\\coth(x)=\\frac{\\cosh(x)}{\\sinh(x)}=\\frac{e^x+e^{-x}}{e^x-e^{-x}}$$

$$\\text{sech}(x)=\\frac{1}{\\cosh(x)}=\\frac{2}{e^x+e^{-x}}$$

$$\\text{csch}(x)=\\frac{1}{\\sinh(x)}=\\frac{2}{e^x-e^{-x}}$$

These functions represent the hyperbolic angle. Just as $x^2+y^2=1$ can be parameterized by $(\\cos(t), \\sin(t))$, the unit hyperbola $x^2-y^2=1$ is parameterized by $(\\cosh(t), \\sinh(t))$.

## Key Terminology

To navigate the study of hyperbolic functions, one must be familiar with specific terms:

- **Hyperbolic Angle:** The parameter $t$ in the coordinate pair $(\\cosh(t), \\sinh(t))$ that defines the position on a unit hyperbola.
- **Catenary:** The physical curve shape a hanging chain or cable assumes under its own weight, described mathematically by the $\\cosh(x)$ function.
- **Transcendental Function:** Hyperbolic functions are transcendental because they cannot be expressed as roots of polynomial equations with rational coefficients.
- **Inverse Hyperbolic Functions:** These are the inverse operations to the hyperbolic functions, often denoted with an "arc-" prefix (e.g., $\\text{arsinh}(x)$ or $\\sinh^{-1}(x)$). These functions provide the hyperbolic angle that yields a specific ratio.
- **Asymptote:** Lines that a curve approaches arbitrarily closely. For instance, $\\tanh(x)$ has horizontal asymptotes at $y=1$ and $y=-1$.

## Purpose

Hyperbolic functions serve a distinct purpose in both pure and applied mathematics. In geometry, they provide a parametrization of the hyperbola, which is vital for integration techniques and coordinate transformations.

In physics, they describe wave propagation in viscoelastic media and are integral to special relativity. Specifically, the Lorentz transformation, which relates space and time coordinates between two inertial frames moving at a constant velocity $v$, uses the rapidity $\\phi$ where $v/c = \\tanh(\\phi)$. Here, the hyperbolic functions naturally model the geometry of Minkowski spacetime.

Furthermore, these functions bridge the gap between exponential growth/decay and periodic oscillations. Because they are based on $e^x$, they inherit the convenient derivative properties of exponential functions, making them indispensable in solving differential equations involving cooling, signal attenuation, and potential theory.

## Fundamental Properties

The identity $\\cosh^2(x)-\\sinh^2(x)=1$ is the hyperbolic analogue of the Pythagorean identity $\\cos^2(x)+\\sin^2(x)=1$. Below is a table summarizing key hyperbolic identities, which are derived directly from the exponential definitions:

| Identity Name | Formula |
| :--- | :--- |
| Pythagorean | $\\cosh^2(x)-\\sinh^2(x)=1$ |
| Ratio | $\\tanh^2(x)=1-\\text{sech}^2(x)$ |
| Ratio | $\\coth^2(x)=1+\\text{csch}^2(x)$ |
| Sum of Angles | $\\sinh(x+y)=\\sinh(x)\\cosh(y)+\\cosh(x)\\sinh(y)$ |
| Sum of Angles | $\\cosh(x+y)=\\cosh(x)\\cosh(y)+\\sinh(x)\\sinh(y)$ |
| Parity (Sine) | $\\sinh(-x)=-\\sinh(x)$ |
| Parity (Cosine) | $\\cosh(-x)=\\cosh(x)$ |

These identities allow for the simplification of complex hyperbolic expressions, much like trigonometric identities facilitate the manipulation of sine and cosine terms.

## Types & Variations

### Inverse Hyperbolic Functions
Inverse hyperbolic functions can be expressed using natural logarithms. These arise frequently in integral calculus, specifically when integrating functions of the form $1/\\sqrt{x^2 \\pm a^2}$.

The primary inverse forms are:

$$\\text{arsinh}(x)=\\ln(x+\\sqrt{x^2+1})$$

$$\\text{arcosh}(x)=\\ln(x+\\sqrt{x^2-1}), \\quad x \\geq 1$$

$$\\text{artanh}(x)=\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right), \\quad |x|<1$$

### Interactive Parameter Exploration
To visualize how the scaling factor $a$ affects the growth of a hyperbolic function, we can examine $f(x) = \\cosh(ax)$. The parameter $a$ controls the "steepness" of the catenary curve.

\`\`\`interactivegraph
\\cosh(ax)
params: a=1
range: a=0.5:2
\`\`\`

In the plot above, varying $a$ changes the width of the hyperbolic cosine curve. As $a$ increases, the curve becomes narrower and approaches the y-axis faster, while decreasing $a$ flattens the curve.

### Static Comparison
The graph below plots $f(x) = \\sinh(x)$ and $g(x) = \\tanh(x)$. Notice that $\\sinh(x)$ grows exponentially for large $x$, while $\\tanh(x)$ is bounded between $-1$ and $1$.

\`\`\`graph
\\sinh(x)
\\tanh(x)
\`\`\`

## How to Solve

Solving problems involving hyperbolic identities requires a systematic approach, often leveraging the exponential definitions or specific algebraic substitutions.

### 1. Using Exponential Definitions
When an expression involves mixed hyperbolic functions, the most robust method is to convert all terms to their $e^x$ forms. 
*Example:* Prove $\\sinh(2x) = 2\\sinh(x)\\cosh(x)$.
*Derivation:* 
$\\text{RHS} = 2 \\left(\\frac{e^x-e^{-x}}{2}\\right) \\left(\\frac{e^x+e^{-x}}{2}\\right)$
$= 2 \\left(\\frac{e^{2x} - e^{-2x}}{4}\\right) = \\frac{e^{2x}-e^{-2x}}{2} = \\sinh(2x) = \\text{LHS}$.

### 2. Solving Inverse Equations
To solve for $x$ in an equation like $\\cosh(x) = y$, use the quadratic form of the exponential definition.
Set $u = e^x$:
$\\frac{u + u^{-1}}{2} = y \\implies u + \\frac{1}{u} = 2y \\implies u^2 - 2yu + 1 = 0$.
Applying the quadratic formula for $u$:
$u = \\frac{2y \\pm \\sqrt{4y^2 - 4}}{2} = y \\pm \\sqrt{y^2-1}$.
Since $u = e^x$, take the natural log:
$x = \\ln(y \\pm \\sqrt{y^2-1})$.
This confirms the logarithmic form of $\\text{arcosh}(y)$.

### 3. Calculus Integration
When integrating expressions such as $\\int \\frac{1}{\\sqrt{x^2+a^2}} dx$, use the substitution $x = a\\sinh(u)$. 
Then $dx = a\\cosh(u) du$.
The integral becomes $\\int \\frac{a\\cosh(u)}{\\sqrt{a^2\\sinh^2(u)+a^2}} du = \\int \\frac{a\\cosh(u)}{a\\cosh(u)} du = \\int du = u + C = \\text{arsinh}\\left(\\frac{x}{a}\\right) + C$.

## Summary

Hyperbolic functions are fundamental mathematical constructs that extend the utility of exponential functions into geometric and physical modeling. By mirroring the structure of trigonometric identities, they provide a powerful set of tools for solving differential equations, calculating arc lengths of catenary curves, and understanding the relativistic transformation of space-time.

The core of mastering these functions lies in:
1. Memorizing the fundamental exponential definitions of $\\sinh(x)$ and $\\cosh(x)$.
2. Recognizing the primary Pythagorean identity $\\cosh^2(x)-\\sinh^2(x)=1$.
3. Utilizing the logarithmic representations of inverse hyperbolic functions to solve algebraic and integral equations.
4. Applying hyperbolic substitutions to simplify complex radical integrals that appear in classical mechanics and engineering.

Through these methods, one can effectively transition between the algebraic domain of $e^x$ and the geometric domain of the hyperbola, allowing for seamless analytical work in advanced mathematics and physics.`;export{e as default};