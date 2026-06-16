var e=`# De Moivre's Theorem and Roots of Complex Numbers

## Definition

De Moivre's Theorem is a fundamental principle in complex analysis that establishes a profound connection between the arithmetic of complex numbers and the geometry of trigonometric functions. Named after the French mathematician Abraham de Moivre, the theorem states that for any real number $x$ and any integer $n$, the following identity holds:

$$(\\cos(x)+i\\sin(x))^n = \\cos(nx)+i\\sin(nx)$$

This theorem serves as the bridge between algebraic exponentiation and angular transformation. In the polar form of complex numbers, where a complex number $z = a+bi$ is represented as $z = r(\\cos(\\theta)+i\\sin(\\theta))$, the theorem simplifies the process of raising a complex number to a power $n$. Specifically, $z^n = r^n(\\cos(n\\theta)+i\\sin(n\\theta))$. This identity is not merely an isolated trick; it is a direct consequence of Euler’s formula, $e^{ix} = \\cos(x)+i\\sin(x)$, which implies $(e^{ix})^n = e^{i(nx)}$.

## Key Terminology

To navigate the application of De Moivre's Theorem, one must be familiar with several core concepts regarding the complex plane:

| Term | Definition |
| :--- | :--- |
| Modulus ($r$) | The distance of a complex number from the origin $(0,0)$ in the complex plane, denoted as $|z| = \\sqrt{a^2+b^2}$. |
| Argument ($\\theta$) | The angle formed between the positive real axis and the line segment connecting the origin to $z$, typically measured in radians. |
| Polar Form | A representation of $z$ using its modulus and argument, written as $z = r(\\cos(\\theta)+i\\sin(\\theta))$. |
| $n$-th Root | A complex number $w$ such that $w^n = z$. For any non-zero complex number, there exist exactly $n$ distinct $n$-th roots. |
| Principal Argument | The unique value of the argument $\\theta$ such that $-\\pi < \\theta \\leq \\pi$ (or sometimes $0 \\leq \\theta < 2\\pi$). |
| Roots of Unity | The solutions to the equation $z^n = 1$, which form a regular $n$-sided polygon in the complex plane centered at the origin. |

## Purpose

The primary purpose of De Moivre's Theorem is to facilitate the computation of high-integer powers and roots of complex numbers, which would otherwise be computationally prohibitive or algebraically tedious using binomial expansions in rectangular coordinates. By shifting the operations from algebraic addition and multiplication of binomials to the multiplicative growth of the modulus and the additive growth of the argument, the theorem reduces exponential complexity to simple multiplication and division.

Beyond simple arithmetic, the theorem is essential for solving polynomial equations of the form $z^n = a+bi$. It provides a systematic method to locate these roots evenly distributed around a circle in the complex plane. This geometric insight is critical in fields such as electrical engineering for signal processing, quantum mechanics for calculating probability amplitudes, and fluid dynamics for mapping potential flows. It also serves as the theoretical foundation for deriving trigonometric identities, such as expressions for $\\cos(n\\theta)$ and $\\sin(n\\theta)$ in terms of $\\cos(\\theta)$ and $\\sin(\\theta)$.

## Fundamental Properties

The power of De Moivre's Theorem lies in its reliance on the multiplicative properties of complex numbers in polar form. When multiplying two complex numbers $z_1 = r_1(\\cos(\\theta_1)+i\\sin(\\theta_1))$ and $z_2 = r_2(\\cos(\\theta_2)+i\\sin(\\theta_2))$, the product is given by:

$$z_1z_2 = r_1r_2(\\cos(\\theta_1+\\theta_2)+i\\sin(\\theta_1+\\theta_2))$$

By extending this property iteratively through induction, we arrive at the following properties for any integer $n$:

1. **Modulus Power Property**: The modulus of $z^n$ is the $n$-th power of the modulus of $z$, specifically $|z^n| = |z|^n$.
2. **Argument Multiplier Property**: The argument of $z^n$ is $n$ times the argument of $z$, such that $\\text{arg}(z^n) = n \\cdot \\text{arg}(z) \\pmod{2\\pi}$.
3. **Periodicity**: Because the trigonometric functions $\\cos$ and $\\sin$ have a period of $2\\pi$, adding any integer multiple of $2\\pi$ to the argument does not change the complex number. This periodicity is the mechanism that allows for the existence of multiple distinct roots.

## Types & Variations

De Moivre's Theorem can be adapted to handle non-integer exponents, which leads to the discovery of roots. For a complex number $z = r(\\cos(\\theta)+i\\sin(\\theta))$, the $n$-th roots $w_k$ are given by the formula:

$$w_k = \\sqrt[n]{r} \\left( \\cos\\left(\\frac{\\theta+2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta+2k\\pi}{n}\\right) \\right)$$

where $k$ takes the integer values $0, 1, 2, \\dots, n-1$.

There are three distinct ways to view these variations:
- **Integer Powers ($n \\in \\mathbb{Z}$)**: Standard application where $n$ is a positive or negative integer. Negative integers result in division ($z^{-n} = 1/z^n$), which still adheres to the same logic of modulus inversion and argument negation.
- **Rational Exponents ($n = p/q$)**: This leads to the extraction of roots. The set of roots forms a symmetric geometric pattern on a circle of radius $\\sqrt[q]{r^p}$.
- **Complex Exponents**: When $n$ itself is complex, the calculation typically requires the conversion of the expression into the form $e^{n \\ln(z)}$, where the logarithm is multi-valued due to the periodicity of the argument.

## How to Solve

Solving problems involving De Moivre's Theorem requires a systematic conversion between rectangular and polar forms.

**Step 1: Convert to Polar Form**
Given $z = a+bi$, calculate the modulus $r = \\sqrt{a^2+b^2}$ and the argument $\\theta = \\arctan(b/a)$, adjusting for the quadrant of $z$.

**Step 2: Apply the Theorem or Root Formula**
If calculating a power $z^n$, compute $r^n$ and multiply $\\theta$ by $n$. If calculating roots, use the formula $w_k = \\sqrt[n]{r} \\left( \\cos\\left(\\frac{\\theta+2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta+2k\\pi}{n}\\right) \\right)$ for $k = 0, \\dots, n-1$.

**Step 3: Convert Back (Optional)**
Convert the resulting polar values back into $a+bi$ form using the values of $\\cos$ and $\\sin$ at the new angles.

To visualize the effect of changing the exponent $n$ on a complex number, we can examine how the argument rotates around the complex plane. The interactive graph below demonstrates the transformation of a unit complex number $z = 1(\\cos(\\theta)+i\\sin(\\theta))$ when raised to the power $n$.

\`\`\`interactivegraph
\\cos(n \\cdot x)
params: n=1
range: n=0:5
\`\`\`

The graph above shows the function $f(x) = \\cos(nx)$, which represents the real part of the complex number $z^n$ as the argument $x$ varies. Observe how increasing $n$ increases the frequency of the oscillation, corresponding to the "winding" of the complex number around the unit circle as its argument $n\\theta$ increases.

## Summary

De Moivre's Theorem serves as a cornerstone of complex analysis, providing an elegant analytical framework for understanding the behavior of complex numbers under exponentiation and root extraction. By transforming the algebraic difficulty of multiplying complex binomials into the simpler geometric tasks of scaling a modulus and rotating an argument, it simplifies complex number theory significantly. 

The theorem's utility in finding the $n$-th roots of a complex number highlights the intrinsic symmetry of complex numbers, as these roots are always perfectly spaced on a circle in the complex plane. Whether used to derive trigonometric power-reduction identities or to solve complex polynomial equations, De Moivre's Theorem remains an indispensable tool for mathematicians, physicists, and engineers alike, proving that the geometry of the circle is deeply embedded within the algebra of complex numbers.`;export{e as default};