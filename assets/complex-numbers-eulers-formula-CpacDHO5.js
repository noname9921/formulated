var e=`# Euler's Formula and Complex Exponential Forms

Euler's formula is widely considered one of the most remarkable identities in mathematics, often described as the "most beautiful equation" due to its elegant connection between the fundamental constants of arithmetic, geometry, and analysis. It bridges the gap between trigonometric functions and the exponential function, providing a gateway to complex analysis, signal processing, and quantum mechanics.

## Definition

Euler's formula states that for any real number $\\theta$, the complex exponential function can be expressed in terms of trigonometric functions:

$$e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$$

In this identity, $e$ is the base of the natural logarithm (approximately $2.71828$), $i$ is the imaginary unit satisfying $i^2 = -1$, and $\\theta$ is the angle in radians. When $\\theta = \\pi$, this formula yields the famous Euler's identity:

$$e^{i\\pi} + 1 = 0$$

This specific case incorporates the five most important mathematical constants: $0, 1, e, i,$ and $\\pi$. By extending the domain of the exponential function from real numbers to complex numbers, Euler's formula defines how rotation in the complex plane maps to exponential growth.

## Key Terminology

To fully grasp the mechanics of this formula, one must understand several core concepts:

- **Complex Plane:** A geometric representation of complex numbers $z = x + iy$, where the horizontal axis represents the real part ($x$) and the vertical axis represents the imaginary part ($y$).
- **Imaginary Unit ($i$):** Defined such that $i = \\sqrt{-1}$. It allows for the existence of solutions to polynomials that have no real roots.
- **Polar Form:** A way of representing a complex number $z = r(\\cos\\theta + i\\sin\\theta)$, where $r$ is the magnitude (modulus) and $\\theta$ is the argument (angle).
- **Taylor Series:** An infinite sum of terms that can represent a function as a polynomial. Euler’s formula is derived by comparing the Taylor series of $e^x$, $\\sin(x)$, and $\\cos(x)$.
- **Modulus ($|z|$):** The distance of a complex number from the origin in the complex plane, calculated as $\\sqrt{x^2 + y^2}$.
- **Argument ($\\text{arg}(z)$):** The angle $\\theta$ formed by the line segment connecting the origin to $z$ with the positive real axis.

## Purpose

The primary purpose of Euler's formula is to simplify the manipulation of complex numbers and oscillatory functions. In traditional trigonometry, identities like the sum-of-angles formula (e.g., $\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b$) are algebraically cumbersome. By converting trigonometric expressions into complex exponentials, these identities become simple laws of exponents:

$$e^{ia} \\cdot e^{ib} = e^{i(a+b)}$$

This transformation is essential in engineering and physics. In electrical engineering, it is used to analyze alternating current (AC) circuits, where voltages and currents are modeled as complex phasors. In quantum mechanics, the wave function $\\psi$ is inherently complex, and Euler's formula allows physicists to describe wave propagation as rotations in the complex Hilbert space.

## Fundamental Properties

Euler's formula possesses several properties that define its utility in higher mathematics:

1. **Periodic Nature:** Because $\\cos(\\theta)$ and $\\sin(\\theta)$ are periodic with period $2\\pi$, $e^{i\\theta}$ is also periodic: $e^{i(\\theta + 2\\pi)} = e^{i\\theta}$.
2. **Unity Modulus:** For any real $\\theta$, the magnitude of $e^{i\\theta}$ is always $1$:
   $$|e^{i\\theta}| = \\sqrt{\\cos^2(\\theta) + \\sin^2(\\theta)} = \\sqrt{1} = 1$$
   This implies that every number of the form $e^{i\\theta}$ lies on the unit circle in the complex plane.
3. **Differentiation:** The derivative of the complex exponential follows the same rule as the real exponential:
   $$\\frac{d}{d\\theta}(e^{i\\theta}) = i e^{i\\theta}$$
   This confirms that $e^{i\\theta}$ is a solution to the simple harmonic motion differential equation $\\frac{d^2y}{d\\theta^2} + y = 0$.
4. **Relationship to Hyperbolic Functions:** By substituting $i\\theta$ for $\\theta$, one can derive the relationship to hyperbolic functions:
   $$\\cosh(\\theta) = \\frac{e^\\theta + e^{-\\theta}}{2}, \\quad \\sinh(\\theta) = \\frac{e^\\theta - e^{-\\theta}}{2}$$

The following table summarizes the conversion between rectangular, polar, and exponential forms of a complex number $z = x + iy$:

| Form | Expression | Components |
| :--- | :--- | :--- |
| Rectangular | $x + iy$ | $x = r\\cos\\theta, y = r\\sin\\theta$ |
| Polar | $r(\\cos\\theta + i\\sin\\theta)$ | $r = \\sqrt{x^2 + y^2}, \\theta = \\arctan(y/x)$ |
| Exponential | $re^{i\\theta}$ | $r = |z|, \\theta = \\text{arg}(z)$ |

## Types & Variations

Euler's formula can be extended to several variations depending on the context:

### The De Moivre's Theorem
A direct consequence of Euler's formula is De Moivre's Theorem, which describes the powers of complex numbers:
$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$
This is derived from $(e^{i\\theta})^n = e^{in\\theta}$.

### Complex Trigonometric Definitions
Euler's formula allows us to define sine and cosine for any complex number $z$:
$$\\cos(z) = \\frac{e^{iz} + e^{-iz}}{2}$$
$$\\sin(z) = \\frac{e^{iz} - e^{-iz}}{2i}$$

### Generalized Exponential Form
For a general complex number $z = x + iy$, the exponential is defined as:
$$e^z = e^{x+iy} = e^x \\cdot e^{iy} = e^x(\\cos y + i\\sin y)$$
This shows that the real part of the exponent determines the magnitude (scaling), while the imaginary part determines the rotation (angle).

To visualize how the parameter $\\theta$ affects the real and imaginary components of $e^{i\\theta}$, we can observe the following interactive graph:

\`\`\`interactivegraph
\\cos(ax)
\\sin(ax)
params: a=1
range: a=-3:3
\`\`\`
This plot illustrates the real component $\\cos(ax)$ and the imaginary component $\\sin(ax)$ as functions of an angular velocity parameter $a$. Adjusting $a$ changes the frequency of the oscillations, demonstrating how the exponential form encodes periodic movement.

## How to Solve

Solving problems involving Euler's formula usually involves transforming between the algebraic domain (rectangular) and the rotational domain (exponential).

### Example: Converting to Polar Form
To convert $z = 1 + i$ into exponential form:
1. Find the modulus: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.
2. Find the argument: $\\theta = \\arctan(1/1) = \\pi/4$.
3. Write as $re^{i\\theta}$: $z = \\sqrt{2}e^{i\\pi/4}$.

### Example: Raising a Complex Number to a Power
To calculate $(1 + i)^{10}$:
1. Use the polar form: $z = (\\sqrt{2}e^{i\\pi/4})^{10}$.
2. Apply exponent rules: $z = (\\sqrt{2})^{10} \\cdot e^{i(10\\pi/4)}$.
3. Simplify: $z = 32 \\cdot e^{i5\\pi/2}$.
4. Since $5\\pi/2$ is coterminal with $\\pi/2$: $z = 32(\\cos(\\pi/2) + i\\sin(\\pi/2)) = 32(0 + i) = 32i$.

### Derivation via Taylor Series
The derivation remains the most rigorous method to "solve" or verify the identity:
1. $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$
2. Substitute $ix$ for $x$: $e^{ix} = 1 + ix + \\frac{(ix)^2}{2!} + \\frac{(ix)^3}{3!} + \\dots$
3. Use $i^2=-1, i^3=-i, i^4=1$: $e^{ix} = 1 + ix - \\frac{x^2}{2!} - \\frac{ix^3}{3!} + \\frac{x^4}{4!} + \\dots$
4. Group real and imaginary parts: $e^{ix} = (1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots) + i(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots)$
5. Identify the Taylor series for cosine and sine: $e^{ix} = \\cos(x) + i\\sin(x)$.

## Summary

Euler's formula is the cornerstone of modern complex analysis and signal processing. It functions as a translation dictionary between linear growth (exponentials) and circular motion (trigonometry). By understanding that $e^{i\\theta}$ represents a rotation by angle $\\theta$ in the complex plane, mathematicians and engineers gain a powerful tool for simplifying complex differential equations and understanding the phase behavior of waves. From calculating the roots of unity to analyzing electronic impedance, the formula remains an indispensable asset in the analytical toolkit. Its simplicity hides a profound truth about the nature of space, rotation, and growth, cementing its status as a fundamental pillar of mathematical theory.`;export{e as default};