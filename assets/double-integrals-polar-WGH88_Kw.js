var e=`# Double Integrals in Polar Coordinates

## Definition

A double integral in polar coordinates is a mathematical technique used to evaluate the double integral of a function $f(x,y)$ over a region $D$ in the Cartesian plane by transforming the coordinate system from Cartesian $(x,y)$ to polar $(r,\\theta)$. The transformation is defined by the relationships $x=r\\cos(\\theta)$ and $y=r\\sin(\\theta)$, where $r \\ge 0$ represents the radial distance from the origin and $\\theta$ represents the angle measured counter-clockwise from the positive $x$-axis.

When calculating the area or volume under a surface $z=f(x,y)$ over a region $D$ that is naturally circular, symmetric, or defined by radial boundaries, the Cartesian area element $dA=dxdy$ is transformed into $dA=rdrd\\theta$. The formal definition of the double integral in polar coordinates is given by:

$$
\\iint_D f(x,y) dA = \\int_{\\alpha}^{\\beta} \\int_{h_1(\\theta)}^{h_2(\\theta)} f(r\\cos(\\theta), r\\sin(\\theta)) r dr d\\theta
$$

This identity relies on the Jacobian determinant of the transformation, which accounts for the local "stretching" or "shrinking" of the area element when moving from a square grid to a polar grid.

## Key Terminology

To master double integrals in polar coordinates, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| **Polar Grid** | A coordinate system where points are defined by a distance $r$ and an angle $\\theta$. |
| **Jacobian** | The factor $r$ that appears in the transformation, representing $| \\frac{\\partial(x,y)}{\\partial(r,\\theta)} |$. |
| **Polar Rectangle** | A region defined by $\\alpha \\le \\theta \\le \\beta$ and $a \\le r \\le b$. |
| **Area Element** | The differential $dA$, which equals $r dr d\\theta$ in polar coordinates. |
| **Radial Boundary** | The function $r=h(\\theta)$ that defines the inner or outer limits of integration. |
| **Origin (Pole)** | The point where $r=0$; at this point, the angle $\\theta$ is undefined. |

## Purpose

The primary purpose of converting a double integral into polar coordinates is simplification. Many physical problems involve circular symmetry, such as calculating the mass of a disk, the moment of inertia of a cylinder, or the gravitational potential of a spherical body. 

In Cartesian coordinates, a circular region $x^2 + y^2 \\le a^2$ requires bounds involving square roots, such as $y = \\pm \\sqrt{a^2 - x^2}$. Integrating these functions often necessitates trigonometric substitution, which can be computationally intensive and error-prone. By contrast, in polar coordinates, the same region is simply defined by $0 \\le r \\le a$ and $0 \\le \\theta \\le 2\\pi$. The conversion effectively "unfolds" the curvature into a rectangular domain in the $r\\theta$-plane, making the integration straightforward.

## Fundamental Properties

The transition to polar coordinates is governed by the geometry of the transformation. The change of variables formula states that for a region $D$ in the $xy$-plane, if $x=g(r,\\theta)$ and $y=h(r,\\theta)$, then:

$$
\\iint_D f(x,y) dx dy = \\iint_{D^*} f(g(r,\\theta), h(r,\\theta)) \\left| \\frac{\\partial(x,y)}{\\partial(r,\\theta)} \\right| dr d\\theta
$$

For polar coordinates, the Jacobian determinant is calculated as follows:

$$
\\frac{\\partial(x,y)}{\\partial(r,\\theta)} = \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r
$$

Because $r$ represents a radial distance, we assume $r \\ge 0$, thus the absolute value is simply $r$. This fundamental property, $dA = r dr d\\theta$, is why the $r$ factor is mandatory. Ignoring this factor is the most common error in multi-variable calculus.

## Types & Variations

There are several common categories of regions encountered when working with polar integrals:

1. **Circular Sectors:** Regions defined by constant bounds, such as $0 \\le r \\le R$ and $\\theta_1 \\le \\theta \\le \\theta_2$.
2. **Annular Regions:** Regions defined by two radii, $r_1 \\le r \\le r_2$, representing the area between two concentric circles.
3. **Cardioids and Roses:** Regions defined by $r = a(1 + \\cos\\theta)$ or $r = a\\sin(n\\theta)$. These require careful identification of the interval of $\\theta$ that traces the shape exactly once.
4. **General Polar Regions:** Regions bounded by two functions $r_1(\\theta)$ and $r_2(\\theta)$. The integral becomes:
$$
\\int_{\\alpha}^{\\beta} \\int_{r_1(\\theta)}^{r_2(\\theta)} f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta
$$

The interactive graph below allows for the exploration of how parameters affect the shape of polar curves, which often define the integration limits. Note that in the context of the renderer, these curves are visualized as functions of $x$ to satisfy mapping constraints, effectively illustrating the periodic nature of radial bounds.

\`\`\`interactivegraph
\\sin(ax)
params: a=1
range: a=1:5
\`\`\`

The graph plots $f(x) = \\sin(ax)$. In polar integration, varying parameters like $a$ directly changes the number of "petals" or the frequency of the radial boundary $r(\\theta)$, directly influencing the limits of integration $\\alpha$ and $\\beta$.

## How to Solve

Solving a double integral in polar coordinates follows a systematic five-step process:

1. **Sketch the Region $D$:** Always draw the region of integration in the Cartesian plane. Identify if the boundary involves terms like $x^2 + y^2$, which strongly suggest polar conversion.
2. **Identify the Limits for $r$:** Determine the radial bounds by imagining a ray emanating from the origin. The ray enters at $r_{in}$ and exits at $r_{out}$. If the region is a disk, $r$ typically goes from $0$ to a constant $a$.
3. **Identify the Limits for $\\theta$:** Determine the angular range. A full circle typically ranges from $0$ to $2\\pi$. For partial regions, use the geometry to find the intersection points of the boundary functions.
4. **Perform the Substitution:** Replace $x$ with $r\\cos\\theta$, $y$ with $r\\sin\\theta$, and $dA$ with $r dr d\\theta$. Ensure the function $f(x,y)$ is also converted to $f(r, \\theta)$.
5. **Evaluate the Iterated Integral:** Evaluate the innermost integral with respect to $r$ first, treating $\\theta$ as a constant. Then, integrate the result with respect to $\\theta$.

Consider the volume under the paraboloid $z = 1 - x^2 - y^2$ over the unit disk.
The integral is:
$$
\\int_{0}^{2\\pi} \\int_{0}^{1} (1 - r^2) r dr d\\theta
$$
Expanding the integrand:
$$
\\int_{0}^{2\\pi} \\int_{0}^{1} (r - r^3) dr d\\theta
$$
Evaluating the inner integral:
$$
\\left[ \\frac{r^2}{2} - \\frac{r^4}{4} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}
$$
Finally, integrating with respect to $\\theta$:
$$
\\int_{0}^{2\\pi} \\frac{1}{4} d\\theta = \\frac{2\\pi}{4} = \\frac{\\pi}{2}
$$

## Summary

Double integrals in polar coordinates are an essential tool for simplifying complex integration problems involving circular or radial symmetry. By transforming the area element $dA$ to $r dr d\\theta$ and adjusting the boundaries to account for radial distance and angular sweep, mathematicians can bypass the complex algebraic expressions inherent in Cartesian integration. The success of this method relies on three main pillars: accurate identification of the region's geometry, the correct application of the Jacobian ($r$), and precise evaluation of the resulting iterated integral. Whether calculating the mass of a plate, the surface area of a curved object, or solving probability distributions in statistics, the polar transformation remains one of the most elegant and powerful techniques in vector calculus.`;export{e as default};