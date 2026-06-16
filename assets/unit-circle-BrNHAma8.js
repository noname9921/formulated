var e=`## Definition

The unit circle is a foundational geometric construct in trigonometry defined as a circle with a radius of $r=1$ centered at the origin $(0,0)$ of a Cartesian coordinate system. Algebraically, it is described by the equation $x^2+y^2=1$. Every point $(x,y)$ on the circumference of the unit circle corresponds to the terminal side of an angle $\\theta$ measured in standard position, which starts at the positive $x$-axis and rotates counter-clockwise.

A reference angle, denoted as $\\theta'$, is defined as the acute angle—always between $0$ and $\\pi/2$ radians (or $0^\\circ$ and $90^\\circ$)—formed between the terminal side of an angle $\\theta$ and the $x$-axis. The reference angle is non-negative and serves as a geometric bridge, allowing the evaluation of trigonometric functions for any angle $\\theta$ by relating it to the properties of right triangles in the first quadrant.

## Key Terminology

- **Standard Position:** An angle is in standard position when its vertex is at the origin and its initial side lies along the positive $x$-axis.
- **Terminal Side:** The ray that defines the end of the angle of rotation. Its intersection with the unit circle identifies the coordinates $(x,y)$.
- **Quadrantal Angles:** Angles whose terminal sides lie on the $x$-axis or $y$-axis (e.g., $0, \\pi/2, \\pi, 3\\pi/2$).
- **Coterminal Angles:** Two angles are coterminal if they share the same terminal side. They differ by an integer multiple of $2\\pi$ radians or $360^\\circ$.
- **Radian Measure:** A unit of angular measure defined by the arc length $s$ on a circle of radius $r$, where $\\theta = s/r$. For the unit circle, $\\theta = s$.
- **Reference Angle ($\\theta'$):** The shortest distance from the terminal side of $\\theta$ to the nearest $x$-axis.

## Purpose

The primary utility of the unit circle and reference angles is to extend the definitions of trigonometric functions beyond the constraints of acute angles found in right-triangle trigonometry. In a right triangle, angles are strictly between $0^\\circ$ and $90^\\circ$. However, many periodic phenomena in physics, engineering, and signal processing involve rotations that exceed these bounds.

By mapping an angle $\\theta$ to a coordinate $(x,y)$ on the unit circle, we define $\\cos(\\theta) = x$ and $\\sin(\\theta) = y$. This representation allows us to evaluate trigonometric functions for negative angles, angles greater than $2\\pi$, and angles in any quadrant. The reference angle acts as a normalization tool; since the unit circle exhibits symmetry across the $x$ and $y$ axes, the absolute value of the trigonometric functions of $\\theta$ is identical to those of $\\theta'$, with the sign determined by the quadrant in which the terminal side resides.

## Fundamental Properties

The unit circle maintains several identities that arise directly from the Pythagorean theorem, $x^2+y^2=1$. Since $x = \\cos(\\theta)$ and $y = \\sin(\\theta)$, we derive the Pythagorean identity:
$$\\cos^2(\\theta)+\\sin^2(\\theta)=1$$

Furthermore, the periodic nature of the unit circle implies that for any integer $k$:
$$\\cos(\\theta+2k\\pi) = \\cos(\\theta)$$
$$\\sin(\\theta+2k\\pi) = \\sin(\\theta)$$

The symmetry properties dictate how reference angles function across the four quadrants:
1. **Quadrant I:** $\\theta$ is acute, so $\\theta = \\theta'$.
2. **Quadrant II:** The terminal side is in the second quadrant. The angle from the negative $x$-axis is $\\pi-\\theta$, hence $\\theta' = \\pi-\\theta$.
3. **Quadrant III:** The terminal side is in the third quadrant. The angle past the negative $x$-axis is $\\theta-\\pi$, hence $\\theta' = \\theta-\\pi$.
4. **Quadrant IV:** The terminal side is in the fourth quadrant. The angle before the positive $x$-axis is $2\\pi-\\theta$, hence $\\theta' = 2\\pi-\\theta$.

The signs of these functions are governed by the mnemonic "All Students Take Calculus":
| Quadrant | Sine | Cosine | Tangent |
| :--- | :--- | :--- | :--- |
| I | Positive | Positive | Positive |
| II | Positive | Negative | Negative |
| III | Negative | Negative | Positive |
| IV | Negative | Positive | Negative |

## Types & Variations

Trigonometric evaluation can be categorized by the type of angle provided:

**1. Angles within $[0, 2\\pi]$:** These are evaluated directly based on their quadrant location and the application of reference angles to determine sign and magnitude.

**2. Negative Angles:** A negative angle $\\theta$ represents a clockwise rotation. We find a coterminal angle by adding $2\\pi$ until the angle is positive, then proceed with the standard reference angle calculation. Alternatively, use even/odd identities: $\\cos(-\\theta) = \\cos(\\theta)$ and $\\sin(-\\theta) = -\\sin(\\theta)$.

**3. Large Angles ($>2\\pi$):** For angles exceeding a full rotation, we divide by $2\\pi$ or $360^\\circ$ and take the remainder (the modulo) to find the coterminal angle within the first rotation, which is then used to find the reference angle.

**4. Special Angles:** Common angles such as $\\pi/6, \\pi/4,$ and $\\pi/3$ are derived from isosceles right triangles and $30-60-90$ triangles. Their coordinates on the unit circle are standard:
- For $\\pi/6 (30^\\circ)$: $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$
- For $\\pi/4 (45^\\circ)$: $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$
- For $\\pi/3 (60^\\circ)$: $(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$

## How to Solve

To evaluate a trigonometric function for any angle $\\theta$, follow this systematic approach:

**Step 1: Simplify the Angle.**
If $\\theta < 0$ or $\\theta > 2\\pi$, find the coterminal angle $\\theta_{ct}$ by adding or subtracting $2\\pi$ ($360^\\circ$) until $0 \\leq \\theta_{ct} < 2\\pi$.

**Step 2: Identify the Quadrant.**
Determine the quadrant of $\\theta_{ct}$. This determines the sign of the result based on the coordinate signs in that quadrant $(+,+), (-,+), (-,-),$ or $(+,-)$.

**Step 3: Calculate the Reference Angle ($\\theta'$).**
Apply the quadrant-specific formula:
- Q I: $\\theta' = \\theta_{ct}$
- Q II: $\\theta' = \\pi - \\theta_{ct}$ (or $180^\\circ - \\theta_{ct}$)
- Q III: $\\theta' = \\theta_{ct} - \\pi$ (or $\\theta_{ct} - 180^\\circ$)
- Q IV: $\\theta' = 2\\pi - \\theta_{ct}$ (or $360^\\circ - \\theta_{ct}$)

**Step 4: Evaluate the Function.**
Calculate the trigonometric function for $\\theta'$ using known special values or a calculator, then apply the sign determined in Step 2.

*Example:* Evaluate $\\sin(210^\\circ)$.
1. $210^\\circ$ is between $180^\\circ$ and $270^\\circ$, placing it in Q III.
2. In Q III, the sine function is negative.
3. Reference angle: $\\theta' = 210^\\circ - 180^\\circ = 30^\\circ$.
4. $\\sin(30^\\circ) = 0.5$.
5. Applying the sign: $\\sin(210^\\circ) = -0.5$.

*Example:* Evaluate $\\cos(5\\pi/3)$.
1. $5\\pi/3$ is in Q IV.
2. In Q IV, the cosine function is positive.
3. Reference angle: $\\theta' = 2\\pi - 5\\pi/3 = \\pi/3$.
4. $\\cos(\\pi/3) = 0.5$.
5. Result: $\\cos(5\\pi/3) = 0.5$.

## Summary

The unit circle and reference angles constitute a powerful system for the universal application of trigonometry. By reducing complex rotational inputs to acute reference angles, we can determine the exact values of sine, cosine, and tangent regardless of the magnitude or direction of the rotation. The unit circle provides the geometric justification for periodicity and symmetry, while reference angles provide the computational methodology for practical problem-solving. Mastery of this system is essential for transitioning from simple right-triangle geometry to the analysis of periodic waveforms, circular motion, and complex number representation in the complex plane. Through the application of the identity $\\cos^2(\\theta)+\\sin^2(\\theta)=1$ and systematic quadrant analysis, the entirety of trigonometric evaluation is reduced to a clear, repeatable process.`;export{e as default};