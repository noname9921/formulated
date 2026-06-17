var e=`# Complex Numbers

## Definition

A complex number is an extension of the real number system that allows for the solution of equations that have no real roots. Formally, a complex number $z$ is defined as an ordered pair of real numbers $(a, b)$, usually written in the form:

$z = a + bi$

In this expression, $a$ and $b$ are real numbers, and $i$ is the imaginary unit, defined by the fundamental property:

$i^2 = -1$

The real number $a$ is referred to as the real part of $z$, denoted as $\\text{Re}(z) = a$. The real number $b$ is known as the imaginary part of $z$, denoted as $\\text{Im}(z) = b$. Note that the imaginary part is a real number; it is the coefficient of $i$. When $b=0$, the complex number simplifies to the real number $a$. When $a=0$ and $b\\neq 0$, the number is called purely imaginary. The set of all complex numbers is denoted by the symbol $\\mathbb{C}$.

Historically, the development of complex numbers emerged from the study of cubic equations. Renaissance mathematicians like Gerolamo Cardano encountered "impossible" square roots of negative numbers while using formulas to solve cubic equations. By the 18th century, Leonhard Euler introduced the notation $i$, and Carl Friedrich Gauss provided the geometric interpretation, solidifying complex numbers as a rigorous and indispensable foundation of modern mathematics.

## Key Terminology

To navigate the arithmetic and algebra of complex numbers, several definitions are essential:

| Term | Definition |
| :--- | :--- |
| Imaginary Unit | The value $i = \\sqrt{-1}$, satisfying $i^2 = -1$. |
| Modulus | The distance of a complex number from the origin, $|z| = \\sqrt{a^2+b^2}$. |
| Argument | The angle $\\theta$ between the positive real axis and the vector representing $z$. |
| Conjugate | For $z = a+bi$, the conjugate is $\\overline{z} = a-bi$. |
| Polar Form | Representation as $z = r(\\cos\\theta + i\\sin\\theta)$ or $re^{i\\theta}$. |
| Rectangular Form | Representation as $z = a+bi$. |

The modulus $|z|$ is a non-negative real number representing the magnitude of the complex vector. The argument $\\text{arg}(z) = \\theta = \\arctan(b/a)$ provides the direction. The complex conjugate $\\overline{z}$ is a vital tool for division and finding the roots of polynomials with real coefficients, as multiplying $z$ by $\\overline{z}$ yields a real number: $z\\overline{z} = a^2+b^2 = |z|^2$.

## Purpose

Complex numbers are not merely a theoretical curiosity; they provide a complete algebraic system. According to the Fundamental Theorem of Algebra, every non-constant polynomial equation with complex coefficients has at least one complex root. Consequently, a polynomial of degree $n$ has exactly $n$ complex roots (counting multiplicities). This "completeness" is not available in the set of real numbers $\\mathbb{R}$.

Beyond algebra, complex numbers are the language of physics and engineering. In electrical engineering, complex impedance allows the representation of resistance and reactance as a single complex quantity, simplifying the analysis of AC circuits using Ohm's Law $V=IZ$. In fluid dynamics and electromagnetism, complex potentials describe fields where two real quantities (like potential and stream function) are linked by the Cauchy-Riemann equations. Furthermore, the use of $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ (Euler's Formula) allows for the elegant transformation of trigonometric problems into simpler algebraic ones, which is the basis for Fourier analysis—the backbone of signal processing, image compression (JPEG), and quantum mechanics.

## Fundamental Properties

Complex numbers behave like binomials, but with the specific rule that $i^2 = -1$. Addition and subtraction are performed by grouping real and imaginary parts:

$(a+bi) + (c+di) = (a+c) + (b+d)i$

$(a+bi) - (c+di) = (a-c) + (b-d)i$

Multiplication follows the FOIL method:

$(a+bi)(c+di) = ac + adi + bci + bdi^2$

Since $i^2 = -1$, this becomes:

$(ac - bd) + (ad + bc)i$

Division requires multiplying the numerator and denominator by the conjugate of the denominator:

$\\frac{a+bi}{c+di} \\cdot \\frac{c-di}{c-di} = \\frac{ac - adi + bci - bdi^2}{c^2 + d^2} = \\frac{(ac+bd) + (bc-ad)i}{c^2+d^2}$

Key properties of the modulus and conjugate include:

1. $|z_1 z_2| = |z_1||z_2|$
2. $\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$
3. $\\overline{z_1 z_2} = \\overline{z_1} \\cdot \\overline{z_2}$
4. $z + \\overline{z} = 2\\text{Re}(z)$
5. $z - \\overline{z} = 2i\\text{Im}(z)$

These properties ensure that $\\mathbb{C}$ forms a field, meaning it satisfies the axioms of associativity, commutativity, distributivity, and the existence of additive and multiplicative inverses for all non-zero elements.

## Types & Variations

Complex numbers can be represented in multiple forms, each serving specific computational needs.

1. **Rectangular (Algebraic) Form:** $z = a+bi$. Best for addition and subtraction.
2. **Polar (Trigonometric) Form:** $z = r(\\cos\\theta + i\\sin\\theta)$. Best for multiplication and division. Multiplying two complex numbers in polar form involves multiplying their moduli and adding their arguments: $z_1 z_2 = r_1 r_2 (\\cos(\\theta_1+\\theta_2) + i\\sin(\\theta_1+\\theta_2))$.
3. **Exponential Form:** $z = re^{i\\theta}$. Derived from Euler's formula, this is the most powerful tool for calculus, exponentiation, and finding roots. Using De Moivre’s Theorem, $(re^{i\\theta})^n = r^n e^{in\\theta}$, which makes computing high powers or roots (like the $n$-th roots of unity) trivial.

The complex plane (Argand diagram) maps the real part to the x-axis and the imaginary part to the y-axis. Transformations in this plane—such as rotations (multiplying by $e^{i\\theta}$) and scalings (multiplying by a real $r$)—underpin much of modern control theory and conformal mapping.

## How to Solve

To solve problems involving complex numbers, one must frequently convert between forms. 

### Conversion
To convert from $a+bi$ to $re^{i\\theta}$:
1. Calculate $r = \\sqrt{a^2+b^2}$.
2. Calculate $\\theta = \\text{atan2}(b, a)$, which provides the angle in the correct quadrant.

### Roots of Complex Numbers
To find the $n$-th roots of a complex number $z = re^{i\\theta}$, we solve $w^n = re^{i(\\theta + 2k\\pi)}$ for $k = 0, 1, \\dots, n-1$:
$w_k = \\sqrt[n]{r} \\cdot e^{i(\\frac{\\theta + 2k\\pi}{n})}$

### Quadratic Equations
To solve $az^2 + bz + c = 0$ where $a, b, c \\in \\mathbb{R}$ and $b^2 - 4ac < 0$:
1. Apply the quadratic formula: $z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.
2. Factor out $\\sqrt{-1} = i$ from the square root: $z = \\frac{-b \\pm i\\sqrt{|b^2 - 4ac|}}{2a}$.

### Analytical Framework
When working with complex-valued functions $f(z) = u(x, y) + iv(x, y)$, checking for analyticity (differentiability in the complex sense) is performed via the Cauchy-Riemann equations:
$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$

If these hold, the function is holomorphic (analytic), allowing for the application of Cauchy's Integral Theorem, which simplifies complex contour integration across the plane.

## Summary

Complex numbers represent a profound leap in mathematical abstraction. By moving beyond the one-dimensional number line into the two-dimensional complex plane, mathematicians gained the ability to solve any algebraic equation of the form $P(z)=0$ and established a framework that describes the oscillations of light, the flow of heat, and the structure of subatomic particles.

The system is defined by $i^2 = -1$ and operates through the elegant interplay of rectangular and polar coordinates. Through the conjugation operation, the properties of moduli, and the utility of Euler’s formula, complex numbers provide a bridge between algebra, geometry, and calculus. Whether one is calculating the roots of a polynomial, analyzing a circuit's impedance, or performing signal processing via Fourier transforms, complex numbers remain a primary tool for quantifying the physical world. Mastery of these numbers is not merely an exercise in arithmetic but an essential step toward understanding the fundamental symmetries and behaviors that define advanced science and engineering.`;export{e as default};