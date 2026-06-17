var e=`# Rigid Transformations: Translations, Reflections, and Rotations

## Definition

A rigid transformation, often referred to in geometry as an isometry or a congruence transformation, is a mapping of a geometric figure in a Euclidean plane that preserves both the distance between points and the angles between lines. In formal mathematical terms, a transformation $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ is considered rigid if, for any two points $P$ and $Q$ in the plane, the Euclidean distance $d(P, Q)$ is equal to the distance $d(T(P), T(Q))$.

Rigid transformations do not change the size or shape of an object; they only alter its position or orientation in space. Because distance is preserved, the side lengths of a polygon remain invariant, and because angles are preserved, the internal structure of the figure remains congruent to the original. These transformations serve as the foundation for the study of symmetry and congruence in geometry.

## Key Terminology

To understand rigid transformations, one must master the underlying vocabulary of Euclidean space:

| Term | Definition |
| :--- | :--- |
| Pre-image | The initial geometric figure before a transformation is applied. |
| Image | The resulting figure after the transformation is performed. |
| Isometry | A distance-preserving map from a metric space to itself. |
| Translation | A sliding movement along a vector without rotation or flipping. |
| Reflection | A transformation that maps each point to its symmetric image across a line. |
| Rotation | A transformation that pivots a figure around a fixed central point. |
| Vector | A quantity defined by magnitude and direction, used to specify translations. |
| Center of Rotation | A stationary point about which all other points revolve. |
| Line of Reflection | The axis of symmetry across which the pre-image is flipped. |

## Purpose

The study of rigid transformations is essential for several reasons. First, they provide the mathematical basis for the concept of congruence. Two figures are defined as congruent if there exists a sequence of rigid transformations that maps one onto the other. Without this framework, we would lack a formal way to categorize objects as "identical in shape and size" despite different positions.

Second, rigid transformations are fundamental to engineering, computer graphics, and physics. In CAD (Computer-Aided Design), objects are moved and rotated through 3D space using matrix operations derived from these principles. In physics, rigid body dynamics rely on these transformations to model the motion of objects that maintain their shape under stress.

Finally, they allow for the analysis of symmetry in art, architecture, and biology. By understanding how a shape can be transformed while remaining congruent, we can identify rotational or reflectional symmetry in complex systems, providing insights into the structural harmony of both natural and man-made objects.

## Fundamental Properties

Rigid transformations possess several invariant properties that distinguish them from non-rigid transformations, such as dilations or shears:

1. **Distance Preservation:** The distance between any two points is invariant. If a line segment has length $L$, its image after a rigid transformation will also have length $L$.
2. **Angle Preservation:** The measure of an angle is invariant. If two lines intersect at angle $\\theta$, their images will intersect at the same angle $\\theta$.
3. **Collinearity Preservation:** Points that lie on a straight line remain on a straight line after the transformation.
4. **Area Preservation:** Since the dimensions are preserved, the area of a closed figure remains constant regardless of its orientation or position.
5. **Orientation:** While rotations and translations preserve the order of vertices (clockwise vs. counter-clockwise), reflections reverse this order, a property known as chirality.

## Types & Variations

Rigid transformations are generally categorized into three primary types, which can be expressed algebraically using coordinate geometry.

### 1. Translations
A translation shifts a point $(x, y)$ by a horizontal displacement $h$ and a vertical displacement $k$. The mapping is defined as:
$$T(x, y) = (x + h, y + k)$$
This transformation preserves the slope of all lines, meaning that after translation, all lines in the image are parallel to their original counterparts in the pre-image.

### 2. Reflections
A reflection maps a point across a fixed line (the axis of reflection). 
- Reflecting across the x-axis: $R_x(x, y) = (x, -y)$
- Reflecting across the y-axis: $R_y(x, y) = (-x, y)$
- Reflecting across the line $y = x$: $R_{y=x}(x, y) = (y, x)$

Reflections effectively flip the orientation of the figure. If the vertices were arranged in a clockwise order, they become counter-clockwise after a reflection.

### 3. Rotations
A rotation moves a point around a fixed point, known as the center of rotation, through an angle $\\theta$. Assuming the center is the origin $(0, 0)$, the coordinates map as:
$$x' = x \\cos \\theta - y \\sin \\theta$$
$$y' = x \\sin \\theta + y \\cos \\theta$$
This is a linear transformation that can be represented by a rotation matrix.

The following interactive graph demonstrates how a basic function $f(x) = x^2$ is affected by horizontal and vertical translation parameters $h$ and $k$. Note how the shape (the "curvature") remains constant while the vertex moves.

\`\`\`interactivegraph
(x-h)^2 + k
params: h=0, k=0
range: h=-5:5, k=-5:5
\`\`\`

The graph above plots the quadratic function $f(x) = (x-h)^2 + k$. By manipulating the parameters $h$ and $k$, the reader can observe the translation of the parabola's vertex across the coordinate plane, demonstrating that the geometric "form" remains unchanged while the location is updated.

## How to Solve

Solving problems involving rigid transformations requires a systematic application of coordinate mapping or composition of functions.

### Step 1: Identification
Determine the nature of the transformation. Look for clues: "sliding" implies translation, "flipping" implies reflection, and "spinning" implies rotation. If the transformation involves a sequence, identify them in the order they must be performed.

### Step 2: Coordinate Application
Apply the specific formula for the transformation type to each vertex of the pre-image. For a polygon, transform the vertices $A(x_1, y_1), B(x_2, y_2), ...$ individually to find the image vertices $A', B', ...$.

### Step 3: Matrix Representation (Advanced)
For compositions of transformations, represent each as a matrix $M$. The composite transformation $T_{total}$ is the product of individual matrices:
$$M_{total} = M_n \\times M_{n-1} \\times ... \\times M_1$$
This is particularly useful in computational geometry where complex sequences of movements are required.

### Example Derivation: Rotation
Consider the rotation of a point $(1, 0)$ by $\\theta = 90^\\circ$ ($\\pi/2$ radians).
Using the rotation formula:
$$x' = 1 \\cdot \\cos(90^\\circ) - 0 \\cdot \\sin(90^\\circ) = 0$$
$$y' = 1 \\cdot \\sin(90^\\circ) + 0 \\cdot \\cos(90^\\circ) = 1$$
The point $(1, 0)$ maps to $(0, 1)$, confirming the expected counter-clockwise rotation.

## Summary

Rigid transformations—translations, reflections, and rotations—constitute the set of operations that preserve the metric properties of geometric figures. By ensuring the preservation of distance and angle, these transformations define the essential conditions for geometric congruence. 

Translations are characterized by a constant vector shift, effectively relocating a figure without altering its heading. Reflections perform an "inversion" of the coordinate system across an axis, effectively changing the chirality or orientation of the object. Rotations move points along circular arcs around a center, changing the orientation without affecting the internal distance relationships of the object.

Mastery of these transformations is not merely a theoretical exercise in plane geometry; it provides the mathematical scaffolding for high-level applications in computer science, architecture, and engineering. By utilizing matrix algebra and coordinate mappings, one can effectively compute the movement and orientation of objects in any multi-dimensional space, maintaining the integrity of the physical form throughout the process. The core takeaway is that while a rigid transformation may change where an object resides or how it faces, it never alters what the object is.`;export{e as default};