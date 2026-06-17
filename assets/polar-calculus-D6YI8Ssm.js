var e=`# Polar Coordinates and Polar Calculus

## Definition

The polar coordinate system is a two-dimensional coordinate system in which each point on a plane is determined by a distance from a reference point and an angle from a reference direction. This system stands in contrast to the Cartesian coordinate system, which relies on perpendicular axes ($x$ and $y$). In the polar system, the reference point is known as the pole (or origin), and the ray from the pole in the reference direction is the polar axis.

A point is denoted by an ordered pair $(r, \\theta)$, where $r$ represents the radial coordinate (the distance from the pole) and $\\theta$ represents the angular coordinate (the counterclockwise angle from the polar axis). While the Cartesian plane tiles space with a grid of squares, the polar plane can be envisioned as a set of concentric circles and radial lines, making it particularly suited for phenomena involving rotational symmetry or central forces.

## Key Terminology

To navigate the study of polar coordinates, one must master specific terminology that defines how space is partitioned and measured:

| Term | Definition |
| :--- | :--- |
| Pole | The origin point $(0,0)$ where the radial distance is zero. |
| Polar Axis | The ray originating from the pole, typically aligned with the positive $x$-axis. |
| Radial Coordinate ($r$) | The signed distance from the pole to the point. |
| Angular Coordinate ($\\theta$) | The measure of rotation from the polar axis, usually expressed in radians. |
| Polar Curves | Loci defined by equations of the form $r=f(\\theta)$ or $F(r,\\theta)=0$. |
| Periodic Functions | Polar functions that repeat values at intervals of $2\\pi$ or fractions thereof. |
| Symmetry | Properties where $f(\\theta) = f(-\\theta)$ (symmetry about the polar axis) or similar. |

The angular coordinate $\\theta$ is multi-valued because adding any integer multiple of $2\\pi$ to the angle results in the same spatial position. Consequently, any point $(r, \\theta)$ can be represented by $(r, \\theta + 2n\\pi)$ for any integer $n$. Additionally, $r$ can be negative; the point $(-r, \\theta)$ is equivalent to the point $(r, \\theta + \\pi)$.

## Purpose

The primary utility of polar coordinates lies in the simplification of problems involving radial symmetry. In Cartesian coordinates, the equation of a circle centered at the origin with radius $a$ is $x^2 + y^2 = a^2$. In polar coordinates, this simplifies elegantly to $r=a$. This reduction in algebraic complexity extends to calculus, where integrals over circular or elliptical regions become significantly more manageable when expressed in terms of $r$ and $\\theta$.

Furthermore, polar coordinates are indispensable in physics and engineering. The equations of motion for central force problems—such as planetary orbits governed by gravity or the dynamics of charged particles in magnetic fields—are naturally described by radial and angular components. By transforming these problems into polar form, one can often solve differential equations that would be intractable in a rectangular coordinate system.

## Fundamental Properties

The relationship between the Cartesian system $(x,y)$ and the polar system $(r,\\theta)$ is derived from right-triangle trigonometry. Given a point in the plane, we can establish the following conversion identities:

$$x = r \\cos(\\theta)$$
$$y = r \\sin(\\theta)$$

Conversely, to convert from Cartesian back to polar:

$$r^2 = x^2 + y^2$$
$$\\tan(\\theta) = \\frac{y}{x}$$

The transformation of calculus operations requires the use of the Jacobian determinant. When integrating a function $f(x,y)$ over a region $R$, the differential area element $dA = dx dy$ becomes $dA = r dr d\\theta$. This factor of $r$ is crucial and arises from the fact that as one moves further from the origin, the arc length subtended by an angular increment $d\\theta$ grows linearly with the radius $r$.

The slope of a tangent line to a polar curve $r=f(\\theta)$ in the Cartesian plane is given by the ratio of the derivatives:

$$\\frac{dy}{dx} = \\frac{\\frac{dy}{d\\theta}}{\\frac{dx}{d\\theta}} = \\frac{\\frac{dr}{d\\theta}\\sin(\\theta) + r\\cos(\\theta)}{\\frac{dr}{d\\theta}\\cos(\\theta) - r\\sin(\\theta)}$$

## Types & Variations

Polar curves manifest in various shapes depending on the structure of the function $f(\\theta)$. Recognizing these patterns is vital for analysis.

1. **Circles:** Defined by $r=a$ (centered at origin), $r=a\\cos(\\theta)$ (centered on the polar axis), or $r=a\\sin(\\theta)$ (centered on the vertical axis).
2. **Cardioids:** Defined by $r=a(1 \\pm \\cos(\\theta))$ or $r=a(1 \\pm \\sin(\\theta))$. These heart-shaped curves have a cusp at the pole.
3. **Limacons:** Defined by $r=a+b\\cos(\\theta)$. If $a < b$, the curve has an inner loop. If $a=b$, it is a cardioid. If $a > b$, it is a dimpled or convex oval.
4. **Rose Curves:** Defined by $r=a\\cos(n\\theta)$ or $r=a\\sin(n\\theta)$. If $n$ is an integer, the graph has $n$ petals (if $n$ is odd) or $2n$ petals (if $n$ is even).
5. **Spirals:** The Archimedean spiral $r=a\\theta$ demonstrates linear growth, while the logarithmic spiral $r=ae^{b\\theta}$ demonstrates exponential growth.

The graph below represents the family of rose curves $r=\\cos(ax)$, which illustrates how the parameter $a$ affects the number of petals produced as the function cycles through its period.

\`\`\`interactivegraph
\\cos(ax)
params: a=2
range: a=1:6
\`\`\`

## How to Solve

Solving problems in polar calculus involves a systematic approach, particularly when computing area and arc length.

### Area in Polar Coordinates
The area of a region bounded by $r=f(\\theta)$ and the rays $\\theta=\\alpha$ and $\\theta=\\beta$ is calculated as the limit of the sum of infinitesimal circular sectors. The area $A$ is given by:

$$A = \\int_{\\alpha}^{\\beta} \\frac{1}{2} [f(\\theta)]^2 d\\theta$$

This formula relies on the area of a circular sector, $A = \\frac{1}{2}r^2\\Delta\\theta$. To find the area between two curves $r_{out}(\\theta)$ and $r_{in}(\\theta)$, one subtracts the integral of the inner function from the integral of the outer function.

### Arc Length
The arc length $L$ of a polar curve $r=f(\\theta)$ from $\\theta=\\alpha$ to $\\theta=\\beta$ is computed by integrating the differential arc length element $ds = \\sqrt{r^2 + (\\frac{dr}{d\\theta})^2} d\\theta$:

$$L = \\int_{\\alpha}^{\\beta} \\sqrt{[f(\\theta)]^2 + [f'(\\theta)]^2} d\\theta$$

### Example: Finding the Area of a Cardioid
To find the area of the cardioid $r=1+\\cos(\\theta)$, we set the bounds from $0$ to $2\\pi$:

$$A = \\frac{1}{2} \\int_{0}^{2\\pi} (1+\\cos(\\theta))^2 d\\theta$$
$$A = \\frac{1}{2} \\int_{0}^{2\\pi} (1 + 2\\cos(\\theta) + \\cos^2(\\theta)) d\\theta$$

Using the identity $\\cos^2(\\theta) = \\frac{1+\\cos(2\\theta)}{2}$:

$$A = \\frac{1}{2} \\int_{0}^{2\\pi} (1 + 2\\cos(\\theta) + \\frac{1}{2} + \\frac{1}{2}\\cos(2\\theta)) d\\theta$$
$$A = \\frac{1}{2} [\\frac{3}{2}\\theta + 2\\sin(\\theta) + \\frac{1}{4}\\sin(2\\theta)]_0^{2\\pi} = \\frac{3\\pi}{2}$$

## Summary

Polar coordinates transform the way we conceptualize spatial relationships by moving from linear grid geometry to radial and angular measurement. By employing the transformations $x=r\\cos(\\theta)$ and $y=r\\sin(\\theta)$, mathematicians can navigate complex curves, such as spirals and roses, that are difficult to define in Cartesian terms. 

The calculus of these curves is robust, providing elegant formulas for area and arc length that rely on the geometric properties of sectors rather than rectangular strips. Mastery of polar systems requires a thorough understanding of the interplay between the radial distance $r$ and the rotation $\\theta$, as well as the ability to handle the cyclic nature of trigonometric functions in integration. As a bridge between pure trigonometry and coordinate geometry, polar calculus remains a fundamental tool for solving problems with rotational symmetry, from the architecture of natural forms to the trajectory of celestial mechanics.`;export{e as default};