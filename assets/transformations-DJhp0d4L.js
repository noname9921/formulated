var e=`# Rigid Transformations: Translations, Reflections, and Rotations

## Definition

A rigid transformation, formally known as an isometry, is a geometric transformation that preserves both the size and the shape of a figure. In Euclidean geometry, an isometry is defined as a mapping $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ such that the distance between any two points $P$ and $Q$ is identical to the distance between their images $f(P)$ and $f(Q)$. If $d(P, Q)$ represents the Euclidean distance, the defining property is:

$$d(f(P), f(Q)) = d(P, Q)$$

This property ensures that the transformation does not stretch, compress, or shear the object. Consequently, the preimage and the image are congruent. Rigid transformations are classified by their action on the orientation of the object: direct isometries (translations and rotations) preserve orientation, while opposite isometries (reflections and glide reflections) reverse it.

## Key Terminology

To discuss rigid transformations with precision, one must define the following mathematical entities:

| Term | Definition |
| :--- | :--- |
| Preimage | The original geometric figure before a transformation is applied. |
| Image | The resulting figure after the transformation is completed. |
| Vector | A quantity possessing both magnitude and direction, used to define translations. |
| Line of Reflection | The fixed axis across which an object is flipped during a reflection. |
| Center of Rotation | A stationary point around which all points in a figure move during a rotation. |
| Angle of Rotation | The measure of rotation, usually in degrees or radians, describing the displacement. |
| Isometry | A distance-preserving transformation; a synonym for a rigid transformation. |
| Orientation | The clockwise or counter-clockwise order of vertices in a polygon. |

## Purpose

Rigid transformations serve as the foundation for spatial reasoning and symmetry analysis in mathematics, physics, and computer graphics. Their primary utility lies in their ability to describe motion and arrangement without altering the fundamental integrity of an object's dimensions. 

In engineering and architecture, rigid transformations allow designers to analyze how components fit together in different orientations or positions within an assembly. In computer graphics, these transformations are the backbone of rendering engines; they allow objects to be moved, rotated, and flipped within a 3D coordinate system to create the illusion of animation or perspective. Mathematically, the study of isometries leads to the theory of groups, specifically the Euclidean group $E(n)$, which categorizes all possible symmetries of an object. Understanding these transformations is essential for identifying congruence in geometry proofs, where one must demonstrate that two shapes are identical through a series of rigid mappings.

## Fundamental Properties

The defining characteristic of all rigid transformations is the preservation of metric properties. Specifically, they maintain:

1. **Distance Preservation:** The distance between any two points $A$ and $B$ is conserved under the transformation $T$: $||T(A) - T(B)|| = ||A - B||$.
2. **Angle Preservation:** The measure of any angle within the figure is invariant. If an angle $\\angle ABC$ has measure $\\alpha$, then its image $\\angle A'B'C'$ also has measure $\\alpha$.
3. **Collinearity:** Points that lie on a single line in the preimage will remain collinear in the image.
4. **Betweenness:** If a point $B$ lies between points $A$ and $C$, its image $B'$ will lie between $A'$ and $C'$.
5. **Parallelism:** If two lines are parallel in the preimage, their images remain parallel in the coordinate space.

These properties ensure that area and perimeter remain constant throughout the movement. If a transformation were to scale an object, the area would change, thereby violating the requirements of an isometry.

## Types & Variations

### Translations
A translation shifts every point in a figure by a constant vector $(h, k)$. If a point is defined as $P(x, y)$, the image $P'(x', y')$ is given by:
$$x' = x + h$$
$$y' = y + k$$

This operation preserves orientation and is essentially a slide along a specified vector.

### Reflections
A reflection acts as a "flip" across a line of symmetry. For a reflection across the x-axis:
$$(x, y) \\to (x, -y)$$
For a reflection across the y-axis:
$$(x, y) \\to (-x, y)$$
Reflections are unique among rigid transformations because they are "orientation-reversing." If you map the vertices of a triangle $ABC$ in clockwise order, the reflection $A'B'C'$ will be counter-clockwise.

### Rotations
A rotation turns a figure about a fixed point called the center of rotation $(h, k)$ by an angle $\\theta$. The transformation of a point $(x, y)$ around the origin $(0, 0)$ is:
$$x' = x\\cos(\\theta) - y\\sin(\\theta)$$
$$y' = x\\sin(\\theta) + y\\cos(\\theta)$$

Below is an interactive graph demonstrating how parameters modify a function. The plot shows $f(x) = a \\cdot \\sin(x + b)$, where $a$ influences the vertical stretch (though not a rigid transformation, it demonstrates parameter sensitivity) and $b$ represents a horizontal translation.

\`\`\`interactivegraph
a * \\sin(x + b)
params: a=1, b=0
range: a=1:1, b=-3:3
\`\`\`

In the interactive graph above, setting $a=1$ ensures we are performing a pure translation along the x-axis by varying $b$. Notice how the wave shifts position without changing its frequency or amplitude, reflecting the properties of a translation.

## How to Solve

To perform or identify a rigid transformation, follow a systematic coordinate-based approach:

### Step 1: Identify the Transformation
Determine if the transformation is a translation, reflection, or rotation by comparing the preimage and image vertices. If the orientation is reversed, it is a reflection (or glide reflection). If the orientation is preserved, calculate the vector (translation) or the center and angle (rotation).

### Step 2: Formulate the Mapping
For a translation of vector $\\vec{v} = \\langle h, k \\rangle$:
1. Take the coordinates of the original vertex $(x, y)$.
2. Apply the addition: $(x+h, y+k)$.

For a rotation of $\\theta$ about the origin:
1. Apply the rotation matrix multiplication:
$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$

### Step 3: Verify Isometry
After calculating the image coordinates, verify the length of a segment in the preimage $L_1 = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ and compare it to the length of the corresponding segment in the image $L_2$. If $L_1 = L_2$, the transformation is valid.

Consider the static graph below, which plots $f(x) = x^2$ and $g(x) = (x-2)^2 + 1$. This illustrates a composite translation: the original parabola $x^2$ is shifted 2 units to the right and 1 unit upward.

\`\`\`graph
x^2
(x-2)^2 + 1
\`\`\`

The graph shows that the shape of the parabola remains identical; only its position in the coordinate plane changes, confirming the translation as a rigid transformation.

## Summary

Rigid transformations provide a rigorous framework for understanding how geometric objects move through space while retaining their intrinsic properties. By adhering to the principles of isometries, these mappings—translations, reflections, and rotations—ensure that distance, angle, and shape are invariant. 

The mathematical study of these transformations relies heavily on linear algebra and coordinate geometry. Translations are simple additive shifts; reflections are transformations across lines that invert orientation; and rotations are sophisticated angular shifts defined by trigonometric matrices. Mastery of these concepts is vital not only for Euclidean geometry but for any field involving spatial manipulation, including robotics, physics, and computer-aided design. By maintaining the integrity of the preimage, rigid transformations allow for complex structural analysis while simplifying the underlying mathematical complexity of moving objects in a coordinate system.`;export{e as default};