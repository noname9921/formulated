var e=`# Projective Geometry Foundations

## Definition

Projective geometry is a branch of mathematics that investigates the properties of geometric figures that remain invariant under projection. Unlike Euclidean geometry, which relies heavily on concepts like distance, angle, and parallelism, projective geometry operates on a broader set of principles where "parallel" lines are viewed as intersecting at a point at infinity. Mathematically, it is the study of the projective plane $\\mathbb{P}^2$ and higher-dimensional projective spaces $\\mathbb{P}^n$.

At its core, projective geometry studies the behavior of points, lines, and planes under projective transformations—also known as collineations or homographies. These transformations are represented by invertible linear maps acting on homogeneous coordinates. By relaxing the rigid constraints of Euclidean metrics, projective geometry provides a robust framework for understanding perspective, vanishing points, and duality, forming the bedrock for computer vision, synthetic geometry, and algebraic geometry.

## Key Terminology

To navigate projective geometry, one must master several fundamental concepts that define the structure of the space.

| Term | Definition |
| :--- | :--- |
| Homogeneous Coordinates | A system where a point in $\\mathbb{P}^n$ is represented by $(n+1)$ coordinates, defined up to a non-zero scalar multiple. |
| Projective Plane | The set of lines passing through the origin in $\\mathbb{R}^3$, where each line corresponds to a unique point. |
| Point at Infinity | The point where parallel lines meet; the collection of these points forms the "line at infinity". |
| Duality | A principle stating that any theorem remains true if the words "point" and "line" are interchanged. |
| Cross Ratio | The fundamental projective invariant of four collinear points, defined as $\\frac{(A-C)(B-D)}{(A-D)(B-C)}$. |
| Collineation | An invertible mapping between projective spaces that preserves collinearity. |
| Homography | A specific type of collineation induced by a linear transformation of the underlying vector space. |

## Purpose

The primary purpose of projective geometry is to provide a unifying language for describing perspective. While Euclidean geometry describes the physical reality of objects, projective geometry describes how those objects appear to an observer.

1. **Unification:** It treats points and lines as equals. In Euclidean geometry, lines are infinite, but points are specific locations. In projective geometry, the line at infinity allows us to handle parallel lines as a special case of intersection, removing the "exceptional" status of parallelism.
2. **Computational Efficiency:** In computer graphics and computer vision, projecting a 3D scene onto a 2D sensor is inherently a projective transformation. Using homogeneous coordinates allows these projections to be performed as simple matrix multiplications, avoiding the need for non-linear division operations until the final rendering step.
3. **Algebraic Simplification:** Projective geometry allows for the use of homogeneous polynomials, which makes the study of algebraic curves (like conics) much more elegant, as all conics (ellipse, parabola, hyperbola) are transformed into one another via projective equivalence.

## Fundamental Properties

Projective geometry is governed by axioms that differ significantly from Euclid's. The most notable difference is the absence of a metric; there is no notion of "length" or "angle" because these values are not preserved under projective transformations. Instead, we focus on properties that survive these distortions.

### The Principle of Duality
The principle of duality is a unique feature of projective geometry. If we have a statement regarding points and lines, the dual statement is obtained by swapping the terms. For example:
- **Statement:** Two distinct points determine a unique line.
- **Dual Statement:** Two distinct lines determine a unique point.

### The Cross Ratio
Because distance is not invariant, we require a new way to describe the relationship between four points on a line. The cross ratio is defined for four collinear points $A, B, C, D$ as the ratio:
$$\\lambda = \\frac{(C-A)/(C-B)}{(D-A)/(D-B)}$$
The cross ratio is invariant under any projective transformation. This means that if we view a line from different angles, the cross ratio of four points on that line will remain constant, even though the individual distances between the points change drastically.

### Conics in the Projective Plane
A conic section is defined by a quadratic form $Ax^2 + Bxy + Cy^2 + Dxz + Eyz + Fz^2 = 0$. In projective geometry, all non-degenerate conics are projectively equivalent. This means that with a sufficiently general projective transformation, an ellipse can be mapped to a circle, a parabola, or a hyperbola.

## Types & Variations

Projective spaces can be defined over any field $\\mathbb{F}$, though the real projective space $\\mathbb{R}\\mathbb{P}^n$ is most common in visual applications.

1. **Real Projective Geometry:** The standard model using real numbers, essential for optics and vision.
2. **Complex Projective Geometry:** Utilized heavily in algebraic geometry, where the fundamental theorem of algebra ensures that polynomials behave more consistently, leading to deep results like Bézout's theorem on the intersection of curves.
3. **Finite Projective Geometry:** Spaces defined over finite fields (e.g., Galois fields). These have discrete sets of points and lines and are widely used in coding theory and cryptography.
4. **Projective Spaces of Higher Dimension:** While $\\mathbb{P}^2$ represents the plane, $\\mathbb{P}^3$ is used for spatial projections in 3D rendering. The behavior of subspaces—such as lines intersecting planes—is generalized through the study of Grassmannians.

## How to Solve

Solving problems in projective geometry requires a transition from Cartesian logic to homogeneous algebra.

### Step 1: Conversion to Homogeneous Coordinates
Represent a 2D Euclidean point $(x, y)$ as a 3D vector $(x, y, 1)^T$. This extra dimension allows us to represent points at infinity as $(x, y, 0)^T$.

### Step 2: Line-Point Duality
To find the line $L$ passing through two points $P_1$ and $P_2$, calculate the cross product:
$$L = P_1 \\times P_2$$
Conversely, to find the intersection of two lines $L_1$ and $L_2$, calculate their cross product:
$$P = L_1 \\times L_2$$
This symmetry is extremely powerful and simplifies geometric intersection problems into basic vector algebra.

### Step 3: Projective Transformations
To transform a set of points using a matrix $H$, apply:
$$P' = HP$$
where $H$ is a $3 \\times 3$ invertible matrix. Note that since the coordinates are homogeneous, the resulting vector $P'$ must be normalized by dividing by its third coordinate to interpret it as a Euclidean coordinate, provided the third coordinate is non-zero.

### Step 4: Applying Invariants
If a problem asks to prove that a property is preserved under projection, calculate the cross ratio. If the cross ratio before and after the mapping matches, the property is invariant.

Below is a demonstration of how a basic perspective shift acts on a function, illustrating that even simple curves change their "Euclidean" appearance under projection.

\`\`\`graph
x^2
(0.5*x)^2
2*x^2
\`\`\`
The graph above displays $f(x)=x^2$, $g(x)=(0.5x)^2$, and $h(x)=2x^2$. While these appear as different parabolas in Euclidean space, in projective geometry, they belong to the same equivalence class of conics. A projective transformation can map one to the other by moving the observer or the projective plane.

## Summary

Projective geometry provides the necessary mathematical language to move beyond the limitations of Euclidean metrics. By treating parallel lines as meeting at the line at infinity and utilizing homogeneous coordinates, it offers a robust method for computing geometric relationships that are invariant under perspective.

The theory relies on the power of duality, where the roles of points and lines are interchangeable, and the cross ratio, which serves as the fundamental anchor for measurements in a space where standard lengths vanish. From its historical origins in the art of Renaissance perspective to its contemporary roles in computer vision algorithms, projective geometry remains a vital discipline. Mastery of this field enables the transformation of complex 3D visual data into manageable algebraic expressions, ensuring that the relationships between objects remain consistent regardless of the observer's viewpoint. Through the study of collineations and projective transformations, we gain a deeper understanding of the inherent structure of space itself.`;export{e as default};