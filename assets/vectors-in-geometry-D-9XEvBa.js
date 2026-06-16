var e=`# Vector Operations and Geometry in $\\mathbb{R}^2$ and $\\mathbb{R}^3$

## Definition

In mathematics and physics, a vector is a geometric object that possesses both magnitude (or length) and direction. Formally, a vector in $\\mathbb{R}^n$ is an ordered $n$-tuple of real numbers. In $\\mathbb{R}^2$, a vector $\\mathbf{v}$ is represented as $\\mathbf{v}=(v_1, v_2)$, where $v_1$ and $v_2$ are the scalar components along the $x$ and $y$ axes, respectively. In $\\mathbb{R}^3$, a vector $\\mathbf{v}$ is represented as $\\mathbf{v}=(v_1, v_2, v_3)$, extending into the $z$-dimension.

Geometrically, a vector can be visualized as a directed line segment starting at the origin $(0,0)$ or $(0,0,0)$ and terminating at the point $(v_1, v_2)$ or $(v_1, v_2, v_3)$. The set $\\mathbb{R}^2$ constitutes the Euclidean plane, while $\\mathbb{R}^3$ represents three-dimensional Euclidean space. These structures are classified as vector spaces because they satisfy specific axioms, including closure under addition and scalar multiplication, the existence of an additive identity (the zero vector $\\mathbf{0}$), and the existence of additive inverses.

## Key Terminology

To navigate vector calculus and linear algebra, one must master the following fundamental terms:

- **Scalar:** A real number used to scale vectors. Unlike vectors, scalars have magnitude only.
- **Magnitude (Norm):** The length of a vector $\\mathbf{v}$, denoted by $\\|\\mathbf{v}\\|$. For $\\mathbf{v}=(x, y, z)$, the magnitude is defined by the Euclidean distance formula: $\\|\\mathbf{v}\\|=\\sqrt{x^2+y^2+z^2}$.
- **Unit Vector:** A vector with a magnitude of $1$. Any non-zero vector $\\mathbf{v}$ can be converted into a unit vector $\\mathbf{u}$ by dividing by its magnitude: $\\mathbf{u}=\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.
- **Standard Basis Vectors:** In $\\mathbb{R}^2$, these are $\\mathbf{i}=(1, 0)$ and $\\mathbf{j}=(0, 1)$. In $\\mathbb{R}^3$, these are $\\mathbf{i}=(1, 0, 0)$, $\\mathbf{j}=(0, 1, 0)$, and $\\mathbf{k}=(0, 0, 1)$.
- **Dot Product:** A scalar-valued operation that captures the angular relationship between two vectors.
- **Cross Product:** A vector-valued operation specific to $\\mathbb{R}^3$ that produces a vector perpendicular to the plane spanned by the two input vectors.

## Purpose

The study of vectors in $\\mathbb{R}^2$ and $\\mathbb{R}^3$ serves as the mathematical foundation for modern engineering, computer graphics, and physics. Vectors provide a compact, coordinate-independent way to describe physical quantities such as velocity, force, displacement, and acceleration. 

In computer science, vectors are essential for rendering 3D environments, simulating physical collisions, and performing transformations (rotations, translations, and scaling) via matrix multiplication. In physics, vectors are required to solve equilibrium problems where the sum of forces must be zero, as well as to describe electromagnetic fields where intensity and direction vary across space. By abstracting spatial relationships into algebraic components, we can perform complex geometric computations using standard arithmetic and linear algebraic operations.

## Fundamental Properties

Vector operations are governed by a set of algebraic properties that allow for consistent manipulation across different dimensions:

1. **Commutativity:** $\\mathbf{u}+\\mathbf{v}=\\mathbf{v}+\\mathbf{u}$.
2. **Associativity:** $(\\mathbf{u}+\\mathbf{v})+\\mathbf{w}=\\mathbf{u}+(\\mathbf{v}+\\mathbf{w})$.
3. **Distributivity:** $c(\\mathbf{u}+\\mathbf{v})=c\\mathbf{u}+c\\mathbf{v}$, where $c$ is a scalar.
4. **Additive Identity:** $\\mathbf{v}+\\mathbf{0}=\\mathbf{v}$.
5. **Dot Product Property:** $\\mathbf{u}\\cdot\\mathbf{v}=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos(\\theta)$, where $\\theta$ is the angle between the vectors. If $\\mathbf{u}\\cdot\\mathbf{v}=0$, the vectors are orthogonal.
6. **Cross Product Property:** The magnitude of the cross product $\\|\\mathbf{u}\\times\\mathbf{v}\\|=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin(\\theta)$ represents the area of the parallelogram formed by $\\mathbf{u}$ and $\\mathbf{v}$.

| Operation | Dimensionality | Result Type | Interpretation |
| :--- | :--- | :--- | :--- |
| Addition | $\\mathbb{R}^n$ | Vector | Resultant displacement |
| Scalar Mult | $\\mathbb{R}^n$ | Vector | Stretching/Shrinking |
| Dot Product | $\\mathbb{R}^n$ | Scalar | Projection/Angle |
| Cross Product | $\\mathbb{R}^3$ only | Vector | Normal vector |

## Types & Variations

Vectors can be categorized based on their orientation and use cases. Position vectors describe the location of a point relative to the origin, while displacement vectors describe the change in position between two points, $\\mathbf{d}=\\mathbf{P}_2-\\mathbf{P}_1$.

Orthogonal vectors play a critical role in coordinate systems. An orthonormal basis is a set of mutually orthogonal unit vectors, such as the standard basis $\\{\\mathbf{i}, \\mathbf{j}, \\mathbf{k}\\}$. Projections are another variation; the scalar projection of $\\mathbf{u}$ onto $\\mathbf{v}$ is given by $comp_{\\mathbf{v}}\\mathbf{u}=\\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|}$. This operation decomposes a vector into components aligned with a target vector, which is essential in physics when calculating the component of a force acting along an inclined plane.

The cross product in $\\mathbb{R}^3$ is unique because it follows the "right-hand rule." If the fingers of the right hand curl from $\\mathbf{u}$ to $\\mathbf{v}$, the thumb points in the direction of $\\mathbf{u}\\times\\mathbf{v}$. This property is vital for describing rotational motion, torque, and magnetic forces.

## How to Solve

Solving geometric problems involving vectors typically follows a structured algorithmic approach.

### 1. Finding the Vector Between Two Points
Given points $A=(x_1, y_1, z_1)$ and $B=(x_2, y_2, z_2)$, the vector $\\vec{AB}$ is:
$$\\vec{AB} = (x_2-x_1, y_2-y_1, z_2-z_1)$$

### 2. Computing the Dot Product
To find the angle $\\theta$ between vectors $\\mathbf{u}$ and $\\mathbf{v}$:
$$\\cos(\\theta) = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$$
$\\theta = \\arccos\\left(\\frac{u_1v_1+u_2v_2+u_3v_3}{\\sqrt{u_1^2+u_2^2+u_3^2}\\sqrt{v_1^2+v_2^2+v_3^2}}\\right)$

### 3. Computing the Cross Product
Given $\\mathbf{u}=(u_1, u_2, u_3)$ and $\\mathbf{v}=(v_1, v_2, v_3)$, the cross product is calculated using the determinant of a $3\\times3$ matrix:
$$\\mathbf{u}\\times\\mathbf{v} = \\det\\begin{pmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3\\end{pmatrix} = (u_2v_3-u_3v_2)\\mathbf{i} - (u_1v_3-u_3v_1)\\mathbf{j} + (u_1v_2-u_2v_1)\\mathbf{k}$$

### 4. Parametric Equations of a Line
A line in $\\mathbb{R}^3$ passing through point $P_0=(x_0, y_0, z_0)$ with direction vector $\\mathbf{v}=(a, b, c)$ is defined by the parameter $t$:
$$x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct$$

### 5. Equation of a Plane
A plane is defined by a point $P_0(x_0, y_0, z_0)$ and a normal vector $\\mathbf{n}=(a, b, c)$ perpendicular to the surface:
$$a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$$

## Summary

Vector operations in $\\mathbb{R}^2$ and $\\mathbb{R}^3$ provide a robust framework for quantifying spatial relationships. By representing points as components of vectors, we transform complex geometric problems into manageable algebraic calculations. The dot product allows for the analysis of angles and projections, while the cross product provides a mechanism for generating normal vectors and calculating areas in 3D space. 

Whether calculating the tension in a bridge cable or rotating an object in a video game engine, the principles of vector addition, scalar multiplication, and product operations remain the bedrock of spatial mathematics. Mastery of these concepts is not merely an exercise in symbolic manipulation, but a necessary prerequisite for understanding the physical laws that govern the universe and the mathematical tools that define digital environments. Future explorations in higher-dimensional geometry often build directly upon these $\\mathbb{R}^2$ and $\\mathbb{R}^3$ foundations, reinforcing their status as the essential building blocks of linear algebra.`;export{e as default};