var e=`# Complex Numbers in Trigonometric (Polar) Form

## Definition

A complex number $z = a + bi$ is traditionally represented in the Cartesian (rectangular) plane, where $a$ corresponds to the horizontal real axis and $b$ corresponds to the vertical imaginary axis. The trigonometric form, also known as the polar form, provides an alternative representation based on the geometric properties of a vector originating from the origin $(0,0)$ to the point $(a,b)$.

In this form, a complex number is defined by its magnitude (modulus) $r$ and its angle (argument) $\\theta$. By applying basic trigonometry to a right triangle formed by the complex number in the complex plane, we identify $a = r\\cos(\\theta)$ and $b = r\\sin(\\theta)$. Substituting these into the standard form $z = a + bi$ yields the expression:
$$z = r(\\cos(\\theta) + i\\sin(\\theta))$$
This representation allows us to treat complex numbers not just as static points, but as vectors with a specific length and rotational orientation. The polar form is intimately linked to Euler's formula, which states $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$, allowing the shorthand notation $z = re^{i\\theta}$.

## Key Terminology

To navigate the polar form of complex numbers effectively, one must understand several foundational concepts:

| Term | Symbol | Definition |
| :--- | :--- | :--- |
| Modulus | $r$ or $|z|$ | The absolute value or distance from the origin $(0,0)$ to the point $(a,b)$. Calculated as $\\sqrt{a^2 + b^2}$. |
| Argument | $\\theta$ or $\\arg(z)$ | The angle formed between the positive real axis and the vector representing $z$. Measured in radians or degrees. |
| Principal Argument | $\\text{Arg}(z)$ | The unique value of $\\theta$ within a specified interval, usually $(-\\pi, \\pi]$ or $[0, 2\\pi)$. |
| Real Part | $a$ | The horizontal component of the complex number, defined as $r\\cos(\\theta)$. |
| Imaginary Part | $b$ | The vertical component of the complex number, defined as $r\\sin(\\theta)$. |

The interplay between $r$ and $\\theta$ defines the location of the complex number in one of the four quadrants. When calculating $\\theta$, one must be cautious of the inverse tangent function, as $\\tan^{-1}(b/a)$ only returns values in quadrants I and IV. Adjustments are required for quadrants II and III.

## Purpose

The trigonometric form is not merely a stylistic preference; it provides a powerful computational framework that simplifies operations that are cumbersome in rectangular form. 

1. **Multiplication and Division:** Multiplying two complex numbers in rectangular form requires the FOIL method (First, Outer, Inner, Last) and multiple steps to simplify the $i^2$ term. In polar form, multiplication is reduced to multiplying the moduli and adding the arguments. If $z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ and $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$, then $z_1z_2 = r_1r_2(\\cos(\\theta_1+\\theta_2) + i\\sin(\\theta_1+\\theta_2))$.
2. **Exponentiation and Roots:** De Moivre's Theorem allows for the calculation of powers and roots of complex numbers with ease. Computing $(a+bi)^n$ becomes exponentially difficult as $n$ increases in rectangular form, but in polar form, it simplifies to $r^n(\\cos(n\\theta) + i\\sin(n\\theta))$.
3. **Rotational Symmetry:** Polar form excels in engineering and physics, specifically in electrical engineering (AC circuit analysis) and control systems, where signal phases and amplitudes are analyzed as rotations in the complex plane.

## Fundamental Properties

The transition between rectangular and polar forms relies on the Pythagorean identity and basic circular trigonometry. Given $z = a + bi$, the relationship is governed by:
$$r = \\sqrt{a^2 + b^2}$$
$$\\theta = \\operatorname{atan2}(b, a)$$
The $\\operatorname{atan2}$ function is preferred over simple division because it accounts for the signs of both $a$ and $b$, correctly identifying the quadrant of the angle. 

The following interactive graph allows for the exploration of how changes in the modulus and argument shift a complex point within the plane. Note how the real and imaginary components fluctuate as the vector rotates or scales.

\`\`\`interactivegraph
r*cos(x)
params: r=1
range: r=0:5
\`\`\`

In this interactive graph, the function $f(x) = r\\cos(x)$ is plotted. When considering the complex plane, if we were to treat the horizontal axis as the input $x$, $r$ acts as an amplitude scaler. Observe how $r$ dictates the range of the oscillation, representing the distance of the complex point from the origin.

## Types & Variations

Complex numbers in polar form can be expressed in different notations depending on the context of the study:

### 1. Trigonometric Form
$z = r(\\cos\\theta + i\\sin\\theta)$
This is the most common form in introductory calculus and trigonometry, emphasizing the geometric roots of the coordinates.

### 2. Exponential Form
$z = re^{i\\theta}$
Derived from Euler's identity, this is the most compact form. It is the preferred notation in advanced physics, differential equations, and complex analysis because it obeys the standard laws of exponents during algebraic manipulation.

### 3. Cis Notation
$z = r \\operatorname{cis}(\\theta)$
The $\\operatorname{cis}$ function is a shorthand for $\\cos(\\theta) + i\\sin(\\theta)$. While less common in modern literature than the exponential form, it remains useful in shorthand notation for complex algebraic proofs.

Each of these variations represents the exact same geometric vector, but they serve different mathematical convenience thresholds depending on whether one is performing arithmetic, calculus, or transformation.

## How to Solve

To convert a complex number from rectangular form $z = a + bi$ to polar form $z = r(\\cos\\theta + i\\sin\\theta)$, follow these steps:

**Step 1: Calculate the Modulus**
Compute $r = \\sqrt{a^2 + b^2}$. This value represents the distance of the complex number from the origin. It is always non-negative.

**Step 2: Find the Reference Angle**
Calculate the reference angle $\\alpha = \\tan^{-1}(|b/a|)$. This gives the acute angle formed with the real axis.

**Step 3: Determine the Quadrant and Argument**
Use the signs of $a$ and $b$ to place $\\theta$ in the correct quadrant:
- Quadrant I ($a>0, b>0$): $\\theta = \\alpha$
- Quadrant II ($a<0, b>0$): $\\theta = \\pi - \\alpha$
- Quadrant III ($a<0, b<0$): $\\theta = \\pi + \\alpha$
- Quadrant IV ($a>0, b<0$): $\\theta = 2\\pi - \\alpha$

**Example:**
Consider $z = -1 + i\\sqrt{3}$.
1. $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.
2. Reference angle $\\alpha = \\tan^{-1}(\\sqrt{3}/1) = \\pi/3$.
3. Since $a < 0$ and $b > 0$, we are in the second quadrant. $\\theta = \\pi - \\pi/3 = 2\\pi/3$.
4. Result: $z = 2(\\cos(2\\pi/3) + i\\sin(2\\pi/3))$.

For multiplication, simply multiply the radii and add the angles. For exponentiation using De Moivre's Theorem:
$$z^n = [r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$$
This method effectively bypasses the expansion of binomials, which is computationally expensive for large $n$.

## Summary

Complex numbers in trigonometric (polar) form transform the way we approach complex arithmetic by shifting the focus from linear coordinates to rotational geometry. By defining a number through its modulus $r$ and argument $\\theta$, we gain access to the algebraic efficiency of De Moivre's Theorem and the elegance of Euler’s exponential notation. 

This form is essential for understanding roots of complex numbers, phase shifts in signal processing, and the rotational transformations encountered in physics. Mastery of the conversion process between rectangular and polar forms—specifically the careful handling of quadrants using $\\operatorname{atan2}$—is the foundational skill for any practitioner working in fields that require complex frequency domain analysis. Through this lens, complex numbers cease to be abstract entities and become intuitive tools for describing rotation, scaling, and periodic behavior in two-dimensional space.`;export{e as default};