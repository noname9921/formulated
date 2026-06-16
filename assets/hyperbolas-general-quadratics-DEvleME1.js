var e=`# Conic Sections: Hyperbolas and General Quadratic Equations

## Definition

A hyperbola is defined as the locus of all points in a plane such that the absolute difference of the distances from two fixed points, known as the foci, is constant. Mathematically, if $F_1$ and $F_2$ are the foci and $P$ is a point on the hyperbola, then $|d(P, F_1) - d(P, F_2)| = 2a$, where $2a$ is a positive constant representing the distance between the two vertices.

In the broader context of analytic geometry, a hyperbola is a type of conic section, a curve formed by the intersection of a plane with a double cone. When the plane intersects both halves of the cone, the resulting cross-section forms two separate, symmetric branches.

The general quadratic equation in two variables, $x$ and $y$, is expressed as:
$$Ax^2+Bxy+Cy^2+Dx+Ey+F=0$$
A hyperbola is specifically represented by this equation when the discriminant $B^2-4AC > 0$. This condition distinguishes the hyperbola from other conic sections like the ellipse ($B^2-4AC < 0$) and the parabola ($B^2-4AC = 0$).

## Key Terminology

To analyze hyperbolas effectively, one must be familiar with several fundamental geometric components:

| Term | Description |
| :--- | :--- |
| Foci | The two fixed points used to define the hyperbola. |
| Vertices | The points where the hyperbola intersects its transverse axis. |
| Transverse Axis | The segment connecting the two vertices, passing through the foci. |
| Conjugate Axis | The segment perpendicular to the transverse axis, centered at the hyperbola's center. |
| Center | The midpoint of the segment connecting the two foci. |
| Asymptotes | Linear paths that the hyperbola branches approach as $x$ or $y$ values increase toward infinity. |
| Eccentricity ($e$) | A measure of the "openness" of the hyperbola, where $e > 1$. |

## Purpose

Hyperbolas serve as critical mathematical constructs in both pure and applied science. Their primary purpose in geometry is to characterize systems involving inverse relationships or propagation from two distinct sources. In physics, the hyperbola describes the trajectory of objects undergoing a gravitational slingshot maneuver. Because the gravitational potential follows an inverse-square law, an object approaching a massive body with sufficient velocity will follow a hyperbolic path relative to the body's center of mass.

Beyond navigation and orbital mechanics, hyperbolas are essential in navigation systems such as LORAN (Long Range Navigation). By measuring the difference in time-of-arrival of signals from two synchronized stations, a receiver can identify its position on a specific hyperbolic arc, with the intersection of two such arcs pinning down the exact coordinates.

## Fundamental Properties

The standard form of a hyperbola centered at the origin $(0,0)$ with a horizontal transverse axis is given by:
$$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$$
For a hyperbola with a vertical transverse axis:
$$\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$$

In these equations, the relationship between the distance from the center to the vertices ($a$), the distance from the center to the co-vertices ($b$), and the distance from the center to the foci ($c$) is defined by:
$$c^2 = a^2+b^2$$
This relationship is distinct from the ellipse, where $c^2 = a^2-b^2$. The eccentricity, which defines the elongation of the hyperbola, is calculated as $e = \\frac{c}{a}$. Since $c > a$ in a hyperbola, it follows that $e > 1$.

The asymptotes of a hyperbola are lines that the curve approaches but never touches. For a horizontal hyperbola, the equations for the asymptotes are $y = \\pm\\frac{b}{a}x$. For a vertical hyperbola, they are $y = \\pm\\frac{a}{b}x$. These lines provide the "frame" for the hyperbola's branches, controlling their rate of divergence.

## Types & Variations

Hyperbolas are categorized based on their orientation and the presence of a rotation term in the general quadratic equation.

### Standard Orientation
These are hyperbolas where the transverse axis is parallel to either the $x$-axis or the $y$-axis. They possess no $xy$ term ($B=0$) in their general equation.

### Rotated Hyperbolas
If the general quadratic equation contains an $xy$ term ($B \\neq 0$), the hyperbola is rotated by an angle $\\theta$ relative to the standard coordinate axes. To eliminate the $xy$ term, one must use a rotation of axes transformation:
$$x = x'\\cos\\theta - y'\\sin\\theta$$
$$y = x'\\sin\\theta + y'\\cos\\theta$$
The angle of rotation $\\theta$ can be found using the relationship:
$$\\cot(2\\theta) = \\frac{A-C}{B}$$

### Conjugate Hyperbolas
Two hyperbolas are conjugate if they share the same asymptotes but have their transverse and conjugate axes swapped. For instance, $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ and $\\frac{y^2}{b^2}-\\frac{x^2}{a^2}=1$ represent a pair of conjugate hyperbolas.

The following interactive graph demonstrates how the parameters $a$ and $b$ affect the shape of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Note that this represents the upper and lower branches of the hyperbola $y = \\pm b \\sqrt{\\frac{x^2}{a^2} - 1}$.

\`\`\`interactivegraph
b * sqrt((x/a)^2 - 1)
params: a=1, b=1
range: a=0.5:3, b=0.5:3
\`\`\`

## How to Solve

Analyzing a general quadratic equation of the form $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ requires a systematic reduction to the standard form.

### 1. Identify the Conic Section
Calculate the discriminant $\\Delta = B^2 - 4AC$. If $\\Delta > 0$, the conic is a hyperbola.

### 2. Elimination of the Rotation Term
If $B \\neq 0$, calculate the angle of rotation $\\theta = \\frac{1}{2}\\operatorname{arccot}(\\frac{A-C}{B})$. Substitute $x$ and $y$ with the rotated coordinates $(x', y')$. After substitution and simplification, the $x'y'$ term will vanish, resulting in an equation of the form $A'(x')^2 + C'(y')^2 + D'x' + E'y' + F' = 0$.

### 3. Completing the Square
Once the equation is in terms of $x'$ and $y'$ (or $x$ and $y$ if no rotation was needed), group the squared terms and the linear terms:
$$A'(x'^2 + \\frac{D'}{A'}x') + C'(y'^2 + \\frac{E'}{C'}y') = -F'$$
Complete the square for both variables. This process will transform the equation into:
$$\\frac{(x'-h)^2}{a^2} - \\frac{(y'-k)^2}{b^2} = 1$$
where $(h, k)$ is the center of the hyperbola.

### 4. Extracting Properties
From the standard form, determine:
- The center $(h, k)$.
- The values of $a$ and $b$.
- The distance $c = \\sqrt{a^2+b^2}$.
- The location of foci $(h \\pm c, k)$ for horizontal or $(h, k \\pm c)$ for vertical.
- The equations of the asymptotes.

## Summary

The hyperbola is a versatile conic section defined by the specific geometric constraint of constant difference between distances to foci. Its analytical representation through the general quadratic equation allows mathematicians and engineers to describe complex physical phenomena, ranging from astronomical orbital paths to precise navigation systems.

The process of moving from the general quadratic form $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ to a standard hyperbolic form is a fundamental skill in analytic geometry. By calculating the discriminant, performing rotation transformations when necessary, and completing the square, one can decompose any hyperbolic quadratic equation into its essential properties: center, vertices, foci, and asymptotes. This rigorous approach highlights the internal symmetry and beauty of conic sections, demonstrating how abstract algebraic expressions map directly onto stable, predictable geometric patterns. The study of these curves bridges the gap between static algebra and the dynamic realities of the physical world.`;export{e as default};