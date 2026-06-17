var e=`# Lagrange Multipliers

The method of Lagrange multipliers is a powerful strategy in multivariable calculus for finding the local maxima and minima of a function subject to equality constraints. Named after the Italian-French mathematician Joseph-Louis Lagrange, this technique transforms a constrained optimization problem into a system of unconstrained equations, which are often easier to solve using standard calculus methods.

## Definition

Given a scalar objective function $f(x, y, z)$ and a constraint function $g(x, y, z) = c$, the method of Lagrange multipliers identifies potential extrema by introducing an auxiliary variable $\\lambda$ (the Lagrange multiplier). The core requirement is that at the optimal point, the gradient of the objective function must be proportional to the gradient of the constraint function.

Formally, we define the Lagrangian function $\\mathcal{L}$ as:
$$\\mathcal{L}(x, y, z, \\lambda) = f(x, y, z) - \\lambda(g(x, y, z) - c)$$

The critical points of the optimization problem occur where the partial derivatives of $\\mathcal{L}$ with respect to $x, y, z,$ and $\\lambda$ all vanish simultaneously:
$$\\nabla \\mathcal{L} = 0 \\implies \\nabla f = \\lambda \\nabla g$$
$$g(x, y, z) = c$$

This implies that the direction of greatest increase for $f$ must be aligned with the normal vector to the constraint surface $g=c$, as any movement tangent to the surface would result in a change in $f$ unless the gradients are parallel or anti-parallel.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Objective Function | The scalar function $f(\\mathbf{x})$ that we wish to maximize or minimize. |
| Constraint | The condition $g(\\mathbf{x}) = c$ that the variables must satisfy. |
| Lagrange Multiplier | The scalar $\\lambda$ representing the sensitivity of the optimal value to changes in the constraint constant. |
| Lagrangian | The auxiliary function $\\mathcal{L}(\\mathbf{x}, \\lambda) = f(\\mathbf{x}) - \\lambda(g(\\mathbf{x}) - c)$. |
| Gradient Vector | The vector of partial derivatives $\\nabla f = (\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z})$. |
| Level Set | The set of points where the function takes a constant value; constraints are usually level sets of $g$. |

## Purpose

The primary purpose of Lagrange multipliers is to navigate the trade-off between the objective function and the limitations imposed by the system. In many engineering and economic applications, one cannot simply find the global maximum of a function because the variables are bound by physical or financial resource constraints.

For instance, in economics, a firm might wish to maximize utility $U(x, y)$ subject to a budget constraint $p_1x + p_2y = I$. Without the constraint, the function might grow indefinitely; with the constraint, the optimal point is restricted to the budget line. Lagrange multipliers allow us to solve this analytically rather than via trial and error. Furthermore, $\\lambda$ provides a "shadow price" of the constraint, indicating how much the optimal value of $f$ would improve if the constraint $c$ were relaxed by one unit.

## Fundamental Properties

The geometry of Lagrange multipliers is rooted in the alignment of normal vectors. At a constrained maximum, the contour lines of $f$ must be tangent to the level curve of $g$. If they were not tangent, one could move along the constraint curve to reach a higher contour of $f$.

1. **Stationarity:** The gradient condition $\\nabla f = \\lambda \\nabla g$ ensures that the directional derivative of $f$ along the constraint surface is zero.
2. **Sensitivity Analysis:** The multiplier $\\lambda$ has a specific interpretation: $\\frac{df^*}{dc} = \\lambda$, where $f^*$ is the extreme value of the objective function. This makes it invaluable in sensitivity analysis.
3. **Existence:** By the extreme value theorem, if $f$ and $g$ are continuous and the constraint set is compact (closed and bounded), then a global maximum and minimum exist. The method of Lagrange multipliers identifies all candidates for these extrema, including saddle points.
4. **Second-Order Conditions:** To distinguish between a maximum, minimum, or saddle point, one must examine the Bordered Hessian matrix, which includes the second partial derivatives of the Lagrangian.

## Types & Variations

Lagrange multipliers can be extended to accommodate more complex scenarios:

### Multiple Constraints
When multiple constraints $g_1(\\mathbf{x}) = c_1, g_2(\\mathbf{x}) = c_2, \\dots, g_n(\\mathbf{x}) = c_n$ exist, we introduce a multiplier for each:
$$\\mathcal{L} = f - \\sum_{i=1}^n \\lambda_i(g_i - c_i)$$
The condition for optimality becomes $\\nabla f = \\sum_{i=1}^n \\lambda_i \\nabla g_i$.

### Inequality Constraints (KKT Conditions)
If the constraint is an inequality $g(\\mathbf{x}) \\le c$, the problem enters the realm of Karush-Kuhn-Tucker (KKT) conditions. This adds complementary slackness conditions, where either the constraint is active ($g(\\mathbf{x})=c$) or the multiplier $\\lambda$ is zero.

### Constrained Variations
In the calculus of variations, Lagrange multipliers are used to find functions that minimize functionals subject to integral constraints, such as the classic problem of the catenary curve (a hanging chain).

## How to Solve

Solving a Lagrange multiplier problem involves a systematic algebraic procedure. Consider the objective $f(x, y) = x^2 + y^2$ subject to $x + y = 1$.

1. **Construct the Lagrangian:**
   $\\mathcal{L}(x, y, \\lambda) = x^2 + y^2 - \\lambda(x + y - 1)$

2. **Compute Partial Derivatives:**
   $\\frac{\\partial \\mathcal{L}}{\\partial x} = 2x - \\lambda = 0$
   $\\frac{\\partial \\mathcal{L}}{\\partial y} = 2y - \\lambda = 0$
   $\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = -(x + y - 1) = 0$

3. **Solve the System:**
   From the first two equations, $2x = \\lambda$ and $2y = \\lambda$, which implies $x = y$.
   Substituting into the constraint: $x + x = 1 \\implies 2x = 1 \\implies x = 0.5$.
   Consequently, $y = 0.5$ and $\\lambda = 1$.

4. **Interpret:**
   The point $(0.5, 0.5)$ is the candidate for the extremum. Testing other points confirms this is the minimum distance from the origin to the line $x + y = 1$.

To visualize how changing constraints affects the function, we use an interactive graph.

\`\`\`interactivegraph
a*x^2 + y
params: a=1
range: a=-2:2
\`\`\`

In the graph above, we visualize the function $f(x) = ax^2$, where $x$ represents our input variable and $a$ acts as a parameter shifting the steepness of the curve. If we were to apply a constraint, the optimal value would shift as $a$ varies, demonstrating how the solution depends on the parameters of the system.

## Summary

The method of Lagrange multipliers is a cornerstone of mathematical optimization. It effectively maps the relationship between objective gradients and constraint normal vectors, providing a rigorous framework to solve problems where resource scarcity or physical boundaries are present. By converting constrained problems into systems of equations, the technique remains essential across physics, economics, and machine learning. Mastery of this method requires not only algebraic proficiency in solving systems of equations but also an intuitive grasp of how constraints restrict the local topology of scalar fields. Key takeaway: the multiplier $\\lambda$ represents the instantaneous rate of change of the optimal value with respect to the constraint, serving as a vital metric in sensitivity and stability analysis for any constrained optimization model.`;export{e as default};