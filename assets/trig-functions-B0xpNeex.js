var e=`# Trigonometric Functions of General Angles

## Definition

Trigonometric functions of general angles extend the classical definitions of trigonometry beyond the scope of right-angled triangles. In a right-angled triangle context, the domain of an angle $\\theta$ is restricted to $0 < \\theta < \\pi/2$. However, by placing an angle in the Cartesian coordinate system, we can define trigonometric functions for any real number $\\theta$, whether positive, negative, or greater than a full rotation ($2\\pi$).

Let an angle $\\theta$ be in standard position, meaning its vertex is at the origin $(0,0)$ and its initial side lies along the positive $x$-axis. The terminal side of the angle is a ray originating from the origin. If $(x,y)$ is any point on the terminal side of $\\theta$ (other than the origin), and $r = \\sqrt{x^2+y^2}$ is the distance from the origin to that point, then the six trigonometric functions of $\\theta$ are defined as:

$\\sin(\\theta) = \\frac{y}{r}$
$\\cos(\\theta) = \\frac{x}{r}$
$\\tan(\\theta) = \\frac{y}{x}$ (for $x \\neq 0$)
$\\csc(\\theta) = \\frac{r}{y}$ (for $y \\neq 0$)
$\\sec(\\theta) = \\frac{r}{x}$ (for $x \\neq 0$)
$\\cot(\\theta) = \\frac{x}{y}$ (for $y \\neq 0$)

Because $r$ is always positive, the signs of the trigonometric functions depend entirely on the coordinates $(x,y)$ of the point on the terminal side, which in turn depend on the quadrant in which the terminal side resides.

## Key Terminology

To master general angles, one must understand several foundational terms that dictate how we categorize and manipulate rotational values:

1. **Standard Position:** An angle whose vertex is at the origin and whose initial side is on the positive $x$-axis.
2. **Terminal Side:** The ray that defines the end of the rotation.
3. **Reference Angle ($\\theta'$):** The acute angle (between $0$ and $\\pi/2$) that the terminal side makes with the $x$-axis. This is critical for simplifying calculations of general angles.
4. **Coterminal Angles:** Angles that share the same terminal side. If $\\theta$ is an angle, any angle of the form $\\theta + 2k\\pi$ (where $k$ is an integer) is coterminal with $\\theta$.
5. **Unit Circle:** A special case where $r=1$. In this scenario, $x=\\cos(\\theta)$ and $y=\\sin(\\theta)$, simplifying the coordinate geometry significantly.
6. **Quadrantal Angles:** Angles whose terminal sides lie on the $x$ or $y$ axes (e.g., $0, \\pi/2, \\pi, 3\\pi/2$).

## Purpose

The extension of trigonometric functions to general angles is not merely a theoretical exercise; it is the cornerstone of modeling periodic phenomena. While right-triangle trigonometry handles static geometry, general angle trigonometry provides the machinery for:

- **Periodic Oscillation:** Describing waves, such as sound, light, and radio frequencies, which repeat over time.
- **Circular Motion:** Tracking the position of objects rotating about an axis, essential in mechanical engineering and celestial mechanics.
- **Harmonic Analysis:** Representing complex signals as sums of sine and cosine functions (Fourier Series).
- **Navigation and Computing:** Calculating vector components in any coordinate direction, allowing for global positioning systems (GPS) and computer graphics rendering.

By allowing $\\theta$ to be any real number, we define periodic functions that can map the entire set of real numbers to the closed interval $[-1, 1]$ (for sine and cosine).

## Fundamental Properties

The behavior of trigonometric functions is governed by several core identities that arise directly from the coordinate definition.

### The Pythagorean Identity
Regardless of the quadrant, the definition $r^2 = x^2 + y^2$ implies:
$$(\\frac{x}{r})^2 + (\\frac{y}{r})^2 = \\frac{x^2+y^2}{r^2} = \\frac{r^2}{r^2} = 1$$
Thus, $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$.

### Periodicity
Because rotation of $2\\pi$ radians returns the terminal side to its original position, all trigonometric functions are periodic. 
- For $\\sin(\\theta)$ and $\\cos(\\theta)$, the period is $2\\pi$: $\\sin(\\theta + 2k\\pi) = \\sin(\\theta)$.
- For $\\tan(\\theta)$ and $\\cot(\\theta)$, the period is $\\pi$: $\\tan(\\theta + k\\pi) = \\tan(\\theta)$.

### The CAST Rule
The signs of the functions in each quadrant are summarized by the acronym CAST (starting in Quadrant IV and going counter-clockwise):
- Quadrant I (All): All functions are positive.
- Quadrant II (Sine): $\\sin$ (and $\\csc$) are positive.
- Quadrant III (Tangent): $\\tan$ (and $\\cot$) are positive.
- Quadrant IV (Cosine): $\\cos$ (and $\\sec$) are positive.

| Quadrant | Sine/Cosecant | Cosine/Secant | Tangent/Cotangent |
| :--- | :--- | :--- | :--- |
| I | Positive | Positive | Positive |
| II | Positive | Negative | Negative |
| III | Negative | Negative | Positive |
| IV | Negative | Positive | Negative |

## Types & Variations

We explore the behavior of general trigonometric functions through their phase and frequency transformations. The following interactive graph allows for the observation of how parameters $a$ and $b$ alter the function $\\sin(ax + b)$.

\`\`\`interactivegraph
\\sin(ax + b)
params: a=1, b=0
range: a=0.5:3, b=-3:3
\`\`\`

In the interactive graph above, the parameter $a$ controls the **angular frequency**. Increasing $a$ compresses the wave horizontally, effectively reducing the period of the function. The parameter $b$ represents the **phase shift**, which slides the wave horizontally along the $x$-axis. 

To visualize the standard oscillation, we look at the basic functions. The graph below displays $f(x) = \\sin(x)$ and $f(x) = \\cos(x)$ over the interval $[-2\\pi, 2\\pi]$.

\`\`\`graph
\\sin(x)
\\cos(x)
\`\`\`

The graph illustrates that $\\cos(x)$ is simply $\\sin(x)$ shifted to the left by $\\pi/2$. These functions are continuous, differentiable everywhere, and bounded between $-1$ and $1$.

## How to Solve

Solving for trigonometric functions of a general angle involves a systematic reduction process. To evaluate a trigonometric function for any angle $\\theta$:

1. **Find a Coterminal Angle:** If $\\theta$ is outside the range $[0, 2\\pi]$, add or subtract $2\\pi$ until the angle $\\theta_{co}$ is within $[0, 2\\pi]$.
2. **Identify the Quadrant:** Determine which quadrant the terminal side of $\\theta_{co}$ lies in. This determines the sign (+ or -) of the resulting value based on the CAST rule.
3. **Calculate the Reference Angle:** Find the acute angle $\\theta'$ between the terminal side and the $x$-axis.
   - If Quadrant I: $\\theta' = \\theta$
   - If Quadrant II: $\\theta' = \\pi - \\theta$
   - If Quadrant III: $\\theta' = \\theta - \\pi$
   - If Quadrant IV: $\\theta' = 2\\pi - \\theta$
4. **Evaluate:** Apply the trigonometric function to $\\theta'$, then apply the sign from step 2.

### Example: Evaluate $\\cos(5\\pi/3)$
1. $5\\pi/3$ is in $[0, 2\\pi]$.
2. $5\\pi/3$ is in Quadrant IV. In Quadrant IV, $\\cos$ is positive.
3. Reference angle: $\\theta' = 2\\pi - 5\\pi/3 = \\pi/3$.
4. $\\cos(\\pi/3) = 1/2$.
5. Since it is Quadrant IV, $\\cos(5\\pi/3) = 1/2$.

### Analytical Framework for Equations
When solving equations like $\\sin(\\theta) = k$, one must account for the infinite nature of periodic functions.
1. Find the primary solution $\\theta_1 = \\arcsin(k)$.
2. Use the symmetry of the unit circle to find the second solution within one period ($[0, 2\\pi]$). For sine, $\\theta_2 = \\pi - \\theta_1$.
3. Express the general solution by adding multiples of the period: $\\theta = \\theta_1 + 2k\\pi$ and $\\theta = \\theta_2 + 2k\\pi$.

## Summary

The study of trigonometric functions of general angles transcends the limitations of right-triangle geometry by mapping angles to coordinates on a Cartesian plane. By utilizing the radius vector $r$ and coordinate pairs $(x, y)$, we establish a robust framework that accommodates any real-valued rotation. 

The foundational concepts—standard position, terminal sides, reference angles, and periodicity—allow mathematicians and scientists to reduce complex angular rotations into manageable acute-angle calculations. The periodic nature of these functions, characterized by $2\\pi$ and $\\pi$ repetitions, makes them indispensable for modeling physical systems, from the oscillation of pendulums to the propagation of electromagnetic waves. Mastery of these functions requires a fluid understanding of the Pythagorean identity, quadrant-based sign conventions (CAST), and the ability to perform inverse operations over the infinite domain of real numbers. Through the integration of these principles, trigonometry serves as a bridge between static geometric shapes and the dynamic, oscillating universe.`;export{e as default};