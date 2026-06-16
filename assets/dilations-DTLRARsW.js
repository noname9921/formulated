var e=`# Non-Rigid Transformations: Dilations and Scale Factors

## Definition

In the realm of Euclidean geometry and coordinate algebra, a transformation refers to a mapping of a set of points to a new set of points. Transformations are broadly categorized into rigid and non-rigid types. Rigid transformations (isometries), such as translations, rotations, and reflections, preserve the distance between points and the measure of angles, meaning the size and shape of the figure remain unchanged. Conversely, non-rigid transformations alter the size or shape of an object while maintaining its structural correspondence.

A dilation is a specific type of non-rigid transformation that alters the size of an object—scaling it up or down—while preserving its shape. Formally, a dilation is a function $D: \\mathbb{R}^2 \\to \\mathbb{R}^2$ with respect to a fixed point $C$ (the center of dilation) and a scale factor $k$. For any point $P$, its image $P'$ satisfies the condition that $P'$ lies on the line passing through $C$ and $P$, such that the distance $|CP'| = |k| \\cdot |CP|$. When $k > 1$, the transformation is an enlargement; when $0 < k < 1$, it is a reduction. If $k$ is negative, the dilation also involves a reflection across the center of dilation.

## Key Terminology

To analyze dilations effectively, one must master the following vocabulary:

| Term | Definition |
| :--- | :--- |
| Center of Dilation ($C$) | The fixed point about which all points are expanded or contracted. |
| Scale Factor ($k$) | The ratio of the distance from the center to the image point versus the original point. |
| Pre-image | The original geometric figure or set of coordinates before the transformation. |
| Image | The resulting figure or set of coordinates after applying the transformation. |
| Similarity | A relationship between two figures where they have the same shape, even if their sizes differ. |
| Algebraic Dilation | The application of a scalar multiplier to coordinate pairs $(x, y)$. |
| Magnification | A dilation where $|k| > 1$, resulting in a larger image. |
| Compression | A dilation where $0 < |k| < 1$, resulting in a smaller image. |

The relationship between the pre-image and the image is defined by the property of proportionality. If a segment of length $L$ is subject to a dilation of scale factor $k$, the length of the resulting segment $L'$ is $L' = |k| \\cdot L$.

## Purpose

The primary purpose of studying non-rigid transformations is to understand the mathematical foundations of scaling, perspective, and proportional growth. In geometry, dilations are the mechanism by which we define "similarity." Two figures are considered similar if one can be obtained from the other through a sequence of rigid transformations and dilations. This is foundational to trigonometry, where the ratios of sides in right triangles remain constant regardless of the triangle's actual size, provided the angles are fixed.

In practical applications, dilations are essential in computer graphics, cartography, and architectural drafting. For example, rendering a 3D scene onto a 2D screen requires projection, which is essentially a dilation based on the distance from the observer (the center of projection). In biology, the study of allometric growth explores how different body parts scale at different rates relative to the whole, which is modeled using non-rigid transformations. By utilizing scale factors, researchers can normalize data across varying magnitudes, allowing for comparative analysis in physics, economics, and data science.

## Fundamental Properties

Dilations possess several rigorous properties that distinguish them from rigid transformations. These properties define how distance, area, and orientation behave under scaling:

1. **Collinearity Preservation:** If points $A, B$, and $P$ are collinear, their image points $A', B'$, and $P'$ remain collinear after any dilation. The transformation preserves the line structure.
2. **Angle Preservation:** Dilations are conformal, meaning they preserve the measure of angles between intersecting lines. While the lines themselves move away from or toward the center, the angle at which they meet is invariant.
3. **Distance Scaling:** The distance between any two points $P_1$ and $P_2$ in the pre-image is transformed to $d' = |k| \\cdot d$. This is the defining characteristic of a non-rigid transformation.
4. **Area Scaling:** While length scales by $k$, area scales by $k^2$. If an initial figure has area $A$, the dilated image will have area $A' = k^2 \\cdot A$. This follows from the fact that area is a two-dimensional measure involving the product of two linear dimensions.
5. **Center Invariance:** The center of dilation $C$ is a fixed point, such that $D(C) = C$. Any ray originating from $C$ is mapped onto itself.

## Types & Variations

Dilations can be classified by the magnitude and sign of the scale factor $k$.

### Positive Scale Factor ($k > 0$)
When $k$ is positive, the image remains on the same side of the center of dilation as the pre-image. If $k > 1$, the object expands. If $0 < k < 1$, the object contracts toward the center.

### Negative Scale Factor ($k < 0$)
When $k$ is negative, the image is reflected across the center of dilation $C$. The points are moved to the opposite side of $C$. A scale factor of $k = -1$ acts as a point reflection through the center.

### Coordinate Dilation
In the Cartesian plane, if the center of dilation is the origin $(0, 0)$, the transformation of a point $(x, y)$ is given by the mapping:
$$(x, y) \\to (kx, ky)$$
If the center of dilation is an arbitrary point $(h, k_c)$, the transformation follows:
$$(x, y) \\to (h + k(x - h), k_c + k(y - k_c))$$

The interactive graph below demonstrates how the scale factor $k$ affects the function $f(x) = x^2$ relative to the origin. Note that the scale factor in functional transformations often acts as a vertical stretch or compression.

\`\`\`interactivegraph
k * x^2
params: k=1
range: k=-3:3
\`\`\`

Observe how changing $k$ modifies the steepness of the parabola. When $k > 1$, the parabola appears to "narrow" or stretch vertically. When $0 < k < 1$, the parabola appears to "widen" or compress vertically.

## How to Solve

Solving problems involving dilations requires a systematic approach to identifying the center, the scale factor, and the resulting coordinates.

### Step 1: Identify the Center of Dilation
If the problem provides the center $C(h, k_c)$, use it as the reference point for all vectors. If the center is not provided, it is typically assumed to be the origin $(0, 0)$ unless otherwise specified.

### Step 2: Determine the Scale Factor
The scale factor $k$ can be determined by taking the ratio of the distances from the center to a point on the image and the corresponding point on the pre-image:
$$k = \\frac{|CP'|}{|CP|}$$
Ensure that you check the direction. If $P'$ and $P$ are on opposite sides of $C$, $k$ must be negative.

### Step 3: Apply the Transformation Formula
For any point $(x, y)$ and a center $(h, k_c)$, calculate the new coordinates $(x', y')$ using:
$$x' = h + k(x - h)$$
$$y' = k_c + k(y - k_c)$$

### Step 4: Verification
Verify the transformation by ensuring that the properties of similarity hold. Specifically, calculate the distance between two arbitrary points in the image and divide by the distance between the corresponding points in the pre-image. This ratio must equal $|k|$.

### Example Calculation
Consider a triangle with vertices at $A(1, 1)$, $B(2, 3)$, and $C(3, 1)$. We apply a dilation with center at the origin $(0, 0)$ and a scale factor of $k = 2$.
1. Vertex $A$: $(1 \\cdot 2, 1 \\cdot 2) = (2, 2)$
2. Vertex $B$: $(2 \\cdot 2, 3 \\cdot 2) = (4, 6)$
3. Vertex $C$: $(3 \\cdot 2, 1 \\cdot 2) = (6, 2)$

The new vertices are $A'(2, 2)$, $B'(4, 6)$, and $C'(6, 2)$. The length of segment $AC$ is $3 - 1 = 2$. The length of $A'C'$ is $6 - 2 = 4$. Since $4/2 = 2$, the transformation is verified as a dilation with $k = 2$.

## Summary

Non-rigid transformations, specifically dilations, represent a fundamental shift from the isometric nature of translations, rotations, and reflections. By introducing a scale factor $k$, dilations enable the mathematical description of resizing while maintaining geometric similarity. We have established that these transformations preserve angle measures and collinearity, while distance and area are modified by factors of $|k|$ and $k^2$, respectively.

Whether centered at the origin or an arbitrary coordinate, the process of dilating a figure remains a consistent application of linear algebra. By mastering the distinction between magnification, reduction, and reflection via negative scale factors, one gains the ability to model complex scaling phenomena in diverse fields such as optics, computer-aided design, and biological morphogenesis. Understanding these transformations is not merely an academic exercise; it is the bridge between static geometry and the dynamic, scalable world of modern analytical science.`;export{e as default};