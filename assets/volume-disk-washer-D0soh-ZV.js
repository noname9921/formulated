var e=`# Volume: Disk and Washer Methods

## Definition

The Disk and Washer methods are integral calculus techniques used to determine the volume of a solid of revolution. A solid of revolution is a three-dimensional object created by rotating a two-dimensional planar region about an axis, typically the $x$-axis, the $y$-axis, or a line parallel to one of these axes.

The Disk Method is a specific application of the broader method of slicing. When a region bounded by a continuous function $f(x)$ and the $x$-axis on the interval $[a, b]$ is rotated about the $x$-axis, the cross-sections perpendicular to the axis of rotation are circular disks. The area of each disk is given by $A(x) = \\pi[f(x)]^2$. Integrating this cross-sectional area over the interval $[a, b]$ yields the volume:
$$V = \\int_{a}^{b} \\pi[f(x)]^2 \\, dx$$

The Washer Method is an extension of the Disk Method used when the planar region being rotated does not lie flush against the axis of rotation, resulting in a hole in the center of the solid. In this case, the cross-sections perpendicular to the axis of rotation are washers (annuli). A washer is formed by removing a smaller inner circle of radius $r(x)$ from a larger outer circle of radius $R(x)$. The area of this cross-section is $A(x) = \\pi[R(x)]^2 - \\pi[r(x)]^2$. The volume is given by:
$$V = \\int_{a}^{b} \\pi([R(x)]^2 - [r(x)]^2) \\, dx$$

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Axis of Revolution | The straight line about which a planar region is rotated to form a solid. |
| Cross-section | A planar slice taken perpendicular to the axis of revolution. |
| Disk | A circular cross-section with radius $f(x)$, used when the region is adjacent to the axis. |
| Washer | An annular cross-section with outer radius $R(x)$ and inner radius $r(x)$, used when there is a gap. |
| Solid of Revolution | A 3D object formed by revolving a region about an axis. |
| Outer Radius $R(x)$ | The distance from the axis of revolution to the outer boundary of the region. |
| Inner Radius $r(x)$ | The distance from the axis of revolution to the inner boundary of the region. |
| Integral of Volume | The process of summing infinitely many infinitesimal disks or washers to find the total capacity. |

## Purpose

The primary purpose of the Disk and Washer methods is to solve complex geometry problems that standard Euclidean formulas cannot address. While simple shapes like cylinders, spheres, and cones have well-defined volume formulas, these calculus methods allow for the calculation of volumes for objects defined by arbitrary functions.

These methods are essential in mechanical engineering, physics, and architecture. For instance, in manufacturing, these methods are used to determine the volume of material required to produce machined components that are rotated on a lathe. In physics, they allow for the calculation of the mass of objects with varying density profiles by integrating density as a function of the volume elements. Furthermore, they bridge the gap between two-dimensional graphical representations and three-dimensional spatial reasoning, serving as a cornerstone of integral calculus pedagogy.

## Fundamental Properties

Both the Disk and Washer methods rely on the Riemann integral. The fundamental property is the ability to decompose a continuous volume into an infinite sum of infinitesimal disks of thickness $dx$ (or $dy$).

1. **Additivity of Volumes:** Because the volume is defined by an integral, it possesses the property of additivity. If a solid is composed of multiple segments, the total volume is the integral of the sum of the volumes of each segment.
2. **Dependence on Continuity:** The function defining the boundaries of the shape must be continuous on the interval of integration $[a, b]$. If the function is discontinuous, the interval must be partitioned, and the integral must be evaluated as a sum of pieces.
3. **Relation to Cavalieri’s Principle:** These methods are consistent with Cavalieri's Principle, which states that if two solids have the same height and the same cross-sectional area at every level, they have the same volume. Since we define our disks/washers to have an exact cross-sectional area $A(x)$ at any point $x$, the integral effectively calculates the sum of all such areas.
4. **Orientation Invariance:** While we typically rotate around the $x$ or $y$ axis, the methodology is invariant under coordinate rotation. If the axis of revolution is a line $y = k$ or $x = h$, the radii become $R(x) = |f(x) - k|$ or $R(y) = |f(y) - h|$, adjusting the reference point of the distance function.

## Types & Variations

There are several variations depending on the orientation of the axis and the nature of the region:

### 1. Rotation about the $x$-axis
When rotating a function $f(x)$ around the $x$-axis, the thickness of the slices is $dx$. The volume is calculated as:
$$V = \\int_{a}^{b} \\pi [f(x)]^2 \\, dx$$

### 2. Rotation about the $y$-axis
When rotating a function $f(y)$ around the $y$-axis, the thickness of the slices is $dy$. The volume is:
$$V = \\int_{c}^{d} \\pi [g(y)]^2 \\, dy$$
where $g(y)$ is the function expressed in terms of $y$.

### 3. Washer Method with Offsets
When rotating around a line other than the axes, such as $y = L$, the radii are adjusted by the vertical distance between the function and the line. For a region bounded by $f(x)$ and $g(x)$ rotated about $y = L$, where $f(x) \\geq g(x) \\geq L$, the outer radius is $R(x) = f(x) - L$ and the inner radius is $r(x) = g(x) - L$.

The interactive graph below demonstrates the effect of shifting the function $f(x) = x^2$ relative to an axis of rotation. Note how the radius changes as you modify the constant $c$.

\`\`\`interactivegraph
(x^2 + c)^2
params: c=1
range: c=-2:2
\`\`\`

The graph above illustrates the squared radius component of the Disk Method, where $(x^2 + c)$ represents the distance from the axis of rotation to the function boundary. The reader should observe how changing $c$ shifts the function relative to the axis, thereby changing the volume of the resulting disk element.

## How to Solve

Solving volume problems using these methods requires a systematic approach. Follow these steps to ensure accuracy:

1. **Sketch the Region:** Draw the region in the Cartesian plane. Identify the boundaries of the function(s) and the axis of rotation.
2. **Determine the Cross-Section Type:** If the region is flush against the axis of rotation, use the Disk Method. If there is a gap, use the Washer Method.
3. **Establish the Axis of Integration:** If rotating about a horizontal line, integrate with respect to $x$ ($dx$). If rotating about a vertical line, integrate with respect to $y$ ($dy$).
4. **Identify Radii:** 
   - For the Disk Method, $r = f(x)$.
   - For the Washer Method, identify the Outer Radius $R(x)$ (further from axis) and Inner Radius $r(x)$ (closer to axis).
5. **Set the Limits of Integration:** Determine the interval $[a, b]$ or $[c, d]$ based on the intersections of the functions or the specific boundaries provided in the problem statement.
6. **Construct the Integral:** Apply the formula $V = \\pi \\int [R(x)^2 - r(x)^2] \\, dx$.
7. **Evaluate:** Perform the integration, ensuring constants like $\\pi$ are accounted for outside the integral.

### Illustrative Example
Consider the region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$ rotated about the $x$-axis.
- Since it is flush against the $x$-axis, we use the Disk Method.
- $f(x) = \\sqrt{x}$.
- Interval is $[0, 4]$.
- $V = \\pi \\int_{0}^{4} (\\sqrt{x})^2 \\, dx = \\pi \\int_{0}^{4} x \\, dx$.
- Evaluating the integral: $\\pi [\\frac{1}{2}x^2]_0^4 = \\pi (\\frac{1}{2}(16) - 0) = 8\\pi$.

## Summary

The Disk and Washer methods provide the necessary mathematical infrastructure to compute volumes of solids of revolution by utilizing the concept of Riemann sums. By slicing a 3D object into an infinite sequence of 2D cross-sections—either disks or washers—we can transform volume problems into manageable one-dimensional integrals. 

The Disk Method applies when the planar region is adjacent to the axis, while the Washer Method handles cases with internal gaps, accounting for both outer and inner boundaries. Mastery of these methods requires proficiency in sketching curves, identifying radii as distance functions from the axis, and applying the definite integral correctly. These techniques are not merely theoretical abstractions; they are vital tools for engineering and physical sciences, allowing for the precise measurement of objects across a diverse range of geometries. Consistent practice in setting up the integral, determining the correct variable of integration, and evaluating the radius functions is the key to successfully applying these methods to any rotational volume problem.`;export{e as default};