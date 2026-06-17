var e=`# Tangent Planes and Linear Action

## Definition

In the realm of multivariable calculus and differential geometry, the tangent plane at a point $P(x_0,y_0,z_0)$ on a surface $S$ defined by a function $z=f(x,y)$ (or implicitly by $F(x,y,z)=0$) is the plane that best approximates the surface in the immediate vicinity of $P$. Formally, if $f$ is differentiable at $(x_0,y_0)$, the tangent plane is the graph of the first-order Taylor polynomial of $f$ centered at that point.

Linear action refers to the interpretation of this tangent plane as a local linear operator. Specifically, it represents the transformation of the differential change in the domain space $(dx, dy)$ into a corresponding differential change in the range space $dz$. Mathematically, this is expressed through the total differential:
$$dz = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy$$
This expression demonstrates that the surface, which may be highly non-linear globally, behaves linearly when viewed through the "microscope" of the tangent plane. The tangent plane serves as the geometric realization of the Fréchet derivative of a multivariable function, mapping the tangent space of the domain to the tangent space of the surface.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Gradient Vector | The vector $\\nabla f = \\langle f_x, f_y \\rangle$ which points in the direction of steepest ascent. |
| Normal Vector | A vector $\\mathbf{n} = \\langle f_x, f_y, -1 \\rangle$ perpendicular to the tangent plane. |
| Differentiability | A condition where a function is locally linearizable at a point. |
| Linearization | The process of approximating a complex function with its tangent plane. |
| Differential | A measure of the linear change in the dependent variable based on changes in independent variables. |
| Manifold | A topological space that locally resembles Euclidean space, where tangent planes exist at every point. |

## Purpose

The primary utility of the tangent plane and the associated linear action is the simplification of complex systems. Nonlinear functions, which are often intractable for direct analytical integration or simulation, become manageable when restricted to a local neighborhood.

1. **Error Approximation:** By replacing a function $f(x,y)$ with its tangent plane $L(x,y)$, we estimate values near a known point $(x_0,y_0)$. The difference $|f(x,y) - L(x,y)|$ quantifies the error, which vanishes quadratically as the distance from the point of tangency approaches zero.
2. **Optimization:** Tangent planes provide the basis for gradient-based optimization algorithms. In constrained optimization (Lagrange multipliers), we seek points where the tangent plane of an objective function is parallel to the tangent plane of a constraint surface.
3. **Physical Modeling:** Many physical phenomena—such as wave propagation on a curved surface or fluid flow—are modeled by linearizing equations of motion around a steady-state or equilibrium point using tangent planes.
4. **Computational Efficiency:** Evaluating a linear plane is computationally inexpensive compared to evaluating complex transcendental functions, allowing for rapid approximations in iterative numerical solvers.

## Fundamental Properties

The tangent plane exhibits several critical properties rooted in linear algebra and topology.

First, the tangent plane at $P$ is the unique plane that contains all tangent vectors to curves passing through $P$ on the surface. If we define a curve $\\gamma(t) = (x(t), y(t), z(t))$ on the surface $S$, the velocity vector $\\gamma'(t)$ at the point of intersection must lie within the tangent plane.

Second, the tangent plane is dual to the normal vector. For a surface defined by $F(x,y,z)=k$, the gradient $\\nabla F$ evaluated at $(x_0, y_0, z_0)$ acts as the normal vector to the plane. The equation of the plane is:
$$F_x(x_0,y_0,z_0)(x-x_0) + F_y(x_0,y_0,z_0)(y-y_0) + F_z(x_0,y_0,z_0)(z-z_0) = 0$$

Third, the linear action is inherently additive. If we consider the displacement $d\\mathbf{r} = \\langle dx, dy \\rangle$, the change in the surface height is the dot product of the gradient and the displacement: $dz = \\nabla f \\cdot d\\mathbf{r}$. This signifies that the local linear action captures the entirety of the first-order directional derivatives of the function.

The following interactive graph allows for the observation of how changing the local parameters of a surface influences the tilt and orientation of its tangent plane.

\`\`\`interactivegraph
a*x^2 + b*y^2
params: a=1, b=1
range: a=-2:2, b=-2:2
\`\`\`

In the interactive graph above, the function $f(x,y) = ax^2 + by^2$ represents an elliptic paraboloid. As the parameters $a$ and $b$ are adjusted, the curvature of the surface changes. The "steepness" of the tangent plane at any given point is directly proportional to these coefficients, illustrating how the linear action (the derivative) is sensitive to the underlying geometry of the surface.

## Types & Variations

Tangent planes are not limited to explicit surfaces $z=f(x,y)$. They generalize across several mathematical contexts:

1. **Implicit Surfaces:** When $F(x,y,z)=0$, the tangent plane is defined by the level surface of $F$. This is essential for surfaces like spheres, ellipsoids, or tori that cannot be expressed as simple functions of $x$ and $y$.
2. **Parametric Surfaces:** For a surface defined by $\\mathbf{r}(u,v) = \\langle x(u,v), y(u,v), z(u,v) \\rangle$, the tangent plane is spanned by the partial derivative vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$. The normal vector is computed via the cross product $\\mathbf{N} = \\mathbf{r}_u \\times \\mathbf{r}_v$.
3. **Hyperplanes in $n$-dimensions:** In $n$-dimensional Euclidean space $\\mathbb{R}^n$, the analog of a tangent plane is the tangent hyperplane. This is a subspace of dimension $n-1$, defined by the zero-set of the total differential $df = 0$.
4. **Complex Tangent Planes:** In complex geometry, the tangent space to a holomorphic manifold consists of complexified vector spaces, involving the Wirtinger derivatives.

## How to Solve

To determine the tangent plane to a surface $z=f(x,y)$ at a point $(x_0, y_0)$, follow these analytical steps:

**Step 1: Compute Partial Derivatives.**
Find the first-order partial derivatives $f_x = \\frac{\\partial f}{\\partial x}$ and $f_y = \\frac{\\partial f}{\\partial y}$. These represent the slopes in the $x$ and $y$ directions, respectively.

**Step 2: Evaluate at the Point.**
Substitute the coordinates $(x_0, y_0)$ into the partial derivatives to obtain constants $A = f_x(x_0, y_0)$ and $B = f_y(x_0, y_0)$. Compute the value of the function $z_0 = f(x_0, y_0)$.

**Step 3: Construct the Linear Equation.**
The tangent plane is the first-order Taylor expansion:
$$z - z_0 = A(x - x_0) + B(y - y_0)$$
Rearranging this into the standard form $Ax + By - z + D = 0$ facilitates intersection calculations.

**Step 4: Verify Linear Action.**
To analyze the linear action, define a displacement vector $\\mathbf{v} = \\langle \\Delta x, \\Delta y \\rangle$. The estimated vertical change is $\\Delta z \\approx A\\Delta x + B\\Delta y$.

Consider the function $f(x,y) = x^2 + \\sin(y)$. The graph below illustrates the surface and the behavior of the gradient across the domain.

\`\`\`graph
x^2 + \\sin(x)
\`\`\`

The graph above plots the function $f(x) = x^2 + \\sin(x)$, which serves as a cross-section of a more complex surface. The slope at any point $x$ on this graph corresponds to the partial derivative $f_x$, demonstrating how the linear action changes as the input variable moves away from the point of tangency.

## Summary

Tangent planes provide the essential bridge between the rigid structure of linear algebra and the fluid, curved nature of multivariable functions. By approximating surfaces with planes, we invoke the principle of local linearity, which allows for the computation of derivatives, the assessment of gradients, and the local modeling of complex dynamic systems. The mathematical rigor of the tangent plane rests on the total differential, ensuring that even in high-dimensional manifolds, the first-order approximation remains a robust and reliable tool. Through the study of linear action, we gain the ability to decompose non-linear behavior into manageable, predictable increments, providing the foundation for everything from architectural engineering to machine learning optimization.`;export{e as default};