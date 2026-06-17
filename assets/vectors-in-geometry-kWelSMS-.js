var e=`# Vector Operations and Geometry in $\\mathbb{R}^2$ and $\\mathbb{R}^3$

## Definition

In mathematics and physics, a vector is a geometric object that possesses both magnitude (or length) and direction. Formally, we define the Euclidean spaces $\\mathbb{R}^2$ and $\\mathbb{R}^3$ as the sets of all ordered pairs and ordered triples of real numbers, respectively. A vector $\\mathbf{v}$ in $\\mathbb{R}^2$ is represented as $\\mathbf{v}=\\langle v_1,v_2 \\rangle$, while in $\\mathbb{R}^3$, a vector is denoted as $\\mathbf{v}=\\langle v_1,v_2,v_3 \\rangle$. 

These objects serve as the foundational building blocks for linear algebra, providing a coordinate-based framework to describe physical phenomena such as displacement, velocity, force, and acceleration. Unlike scalars, which are defined solely by a single numerical value, vectors encode spatial orientation, making them indispensable for navigation, computer graphics, and engineering analysis. The study of vectors involves defining operations such as addition, scalar multiplication, and various products (dot and cross) to model geometric relationships within multidimensional space.

## Key Terminology

To navigate the study of vectors, one must master specific nomenclature:

| Term | Definition |
|:---|:---|
| Scalar | A quantity defined only by magnitude, such as mass or temperature. |
| Magnitude | The length of a vector, denoted as $\\|\\mathbf{v}\\|$, calculated via the Pythagorean theorem. |
| Direction | The orientation of a vector relative to a reference coordinate system. |
| Standard Basis | The unit vectors $\\mathbf{i}=\\langle 1,0,0 \\rangle$, $\\mathbf{j}=\\langle 0,1,0 \\rangle$, and $\\mathbf{k}=\\langle 0,0,1 \\rangle$. |
| Dot Product | An operation resulting in a scalar that measures the alignment of two vectors. |
| Cross Product | An operation in $\\mathbb{R}^3$ resulting in a vector perpendicular to the original two. |
| Orthogonal | A state where the dot product of two non-zero vectors is zero (perpendicularity). |
| Parallel | Vectors that are scalar multiples of each other, sharing the same or opposite direction. |

## Purpose

The primary purpose of vector mathematics is to provide an analytical language for geometry. By representing geometric figures using vectors, we transform complex spatial problems into systems of linear equations, which are computationally efficient and mathematically rigorous. 

In physics, vectors are used to decompose forces acting on a body. For instance, if an object is pulled at an angle, the force can be resolved into horizontal and vertical components. In computer graphics, vectors define the vertices of polygons and the direction of light sources for rendering. In data science, high-dimensional vectors represent feature sets, where the "distance" between vectors—calculated using vector norms—determines similarity between data points. By mastering $\\mathbb{R}^2$ and $\\mathbb{R}^3$ geometry, one gains the ability to calculate areas of triangles using cross products, volumes of parallelepipeds using scalar triple products, and the shortest distance between lines or planes in 3D space.

## Fundamental Properties

Vector spaces $\\mathbb{R}^n$ are governed by specific algebraic properties. For any vectors $\\mathbf{u},\\mathbf{v},\\mathbf{w}$ and scalars $a,b$:

1. **Commutativity of Addition:** $\\mathbf{u}+\\mathbf{v}=\\mathbf{v}+\\mathbf{u}$.
2. **Associativity of Addition:** $(\\mathbf{u}+\\mathbf{v})+\\mathbf{w}=\\mathbf{u}+(\\mathbf{v}+\\mathbf{w})$.
3. **Distributive Laws:** $a(\\mathbf{u}+\\mathbf{v})=a\\mathbf{u}+a\\mathbf{v}$ and $(a+b)\\mathbf{u}=a\\mathbf{u}+b\\mathbf{u}$.
4. **Identity Elements:** There exists a zero vector $\\mathbf{0}=\\langle 0,0,0 \\rangle$ such that $\\mathbf{u}+\\mathbf{0}=\\mathbf{u}$.
5. **Magnitude Property:** The magnitude of a vector $\\mathbf{v}=\\langle x,y,z \\rangle$ is defined by the Euclidean norm $\\|\\mathbf{v}\\|=\\sqrt{x^2+y^2+z^2}$.

These properties ensure that vectors behave predictably under transformation, allowing us to perform linear combinations. A linear combination $c_1\\mathbf{v}_1+c_2\\mathbf{v}_2+\\dots+c_n\\mathbf{v}_n$ allows us to represent any position within the span of a set of basis vectors, which is the cornerstone of coordinate geometry.

## Types & Variations

Vectors can be categorized based on their application and behavior:

- **Position Vectors:** Vectors that start at the origin $(0,0,0)$ and terminate at a specific point $(x,y,z)$. These essentially map coordinates to directed segments.
- **Unit Vectors:** Vectors with a magnitude of $1$. They are often used to define direction without influencing magnitude. A unit vector $\\mathbf{u}$ in the direction of $\\mathbf{v}$ is found by $\\mathbf{u}=\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.
- **Zero Vector:** A vector with no length and no specific direction, acting as the additive identity.
- **Normal Vectors:** Vectors that are perpendicular to a plane or a surface. These are critical for lighting calculations in graphics and for defining the orientation of flat surfaces in 3D space.
- **Parametric Vectors:** These describe a path rather than a static point. For example, a line in $\\mathbb{R}^3$ can be defined by the vector equation $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$, where $t$ is a scalar parameter.

The interactivity of parametric vectors allows for modeling motion. Consider the following interactive exploration of a linear path in 2D space:

\`\`\`interactivegraph
a*x + b
params: a=1, b=0
range: a=-5:5, b=-5:5
\`\`\`

The graph above demonstrates the linear function $f(x)=ax+b$. By varying the slope $a$, we rotate the vector path about the $y$-intercept $b$. Observe how the direction vector $\\langle 1,a \\rangle$ dictates the inclination of the line, illustrating how parameters control the geometry of the trajectory in $\\mathbb{R}^2$.

## How to Solve

Solving geometric problems with vectors involves a systematic application of product rules and algebraic manipulation.

### 1. The Dot Product
The dot product provides the angle $\\theta$ between two vectors $\\mathbf{u}$ and $\\mathbf{v}$:
$$\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos(\\theta) = u_1v_1 + u_2v_2 + u_3v_3$$
To find the angle, rearrange the formula: $\\theta = \\arccos\\left(\\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}\\right)$.

### 2. The Cross Product
In $\\mathbb{R}^3$, the cross product $\\mathbf{w} = \\mathbf{u} \\times \\mathbf{v}$ produces a vector perpendicular to both $\\mathbf{u}$ and $\\mathbf{v}$. It is calculated using the determinant of a $3\\times3$ matrix:
$$\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} = \\mathbf{i}(u_2v_3 - u_3v_2) - \\mathbf{j}(u_1v_3 - u_3v_1) + \\mathbf{k}(u_1v_2 - u_2v_1)$$
The magnitude $\\|\\mathbf{u} \\times \\mathbf{v}\\|$ is equal to the area of the parallelogram spanned by vectors $\\mathbf{u}$ and $\\mathbf{v}$.

### 3. Plane Equations
To define a plane in $\\mathbb{R}^3$, we require a point $P_0(x_0, y_0, z_0)$ and a normal vector $\\mathbf{n} = \\langle a, b, c \\rangle$. The equation of the plane is:
$$a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$$
Expanding this yields the general form $ax+by+cz=d$.

To visualize how different functions behave across an axis, we observe the standard quadratic form as a static reference for geometric projection:

\`\`\`graph
x^2
-x^2 + 4
\`\`\`

The graph above plots two parabolas: $f(x)=x^2$ and $g(x)=-x^2+4$. In 3D geometry, similar structures are expanded into surfaces (e.g., paraboloids) by defining the function as $z=f(x,y)$. The intersection of these geometric forms is often solved by equating the expressions, similar to solving for points of intersection in $\\mathbb{R}^2$.

## Summary

Vector operations in $\\mathbb{R}^2$ and $\\mathbb{R}^3$ provide the essential framework for modern spatial analysis. By understanding the core operations—addition, scaling, dot products, and cross products—we transform the abstract notions of space, orientation, and magnitude into solvable algebraic models. The ability to define lines via parameters, planes via normal vectors, and relationships via products is fundamental to fields as diverse as physics, robotics, and computational geometry. Mastery of these concepts is not merely an academic exercise, but the acquisition of a universal mathematical language used to interpret and manipulate the three-dimensional world we inhabit. Whether through determining the shortest path between two points or calculating the surface area of a complex geometric manifold, vectors remain the most efficient tool for geometric computation.`;export{e as default};