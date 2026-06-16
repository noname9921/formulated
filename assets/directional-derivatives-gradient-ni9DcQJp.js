var e=`# Directional Derivatives and the Gradient Vector

In the landscape of multivariable calculus, the concept of the derivative undergoes a fundamental transformation. While a single-variable function $f(x)$ possesses a unique tangent line at any given point, a multivariable function $f(x, y)$ or $f(x, y, z)$ exists as a surface or a scalar field in higher-dimensional space. Consequently, the rate of change at a point becomes dependent on the direction in which one moves. The study of directional derivatives and the gradient vector provides the rigorous framework necessary to quantify these rates of change across multiple dimensions.

## Definition

The directional derivative of a function $f$ at a point $P_0(x_0, y_0)$ in the direction of a unit vector $\\mathbf{u} = \\langle a, b \\rangle$ is defined as the limit:
$$D_{\\mathbf{u}}f(x_0, y_0) = \\lim_{h \\to 0} \\frac{f(x_0 + ha, y_0 + hb) - f(x_0, y_0)}{h}$$
This limit represents the instantaneous rate of change of the function value as the input moves from $(x_0, y_0)$ in the direction specified by $\\mathbf{u}$.

The gradient vector, denoted by $\\nabla f$ (or grad $f$), is a vector-valued function that encapsulates all partial derivatives of $f$. For a function $f(x, y)$, the gradient is:
$$\\nabla f(x, y) = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right\\rangle = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j}$$
The gradient vector is central to the directional derivative. Specifically, if $f$ is differentiable at $(x_0, y_0)$, then the directional derivative $D_{\\mathbf{u}}f$ exists for any unit vector $\\mathbf{u}$ and can be expressed as the dot product:
$$D_{\\mathbf{u}}f(x_0, y_0) = \\nabla f(x_0, y_0) \\cdot \\mathbf{u}$$

## Key Terminology

*   **Scalar Field:** A function $f: \\mathbb{R}^n \\to \\mathbb{R}$ that assigns a scalar value to every point in a region of space.
*   **Unit Vector:** A vector $\\mathbf{u}$ whose magnitude is equal to 1. For a given vector $\\mathbf{v}$, the corresponding unit vector is $\\mathbf{u} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}$.
*   **Partial Derivative:** The rate of change of a multivariable function with respect to one variable, while holding all others constant.
*   **Differentiability:** A property of a function implying that it is "smooth" enough to be locally approximated by a linear (tangent) plane.
*   **Level Curves/Surfaces:** Curves (or surfaces) defined by $f(x, y) = k$. The gradient vector is always orthogonal to the level curve of $f$ at a given point.
*   **Magnitude of the Gradient:** The length of the gradient vector, $|\\nabla f|$, represents the maximum possible rate of increase of the function at that point.

## Purpose

The directional derivative serves as a generalization of the partial derivative. While partial derivatives only describe change along the axes ($x$ or $y$), the directional derivative describes change in any arbitrary direction. This is essential for:
1.  **Optimization:** Finding the direction of steepest ascent or descent, which is the cornerstone of gradient descent algorithms in machine learning.
2.  **Physical Modeling:** Determining fluid flow velocity, heat distribution, or electromagnetic potential changes in space.
3.  **Visualization:** Understanding the geometry of surfaces, such as how steep a mountain trail is when approaching from a specific compass bearing.

## Fundamental Properties

The relationship between the gradient vector and directional derivatives is governed by several critical properties:

1.  **Maximum Rate of Change:** The function $f$ increases most rapidly in the direction of $\\nabla f$. The magnitude of this maximum rate is $|\\nabla f|$.
2.  **Minimum Rate of Change:** The function $f$ decreases most rapidly in the direction of $-\\nabla f$. The magnitude of this minimum rate is $-|\\nabla f|$.
3.  **Orthogonality:** If $\\nabla f \\neq 0$, then the directional derivative in any direction orthogonal to the gradient is zero. This means that if you move along a level curve, the function value remains constant.
4.  **Linearity:** The directional derivative operator $D_{\\mathbf{u}}$ is a linear operator, meaning $D_{\\mathbf{u}}(af + bg) = aD_{\\mathbf{u}}f + bD_{\\mathbf{u}}g$.
5.  **Chain Rule Linkage:** The formula $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$ is derived from the chain rule applied to the path $\\mathbf{r}(t) = \\mathbf{r}_0 + t\\mathbf{u}$.

## Types & Variations

Directional derivatives can be categorized based on the dimension of the domain and the nature of the vector used:

| Type | Domain | Application |
| :--- | :--- | :--- |
| **2D Scalar Field** | $(x, y)$ | Topographical maps, temperature gradients |
| **3D Scalar Field** | $(x, y, z)$ | Pressure fields, gravitational potential |
| **Directional (Unit)** | $\\mathbf{u} = \\langle a, b \\rangle$ | Standard rate of change |
| **Directional (Non-Unit)** | $\\mathbf{v} = \\langle a, b \\rangle$ | Requires normalization $|\\mathbf{v}| \\neq 1$ |

While the formula $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$ requires $\\mathbf{u}$ to be a unit vector, if one is given a non-unit direction vector $\\mathbf{v}$, one must calculate $\\frac{\\nabla f \\cdot \\mathbf{v}}{|\\mathbf{v}|}$. The use of interactive graphs allows us to observe how changing the direction vector influences the directional derivative.

\`\`\`interactivegraph
a*cos(t)*x + b*sin(t)*x
params: a=1, b=1, t=0
range: a=-2:2, b=-2:2, t=-3.14:3.14
\`\`\`
The graph above visualizes a family of directional paths (represented as linear functions in the $x$-domain) where $a$ and $b$ act as components of the gradient and $t$ defines the angle of the directional vector $\\mathbf{u} = \\langle \\cos(t), \\sin(t) \\rangle$. By varying $t$, you can observe how the "slope" of the path changes as you rotate the direction of movement.

## How to Solve

To compute the directional derivative $D_{\\mathbf{u}}f$ at a point $(x_0, y_0)$ in the direction of a vector $\\mathbf{v}$, follow these steps:

1.  **Calculate the Gradient:** Compute the partial derivatives $f_x$ and $f_y$. Evaluate them at the point $(x_0, y_0)$ to obtain $\\nabla f(x_0, y_0) = \\langle f_x(x_0, y_0), f_y(x_0, y_0) \\rangle$.
2.  **Normalize the Direction Vector:** Ensure the direction vector $\\mathbf{v}$ is a unit vector. If $\\mathbf{v} = \\langle a, b \\rangle$, calculate the magnitude $|\\mathbf{v}| = \\sqrt{a^2 + b^2}$. Then, define $\\mathbf{u} = \\frac{\\mathbf{v}}{|\\mathbf{v}|} = \\langle \\frac{a}{|\\mathbf{v}|}, \\frac{b}{|\\mathbf{v}|} \\rangle$.
3.  **Compute the Dot Product:** Evaluate $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} = f_x \\cdot u_1 + f_y \\cdot u_2$.

**Example:** Find the directional derivative of $f(x, y) = x^2 + 3y^2$ at the point $(1, 2)$ in the direction of $\\mathbf{v} = \\langle 3, 4 \\rangle$.
*   Step 1: $f_x = 2x$, $f_y = 6y$. At $(1, 2)$, $\\nabla f = \\langle 2, 12 \\rangle$.
*   Step 2: $|\\mathbf{v}| = \\sqrt{3^2 + 4^2} = 5$. Thus, $\\mathbf{u} = \\langle 3/5, 4/5 \\rangle$.
*   Step 3: $D_{\\mathbf{u}}f = \\langle 2, 12 \\rangle \\cdot \\langle 3/5, 4/5 \\rangle = \\frac{6}{5} + \\frac{48}{5} = \\frac{54}{5} = 10.8$.

The following static graph represents the surface of $f(x) = x^2$, which can be used to visualize how the slope (derivative) changes linearly as one moves away from the origin along the $x$-axis.

\`\`\`graph
x^2
\`\`\`

## Summary

The gradient vector $\\nabla f$ and the directional derivative $D_{\\mathbf{u}}f$ are powerful analytical tools that extend the concept of the derivative to multidimensional space. The gradient vector acts as a "compass" pointing toward the direction of steepest ascent, while the directional derivative provides a quantitative measure of change along any chosen path. By utilizing the dot product between the gradient and a unit direction vector, calculus allows us to simplify complex spatial problems into straightforward algebraic calculations. Understanding these concepts is fundamental to mastering multivariable calculus, vector fields, and various computational disciplines such as optimization theory and physical simulation.`;export{e as default};