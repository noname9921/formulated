var e=`# Equations of Lines and Circles in the Coordinate Plane

## Definition

The coordinate plane, often referred to as the Cartesian plane, is a two-dimensional surface formed by the intersection of two perpendicular number lines: the horizontal $x$-axis and the vertical $y$-axis. Within this framework, geometric figures are represented as sets of points $(x,y)$ that satisfy specific algebraic equations.

A line is defined as the set of all points $(x,y)$ that maintain a constant rate of change between their coordinates. Algebraically, this is expressed through linear equations. A circle is defined as the set of all points $(x,y)$ in a plane that are at a fixed distance, known as the radius $r$, from a fixed center point $(h,k)$. These definitions bridge the gap between pure Euclidean geometry and coordinate geometry, allowing for the analytical treatment of shapes.

## Key Terminology

To analyze these shapes, one must be familiar with the following fundamental terms:

*   **Slope ($m$):** The measure of the steepness and direction of a line, calculated as the ratio of the "rise" (change in $y$) to the "run" (change in $x$), given by $m=\\frac{y_2-y_1}{x_2-x_1}$.
*   **Intercepts:** The points where a graph intersects the axes. The $x$-intercept occurs where $y=0$, and the $y$-intercept occurs where $x=0$.
*   **Radius ($r$):** The constant distance from the center of a circle to any point on its circumference. By definition, $r>0$.
*   **Center $(h,k)$:** The coordinate point representing the geometric center of a circle.
*   **Collinearity:** A condition where three or more points lie on the same straight line.
*   **Equidistance:** The property that all points on the circumference of a circle are at an equal distance from the center.

## Purpose

The primary purpose of representing lines and circles as equations is to transform geometric problems into algebraic ones. By converting shapes into functions or relations, mathematicians and engineers can solve for unknown intersections, determine tangents, calculate areas, and model real-world phenomena such as orbital trajectories, structural supports, and wave propagation. Analytical geometry, as founded by René Descartes, provides the rigorous foundation necessary for calculus, physics, and computer graphics, where spatial data must be manipulated numerically.

## Fundamental Properties

### Lines
A line is the simplest geometric figure in the coordinate plane. Its defining characteristic is a constant slope. If a line passes through two points $(x_1, y_1)$ and $(x_2, y_2)$, the slope is invariant regardless of which points are chosen. Vertical lines, characterized by the form $x=c$, possess an undefined slope, whereas horizontal lines, $y=c$, have a slope of $0$.

### Circles
The circle is defined by the distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. For a circle with center $(h,k)$ and radius $r$, every point $(x,y)$ on the circle must satisfy the condition that its distance to $(h,k)$ is exactly $r$:
$$\\sqrt{(x-h)^2+(y-k)^2}=r$$
Squaring both sides yields the standard form equation:
$$(x-h)^2+(y-k)^2=r^2$$

The following table summarizes the basic algebraic variations of lines and circles:

| Geometric Entity | Standard Algebraic Form | Key Parameters |
| :--- | :--- | :--- |
| Slope-Intercept Line | $y=mx+b$ | Slope $m$, $y$-intercept $b$ |
| Point-Slope Line | $y-y_1=m(x-x_1)$ | Slope $m$, Point $(x_1, y_1)$ |
| Standard Form Line | $Ax+By=C$ | Coefficients $A, B, C$ |
| Standard Circle | $(x-h)^2+(y-k)^2=r^2$ | Center $(h,k)$, Radius $r$ |
| General Circle | $x^2+y^2+Dx+Ey+F=0$ | Derived from expansion |

## Types & Variations

### Lines
Lines manifest in several forms depending on the available information. The slope-intercept form ($y=mx+b$) is ideal for graphing, as it explicitly highlights the steepness and the starting position on the vertical axis. The point-slope form ($y-y_1=m(x-x_1)$) is the most versatile for deriving an equation when given a single point and the slope. The general form ($Ax+By+C=0$) is often used in linear algebra systems.

### Circles
Circles are typically encountered in two forms: the standard form, which immediately reveals the center and radius, and the general form ($x^2+y^2+Dx+Ey+F=0$). Converting between these requires the process of "completing the square."

The interactive graph below allows for the exploration of how parameters $m$ and $b$ shift the line $y=mx+b$ and how $h$ and $k$ shift the circle center. Note that while a circle is a relation, it can be expressed as two functions $y=k \\pm \\sqrt{r^2-(x-h)^2}$ for graphing purposes.

\`\`\`interactivegraph
\\sqrt{r^2 - (x-h)^2} + k
params: h=0, k=0, r=2
range: h=-2:2, k=-2:2, r=1:3
\`\`\`

The graph above plots the upper semi-circle $f(x) = \\sqrt{r^2-(x-h)^2} + k$. By adjusting $h$ and $k$, the user can shift the circle's position in the coordinate plane, while adjusting $r$ modifies the radius of the circle.

## How to Solve

### Finding the Equation of a Line
1.  **Identify two points:** If given $(x_1, y_1)$ and $(x_2, y_2)$, first calculate the slope $m=\\frac{y_2-y_1}{x_2-x_1}$.
2.  **Substitute:** Use the point-slope formula $y-y_1=m(x-x_1)$.
3.  **Simplify:** Distribute $m$ and isolate $y$ to convert to slope-intercept form $y=mx+b$.

### Finding the Equation of a Circle
1.  **Identify Parameters:** Determine the center $(h,k)$ and the radius $r$.
2.  **Substitute:** Plug these values into $(x-h)^2+(y-k)^2=r^2$.
3.  **Expand (if required):** If the general form is needed, expand the squares and group terms: $x^2-2xh+h^2+y^2-2yk+k^2=r^2$.

### Completing the Square for Circles
Given the general form $x^2+y^2+Dx+Ey+F=0$:
1.  **Group variables:** $(x^2+Dx) + (y^2+Ey) = -F$.
2.  **Add Constants:** Add $(\\frac{D}{2})^2$ to the $x$-group and $(\\frac{E}{2})^2$ to the $y$-group. Remember to add these same values to the right side of the equation to maintain equality.
3.  **Factor:** Write the expressions as squares: $(x+\\frac{D}{2})^2 + (y+\\frac{E}{2})^2 = R^2$, where $R^2 = \\frac{D^2}{4} + \\frac{E^2}{4} - F$.

The following static graph displays two lines and a circle to demonstrate their coexistence in the coordinate plane.

\`\`\`graph
2*x + 1
-0.5*x + 3
\\sqrt{4 - (x-1)^2} + 1
-\\sqrt{4 - (x-1)^2} + 1
\`\`\`

The graph displays two linear functions, $f(x)=2x+1$ and $g(x)=-0.5x+3$, which are perpendicular, alongside a circle centered at $(1,1)$ with a radius of $2$, represented by the two semicircular functions.

## Summary

The study of lines and circles within the coordinate plane provides the bedrock for analytical geometry. By defining lines through their constant slope and circles through their fixed distance from a center, we transform visual geometry into algebraic equations. These equations allow us to perform rigorous calculations regarding slope, position, radius, and intersection.

Mastering the conversion between standard and general forms, especially the skill of completing the square for circles, is essential for identifying geometric properties directly from algebraic expressions. These concepts serve not only as an end in themselves but as the foundational language required for higher-order mathematics, including trigonometry, conic sections, and calculus, where linear and circular approximations are frequently used to understand more complex, non-linear systems. By internalizing these definitions, parameters, and solving techniques, one gains the ability to map the physical world into the precision of the coordinate plane.`;export{e as default};