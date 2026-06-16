var e=`# Complex Numbers in Trigonometric (Polar) Form

## Definition

A complex number $z = a + bi$ can be expressed in the Cartesian plane where $a$ represents the real component and $b$ represents the imaginary component. The trigonometric, or polar, form of a complex number provides an alternative representation based on the distance of the number from the origin and the angle it makes with the positive real axis.

The transformation from Cartesian coordinates $(a, b)$ to polar coordinates $(r, \\theta)$ is defined by the relationships:
$a = r\\cos(\\theta)$
$b = r\\sin(\\theta)$

Substituting these into the standard rectangular form $z = a + bi$ yields the trigonometric form:
$z = r(\\cos(\\theta) + i\\sin(\\theta))$

In this expression, $r$ is the modulus (or absolute value) of the complex number, representing the length of the vector from the origin $(0,0)$ to the point $(a,b)$. The variable $\\theta$ is the argument of the complex number, representing the angle measured counter-clockwise from the positive real axis. This representation is mathematically significant because it transforms the operation of multiplication and division of complex numbers from algebraic expansion into geometric rotation and scaling.

## Key Terminology

To master complex numbers in polar form, one must be familiar with the following core terms:

| Term | Definition | Mathematical Expression |
| :--- | :--- | :--- |
| Modulus | The distance from the origin to the point $z$ in the complex plane. | $r = |z| = \\sqrt{a^2 + b^2}$ |
| Argument | The angle formed with the positive real axis. | $\\theta = \\operatorname{atan2}(b, a)$ |
| Principal Argument | The unique value of $\\theta$ within the interval $(-\\pi, \\pi]$ or $[0, 2\\pi)$. | $\\operatorname{Arg}(z)$ |
| Complex Plane | A geometric representation of complex numbers using the real axis (x) and imaginary axis (y). | $\\mathbb{C}$ |
| Rectangular Form | The standard $a + bi$ representation of a complex number. | $z = a + bi$ |

The argument $\\theta$ is multi-valued, given that adding any integer multiple of $2\\pi$ results in the same position in the complex plane. Thus, $\\theta_n = \\theta + 2n\\pi$ for $n \\in \\mathbb{Z}$.

## Purpose

The primary purpose of using the trigonometric form is to simplify complex arithmetic, particularly regarding powers and roots. While adding complex numbers is more intuitive in rectangular form, multiplying or dividing them becomes cumbersome.

Consider the product of two complex numbers $z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ and $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$. Using the trigonometric addition formulas, their product is:
$z_1z_2 = r_1r_2(\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2))$

This demonstrates that multiplication in the complex plane is equivalent to multiplying the moduli and adding the arguments. This principle extends to De Moivre's Theorem, which allows for the efficient calculation of powers:
$z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$

Furthermore, finding roots of complex numbers, which is algebraically difficult in rectangular form, becomes straightforward in polar form:
$z^{1/n} = r^{1/n}(\\cos(\\frac{\\theta + 2k\\pi}{n}) + i\\sin(\\frac{\\theta + 2k\\pi}{n}))$
for $k = 0, 1, 2, \\dots, n-1$.

## Fundamental Properties

The trigonometric form adheres to several fundamental properties that define the behavior of complex numbers under transformation:

1. **Equality:** Two complex numbers $z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ and $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$ are equal if and only if $r_1 = r_2$ and $\\theta_1 = \\theta_2 + 2k\\pi$ for some integer $k$.
2. **Conjugation:** The complex conjugate of $z = r(\\cos\\theta + i\\sin\\theta)$ is $\\bar{z} = r(\\cos(-\\theta) + i\\sin(-\\theta))$. This geometrically corresponds to a reflection across the real axis.
3. **Reciprocals:** The reciprocal of a non-zero complex number is $z^{-1} = \\frac{1}{r}(\\cos(-\\theta) + i\\sin(-\\theta))$.
4. **Euler’s Link:** The trigonometric form is the bridge to the exponential form $z = re^{i\\theta}$, derived from Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

The interaction between the radius $r$ and the angle $\\theta$ is best visualized through the following interactive tool, which demonstrates how varying the magnitude and the angle changes the position of the complex number in the complex plane.

\`\`\`interactivegraph
r * \\cos(x)
r * \\sin(x)
params: r=1, x=0.785
range: r=0:5, x=0:6.28
\`\`\`

The graph above shows the real and imaginary components of a complex number where $r$ scales the distance from the origin and $x$ (our $\\theta$) rotates the point. Users can manipulate $r$ to see the radial expansion and $x$ to see the angular rotation.

## Types & Variations

Complex numbers in polar form are categorized based on their representation:

* **Trigonometric Form:** The expression $r(\\cos\\theta + i\\sin\\theta)$. This is the standard pedagogical approach.
* **Exponential Form:** A compact notation using Euler's formula $re^{i\\theta}$. This is the preferred form for engineering and physics calculations due to its ease of differentiation and integration.
* **Cis Form:** An abbreviated notation where $\\operatorname{cis}(\\theta) = \\cos\\theta + i\\sin\\theta$. This is often used to simplify long algebraic expressions involving complex numbers.
* **Polar Coordinates:** Represented as $[r, \\theta]$. While mathematically synonymous with the trigonometric form, it is often used in context-specific settings such as electrical engineering (phasor notation).

These variations do not change the underlying value of the complex number; they serve to provide context-dependent efficiency. For instance, while $\\operatorname{cis}(\\theta)$ is convenient for handwriting, the exponential form $e^{i\\theta}$ is required for calculus-based transformations.

## How to Solve

Converting and solving problems in polar form involves a systematic approach. Below is the methodological framework for working with these numbers.

### Converting from Rectangular to Polar
Given $z = a + bi$:
1. Calculate the modulus: $r = \\sqrt{a^2 + b^2}$.
2. Determine the argument: $\\theta = \\arctan(b/a)$.
3. Adjust the quadrant: Since $\\arctan$ returns values in $(-\\pi/2, \\pi/2)$, if the point $(a, b)$ is in the second or third quadrant (where $a < 0$), add $\\pi$ to the result.
4. Write in form: $r(\\cos\\theta + i\\sin\\theta)$.

### Converting from Polar to Rectangular
Given $z = r(\\cos\\theta + i\\sin\\theta)$:
1. Distribute $r$: $z = (r\\cos\\theta) + i(r\\sin\\theta)$.
2. Evaluate the trigonometric functions to obtain $a$ and $b$.

### Applying De Moivre’s Theorem
To compute $z^n$:
1. Convert $z$ to $r(\\cos\\theta + i\\sin\\theta)$.
2. Apply the exponent to the modulus: $r^n$.
3. Multiply the argument by the exponent: $n\\theta$.
4. Result: $r^n(\\cos(n\\theta) + i\\sin(n\\theta))$.

### Example Case: Finding Roots
To find the square roots of $z = 1 + i$:
1. $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.
2. $\\theta = \\arctan(1/1) = \\pi/4$.
3. $z = \\sqrt{2}(\\cos(\\pi/4) + i\\sin(\\pi/4))$.
4. Roots are $w_k = (\\sqrt{2})^{1/2} (\\cos(\\frac{\\pi/4 + 2k\\pi}{2}) + i\\sin(\\frac{\\pi/4 + 2k\\pi}{2}))$.
5. For $k=0$, $w_0 = 2^{1/4}(\\cos(\\pi/8) + i\\sin(\\pi/8))$.
6. For $k=1$, $w_1 = 2^{1/4}(\\cos(9\\pi/8) + i\\sin(9\\pi/8))$.

## Summary

Complex numbers in trigonometric form extend the utility of the complex number system by providing a geometric interpretation of algebraic operations. By defining a number through its distance from the origin ($r$) and its angular orientation ($\\theta$), we gain the ability to perform complex exponentiation and root extraction with elegance and efficiency. 

Key takeaways include:
- The transformation between rectangular and polar forms relies on the Pythagorean identity and the definition of trigonometric ratios.
- Multiplication and division are reduced to additive and subtractive processes of the arguments.
- De Moivre's Theorem acts as the bridge for powers and roots, moving calculations out of the realm of binomial expansion into simple arithmetic.
- The use of Euler's formula creates a seamless transition to the exponential form, which is vital for advanced analysis in fields such as signal processing, quantum mechanics, and fluid dynamics.

Mastering this topic requires rigorous attention to the quadrant of the argument and the periodicity of trigonometric functions. When approached with a focus on the geometric meaning—where $r$ is a scale factor and $\\theta$ is an operator for rotation—complex arithmetic transforms from a series of abstract rules into a coherent, visualizable system of rotations and dilations in the complex plane.`;export{e as default};