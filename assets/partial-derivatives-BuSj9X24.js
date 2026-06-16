var e=`# Partial Derivatives

Partial derivatives represent a fundamental extension of calculus into multidimensional spaces. While single-variable calculus examines how a function changes as a single input variable varies, partial differentiation allows mathematicians and engineers to isolate the rate of change of a multivariable function with respect to one specific variable, while holding all other variables constant. This technique is the cornerstone of vector calculus, physics, and machine learning.

## Definition

Given a function $f(x_1, x_2, \\dots, x_n)$ of $n$ variables, the partial derivative with respect to $x_i$ is defined as the limit of the difference quotient as the increment in $x_i$ approaches zero, while all other variables $x_j$ (where $j \\neq i$) remain fixed. Mathematically, for a function of two variables $f(x, y)$, the partial derivative with respect to $x$ is denoted as $\\frac{\\partial f}{\\partial x}$ or $f_x$ and is defined as:

$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x, y)}{h}$$

Similarly, the partial derivative with respect to $y$ is defined as:

$$\\frac{\\partial f}{\\partial y} = \\lim_{k \\to 0} \\frac{f(x, y+k) - f(x, y)}{k}$$

Geometrically, if we interpret $f(x, y)$ as a surface in three-dimensional space, the partial derivative $\\frac{\\partial f}{\\partial x}$ represents the slope of the tangent line to the surface at a given point $(x_0, y_0)$ in the plane parallel to the $xz$-coordinate plane. By treating $y$ as a constant $y_0$, we effectively slice the surface with the plane $y = y_0$, resulting in a curve in three-dimensional space, and the partial derivative is simply the derivative of this resulting single-variable function.

## Key Terminology

To master partial derivatives, one must be familiar with the following technical vocabulary:

| Term | Definition |
| :--- | :--- |
| Independent Variable | Variables that are treated as inputs ($x, y, z$). |
| Constant | A value that does not change relative to the differentiation variable. |
| Gradient Vector | A vector $\\nabla f$ containing all first-order partial derivatives. |
| Mixed Partial | A derivative taken with respect to two or more different variables. |
| Hessian Matrix | A square matrix of second-order partial derivatives. |
| Total Differential | An expression describing the change in $f$ based on small changes in all variables. |
| Chain Rule | The method for differentiating composite multivariable functions. |

In the context of the gradient vector $\\nabla f(x, y) = \\langle f_x, f_y \\rangle$, it is important to note that the gradient points in the direction of the steepest ascent of the function at a specific point. The magnitude of this vector indicates the rate of that ascent.

## Purpose

The primary utility of partial derivatives lies in their ability to describe "sensitivity." In many real-world systems, an outcome (a dependent variable) depends on multiple influencing factors. For instance, the volume of a gas $V$ is a function of pressure $P$ and temperature $T$ ($V = f(P, T)$). The partial derivative $\\frac{\\partial V}{\\partial P}$ informs us how the volume changes specifically when pressure fluctuates, assuming temperature is held constant.

Beyond simple sensitivity analysis, partial derivatives are essential for:

1. **Optimization:** Identifying local maxima, minima, and saddle points in multivariable landscapes by setting the partial derivatives to zero.
2. **Physics:** Solving partial differential equations (PDEs), such as the Heat Equation, the Wave Equation, or Schrödinger's Equation, which govern fluid dynamics, electromagnetism, and quantum mechanics.
3. **Machine Learning:** Training neural networks via backpropagation involves calculating the partial derivative of a loss function with respect to each individual weight in the network to minimize error.
4. **Economics:** Estimating marginal utility or marginal productivity in models involving multiple resources or consumer goods.

## Fundamental Properties

Partial derivatives obey rules analogous to single-variable derivatives, modified to account for the presence of other variables.

### Linearity
The differentiation operator is linear. For any constants $a$ and $b$:
$$\\frac{\\partial}{\\partial x}(a f + b g) = a \\frac{\\partial f}{\\partial x} + b \\frac{\\partial g}{\\partial x}$$

### Product Rule
$$\\frac{\\partial}{\\partial x}(u(x,y)v(x,y)) = u \\frac{\\partial v}{\\partial x} + v \\frac{\\partial u}{\\partial x}$$

### Quotient Rule
$$\\frac{\\partial}{\\partial x} \\left( \\frac{u}{v} \\right) = \\frac{v \\frac{\\partial u}{\\partial x} - u \\frac{\\partial v}{\\partial x}}{v^2}$$

### Clairaut’s Theorem (Equality of Mixed Partials)
If a function $f$ has continuous second-order partial derivatives on an open set, then the mixed partial derivatives are equal:
$$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$
This property is highly useful for simplifying complex calculations, as it allows for the choice of the easier path of differentiation.

## Types & Variations

### Higher-Order Partial Derivatives
Just as one can differentiate a single-variable function multiple times, one can take higher-order partial derivatives. For a function $f(x, y)$, the second-order partials include:
1. $f_{xx} = \\frac{\\partial}{\\partial x}(\\frac{\\partial f}{\\partial x})$
2. $f_{yy} = \\frac{\\partial}{\\partial y}(\\frac{\\partial f}{\\partial y})$
3. $f_{xy} = \\frac{\\partial}{\\partial y}(\\frac{\\partial f}{\\partial x})$
4. $f_{yx} = \\frac{\\partial}{\\partial x}(\\frac{\\partial f}{\\partial y})$

### The Gradient
The gradient is a vector-valued function representing the direction and magnitude of the steepest increase. For $f(x, y, z)$, the gradient is:
$$\\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle$$

### Directional Derivatives
While partial derivatives measure change along coordinate axes, the directional derivative $D_{\\mathbf{u}}f$ measures the rate of change of $f$ in the direction of an arbitrary unit vector $\\mathbf{u} = \\langle a, b \\rangle$:
$$D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} = \\frac{\\partial f}{\\partial x}a + \\frac{\\partial f}{\\partial y}b$$

## How to Solve

To compute a partial derivative analytically, follow these systematic steps:

1. **Identify the variable of differentiation:** Choose which variable to treat as the active variable and treat all other variables as constants.
2. **Apply standard differentiation rules:** Utilize the Power Rule, Product Rule, Quotient Rule, and Chain Rule as if the other variables were literal constants (like $5$ or $\\pi$).
3. **Notation verification:** Ensure clear labeling of results (e.g., $f_x$ or $\\partial_x f$).

### Illustrative Example
Consider the function $f(x, y) = x^2 y + \\sin(xy)$. To find $f_x$:
- Treat $y$ as a constant.
- Differentiate $x^2 y$ with respect to $x$: $2xy$.
- Differentiate $\\sin(xy)$ with respect to $x$ using the Chain Rule: $\\cos(xy) \\cdot \\frac{\\partial}{\\partial x}(xy) = y \\cos(xy)$.
- Combine: $f_x = 2xy + y \\cos(xy)$.

To find $f_y$:
- Treat $x$ as a constant.
- Differentiate $x^2 y$ with respect to $y$: $x^2$.
- Differentiate $\\sin(xy)$ with respect to $y$ using the Chain Rule: $\\cos(xy) \\cdot \\frac{\\partial}{\\partial y}(xy) = x \\cos(xy)$.
- Combine: $f_y = x^2 + x \\cos(xy)$.

### Visualizing Parametric Sensitivity
The following interactive graph demonstrates how a parameter affects the steepness of a surface slice. By observing $f(x) = x^2 + ax$, we can see how the linear term shifts the minimum of the parabola, reflecting how a partial derivative captures the influence of a secondary parameter on a primary function's behavior.

\`\`\`interactivegraph
x^2 + ax
params: a=0
range: a=-3:3
\`\`\`

The graph above plots $f(x) = x^2 + ax$. By adjusting the slider for $a$, you can observe how the slope at any point $x$ changes because $\\frac{\\partial f}{\\partial x} = 2x + a$. This linear dependence on $a$ illustrates that changing the parameter shifts the derivative function vertically, demonstrating the sensitivity of the slope to the parameter $a$.

## Summary

Partial derivatives are the fundamental tools for analyzing systems where multiple inputs interact to produce a single output. By isolating individual variables, we decompose complex multidimensional behaviors into manageable, one-dimensional slices. Whether calculating the gradient to find the steepest descent in an optimization algorithm or solving wave equations in acoustic modeling, the ability to compute and interpret partial derivatives is indispensable. 

Key takeaways include the importance of the Chain Rule in multivariable contexts, the equality of mixed partials provided by Clairaut’s Theorem, and the conceptual bridge between the gradient vector and directional derivatives. Mastery of these concepts provides the mathematical foundation necessary for advanced fields such as thermodynamics, fluid mechanics, and deep learning, where the behavior of complex systems is understood through the sum of their partial variations.`;export{e as default};