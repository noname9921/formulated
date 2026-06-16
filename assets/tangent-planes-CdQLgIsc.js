var e=`## Definition

A tangent plane at a point $P$ on a surface $S$ is the plane that most closely approximates the surface in the immediate neighborhood of $P$. Formally, if a surface is defined by a differentiable function $f(x,y,z)=c$, the tangent plane at a point $(x_0,y_0,z_0)$ is the set of all points $(x,y,z)$ that satisfy the linear equation derived from the gradient of the function. Linear action refers to the application of linear transformations or linearizations to these planes, allowing for the approximation of nonlinear surface behaviors through vector space operations.

In the context of differential geometry, if $S$ is a smooth manifold, the tangent plane is a 2-dimensional subspace of the 3-dimensional Euclidean space $\\mathbb{R}^3$, known as the tangent space $T_P S$. The action is "linear" because the local geometry of the surface is represented by a linear map—specifically, the derivative (or Jacobian) of the surface's parametrization—which maps vectors from a parameter domain into the plane. This construction effectively linearizes the surface, allowing for the use of linear algebra tools to study curvature, flow, and motion on curved surfaces.

## Key Terminology

*   **Gradient Vector ($\\nabla f$):** A vector field representing the direction and magnitude of the steepest increase of a scalar function. At any point on a level surface, $\\nabla f$ is orthogonal to the tangent plane.
*   **Normal Vector ($\\mathbf{n}$):** A vector perpendicular to the surface at a specific point. It defines the orientation of the tangent plane.
*   **Linearization:** The process of approximating a nonlinear function $f(x,y)$ with a linear function $L(x,y)$ at a point, effectively replacing the surface with its tangent plane.
*   **Jacobian Matrix ($J$):** A matrix of all first-order partial derivatives of a vector-valued function, used to represent the linear action of mapping the parameter space to the tangent space.
*   **Differential ($df$):** The linear transformation that approximates the change in a function; it serves as the foundation for the "linear action" on the tangent plane.
*   **Tangent Space ($T_P S$):** The set of all velocity vectors of curves passing through $P$ on the surface $S$. It is a vector space.
*   **Pushforward:** The linear map induced by a smooth map between manifolds that acts on the tangent spaces.

## Purpose

The primary purpose of tangent planes and linear action is the simplification of complex geometric systems. Nonlinear surfaces are often analytically intractable; by projecting the local behavior of these surfaces onto a tangent plane, we reduce complex curved geometry to manageable linear algebra.

1.  **Local Approximation:** In calculus and engineering, tangent planes allow us to estimate the value of a function near a known point. Given $f(x,y)$, we approximate the surface using the linear equation $z - z_0 = f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$.
2.  **Vector Analysis:** Tangent planes provide a platform to define directional derivatives and gradients, which are essential for physical modeling, such as fluid flow on a surface or stress distribution on a manifold.
3.  **Linearization of Dynamical Systems:** In physics, the motion of a particle constrained to a surface is analyzed by linearizing the constraints. The "linear action" describes how the velocity vector of the particle evolves within the tangent plane.
4.  **Differential Geometry:** By studying how the tangent plane changes from point to point (the Gauss map), we quantify surface properties such as Gaussian curvature and mean curvature.

## Fundamental Properties

Tangent planes possess distinct properties rooted in the principles of linear algebra and multivariable calculus:

1.  **Orthogonality to Gradient:** For a surface defined by $f(x,y,z)=c$, the gradient vector $\\nabla f(x_0,y_0,z_0)$ is always perpendicular to any vector lying within the tangent plane. This allows for the immediate definition of the plane equation as $\\nabla f \\cdot (\\mathbf{r} - \\mathbf{r}_0) = 0$.
2.  **Unique Linear Approximation:** A smooth surface has a unique tangent plane at every point where the gradient is non-zero. This plane is the "best" linear fit, meaning the error between the surface and the plane vanishes at a higher order than the distance from the point of tangency.
3.  **Invariance under Coordinate Transformation:** While the coordinate representation of a tangent plane changes under a change of variables, the tangent space itself is an intrinsic object. The linear action (the differential) remains consistent, ensuring the physical validity of the description regardless of the chosen coordinate system.
4.  **Compositionality:** If $g$ is a map from $S_1 \\to S_2$ and $h$ is a map from $S_2 \\to S_3$, the linear action of $h \\circ g$ is the product of the linear actions (Jacobians) of $h$ and $g$ at the corresponding points. This is known as the Chain Rule in higher dimensions.

| Property | Mathematical Representation | Interpretation |
| :--- | :--- | :--- |
| Normalcy | $\\mathbf{n} = \\nabla f(P)$ | Defines plane orientation |
| Plane Equation | $\\mathbf{n} \\cdot (\\mathbf{x} - \\mathbf{p}) = 0$ | Defines set of points in the plane |
| Linearization | $L(x,y) = f(P) + \\nabla f \\cdot \\Delta \\mathbf{x}$ | First-order approximation |
| Tangent Space | $T_P S$ | Vector space of velocities |

## Types & Variations

There are several ways to define and conceptualize tangent planes, depending on how the surface is presented:

### Explicit Surfaces
For a surface $z = f(x,y)$, the tangent plane at $(x_0, y_0, f(x_0, y_0))$ is derived from the partial derivatives. The normal vector is $(-f_x, -f_y, 1)$. The linear action here is the standard affine transformation.

### Implicit Surfaces
For a surface $F(x,y,z) = 0$, the gradient $\\nabla F$ provides the normal vector. If the gradient is zero at a point, the point is "singular," and a unique tangent plane may not exist (e.g., the vertex of a cone).

### Parametric Surfaces
If a surface is defined by $\\mathbf{r}(u,v) = \\langle x(u,v), y(u,v), z(u,v) \\rangle$, the tangent plane is spanned by the partial derivative vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$. Any vector in the tangent plane can be represented as a linear combination $a\\mathbf{r}_u + b\\mathbf{r}_v$. The "linear action" here is the transformation from the $uv$-plane to the tangent space.

### Projective and Affine Tangent Planes
In projective geometry, tangent planes are treated as points in the dual space. This provides a bridge between geometry and algebraic structures, where the "action" is described by dual linear maps.

## How to Solve

To determine the equation of a tangent plane and describe its linear action, follow this analytical framework.

### Step 1: Identify the Surface Representation
Determine if the surface is explicit ($z=f(x,y)$), implicit ($F(x,y,z)=c$), or parametric ($\\mathbf{r}(u,v)$).

### Step 2: Compute the Normal or Basis Vectors
*   **If Implicit ($F(x,y,z)=c$):** Calculate the gradient $\\nabla F = \\langle F_x, F_y, F_z \\rangle$. Evaluate at the point $P(x_0, y_0, z_0)$.
*   **If Explicit ($z=f(x,y)$):** Calculate $\\mathbf{n} = \\langle -f_x, -f_y, 1 \\rangle$.
*   **If Parametric ($\\mathbf{r}(u,v)$):** Calculate the tangent vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$. The normal vector is their cross product: $\\mathbf{n} = \\mathbf{r}_u \\times \\mathbf{r}_v$.

### Step 3: Formulate the Equation
Use the point-normal form of a plane:
$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$
where $\\langle A, B, C \\rangle = \\mathbf{n}$.

### Step 4: Apply Linear Action
To find the image of a vector $\\mathbf{v}$ from the parameter space under the linear action, define the Jacobian matrix $J = [\\mathbf{r}_u \\mid \\mathbf{r}_v]$. The action of the surface at $P$ on a vector $\\mathbf{w} = \\langle a, b \\rangle^T$ is given by $J\\mathbf{w} = a\\mathbf{r}_u + b\\mathbf{r}_v$. This resulting vector lies in the tangent plane $T_P S$.

### Example Calculation
Consider the sphere $x^2 + y^2 + z^2 = 9$ at point $(1, 2, 2)$.
1. $F(x,y,z) = x^2 + y^2 + z^2$.
2. $\\nabla F = \\langle 2x, 2y, 2z \\rangle$. At $(1, 2, 2)$, $\\nabla F = \\langle 2, 4, 4 \\rangle$.
3. We can scale the normal vector to $\\langle 1, 2, 2 \\rangle$.
4. The tangent plane equation is $1(x-1) + 2(y-2) + 2(z-2) = 0$, which simplifies to $x + 2y + 2z = 9$.

## Summary

Tangent planes and linear action provide the indispensable bridge between nonlinear, curved geometry and the robust framework of linear algebra. By defining the tangent plane as the set of all velocity vectors passing through a point, we establish a tangent space that acts as a local Euclidean approximation of the surface. 

The process of linearization—calculating the gradient for implicit surfaces or utilizing the Jacobian for parametric surfaces—allows for the decomposition of complex global movements into simple, local linear transformations. Whether through the orthogonal nature of the gradient vector or the basis-spanning property of parametric derivatives, the tangent plane remains the primary tool for analyzing local surface orientation, curvature, and the behavior of dynamical systems. Mastering these concepts allows for the rigorous study of manifolds, physical simulations, and computer graphics, where the ability to locally linearize a system is a fundamental requirement for computational efficiency and analytical clarity.`;export{e as default};