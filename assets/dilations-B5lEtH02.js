var e=`# Non-Rigid Transformations: Dilations and Scale Factors

## Definition

In the study of Euclidean geometry and linear algebra, transformations are classified based on whether they preserve the size and shape of a geometric figure. While rigid transformations—such as translations, rotations, and reflections—preserve both, non-rigid transformations alter the dimensions of an object while maintaining its structural proportion. A dilation (also known as a scaling transformation) is a specific type of non-rigid transformation that changes the size of an object by a scale factor relative to a fixed point known as the center of dilation.

Mathematically, a dilation centered at the origin $(0,0)$ with a scale factor $k > 0$ maps a point $P(x,y)$ to a new point $P'(x',y')$ such that the vector $\\vec{OP'}$ is $k$ times the vector $\\vec{OP}$. This is expressed as:
$$x'=kx$$
$$y'=ky$$

If $k > 1$, the transformation is an expansion, resulting in an image larger than the original figure. If $0 < k < 1$, the transformation is a contraction, resulting in an image smaller than the original. If $k=1$, the transformation is the identity transformation. When $k < 0$, the transformation involves a reflection through the center of dilation in addition to the scaling process.

## Key Terminology

To understand dilations, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Center of Dilation | The fixed point $C$ from which all distances are measured during the scaling process. |
| Scale Factor ($k$) | The ratio of the length of a side of the image to the corresponding side of the original figure. |
| Similarity | The relationship between the original figure and its image; they have the same shape but potentially different sizes. |
| Expansion | A dilation where $k > 1$, causing the image to appear larger than the pre-image. |
| Contraction | A dilation where $0 < k < 1$, causing the image to appear smaller than the pre-image. |
| Pre-image | The initial geometric figure or set of points before the transformation is applied. |
| Image | The final figure or set of points resulting from the application of the dilation. |

## Purpose

The primary purpose of dilations in mathematics and applied sciences is to describe systems where relative proportions remain constant while absolute magnitudes change. This is foundational to the concept of similarity in geometry. If a figure undergoes a dilation, all corresponding angles remain congruent, and all corresponding sides remain proportional. This property allows for the modeling of structures at different scales without losing their essential geometric characteristics.

In computer graphics, dilations are used for zooming and texture mapping, where images must be resized while preserving aspect ratios. In engineering and architecture, scale factors are used to create blueprints that represent large structures within manageable dimensions. By utilizing dilations, analysts can perform calculations on a scaled-down model and extrapolate those results to the real-world object using the inverse of the scale factor $k$.

## Fundamental Properties

Dilations possess distinct algebraic and geometric properties that differentiate them from isometries (rigid motions).

1. **Collinearity Preservation:** Dilations map lines to lines. If three points $A, B,$ and $C$ are collinear, their images $A', B',$ and $C'$ will also be collinear.
2. **Angle Measure Invariance:** Dilations preserve the measure of angles. If $\\angle ABC$ is transformed into $\\angle A'B'C'$, then $m\\angle ABC = m\\angle A'B'C'$. This confirms that dilations result in similar figures.
3. **Parallelism Preservation:** If two lines are parallel in the pre-image, their corresponding images under a dilation remain parallel.
4. **Ratio of Distances:** For any two points $P$ and $Q$ and their images $P'$ and $Q'$, the distance $d(P', Q') = |k| \\cdot d(P, Q)$. This linear relationship confirms that distance is scaled by the absolute value of the scale factor.
5. **Area Scaling:** The area of a two-dimensional shape changes by a factor of $k^2$ under a dilation. If a shape with area $A$ is dilated by $k$, the new area $A'$ is $A' = k^2 A$.
6. **Volume Scaling:** In three dimensions, the volume of a solid changes by a factor of $k^3$. If a solid with volume $V$ is dilated by $k$, the new volume $V'$ is $V' = k^3 V$.

## Types & Variations

Dilations can be categorized based on the location of the center and the value of $k$.

### Uniform Dilation
A uniform dilation is one where the scale factor $k$ is identical in all directions (along both the $x$ and $y$ axes). This is the standard definition used in geometry, ensuring the aspect ratio is preserved.

### Non-Uniform Dilation (Anisotropic Scaling)
In cases where $k_x \\neq k_y$, the transformation is known as anisotropic scaling. This is a non-rigid transformation that does not preserve shape; circles become ellipses, and squares become rectangles. The transformation is represented by:
$$x'=k_x x$$
$$y'=k_y y$$

### Interactive Exploration
The following interactive graph allows for the exploration of a standard function $f(x) = ax^2$. By adjusting $a$, one can observe the vertical dilation (stretching or compressing) of the parabola.

\`\`\`interactivegraph
a * x^2
params: a=1
range: a=0.1:5
\`\`\`

The graph above plots $f(x) = ax^2$, where $a$ serves as the vertical scale factor. When $a > 1$, the parabola narrows, indicating a vertical stretch. When $0 < a < 1$, the parabola widens, indicating a vertical compression.

## How to Solve

To perform a dilation analytically, follow this step-by-step approach:

### Step 1: Identify the Center of Dilation
If the center of dilation is the origin $(0,0)$, the transformation is straightforward. If the center is at an arbitrary point $C(h, k)$, one must first translate the coordinate system so that $C$ is at the origin.

### Step 2: Translate the Pre-image
Subtract the center coordinates from the points of the pre-image:
$$x_{shifted} = x - h$$
$$y_{shifted} = y - k$$

### Step 3: Apply the Scale Factor
Multiply the shifted coordinates by the scale factor $k$:
$$x_{new} = k(x - h)$$
$$y_{new} = k(y - k)$$

### Step 4: Translate Back
Add the center coordinates back to the scaled result:
$$x' = k(x - h) + h$$
$$y' = k(y - k) + k$$

### Numerical Example
Consider the point $P(2, 3)$ dilated by a scale factor $k=2$ centered at $(1, 1)$.
1. Translate: $x - 1 = 1$, $y - 1 = 2$.
2. Scale: $1 \\cdot 2 = 2$, $2 \\cdot 2 = 4$.
3. Shift back: $2 + 1 = 3$, $4 + 1 = 5$.
The new point is $P'(3, 5)$.

## Summary

Non-rigid transformations, specifically dilations, are essential tools for manipulating the scale of geometric entities. Unlike rigid motions that preserve size, dilations adjust the spatial extent of an object relative to a center point. The fundamental mechanism involves multiplying coordinates by a scale factor $k$. 

We have established that:
- **Similarity** is maintained because angles and parallelisms are invariant.
- **Area and Volume** scale non-linearly, following $k^2$ and $k^3$ laws respectively.
- **Algebraic consistency** allows us to handle centers of dilation at any point in the Cartesian plane through iterative translation and scaling.

Understanding these transformations is not merely a theoretical exercise; it provides the mathematical backbone for computer-aided design (CAD), geographic information systems (GIS), and any discipline requiring the transition between micro-level models and macro-level reality. By mastering the distinction between uniform and non-uniform scaling, a practitioner gains the ability to manipulate data and shapes with precision, ensuring that the necessary proportionality is preserved or intentionally distorted to meet specific analytical needs.`;export{e as default};