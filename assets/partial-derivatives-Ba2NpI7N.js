var e=`# Partial Derivatives

Partial derivatives represent a foundational concept in multivariable calculus, serving as the primary tool for analyzing how functions of several variables change as one variable is adjusted while others remain constant. Unlike ordinary derivatives, which measure the instantaneous rate of change of a single-variable function, partial derivatives isolate the influence of individual dimensions within a higher-dimensional space.

## Definition

Let $f(x, y)$ be a function of two variables defined on an open set $D$ in the Euclidean plane. The partial derivative of $f$ with respect to $x$ at a point $(a, b)$ is defined by the limit:
$$f_x(a, b) = \\lim_{h \\to 0} \\frac{f(a+h, b) - f(a, b)}{h}$$
provided this limit exists. Similarly, the partial derivative with respect to $y$ is defined as:
$$f_y(a, b) = \\lim_{k \\to 0} \\frac{f(a, b+k) - f(a, b)}{k}$$
These limits capture the slope of the tangent line to the curve formed by the intersection of the surface $z = f(x, y)$ and the plane $y = b$ (for the $x$-derivative) or $x = a$ (for the $y$-derivative). Geometrically, this means we are "slicing" the surface along a specific axis to reduce the problem to a standard single-variable calculus scenario. If $f$ is a function of $n$ variables $f(x_1, x_2, \\dots, x_n)$, the partial derivative with respect to $x_i$ is obtained by treating all variables $x_j$ where $j \\neq i$ as constants and applying the rules of differentiation.

## Key Terminology

To communicate effectively within the framework of multivariable calculus, one must be familiar with the following nomenclature:

| Term | Definition |
| :--- | :--- |
| Independent Variable | Variables that are not functions of other variables within the given context. |
| Dependent Variable | The variable $z$ or $f$ whose value depends on the inputs $(x, y, \\dots)$. |
| Partial Differential Operator | Symbols like $\\partial$ (curly d) used to denote differentiation. |
| Gradient Vector | A vector field $\\nabla f$ consisting of all first-order partial derivatives. |
| Mixed Partial | A derivative taken with respect to two or more different variables, e.g., $f_{xy}$. |
| Hessian Matrix | A square matrix of second-order partial derivatives, denoted by $H$. |
| Clairaut's Theorem | A theorem stating that mixed partials are equal if they are continuous. |

The notation $\\frac{\\partial f}{\\partial x}$ is universally accepted as the Leibniz notation, while $f_x$ or $D_x f$ represent the subscript and operator notations, respectively.

## Purpose

The primary purpose of partial derivatives is to facilitate the study of surfaces and systems where outputs are contingent upon multiple, often competing, factors. In physical science, partial derivatives allow for the formulation of Partial Differential Equations (PDEs), which describe phenomena such as heat distribution, fluid dynamics, and electromagnetic waves.

In economics, they are utilized to determine "marginal" values. For instance, if a firm produces a product using labor ($L$) and capital ($K$), the partial derivative of the production function $Q(L, K)$ with respect to $L$ provides the marginal product of labor, indicating how much production increases with an incremental addition of labor while holding capital constant. By analyzing these sensitivities, researchers can optimize systems, locate local extrema (maxima and minima) through the Second Derivative Test in multiple dimensions, and approximate complex functions using tangent planes.

## Fundamental Properties

Partial derivatives adhere to the standard linearity and product rules established in single-variable calculus, as differentiation is a linear operator. Specifically:

1. **Linearity:** For constants $a$ and $b$, $\\frac{\\partial}{\\partial x}(af + bg) = a\\frac{\\partial f}{\\partial x} + b\\frac{\\partial g}{\\partial x}$.
2. **Product Rule:** $\\frac{\\partial}{\\partial x}(uv) = u\\frac{\\partial v}{\\partial x} + v\\frac{\\partial u}{\\partial x}$.
3. **Quotient Rule:** $\\frac{\\partial}{\\partial x}(\\frac{u}{v}) = \\frac{v\\frac{\\partial u}{\\partial x} - u\\frac{\\partial v}{\\partial x}}{v^2}$.
4. **Chain Rule:** If $f(x, y)$ and $x = g(t), y = h(t)$, then $\\frac{df}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.

Furthermore, Clairaut's Theorem (or Schwarz's Theorem) is a fundamental property regarding the order of differentiation. If $f_{xy}$ and $f_{yx}$ are continuous on an open disk, then:
$$f_{xy}(x, y) = f_{yx}(x, y)$$
This property simplifies higher-order calculations significantly, as it allows for the choice of the easier path of differentiation.

## Types & Variations

Partial derivatives are categorized by their order and their behavior across dimensions.

**First-Order Partial Derivatives:** These measure the rate of change relative to one variable, effectively calculating the "steepness" of the surface in the direction of the axis of that variable.

**Higher-Order Partial Derivatives:** By differentiating the result of a partial derivative again, one obtains higher-order derivatives. For example, $f_{xx} = \\frac{\\partial^2 f}{\\partial x^2}$ measures the concavity of the surface along the $x$-direction, analogous to the second derivative in single-variable calculus.

**Directional Derivatives:** While partial derivatives only consider directions parallel to the coordinate axes, the directional derivative $D_{\\mathbf{u}}f$ captures the rate of change in an arbitrary unit vector direction $\\mathbf{u} = \\langle a, b \\rangle$:
$$D_{\\mathbf{u}}f(x, y) = \\nabla f \\cdot \\mathbf{u} = f_x a + f_y b$$

## How to Solve

Calculating a partial derivative involves a straightforward reduction strategy. To solve $\\frac{\\partial}{\\partial x} f(x, y)$:

1. **Treat all variables except $x$ as constants.** This includes $y$ and any other variables appearing in the expression.
2. **Apply standard differentiation rules.** Use the Power Rule, Product Rule, Quotient Rule, or Chain Rule as if you were differentiating a standard single-variable function.
3. **Handle constants.** Any additive constant becomes zero, and any multiplicative constant stays in front of the differentiated term.

Consider the function $f(x, y) = x^2 y + \\sin(xy)$.
To find $f_x$:
- Treat $y$ as a constant.
- The derivative of $x^2 y$ is $2xy$.
- The derivative of $\\sin(xy)$ involves the Chain Rule: $\\cos(xy) \\cdot \\frac{\\partial}{\\partial x}(xy) = \\cos(xy) \\cdot y$.
- Result: $f_x = 2xy + y\\cos(xy)$.

To find $f_y$:
- Treat $x$ as a constant.
- The derivative of $x^2 y$ is $x^2$.
- The derivative of $\\sin(xy)$ is $\\cos(xy) \\cdot x$.
- Result: $f_y = x^2 + x\\cos(xy)$.

This process scales to functions of any number of variables. For functions like $f(x, y) = e^{ax}$, the parameters $a$ act as constants during partial differentiation, demonstrating how interactive systems are modeled. Using an interactive approach allows one to observe how changing $a$ affects the steepness of the partial derivative.

\`\`\`interactivegraph
a * \\exp(ax)
params: a=1
range: a=-2:2
\`\`\`
The graph above plots the function $f(x) = a e^{ax}$, demonstrating how varying the parameter $a$ influences the growth rate. The partial derivative with respect to $x$ of this function is $a^2 e^{ax}$, which describes the slope at any point $x$ for a given $a$.

## Summary

Partial derivatives are the fundamental language of multivariable calculus. By isolating variables, they allow us to deconstruct complex, multi-dimensional interactions into manageable, one-dimensional components. Whether used to find the critical points of a mountain range represented as a surface $z = f(x, y)$, or to determine the sensitivity of an economic model to interest rate changes, partial derivatives provide the precision necessary for scientific and engineering rigor. 

Key takeaways include:
- Partial differentiation treats all non-differentiating variables as constants.
- The gradient vector $\\nabla f$ aggregates all first-order partial derivatives to provide information about the direction of steepest ascent.
- Higher-order mixed partials are equal under the condition of continuity (Clairaut's Theorem).
- The chain rule for multivariable functions connects partial derivatives to the total derivative, bridging the gap between coordinate-specific changes and overall system behavior.

Mastery of this topic is essential for advanced mathematics, including vector calculus, differential geometry, and the study of partial differential equations, which govern almost all continuous physical processes in the natural world.`;export{e as default};