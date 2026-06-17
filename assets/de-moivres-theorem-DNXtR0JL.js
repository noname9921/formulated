var e=`# De Moivre's Theorem and Roots of Complex Numbers

## Definition

De Moivre's Theorem is a fundamental result in complex analysis that establishes a profound relationship between trigonometry and complex numbers. Named after the French mathematician Abraham de Moivre, the theorem states that for any real number $x$ and any integer $n$, the following identity holds:

$$(\\cos x + i \\sin x)^n = \\cos(nx) + i \\sin(nx)$$

In the context of the polar form of complex numbers, if we define a complex number $z = r(\\cos \\theta + i \\sin \\theta)$, where $r$ is the modulus and $\\theta$ is the argument, De Moivre's Theorem allows for the efficient calculation of powers:

$$z^n = r^n(\\cos(n\\theta) + i \\sin(n\\theta))$$

This theorem serves as the bridge between algebraic exponentiation and trigonometric rotation, simplifying operations that would otherwise be computationally prohibitive using Cartesian coordinates. Its extension into fractional exponents provides the primary mechanism for extracting the $n$-th roots of a complex number, where for any positive integer $n$, there exist exactly $n$ distinct roots in the complex plane.

## Key Terminology

To navigate the application of De Moivre's Theorem, one must be familiar with several core concepts:

| Term | Definition |
| :--- | :--- |
| Modulus | The distance of a complex number from the origin, denoted $r = |z| = \\sqrt{a^2 + b^2}$. |
| Argument | The angle $\\theta$ formed with the positive real axis, where $\\tan \\theta = \\frac{b}{a}$. |
| Polar Form | Representing $z = a + bi$ as $z = r(\\cos \\theta + i \\sin \\theta)$. |
| Exponential Form | An alternative representation using Euler's formula: $z = re^{i\\theta}$. |
| $n$-th Root | A number $w$ such that $w^n = z$. |
| Principle Argument | The unique angle $\\theta$ such that $-\\pi < \\theta \\leq \\pi$. |

## Purpose

The primary purpose of De Moivre's Theorem is to facilitate the exponentiation and root extraction of complex numbers. In standard Cartesian form ($z = a + bi$), computing $z^n$ requires the use of the Binomial Theorem, which results in a massive expansion of terms and complex sign management. By converting the number into polar form, multiplication of complex numbers effectively becomes the multiplication of their moduli and the addition of their arguments.

Consequently, raising $z$ to the power of $n$ reduces to a simple scaling of the modulus and a linear transformation of the angle. This is not merely a computational shortcut; it is a conceptual framework that reveals the geometry of complex numbers. For instance, when finding roots, De Moivre’s Theorem demonstrates that all $n$ roots of a complex number lie on a circle of radius $\\sqrt[n]{r}$ and are spaced at equal angular intervals of $\\frac{2\\pi}{n}$. This geometric interpretation is vital in electrical engineering, control theory, and quantum mechanics, where phase shifts and oscillations are prevalent.

## Fundamental Properties

De Moivre's Theorem is derived from the properties of complex multiplication. Given two complex numbers $z_1 = r_1(\\cos \\theta_1 + i \\sin \\theta_1)$ and $z_2 = r_2(\\cos \\theta_2 + i \\sin \\theta_2)$, their product is:

$$z_1 z_2 = r_1 r_2 (\\cos(\\theta_1 + \\theta_2) + i \\sin(\\theta_1 + \\theta_2))$$

By iterating this property $n$ times, we arrive at the general power rule. The property relies on two trigonometric identities:
1. $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$
2. $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$

These ensure that the multiplication of two complex numbers of unit modulus results in another complex number of unit modulus whose angle is the sum of the input angles. When dealing with roots, we define the roots $w_k$ of $z = r(\\cos \\theta + i \\sin \\theta)$ as:

$$w_k = \\sqrt[n]{r} \\left( \\cos\\left( \\frac{\\theta + 2k\\pi}{n} \\right) + i \\sin\\left( \\frac{\\theta + 2k\\pi}{n} \\right) \\right)$$

where $k = 0, 1, 2, \\dots, n-1$. The inclusion of the $2k\\pi$ term accounts for the periodicity of trigonometric functions, ensuring all $n$ roots are captured.

## Types & Variations

There are several ways to interpret and apply the underlying logic of De Moivre's theorem:

### 1. Integer Powers
When $n$ is an integer, the theorem is straightforward. For $n > 0$, it represents scaling and rotation. For $n < 0$, it involves inversion of the modulus and reflection of the argument, which is essentially division by powers of $z$.

### 2. Roots of Unity
The $n$-th roots of unity are the solutions to $z^n = 1$. Using the theorem, these are found by setting $r=1$ and $\\theta=0$:
$$\\omega_k = \\cos\\left( \\frac{2k\\pi}{n} \\right) + i \\sin\\left( \\frac{2k\\pi}{n} \\right)$$
These roots form a perfect $n$-sided polygon inscribed in the unit circle.

### 3. Trigonometric Identities
The theorem is frequently used to derive multiple-angle formulas. For example, by setting $n=2$ and equating real and imaginary parts of $(\\cos \\theta + i \\sin \\theta)^2 = \\cos 2\\theta + i \\sin 2\\theta$:
$$\\cos^2 \\theta - \\sin^2 \\theta + i(2 \\sin \\theta \\cos \\theta) = \\cos 2\\theta + i \\sin 2\\theta$$
This yields $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and $\\sin 2\\theta = 2 \\sin \\theta \\cos \\theta$.

## How to Solve

Solving problems involving De Moivre's Theorem typically follows a rigorous four-step procedure.

### Step 1: Conversion to Polar Form
Given $z = a + bi$, identify the modulus $r = \\sqrt{a^2 + b^2}$ and the argument $\\theta = \\operatorname{atan2}(b, a)$. Ensure $\\theta$ is expressed in radians for consistency.

### Step 2: Apply the Theorem
If calculating $z^n$, substitute $r$ and $\\theta$ into the identity $r^n(\\cos(n\\theta) + i \\sin(n\\theta))$. If extracting roots $z^{1/n}$, apply the formula $w_k = \\sqrt[n]{r} (\\cos(\\frac{\\theta + 2k\\pi}{n}) + i \\sin(\\frac{\\theta + 2k\\pi}{n}))$.

### Step 3: Iterate through $k$
For roots, calculate the value for each integer $k$ from $0$ up to $n-1$. This defines the full set of roots.

### Step 4: Convert back to Cartesian (if required)
Calculate the numerical values of the trigonometric functions to express the result in $a + bi$ form.

To understand the rotational aspect, consider the interactive graph below. It illustrates the transformation of a point as we vary the power $n$ or the initial angle.

\`\`\`interactivegraph
\\cos(n \\cdot x)
params: n=1
range: n=0:5
\`\`\`

The graph above plots $f(x) = \\cos(nx)$. By adjusting the parameter $n$, you observe the increase in the frequency of the oscillation, which corresponds to the way powers in De Moivre's Theorem cause the argument of a complex number to scale linearly, effectively "winding" the number around the origin in the complex plane.

## Summary

De Moivre's Theorem provides an elegant mathematical bridge between the algebraic domain of complex numbers and the periodic behavior of trigonometry. By shifting from the Cartesian coordinate system to the polar coordinate system, we transform the computationally expensive operations of exponentiation and root extraction into simple arithmetic manipulations of moduli and arguments. 

The theorem’s power lies not just in its ability to simplify calculations, but in its capacity to describe the distribution of complex roots as symmetric structures in the complex plane. Whether determining the roots of unity, deriving complex trigonometric identities, or solving equations of the form $z^n = c$, the methodologies derived from De Moivre’s work remain an essential toolkit for students and practitioners of mathematics, physics, and engineering. Through the systematic application of polar conversion and the inclusion of periodic angular shifts, one can unlock the geometric and algebraic secrets held within any complex value.`;export{e as default};