var e=`# Projective Geometry Foundations

## Definition

Projective geometry is a branch of mathematics that investigates the properties of geometric figures that remain invariant under projection. Unlike Euclidean geometry, which relies heavily on concepts of distance, angle, and parallelism, projective geometry operates in a space where parallel lines meet at a point at infinity and distances are not absolute.

Formally, the projective plane $\\mathbb{P}^2$ can be viewed as the set of all one-dimensional subspaces (lines) passing through the origin of a three-dimensional vector space $\\mathbb{R}^3$. Any point in the projective plane corresponds to a line through the origin, and any line in the projective plane corresponds to a plane passing through the origin in $\\mathbb{R}^3$. This abstraction allows projective geometry to provide a unified framework for viewing Euclidean geometry as a special subset of a broader, more robust system where the "boundary" of the plane is treated identically to its interior.

## Key Terminology

To navigate projective geometry, one must master specific terms that define the relationship between points, lines, and the space they inhabit.

| Term | Definition |
| :--- | :--- |
| Homogeneous Coordinates | A system of coordinates where a point $(x,y)$ in $\\mathbb{R}^2$ is represented as $(X,Y,Z)$ such that $x=X/Z$ and $y=Y/Z$. |
| Point at Infinity | The point where parallel lines in a Euclidean plane are defined to intersect; represented by $Z=0$ in homogeneous coordinates. |
| Duality | The principle that every theorem in the projective plane has a dual where the roles of points and lines are interchanged. |
| Cross-Ratio | A fundamental projective invariant of four collinear points, defined as the ratio of ratios of distances. |
| Collinearity | A condition where three or more points lie on a single projective line. |
| Concurrency | A condition where three or more lines meet at a single projective point. |

## Purpose

The primary purpose of projective geometry is to provide a rigorous mathematical foundation for perspective, computer vision, and the study of conic sections. In computer graphics, rendering a 3D scene onto a 2D screen is fundamentally a projective transformation. By utilizing homogeneous coordinates, translations, rotations, and perspective projections can all be represented as linear matrix operations, significantly simplifying the computational pipeline.

Furthermore, projective geometry bridges the gap between Euclidean and non-Euclidean geometries. It simplifies theorems by removing exceptions; for instance, in projective geometry, "two lines intersect at exactly one point" is a universal truth, whereas in Euclidean geometry, one must add the caveat "unless they are parallel." This uniformity makes projective geometry the preferred language for modern geometry, particularly in algebraic geometry where the study of varieties is most natural in projective space.

## Fundamental Properties

Projective geometry is governed by properties that remain unchanged under a projective transformation, known as projectivity or homography.

### The Principle of Duality
The duality principle states that if a property holds for a set of points and lines, the same property holds if we interchange the words "point" and "line" and adjust the incidence relations accordingly. For example, the dual of "two points determine a unique line" is "two lines determine a unique point."

### Cross-Ratio Invariance
The cross-ratio is the most important invariant in projective geometry. Given four collinear points $A, B, C,$ and $D$, the cross-ratio is defined as:
$$CR(A, B, C, D) = \\frac{(A-C)(B-D)}{(A-D)(B-C)}$$
Under any projective transformation, this value remains constant. This is essential for recovering 3D structure from 2D images, as the cross-ratio provides a metric constraint that persists despite the camera's angle or position.

### Incidence
Projective geometry focuses on incidence relations rather than metric measurements. An incidence relation $I$ is a set of pairs $(P, L)$ where point $P$ lies on line $L$. Because we are dealing with subspaces of a vector space, incidence is simply the membership of a 1D subspace in a 2D subspace of the underlying 3D vector space.

## Types & Variations

Projective spaces are categorized by their dimension and the field over which they are defined.

1. **Real Projective Plane ($\\mathbb{P}^2(\\mathbb{R})$):** The most common form, used in standard geometric constructions and computer vision. It is the set of lines through the origin in $\\mathbb{R}^3$.
2. **Complex Projective Space ($\\mathbb{P}^n(\\mathbb{C})$):** Utilized heavily in algebraic geometry and theoretical physics. It adds an additional layer of complexity as the coordinate space consists of complex vectors.
3. **Finite Projective Planes:** These are combinatorial structures consisting of a finite number of points and lines satisfying the projective axioms. For a prime power $q$, there exists a projective plane of order $q$ containing $q^2+q+1$ points and $q^2+q+1$ lines.

The following interactive graph demonstrates the transformation of a 1D projective line segment, where the parameter $a$ affects the perspective projection factor, representing how points are "mapped" as $x$ varies.

\`\`\`interactivegraph
(x + a) / (1 + b * x)
params: a=0, b=0
range: a=-2:2, b=-0.5:0.5
\`\`\`

The graph above shows the function $f(x) = \\frac{x+a}{1+bx}$, which models a projective mapping of a line. By adjusting $a$ (shift) and $b$ (perspective distortion), one can observe how the transformation deviates from linear behavior, illustrating the non-linear nature of perspective projections in a 1D simplified model.

## How to Solve

Solving problems in projective geometry typically involves shifting from Euclidean coordinates $(x,y)$ to homogeneous coordinates $(X,Y,Z)$.

### Step 1: Homogenization
Convert your Euclidean points $(x,y)$ to $(x,y,1)$. If a problem involves lines, represent them by the equation $ax+by+c=0$. In homogeneous coordinates, this becomes a vector $\\mathbf{L} = [a, b, c]^T$, and the incidence of a point $\\mathbf{P} = [X, Y, Z]^T$ on line $\\mathbf{L}$ is expressed by the dot product $\\mathbf{L} \\cdot \\mathbf{P} = 0$.

### Step 2: Intersection of Lines
To find the intersection of two lines $\\mathbf{L}_1$ and $\\mathbf{L}_2$, calculate the cross product:
$$\\mathbf{P} = \\mathbf{L}_1 \\times \\mathbf{L}_2$$
This resulting vector represents the unique projective point where the two lines meet.

### Step 3: Lines Through Points
To find the line passing through two points $\\mathbf{P}_1$ and $\\mathbf{P}_2$, calculate the cross product:
$$\\mathbf{L} = \\mathbf{P}_1 \\times \\mathbf{P}_2$$
This yields the coefficients of the line equation $[a, b, c]$.

### Step 4: Applying Projective Transformations
Represent transformations as $3 \\times 3$ matrices $H$. A point $\\mathbf{P}$ is transformed to $\\mathbf{P}'$ by:
$$\\mathbf{P}' = H\\mathbf{P}$$
This framework allows for the concatenation of multiple transformations (rotation, scaling, shearing) simply by multiplying their respective matrices, a technique ubiquitous in modern 3D rendering engines.

## Summary

Projective geometry provides an essential mathematical language for understanding the spatial relations of objects as they appear in observation, rather than as they exist in isolated Euclidean measurements. By utilizing the concepts of homogeneous coordinates, points at infinity, and the cross-ratio, it eliminates the inconsistencies associated with parallel lines and simplifies the geometry of projection.

The beauty of the field lies in its dual nature, where the distinction between points and lines is blurred, leading to a profound economy of expression. From its historical origins in Renaissance art to its contemporary applications in machine learning, computer vision, and quantum mechanics, projective geometry remains a fundamental pillar of mathematics. Mastery of this subject requires a shift in perspective—literally and figuratively—moving away from fixed metrics toward the invariant properties that define the underlying structure of our visual and mathematical world.`;export{e as default};