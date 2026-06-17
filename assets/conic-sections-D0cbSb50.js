var e=`# Conic Sections: Parabolas and Ellipses

## Definition

Conic sections are the curves obtained by the intersection of a plane with a double-napped right circular cone. Depending on the angle at which the plane slices the cone relative to its axis, the resulting intersection creates different geometric shapes: circles, ellipses, parabolas, or hyperbolas. In coordinate geometry, these shapes are defined as the locus of points satisfying specific second-degree equations in two variables.

A parabola is defined as the set of all points in a plane that are equidistant from a fixed point (the focus) and a fixed line (the directrix). Mathematically, if a point is denoted by $P(x,y)$, a focus by $F(h,k)$, and a directrix by the line $L$, then the parabola consists of all points $P$ such that the distance $d(P,F) = d(P,L)$.

An ellipse is the set of all points in a plane such that the sum of the distances from two fixed points (the foci) is constant. If the foci are $F_1$ and $F_2$, an ellipse is defined by the set of points $P$ where $d(P,F_1) + d(P,F_2) = 2a$, where $2a$ is a constant greater than the distance between the foci $d(F_1,F_2)$.

## Key Terminology

To analyze these shapes, we utilize standard geometric nomenclature:

| Term | Definition |
| :--- | :--- |
| Focus | A fixed point used to define the curve (plural: foci). |
| Directrix | A fixed line used to define a parabola. |
| Vertex | The point where the curve reaches its maximum or minimum curvature. |
| Major Axis | The longest diameter of an ellipse passing through both foci. |
| Minor Axis | The shortest diameter of an ellipse perpendicular to the major axis. |
| Eccentricity | A measure of how much a conic section deviates from being a circle. |
| Latus Rectum | A chord passing through the focus perpendicular to the axis of symmetry. |

For a parabola, the distance from the vertex to the focus is denoted by $p$. For an ellipse, the semi-major axis is $a$, the semi-minor axis is $b$, and the distance from the center to each focus is $c$, related by $c^2=a^2-b^2$.

## Purpose

The study of conic sections serves as a cornerstone of classical mechanics and optics. Historically, Johannes Kepler utilized the properties of the ellipse to derive his laws of planetary motion, establishing that planets orbit the sun in elliptical paths with the sun at one focus. This shifted the scientific paradigm from circular to elliptical celestial mechanics.

Parabolas are essential in engineering due to their reflective properties. Any light ray or signal traveling parallel to the axis of a parabolic reflector will bounce off the surface and pass through the focus. This principle is utilized in satellite dishes, solar cookers, and car headlights. Conversely, placing a light source at the focus of a parabolic mirror produces a beam of parallel rays, which is critical for long-range projection.

## Fundamental Properties

The defining property of a parabola is its eccentricity $e=1$. It represents the boundary case between an ellipse (where $e < 1$) and a hyperbola (where $e > 1$). The standard equation for a parabola with vertex $(h,k)$ opening vertically is $(x-h)^2 = 4p(y-k)$. The value $p$ determines the direction and "width" of the parabola.

For an ellipse, the property $d(P,F_1) + d(P,F_2) = 2a$ ensures that the curve is bounded and symmetric. The standard equation centered at $(h,k)$ is $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$ (if horizontal) or $\\frac{(x-h)^2}{b^2} + \\frac{(y-k)^2}{a^2} = 1$ (if vertical). The eccentricity is defined as $e = \\frac{c}{a}$. As $c$ approaches $0$, the ellipse approaches a circle.

## Types & Variations

Parabolas can be oriented along the $x$-axis or $y$-axis. A horizontal parabola has the form $(y-k)^2 = 4p(x-h)$. If $p > 0$, it opens to the right; if $p < 0$, it opens to the left. A vertical parabola follows $(x-h)^2 = 4p(y-k)$; if $p > 0$, it opens upward; if $p < 0$, it opens downward.

Ellipses are classified by the orientation of their major axis. In a horizontal ellipse, $a > b$, and the major axis lies along the line $y=k$. In a vertical ellipse, $a > b$ again, but the denominator under $(y-k)^2$ is larger, meaning the major axis lies along $x=h$.

The interactive graph below illustrates how the parameter $a$ affects the curvature of a parabola defined by $f(x)=ax^2$.

\`\`\`interactivegraph
a*x^2
params: a=1
range: a=-5:5
\`\`\`

The user can observe how increasing $a$ narrows the parabola, while negative values reflect it across the $x$-axis.

## How to Solve

Solving for the properties of a conic section usually begins by completing the square to transform a general second-degree equation $Ax^2 + Cy^2 + Dx + Ey + F = 0$ into the standard form.

### Steps for Parabolas
1. Group terms involving $x$ and $y$ separately.
2. Isolate the squared variable term (e.g., $x^2$) and its linear counterpart on one side.
3. Complete the square to form a perfect square binomial.
4. Factor the remaining side to isolate the $(4p)$ coefficient.
5. Identify the vertex $(h,k)$ and the focal length $p$.

### Steps for Ellipses
1. Group $x$-terms and $y$-terms and move the constant to the other side.
2. Factor out the leading coefficients of $x^2$ and $y^2$.
3. Complete the square for both variables.
4. Divide the entire equation by the resulting constant on the right side to set it equal to 1.
5. Identify $a^2$ and $b^2$ to find the semi-axes lengths and determine the location of the foci using $c = \\sqrt{|a^2-b^2|}$.

Example: Consider $4x^2 + 9y^2 - 16x + 54y + 61 = 0$.
Group: $4(x^2 - 4x) + 9(y^2 + 6y) = -61$.
Complete: $4(x^2 - 4x + 4) + 9(y^2 + 6y + 9) = -61 + 16 + 81$.
$4(x-2)^2 + 9(y+3)^2 = 36$.
Divide by 36: $\\frac{(x-2)^2}{9} + \\frac{(y+3)^2}{4} = 1$.
This is an ellipse with center $(2, -3)$, $a=3$, and $b=2$.

## Summary

Conic sections provide a robust mathematical framework for describing physical paths and geometric phenomena. The parabola, defined by a single focus and directrix, possesses unique reflective properties vital to modern technology. The ellipse, defined by the constant sum of distances from two foci, governs the orbital mechanics of our solar system. By utilizing the algebraic process of completing the square, we can decompose complex quadratic relations into their geometric components, allowing for the precise analysis of vertices, focal points, and orientation. Mastering these shapes allows for a deeper understanding of how abstract geometry manifests in the physical world.`;export{e as default};