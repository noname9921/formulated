var e=`# Complex Numbers

## Definition

A complex number is an extension of the real number system that allows for the solution of equations that have no real roots. Formally, a complex number $z$ is defined as an ordered pair of real numbers $(a, b)$, usually written in the form $z=a+bi$, where $a$ and $b$ are real numbers and $i$ is the imaginary unit, defined by the property $i^2=-1$.

In this expression, $a$ is referred to as the real part of $z$, denoted as $\\text{Re}(z)$, and $b$ is the imaginary part of $z$, denoted as $\\text{Im}(z)$. While $b$ is a real number, the term $bi$ represents the imaginary component of the number. The set of all complex numbers is denoted by the symbol $\\mathbb{C}$. Historically, these numbers were once dismissed as "imaginary" or "impossible" because they do not correspond to magnitudes on a standard linear number line. However, they are essential for describing physical phenomena in electromagnetism, quantum mechanics, and control theory.

Geometrically, complex numbers are represented on the complex plane (or Argand diagram). In this plane, the horizontal axis (the x-axis) represents the real part, and the vertical axis (the y-axis) represents the imaginary part. Thus, every point $(a, b)$ in the Cartesian plane corresponds to the unique complex number $z=a+bi$.

## Key Terminology

To navigate the arithmetic and algebraic properties of complex numbers, one must be familiar with several fundamental terms:

| Term | Definition |
| :--- | :--- |
| Imaginary Unit | The number $i$ such that $i^2 = -1$. |
| Real Part | The scalar $a$ in $z=a+bi$. |
| Imaginary Part | The scalar $b$ in $z=a+bi$. |
| Modulus | The magnitude of $z$, denoted $|z| = \\sqrt{a^2+b^2}$. |
| Argument | The angle $\\theta$ of $z$ from the positive real axis. |
| Conjugate | The number $\\bar{z} = a-bi$. |
| Polar Form | The representation $z=r(\\cos\\theta+i\\sin\\theta)$. |
| Exponential Form | The representation $z=re^{i\\theta}$ via Euler's formula. |

The modulus $r = |z|$ measures the distance of the point from the origin $(0,0)$ in the complex plane. The argument $\\theta = \\text{arg}(z)$ represents the rotation from the positive real axis. Using basic trigonometry, we know $a = r\\cos\\theta$ and $b = r\\sin\\theta$, which directly bridges the gap between Cartesian and polar representations.

## Purpose

The primary purpose of complex numbers is to provide a complete algebraic system where every non-constant polynomial has a root. This is known as the Fundamental Theorem of Algebra, which states that every polynomial of degree $n$ with complex coefficients has exactly $n$ complex roots (counting multiplicity).

Beyond pure algebra, complex numbers simplify calculations in trigonometry and signal processing. By using Euler’s identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, one can transform difficult trigonometric identities into simple algebraic manipulations of exponents. For example, the addition formulas for sine and cosine are naturally derived from the property $e^{i(a+b)} = e^{ia}e^{ib}$.

In engineering, complex numbers are used to represent alternating current (AC) circuits, where voltage and current are treated as complex amplitudes (phasors). This allows the use of impedance, a complex value that encapsulates both resistance and reactance, turning differential equations into simple algebraic equations. In quantum mechanics, the wave function is essentially complex-valued, meaning the probability density is derived from the modulus square $| \\psi |^2$, ensuring a non-negative real result.

## Fundamental Properties

Complex numbers behave like real numbers under addition and multiplication, provided one consistently applies the rule $i^2 = -1$.

**1. Equality:** Two complex numbers $z_1 = a+bi$ and $z_2 = c+di$ are equal if and only if $a=c$ and $b=d$.

**2. Addition and Subtraction:** These operations are performed component-wise.
$z_1 + z_2 = (a+c) + (b+d)i$
$z_1 - z_2 = (a-c) + (b-d)i$

**3. Multiplication:** This is treated as a binomial expansion.
$(a+bi)(c+di) = ac + adi + bci + bdi^2$
Since $i^2 = -1$, this simplifies to:
$(ac-bd) + (ad+bc)i$

**4. Division:** To divide complex numbers, multiply the numerator and denominator by the conjugate of the denominator:
$$\\frac{a+bi}{c+di} \\cdot \\frac{c-di}{c-di} = \\frac{(ac+bd) + (bc-ad)i}{c^2+d^2}$$

**5. Conjugation:** The complex conjugate $\\bar{z} = a-bi$ satisfies several critical properties, including $\\overline{z_1+z_2} = \\bar{z_1} + \\bar{z_2}$ and $\\overline{z_1 z_2} = \\bar{z_1} \\bar{z_2}$. Additionally, $z\\bar{z} = a^2+b^2 = |z|^2$, which is always a non-negative real number.

**6. De Moivre's Theorem:** This relates powers of complex numbers to their polar form:
$$[r(\\cos\\theta+i\\sin\\theta)]^n = r^n(\\cos(n\\theta)+i\\sin(n\\theta))$$
This is immensely powerful for calculating roots of complex numbers, such as finding the $n$-th roots of unity, which are the solutions to $z^n = 1$.

## Types & Variations

Complex numbers can be classified based on their values or the representation used.

**Purely Real Numbers:** A complex number where $b=0$. These lie entirely on the horizontal axis of the complex plane.

**Purely Imaginary Numbers:** A complex number where $a=0$ (and $b \\neq 0$). These lie on the vertical axis of the complex plane.

**Complex Numbers of Unit Modulus:** These satisfy $|z|=1$ and lie on the unit circle in the complex plane. They take the form $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

**Roots of Unity:** These are complex numbers that satisfy $z^n = 1$. They are located at the vertices of a regular $n$-sided polygon centered at the origin, with all vertices lying on the unit circle.

**Gaussian Integers:** These are complex numbers $a+bi$ where both $a$ and $b$ are integers. They form a ring analogous to the standard integers and are used extensively in number theory for proofs involving sum-of-two-squares theorems.

## How to Solve

Solving problems involving complex numbers often requires switching between representations to simplify the arithmetic.

**Scenario 1: Simplifying powers of $i$.**
Because $i^1 = i$, $i^2 = -1$, $i^3 = -i$, and $i^4 = 1$, the powers of $i$ repeat in a cycle of 4. To calculate $i^n$, divide $n$ by 4 and check the remainder $r$. The result is $i^r$.

**Scenario 2: Conversion.**
To convert $z=a+bi$ to polar form $r(\\cos\\theta+i\\sin\\theta)$:
1. Calculate the modulus: $r = \\sqrt{a^2+b^2}$.
2. Determine the argument: $\\theta = \\text{atan2}(b, a)$. Note: $\\text{atan2}$ is used instead of $\\arctan(b/a)$ to ensure the correct quadrant is identified.

**Scenario 3: Solving Quadratic Equations.**
For a quadratic equation $ax^2+bx+c=0$ where the discriminant $D = b^2-4ac < 0$, the roots are given by the standard quadratic formula:
$$z = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-b \\pm i\\sqrt{|D|}}{2a}$$
This produces a conjugate pair of complex numbers.

**Scenario 4: Geometric transformations.**
Complex numbers can represent linear transformations in the plane. Multiplying a complex number $z$ by $e^{i\\alpha}$ performs a rotation of $z$ about the origin by an angle $\\alpha$. Multiplying by a real number $k$ performs a scaling (dilation) by a factor of $k$.

Consider the transformation $f(z) = (1+i)z$. This involves both scaling and rotation. The modulus of $(1+i)$ is $\\sqrt{2}$ and the argument is $\\pi/4$. Thus, multiplication by $(1+i)$ scales the point by $\\sqrt{2}$ and rotates it by $45^\\circ$ counter-clockwise.

## Summary

Complex numbers are an indispensable tool in modern mathematics and science. By completing the number system, they allow for the solution of any polynomial equation and provide a powerful framework for handling rotation and oscillation. The transition from the Cartesian $a+bi$ format to the polar $re^{i\\theta}$ format allows for elegant solutions to problems that would otherwise be computationally prohibitive. 

The structure of the complex plane ensures that arithmetic is not just an abstract manipulation of symbols but a meaningful description of geometric space. From the calculation of roots of unity to the analysis of complex systems in electrical engineering and the formulation of quantum mechanics, complex numbers remain a cornerstone of technical literacy. Mastery of the relationship between $i$, the conjugate, and the exponential form provides a robust foundation for tackling advanced topics in complex analysis and beyond.`;export{e as default};