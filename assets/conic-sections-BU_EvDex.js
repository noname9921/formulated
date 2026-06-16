var e=`# Conic Sections: Parabolas and Ellipses

## Definition

Conic sections represent a class of curves obtained by the intersection of a plane with a double-napped right circular cone. Mathematically, these curves are the loci of points satisfying a specific quadratic equation in two variables, $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$. Depending on the angle of the intersecting plane relative to the axis of the cone, the resulting cross-section yields different geometric figures: circles, ellipses, parabolas, or hyperbolas.

A parabola is defined as the locus of all points in a plane that are equidistant from a fixed point (the focus) and a fixed line (the directrix). An ellipse is defined as the locus of all points in a plane such that the sum of the distances from two fixed points (the foci) is a constant value. These definitions reveal the intrinsic symmetry and algebraic elegance of conic sections, forming the basis for celestial mechanics, optics, and structural engineering.

## Key Terminology

To analyze these curves, one must master specific geometric descriptors:

| Term | Definition | Application |
| :--- | :--- | :--- |
| Focus | A fixed point used to define the curve. | Defines focal properties. |
| Directrix | A fixed line used to define the curve. | Determines curvature/eccentricity. |
| Vertex | The point where the curve reaches its maximum curvature. | Locates the "tip" of the parabola. |
| Eccentricity ($e$) | The ratio of the distance from the focus to the distance from the directrix. | $e=0$ (circle), $0<e<1$ (ellipse), $e=1$ (parabola). |
| Major Axis | The longest diameter of an ellipse passing through the foci. | Defines ellipse orientation. |
| Minor Axis | The shortest diameter perpendicular to the major axis. | Determines ellipse "flatness". |
| Latus Rectum | A chord passing through the focus parallel to the directrix. | Defines the width of the curve at the focus. |

## Purpose

The study of parabolas and ellipses is fundamental to understanding the physical world. Parabolas provide the geometry for reflective surfaces in satellite dishes and headlights, where all incident parallel rays are directed to a single point. This principle, known as the "parabolic reflector property," ensures maximum signal or light concentration.

Ellipses describe the orbits of planets, moons, and satellites. Kepler’s First Law of Planetary Motion states that planets orbit the sun in ellipses with the sun at one focus. Beyond astronomy, the elliptical property of reflecting sound or light—where waves originating at one focus converge at the other—is utilized in "whispering galleries" and medical lithotripsy, where shock waves are focused to break down kidney stones without invasive surgery.

## Fundamental Properties

Parabolas and ellipses are categorized by their eccentricity $e$. For a parabola, $e=1$, signifying that the distance to the focus is always equal to the distance to the directrix. This results in an open curve that grows infinitely. The standard form for a vertical parabola is $(x-h)^2=4p(y-k)$, where $(h,k)$ is the vertex and $p$ is the distance from the vertex to the focus.

For an ellipse, $0<e<1$. The sum of the distances from any point $P(x,y)$ on the ellipse to the foci $F_1$ and $F_2$ is equal to $2a$, where $a$ is the length of the semi-major axis. If the foci are located at $(\\pm c, 0)$, the relation $c^2=a^2-b^2$ holds, where $b$ is the length of the semi-minor axis. The standard form for an ellipse centered at $(h,k)$ is:

$$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$$

If $a>b$, the major axis is horizontal; if $b>a$, it is vertical. As $a$ approaches $b$, the ellipse approaches a circle ($e \\to 0$).

## Types & Variations

Conic sections can be translated or rotated in the Cartesian plane. When the axes of the parabola or ellipse are parallel to the coordinate axes, the equations remain in standard form. However, if the conic is rotated, a $Bxy$ term appears in the general second-degree equation, necessitating a rotation of axes transformation to simplify the expression.

Interactive exploration of these curves is essential to visualize how varying parameters influences the geometry.

\`\`\`interactivegraph
\\sqrt{b^2(1 - (x-h)^2/a^2)} + k
params: a=2, b=1, h=0, k=0
range: a=1:5, b=1:5, h=-2:2, k=-2:2
\`\`\`

The interactive graph above demonstrates an ellipse plotted as $f(x) = \\sqrt{b^2(1 - (x-h)^2/a^2)} + k$. Note that this function only captures the top half of the ellipse. To visualize the full ellipse, one must consider the negative root as well. The parameters $a$ and $b$ control the semi-axes, while $h$ and $k$ control the center. Observe how changing $a$ and $b$ changes the eccentricity, effectively stretching the ellipse into a more elongated shape or compressing it toward a circular form.

\`\`\`interactivegraph
(x-h)^2/(4*p) + k
params: p=1, h=0, k=0
range: p=-5:5, h=-5:5, k=-5:5
\`\`\`

The interactive graph above plots the parabola $f(x) = \\frac{(x-h)^2}{4p} + k$. The parameter $p$ defines the focal length. Observe that when $p>0$, the parabola opens upward, and when $p<0$, it opens downward. As $|p|$ increases, the parabola becomes wider, demonstrating the relationship between the focal distance and the rate of curvature.

## How to Solve

Solving problems involving parabolas and ellipses usually requires completing the square to transform a general quadratic equation into standard form. Consider an equation of the form $x^2 + Dx + Ey + F = 0$.

1. **Group variables:** Group the $x$-terms together and move $y$ and constant terms to the opposite side.
2. **Complete the square:** Add $(D/2)^2$ to both sides to form a perfect square trinomial.
3. **Factor and simplify:** Express the equation in the standard form $(x-h)^2 = 4p(y-k)$.
4. **Identify key features:** Extract the vertex $(h,k)$, focal distance $p$, and orientation.

For ellipses, the process is similar but involves two sets of squares: $Ax^2 + Bx + Cy^2 + Dy + E = 0$. After grouping and completing the square for both variables, divide by the constant on the right side to set the equation equal to 1. This reveals $a^2$ and $b^2$ in the denominators, allowing for the determination of the center $(h,k)$, the lengths of the axes, and the coordinates of the foci using $c = \\sqrt{|a^2-b^2|}$.

Example: $4x^2 + 9y^2 - 16x + 54y + 61 = 0$
Grouping: $4(x^2 - 4x) + 9(y^2 + 6y) = -61$
Completing: $4(x^2 - 4x + 4) + 9(y^2 + 6y + 9) = -61 + 16 + 81$
Factoring: $4(x-2)^2 + 9(y+3)^2 = 36$
Standard Form: $\\frac{(x-2)^2}{9} + \\frac{(y+3)^2}{4} = 1$
Results: Center $(2,-3)$, $a=3$, $b=2$.

## Summary

Parabolas and ellipses are fundamental conic sections defined by their geometric properties and algebraic equations. Parabolas, characterized by an eccentricity of $1$, are defined by a focus and directrix, providing the basis for reflective optics. Ellipses, with eccentricity between $0$ and $1$, are defined by the sum of distances to two foci, governing the motion of celestial bodies. By mastering the standard forms and the technique of completing the square, one can analyze and graph these curves, effectively bridging the gap between theoretical geometry and real-world application. Understanding these shapes is not merely an academic exercise but a gateway into fields ranging from physics to architectural design.`;export{e as default};