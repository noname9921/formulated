var e=`# Conic Sections: Hyperbolas and General Quadratic Equations

## Definition

A hyperbola is a type of smooth curve lying in a plane, defined by its geometric properties or by equations in the Cartesian plane. Geometrically, it is the set of all points $(x,y)$ in a plane such that the absolute difference of the distances from two fixed points, known as the foci, is a constant value. Algebraically, a hyperbola is a conic section formed when a plane intersects both halves of a double cone. 

In the broader context of coordinate geometry, a hyperbola is a specific case of the general quadratic equation in two variables:
$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$
For this equation to represent a hyperbola, the discriminant $B^2 - 4AC$ must be strictly greater than zero. When $B=0$, the equation simplifies to the standard form of a hyperbola with axes parallel to the coordinate axes.

## Key Terminology

To analyze hyperbolas, one must be familiar with the following components:

| Term | Definition |
| :--- | :--- |
| Foci | The two fixed points used to define the hyperbola. |
| Center | The midpoint of the line segment connecting the two foci. |
| Vertices | The points where the hyperbola intersects its transverse axis. |
| Transverse Axis | The line segment passing through the foci and vertices. |
| Conjugate Axis | The line segment perpendicular to the transverse axis at the center. |
| Asymptotes | The lines that the branches of the hyperbola approach as $x$ or $y$ tend to infinity. |
| Eccentricity ($e$) | A measure of the "openness" of the hyperbola, defined as $e = c/a$, where $e > 1$. |

## Purpose

The study of hyperbolas and general quadratic equations serves both theoretical and practical objectives. Mathematically, it allows for the classification of all conic sections through the discriminant analysis of the general quadratic form. This classification provides a unified framework for understanding ellipses, parabolas, and hyperbolas as different manifestations of the same planar intersection.

Practically, hyperbolas are essential in fields ranging from astronomy to telecommunications. For instance, the trajectories of objects following a hyperbolic escape path in a gravitational field are described by hyperbolic equations. In navigation, the LORAN (Long Range Navigation) system relies on the intersection of hyperbolic lines of position to determine a location based on the time difference of signals received from two fixed stations.

## Fundamental Properties

The standard equation of a horizontal hyperbola centered at $(h,k)$ is:
$$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$$
For a vertical hyperbola, the equation is:
$$\\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1$$

In these equations, $a$ represents the distance from the center to a vertex, while $b$ is associated with the conjugate axis. A critical relationship inherent to hyperbolas is $c^2 = a^2 + b^2$, where $c$ is the distance from the center to each focus. Unlike an ellipse, where $a^2 = b^2 + c^2$, the hyperbola follows the Pythagorean relationship dictated by the fact that $c$ is the longest segment in the triangle formed by $a$ and $b$.

The asymptotes are a defining characteristic. For a horizontal hyperbola, the equations of the asymptotes are:
$$y - k = \\pm\\frac{b}{a}(x - h)$$
These lines act as boundaries for the curve. As the value of $x$ becomes very large, the ratio $(y-k)/(x-h)$ approaches $\\pm b/a$.

The graph below visualizes a standard hyperbola $f(x)$ centered at the origin, showing its two branches opening horizontally.

\`\`\`graph
\\sqrt{1 + x^2}
-\\sqrt{1 + x^2}
\`\`\`

This static plot illustrates the upper and lower branches of the hyperbola $y^2 - x^2 = 1$ (adjusted for function notation).

## Types & Variations

Hyperbolas are categorized based on their orientation and the presence of the $xy$-term in the general quadratic equation.

### 1. Standard Orientation
When the axes are parallel to the $x$ and $y$ axes, the $B$ coefficient in the general equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ is zero. If $A$ and $C$ have opposite signs, the conic is a hyperbola. If $A$ or $C$ is zero, the conic is a degenerate or parabolic case, depending on the other coefficients.

### 2. Rotated Hyperbolas
When $B \\neq 0$, the hyperbola is rotated relative to the coordinate axes. This is common when the quadratic equation contains a cross-product term. To solve or graph these, one must perform a rotation of axes by an angle $\\theta$, where:
$$\\cot(2\\theta) = \\frac{A - C}{B}$$
This transformation eliminates the $xy$-term, resulting in a new equation $A'x'^2 + C'y'^2 + D'x' + E'y' + F' = 0$, which can then be analyzed using the standard methods.

### 3. Rectangular Hyperbolas
A rectangular (or equilateral) hyperbola occurs when $a = b$. The asymptotes are perpendicular, specifically $y = \\pm x$ if centered at the origin. The simplest form is $xy = k$.

The following interactive graph allows for the observation of how the parameters $a$ and $b$ (as denominators in the standard form) affect the shape of the hyperbola $y = \\pm\\sqrt{b^2((x/a)^2 - 1)}$.

\`\`\`interactivegraph
\\sqrt{b^2 * ((x/a)^2 - 1)}
params: a=1, b=1
range: a=0.5:3, b=0.5:3
\`\`\`
In this interactive graph, adjusting $a$ changes the distance between the vertices, while adjusting $b$ alters the steepness of the asymptotes.

## How to Solve

Solving problems involving hyperbolas usually follows a systematic approach:

### Step 1: Identification
Examine the coefficients $A, B,$ and $C$ in the general equation. Calculate $B^2 - 4AC$. If the result is positive, proceed with the analysis for a hyperbola.

### Step 2: Completion of Squares
If the equation is in the form $Ax^2 + Cy^2 + Dx + Ey + F = 0$, group the $x$ and $y$ terms:
$$A(x^2 + \\frac{D}{A}x) + C(y^2 + \\frac{E}{C}y) = -F$$
Complete the square for both variables. This transforms the equation into the standard form:
$$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1 \\quad \\text{or} \\quad \\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1$$

### Step 3: Extracting Parameters
Once in standard form, identify:
1. The center $(h,k)$.
2. The values of $a$ and $b$ to determine the vertices and the box used to draw asymptotes.
3. The value $c = \\sqrt{a^2 + b^2}$ to locate the foci at $(h \\pm c, k)$ for horizontal or $(h, k \\pm c)$ for vertical hyperbolas.

### Step 4: Verification
Verify the eccentricity $e = c/a$. A hyperbola must have $e > 1$. If the resulting $e < 1$, the calculation likely involves an ellipse.

## Summary

The hyperbola is a fundamental conic section characterized by the difference of distances to two foci. It is uniquely identified within the set of quadratic equations by the condition $B^2 - 4AC > 0$. Through the processes of coordinate rotation and completion of squares, any quadratic equation representing a hyperbola can be reduced to its canonical form, allowing for the precise determination of its center, vertices, foci, and asymptotes. By understanding these properties, one gains the ability to model complex physical phenomena where trajectories escape toward infinity, emphasizing the hyperbola's role as both a theoretical construct in planar geometry and a vital tool in applied mathematics and physics. Whether expressed in the standard form relative to fixed axes or in a generalized form including rotation, the hyperbola remains a consistent and predictable geometric entity.`;export{e as default};