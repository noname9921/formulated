var e=`# Trigonometric Functions of General Angles

Trigonometry, derived from the Greek terms "trigonon" (triangle) and "metron" (measure), historically focused on the properties of right-angled triangles. However, as mathematics evolved, it became necessary to extend these concepts to angles of any magnitude—positive, negative, or greater than a full rotation. This extension leads to the definition of trigonometric functions for general angles using the Cartesian coordinate system, moving beyond the constraints of triangle geometry.

## Definition

To define trigonometric functions for any angle $\\theta$, we consider a circle centered at the origin $(0,0)$ in the Cartesian plane with radius $r > 0$. Let $P(x,y)$ be a point on the circumference of this circle such that the terminal side of angle $\\theta$ passes through $P$. The angle $\\theta$ is measured in standard position, meaning its vertex is at the origin and its initial side coincides with the positive $x$-axis.

The distance $r$ from the origin to point $P(x,y)$ is given by the Pythagorean theorem: $r = \\sqrt{x^2 + y^2}$. Based on this geometric arrangement, the six trigonometric functions for any angle $\\theta$ are defined as:

1. $\\sin\\theta = \\frac{y}{r}$
2. $\\cos\\theta = \\frac{x}{r}$
3. $\\tan\\theta = \\frac{y}{x}$, where $x \\neq 0$
4. $\\csc\\theta = \\frac{r}{y}$, where $y \\neq 0$
5. $\\sec\\theta = \\frac{r}{x}$, where $x \\neq 0$
6. $\\cot\\theta = \\frac{x}{y}$, where $y \\neq 0$

In the special case of the unit circle, where $r=1$, the coordinates of $P$ are simply $(\\cos\\theta, \\sin\\theta)$. This allows for the evaluation of trigonometric functions for angles of any magnitude by analyzing the position of the terminal side in one of the four quadrants.

## Key Terminology

- **Standard Position:** An angle is in standard position when its vertex is at $(0,0)$ and its initial side is the positive $x$-axis.
- **Terminal Side:** The ray that defines the end of the angle.
- **Reference Angle:** The acute angle $\\theta'$ formed by the terminal side of an angle $\\theta$ and the $x$-axis. It is always positive and provides the magnitude for the trigonometric function, while the quadrant determines the sign.
- **Coterminal Angles:** Angles that share the same terminal side. If $\\theta$ is an angle, its coterminal angles are given by $\\theta + 360^\\circ \\cdot k$ (for degrees) or $\\theta + 2\\pi \\cdot k$ (for radians), where $k$ is any integer.
- **Quadrantal Angles:** Angles whose terminal sides lie on the $x$-axis or $y$-axis (e.g., $0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ$).

## Purpose

The extension of trigonometry to general angles is fundamental for modeling periodic phenomena. While right-triangle trigonometry is limited to angles between $0$ and $90$ degrees, general trigonometric functions allow us to describe:

- **Periodic Oscillation:** Describing waves, such as light, sound, and alternating current, where the values repeat over time.
- **Rotational Motion:** Analyzing the position of objects moving along a circular path, such as planetary orbits or rotating machinery.
- **Signal Processing:** Using Fourier analysis to decompose complex signals into sums of sine and cosine functions.
- **Navigation:** Calculating trajectories and positions on a spherical surface (the Earth) using latitude and longitude, which are coordinate systems inherently dependent on angular measurements.

By abstracting trigonometry from triangles to circles, we gain the ability to map inputs from $(-\\infty, \\infty)$ to outputs in the range $[-1, 1]$ for sine and cosine, providing a robust framework for calculus and complex analysis.

## Fundamental Properties

The sign of trigonometric functions depends on the quadrant in which the terminal side lies. This is summarized by the mnemonic "All Students Take Calculus":
- **Quadrant I:** All functions are positive.
- **Quadrant II:** Sine (and cosecant) are positive.
- **Quadrant III:** Tangent (and cotangent) are positive.
- **Quadrant IV:** Cosine (and secant) are positive.

Additionally, periodic properties emerge from the definition:
- Sine and cosine have a period of $2\\pi$. $\\sin(\\theta + 2\\pi k) = \\sin\\theta$ and $\\cos(\\theta + 2\\pi k) = \\cos\\theta$.
- Tangent and cotangent have a period of $\\pi$. $\\tan(\\theta + \\pi k) = \\tan\\theta$.

The interactive graph below demonstrates the transformation of the sine wave as we adjust its frequency and phase, which are critical concepts when dealing with general angles over time.

\`\`\`interactivegraph
\\sin(ax + b)
params: a=1, b=0
range: a=-3:3, b=-3:3
\`\`\`

The graph above plots $f(x) = \\sin(ax + b)$, where $a$ influences the frequency (periodicity) and $b$ influences the phase shift. Varying $a$ shows how the function compresses or stretches along the $x$-axis, while varying $b$ shifts the function horizontally.

## Types & Variations

Trigonometric functions can be categorized by their parity (symmetry):
- **Even Functions:** $\\cos(-\\theta) = \\cos\\theta$ and $\\sec(-\\theta) = \\sec\\theta$. These are symmetric about the $y$-axis.
- **Odd Functions:** $\\sin(-\\theta) = -\\sin\\theta$, $\\csc(-\\theta) = -\\csc\\theta$, $\\tan(-\\theta) = -\\tan\\theta$, and $\\cot(-\\theta) = -\\cot\\theta$. These possess rotational symmetry about the origin.

The following table summarizes the behavior of functions at quadrantal angles:

| Angle ($\\theta$) | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ | $\\csc\\theta$ | $\\sec\\theta$ | $\\cot\\theta$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $0$ | $0$ | $1$ | $0$ | Undefined | $1$ | Undefined |
| $\\pi/2$ | $1$ | $0$ | Undefined | $1$ | Undefined | $0$ |
| $\\pi$ | $0$ | $-1$ | $0$ | Undefined | $-1$ | Undefined |
| $3\\pi/2$ | $-1$ | $0$ | Undefined | $-1$ | Undefined | $0$ |

## How to Solve

To evaluate trigonometric functions for any angle $\\theta$:

1. **Find the Coterminal Angle:** If $\\theta > 360^\\circ$ or $\\theta < 0$, add or subtract multiples of $360^\\circ$ (or $2\\pi$) until the angle is within $[0, 360^\\circ)$.
2. **Identify the Quadrant:** Determine which quadrant the terminal side falls into. This will dictate the sign of the result based on the quadrant rules.
3. **Determine the Reference Angle ($\\theta'$):**
   - In Q1: $\\theta' = \\theta$
   - In Q2: $\\theta' = 180^\\circ - \\theta$
   - In Q3: $\\theta' = \\theta - 180^\\circ$
   - In Q4: $\\theta' = 360^\\circ - \\theta$
4. **Evaluate the Function:** Calculate the value using the reference angle $\\theta'$ and apply the correct sign based on the quadrant.

Example: To evaluate $\\sin(210^\\circ)$:
1. The angle is in Quadrant III.
2. The reference angle $\\theta' = 210^\\circ - 180^\\circ = 30^\\circ$.
3. Sine is negative in Q3.
4. $\\sin(210^\\circ) = -\\sin(30^\\circ) = -0.5$.

The graph below shows the standard periodic functions $\\sin(x)$ and $\\cos(x)$, illustrating their relationship and phase shift.

\`\`\`graph
\\sin(x)
\\cos(x)
\`\`\`

The graph above plots $f(x) = \\sin(x)$ and $g(x) = \\cos(x)$, illustrating how both oscillate continuously between $-1$ and $1$ with a period of $2\\pi$.

## Summary

Trigonometric functions of general angles expand the utility of trigonometry from static geometry to dynamic, analytical modeling. By utilizing the Cartesian coordinate system, we define these functions for all real numbers, accounting for signs through quadrant placement and periodicity through coterminal angles. These functions are the bedrock of periodic analysis in engineering, physics, and advanced mathematics, enabling the precise description of systems that evolve over time or rotation. Understanding the relationship between the angle, the reference angle, and the quadrant is essential for solving complex problems involving rotation and oscillatory motion.`;export{e as default};