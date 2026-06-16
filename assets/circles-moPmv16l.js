var e=`# Circles: Chords, Tangents, and Secants

## Definition

A circle is defined as the locus of all points in a two-dimensional plane that maintain a constant distance, known as the radius ($r$), from a fixed central point ($h, k$). Mathematically, this is expressed as the set of points $(x,y)$ satisfying the Cartesian equation:

$$(x-h)^2+(y-k)^2=r^2$$

In classical Euclidean geometry, the interactions between a circle and a line are governed by the number of points of intersection. When a line interacts with a circle, it is classified based on its proximity to the center and the number of intersections:

1. **Secant Line:** A line that intersects the circle at exactly two distinct points. It passes through the interior of the circle, effectively cutting it into two segments.
2. **Chord:** A specific segment of a secant line whose endpoints both lie on the circumference of the circle. A chord that passes through the center is defined as the diameter.
3. **Tangent Line:** A line that touches the circle at exactly one point, known as the point of tangency. The tangent is perpendicular to the radius at this specific point of intersection.

## Key Terminology

To analyze these geometric entities, one must understand the lexicon associated with circular metrics:

| Term | Definition |
|:---|:---|
| Circumference | The total length of the boundary of the circle, calculated as $2\\pi r$. |
| Radius | The distance from the center to any point on the boundary. |
| Diameter | The longest possible chord, passing through the center; $d=2r$. |
| Secant | A line extending infinitely that crosses the circle at two points. |
| Tangent | A line that intersects the circle at exactly one point. |
| Chord | A line segment connecting any two points on the circle. |
| Point of Tangency | The single coordinate where the tangent line and circle intersect. |
| Interior/Exterior | Regions inside the circle ($x^2+y^2<r^2$) or outside ($x^2+y^2>r^2$). |

## Purpose

The study of chords, tangents, and secants is fundamental to both theoretical geometry and practical engineering. These elements provide the basis for calculating angular velocity in mechanical systems, determining stress distribution in structural arches, and solving complex problems in navigation and optics.

By understanding the relationship between these lines, one can derive the properties of inscribed angles, arc lengths, and power of a point theorems. For instance, the Secant-Secant Power Theorem allows for the determination of segment lengths when two secants intersect outside a circle, a principle used extensively in surveying and global positioning systems to triangulate locations based on circular constraints.

## Fundamental Properties

The interaction between circles and linear paths adheres to specific rigid geometric rules.

### Chord Properties
1. **Perpendicular Bisector:** The perpendicular bisector of any chord passes through the center of the circle. This is a vital property for locating the center of an unknown circle or circular arc.
2. **Congruency:** In a single circle, two chords are congruent if and only if they are equidistant from the center.
3. **Equidistance:** Chords of equal length subtend equal central angles.

### Tangent Properties
1. **Perpendicularity:** A tangent line is always perpendicular to the radius at the point of tangency. If a line is perpendicular to a radius at the point where the radius hits the circle, it is mathematically guaranteed to be a tangent.
2. **Tangents from a Point:** For any point outside a circle, exactly two tangents can be drawn to the circle. The segments from the exterior point to the points of tangency are always congruent.

### Secant Properties
1. **Secant-Secant Theorem:** If two secant segments are drawn to a circle from an exterior point, the product of the measures of one secant segment and its external part is equal to the product of the measures of the other secant segment and its external part.
2. **Intersection:** When two secant lines intersect inside a circle, the measure of the angle formed is half the sum of the measures of the intercepted arcs.

## Types & Variations

Circles can be categorized by their interaction with lines in different coordinate environments. Consider the relationship $d(C, L)$, where $d$ is the perpendicular distance from the center of the circle $C$ to the line $L$.

1. **The Tangent Case ($d=r$):** The line $L$ is tangent to the circle. There exists only one solution to the intersection equation.
2. **The Secant Case ($d<r$):** The line $L$ passes through the circle, creating a chord. The quadratic intersection equation yields two real, distinct solutions.
3. **The External Case ($d>r$):** The line $L$ lies entirely outside the circle. The intersection equation yields no real roots.

The variation in these interactions is best understood by observing how a line's distance from the origin changes, effectively moving from a secant to a tangent and finally to an external line. The following interactive graph allows for the observation of a line $y = mx + b$ relative to a unit circle $x^2 + y^2 = 1$.

\`\`\`interactivegraph
m*x + b
params: m=0, b=0
range: m=-2:2, b=-2:2
\`\`\`

In the interactive graph above, the reader can observe the line $f(x) = mx + b$. By adjusting $b$ (the y-intercept), one can move the line toward the origin. When $|b|$ is less than the radius of the circle, the line acts as a secant. When $|b| = 1$, the line is tangent to the unit circle. When $|b| > 1$, the line is external.

## How to Solve

Solving problems involving circles requires a systematic approach to coordinate geometry and algebraic substitution.

### Step 1: Establish the Equation
Given a circle $(x-h)^2+(y-k)^2=r^2$ and a line $y=mx+b$, substitute the line equation into the circle equation:
$$(x-h)^2 + (mx+b-k)^2 = r^2$$

### Step 2: Form a Quadratic
Expand the expression to reach the standard quadratic form $Ax^2 + Bx + C = 0$. The discriminant $D = B^2 - 4AC$ will determine the nature of the interaction:
- If $D > 0$: The line is a secant (two intersection points).
- If $D = 0$: The line is a tangent (one intersection point).
- If $D < 0$: The line is external (no intersection).

### Step 3: Utilize Geometry Theorems
If coordinate geometry is unnecessary, use the properties of triangles. For a chord of length $L$ in a circle of radius $r$, the distance $d$ from the center is found via the Pythagorean theorem:
$$r^2 = d^2 + \\left(\\frac{L}{2}\\right)^2$$
This allows for quick calculations of distances without solving for specific $(x, y)$ coordinates.

### Example Problem
Find the distance from the center $(0,0)$ of a circle with radius $r=5$ to a chord of length $8$.
1. Identify $r=5$.
2. The chord length is 8, so half the chord is 4.
3. Apply the Pythagorean theorem: $5^2 = d^2 + 4^2$.
4. $25 = d^2 + 16$.
5. $d^2 = 9 \\implies d=3$.
The distance from the center to the chord is 3 units.

## Summary

The geometry of circles is defined by the interaction between the curvature of the boundary and the linearity of intersecting lines. Chords, tangents, and secants are not merely arbitrary divisions of the circle; they are the fundamental components used to map properties of circular motion and spatial relationships.

- **Chords** provide the bridge for internal measurement and bisecting relationships.
- **Tangents** represent the limit of a secant line as it approaches a single point, serving as the basis for calculus and slope analysis at a point on a curve.
- **Secants** quantify the intersection of external lines with the circle's interior, governed by the Power of a Point theorem.

By mastering the discriminant analysis for intersections and the geometric theorems governing lengths and angles, one gains the ability to solve complex problems in fields ranging from architectural design to orbital mechanics. The interaction between these elements remains a cornerstone of classical and modern mathematics.`;export{e as default};